export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  includes: string[];
  seed: string;
  term: string;
  verse?: { text: string; ref: string };
};

export const services: Service[] = [
  {
    id: "islamic-nikah",
    eyebrow: "◆ Service One",
    title: "Islamic Nikah Ceremony",
    seed: "svc-nikah",
    term: "nikah ceremony",
    paragraphs: [
      "A Nikah is a contract and a blessing at the same time. As a qazi, the celebrant opens with the khutbah, reminds both families of the responsibilities they are taking on, and then conducts the Ijab and Qubool — the offer and the acceptance. The bride's consent is sought clearly and without pressure. The Mahr is stated openly, agreed by both sides, and written into the contract so there is no confusion later. The wali and the witnesses are identified before anything is signed.",
      "Witness requirements are explained in plain terms before the day, so no family is caught out. Traditionally this means the wali acting for the bride and two male witnesses, or the equivalent accepted in your madhhab. If your family follows a particular school, or a particular order of du'a, say so at the consultation and it will be followed. Nothing here is a template. The ceremony is prepared for your family, in the language and the style your elders will recognise.",
      "One thing every couple must understand: a Nikah on its own is not a legal marriage in Australia. The Marriage Act 1961 requires a ceremony conducted by an authorised celebrant, with a Notice of Intended Marriage lodged beforehand and two witnesses aged eighteen or over present. Many couples have a Nikah, believe they are married in the eyes of the law, and discover years later that they are not. If you want both, ask about the combined ceremony below.",
    ],
    includes: [
      "Khutbah and du'a conducted by a qazi",
      "Ijab and Qubool, with consent sought clearly from both parties",
      "Mahr agreed, stated and recorded in the contract",
      "Guidance on wali and witness requirements",
      "Nikah nama prepared and signed",
      "Ceremony conducted at your home, venue or masjid",
    ],
    verse: {
      text: "“Marry those among you who are single, and the righteous among your male and female servants.”",
      ref: "Surah An-Nur · 24:32 — [VERIFY WITH CLIENT]",
    },
  },
  {
    id: "nikah-civil",
    eyebrow: "◆ Service Two · Most Chosen",
    title: "Nikah + Legal Civil Marriage",
    seed: "svc-combined",
    term: "wedding signing certificate",
    paragraphs: [
      "This is what most families choose, and it is the reason this practice exists. The Nikah and the legal Australian marriage happen in the same gathering, conducted by the same person, in front of the same guests. There is no second appointment at a registry office and no separate celebrant to book. Your guests see one ceremony. What they do not see is the small legal section woven into it, which takes only a few minutes.",
      "The paperwork runs on a fixed timetable, so start early. A Notice of Intended Marriage must be lodged with your celebrant at least one month and one day before the ceremony date, and it stays valid for up to eighteen months. You will need original identity documents — a birth certificate or passport for each of you — and if either of you has been married before, the divorce order or the death certificate. The forms are completed together at the consultation so nothing is missed.",
      "On the day, the legal wording required by the Marriage Act is read, and you sign three certificates with your two witnesses. Your marriage is then registered with Births, Deaths and Marriages NSW, and you can order your official marriage certificate from them afterwards. That certificate is what banks, Centrelink, Home Affairs and overseas embassies will ask to see. Your Nikah nama sits alongside it, honoured but separate.",
    ],
    includes: [
      "Full Nikah and the legal ceremony in one gathering",
      "NOIM completed and lodged, at least one month and one day prior",
      "Document check — passports, birth certificates, divorce orders",
      "All three legal certificates prepared and signed on the day",
      "Marriage registered with Births, Deaths & Marriages NSW",
      "Guidance on ordering your official marriage certificate",
    ],
  },
  {
    id: "register-existing-nikah",
    eyebrow: "◆ Service Three",
    title: "Registering an Existing Nikah",
    seed: "svc-existing",
    term: "marriage certificate documents",
    paragraphs: [
      "Many couples had their Nikah years ago — here, or in Lebanon, Pakistan, Bangladesh, Fiji or Afghanistan — and never registered the marriage in Australia. Life goes on, and then a visa application, a bank, a school enrolment or a hospital form asks for a marriage certificate, and there is nothing to show. If that is you, this is a common situation and it is fixable. Nobody here will make you feel foolish for leaving it.",
      "Australian law cannot backdate a marriage. What it can do is marry you legally now, from today's date forward. The process is the same as any other couple: a Notice of Intended Marriage lodged at least one month and one day beforehand, original documents sighted, and a short ceremony with two witnesses aged eighteen or over. Your existing Nikah is not repeated or questioned — it stands as it is. This is purely the legal step that was never taken.",
      "The ceremony itself can be as small as you like. Many couples do it with only their two witnesses present, in about fifteen minutes, and tell nobody. Others treat it as a chance to renew their vows in front of family. If your Nikah was conducted overseas and your documents are in another language, accredited translations will be needed, and you will be told exactly which ones before you commit to a date.",
    ],
    includes: [
      "Your existing Nikah respected, never repeated or questioned",
      "NOIM completed and lodged for the legal ceremony",
      "Advice on accredited translations for overseas documents",
      "A short private ceremony, or a full gathering — your choice",
      "Two witnesses aged 18+ and all certificates handled",
      "Marriage registered with Births, Deaths & Marriages NSW",
    ],
  },
  {
    id: "mahr-contract",
    eyebrow: "◆ Service Four",
    title: "Mahr, the Nikah Nama & the Contract",
    seed: "svc-mahr",
    term: "islamic calligraphy gold",
    paragraphs: [
      "The Mahr is a right of the bride, not a formality and not a gift from her family. It is agreed between the two parties, stated openly in front of the witnesses, and written into the Nikah nama. Problems arise when it is discussed vaguely, promised verbally, or left to be settled later. Sitting down before the day and putting the amount, the form and the timing in writing takes twenty minutes and prevents years of difficulty.",
      "Mahr can be prompt, deferred, or partly each. It can be money, gold, property or something else agreed between the two of you. The celebrant will explain the difference between muajjal and muwajjal in plain language, so both families understand what has actually been agreed and when it becomes due. Where the families are negotiating, the role here is to make sure the bride's own view is heard and recorded, because it is her right.",
      "Conditions can also be written into the Nikah contract, where both parties agree to them and they do not contradict the marriage itself. Couples commonly include matters like where they will live, or continuing study or work. These are discussed at the consultation, drafted clearly, and read aloud before signing so that nobody signs something they have not understood. Your Nikah nama is prepared properly and given to you on the day.",
    ],
    includes: [
      "Mahr agreed, stated before witnesses and written down",
      "Prompt and deferred Mahr explained in plain language",
      "The bride's own view sought and recorded",
      "Conditions drafted into the contract where both parties agree",
      "Everything read aloud before anyone signs",
      "Nikah nama prepared and handed to you on the day",
    ],
  },
  {
    id: "pre-marriage-guidance",
    eyebrow: "◆ Service Five",
    title: "Pre-Marriage Guidance",
    seed: "svc-guidance",
    term: "mosque interior light",
    paragraphs: [
      "Before the Nikah, most couples benefit from an unhurried conversation about what marriage actually asks of them. This is not counselling for a problem. It is a session — or two, if you want — covering the rights and responsibilities each spouse takes on in Islam, how households make decisions, how money is handled, and what both families expect once the celebrations are over.",
      "Younger couples often come with very different assumptions about living arrangements, extended family, work and study, and never test them until after the wedding. Talking these through beforehand, with someone outside both families in the room, is far easier than repairing them later. Everything discussed is private and stays between the three of you. Nothing is reported back to either set of parents.",
      "Sessions can be together or separately, in person in Punchbowl or by phone or video if one of you is overseas. Reverts to Islam are very welcome and often find it the most useful part of the whole process, because it is a chance to ask questions without an audience. [CONFIRM WITH CLIENT — whether this is included in the ceremony fee or charged separately.]",
    ],
    includes: [
      "Rights and responsibilities of each spouse in Islam",
      "Honest discussion of money, housing and extended family",
      "Available together or separately, in person or by video",
      "Particularly recommended for reverts to Islam",
      "Completely private — nothing goes back to either family",
      "One or two sessions, at your pace",
    ],
  },
  {
    id: "overseas-couples",
    eyebrow: "◆ Service Six",
    title: "Nikah for Couples Marrying from Overseas",
    seed: "svc-overseas",
    term: "muslim wedding ceremony",
    paragraphs: [
      "When one of you is overseas, or arriving on a visitor visa for the wedding, the timing becomes the hardest part. The Notice of Intended Marriage must reach your celebrant at least one month and one day before the ceremony — and it can be signed and witnessed abroad by an authorised person, such as an Australian consular officer, a notary public or a qualified medical practitioner, then sent ahead. Start this before you book flights, not after.",
      "Documents cause the other delays. Each party needs an original birth certificate or a current passport, and anything not in English needs an accredited translation. If either of you has been married before, the original divorce order or death certificate must be sighted. Overseas certificates can take weeks to obtain and weeks again to translate. Send photographs of what you have at the enquiry stage and you will be told what is missing while there is still time.",
      "What happens after the ceremony matters too. Your Australian marriage certificate from Births, Deaths and Marriages NSW is the document Home Affairs will want for a partner visa application, and some overseas authorities require it to be apostilled before they will recognise it. Advice here is limited to the marriage itself — for visa questions, see a registered migration agent. [CONFIRM WITH CLIENT] Do not book non-refundable flights until your date is confirmed.",
    ],
    includes: [
      "NOIM signed and witnessed overseas, then sent ahead",
      "Early document review so gaps are found in time",
      "Guidance on accredited translations",
      "Ceremony dates planned around arrival and visa timing",
      "Advice on obtaining your official marriage certificate",
      "Honest referral to a migration agent for visa questions",
    ],
  },
  {
    id: "noim",
    eyebrow: "◆ Service Seven",
    title: "NOIM & Documentation Assistance",
    seed: "svc-noim",
    term: "wedding paperwork documents",
    paragraphs: [
      "This one is available on its own, even if someone else is conducting your ceremony. The Notice of Intended Marriage is the form that makes an Australian marriage possible, and it causes more delays than anything else. It must be signed, witnessed by an authorised person and given to your celebrant at least one month and one day before the ceremony. Once lodged it remains valid for eighteen months, so there is no harm in lodging early.",
      "The documents themselves trip people up. Each of you needs an original birth certificate or a current passport — photocopies and photos on a phone are not accepted. If either of you has been married before, the original divorce order or death certificate must be sighted. If a document is in another language, an accredited translation is needed. Overseas documents sometimes take weeks to arrive, which is exactly why this is worth starting early.",
      "The help offered here is practical: going through the form line by line with you, checking that names match across your documents, explaining who can legally witness the NOIM, confirming the witness requirements for the ceremony itself, and telling you honestly when something is going to be a problem. If a document is missing, you will hear about it while there is still time to fix it.",
    ],
    includes: [
      "NOIM completed line by line with you and lodged correctly",
      "Full check of passports, birth certificates and divorce orders",
      "Advice on accredited translations for overseas documents",
      "Explanation of who can legally witness the NOIM",
      "Witness requirements for the ceremony explained",
      "Available as a standalone service",
    ],
  },
];

export const pricing = [
  {
    tier: "Nikah Only",
    price: "[CONFIRM WITH CLIENT]",
    note: "Religious ceremony, no legal registration",
    features: [
      "Khutbah, Ijab and Qubool",
      "Mahr agreed and recorded in the contract",
      "Nikah nama prepared and signed",
      "Consultation before the day",
      "Sydney metropolitan area",
    ],
    featured: false,
  },
  {
    tier: "Nikah + Legal Marriage",
    price: "[CONFIRM WITH CLIENT]",
    note: "The arrangement most families choose",
    features: [
      "Everything in Nikah Only",
      "NOIM completed and lodged",
      "Full document check",
      "Legal ceremony in the same gathering",
      "Registered with BDM NSW",
    ],
    featured: true,
  },
  {
    tier: "Legal Registration Only",
    price: "[CONFIRM WITH CLIENT]",
    note: "For couples whose Nikah has already taken place",
    features: [
      "Your existing Nikah respected as it stands",
      "NOIM completed and lodged",
      "Short ceremony with two witnesses",
      "All legal certificates handled",
      "Registered with BDM NSW",
    ],
    featured: false,
  },
];
