import {
  S as s,
  i as n,
  s as a,
  a3 as t,
  e,
  c as p,
  a as o,
  d as c,
  b as r,
  f as l,
  I as i,
  t as u,
  k,
  j as g,
  g as d,
  n as f,
  m,
  H as $,
  o as h,
  x,
  u as E,
  v,
} from './vendor-54feeb2f.js';
import { D as w } from './index-c7a36b9c.js';
function T(s) {
  let n,
    a = t(s[0]) + '';
  return {
    c() {
      (n = e('section')), this.h();
    },
    l(s) {
      (n = p(s, 'SECTION', { class: !0 })), o(n).forEach(c), this.h();
    },
    h() {
      r(n, 'class', 'end-notes');
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
      s && c(n);
    },
  };
}
function j(s, n, a) {
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
class y extends s {
  constructor(s) {
    super(), n(this, s, j, T, a, { text: 0 });
  }
}
function H(s) {
  let n, a;
  return (
    (n = new y({ props: { text: s[0] } })),
    {
      c() {
        g(n.$$.fragment);
      },
      l(s) {
        m(n.$$.fragment, s);
      },
      m(s, t) {
        h(n, s, t), (a = !0);
      },
      p: i,
      i(s) {
        a || (x(n.$$.fragment, s), (a = !0));
      },
      o(s) {
        E(n.$$.fragment, s), (a = !1);
      },
      d(s) {
        v(n, s);
      },
    }
  );
}
function N(s) {
  let n, a, t, i, T, j, y, N, S, P, I;
  return (
    (P = new w({ props: { $$slots: { default: [H] }, $$scope: { ctx: s } } })),
    {
      c() {
        (n = e('section')),
          (a = e('h2')),
          (t = u(b)),
          (i = k()),
          (T = e('p')),
          (j = u(C)),
          (y = k()),
          (N = e('pre')),
          (S = k()),
          g(P.$$.fragment),
          this.h();
      },
      l(s) {
        n = p(s, 'SECTION', {});
        var e = o(n);
        a = p(e, 'H2', {});
        var r = o(a);
        (t = d(r, b)), r.forEach(c), (i = f(e)), (T = p(e, 'P', {}));
        var l = o(T);
        (j = d(l, C)),
          l.forEach(c),
          e.forEach(c),
          (y = f(s)),
          (N = p(s, 'PRE', { class: !0 })),
          o(N).forEach(c),
          (S = f(s)),
          m(P.$$.fragment, s),
          this.h();
      },
      h() {
        r(N, 'class', 'language-svelte');
      },
      m(s, e) {
        l(s, n, e),
          $(n, a),
          $(a, t),
          $(n, i),
          $(n, T),
          $(T, j),
          l(s, y, e),
          l(s, N, e),
          (N.innerHTML =
            '<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> EndNotes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> markdownText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">### Source\n\nReuters research.\n\n### Credits\n\nPeople.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EndNotes</span> <span class="token attr-name">text="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>markdownText<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>'),
          l(s, S, e),
          h(P, s, e),
          (I = !0);
      },
      p(s, [n]) {
        const a = {};
        2 & n && (a.$$scope = { dirty: n, ctx: s }), P.$set(a);
      },
      i(s) {
        I || (x(P.$$.fragment, s), (I = !0));
      },
      o(s) {
        E(P.$$.fragment, s), (I = !1);
      },
      d(s) {
        s && c(n), s && c(y), s && c(N), s && c(S), v(P, s);
      },
    }
  );
}
const S = {
    title: 'EndNotes',
    description: 'End notes section.',
    slug: 'end-notes',
  },
  { title: b, description: C, slug: P } = S;
function I(s) {
  return ['### Source\n\nReuters research.\n\n### Credits\n\nPeople.'];
}
export default class extends s {
  constructor(s) {
    super(), n(this, s, I, N, a, {});
  }
}
export { S as metadata };