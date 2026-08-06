"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/** Server route that emails the enquiry to the celebrant. */
const FORM_ENDPOINT = "/api/contact";

const ceremonyTypes = [
  "Islamic Nikah",
  "Nikah + Legal Marriage",
  "Registering an existing Nikah",
  "Legal registration only",
  "NOIM / documents help",
  "Pre-marriage guidance",
  "Not sure yet",
];

const sources = ["Google", "WhatsApp", "Referral", "Social Media", "Other"];

type Values = {
  name: string;
  phone: string;
  email: string;
  ceremony: string;
  date: string;
  location: string;
  source: string;
  message: string;
};

const empty: Values = {
  name: "",
  phone: "",
  email: "",
  ceremony: "",
  date: "",
  location: "",
  source: "",
  message: "",
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const digits = values.phone.replace(/[^\d]/g, "");
  if (digits.length < 8) {
    errors.phone = "Please enter a phone number we can call you back on.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.ceremony) {
    errors.ceremony = "Please choose a ceremony type, or select “Not sure yet”.";
  }

  if (values.date) {
    const chosen = new Date(`${values.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosen.getTime())) {
      errors.date = "Please enter the date as a real calendar date.";
    } else if (chosen < today) {
      errors.date = "Please choose a date in the future.";
    }
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please tell us a little about your ceremony.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState<string | null>(null);

  const set = (key: keyof Values) => (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document
        .querySelector<HTMLElement>(`[name="${firstKey}"]`)
        ?.focus({ preventScroll: false });
      return;
    }

    setSending(true);
    setFailed(null);
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setFailed(
          typeof result.error === "string"
            ? result.error
            : "We could not send your enquiry. Please try again.",
        );
        return;
      }

      setSent(true);
    } catch {
      setFailed(
        "We could not reach the server. Please check your connection and try again.",
      );
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="form-done" role="status">
        <p className="eyebrow">◆ Thank You</p>
        <h2>Your enquiry is on its way</h2>
        <p>
          We reply to every enquiry within 24 hours. If your date is close, send
          a WhatsApp message as well and we will answer sooner.
        </p>
        <div className="btn-row" style={{ marginTop: "1.75rem" }}>
          <a
            className="btn btn-gold"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp
          </a>
          <a className="btn btn-outline-dark" href={site.phoneHref}>
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <Field
        id="name"
        label="Full Name"
        error={errors.name}
        input={
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        }
      />

      <Field
        id="phone"
        label="Phone Number"
        error={errors.phone}
        input={
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        }
      />

      <Field
        id="email"
        label="Email Address"
        error={errors.email}
        input={
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        }
      />

      <Field
        id="ceremony"
        label="Ceremony Type"
        error={errors.ceremony}
        input={
          <select
            id="ceremony"
            name="ceremony"
            value={values.ceremony}
            onChange={set("ceremony")}
            aria-invalid={Boolean(errors.ceremony)}
            aria-describedby={errors.ceremony ? "ceremony-error" : undefined}
          >
            <option value="">Please choose</option>
            {ceremonyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        }
      />

      <Field
        id="date"
        label="Preferred Ceremony Date"
        error={errors.date}
        hint="Leave blank if you have not decided."
        input={
          <input
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={set("date")}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "date-error" : "date-hint"}
          />
        }
      />

      <Field
        id="location"
        label="Location or Venue"
        input={
          <input
            id="location"
            name="location"
            type="text"
            value={values.location}
            onChange={set("location")}
            placeholder="Suburb, home, masjid, hall"
          />
        }
      />

      <Field
        id="source"
        label="How Did You Hear About Us?"
        input={
          <select
            id="source"
            name="source"
            value={values.source}
            onChange={set("source")}
          >
            <option value="">Please choose</option>
            {sources.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        }
      />

      <Field
        id="message"
        label="Message"
        error={errors.message}
        input={
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={set("message")}
            placeholder="Tell us about the ceremony you have in mind."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
        }
      />

      {failed && (
        <div role="alert" style={{ marginBottom: "1.25rem" }}>
          <p className="field-error" style={{ marginBottom: "0.5rem" }}>
            {failed}
          </p>
          <p className="form-note" style={{ margin: 0 }}>
            You can also reach us on{" "}
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{" "}
            or at <a href={site.emailHref}>{site.email}</a>.
          </p>
        </div>
      )}

      <button
        type="submit"
        className="btn btn-solid"
        disabled={sending}
        aria-busy={sending}
      >
        {sending ? "Sending…" : "Send Enquiry"}
      </button>

      <p className="form-note" style={{ marginTop: "1.25rem" }}>
        We reply within 24 hours. Your details are used only to answer your
        enquiry.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  input,
  error,
  hint,
}: {
  id: string;
  label: string;
  input: React.ReactNode;
  error?: string;
  hint?: string;
}) {
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {input}
      {error ? (
        <span className="field-error" id={`${id}-error`} role="alert">
          {error}
        </span>
      ) : (
        hint && (
          <span className="form-note" id={`${id}-hint`}>
            {hint}
          </span>
        )
      )}
    </div>
  );
}
