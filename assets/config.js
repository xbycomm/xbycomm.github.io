/*
 * XBYcomm – site configuration
 * ---------------------------------------------------------------
 * All business details and prices live here. Edit this file only;
 * assets/main.js renders everything automatically.
 *
 * PRICING FIELDS
 *   currency          – symbol shown next to every price ("₪").
 *   promo.enabled     – true/false: show or hide the launch-sale banner
 *                       and the struck-through regular prices.
 *   promo.badge       – short label in the banner (e.g. "מבצע השקה").
 *   promo.title       – main banner line (e.g. "עד 50% הנחה ...").
 *   promo.text        – secondary banner line (terms / deadline).
 *   packages[]        – one object per pricing card:
 *       id            – internal id (no spaces).
 *       name          – package title.
 *       tagline       – one-line description under the title.
 *       regularPrice  – full price (number). Shown struck through when
 *                       promo.enabled is true.
 *       salePrice     – launch price (number). The big price on the card.
 *                       When promo.enabled is false, regularPrice is shown.
 *       priceSuffix   – small text after the price (e.g. "חד פעמי").
 *       popular       – true on ONE package to highlight it ("הכי פופולרי").
 *       features[]    – bullet list of what is included.
 *       cta           – button text (opens WhatsApp with the package name).
 *   maintenance[]     – monthly hosting / maintenance plans (empty
 *                       array hides the block): name, price (number per
 *                       month), features[], recommended (true/false),
 *                       note (optional short label).
 *   addons[]          – extra services: name, price (number), prefix
 *                       (e.g. "החל מ-" or ""), suffix (e.g. "לשעה").
 *   priceNote         – fine print under the pricing cards.
 *   vatNote           – VAT line (e.g. "המחירים אינם כוללים מע״מ").
 *                       Shown under the pricing only if not empty.
 *
 * In promo.title you can write {maxDiscount} – it is replaced with the
 * biggest discount % among the packages.
 *
 * Discount % on each card is calculated automatically from
 * regularPrice and salePrice.
 */
window.SITE_CONFIG = {
  brand: "XBYcomm",
  owner: "בני יונה",
  phoneDisplay: "050-408-5443",
  phoneIntl: "+972504085443",
  whatsappNumber: "972504085443",
  whatsappMessage: "היי, אשמח לשמוע על בניית אתר לעסק שלי",
  email: "xbycomm@gmail.com",
  hours: "א׳–ה׳ 09:00–19:00",
  area: "שירות בכל הארץ",

  currency: "₪",

  promo: {
    enabled: true,
    badge: "מבצע השקה",
    title: "חוגגים השקה: עד {maxDiscount}% הנחה על כל החבילות",
    text: "המחירים המיוחדים תקפים למספר מוגבל של לקוחות ראשונים – שריינו מקום עכשיו."
  },

  packages: [
    {
      id: "landing",
      name: "דף נחיתה",
      tagline: "עמוד אחד ממוקד שהופך מבקרים לפניות",
      regularPrice: 1900,
      salePrice: 1490,
      priceSuffix: "חד פעמי",
      popular: false,
      features: [
        "עמוד אחד עד 6 מקטעים",
        "מותאם מובייל",
        "טופס לידים + כפתור WhatsApp",
        "כתיבת טקסטים",
        "חיבור Google Analytics",
        "2 סבבי תיקונים",
        "מסירה תוך שבוע"
      ],
      cta: "אני רוצה דף נחיתה"
    },
    {
      id: "business",
      name: "אתר תדמית",
      tagline: "אתר מלא שמציג את העסק במיטבו",
      regularPrice: 4500,
      salePrice: 3490,
      priceSuffix: "חד פעמי",
      popular: true,
      features: [
        "עד 6 עמודים",
        "עיצוב מותאם למותג",
        "מותאם מובייל",
        "כתיבת תוכן",
        "SEO בסיסי",
        "חיבור לפרופיל העסק בגוגל",
        "טפסים + WhatsApp",
        "3 סבבי תיקונים",
        "מסירה תוך שבועיים"
      ],
      cta: "אני רוצה אתר תדמית"
    },
    {
      id: "store",
      name: "חנות אונליין",
      tagline: "חנות מלאה שמוכרת בשבילכם 24/7",
      regularPrice: 7900,
      salePrice: 5990,
      priceSuffix: "חד פעמי",
      popular: false,
      features: [
        "עד 30 מוצרים כולל תיאורים",
        "סליקה",
        "משלוחים",
        "חיבור לחשבונית ירוקה או דומה",
        "הדרכת ניהול",
        "מסירה תוך 3–4 שבועות"
      ],
      cta: "אני רוצה חנות"
    }
  ],

  maintenance: [
    {
      name: "בסיסי",
      price: 99,
      recommended: false,
      note: "",
      features: ["אחסון", "אבטחה", "גיבויים", "עד 30 דקות שינויים בחודש"]
    },
    {
      name: "פרו",
      price: 249,
      recommended: true,
      note: "מומלץ לחנויות",
      features: ["כל מה שבבסיסי", "עד 2 שעות עדכונים בחודש", "דוח ביצועים חודשי", "עדיפות במענה"]
    }
  ],

  addons: [
    { name: "עמוד נוסף", price: 350, prefix: "", suffix: "" },
    { name: "שעת עבודה", price: 200, prefix: "", suffix: "" },
    { name: "לוגו ומיתוג בסיסי", price: 800, prefix: "החל מ-", suffix: "" }
  ],

  priceNote: "המחירים בשקלים ותקפים לתקופת מבצע ההשקה. מחפשים משהו אחר? נבנה לכם הצעה מותאמת.",
  vatNote: "המחירים סופיים, ללא תוספת מע״מ"
};
