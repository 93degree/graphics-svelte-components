import {
  S as s,
  i as n,
  s as a,
  a3 as t,
  e,
  c as o,
  a as p,
  d as r,
  b as c,
  f as l,
  I as i,
  t as u,
  k,
  j as m,
  g,
  n as d,
  m as h,
  H as f,
  o as $,
  x,
  u as b,
  v as y,
} from './vendor-54feeb2f.js';
import { D as v } from './index-c7a36b9c.js';
function w(s) {
  let n,
    a = t(s[0]) + '';
  return {
    c() {
      (n = e('section')), this.h();
    },
    l(s) {
      (n = o(s, 'SECTION', { class: !0 })), p(n).forEach(r), this.h();
    },
    h() {
      c(n, 'class', 'body-text');
    },
    m(s, t) {
      l(s, n, t), (n.innerHTML = a);
    },
    p(s, [e]) {
      1 & e && a !== (a = t(s[0]) + '') && (n.innerHTML = a);
    },
    i: i,
    o: i,
    d(s) {
      s && r(n);
    },
  };
}
function T(s, n, a) {
  let { text: t } = n;
  if (!t)
    throw new Error(
      '"text" prop must be defined as a string for BodyText components'
    );
  return (
    (s.$$set = (s) => {
      'text' in s && a(0, (t = s.text));
    }),
    [t]
  );
}
class E extends s {
  constructor(s) {
    super(), n(this, s, T, w, a, { text: 0 });
  }
}
function B(s) {
  let n, a;
  return (
    (n = new E({ props: { text: s[0] } })),
    {
      c() {
        m(n.$$.fragment);
      },
      l(s) {
        h(n.$$.fragment, s);
      },
      m(s, t) {
        $(n, s, t), (a = !0);
      },
      p: i,
      i(s) {
        a || (x(n.$$.fragment, s), (a = !0));
      },
      o(s) {
        b(n.$$.fragment, s), (a = !1);
      },
      d(s) {
        y(n, s);
      },
    }
  );
}
function j(s) {
  let n, a, t, i, w, T, E, j, H, M, P;
  return (
    (M = new v({ props: { $$slots: { default: [B] }, $$scope: { ctx: s } } })),
    {
      c() {
        (n = e('section')),
          (a = e('h2')),
          (t = u(I)),
          (i = k()),
          (w = e('p')),
          (T = u(L)),
          (E = k()),
          (j = e('pre')),
          (H = k()),
          m(M.$$.fragment),
          this.h();
      },
      l(s) {
        n = o(s, 'SECTION', {});
        var e = p(n);
        a = o(e, 'H2', {});
        var c = p(a);
        (t = g(c, I)), c.forEach(r), (i = d(e)), (w = o(e, 'P', {}));
        var l = p(w);
        (T = g(l, L)),
          l.forEach(r),
          e.forEach(r),
          (E = d(s)),
          (j = o(s, 'PRE', { class: !0 })),
          p(j).forEach(r),
          (H = d(s)),
          h(M.$$.fragment, s),
          this.h();
      },
      h() {
        c(j, 'class', 'language-svelte');
      },
      m(s, e) {
        l(s, n, e),
          f(n, a),
          f(a, t),
          f(n, i),
          f(n, w),
          f(w, T),
          l(s, E, e),
          l(s, j, e),
          (j.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> BodyText <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> markdownText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bacon ipsum **dolor amet** cow tongue tri-tip.\n  \n  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.\n  \n  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BodyText</span> <span class="token attr-name">text="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>markdownText<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>'),
          l(s, H, e),
          $(M, s, e),
          (P = !0);
      },
      p(s, [n]) {
        const a = {};
        2 & n && (a.$$scope = { dirty: n, ctx: s }), M.$set(a);
      },
      i(s) {
        P || (x(M.$$.fragment, s), (P = !0));
      },
      o(s) {
        b(M.$$.fragment, s), (P = !1);
      },
      d(s) {
        s && r(n), s && r(E), s && r(j), s && r(H), y(M, s);
      },
    }
  );
}
const H = {
    title: 'BodyText',
    description: 'Parse mardown-formatted text.',
    slug: 'body-text',
  },
  { title: I, description: L, slug: M } = H;
function P(s) {
  return [
    'Bacon ipsum **dolor amet** cow tongue tri-tip.\n  \n  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.\n  \n  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.',
  ];
}
export default class extends s {
  constructor(s) {
    super(), n(this, s, P, j, a, {});
  }
}
export { H as metadata };