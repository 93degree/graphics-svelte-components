import {
  S as y,
  i as b,
  s as D,
  e as i,
  t as _,
  k as j,
  c as r,
  a as u,
  g as E,
  d as p,
  n as S,
  b as H,
  f as h,
  H as c,
  I as d,
} from './vendor-d23a7629.js';
function I(x) {
  let s,
    e,
    k,
    g,
    o,
    m,
    l,
    t,
    A = `<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">SEO</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@reuters-graphics/graphics-svelte-components'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SEO</span>
  <span class="token attr-name">seoTitle="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'A title for Google'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">seoDescription="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'A description for Google'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">shareTitle="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'A title for Twitter/Facebook'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">shareDecription="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'A description for Twitter/Facebook'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">shareImgPath="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'images/share.jpg'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">lang="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'en'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
  <span class="token attr-name">hostname="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'graphics.reuters.com'</span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span>
<span class="token punctuation">/></span></span></code>`;
  return {
    c() {
      (s = i('section')),
        (e = i('h2')),
        (k = _(T)),
        (g = j()),
        (o = i('p')),
        (m = _(w)),
        (l = j()),
        (t = i('pre')),
        this.h();
    },
    l(a) {
      s = r(a, 'SECTION', {});
      var n = u(s);
      e = r(n, 'H2', {});
      var f = u(e);
      (k = E(f, T)), f.forEach(p), (g = S(n)), (o = r(n, 'P', {}));
      var v = u(o);
      (m = E(v, w)),
        v.forEach(p),
        n.forEach(p),
        (l = S(a)),
        (t = r(a, 'PRE', { class: !0 }));
      var O = u(t);
      O.forEach(p), this.h();
    },
    h() {
      H(t, 'class', 'language-svelte');
    },
    m(a, n) {
      h(a, s, n),
        c(s, e),
        c(e, k),
        c(s, g),
        c(s, o),
        c(o, m),
        h(a, l, n),
        h(a, t, n),
        (t.innerHTML = A);
    },
    p: d,
    i: d,
    o: d,
    d(a) {
      a && p(s), a && p(l), a && p(t);
    },
  };
}
const P = { title: 'SEO', description: 'Add SEO to the page.', slug: 'seo' },
  { title: T, description: w, slug: F } = P;
class G extends y {
  constructor(s) {
    super();
    b(this, s, null, I, D, {});
  }
}
export { G as default, P as metadata };
