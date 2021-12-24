import {
  M as Y,
  N as ye,
  S as ee,
  i as te,
  s as re,
  e as h,
  O as pe,
  l as B,
  P as be,
  c as g,
  a as j,
  d as c,
  Q as me,
  b as e,
  H as u,
  I as ne,
  R as we,
  T as U,
  D as Te,
  k as V,
  n as W,
  U as Ee,
  f as J,
  E as ke,
  F as Ae,
  G as Ie,
  x as Q,
  u as X,
  V as de,
  J as se,
  K as Se,
  W as Re,
  X as Le,
  t as ae,
  g as ie,
  h as Me,
  j as le,
  m as oe,
  Y as he,
  o as ce,
  v as ue,
  L as je,
} from './vendor-7ea24681.js';
import { a as De, b as $ } from './paths-6758d194.js';
const Z = (n = '') => Y(De, n);
const Ne = '@reuters-graphics/graphics-svelte-components',
  He = '0.1.43',
  Fe = 'module',
  Ge = 'https://reuters-graphics.github.io/graphics-svelte-components',
  Pe = 'https://github.com/reuters-graphics/graphics-svelte-components',
  xe = {
    start: 'svelte-kit dev --open',
    package: 'svelte-kit package && svelte-kit build && npm run build:commit',
    'build:commit':
      'git add . && git commit -m build && git push origin master',
    postinstall: 'husky install',
    release: 'npm run package && npm publish dist',
    postversion:
      'git push origin master && git push origin master --tags && npm run release',
    prepublishOnly: `echo "Did you mean to run 'yarn release'?" && exit 1`,
  },
  Oe = {
    '@reuters-graphics/eslint-config': '^0.0.2',
    '@rollup/plugin-dsv': '^2.0.1',
    '@sveltejs/adapter-static': '1.0.0-next.22',
    '@sveltejs/kit': '1.0.0-next.202',
    autoprefixer: '^10.2.5',
    eslint: '^7.24.0',
    'eslint-plugin-svelte3': '^3.2.0',
    'front-matter': '^4.0.2',
    'fs-extra': '^10.0.0',
    glob: '^7.1.6',
    husky: '>=6',
    'lint-staged': '>=10',
    mdsvex: '^0.9.8',
    micromatch: '^4.0.4',
    'npm-run-all': '^4.1.5',
    prettier: '^2.3.2',
    'prettier-plugin-svelte': '^2.4.0',
    sass: '^1.45.0',
    svelte: '^3.44.0',
    'svelte-preprocess': '^4.10.0',
  },
  Ce = { node: '>= 14.17.0' },
  qe = {
    '@fortawesome/free-brands-svg-icons': '^5.15.4',
    '@fortawesome/free-regular-svg-icons': '^5.15.3',
    '@fortawesome/free-solid-svg-icons': '^5.15.3',
    '@reuters-graphics/style-theme-eisbaer': '^0.3.5',
    '@sveltejs/svelte-scroller': '^2.0.7',
    classnames: '^2.3.1',
    'lodash-es': '^4.17.21',
    'lottie-web': '^5.7.13',
    marked: '^4.0.8',
    'proper-url-join': '^2.1.1',
    'pym.js': '^1.3.2',
    'svelte-fa': '^2.2.0',
    'ua-parser-js': '^0.7.27',
  };
var K = {
  name: Ne,
  version: He,
  type: Fe,
  private: !1,
  homepage: Ge,
  repository: Pe,
  scripts: xe,
  'lint-staged': {
    '*.js': 'eslint --cache --fix',
    '*.{js,css,md,svelte}': 'prettier --write',
  },
  devDependencies: Oe,
  engines: Ce,
  dependencies: qe,
};
const ze = () => {
    const n = ye('__svelte__');
    return {
      page: { subscribe: n.page.subscribe },
      navigating: { subscribe: n.navigating.subscribe },
      get preloading() {
        return (
          console.error(
            'stores.preloading is deprecated; use stores.navigating instead'
          ),
          { subscribe: n.navigating.subscribe }
        );
      },
      session: n.session,
    };
  },
  Ke = {
    subscribe(n) {
      return ze().page.subscribe(n);
    },
  },
  Be = function (n, t, r, s, a, i, v) {
    (n.GoogleAnalyticsObject = a),
      (n[a] =
        n[a] ||
        function () {
          (n[a].q = n[a].q || []).push(arguments);
        }),
      (n[a].l = 1 * new Date()),
      (i = t.createElement(r)),
      (v = t.getElementsByTagName(r)[0]),
      (i.async = 1),
      (i.src = s),
      v.parentNode.insertBefore(i, v);
  };
var Ue = (n, t) => {
  Be(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga'
  ),
    window.ga('create', 'UA-41619329-3', { cookieDomain: 'auto' }),
    window.ga('require', 'linkid', 'linkid.js'),
    window.ga('send', 'pageview', { page: n, title: t }),
    Ve() || We.init({ reportInterval: 30 });
};
function Ve() {
  try {
    return window.self !== window.top;
  } catch {
    return !0;
  }
}
var We = (function () {
    var n = !1,
      t = !1,
      r = !1,
      s = 0,
      a = new Date(),
      i = null,
      v = null,
      p,
      b,
      w,
      y,
      f,
      m,
      k,
      I;
    function S(o) {
      typeof ga == 'function' && (m = !0),
        typeof _gaq != 'undefined' &&
          typeof _gaq.push == 'function' &&
          (k = !0),
        typeof dataLayer != 'undefined' &&
          typeof dataLayer.push == 'function' &&
          (I = !0),
        (o = o || {}),
        (w = parseInt(o.reportInterval, 10) || 5),
        (y = parseInt(o.idleTimeout, 10) || 30),
        typeof o.eventHandler == 'function' && (p = o.eventHandler),
        typeof o.userTimingHandler == 'function' && (b = o.userTimingHandler),
        'nonInteraction' in o &&
        (o.nonInteraction === !1 || o.nonInteraction === 'false')
          ? (f = !1)
          : (f = !0),
        L(document, 'keydown', l),
        L(document, 'click', l),
        L(window, 'mousemove', F(l, 500)),
        L(window, 'scroll', F(l, 500)),
        L(document, 'visibilitychange', N),
        L(document, 'webkitvisibilitychange', N),
        p(0);
    }
    function F(o, _) {
      var R,
        H,
        C,
        D = null,
        z = 0,
        q = function () {
          (z = new Date()), (D = null), (C = o.apply(R, H));
        };
      return function () {
        var A = new Date();
        z || (z = A);
        var d = _ - (A - z);
        return (
          (R = this),
          (H = arguments),
          d <= 0
            ? (clearTimeout(D), (D = null), (z = A), (C = o.apply(R, H)))
            : D || (D = setTimeout(q, d)),
          C
        );
      };
    }
    function L(o, _, R) {
      o.addEventListener
        ? o.addEventListener(_, R, !1)
        : o.attachEvent
        ? o.attachEvent('on' + _, R)
        : (o['on' + _] = R);
    }
    (b = function (o) {
      I
        ? dataLayer.push({
            event: 'RivetedTiming',
            eventCategory: 'Riveted',
            timingVar: 'First Interaction',
            timingValue: o,
          })
        : (m && ga('send', 'timing', 'Riveted', 'First Interaction', o),
          k &&
            _gaq.push([
              '_trackTiming',
              'Riveted',
              'First Interaction',
              o,
              null,
              100,
            ]));
    }),
      (p = function (o) {
        I
          ? dataLayer.push({
              event: 'Riveted',
              eventCategory: 'Riveted',
              eventAction: 'Time Spent',
              eventLabel: o,
              eventValue: w,
              eventNonInteraction: f,
            })
          : (m &&
              ga('send', 'event', 'Riveted', 'Time Spent', o.toString(), w, {
                nonInteraction: f,
              }),
            k &&
              _gaq.push([
                '_trackEvent',
                'Riveted',
                'Time Spent',
                o.toString(),
                w,
                f,
              ]));
      });
    function M() {
      clearTimeout(v), G();
    }
    function N() {
      (document.hidden || document.webkitHidden) && M();
    }
    function x() {
      (s += 1), s > 0 && s % w == 0 && p(s);
    }
    function G() {
      (t = !0), clearTimeout(i);
    }
    function O() {
      M(), (r = !0);
    }
    function T() {
      r = !1;
    }
    function P() {
      (t = !1), clearTimeout(i), (i = setInterval(x, 1e3));
    }
    function E() {
      var o = new Date(),
        _ = o - a;
      (n = !0), b(_), (i = setInterval(x, 1e3));
    }
    function l() {
      r ||
        (n || E(),
        t && P(),
        clearTimeout(v),
        (v = setTimeout(M, y * 1e3 + 100)));
    }
    return { init: S, trigger: l, setIdle: M, on: T, off: O };
  })(),
  Je = () => {
    const n = window.googletag || {};
    (n.cmd = n.cmd || []),
      (function () {
        const t = document.createElement('script');
        (t.async = !0), (t.type = 'text/javascript');
        const r = document.location.protocol === 'https:';
        t.src =
          (r ? 'https:' : 'http:') +
          '//www.googletagservices.com/tag/js/gpt.js';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(t, s);
      })(),
      n.cmd.push(function () {
        n
          .defineSlot(
            '/4735792/reuters_investigates',
            [[300, 250]],
            'div-gpt-ad-1441822201033-0'
          )
          .addService(n.pubads()),
          n.pubads().enableSingleRequest(),
          n.enableServices();
      });
  };
function Ze(n) {
  let t,
    r,
    s,
    a,
    i,
    v,
    p,
    b,
    w,
    y,
    f,
    m,
    k,
    I,
    S,
    F,
    L,
    M,
    N,
    x,
    G,
    O,
    T,
    P,
    E,
    l,
    o,
    _,
    R,
    H =
      '<script type="application/ld+json" \u2702prettier:content\u2702="JyArIEpTT04uc3RyaW5naWZ5KG9yZ0xkSnNvbikgKyAn" \u2702prettier:content\u2702="e30=">{}</script>',
    C,
    D,
    z =
      '<script type="application/ld+json" \u2702prettier:content\u2702="JyArIEpTT04uc3RyaW5naWZ5KGFydGljbGVMZEpzb24pICsgJw==" \u2702prettier:content\u2702="e30=">{}</script>',
    q;
  return (
    (document.title = r = n[0]),
    {
      c() {
        (t = h('html')),
          (s = h('meta')),
          (a = h('link')),
          (i = h('link')),
          (v = h('link')),
          (p = h('link')),
          (b = h('link')),
          (w = h('meta')),
          (y = h('meta')),
          (f = h('meta')),
          (m = h('meta')),
          (k = h('meta')),
          (S = h('meta')),
          (F = h('meta')),
          (L = h('meta')),
          (M = h('meta')),
          (N = h('meta')),
          (G = h('meta')),
          (O = h('meta')),
          (T = h('meta')),
          (E = h('meta')),
          (l = h('meta')),
          (o = h('meta')),
          (_ = h('meta')),
          (R = new pe()),
          (C = B()),
          (D = new pe()),
          (q = B()),
          this.h();
      },
      l(A) {
        const d = be('[data-svelte="svelte-157iplb"]', document.head);
        (t = g(d, 'HTML', { lang: !0 })),
          j(t).forEach(c),
          (s = g(d, 'META', { name: !0, content: !0 })),
          (a = g(d, 'LINK', { rel: !0, href: !0 })),
          (i = g(d, 'LINK', { rel: !0, type: !0, href: !0 })),
          (v = g(d, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (p = g(d, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (b = g(d, 'LINK', { rel: !0, type: !0, href: !0, sizes: !0 })),
          (w = g(d, 'META', { property: !0, content: !0 })),
          (y = g(d, 'META', { property: !0, content: !0 })),
          (f = g(d, 'META', { property: !0, content: !0, itemprop: !0 })),
          (m = g(d, 'META', { property: !0, content: !0, itemprop: !0 })),
          (k = g(d, 'META', { property: !0, content: !0, itemprop: !0 })),
          (S = g(d, 'META', { property: !0, content: !0 })),
          (F = g(d, 'META', { name: !0, content: !0 })),
          (L = g(d, 'META', { name: !0, content: !0 })),
          (M = g(d, 'META', { name: !0, content: !0 })),
          (N = g(d, 'META', { name: !0, content: !0 })),
          (G = g(d, 'META', { name: !0, content: !0 })),
          (O = g(d, 'META', { name: !0, content: !0 })),
          (T = g(d, 'META', { name: !0, content: !0 })),
          (E = g(d, 'META', { property: !0, content: !0 })),
          (l = g(d, 'META', { property: !0, content: !0 })),
          (o = g(d, 'META', { property: !0, content: !0 })),
          (_ = g(d, 'META', { property: !0, content: !0 })),
          (R = me(d)),
          (C = B()),
          (D = me(d)),
          (q = B()),
          d.forEach(c),
          this.h();
      },
      h() {
        e(t, 'lang', n[5]),
          e(s, 'name', 'description'),
          e(s, 'content', n[1]),
          e(a, 'rel', 'canonical'),
          e(a, 'href', n[7]),
          e(i, 'rel', 'shortcut icon'),
          e(i, 'type', 'image/x-icon'),
          e(
            i,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon.ico'
          ),
          e(v, 'rel', 'icon'),
          e(v, 'type', 'image/png'),
          e(
            v,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-16x16.png'
          ),
          e(v, 'sizes', '16x16'),
          e(p, 'rel', 'icon'),
          e(p, 'type', 'image/png'),
          e(
            p,
            'href',
            'https://s1.reutersmedia.net/resources_v2/images/favicon/favicon-32x32.png'
          ),
          e(p, 'sizes', '32x32'),
          e(b, 'rel', 'icon'),
          e(b, 'type', 'image/png'),
          e(
            b,
            'href',
            'https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-96x96.png'
          ),
          e(b, 'sizes', '96x96'),
          e(w, 'property', 'og:url'),
          e(w, 'content', n[7]),
          e(y, 'property', 'og:type'),
          e(y, 'content', 'article'),
          e(f, 'property', 'og:title'),
          e(f, 'content', n[2]),
          e(f, 'itemprop', 'name'),
          e(m, 'property', 'og:description'),
          e(m, 'content', n[3]),
          e(m, 'itemprop', 'description'),
          e(k, 'property', 'og:image'),
          e(k, 'content', (I = Z(n[4]))),
          e(k, 'itemprop', 'image'),
          e(S, 'property', 'og:site_name'),
          e(S, 'content', 'Reuters'),
          e(F, 'name', 'twitter:card'),
          e(F, 'content', 'summary_large_image'),
          e(L, 'name', 'twitter:site'),
          e(L, 'content', '@ReutersGraphics'),
          e(M, 'name', 'twitter:creator'),
          e(M, 'content', '@ReutersGraphics'),
          e(N, 'name', 'twitter:domain'),
          e(N, 'content', (x = `https://${n[6]}`)),
          e(G, 'name', 'twitter:title'),
          e(G, 'content', n[2]),
          e(O, 'name', 'twitter:description'),
          e(O, 'content', n[3]),
          e(T, 'name', 'twitter:image:src'),
          e(T, 'content', (P = Z(n[4]))),
          e(E, 'property', 'fb:app_id'),
          e(E, 'content', '319194411438328'),
          e(l, 'property', 'fb:admins'),
          e(l, 'content', '616167736'),
          e(o, 'property', 'fb:admins'),
          e(o, 'content', '625796953'),
          e(_, 'property', 'fb:admins'),
          e(_, 'content', '571759798'),
          (R.a = C),
          (D.a = q);
      },
      m(A, d) {
        u(document.head, t),
          u(document.head, s),
          u(document.head, a),
          u(document.head, i),
          u(document.head, v),
          u(document.head, p),
          u(document.head, b),
          u(document.head, w),
          u(document.head, y),
          u(document.head, f),
          u(document.head, m),
          u(document.head, k),
          u(document.head, S),
          u(document.head, F),
          u(document.head, L),
          u(document.head, M),
          u(document.head, N),
          u(document.head, G),
          u(document.head, O),
          u(document.head, T),
          u(document.head, E),
          u(document.head, l),
          u(document.head, o),
          u(document.head, _),
          R.m(H, document.head),
          u(document.head, C),
          D.m(z, document.head),
          u(document.head, q);
      },
      p(A, [d]) {
        d & 32 && e(t, 'lang', A[5]),
          d & 1 && r !== (r = A[0]) && (document.title = r),
          d & 2 && e(s, 'content', A[1]),
          d & 4 && e(f, 'content', A[2]),
          d & 8 && e(m, 'content', A[3]),
          d & 16 && I !== (I = Z(A[4])) && e(k, 'content', I),
          d & 64 && x !== (x = `https://${A[6]}`) && e(N, 'content', x),
          d & 4 && e(G, 'content', A[2]),
          d & 8 && e(O, 'content', A[3]),
          d & 16 && P !== (P = Z(A[4])) && e(T, 'content', P);
      },
      i: ne,
      o: ne,
      d(A) {
        c(t),
          c(s),
          c(a),
          c(i),
          c(v),
          c(p),
          c(b),
          c(w),
          c(y),
          c(f),
          c(m),
          c(k),
          c(S),
          c(F),
          c(L),
          c(M),
          c(N),
          c(G),
          c(O),
          c(T),
          c(E),
          c(l),
          c(o),
          c(_),
          c(C),
          A && R.d(),
          c(q),
          A && D.d();
      },
    }
  );
}
function Ye(n, t, r) {
  let s;
  we(n, Ke, (m) => r(8, (s = m)));
  let { seoTitle: a } = t,
    { seoDescription: i } = t,
    { shareTitle: v } = t,
    { shareDescription: p } = t,
    { shareImgPath: b } = t,
    { lang: w = 'en' } = t,
    { hostname: y = 'graphics.reuters.com' } = t;
  const f = U(K, 'homepage')
    ? Y(K.homepage, s.path, { trailingSlash: !0 })
    : U(K, 'reuters.preview')
    ? Y(K.reuters.preview, s.path, { trailingSlash: !0 })
    : s.host
    ? Y('https://' + s.host, s.path, { trailingSlash: !0 })
    : `https://${y}`;
  return (
    window.location.host === 'graphics.reuters.com' && (Ue(f, a), Je()),
    Z(b),
    Z(b),
    new Date().getFullYear(),
    U(K, 'reuters.graphic.published'),
    U(K, 'reuters.graphic.published'),
    U(K, 'reuters.graphic.updated'),
    U(K, 'reuters.graphic.authors', []).map(({ name: m, url: k }) => ({
      '@type': 'Person',
      name: m,
      url: k,
    })),
    (n.$$set = (m) => {
      'seoTitle' in m && r(0, (a = m.seoTitle)),
        'seoDescription' in m && r(1, (i = m.seoDescription)),
        'shareTitle' in m && r(2, (v = m.shareTitle)),
        'shareDescription' in m && r(3, (p = m.shareDescription)),
        'shareImgPath' in m && r(4, (b = m.shareImgPath)),
        'lang' in m && r(5, (w = m.lang)),
        'hostname' in m && r(6, (y = m.hostname));
    }),
    [a, i, v, p, b, w, y, f]
  );
}
class nt extends ee {
  constructor(t) {
    super();
    te(this, t, Ye, Ze, re, {
      seoTitle: 0,
      seoDescription: 1,
      shareTitle: 2,
      shareDescription: 3,
      shareImgPath: 4,
      lang: 5,
      hostname: 6,
    });
  }
}
function Qe(n) {
  let t, r, s, a, i, v, p, b;
  const w = n[1].default,
    y = Te(w, n, n[0], null);
  return {
    c() {
      (t = h('nav')),
        (r = h('div')),
        (s = h('a')),
        (a = h('figure')),
        (i = h('img')),
        (p = V()),
        y && y.c(),
        this.h();
    },
    l(f) {
      t = g(f, 'NAV', { class: !0 });
      var m = j(t);
      r = g(m, 'DIV', { class: !0 });
      var k = j(r);
      s = g(k, 'A', { href: !0 });
      var I = j(s);
      a = g(I, 'FIGURE', { class: !0 });
      var S = j(a);
      (i = g(S, 'IMG', { class: !0, src: !0, alt: !0 })),
        S.forEach(c),
        I.forEach(c),
        k.forEach(c),
        (p = W(m)),
        y && y.l(m),
        m.forEach(c),
        this.h();
    },
    h() {
      e(i, 'class', 'logo reuters-graphics'),
        Ee(
          i.src,
          (v =
            'https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg')
        ) || e(i, 'src', v),
        e(i, 'alt', 'Reuters graphics logo'),
        e(a, 'class', 'navbar-brand'),
        e(s, 'href', `${$}/`),
        e(r, 'class', 'logo-container'),
        e(t, 'class', 'nav svelte-ca3v86');
    },
    m(f, m) {
      J(f, t, m),
        u(t, r),
        u(r, s),
        u(s, a),
        u(a, i),
        u(t, p),
        y && y.m(t, null),
        (b = !0);
    },
    p(f, [m]) {
      y &&
        y.p &&
        (!b || m & 1) &&
        ke(y, w, f, f[0], b ? Ie(w, f[0], m, null) : Ae(f[0]), null);
    },
    i(f) {
      b || (Q(y, f), (b = !0));
    },
    o(f) {
      X(y, f), (b = !1);
    },
    d(f) {
      f && c(t), y && y.d(f);
    },
  };
}
function Xe(n, t, r) {
  let { $$slots: s = {}, $$scope: a } = t;
  return (
    (n.$$set = (i) => {
      '$$scope' in i && r(0, (a = i.$$scope));
    }),
    [a, s]
  );
}
class st extends ee {
  constructor(t) {
    super();
    te(this, t, Xe, Qe, re, {});
  }
}
function ge(n, t, r) {
  const s = n.slice();
  return (s[4] = t[r]), s;
}
function fe(n) {
  let t, r, s;
  return {
    c() {
      (t = h('div')), this.h();
    },
    l(a) {
      t = g(a, 'DIV', { id: !0, class: !0 });
      var i = j(t);
      i.forEach(c), this.h();
    },
    h() {
      e(t, 'id', 'overlay'), e(t, 'class', 'svelte-253v2x');
    },
    m(a, i) {
      J(a, t, i), r || ((s = de(t, 'click', n[2])), (r = !0));
    },
    p: ne,
    d(a) {
      a && c(t), (r = !1), s();
    },
  };
}
function ve(n) {
  let t,
    r,
    s = n[4].title + '',
    a,
    i;
  return {
    c() {
      (t = h('a')), (r = h('li')), (a = ae(s)), this.h();
    },
    l(v) {
      t = g(v, 'A', { href: !0, class: !0 });
      var p = j(t);
      r = g(p, 'LI', { class: !0 });
      var b = j(r);
      (a = ie(b, s)), b.forEach(c), p.forEach(c), this.h();
    },
    h() {
      e(r, 'class', 'svelte-253v2x'),
        e(t, 'href', (i = `${$}/components/${n[4].slug}/`)),
        e(t, 'class', 'svelte-253v2x');
    },
    m(v, p) {
      J(v, t, p), u(t, r), u(r, a);
    },
    p(v, p) {
      p & 1 && s !== (s = v[4].title + '') && Me(a, s),
        p & 1 && i !== (i = `${$}/components/${v[4].slug}/`) && e(t, 'href', i);
    },
    d(v) {
      v && c(t);
    },
  };
}
function _e(n) {
  let t,
    r = n[4].title && n[4].slug && ve(n);
  return {
    c() {
      r && r.c(), (t = B());
    },
    l(s) {
      r && r.l(s), (t = B());
    },
    m(s, a) {
      r && r.m(s, a), J(s, t, a);
    },
    p(s, a) {
      s[4].title && s[4].slug
        ? r
          ? r.p(s, a)
          : ((r = ve(s)), r.c(), r.m(t.parentNode, t))
        : r && (r.d(1), (r = null));
    },
    d(s) {
      r && r.d(s), s && c(t);
    },
  };
}
function $e(n) {
  let t,
    r,
    s,
    a,
    i,
    v,
    p,
    b,
    w,
    y,
    f,
    m,
    k,
    I,
    S,
    F,
    L,
    M,
    N,
    x,
    G,
    O,
    T = n[1] && fe(n);
  (i = new se({ props: { fw: !0, size: 'md', icon: Se.faCog } })),
    (y = new se({ props: { fw: !0, icon: Re.faHome } })),
    (S = new se({ props: { fw: !0, icon: Le.faGithubAlt } }));
  let P = n[0],
    E = [];
  for (let l = 0; l < P.length; l += 1) E[l] = _e(ge(n, P, l));
  return {
    c() {
      T && T.c(),
        (t = V()),
        (r = h('nav')),
        (s = h('div')),
        (a = h('button')),
        le(i.$$.fragment),
        (v = V()),
        (p = h('ul')),
        (b = h('li')),
        (w = h('a')),
        le(y.$$.fragment),
        (f = ae(' Home')),
        (m = V()),
        (k = h('li')),
        (I = h('a')),
        le(S.$$.fragment),
        (F = ae(' Repo')),
        (L = V()),
        (M = h('hr')),
        (N = V());
      for (let l = 0; l < E.length; l += 1) E[l].c();
      this.h();
    },
    l(l) {
      T && T.l(l), (t = W(l)), (r = g(l, 'NAV', { class: !0 }));
      var o = j(r);
      s = g(o, 'DIV', { class: !0 });
      var _ = j(s);
      a = g(_, 'BUTTON', { class: !0 });
      var R = j(a);
      oe(i.$$.fragment, R),
        R.forEach(c),
        (v = W(_)),
        (p = g(_, 'UL', { class: !0 }));
      var H = j(p);
      b = g(H, 'LI', { class: !0 });
      var C = j(b);
      w = g(C, 'A', { href: !0, rel: !0, class: !0 });
      var D = j(w);
      oe(y.$$.fragment, D),
        (f = ie(D, ' Home')),
        D.forEach(c),
        C.forEach(c),
        (m = W(H)),
        (k = g(H, 'LI', { class: !0 }));
      var z = j(k);
      I = g(z, 'A', { href: !0, rel: !0, class: !0 });
      var q = j(I);
      oe(S.$$.fragment, q),
        (F = ie(q, ' Repo')),
        q.forEach(c),
        z.forEach(c),
        (L = W(H)),
        (M = g(H, 'HR', { class: !0 })),
        (N = W(H));
      for (let A = 0; A < E.length; A += 1) E[A].l(H);
      H.forEach(c), _.forEach(c), o.forEach(c), this.h();
    },
    h() {
      e(a, 'class', 'svelte-253v2x'),
        e(w, 'href', `${$}/`),
        e(w, 'rel', 'external'),
        e(w, 'class', 'svelte-253v2x'),
        e(b, 'class', 'stationary svelte-253v2x'),
        e(
          I,
          'href',
          'https://github.com/reuters-graphics/graphics-svelte-components'
        ),
        e(I, 'rel', 'external'),
        e(I, 'class', 'svelte-253v2x'),
        e(k, 'class', 'stationary svelte-253v2x'),
        e(M, 'class', 'svelte-253v2x'),
        e(p, 'class', 'svelte-253v2x'),
        e(s, 'class', 'nav-container svelte-253v2x'),
        e(r, 'class', 'svelte-253v2x'),
        he(r, 'open', n[1]);
    },
    m(l, o) {
      T && T.m(l, o),
        J(l, t, o),
        J(l, r, o),
        u(r, s),
        u(s, a),
        ce(i, a, null),
        u(s, v),
        u(s, p),
        u(p, b),
        u(b, w),
        ce(y, w, null),
        u(w, f),
        u(p, m),
        u(p, k),
        u(k, I),
        ce(S, I, null),
        u(I, F),
        u(p, L),
        u(p, M),
        u(p, N);
      for (let _ = 0; _ < E.length; _ += 1) E[_].m(p, null);
      (x = !0), G || ((O = de(a, 'click', n[3])), (G = !0));
    },
    p(l, [o]) {
      if (
        (l[1]
          ? T
            ? T.p(l, o)
            : ((T = fe(l)), T.c(), T.m(t.parentNode, t))
          : T && (T.d(1), (T = null)),
        o & 1)
      ) {
        P = l[0];
        let _;
        for (_ = 0; _ < P.length; _ += 1) {
          const R = ge(l, P, _);
          E[_] ? E[_].p(R, o) : ((E[_] = _e(R)), E[_].c(), E[_].m(p, null));
        }
        for (; _ < E.length; _ += 1) E[_].d(1);
        E.length = P.length;
      }
      o & 2 && he(r, 'open', l[1]);
    },
    i(l) {
      x ||
        (Q(i.$$.fragment, l),
        Q(y.$$.fragment, l),
        Q(S.$$.fragment, l),
        (x = !0));
    },
    o(l) {
      X(i.$$.fragment, l), X(y.$$.fragment, l), X(S.$$.fragment, l), (x = !1);
    },
    d(l) {
      T && T.d(l),
        l && c(t),
        l && c(r),
        ue(i),
        ue(y),
        ue(S),
        je(E, l),
        (G = !1),
        O();
    },
  };
}
function et(n, t, r) {
  let { components: s = [] } = t,
    a = !1;
  const i = () => {
      r(1, (a = !1));
    },
    v = () => {
      r(1, (a = !a));
    };
  return (
    (n.$$set = (p) => {
      'components' in p && r(0, (s = p.components));
    }),
    [s, a, i, v]
  );
}
class at extends ee {
  constructor(t) {
    super();
    te(this, t, et, $e, re, { components: 0 });
  }
}
var it = [
  {
    title: 'Ai2svelte',
    description: 'A shortcut for ai2svelte graphics.',
    slug: 'ai2svelte',
    path: 'Ai2svelte',
  },
  {
    title: 'BodyText',
    description: 'Parse mardown-formatted text.',
    slug: 'body-text',
    path: 'BodyText',
  },
  {
    title: 'EmbedPreviewerLink',
    description: 'An embed tool for development in graphics-kit.',
    slug: 'embed-previewer-link',
    path: 'EmbedPreviewerLink',
  },
  {
    title: 'EndNotes',
    description: 'End notes section.',
    slug: 'end-notes',
    path: 'EndNotes',
  },
  {
    title: 'Footer',
    description: 'Add a bottom footer bar to the page.',
    slug: 'footer',
    path: 'Footer',
  },
  {
    title: 'Framer',
    description: 'An embed tool for development in the graphics kit.',
    slug: 'framer',
    path: 'Framer',
  },
  {
    title: 'Headline',
    description: 'Titles & bylines & datelines, oh my!',
    slug: 'headline',
    path: 'Headline',
  },
  {
    title: 'Hero',
    description: 'A headline over a hero image',
    slug: 'hero',
    path: 'Hero',
  },
  {
    title: 'Image',
    description: 'A full-width image inside the text well.',
    slug: 'image',
    path: 'Image',
  },
  {
    title: 'LottieScroller',
    description: 'Easy scrolly-telling with lottie',
    slug: 'lottie-scroller',
    path: 'LottieScroller',
  },
  {
    title: 'Nav',
    description: 'Add a top-level nav bar to the page.',
    slug: 'nav',
    path: 'Nav',
  },
  {
    title: 'PymChild',
    description: 'A Pym.js child instance for embeddables.',
    slug: 'pym-child',
    path: 'PymChild',
  },
  {
    title: 'Referrals',
    description: 'Add a referrals bar with recent graphics stories.',
    slug: 'referrals',
    path: 'Referrals',
  },
  {
    title: 'Scroller',
    description: 'Easy scrollytelling with layout options.',
    slug: 'scroller',
    path: 'Scroller',
  },
  {
    title: 'SEO',
    description: 'Add SEO to the page.',
    slug: 'seo',
    path: 'SEO',
  },
  {
    title: 'Sharer',
    description: 'Add share tools to a page.',
    slug: 'sharer',
    path: 'Sharer',
  },
];
export { at as M, st as N, nt as S, it as c, Z as g };
