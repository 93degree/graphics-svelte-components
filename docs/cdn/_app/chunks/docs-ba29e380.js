import {
  S as s,
  i as a,
  s as n,
  e as t,
  t as e,
  k as p,
  c as o,
  a as c,
  g as l,
  d as r,
  n as u,
  b as i,
  f as k,
  F as g,
  G as d,
} from './vendor-edfb1eb4.js';
function m(s) {
  let a, n, m, h, b, v, y, w;
  return {
    c() {
      (a = t('section')),
        (n = t('h2')),
        (m = e(f)),
        (h = p()),
        (b = t('p')),
        (v = e(x)),
        (y = p()),
        (w = t('pre')),
        this.h();
    },
    l(s) {
      a = o(s, 'SECTION', {});
      var t = c(a);
      n = o(t, 'H2', {});
      var e = c(n);
      (m = l(e, f)), e.forEach(r), (h = u(t)), (b = o(t, 'P', {}));
      var p = c(b);
      (v = l(p, x)),
        p.forEach(r),
        t.forEach(r),
        (y = u(s)),
        (w = o(s, 'PRE', { class: !0 })),
        c(w).forEach(r),
        this.h();
    },
    h() {
      i(w, 'class', 'language-svelte');
    },
    m(s, t) {
      k(s, a, t),
        g(a, n),
        g(n, m),
        g(a, h),
        g(a, b),
        g(b, v),
        k(s, y, t),
        k(s, w, t),
        (w.innerHTML =
          '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BodyText <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> markdownText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bacon ipsum **dolor amet** cow tongue tri-tip.\n  \n  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.\n  \n  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BodyText</span> <span class="token attr-name">text="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>markdownText<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>');
    },
    p: d,
    i: d,
    o: d,
    d(s) {
      s && r(a), s && r(y), s && r(w);
    },
  };
}
const h = {
    title: 'BodyText',
    description: 'Parse mardown-formatted text.',
    slug: 'body-text',
  },
  { title: f, description: x, slug: b } = h;
export default class extends s {
  constructor(s) {
    super(), a(this, s, null, m, n, {});
  }
}
export { h as metadata };
