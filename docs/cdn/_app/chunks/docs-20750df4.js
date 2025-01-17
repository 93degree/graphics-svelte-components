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
  G as h,
} from './vendor-edfb1eb4.js';
function d(s) {
  let a, n, d, f, E, S, b, x;
  return {
    c() {
      (a = t('section')),
        (n = t('h2')),
        (d = p(v)),
        (f = e()),
        (E = t('p')),
        (S = p(m)),
        (b = e()),
        (x = t('pre')),
        this.h();
    },
    l(s) {
      a = o(s, 'SECTION', {});
      var t = c(a);
      n = o(t, 'H2', {});
      var p = c(n);
      (d = l(p, v)), p.forEach(r), (f = i(t)), (E = o(t, 'P', {}));
      var e = c(E);
      (S = l(e, m)),
        e.forEach(r),
        t.forEach(r),
        (b = i(s)),
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
        g(n, d),
        g(a, f),
        g(a, E),
        g(E, S),
        k(s, b, t),
        k(s, x, t),
        (x.innerHTML =
          '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Sharer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sharer</span> <span class="token punctuation">/></span></span></code>');
    },
    p: h,
    i: h,
    o: h,
    d(s) {
      s && r(a), s && r(b), s && r(x);
    },
  };
}
const f = {
    title: 'Sharer',
    description: 'Add share tools to a page.',
    slug: 'sharer',
  },
  { title: v, description: m, slug: E } = f;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, d, n, {});
  }
}
export { f as metadata };
