(function () {
  "use strict";
  var C = window.SITE_CONFIG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var cur = C.currency || "₪";
  var fmt = function (n) { return Number(n).toLocaleString("en-US"); };
  var money = function (n) { return '<bdi class="money" dir="ltr"><span class="cur">' + esc(cur) + '</span>' + fmt(n) + '</bdi>'; };
  var waLink = function (msg) { return "https://wa.me/" + (C.whatsappNumber || "") + "?text=" + encodeURIComponent(msg || C.whatsappMessage || ""); };
  var icon = function (id) { return '<svg class="ic" aria-hidden="true"><use href="#' + id + '"/></svg>'; };

  /* contact details */
  if (C.whatsappNumber) $$("[data-wa]").forEach(function (a) { a.href = waLink(); a.target = "_blank"; a.rel = "noopener"; });
  if (C.phoneIntl) $$("[data-tel]").forEach(function (a) { a.href = "tel:" + C.phoneIntl; });
  if (C.phoneDisplay) $$("[data-phone]").forEach(function (e) { e.textContent = C.phoneDisplay; });
  if (C.email) {
    $$("[data-mail]").forEach(function (a) { a.href = "mailto:" + C.email; });
    $$("[data-email]").forEach(function (e) { e.textContent = C.email; });
  }
  if (C.area) $$("[data-area]").forEach(function (e) { e.textContent = C.area; });
  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

  /* pricing */
  var pk = C.packages || [];
  var promoOn = !!(C.promo && C.promo.enabled);
  var pct = function (p) { return p.regularPrice > p.salePrice ? Math.round((1 - p.salePrice / p.regularPrice) * 100) : 0; };
  var maxD = pk.reduce(function (m, p) { return Math.max(m, pct(p)); }, 0);

  var promo = $("#promo");
  if (promo) {
    if (!promoOn) { promo.remove(); $$("[data-promo-short]").forEach(function (e) { e.parentNode && e.parentNode.remove(); }); }
    else {
      $$("[data-promo-badge]").forEach(function (e) { e.textContent = C.promo.badge || e.textContent; });
      $("#promo-title").textContent = String(C.promo.title || "").replace("{maxDiscount}", maxD);
      $("#promo-text").textContent = C.promo.text || "";
      $$("[data-promo-short]").forEach(function (e) { e.textContent = maxD ? "עד " + maxD + "% הנחה" : "מחירים מיוחדים"; });
    }
  }

  var plans = $("#plans");
  if (plans) {
    plans.innerHTML = pk.map(function (p) {
      var price = promoOn ? p.salePrice : p.regularPrice, d = pct(p);
      return '<article class="plan reveal' + (p.popular ? " plan--popular" : "") + '">' +
        (p.popular ? '<span class="plan__flag">הכי פופולרי</span>' : "") +
        '<h3>' + esc(p.name) + '</h3><p class="plan__tag">' + esc(p.tagline) + '</p>' +
        '<div class="plan__price">' +
          (promoOn && d ? '<div class="plan__was"><s aria-label="מחיר רגיל">' + money(p.regularPrice) + '</s><span class="plan__off">' + d + '%-</span></div>' : "") +
          '<div class="plan__now">' + money(price) + '</div>' +
          '<small>' + esc(p.priceSuffix || "") + (promoOn && d ? " · חוסכים " + esc(cur) + fmt(p.regularPrice - p.salePrice) : "") + '</small>' +
        '</div>' +
        '<ul class="plan__list">' + (p.features || []).map(function (f) { return "<li>" + icon("i-check") + "<span>" + esc(f) + "</span></li>"; }).join("") + '</ul>' +
        '<a class="btn ' + (p.popular ? "btn--primary" : "btn--outline") + ' btn--block" target="_blank" rel="noopener" href="' +
          waLink("היי, אשמח לשמוע על חבילת " + p.name + " (" + cur + fmt(price) + ")") + '">' + esc(p.cta || "לפרטים") + '</a>' +
      '</article>';
    }).join("");
  }

  var mt = C.maintenance || [];
  if (mt.length) {
    $("#maint").innerHTML = mt.map(function (m) {
      return '<div class="maint__item' + (m.recommended ? " maint__item--rec" : "") + '">' +
        '<div class="maint__head"><b>' + esc(m.name) + '</b>' + (m.note ? '<span class="maint__note">' + esc(m.note) + '</span>' : "") +
        '<span class="maint__price">' + money(m.price) + ' <small>לחודש</small></span></div>' +
        '<ul>' + (m.features || []).map(function (f) { return "<li>" + icon("i-check") + esc(f) + "</li>"; }).join("") + '</ul></div>';
    }).join("");
  } else { var mb = $("#maint-block"); if (mb) mb.remove(); }

  var ad = C.addons || [];
  if (ad.length) {
    $("#addons").innerHTML = ad.map(function (a) {
      return '<li><span>' + icon("i-plus") + esc(a.name) + '</span><b>' + esc(a.prefix || "") + money(a.price) + (a.suffix ? " " + esc(a.suffix) : "") + '</b></li>';
    }).join("");
  } else { var ab = $("#addons-block"); if (ab) ab.remove(); }

  var pn = $("#price-note"); if (pn) pn.textContent = C.priceNote || "";
  var vn = $("#vat-note"); if (vn && C.vatNote) { vn.textContent = C.vatNote; vn.hidden = false; }

  /* nav */
  var nav = $(".nav"), tg = $(".nav__toggle");
  var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (tg) {
    tg.addEventListener("click", function () {
      var o = nav.classList.toggle("is-open"); tg.setAttribute("aria-expanded", o);
      tg.setAttribute("aria-label", o ? "סגירת תפריט" : "פתיחת תפריט");
    });
    $$("#nav-links a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("is-open"); tg.setAttribute("aria-expanded", "false"); }); });
  }

  /* reveal on scroll */
  var els = $$(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach(function (e) { e.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (e, i) {
      var sib = e.parentNode ? Array.prototype.indexOf.call(e.parentNode.children, e) : 0;
      e.style.transitionDelay = Math.min(sib, 5) * 70 + "ms";
      io.observe(e);
    });
  }
})();
