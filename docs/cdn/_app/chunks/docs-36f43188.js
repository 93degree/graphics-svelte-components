import {
  S as s,
  i as a,
  s as n,
  e as t,
  t as p,
  k as e,
  c as o,
  a as c,
  g as l,
  d as r,
  n as i,
  b as u,
  f as k,
  F as g,
  G as d,
} from './vendor-edfb1eb4.js';
function h(s) {
  let a, n, h, v, E, b, N, x;
  return {
    c() {
      (a = t('section')),
        (n = t('h2')),
        (h = p(f)),
        (v = e()),
        (E = t('p')),
        (b = p(m)),
        (N = e()),
        (x = t('pre')),
        this.h();
    },
    l(s) {
      a = o(s, 'SECTION', {});
      var t = c(a);
      n = o(t, 'H2', {});
      var p = c(n);
      (h = l(p, f)), p.forEach(r), (v = i(t)), (E = o(t, 'P', {}));
      var e = c(E);
      (b = l(e, m)),
        e.forEach(r),
        t.forEach(r),
        (N = i(s)),
        (x = o(s, 'PRE', { class: !0 })),
        c(x).forEach(r),
        this.h();
    },
    h() {
      u(x, 'class', 'language-svelte');
    },
    m(s, t) {
      k(s, a, t),
        g(a, n),
        g(n, h),
        g(a, v),
        g(a, E),
        g(E, b),
        k(s, N, t),
        k(s, x, t),
        (x.innerHTML =
          '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Nav <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nav</span> <span class="token punctuation">/></span></span></code>');
    },
    p: d,
    i: d,
    o: d,
    d(s) {
      s && r(a), s && r(N), s && r(x);
    },
  };
}
const v = {
    title: 'Nav',
    description: 'Add a top-level nav bar to the page.',
    slug: 'nav',
  },
  { title: f, description: m, slug: E } = v;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, h, n, {});
  }
}
export { v as metadata };
