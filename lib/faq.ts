export type FaqGroup = {
  heading: string;
  items: { q: string; a: string[] }[];
};

export const faqGroups: FaqGroup[] = [
  {
    heading: "Legal Requirements",
    items: [
      {
        q: "Is a Nikah alone legally recognised in Australia?",
        a: [
          "No. A Nikah is valid religiously, but on its own it does not make you married under Australian law.",
          "To be legally married you need a civil ceremony conducted by a celebrant authorised under the Marriage Act 1961, with a Notice of Intended Marriage lodged beforehand and two witnesses present. Because your celebrant is both a qazi and a registered celebrant, both can be done in the same gathering.",
        ],
      },
      {
        q: "What is a NOIM and when must it be lodged?",
        a: [
          "The Notice of Intended Marriage is the form that starts the legal process. It must be signed, properly witnessed and given to your celebrant at least one month and one day before your ceremony date.",
          "Once lodged it stays valid for up to eighteen months, so there is no disadvantage in lodging early. Leaving it late is the single most common reason a wedding date has to move.",
        ],
      },
      {
        q: "What documents are needed?",
        a: [
          "Each of you needs an original birth certificate or a current passport. Photocopies and photographs on a phone cannot be accepted.",
          "If either of you has been married before, the original divorce order or the death certificate of the former spouse must also be sighted. Documents in another language need an accredited translation.",
        ],
      },
      {
        q: "How many witnesses are required?",
        a: [
          "Two witnesses, each aged eighteen or over, must be present at the ceremony and sign the certificates. They can be family members or friends.",
          "Islamic witness requirements for the Nikah itself are separate and are explained to you before the day.",
        ],
      },
      {
        q: "Can you marry overseas nationals visiting Australia?",
        a: [
          "In general, a couple can marry in Australia on a visitor visa, provided both parties meet the requirements of the Marriage Act and can produce the required documents.",
          "Visa status, document translation and how the marriage will be recognised in your home country all vary case by case. Please ask before you book flights.",
        ],
      },
    ],
  },
  {
    heading: "The Ceremony",
    items: [
      {
        q: "Can the Nikah and the civil marriage happen in the same ceremony?",
        a: [
          "Yes, and this is the most common arrangement. The Nikah is conducted in full, and the legal wording and signing are woven into the same gathering.",
          "Your guests experience one ceremony. You leave married both religiously and legally, on the same day.",
        ],
      },
      {
        q: "Where can the ceremony take place?",
        a: [
          "At your home, a reception venue, a mosque, a hall, a garden or a park — anywhere across Sydney and greater New South Wales.",
          "If the location has its own rules or a booking process, let us know early and we will work to them.",
        ],
      },
      {
        q: "How long does a ceremony take?",
        a: [
          "A civil ceremony on its own takes about fifteen to twenty minutes.",
          "A Nikah together with the civil ceremony, including the khutbah, usually runs forty-five minutes to an hour. Longer programmes with additional readings or rituals are arranged in advance.",
        ],
      },
      {
        q: "Can we customise the ceremony?",
        a: [
          "Yes. The order of the khutbah, the du'a and any readings is prepared in consultation with you and, where it matters, with your parents.",
          "Certain legal wording must be included in the civil portion and cannot be changed. Everything around it is yours.",
        ],
      },
      {
        q: "What languages are ceremonies conducted in?",
        a: [
          "If you need a particular language for the benefit of your elders, please ask when you enquire.",
        ],
      },
    ],
  },
  {
    heading: "Your Nikah & Islamic Requirements",
    items: [
      {
        q: "What is the Mahr, and when should we agree it?",
        a: [
          "The Mahr is a right of the bride, given by the groom. It is agreed between the two parties, stated openly in front of the witnesses, and written into the Nikah certificate.",
          "Agree it before the day, not on it. Mahr can be prompt, deferred, or partly each, and it can be money, gold or something else you both agree on. Vague verbal promises cause difficulty years later.",
        ],
      },
      {
        q: "Who acts as wali, and who can be a witness?",
        a: [
          "The wali is usually the bride's father or, in his absence, another male guardian from her family. If there is no wali available, discuss it at the consultation — there are recognised arrangements and it is better sorted out early.",
          "For the Nikah, this traditionally means two male witnesses, or the equivalent accepted in your madhhab. Separately, Australian law requires two witnesses aged eighteen or over to sign the legal certificates. The same people can usually do both.",
        ],
      },
      {
        q: "Can the Nikah take place at home rather than at a mosque?",
        a: [
          "Yes. A Nikah is valid wherever it is conducted, provided the conditions are met and the witnesses are present.",
          "Homes, halls, gardens and mosques across Sydney are all common. Many families prefer the lounge room with twenty people to a large hall.",
        ],
      },
      {
        q: "We had our Nikah overseas years ago. Are we married in Australia?",
        a: [
          "Not automatically. Some overseas marriages are recognised here, but a religious Nikah with no civil registration usually is not.",
          "Australian law cannot backdate a marriage. What it can do is marry you legally from today forward, in a short ceremony, without repeating or questioning your Nikah. This is common and straightforward.",
        ],
      },
      {
        q: "I have recently reverted to Islam. Is that a problem?",
        a: [
          "Not at all. Reverts are very welcome, and the pre-marriage session is often the most useful part of the process — a chance to ask questions without an audience.",
          "If there are specific questions about your circumstances or your family's situation, raise them at the consultation.",
        ],
      },
    ],
  },
  {
    heading: "Bookings & Fees",
    items: [
      {
        q: "How far in advance should we book?",
        a: [
          "As early as you can. The legal minimum is one month and one day before the ceremony, for the NOIM.",
          "Popular dates — especially weekends in spring and autumn — fill quickly, so booking several months ahead is safer.",
        ],
      },
      {
        q: "How do we get a quote?",
        a: [
          "Send a message on WhatsApp or fill in the enquiry form. Include your ceremony date, the type of ceremony and the suburb or venue.",
          "You will have a written quote back within 24 hours.",
        ],
      },
      {
        q: "What is your service area?",
        a: [
          "Sydney and all of New South Wales. The practice is based in Punchbowl.",
          "A travel fee may apply for regional locations. If it does, you will be told the amount before you book.",
        ],
      },
      {
        q: "What is included in the fee?",
        a: [
          "The exact inclusions are confirmed in writing before booking, based on the ceremony type, date and location.",
        ],
      },
      {
        q: "How do we pay?",
        a: [
          "Payment arrangements are confirmed during enquiry before booking.",
        ],
      },
    ],
  },
];
