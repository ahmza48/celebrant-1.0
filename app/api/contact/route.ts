import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer needs Node APIs, so this route cannot run on the Edge runtime.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  ceremony?: unknown;
  date?: unknown;
  location?: unknown;
  source?: unknown;
  message?: unknown;
};

/** Fields shown in the email, in the order the celebrant wants to read them. */
const ROWS: { key: keyof Payload; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email" },
  { key: "ceremony", label: "Ceremony type" },
  { key: "date", label: "Preferred date" },
  { key: "location", label: "Location or venue" },
  { key: "source", label: "Heard about us via" },
  { key: "message", label: "Message" },
];

const MAX_LENGTH = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Trim and cap an incoming value; anything not a string becomes "". */
function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "";
}

/** Escape before interpolating into the email HTML. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strip CR/LF so a submitted value cannot inject extra mail headers. */
function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function buildHtml(values: Record<string, string>): string {
  const rows = ROWS.map(({ key, label }) => {
    const raw = values[key as string] || "—";
    const cell = escapeHtml(raw).replace(/\n/g, "<br>");
    return `
      <tr>
        <th align="left" style="padding:10px 14px;border:1px solid #ddd8ce;background:#f2ede3;font:500 13px/1.5 Arial,sans-serif;color:#1a1a1a;white-space:nowrap;vertical-align:top;">${label}</th>
        <td style="padding:10px 14px;border:1px solid #ddd8ce;font:400 14px/1.7 Arial,sans-serif;color:#1a1a1a;">${cell}</td>
      </tr>`;
  }).join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#faf8f3;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;">
      <tr>
        <td style="padding-bottom:16px;font:400 20px/1.3 Georgia,serif;color:#1b3a30;">
          New enquiry from the website
        </td>
      </tr>
      <tr>
        <td>
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
            ${rows}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding-top:16px;font:400 12px/1.6 Arial,sans-serif;color:#7a8c84;">
          Reply directly to this email to answer ${escapeHtml(values.name || "the enquirer")}.
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildText(values: Record<string, string>): string {
  return ROWS.map(
    ({ key, label }) => `${label}: ${values[key as string] || "—"}`,
  ).join("\n");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Could not read the submitted form." },
      { status: 400 },
    );
  }

  const values: Record<string, string> = {};
  for (const { key } of ROWS) values[key as string] = clean(body[key]);

  // The three fields the celebrant cannot act on an enquiry without.
  if (!values.name || !values.email || !values.message) {
    return NextResponse.json(
      { error: "Please provide your name, email address and a message." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(values.email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.RECIPIENT_EMAIL;

  if (!user || !pass || !recipient) {
    // Misconfiguration is ours, not the visitor's — log it, stay vague publicly.
    console.error(
      "Contact form: missing GMAIL_USER, GMAIL_APP_PASSWORD or RECIPIENT_EMAIL.",
    );
    return NextResponse.json(
      { error: "The enquiry form is not available right now." },
      { status: 500 },
    );
  }

  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transport.sendMail({
      // Gmail rewrites From to the authenticated account, so send as ourselves
      // and put the visitor on Reply-To.
      from: `"Qazi Marriage Celebrant" <${user}>`,
      to: recipient,
      replyTo: `"${headerSafe(values.name).replace(/"/g, "")}" <${headerSafe(values.email)}>`,
      subject: `Ceremony enquiry — ${headerSafe(values.name)}`,
      text: buildText(values),
      html: buildHtml(values),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form: failed to send enquiry.", error);
    return NextResponse.json(
      { error: "We could not send your enquiry. Please try again." },
      { status: 502 },
    );
  }
}
