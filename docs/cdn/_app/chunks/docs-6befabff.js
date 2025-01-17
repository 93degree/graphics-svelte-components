import {
  S as s,
  i as a,
  s as n,
  e as t,
  t as o,
  k as p,
  c as e,
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
  let a, n, h, f, E, b, F, x;
  return {
    c() {
      (a = t('section')),
        (n = t('h2')),
        (h = o(v)),
        (f = p()),
        (E = t('p')),
        (b = o(m)),
        (F = p()),
        (x = t('pre')),
        this.h();
    },
    l(s) {
      a = e(s, 'SECTION', {});
      var t = c(a);
      n = e(t, 'H2', {});
      var o = c(n);
      (h = l(o, v)), o.forEach(r), (f = i(t)), (E = e(t, 'P', {}));
      var p = c(E);
      (b = l(p, m)),
        p.forEach(r),
        t.forEach(r),
        (F = i(s)),
        (x = e(s, 'PRE', { class: !0 })),
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
        g(a, f),
        g(a, E),
        g(E, b),
        k(s, F, t),
        k(s, x, t),
        (x.innerHTML =
          '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Footer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/></span></span></code>');
    },
    p: d,
    i: d,
    o: d,
    d(s) {
      s && r(a), s && r(F), s && r(x);
    },
  };
}
const f = {
    title: 'Footer',
    description: 'Add a bottom footer bar to the page.',
    slug: 'footer',
  },
  { title: v, description: m, slug: E } = f;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, h, n, {});
  }
}
export { f as metadata };
