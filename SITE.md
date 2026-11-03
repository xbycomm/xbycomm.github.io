# SITE.md — XBYcomm
> מסמך המשכיות לעיצוב ופיתוח. עודכן: 2026-11-03

## עסק וקהל
- XBYcomm היא חברת עיצוב ובניית אתרים של בני יונה. נותנת שירות בכל הארץ, א׳–ה׳ 09:00–19:00.
- הקהל: עסקים קטנים ובינוניים ועצמאים שצריכים דף נחיתה או אתר תדמית.
- המטרה: לידים ב-WhatsApp (050-408-5443) ובמייל (xbycomm@gmail.com).
- בני הוא **עוסק פטור**, ולכן המחירים סופיים ולא מתווסף להם מע״מ.
- Live: https://xbycomm.github.io/ · Repo: `xbycomm/xbycomm.github.io` (branch `main`)

## טון
ישיר, בטוח ומכוון תוצאה. הניסוחים קצרים ושיווקיים ומדברים על ערך עסקי. דוגמאות: "אתר שעובד בשביל העסק שלך.", "אתר טוב הוא לא עוד הוצאה. הוא העובד הכי חרוץ שלכם.", "מחיר ברור. תוצאה מקצועית."

## סגנון ויזואלי
- **פלטה** (`assets/style.css` `:root`):
  - ink `#0B1026`, ink-2 `#141B3A`, text `#2A3150`, muted `#5D6580`, line `#E6E8F0`
  - bg `#FFFFFF`, bg-soft `#F6F7FB`
  - accent `#4F46E5` (indigo), accent-2 `#06B6D4` (cyan)
  - `--grad: linear-gradient(120deg,#4F46E5,#2F6FEA 50%,#06B6D4)`
  - wa `#25D366`
- **פונטים:** תצוגה ב-`Rubik` (500–700), גוף ב-`Heebo` (300–800). שניהם מ-Google Fonts.
- **Radius / Shadow:** `--radius:20px`, `--shadow:0 1px 2px rgba(11,16,38,.04),0 12px 32px -12px rgba(11,16,38,.14)`.
- **אווירה:** SaaS מודרני ונקי: הרבה לבן, גרדיאנט indigo→cyan, ומקטע כהה (`.section--dark`) עם glow רדיאלי.
- **תיק עבודות:** צילומי מסך של Top Optica (`work-topoptica-desktop.jpg` ו-`-mobile.jpg`).
- **כפתורים:** `.btn--primary`, `--ghost`, `--outline`, `--outline-light`.
- **אנימציות:** keyframes `pulse`, `bob`, `ring` (טבעת סביב כפתור ה-WhatsApp), ו-`.reveal` בגלילה.
- **לוגו:** `logo.svg`, `logo-white.svg`, `mark.svg`, `logo.png`. שאר הנכסים: `og.png`, `icon-512.png`, `apple-touch-icon.png`.

## מבנה העמוד (index.html)
1. `header.nav`
2. `hero`: "אתר שעובד בשביל העסק שלך."
3. `#services`: 5 כרטיסי שירות (אין חנות)
4. `#why` (section--tint)
5. `#process`: ארבעה צעדים
6. `#pricing` (section--dark): באנר מבצע, 2 חבילות בגריד של 2 עמודות (max-width 860px), תחזוקה, תוספות ו-vatNote
7. `#work`: תיק עבודות
8. `#faq` (section--tint)
9. `#contact`
10. `footer.footer`

## config.js (`window.SITE_CONFIG`)
`assets/main.js` מרנדר את כל המחירים והפרטים מתוך הקובץ הזה.
- **פרטי עסק:** `brand`, `owner`, `phoneDisplay`, `phoneIntl`, `whatsappNumber`, `whatsappMessage`, `email`, `hours`, `area`, `currency`
- **`promo{enabled,badge,title,text}`:** ב-title, `{maxDiscount}` מוחלף אוטומטית. כרגע הערך "עד 22% הנחה".
- **`packages[]`:**
  - שדות: `{id,name,tagline,regularPrice,salePrice,priceSuffix,popular,features[],cta}`
  - `landing`: 1,900 → **1,490**
  - `business`: 4,500 → **3,490** (popular)
  - חבילת החנות הוסרה.
- **`maintenance[]`:** `{name,price,features[],recommended,note}`. ה-note של pro ריק.
- **`addons[]`:** `{name,price,prefix,suffix}`
- **`priceNote`**
- **`vatNote`:** "המחירים סופיים, ללא תוספת מע״מ"

## Deploy
- GitHub Pages מ-`main`, בהעלאה דרך ממשק הווב של GitHub (`/upload/main`, `/upload/main/assets`), בחשבון xbycomm.
- לפני כל העלאה: גיבוי ל-`/workspace/backups-xbycomm-*`.
- אחרי ההעלאה: לחכות שה-Actions run יסתיים, ואז להשוות md5 מול האתר החי (עם cache-buster).
- לפני שמנסים להעלות שוב, לבדוק את ה-commits. כבר נוצר פעם commit כפול וריק (`9cdd91d`).

## פריטים פתוחים
- [ ] להוסיף את האתר ל-Google Search Console. הוצע לבני ועדיין אין תשובה.
- [ ] בבנייה: אתר חדש עם חנות על בסיס https://mytor.co.il/p/vkyDS (פרויקט נפרד שיקבל SITE.md משלו).
- [ ] אם האתר החדש ייכנס לתיק העבודות, להוסיף אותו ל-`#work`.

## Changelog (שוחזר)
- **2026-11-02:**
  - נבנה האתר, נפתחו חשבון GitHub ו-repo, ונקבעו מחירים ו-vatNote. האתר עלה לאוויר (commits `65214bc`, `348cb0e`).
  - גיבוי: backups-xbycomm-20261102-2135.
- **2026-11-02/03:**
  - הוסרה חבילת החנות ונמחקה כל אזכור של חנות/חנויות מ-title, meta, OG, JSON-LD, FAQ ו-footer. עודכנו המחירים ל-1,490 ו-3,490.
  - הגריד של התמחור עבר ל-2 עמודות (commits `0d71830`, `b27db6a`). כל השינויים אומתו באתר החי.
- **2026-11-03:** נוצר מסמך SITE.md (קיים רק מקומית).
