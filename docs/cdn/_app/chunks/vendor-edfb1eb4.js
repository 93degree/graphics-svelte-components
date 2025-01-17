var e = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  r = (t, n, i) =>
    n in t
      ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[n] = i),
  s = (e, s) => {
    for (var u in s || (s = {})) n.call(s, u) && r(e, u, s[u]);
    if (t) for (var u of t(s)) i.call(s, u) && r(e, u, s[u]);
    return e;
  };
function u() {}
function o(e, t) {
  for (const n in t) e[n] = t[n];
  return e;
}
function a(e) {
  return e();
}
function l() {
  return Object.create(null);
}
function c(e) {
  e.forEach(a);
}
function h(e) {
  return 'function' == typeof e;
}
function p(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && 'object' == typeof e) || 'function' == typeof e;
}
function d(e, t, n) {
  e.$$.on_destroy.push(
    (function (e, ...t) {
      if (null == e) return u;
      const n = e.subscribe(...t);
      return n.unsubscribe ? () => n.unsubscribe() : n;
    })(t, n)
  );
}
function f(e, t, n, i) {
  if (e) {
    const r = g(e, t, n, i);
    return e[0](r);
  }
}
function g(e, t, n, i) {
  return e[1] && i ? o(n.ctx.slice(), e[1](i(t))) : n.ctx;
}
function D(e, t, n, i, r, s, u) {
  const o = (function (e, t, n, i) {
    if (e[2] && i) {
      const r = e[2](i(n));
      if (void 0 === t.dirty) return r;
      if ('object' == typeof r) {
        const e = [],
          n = Math.max(t.dirty.length, r.length);
        for (let i = 0; i < n; i += 1) e[i] = t.dirty[i] | r[i];
        return e;
      }
      return t.dirty | r;
    }
    return t.dirty;
  })(t, i, r, s);
  if (o) {
    const r = g(t, n, i, u);
    e.p(r, o);
  }
}
let m,
  b = !1;
function w(e, t, n, i) {
  for (; e < t; ) {
    const r = e + ((t - e) >> 1);
    n(r) <= i ? (e = r + 1) : (t = r);
  }
  return e;
}
function v(e, t) {
  b
    ? (!(function (e) {
        if (e.hydrate_init) return;
        e.hydrate_init = !0;
        const t = e.childNodes,
          n = new Int32Array(t.length + 1),
          i = new Int32Array(t.length);
        n[0] = -1;
        let r = 0;
        for (let a = 0; a < t.length; a++) {
          const e =
            w(1, r + 1, (e) => t[n[e]].claim_order, t[a].claim_order) - 1;
          i[a] = n[e] + 1;
          const s = e + 1;
          (n[s] = a), (r = Math.max(s, r));
        }
        const s = [],
          u = [];
        let o = t.length - 1;
        for (let a = n[r] + 1; 0 != a; a = i[a - 1]) {
          for (s.push(t[a - 1]); o >= a; o--) u.push(t[o]);
          o--;
        }
        for (; o >= 0; o--) u.push(t[o]);
        s.reverse(), u.sort((e, t) => e.claim_order - t.claim_order);
        for (let a = 0, l = 0; a < u.length; a++) {
          for (; l < s.length && u[a].claim_order >= s[l].claim_order; ) l++;
          const t = l < s.length ? s[l] : null;
          e.insertBefore(u[a], t);
        }
      })(e),
      (void 0 === e.actual_end_child ||
        (null !== e.actual_end_child &&
          e.actual_end_child.parentElement !== e)) &&
        (e.actual_end_child = e.firstChild),
      t !== e.actual_end_child
        ? e.insertBefore(t, e.actual_end_child)
        : (e.actual_end_child = t.nextSibling))
    : t.parentNode !== e && e.appendChild(t);
}
function A(e, t, n) {
  b && !n
    ? v(e, t)
    : (t.parentNode !== e || (n && t.nextSibling !== n)) &&
      e.insertBefore(t, n || null);
}
function x(e) {
  e.parentNode.removeChild(e);
}
function k(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function F(e) {
  return document.createElement(e);
}
function y(e) {
  return document.createElementNS('http://www.w3.org/2000/svg', e);
}
function C(e) {
  return document.createTextNode(e);
}
function E() {
  return C(' ');
}
function _() {
  return C('');
}
function B(e, t, n) {
  null == n
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function $(e) {
  return Array.from(e.childNodes);
}
function S(e, t, n, i, r = !1) {
  void 0 === e.claim_info &&
    (e.claim_info = { last_index: 0, total_claimed: 0 });
  const s = (() => {
    for (let i = e.claim_info.last_index; i < e.length; i++) {
      const s = e[i];
      if (t(s))
        return n(s), e.splice(i, 1), r || (e.claim_info.last_index = i), s;
    }
    for (let i = e.claim_info.last_index - 1; i >= 0; i--) {
      const s = e[i];
      if (t(s))
        return (
          n(s),
          e.splice(i, 1),
          r ? e.claim_info.last_index-- : (e.claim_info.last_index = i),
          s
        );
    }
    return i();
  })();
  return (
    (s.claim_order = e.claim_info.total_claimed),
    (e.claim_info.total_claimed += 1),
    s
  );
}
function z(e, t, n, i) {
  return S(
    e,
    (e) => e.nodeName === t,
    (e) => {
      const t = [];
      for (let i = 0; i < e.attributes.length; i++) {
        const r = e.attributes[i];
        n[r.name] || t.push(r.name);
      }
      t.forEach((t) => e.removeAttribute(t));
    },
    () => (i ? y(t) : F(t))
  );
}
function T(e, t) {
  return S(
    e,
    (e) => 3 === e.nodeType,
    (e) => {
      e.data = '' + t;
    },
    () => C(t),
    !0
  );
}
function O(e) {
  return T(e, ' ');
}
function I(e, t, n) {
  for (let i = n; i < e.length; i += 1) {
    const n = e[i];
    if (8 === n.nodeType && n.textContent.trim() === t) return i;
  }
  return e.length;
}
function j(e) {
  const t = I(e, 'HTML_TAG_START', 0),
    n = I(e, 'HTML_TAG_END', t);
  if (t === n) return new M();
  const i = e.splice(t, n + 1);
  return x(i[0]), x(i[i.length - 1]), new M(i.slice(1, i.length - 1));
}
function R(e, t) {
  (t = '' + t), e.wholeText !== t && (e.data = t);
}
function N(e, t = document.body) {
  return Array.from(t.querySelectorAll(e));
}
class M {
  constructor(e) {
    (this.e = this.n = null), (this.l = e);
  }
  m(e, t, n = null) {
    this.e ||
      ((this.e = F(t.nodeName)),
      (this.t = t),
      this.l ? (this.n = this.l) : this.h(e)),
      this.i(n);
  }
  h(e) {
    (this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
  }
  i(e) {
    for (let t = 0; t < this.n.length; t += 1) A(this.t, this.n[t], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(x);
  }
}
function P(e) {
  m = e;
}
function q() {
  if (!m) throw new Error('Function called outside component initialization');
  return m;
}
function U(e) {
  q().$$.on_mount.push(e);
}
function L(e) {
  q().$$.after_update.push(e);
}
function H(e, t) {
  q().$$.context.set(e, t);
}
function Z(e) {
  return q().$$.context.get(e);
}
const W = [],
  V = [],
  G = [],
  Y = [],
  X = Promise.resolve();
let J = !1;
function K(e) {
  G.push(e);
}
let Q = !1;
const ee = new Set();
function te() {
  if (!Q) {
    Q = !0;
    do {
      for (let e = 0; e < W.length; e += 1) {
        const t = W[e];
        P(t), ne(t.$$);
      }
      for (P(null), W.length = 0; V.length; ) V.pop()();
      for (let e = 0; e < G.length; e += 1) {
        const t = G[e];
        ee.has(t) || (ee.add(t), t());
      }
      G.length = 0;
    } while (W.length);
    for (; Y.length; ) Y.pop()();
    (J = !1), (Q = !1), ee.clear();
  }
}
function ne(e) {
  if (null !== e.fragment) {
    e.update(), c(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(K);
  }
}
const ie = new Set();
let re;
function se() {
  re = { r: 0, c: [], p: re };
}
function ue() {
  re.r || c(re.c), (re = re.p);
}
function oe(e, t) {
  e && e.i && (ie.delete(e), e.i(t));
}
function ae(e, t, n, i) {
  if (e && e.o) {
    if (ie.has(e)) return;
    ie.add(e),
      re.c.push(() => {
        ie.delete(e), i && (n && e.d(1), i());
      }),
      e.o(t);
  }
}
function le(e, t) {
  const n = {},
    i = {},
    r = { $$scope: 1 };
  let s = e.length;
  for (; s--; ) {
    const u = e[s],
      o = t[s];
    if (o) {
      for (const e in u) e in o || (i[e] = 1);
      for (const e in o) r[e] || ((n[e] = o[e]), (r[e] = 1));
      e[s] = o;
    } else for (const e in u) r[e] = 1;
  }
  for (const u in i) u in n || (n[u] = void 0);
  return n;
}
function ce(e) {
  return 'object' == typeof e && null !== e ? e : {};
}
function he(e) {
  e && e.c();
}
function pe(e, t) {
  e && e.l(t);
}
function de(e, t, n, i) {
  const { fragment: r, on_mount: s, on_destroy: u, after_update: o } = e.$$;
  r && r.m(t, n),
    i ||
      K(() => {
        const t = s.map(a).filter(h);
        u ? u.push(...t) : c(t), (e.$$.on_mount = []);
      }),
    o.forEach(K);
}
function fe(e, t) {
  const n = e.$$;
  null !== n.fragment &&
    (c(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function ge(e, t) {
  -1 === e.$$.dirty[0] &&
    (W.push(e), J || ((J = !0), X.then(te)), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function De(e, t, n, i, r, s, o = [-1]) {
  const a = m;
  P(e);
  const h = (e.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: u,
    not_equal: r,
    bound: l(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(a ? a.$$.context : t.context || []),
    callbacks: l(),
    dirty: o,
    skip_bound: !1,
  });
  let p = !1;
  if (
    ((h.ctx = n
      ? n(e, t.props || {}, (t, n, ...i) => {
          const s = i.length ? i[0] : n;
          return (
            h.ctx &&
              r(h.ctx[t], (h.ctx[t] = s)) &&
              (!h.skip_bound && h.bound[t] && h.bound[t](s), p && ge(e, t)),
            n
          );
        })
      : []),
    h.update(),
    (p = !0),
    c(h.before_update),
    (h.fragment = !!i && i(h.ctx)),
    t.target)
  ) {
    if (t.hydrate) {
      b = !0;
      const e = $(t.target);
      h.fragment && h.fragment.l(e), e.forEach(x);
    } else h.fragment && h.fragment.c();
    t.intro && oe(e.$$.fragment),
      de(e, t.target, t.anchor, t.customElement),
      (b = !1),
      te();
  }
  P(a);
}
class me {
  $destroy() {
    fe(this, 1), (this.$destroy = u);
  }
  $on(e, t) {
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      n.push(t),
      () => {
        const e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      }
    );
  }
  $set(e) {
    var t;
    this.$$set &&
      ((t = e), 0 !== Object.keys(t).length) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const be = [];
function we(e, t = u) {
  let n;
  const i = [];
  function r(t) {
    if (p(e, t) && ((e = t), n)) {
      const t = !be.length;
      for (let n = 0; n < i.length; n += 1) {
        const t = i[n];
        t[1](), be.push(t, e);
      }
      if (t) {
        for (let e = 0; e < be.length; e += 2) be[e][0](be[e + 1]);
        be.length = 0;
      }
    }
  }
  return {
    set: r,
    update: function (t) {
      r(t(e));
    },
    subscribe: function (s, o = u) {
      const a = [s, o];
      return (
        i.push(a),
        1 === i.length && (n = t(r) || u),
        s(e),
        () => {
          const e = i.indexOf(a);
          -1 !== e && i.splice(e, 1), 0 === i.length && (n(), (n = null));
        }
      );
    },
  };
}
var ve =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function Ae(e) {
  let t, n, i, r;
  function s(e, t) {
    return 'string' == typeof e[8][4] ? ke : xe;
  }
  let u = s(e),
    o = u(e);
  return {
    c() {
      (t = y('svg')), (n = y('g')), (i = y('g')), o.c(), this.h();
    },
    l(e) {
      t = z(
        e,
        'svg',
        {
          id: !0,
          class: !0,
          style: !0,
          viewBox: !0,
          'aria-hidden': !0,
          role: !0,
          xmlns: !0,
        },
        1
      );
      var r = $(t);
      n = z(r, 'g', { transform: !0 }, 1);
      var s = $(n);
      i = z(s, 'g', { transform: !0 }, 1);
      var u = $(i);
      o.l(u), u.forEach(x), s.forEach(x), r.forEach(x), this.h();
    },
    h() {
      B(i, 'transform', e[10]),
        B(n, 'transform', 'translate(256 256)'),
        B(t, 'id', e[1]),
        B(t, 'class', e[0]),
        B(t, 'style', e[9]),
        B(t, 'viewBox', (r = `0 0 ${e[8][0]} ${e[8][1]}`)),
        B(t, 'aria-hidden', 'true'),
        B(t, 'role', 'img'),
        B(t, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(e, r) {
      A(e, t, r), v(t, n), v(n, i), o.m(i, null);
    },
    p(e, n) {
      u === (u = s(e)) && o
        ? o.p(e, n)
        : (o.d(1), (o = u(e)), o && (o.c(), o.m(i, null))),
        1024 & n && B(i, 'transform', e[10]),
        2 & n && B(t, 'id', e[1]),
        1 & n && B(t, 'class', e[0]),
        512 & n && B(t, 'style', e[9]),
        256 & n &&
          r !== (r = `0 0 ${e[8][0]} ${e[8][1]}`) &&
          B(t, 'viewBox', r);
    },
    d(e) {
      e && x(t), o.d();
    },
  };
}
function xe(e) {
  let t, n, i, r, s, u, o, a;
  return {
    c() {
      (t = y('path')), (s = y('path')), this.h();
    },
    l(e) {
      (t = z(
        e,
        'path',
        { d: !0, fill: !0, 'fill-opacity': !0, transform: !0 },
        1
      )),
        $(t).forEach(x),
        (s = z(
          e,
          'path',
          { d: !0, fill: !0, 'fill-opacity': !0, transform: !0 },
          1
        )),
        $(s).forEach(x),
        this.h();
    },
    h() {
      B(t, 'd', (n = e[8][4][0])),
        B(t, 'fill', (i = e[4] || e[2] || 'currentColor')),
        B(t, 'fill-opacity', (r = 0 != e[7] ? e[5] : e[6])),
        B(t, 'transform', 'translate(-256 -256)'),
        B(s, 'd', (u = e[8][4][1])),
        B(s, 'fill', (o = e[3] || e[2] || 'currentColor')),
        B(s, 'fill-opacity', (a = 0 != e[7] ? e[6] : e[5])),
        B(s, 'transform', 'translate(-256 -256)');
    },
    m(e, n) {
      A(e, t, n), A(e, s, n);
    },
    p(e, l) {
      256 & l && n !== (n = e[8][4][0]) && B(t, 'd', n),
        20 & l && i !== (i = e[4] || e[2] || 'currentColor') && B(t, 'fill', i),
        224 & l &&
          r !== (r = 0 != e[7] ? e[5] : e[6]) &&
          B(t, 'fill-opacity', r),
        256 & l && u !== (u = e[8][4][1]) && B(s, 'd', u),
        12 & l && o !== (o = e[3] || e[2] || 'currentColor') && B(s, 'fill', o),
        224 & l &&
          a !== (a = 0 != e[7] ? e[6] : e[5]) &&
          B(s, 'fill-opacity', a);
    },
    d(e) {
      e && x(t), e && x(s);
    },
  };
}
function ke(e) {
  let t, n, i;
  return {
    c() {
      (t = y('path')), this.h();
    },
    l(e) {
      (t = z(e, 'path', { d: !0, fill: !0, transform: !0 }, 1)),
        $(t).forEach(x),
        this.h();
    },
    h() {
      B(t, 'd', (n = e[8][4])),
        B(t, 'fill', (i = e[2] || e[3] || 'currentColor')),
        B(t, 'transform', 'translate(-256 -256)');
    },
    m(e, n) {
      A(e, t, n);
    },
    p(e, r) {
      256 & r && n !== (n = e[8][4]) && B(t, 'd', n),
        12 & r && i !== (i = e[2] || e[3] || 'currentColor') && B(t, 'fill', i);
    },
    d(e) {
      e && x(t);
    },
  };
}
function Fe(e) {
  let t,
    n = e[8][4] && Ae(e);
  return {
    c() {
      n && n.c(), (t = _());
    },
    l(e) {
      n && n.l(e), (t = _());
    },
    m(e, i) {
      n && n.m(e, i), A(e, t, i);
    },
    p(e, [i]) {
      e[8][4]
        ? n
          ? n.p(e, i)
          : ((n = Ae(e)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null));
    },
    i: u,
    o: u,
    d(e) {
      n && n.d(e), e && x(t);
    },
  };
}
function ye(e, t, n) {
  let i,
    r,
    s,
    { class: u = '' } = t,
    { id: o = '' } = t,
    { style: a = '' } = t,
    { icon: l } = t,
    { fw: c = !1 } = t,
    { flip: h = !1 } = t,
    { pull: p = '' } = t,
    { rotate: d = '' } = t,
    { size: f = '' } = t,
    { color: g = '' } = t,
    { primaryColor: D = '' } = t,
    { secondaryColor: m = '' } = t,
    { primaryOpacity: b = 1 } = t,
    { secondaryOpacity: w = 0.4 } = t,
    { swapOpacity: v = !1 } = t;
  return (
    (e.$$set = (e) => {
      'class' in e && n(0, (u = e.class)),
        'id' in e && n(1, (o = e.id)),
        'style' in e && n(11, (a = e.style)),
        'icon' in e && n(12, (l = e.icon)),
        'fw' in e && n(13, (c = e.fw)),
        'flip' in e && n(14, (h = e.flip)),
        'pull' in e && n(15, (p = e.pull)),
        'rotate' in e && n(16, (d = e.rotate)),
        'size' in e && n(17, (f = e.size)),
        'color' in e && n(2, (g = e.color)),
        'primaryColor' in e && n(3, (D = e.primaryColor)),
        'secondaryColor' in e && n(4, (m = e.secondaryColor)),
        'primaryOpacity' in e && n(5, (b = e.primaryOpacity)),
        'secondaryOpacity' in e && n(6, (w = e.secondaryOpacity)),
        'swapOpacity' in e && n(7, (v = e.swapOpacity));
    }),
    (e.$$.update = () => {
      if (
        (4096 & e.$$.dirty && n(8, (i = (l && l.icon) || [0, 0, '', [], ''])),
        174080 & e.$$.dirty)
      ) {
        let e, t;
        const i = '1em';
        let s,
          u,
          o,
          l = '-.125em';
        const h = 'visible';
        c && ((o = 'center'), (t = '1.25em')),
          p && (e = p),
          f &&
            ('lg' == f
              ? ((u = '1.33333em'), (s = '.75em'), (l = '-.225em'))
              : (u =
                  'xs' == f
                    ? '.75em'
                    : 'sm' == f
                    ? '.875em'
                    : f.replace('x', 'em')));
        const d = {
          float: e,
          width: t,
          height: i,
          'line-height': s,
          'font-size': u,
          'text-align': o,
          'vertical-align': l,
          overflow: h,
        };
        let g = '';
        for (const n in d) d[n] && (g += `${n}:${d[n]};`);
        n(9, (r = g + a));
      }
      if (81920 & e.$$.dirty) {
        let e = '';
        if (h) {
          let t = 1,
            n = 1;
          'horizontal' == h
            ? (t = -1)
            : 'vertical' == h
            ? (n = -1)
            : (t = n = -1),
            (e += ` scale(${t} ${n})`);
        }
        d && (e += ` rotate(${d} 0 0)`), n(10, (s = e));
      }
    }),
    [u, o, g, D, m, b, w, v, i, r, s, a, l, c, h, p, d, f]
  );
}
!(function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function t(t, n, i) {
    return n && e(t.prototype, n), i && e(t, i), t;
  }
  function n(e, t) {
    if (e) {
      if ('string' == typeof e) return i(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(e)
          : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? i(e, t)
          : void 0
      );
    }
  }
  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function r(e, t) {
    var i =
      ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (i) return (i = i.call(e)).next.bind(i);
    if (
      Array.isArray(e) ||
      (i = n(e)) ||
      (t && e && 'number' == typeof e.length)
    ) {
      i && (e = i);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var s = { exports: {} };
  function u() {
    return {
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
  }
  function o(e) {
    s.exports.defaults = e;
  }
  s.exports = { defaults: u(), getDefaults: u, changeDefaults: o };
  var a = /[&<>"']/,
    l = /[&<>"']/g,
    c = /[<>"']|&(?!#?\w+;)/,
    h = /[<>"']|&(?!#?\w+;)/g,
    p = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
    d = function (e) {
      return p[e];
    };
  function f(e, t) {
    if (t) {
      if (a.test(e)) return e.replace(l, d);
    } else if (c.test(e)) return e.replace(h, d);
    return e;
  }
  var g = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function D(e) {
    return e.replace(g, function (e, t) {
      return 'colon' === (t = t.toLowerCase())
        ? ':'
        : '#' === t.charAt(0)
        ? 'x' === t.charAt(1)
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : '';
    });
  }
  var m = /(^|[^\[])\^/g;
  function b(e, t) {
    (e = e.source || e), (t = t || '');
    var n = {
      replace: function (t, i) {
        return (
          (i = (i = i.source || i).replace(m, '$1')), (e = e.replace(t, i)), n
        );
      },
      getRegex: function () {
        return new RegExp(e, t);
      },
    };
    return n;
  }
  var w = /[^\w:]/g,
    v = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function A(e, t, n) {
    if (e) {
      var i;
      try {
        i = decodeURIComponent(D(n)).replace(w, '').toLowerCase();
      } catch (r) {
        return null;
      }
      if (
        0 === i.indexOf('javascript:') ||
        0 === i.indexOf('vbscript:') ||
        0 === i.indexOf('data:')
      )
        return null;
    }
    t && !v.test(n) && (n = C(t, n));
    try {
      n = encodeURI(n).replace(/%25/g, '%');
    } catch (r) {
      return null;
    }
    return n;
  }
  var x = {},
    k = /^[^:]+:\/*[^/]*$/,
    F = /^([^:]+:)[\s\S]*$/,
    y = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function C(e, t) {
    x[' ' + e] ||
      (k.test(e) ? (x[' ' + e] = e + '/') : (x[' ' + e] = B(e, '/', !0)));
    var n = -1 === (e = x[' ' + e]).indexOf(':');
    return '//' === t.substring(0, 2)
      ? n
        ? t
        : e.replace(F, '$1') + t
      : '/' === t.charAt(0)
      ? n
        ? t
        : e.replace(y, '$1') + t
      : e + t;
  }
  function E(e) {
    for (var t, n, i = 1; i < arguments.length; i++)
      for (n in (t = arguments[i]))
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  }
  function _(e, t) {
    var n = e
        .replace(/\|/g, function (e, t, n) {
          for (var i = !1, r = t; --r >= 0 && '\\' === n[r]; ) i = !i;
          return i ? '|' : ' |';
        })
        .split(/ \|/),
      i = 0;
    if (n.length > t) n.splice(t);
    else for (; n.length < t; ) n.push('');
    for (; i < n.length; i++) n[i] = n[i].trim().replace(/\\\|/g, '|');
    return n;
  }
  function B(e, t, n) {
    var i = e.length;
    if (0 === i) return '';
    for (var r = 0; r < i; ) {
      var s = e.charAt(i - r - 1);
      if (s !== t || n) {
        if (s === t || !n) break;
        r++;
      } else r++;
    }
    return e.substr(0, i - r);
  }
  function $(e, t) {
    if (-1 === e.indexOf(t[1])) return -1;
    for (var n = e.length, i = 0, r = 0; r < n; r++)
      if ('\\' === e[r]) r++;
      else if (e[r] === t[0]) i++;
      else if (e[r] === t[1] && --i < 0) return r;
    return -1;
  }
  function S(e) {
    e &&
      e.sanitize &&
      !e.silent &&
      console.warn(
        'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
      );
  }
  function z(e, t) {
    if (t < 1) return '';
    for (var n = ''; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
    return n + e;
  }
  var T = {
      escape: f,
      unescape: D,
      edit: b,
      cleanUrl: A,
      resolveUrl: C,
      noopTest: { exec: function () {} },
      merge: E,
      splitCells: _,
      rtrim: B,
      findClosingBracket: $,
      checkSanitizeDeprecation: S,
      repeatString: z,
    },
    O = s.exports.defaults,
    I = T.rtrim,
    j = T.splitCells,
    R = T.escape,
    N = T.findClosingBracket;
  function M(e, t, n) {
    var i = t.href,
      r = t.title ? R(t.title) : null,
      s = e[1].replace(/\\([\[\]])/g, '$1');
    return '!' !== e[0].charAt(0)
      ? { type: 'link', raw: n, href: i, title: r, text: s }
      : { type: 'image', raw: n, href: i, title: r, text: R(s) };
  }
  function P(e, t) {
    var n = e.match(/^(\s+)(?:```)/);
    if (null === n) return t;
    var i = n[1];
    return t
      .split('\n')
      .map(function (e) {
        var t = e.match(/^\s+/);
        return null === t ? e : t[0].length >= i.length ? e.slice(i.length) : e;
      })
      .join('\n');
  }
  var q = (function () {
      function e(e) {
        this.options = e || O;
      }
      var t = e.prototype;
      return (
        (t.space = function (e) {
          var t = this.rules.block.newline.exec(e);
          if (t)
            return t[0].length > 1
              ? { type: 'space', raw: t[0] }
              : { raw: '\n' };
        }),
        (t.code = function (e) {
          var t = this.rules.block.code.exec(e);
          if (t) {
            var n = t[0].replace(/^ {1,4}/gm, '');
            return {
              type: 'code',
              raw: t[0],
              codeBlockStyle: 'indented',
              text: this.options.pedantic ? n : I(n, '\n'),
            };
          }
        }),
        (t.fences = function (e) {
          var t = this.rules.block.fences.exec(e);
          if (t) {
            var n = t[0],
              i = P(n, t[3] || '');
            return {
              type: 'code',
              raw: n,
              lang: t[2] ? t[2].trim() : t[2],
              text: i,
            };
          }
        }),
        (t.heading = function (e) {
          var t = this.rules.block.heading.exec(e);
          if (t) {
            var n = t[2].trim();
            if (/#$/.test(n)) {
              var i = I(n, '#');
              this.options.pedantic
                ? (n = i.trim())
                : (i && !/ $/.test(i)) || (n = i.trim());
            }
            return { type: 'heading', raw: t[0], depth: t[1].length, text: n };
          }
        }),
        (t.nptable = function (e) {
          var t = this.rules.block.nptable.exec(e);
          if (t) {
            var n = {
              type: 'table',
              header: j(t[1].replace(/^ *| *\| *$/g, '')),
              align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
              raw: t[0],
            };
            if (n.header.length === n.align.length) {
              var i,
                r = n.align.length;
              for (i = 0; i < r; i++)
                /^ *-+: *$/.test(n.align[i])
                  ? (n.align[i] = 'right')
                  : /^ *:-+: *$/.test(n.align[i])
                  ? (n.align[i] = 'center')
                  : /^ *:-+ *$/.test(n.align[i])
                  ? (n.align[i] = 'left')
                  : (n.align[i] = null);
              for (r = n.cells.length, i = 0; i < r; i++)
                n.cells[i] = j(n.cells[i], n.header.length);
              return n;
            }
          }
        }),
        (t.hr = function (e) {
          var t = this.rules.block.hr.exec(e);
          if (t) return { type: 'hr', raw: t[0] };
        }),
        (t.blockquote = function (e) {
          var t = this.rules.block.blockquote.exec(e);
          if (t) {
            var n = t[0].replace(/^ *> ?/gm, '');
            return { type: 'blockquote', raw: t[0], text: n };
          }
        }),
        (t.list = function (e) {
          var t = this.rules.block.list.exec(e);
          if (t) {
            var n,
              i,
              r,
              s,
              u,
              o,
              a,
              l,
              c,
              h = t[0],
              p = t[2],
              d = p.length > 1,
              f = {
                type: 'list',
                raw: h,
                ordered: d,
                start: d ? +p.slice(0, -1) : '',
                loose: !1,
                items: [],
              },
              g = t[0].match(this.rules.block.item),
              D = !1,
              m = g.length;
            r = this.rules.block.listItemStart.exec(g[0]);
            for (var b = 0; b < m; b++) {
              if (
                ((h = n = g[b]),
                this.options.pedantic ||
                  ((c = n.match(
                    new RegExp('\\n\\s*\\n {0,' + (r[0].length - 1) + '}\\S')
                  )) &&
                    ((u =
                      n.length - c.index + g.slice(b + 1).join('\n').length),
                    (f.raw = f.raw.substring(0, f.raw.length - u)),
                    (h = n = n.substring(0, c.index)),
                    (m = b + 1))),
                b !== m - 1)
              ) {
                if (
                  ((s = this.rules.block.listItemStart.exec(g[b + 1])),
                  this.options.pedantic
                    ? s[1].length > r[1].length
                    : s[1].length >= r[0].length || s[1].length > 3)
                ) {
                  g.splice(
                    b,
                    2,
                    g[b] +
                      (!this.options.pedantic &&
                      s[1].length < r[0].length &&
                      !g[b].match(/\n$/)
                        ? ''
                        : '\n') +
                      g[b + 1]
                  ),
                    b--,
                    m--;
                  continue;
                }
                (!this.options.pedantic || this.options.smartLists
                  ? s[2][s[2].length - 1] !== p[p.length - 1]
                  : d === (1 === s[2].length)) &&
                  ((u = g.slice(b + 1).join('\n').length),
                  (f.raw = f.raw.substring(0, f.raw.length - u)),
                  (b = m - 1)),
                  (r = s);
              }
              (i = n.length),
                ~(n = n.replace(/^ *([*+-]|\d+[.)]) ?/, '')).indexOf('\n ') &&
                  ((i -= n.length),
                  (n = this.options.pedantic
                    ? n.replace(/^ {1,4}/gm, '')
                    : n.replace(new RegExp('^ {1,' + i + '}', 'gm'), ''))),
                (n = I(n, '\n')),
                b !== m - 1 && (h += '\n'),
                (o = D || /\n\n(?!\s*$)/.test(h)),
                b !== m - 1 && ((D = '\n\n' === h.slice(-2)), o || (o = D)),
                o && (f.loose = !0),
                this.options.gfm &&
                  ((l = void 0),
                  (a = /^\[[ xX]\] /.test(n)) &&
                    ((l = ' ' !== n[1]), (n = n.replace(/^\[[ xX]\] +/, '')))),
                f.items.push({
                  type: 'list_item',
                  raw: h,
                  task: a,
                  checked: l,
                  loose: o,
                  text: n,
                });
            }
            return f;
          }
        }),
        (t.html = function (e) {
          var t = this.rules.block.html.exec(e);
          if (t)
            return {
              type: this.options.sanitize ? 'paragraph' : 'html',
              raw: t[0],
              pre:
                !this.options.sanitizer &&
                ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
              text: this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(t[0])
                  : R(t[0])
                : t[0],
            };
        }),
        (t.def = function (e) {
          var t = this.rules.block.def.exec(e);
          if (t)
            return (
              t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
              {
                type: 'def',
                tag: t[1].toLowerCase().replace(/\s+/g, ' '),
                raw: t[0],
                href: t[2],
                title: t[3],
              }
            );
        }),
        (t.table = function (e) {
          var t = this.rules.block.table.exec(e);
          if (t) {
            var n = {
              type: 'table',
              header: j(t[1].replace(/^ *| *\| *$/g, '')),
              align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
            };
            if (n.header.length === n.align.length) {
              n.raw = t[0];
              var i,
                r = n.align.length;
              for (i = 0; i < r; i++)
                /^ *-+: *$/.test(n.align[i])
                  ? (n.align[i] = 'right')
                  : /^ *:-+: *$/.test(n.align[i])
                  ? (n.align[i] = 'center')
                  : /^ *:-+ *$/.test(n.align[i])
                  ? (n.align[i] = 'left')
                  : (n.align[i] = null);
              for (r = n.cells.length, i = 0; i < r; i++)
                n.cells[i] = j(
                  n.cells[i].replace(/^ *\| *| *\| *$/g, ''),
                  n.header.length
                );
              return n;
            }
          }
        }),
        (t.lheading = function (e) {
          var t = this.rules.block.lheading.exec(e);
          if (t)
            return {
              type: 'heading',
              raw: t[0],
              depth: '=' === t[2].charAt(0) ? 1 : 2,
              text: t[1],
            };
        }),
        (t.paragraph = function (e) {
          var t = this.rules.block.paragraph.exec(e);
          if (t)
            return {
              type: 'paragraph',
              raw: t[0],
              text:
                '\n' === t[1].charAt(t[1].length - 1)
                  ? t[1].slice(0, -1)
                  : t[1],
            };
        }),
        (t.text = function (e) {
          var t = this.rules.block.text.exec(e);
          if (t) return { type: 'text', raw: t[0], text: t[0] };
        }),
        (t.escape = function (e) {
          var t = this.rules.inline.escape.exec(e);
          if (t) return { type: 'escape', raw: t[0], text: R(t[1]) };
        }),
        (t.tag = function (e, t, n) {
          var i = this.rules.inline.tag.exec(e);
          if (i)
            return (
              !t && /^<a /i.test(i[0])
                ? (t = !0)
                : t && /^<\/a>/i.test(i[0]) && (t = !1),
              !n && /^<(pre|code|kbd|script)(\s|>)/i.test(i[0])
                ? (n = !0)
                : n &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]) &&
                  (n = !1),
              {
                type: this.options.sanitize ? 'text' : 'html',
                raw: i[0],
                inLink: t,
                inRawBlock: n,
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(i[0])
                    : R(i[0])
                  : i[0],
              }
            );
        }),
        (t.link = function (e) {
          var t = this.rules.inline.link.exec(e);
          if (t) {
            var n = t[2].trim();
            if (!this.options.pedantic && /^</.test(n)) {
              if (!/>$/.test(n)) return;
              var i = I(n.slice(0, -1), '\\');
              if ((n.length - i.length) % 2 == 0) return;
            } else {
              var r = N(t[2], '()');
              if (r > -1) {
                var s = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + r;
                (t[2] = t[2].substring(0, r)),
                  (t[0] = t[0].substring(0, s).trim()),
                  (t[3] = '');
              }
            }
            var u = t[2],
              o = '';
            if (this.options.pedantic) {
              var a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);
              a && ((u = a[1]), (o = a[3]));
            } else o = t[3] ? t[3].slice(1, -1) : '';
            return (
              (u = u.trim()),
              /^</.test(u) &&
                (u =
                  this.options.pedantic && !/>$/.test(n)
                    ? u.slice(1)
                    : u.slice(1, -1)),
              M(
                t,
                {
                  href: u ? u.replace(this.rules.inline._escapes, '$1') : u,
                  title: o ? o.replace(this.rules.inline._escapes, '$1') : o,
                },
                t[0]
              )
            );
          }
        }),
        (t.reflink = function (e, t) {
          var n;
          if (
            (n = this.rules.inline.reflink.exec(e)) ||
            (n = this.rules.inline.nolink.exec(e))
          ) {
            var i = (n[2] || n[1]).replace(/\s+/g, ' ');
            if (!(i = t[i.toLowerCase()]) || !i.href) {
              var r = n[0].charAt(0);
              return { type: 'text', raw: r, text: r };
            }
            return M(n, i, n[0]);
          }
        }),
        (t.emStrong = function (e, t, n) {
          void 0 === n && (n = '');
          var i = this.rules.inline.emStrong.lDelim.exec(e);
          if (
            i &&
            (!i[3] ||
              !n.match(
                /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
              ))
          ) {
            var r = i[1] || i[2] || '';
            if (
              !r ||
              (r && ('' === n || this.rules.inline.punctuation.exec(n)))
            ) {
              var s,
                u,
                o = i[0].length - 1,
                a = o,
                l = 0,
                c =
                  '*' === i[0][0]
                    ? this.rules.inline.emStrong.rDelimAst
                    : this.rules.inline.emStrong.rDelimUnd;
              for (
                c.lastIndex = 0, t = t.slice(-1 * e.length + o);
                null != (i = c.exec(t));

              )
                if ((s = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]))
                  if (((u = s.length), i[3] || i[4])) a += u;
                  else if (!((i[5] || i[6]) && o % 3) || (o + u) % 3) {
                    if (!((a -= u) > 0))
                      return (
                        (u = Math.min(u, u + a + l)),
                        Math.min(o, u) % 2
                          ? {
                              type: 'em',
                              raw: e.slice(0, o + i.index + u + 1),
                              text: e.slice(1, o + i.index + u),
                            }
                          : {
                              type: 'strong',
                              raw: e.slice(0, o + i.index + u + 1),
                              text: e.slice(2, o + i.index + u - 1),
                            }
                      );
                  } else l += u;
            }
          }
        }),
        (t.codespan = function (e) {
          var t = this.rules.inline.code.exec(e);
          if (t) {
            var n = t[2].replace(/\n/g, ' '),
              i = /[^ ]/.test(n),
              r = /^ /.test(n) && / $/.test(n);
            return (
              i && r && (n = n.substring(1, n.length - 1)),
              (n = R(n, !0)),
              { type: 'codespan', raw: t[0], text: n }
            );
          }
        }),
        (t.br = function (e) {
          var t = this.rules.inline.br.exec(e);
          if (t) return { type: 'br', raw: t[0] };
        }),
        (t.del = function (e) {
          var t = this.rules.inline.del.exec(e);
          if (t) return { type: 'del', raw: t[0], text: t[2] };
        }),
        (t.autolink = function (e, t) {
          var n,
            i,
            r = this.rules.inline.autolink.exec(e);
          if (r)
            return (
              (i =
                '@' === r[2]
                  ? 'mailto:' + (n = R(this.options.mangle ? t(r[1]) : r[1]))
                  : (n = R(r[1]))),
              {
                type: 'link',
                raw: r[0],
                text: n,
                href: i,
                tokens: [{ type: 'text', raw: n, text: n }],
              }
            );
        }),
        (t.url = function (e, t) {
          var n;
          if ((n = this.rules.inline.url.exec(e))) {
            var i, r;
            if ('@' === n[2])
              r = 'mailto:' + (i = R(this.options.mangle ? t(n[0]) : n[0]));
            else {
              var s;
              do {
                (s = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
              } while (s !== n[0]);
              (i = R(n[0])), (r = 'www.' === n[1] ? 'http://' + i : i);
            }
            return {
              type: 'link',
              raw: n[0],
              text: i,
              href: r,
              tokens: [{ type: 'text', raw: i, text: i }],
            };
          }
        }),
        (t.inlineText = function (e, t, n) {
          var i,
            r = this.rules.inline.text.exec(e);
          if (r)
            return (
              (i = t
                ? this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(r[0])
                    : R(r[0])
                  : r[0]
                : R(this.options.smartypants ? n(r[0]) : r[0])),
              { type: 'text', raw: r[0], text: i }
            );
        }),
        e
      );
    })(),
    U = T.noopTest,
    L = T.edit,
    H = T.merge,
    Z = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
      html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      nptable: U,
      table: U,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    };
  (Z.def = L(Z.def)
    .replace('label', Z._label)
    .replace('title', Z._title)
    .getRegex()),
    (Z.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    (Z.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
    (Z.item = L(Z.item, 'gm').replace(/bull/g, Z.bullet).getRegex()),
    (Z.listItemStart = L(/^( *)(bull) */)
      .replace('bull', Z.bullet)
      .getRegex()),
    (Z.list = L(Z.list)
      .replace(/bull/g, Z.bullet)
      .replace(
        'hr',
        '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
      )
      .replace('def', '\\n+(?=' + Z.def.source + ')')
      .getRegex()),
    (Z._tag =
      'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
    (Z._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
    (Z.html = L(Z.html, 'i')
      .replace('comment', Z._comment)
      .replace('tag', Z._tag)
      .replace(
        'attribute',
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    (Z.paragraph = L(Z._paragraph)
      .replace('hr', Z.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', Z._tag)
      .getRegex()),
    (Z.blockquote = L(Z.blockquote)
      .replace('paragraph', Z.paragraph)
      .getRegex()),
    (Z.normal = H({}, Z)),
    (Z.gfm = H({}, Z.normal, {
      nptable:
        '^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      table:
        '^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    })),
    (Z.gfm.nptable = L(Z.gfm.nptable)
      .replace('hr', Z.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', Z._tag)
      .getRegex()),
    (Z.gfm.table = L(Z.gfm.table)
      .replace('hr', Z.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', Z._tag)
      .getRegex()),
    (Z.pedantic = H({}, Z.normal, {
      html: L(
        '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
      )
        .replace('comment', Z._comment)
        .replace(
          /tag/g,
          '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: U,
      paragraph: L(Z.normal._paragraph)
        .replace('hr', Z.hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', Z.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex(),
    }));
  var W = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: U,
    tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst:
        /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd:
        /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: U,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
    _punctuation: '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~',
  };
  (W.punctuation = L(W.punctuation)
    .replace(/punctuation/g, W._punctuation)
    .getRegex()),
    (W.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
    (W.escapedEmSt = /\\\*|\\_/g),
    (W._comment = L(Z._comment).replace('(?:--\x3e|$)', '--\x3e').getRegex()),
    (W.emStrong.lDelim = L(W.emStrong.lDelim)
      .replace(/punct/g, W._punctuation)
      .getRegex()),
    (W.emStrong.rDelimAst = L(W.emStrong.rDelimAst, 'g')
      .replace(/punct/g, W._punctuation)
      .getRegex()),
    (W.emStrong.rDelimUnd = L(W.emStrong.rDelimUnd, 'g')
      .replace(/punct/g, W._punctuation)
      .getRegex()),
    (W._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (W._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (W._email =
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (W.autolink = L(W.autolink)
      .replace('scheme', W._scheme)
      .replace('email', W._email)
      .getRegex()),
    (W._attribute =
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (W.tag = L(W.tag)
      .replace('comment', W._comment)
      .replace('attribute', W._attribute)
      .getRegex()),
    (W._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (W._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
    (W._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (W.link = L(W.link)
      .replace('label', W._label)
      .replace('href', W._href)
      .replace('title', W._title)
      .getRegex()),
    (W.reflink = L(W.reflink).replace('label', W._label).getRegex()),
    (W.reflinkSearch = L(W.reflinkSearch, 'g')
      .replace('reflink', W.reflink)
      .replace('nolink', W.nolink)
      .getRegex()),
    (W.normal = H({}, W)),
    (W.pedantic = H({}, W.normal, {
      strong: {
        start: /^__|\*\*/,
        middle:
          /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g,
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g,
      },
      link: L(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', W._label)
        .getRegex(),
      reflink: L(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', W._label)
        .getRegex(),
    })),
    (W.gfm = H({}, W.normal, {
      escape: L(W.escape).replace('])', '~|])').getRegex(),
      _extended_email:
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal:
        /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    })),
    (W.gfm.url = L(W.gfm.url, 'i')
      .replace('email', W.gfm._extended_email)
      .getRegex()),
    (W.breaks = H({}, W.gfm, {
      br: L(W.br).replace('{2,}', '*').getRegex(),
      text: L(W.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex(),
    }));
  var V = { block: Z, inline: W },
    G = q,
    Y = s.exports.defaults,
    X = V.block,
    J = V.inline,
    K = T.repeatString;
  function Q(e) {
    return e
      .replace(/---/g, '—')
      .replace(/--/g, '–')
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      .replace(/'/g, '’')
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      .replace(/"/g, '”')
      .replace(/\.{3}/g, '…');
  }
  function ee(e) {
    var t,
      n,
      i = '',
      r = e.length;
    for (t = 0; t < r; t++)
      (n = e.charCodeAt(t)),
        Math.random() > 0.5 && (n = 'x' + n.toString(16)),
        (i += '&#' + n + ';');
    return i;
  }
  var te = (function () {
      function e(e) {
        (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = e || Y),
          (this.options.tokenizer = this.options.tokenizer || new G()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options);
        var t = { block: X.normal, inline: J.normal };
        this.options.pedantic
          ? ((t.block = X.pedantic), (t.inline = J.pedantic))
          : this.options.gfm &&
            ((t.block = X.gfm),
            this.options.breaks ? (t.inline = J.breaks) : (t.inline = J.gfm)),
          (this.tokenizer.rules = t);
      }
      (e.lex = function (t, n) {
        return new e(n).lex(t);
      }),
        (e.lexInline = function (t, n) {
          return new e(n).inlineTokens(t);
        });
      var n = e.prototype;
      return (
        (n.lex = function (e) {
          return (
            (e = e.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ')),
            this.blockTokens(e, this.tokens, !0),
            this.inline(this.tokens),
            this.tokens
          );
        }),
        (n.blockTokens = function (e, t, n) {
          var i,
            r,
            s,
            u,
            o,
            a,
            l = this;
          for (
            void 0 === t && (t = []),
              void 0 === n && (n = !0),
              this.options.pedantic && (e = e.replace(/^ +$/gm, ''));
            e;

          )
            if (
              !(
                this.options.extensions &&
                this.options.extensions.block &&
                this.options.extensions.block.some(function (n) {
                  return (
                    !!(i = n.call(l, e, t)) &&
                    ((e = e.substring(i.raw.length)), t.push(i), !0)
                  );
                })
              )
            )
              if ((i = this.tokenizer.space(e)))
                (e = e.substring(i.raw.length)), i.type && t.push(i);
              else if ((i = this.tokenizer.code(e)))
                (e = e.substring(i.raw.length)),
                  (u = t[t.length - 1]) && 'paragraph' === u.type
                    ? ((u.raw += '\n' + i.raw), (u.text += '\n' + i.text))
                    : t.push(i);
              else if ((i = this.tokenizer.fences(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.heading(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.nptable(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.hr(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.blockquote(e)))
                (e = e.substring(i.raw.length)),
                  (i.tokens = this.blockTokens(i.text, [], n)),
                  t.push(i);
              else if ((i = this.tokenizer.list(e))) {
                for (
                  e = e.substring(i.raw.length), s = i.items.length, r = 0;
                  r < s;
                  r++
                )
                  i.items[r].tokens = this.blockTokens(i.items[r].text, [], !1);
                t.push(i);
              } else if ((i = this.tokenizer.html(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if (n && (i = this.tokenizer.def(e)))
                (e = e.substring(i.raw.length)),
                  this.tokens.links[i.tag] ||
                    (this.tokens.links[i.tag] = {
                      href: i.href,
                      title: i.title,
                    });
              else if ((i = this.tokenizer.table(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if ((i = this.tokenizer.lheading(e)))
                (e = e.substring(i.raw.length)), t.push(i);
              else if (
                ((o = e),
                this.options.extensions &&
                  this.options.extensions.startBlock &&
                  (function () {
                    var t = 1 / 0,
                      n = e.slice(1),
                      i = void 0;
                    l.options.extensions.startBlock.forEach(function (e) {
                      'number' == typeof (i = e.call(this, n)) &&
                        i >= 0 &&
                        (t = Math.min(t, i));
                    }),
                      t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1));
                  })(),
                n && (i = this.tokenizer.paragraph(o)))
              )
                (u = t[t.length - 1]),
                  a && 'paragraph' === u.type
                    ? ((u.raw += '\n' + i.raw), (u.text += '\n' + i.text))
                    : t.push(i),
                  (a = o.length !== e.length),
                  (e = e.substring(i.raw.length));
              else if ((i = this.tokenizer.text(e)))
                (e = e.substring(i.raw.length)),
                  (u = t[t.length - 1]) && 'text' === u.type
                    ? ((u.raw += '\n' + i.raw), (u.text += '\n' + i.text))
                    : t.push(i);
              else if (e) {
                var c = 'Infinite loop on byte: ' + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(c);
                  break;
                }
                throw new Error(c);
              }
          return t;
        }),
        (n.inline = function (e) {
          var t,
            n,
            i,
            r,
            s,
            u,
            o = e.length;
          for (t = 0; t < o; t++)
            switch ((u = e[t]).type) {
              case 'paragraph':
              case 'text':
              case 'heading':
                (u.tokens = []), this.inlineTokens(u.text, u.tokens);
                break;
              case 'table':
                for (
                  u.tokens = { header: [], cells: [] },
                    r = u.header.length,
                    n = 0;
                  n < r;
                  n++
                )
                  (u.tokens.header[n] = []),
                    this.inlineTokens(u.header[n], u.tokens.header[n]);
                for (r = u.cells.length, n = 0; n < r; n++)
                  for (
                    s = u.cells[n], u.tokens.cells[n] = [], i = 0;
                    i < s.length;
                    i++
                  )
                    (u.tokens.cells[n][i] = []),
                      this.inlineTokens(s[i], u.tokens.cells[n][i]);
                break;
              case 'blockquote':
                this.inline(u.tokens);
                break;
              case 'list':
                for (r = u.items.length, n = 0; n < r; n++)
                  this.inline(u.items[n].tokens);
            }
          return e;
        }),
        (n.inlineTokens = function (e, t, n, i) {
          var r,
            s,
            u,
            o = this;
          void 0 === t && (t = []),
            void 0 === n && (n = !1),
            void 0 === i && (i = !1);
          var a,
            l,
            c,
            h = e;
          if (this.tokens.links) {
            var p = Object.keys(this.tokens.links);
            if (p.length > 0)
              for (
                ;
                null != (a = this.tokenizer.rules.inline.reflinkSearch.exec(h));

              )
                p.includes(a[0].slice(a[0].lastIndexOf('[') + 1, -1)) &&
                  (h =
                    h.slice(0, a.index) +
                    '[' +
                    K('a', a[0].length - 2) +
                    ']' +
                    h.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex
                    ));
          }
          for (; null != (a = this.tokenizer.rules.inline.blockSkip.exec(h)); )
            h =
              h.slice(0, a.index) +
              '[' +
              K('a', a[0].length - 2) +
              ']' +
              h.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          for (
            ;
            null != (a = this.tokenizer.rules.inline.escapedEmSt.exec(h));

          )
            h =
              h.slice(0, a.index) +
              '++' +
              h.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
          for (; e; )
            if (
              (l || (c = ''),
              (l = !1),
              !(
                this.options.extensions &&
                this.options.extensions.inline &&
                this.options.extensions.inline.some(function (n) {
                  return (
                    !!(r = n.call(o, e, t)) &&
                    ((e = e.substring(r.raw.length)), t.push(r), !0)
                  );
                })
              ))
            )
              if ((r = this.tokenizer.escape(e)))
                (e = e.substring(r.raw.length)), t.push(r);
              else if ((r = this.tokenizer.tag(e, n, i)))
                (e = e.substring(r.raw.length)),
                  (n = r.inLink),
                  (i = r.inRawBlock),
                  (s = t[t.length - 1]) &&
                  'text' === r.type &&
                  'text' === s.type
                    ? ((s.raw += r.raw), (s.text += r.text))
                    : t.push(r);
              else if ((r = this.tokenizer.link(e)))
                (e = e.substring(r.raw.length)),
                  'link' === r.type &&
                    (r.tokens = this.inlineTokens(r.text, [], !0, i)),
                  t.push(r);
              else if ((r = this.tokenizer.reflink(e, this.tokens.links)))
                (e = e.substring(r.raw.length)),
                  (s = t[t.length - 1]),
                  'link' === r.type
                    ? ((r.tokens = this.inlineTokens(r.text, [], !0, i)),
                      t.push(r))
                    : s && 'text' === r.type && 'text' === s.type
                    ? ((s.raw += r.raw), (s.text += r.text))
                    : t.push(r);
              else if ((r = this.tokenizer.emStrong(e, h, c)))
                (e = e.substring(r.raw.length)),
                  (r.tokens = this.inlineTokens(r.text, [], n, i)),
                  t.push(r);
              else if ((r = this.tokenizer.codespan(e)))
                (e = e.substring(r.raw.length)), t.push(r);
              else if ((r = this.tokenizer.br(e)))
                (e = e.substring(r.raw.length)), t.push(r);
              else if ((r = this.tokenizer.del(e)))
                (e = e.substring(r.raw.length)),
                  (r.tokens = this.inlineTokens(r.text, [], n, i)),
                  t.push(r);
              else if ((r = this.tokenizer.autolink(e, ee)))
                (e = e.substring(r.raw.length)), t.push(r);
              else if (n || !(r = this.tokenizer.url(e, ee))) {
                if (
                  ((u = e),
                  this.options.extensions &&
                    this.options.extensions.startInline &&
                    (function () {
                      var t = 1 / 0,
                        n = e.slice(1),
                        i = void 0;
                      o.options.extensions.startInline.forEach(function (e) {
                        'number' == typeof (i = e.call(this, n)) &&
                          i >= 0 &&
                          (t = Math.min(t, i));
                      }),
                        t < 1 / 0 && t >= 0 && (u = e.substring(0, t + 1));
                    })(),
                  (r = this.tokenizer.inlineText(u, i, Q)))
                )
                  (e = e.substring(r.raw.length)),
                    '_' !== r.raw.slice(-1) && (c = r.raw.slice(-1)),
                    (l = !0),
                    (s = t[t.length - 1]) && 'text' === s.type
                      ? ((s.raw += r.raw), (s.text += r.text))
                      : t.push(r);
                else if (e) {
                  var d = 'Infinite loop on byte: ' + e.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(d);
                    break;
                  }
                  throw new Error(d);
                }
              } else (e = e.substring(r.raw.length)), t.push(r);
          return t;
        }),
        t(e, null, [
          {
            key: 'rules',
            get: function () {
              return { block: X, inline: J };
            },
          },
        ]),
        e
      );
    })(),
    ne = s.exports.defaults,
    ie = T.cleanUrl,
    re = T.escape,
    se = (function () {
      function e(e) {
        this.options = e || ne;
      }
      var t = e.prototype;
      return (
        (t.code = function (e, t, n) {
          var i = (t || '').match(/\S*/)[0];
          if (this.options.highlight) {
            var r = this.options.highlight(e, i);
            null != r && r !== e && ((n = !0), (e = r));
          }
          return (
            (e = e.replace(/\n$/, '') + '\n'),
            i
              ? '<pre><code class="' +
                this.options.langPrefix +
                re(i, !0) +
                '">' +
                (n ? e : re(e, !0)) +
                '</code></pre>\n'
              : '<pre><code>' + (n ? e : re(e, !0)) + '</code></pre>\n'
          );
        }),
        (t.blockquote = function (e) {
          return '<blockquote>\n' + e + '</blockquote>\n';
        }),
        (t.html = function (e) {
          return e;
        }),
        (t.heading = function (e, t, n, i) {
          return this.options.headerIds
            ? '<h' +
                t +
                ' id="' +
                this.options.headerPrefix +
                i.slug(n) +
                '">' +
                e +
                '</h' +
                t +
                '>\n'
            : '<h' + t + '>' + e + '</h' + t + '>\n';
        }),
        (t.hr = function () {
          return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
        }),
        (t.list = function (e, t, n) {
          var i = t ? 'ol' : 'ul';
          return (
            '<' +
            i +
            (t && 1 !== n ? ' start="' + n + '"' : '') +
            '>\n' +
            e +
            '</' +
            i +
            '>\n'
          );
        }),
        (t.listitem = function (e) {
          return '<li>' + e + '</li>\n';
        }),
        (t.checkbox = function (e) {
          return (
            '<input ' +
            (e ? 'checked="" ' : '') +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? ' /' : '') +
            '> '
          );
        }),
        (t.paragraph = function (e) {
          return '<p>' + e + '</p>\n';
        }),
        (t.table = function (e, t) {
          return (
            t && (t = '<tbody>' + t + '</tbody>'),
            '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
          );
        }),
        (t.tablerow = function (e) {
          return '<tr>\n' + e + '</tr>\n';
        }),
        (t.tablecell = function (e, t) {
          var n = t.header ? 'th' : 'td';
          return (
            (t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') +
            e +
            '</' +
            n +
            '>\n'
          );
        }),
        (t.strong = function (e) {
          return '<strong>' + e + '</strong>';
        }),
        (t.em = function (e) {
          return '<em>' + e + '</em>';
        }),
        (t.codespan = function (e) {
          return '<code>' + e + '</code>';
        }),
        (t.br = function () {
          return this.options.xhtml ? '<br/>' : '<br>';
        }),
        (t.del = function (e) {
          return '<del>' + e + '</del>';
        }),
        (t.link = function (e, t, n) {
          if (null === (e = ie(this.options.sanitize, this.options.baseUrl, e)))
            return n;
          var i = '<a href="' + re(e) + '"';
          return t && (i += ' title="' + t + '"'), (i += '>' + n + '</a>');
        }),
        (t.image = function (e, t, n) {
          if (null === (e = ie(this.options.sanitize, this.options.baseUrl, e)))
            return n;
          var i = '<img src="' + e + '" alt="' + n + '"';
          return (
            t && (i += ' title="' + t + '"'),
            (i += this.options.xhtml ? '/>' : '>')
          );
        }),
        (t.text = function (e) {
          return e;
        }),
        e
      );
    })(),
    ue = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.strong = function (e) {
          return e;
        }),
        (t.em = function (e) {
          return e;
        }),
        (t.codespan = function (e) {
          return e;
        }),
        (t.del = function (e) {
          return e;
        }),
        (t.html = function (e) {
          return e;
        }),
        (t.text = function (e) {
          return e;
        }),
        (t.link = function (e, t, n) {
          return '' + n;
        }),
        (t.image = function (e, t, n) {
          return '' + n;
        }),
        (t.br = function () {
          return '';
        }),
        e
      );
    })(),
    oe = (function () {
      function e() {
        this.seen = {};
      }
      var t = e.prototype;
      return (
        (t.serialize = function (e) {
          return e
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, '')
            .replace(
              /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
              ''
            )
            .replace(/\s/g, '-');
        }),
        (t.getNextSafeSlug = function (e, t) {
          var n = e,
            i = 0;
          if (this.seen.hasOwnProperty(n)) {
            i = this.seen[e];
            do {
              n = e + '-' + ++i;
            } while (this.seen.hasOwnProperty(n));
          }
          return t || ((this.seen[e] = i), (this.seen[n] = 0)), n;
        }),
        (t.slug = function (e, t) {
          void 0 === t && (t = {});
          var n = this.serialize(e);
          return this.getNextSafeSlug(n, t.dryrun);
        }),
        e
      );
    })(),
    ae = se,
    le = ue,
    ce = oe,
    he = s.exports.defaults,
    pe = T.unescape,
    de = te,
    fe = (function () {
      function e(e) {
        (this.options = e || he),
          (this.options.renderer = this.options.renderer || new ae()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new le()),
          (this.slugger = new ce());
      }
      (e.parse = function (t, n) {
        return new e(n).parse(t);
      }),
        (e.parseInline = function (t, n) {
          return new e(n).parseInline(t);
        });
      var t = e.prototype;
      return (
        (t.parse = function (e, t) {
          void 0 === t && (t = !0);
          var n,
            i,
            r,
            s,
            u,
            o,
            a,
            l,
            c,
            h,
            p,
            d,
            f,
            g,
            D,
            m,
            b,
            w,
            v,
            A = '',
            x = e.length;
          for (n = 0; n < x; n++)
            if (
              ((h = e[n]),
              !(
                this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[h.type]
              ) ||
                (!1 ===
                  (v = this.options.extensions.renderers[h.type].call(
                    this,
                    h
                  )) &&
                  [
                    'space',
                    'hr',
                    'heading',
                    'code',
                    'table',
                    'blockquote',
                    'list',
                    'html',
                    'paragraph',
                    'text',
                  ].includes(h.type)))
            )
              switch (h.type) {
                case 'space':
                  continue;
                case 'hr':
                  A += this.renderer.hr();
                  continue;
                case 'heading':
                  A += this.renderer.heading(
                    this.parseInline(h.tokens),
                    h.depth,
                    pe(this.parseInline(h.tokens, this.textRenderer)),
                    this.slugger
                  );
                  continue;
                case 'code':
                  A += this.renderer.code(h.text, h.lang, h.escaped);
                  continue;
                case 'table':
                  for (l = '', a = '', s = h.header.length, i = 0; i < s; i++)
                    a += this.renderer.tablecell(
                      this.parseInline(h.tokens.header[i]),
                      { header: !0, align: h.align[i] }
                    );
                  for (
                    l += this.renderer.tablerow(a),
                      c = '',
                      s = h.cells.length,
                      i = 0;
                    i < s;
                    i++
                  ) {
                    for (
                      a = '', u = (o = h.tokens.cells[i]).length, r = 0;
                      r < u;
                      r++
                    )
                      a += this.renderer.tablecell(this.parseInline(o[r]), {
                        header: !1,
                        align: h.align[r],
                      });
                    c += this.renderer.tablerow(a);
                  }
                  A += this.renderer.table(l, c);
                  continue;
                case 'blockquote':
                  (c = this.parse(h.tokens)),
                    (A += this.renderer.blockquote(c));
                  continue;
                case 'list':
                  for (
                    p = h.ordered,
                      d = h.start,
                      f = h.loose,
                      s = h.items.length,
                      c = '',
                      i = 0;
                    i < s;
                    i++
                  )
                    (m = (D = h.items[i]).checked),
                      (b = D.task),
                      (g = ''),
                      D.task &&
                        ((w = this.renderer.checkbox(m)),
                        f
                          ? D.tokens.length > 0 && 'text' === D.tokens[0].type
                            ? ((D.tokens[0].text = w + ' ' + D.tokens[0].text),
                              D.tokens[0].tokens &&
                                D.tokens[0].tokens.length > 0 &&
                                'text' === D.tokens[0].tokens[0].type &&
                                (D.tokens[0].tokens[0].text =
                                  w + ' ' + D.tokens[0].tokens[0].text))
                            : D.tokens.unshift({ type: 'text', text: w })
                          : (g += w)),
                      (g += this.parse(D.tokens, f)),
                      (c += this.renderer.listitem(g, b, m));
                  A += this.renderer.list(c, p, d);
                  continue;
                case 'html':
                  A += this.renderer.html(h.text);
                  continue;
                case 'paragraph':
                  A += this.renderer.paragraph(this.parseInline(h.tokens));
                  continue;
                case 'text':
                  for (
                    c = h.tokens ? this.parseInline(h.tokens) : h.text;
                    n + 1 < x && 'text' === e[n + 1].type;

                  )
                    c +=
                      '\n' +
                      ((h = e[++n]).tokens
                        ? this.parseInline(h.tokens)
                        : h.text);
                  A += t ? this.renderer.paragraph(c) : c;
                  continue;
                default:
                  var k = 'Token with "' + h.type + '" type was not found.';
                  if (this.options.silent) return void console.error(k);
                  throw new Error(k);
              }
            else A += v || '';
          return A;
        }),
        (t.parseInline = function (e, t) {
          t = t || this.renderer;
          var n,
            i,
            r,
            s = '',
            u = e.length;
          for (n = 0; n < u; n++)
            if (
              ((i = e[n]),
              !(
                this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[i.type]
              ) ||
                (!1 ===
                  (r = this.options.extensions.renderers[i.type].call(
                    this,
                    i
                  )) &&
                  [
                    'escape',
                    'html',
                    'link',
                    'image',
                    'strong',
                    'em',
                    'codespan',
                    'br',
                    'del',
                    'text',
                  ].includes(i.type)))
            )
              switch (i.type) {
                case 'escape':
                  s += t.text(i.text);
                  break;
                case 'html':
                  s += t.html(i.text);
                  break;
                case 'link':
                  s += t.link(i.href, i.title, this.parseInline(i.tokens, t));
                  break;
                case 'image':
                  s += t.image(i.href, i.title, i.text);
                  break;
                case 'strong':
                  s += t.strong(this.parseInline(i.tokens, t));
                  break;
                case 'em':
                  s += t.em(this.parseInline(i.tokens, t));
                  break;
                case 'codespan':
                  s += t.codespan(i.text);
                  break;
                case 'br':
                  s += t.br();
                  break;
                case 'del':
                  s += t.del(this.parseInline(i.tokens, t));
                  break;
                case 'text':
                  s += t.text(i.text);
                  break;
                default:
                  var o = 'Token with "' + i.type + '" type was not found.';
                  if (this.options.silent) return void console.error(o);
                  throw new Error(o);
              }
            else s += r || '';
          return s;
        }),
        e
      );
    })(),
    ge = q,
    De = se,
    me = ue,
    be = oe,
    we = T.merge,
    ve = T.checkSanitizeDeprecation,
    Ae = T.escape,
    xe = s.exports.getDefaults,
    ke = s.exports.changeDefaults,
    Fe = s.exports.defaults;
  function ye(e, t, n) {
    if (null == e)
      throw new Error('marked(): input parameter is undefined or null');
    if ('string' != typeof e)
      throw new Error(
        'marked(): input parameter is of type ' +
          Object.prototype.toString.call(e) +
          ', string expected'
      );
    if (
      ('function' == typeof t && ((n = t), (t = null)),
      (t = we({}, ye.defaults, t || {})),
      ve(t),
      n)
    ) {
      var i,
        r = t.highlight;
      try {
        i = de.lex(e, t);
      } catch (a) {
        return n(a);
      }
      var s = function (e) {
        var s;
        if (!e)
          try {
            t.walkTokens && ye.walkTokens(i, t.walkTokens),
              (s = fe.parse(i, t));
          } catch (a) {
            e = a;
          }
        return (t.highlight = r), e ? n(e) : n(null, s);
      };
      if (!r || r.length < 3) return s();
      if ((delete t.highlight, !i.length)) return s();
      var u = 0;
      return (
        ye.walkTokens(i, function (e) {
          'code' === e.type &&
            (u++,
            setTimeout(function () {
              r(e.text, e.lang, function (t, n) {
                if (t) return s(t);
                null != n && n !== e.text && ((e.text = n), (e.escaped = !0)),
                  0 == --u && s();
              });
            }, 0));
        }),
        void (0 === u && s())
      );
    }
    try {
      var o = de.lex(e, t);
      return t.walkTokens && ye.walkTokens(o, t.walkTokens), fe.parse(o, t);
    } catch (a) {
      if (
        ((a.message +=
          '\nPlease report this to https://github.com/markedjs/marked.'),
        t.silent)
      )
        return (
          '<p>An error occurred:</p><pre>' + Ae(a.message + '', !0) + '</pre>'
        );
      throw a;
    }
  }
  (ye.options = ye.setOptions =
    function (e) {
      return we(ye.defaults, e), ke(ye.defaults), ye;
    }),
    (ye.getDefaults = xe),
    (ye.defaults = Fe),
    (ye.use = function () {
      for (
        var e = this, t = arguments.length, n = new Array(t), i = 0;
        i < t;
        i++
      )
        n[i] = arguments[i];
      var r,
        s = we.apply(void 0, [{}].concat(n)),
        u = ye.defaults.extensions || { renderers: {}, childTokens: {} };
      n.forEach(function (t) {
        if (
          (t.extensions &&
            ((r = !0),
            t.extensions.forEach(function (e) {
              if (!e.name) throw new Error('extension name required');
              if (e.renderer) {
                var t = u.renderers ? u.renderers[e.name] : null;
                u.renderers[e.name] = t
                  ? function () {
                      for (
                        var n = arguments.length, i = new Array(n), r = 0;
                        r < n;
                        r++
                      )
                        i[r] = arguments[r];
                      var s = e.renderer.apply(this, i);
                      return !1 === s && (s = t.apply(this, i)), s;
                    }
                  : e.renderer;
              }
              if (e.tokenizer) {
                if (!e.level || ('block' !== e.level && 'inline' !== e.level))
                  throw new Error(
                    "extension level must be 'block' or 'inline'"
                  );
                u[e.level]
                  ? u[e.level].unshift(e.tokenizer)
                  : (u[e.level] = [e.tokenizer]),
                  e.start &&
                    ('block' === e.level
                      ? u.startBlock
                        ? u.startBlock.push(e.start)
                        : (u.startBlock = [e.start])
                      : 'inline' === e.level &&
                        (u.startInline
                          ? u.startInline.push(e.start)
                          : (u.startInline = [e.start])));
              }
              e.childTokens && (u.childTokens[e.name] = e.childTokens);
            })),
          t.renderer &&
            (function () {
              var e = ye.defaults.renderer || new De(),
                n = function (n) {
                  var i = e[n];
                  e[n] = function () {
                    for (
                      var r = arguments.length, s = new Array(r), u = 0;
                      u < r;
                      u++
                    )
                      s[u] = arguments[u];
                    var o = t.renderer[n].apply(e, s);
                    return !1 === o && (o = i.apply(e, s)), o;
                  };
                };
              for (var i in t.renderer) n(i);
              s.renderer = e;
            })(),
          t.tokenizer &&
            (function () {
              var e = ye.defaults.tokenizer || new ge(),
                n = function (n) {
                  var i = e[n];
                  e[n] = function () {
                    for (
                      var r = arguments.length, s = new Array(r), u = 0;
                      u < r;
                      u++
                    )
                      s[u] = arguments[u];
                    var o = t.tokenizer[n].apply(e, s);
                    return !1 === o && (o = i.apply(e, s)), o;
                  };
                };
              for (var i in t.tokenizer) n(i);
              s.tokenizer = e;
            })(),
          t.walkTokens)
        ) {
          var n = ye.defaults.walkTokens;
          s.walkTokens = function (i) {
            t.walkTokens.call(e, i), n && n(i);
          };
        }
        r && (s.extensions = u), ye.setOptions(s);
      });
    }),
    (ye.walkTokens = function (e, t) {
      for (
        var n,
          i = function () {
            var e = n.value;
            switch ((t(e), e.type)) {
              case 'table':
                for (var i, s = r(e.tokens.header); !(i = s()).done; ) {
                  var u = i.value;
                  ye.walkTokens(u, t);
                }
                for (var o, a = r(e.tokens.cells); !(o = a()).done; )
                  for (var l, c = r(o.value); !(l = c()).done; ) {
                    var h = l.value;
                    ye.walkTokens(h, t);
                  }
                break;
              case 'list':
                ye.walkTokens(e.items, t);
                break;
              default:
                ye.defaults.extensions &&
                ye.defaults.extensions.childTokens &&
                ye.defaults.extensions.childTokens[e.type]
                  ? ye.defaults.extensions.childTokens[e.type].forEach(
                      function (n) {
                        ye.walkTokens(e[n], t);
                      }
                    )
                  : e.tokens && ye.walkTokens(e.tokens, t);
            }
          },
          s = r(e);
        !(n = s()).done;

      )
        i();
    }),
    (ye.parseInline = function (e, t) {
      if (null == e)
        throw new Error(
          'marked.parseInline(): input parameter is undefined or null'
        );
      if ('string' != typeof e)
        throw new Error(
          'marked.parseInline(): input parameter is of type ' +
            Object.prototype.toString.call(e) +
            ', string expected'
        );
      (t = we({}, ye.defaults, t || {})), ve(t);
      try {
        var n = de.lexInline(e, t);
        return (
          t.walkTokens && ye.walkTokens(n, t.walkTokens), fe.parseInline(n, t)
        );
      } catch (i) {
        if (
          ((i.message +=
            '\nPlease report this to https://github.com/markedjs/marked.'),
          t.silent)
        )
          return (
            '<p>An error occurred:</p><pre>' + Ae(i.message + '', !0) + '</pre>'
          );
        throw i;
      }
    }),
    (ye.Parser = fe),
    (ye.parser = fe.parse),
    (ye.Renderer = De),
    (ye.TextRenderer = me),
    (ye.Lexer = de),
    (ye.lexer = de.lex),
    (ye.Tokenizer = ge),
    (ye.Slugger = be),
    (ye.parse = ye);
})();
class Ce extends me {
  constructor(e) {
    super(),
      De(this, e, ye, Fe, p, {
        class: 0,
        id: 1,
        style: 11,
        icon: 12,
        fw: 13,
        flip: 14,
        pull: 15,
        rotate: 16,
        size: 17,
        color: 2,
        primaryColor: 3,
        secondaryColor: 4,
        primaryOpacity: 5,
        secondaryOpacity: 6,
        swapOpacity: 7,
      });
  }
}
var Ee;
/*! pym.js - v1.3.2 - 2018-02-13 */ (Ee = { exports: {} }),
  (function (e) {
    Ee.exports ? (Ee.exports = e()) : (window.pym = e.call(this));
  })(function () {
    var e = 'xPYMx',
      t = {},
      n = function (e) {
        var t = document.createEvent('Event');
        t.initEvent('pym:' + e, !0, !0), document.dispatchEvent(t);
      },
      i = function (e) {
        var t = new RegExp(
          '[\\?&]' +
            e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]') +
            '=([^&#]*)'
        ).exec(location.search);
        return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '));
      },
      r = function (e, t) {
        if (
          ('*' === t.xdomain || e.origin.match(new RegExp(t.xdomain + '$'))) &&
          'string' == typeof e.data
        )
          return !0;
      },
      s = function (t, n, i) {
        return ['pym', t, n, i].join(e);
      },
      u =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      o = function () {
        for (var e = t.autoInitInstances.length - 1; e >= 0; e--) {
          var n = t.autoInitInstances[e];
          (n.el.getElementsByTagName('iframe').length &&
            n.el.getElementsByTagName('iframe')[0].contentWindow) ||
            t.autoInitInstances.splice(e, 1);
        }
      };
    return (
      (t.autoInitInstances = []),
      (t.autoInit = function (e) {
        var i = document.querySelectorAll(
            '[data-pym-src]:not([data-pym-auto-initialized])'
          ),
          r = i.length;
        o();
        for (var s = 0; s < r; ++s) {
          var u = i[s];
          u.setAttribute('data-pym-auto-initialized', ''),
            '' === u.id &&
              (u.id =
                'pym-' + s + '-' + Math.random().toString(36).substr(2, 5));
          var a = u.getAttribute('data-pym-src'),
            l = {
              xdomain: 'string',
              title: 'string',
              name: 'string',
              id: 'string',
              sandbox: 'string',
              allowfullscreen: 'boolean',
              parenturlparam: 'string',
              parenturlvalue: 'string',
              optionalparams: 'boolean',
              trackscroll: 'boolean',
              scrollwait: 'number',
            },
            c = {};
          for (var h in l)
            if (null !== u.getAttribute('data-pym-' + h))
              switch (l[h]) {
                case 'boolean':
                  c[h] = !('false' === u.getAttribute('data-pym-' + h));
                  break;
                case 'string':
                  c[h] = u.getAttribute('data-pym-' + h);
                  break;
                case 'number':
                  var p = Number(u.getAttribute('data-pym-' + h));
                  isNaN(p) || (c[h] = p);
                  break;
                default:
                  console.err('unrecognized attribute type');
              }
          var d = new t.Parent(u.id, a, c);
          t.autoInitInstances.push(d);
        }
        return e || n('pym-initialized'), t.autoInitInstances;
      }),
      (t.Parent = function (t, n, i) {
        for (var a in ((this.id = t),
        (this.url = n),
        (this.el = document.getElementById(t)),
        (this.iframe = null),
        (this.settings = {
          xdomain: '*',
          optionalparams: !0,
          parenturlparam: 'parentUrl',
          parenturlvalue: window.location.href,
          trackscroll: !1,
          scrollwait: 100,
        }),
        (this.messageRegex = (function (t) {
          return new RegExp('^' + ['pym', t, '(\\S+)', '(.*)'].join(e) + '$');
        })(this.id)),
        (this.messageHandlers = {}),
        (i = i || {}),
        (this._constructIframe = function () {
          var e = this.el.offsetWidth.toString();
          this.iframe = document.createElement('iframe');
          var t = '',
            n = this.url.indexOf('#');
          for (
            n > -1 &&
              ((t = this.url.substring(n, this.url.length)),
              (this.url = this.url.substring(0, n))),
              this.url.indexOf('?') < 0 ? (this.url += '?') : (this.url += '&'),
              this.iframe.src =
                this.url + 'initialWidth=' + e + '&childId=' + this.id,
              this.settings.optionalparams &&
                ((this.iframe.src +=
                  '&parentTitle=' + encodeURIComponent(document.title)),
                (this.iframe.src +=
                  '&' +
                  this.settings.parenturlparam +
                  '=' +
                  encodeURIComponent(this.settings.parenturlvalue))),
              this.iframe.src += t,
              this.iframe.setAttribute('width', '100%'),
              this.iframe.setAttribute('scrolling', 'no'),
              this.iframe.setAttribute('marginheight', '0'),
              this.iframe.setAttribute('frameborder', '0'),
              this.settings.title &&
                this.iframe.setAttribute('title', this.settings.title),
              void 0 !== this.settings.allowfullscreen &&
                !1 !== this.settings.allowfullscreen &&
                this.iframe.setAttribute('allowfullscreen', ''),
              void 0 !== this.settings.sandbox &&
                'string' == typeof this.settings.sandbox &&
                this.iframe.setAttribute('sandbox', this.settings.sandbox),
              this.settings.id &&
                (document.getElementById(this.settings.id) ||
                  this.iframe.setAttribute('id', this.settings.id)),
              this.settings.name &&
                this.iframe.setAttribute('name', this.settings.name);
            this.el.firstChild;

          )
            this.el.removeChild(this.el.firstChild);
          this.el.appendChild(this.iframe),
            window.addEventListener('resize', this._onResize),
            this.settings.trackscroll &&
              window.addEventListener('scroll', this._throttleOnScroll);
        }),
        (this._onResize = function () {
          this.sendWidth(),
            this.settings.trackscroll && this.sendViewportAndIFramePosition();
        }.bind(this)),
        (this._onScroll = function () {
          this.sendViewportAndIFramePosition();
        }.bind(this)),
        (this._fire = function (e, t) {
          if (e in this.messageHandlers)
            for (var n = 0; n < this.messageHandlers[e].length; n++)
              this.messageHandlers[e][n].call(this, t);
        }),
        (this.remove = function () {
          window.removeEventListener('message', this._processMessage),
            window.removeEventListener('resize', this._onResize),
            this.el.removeChild(this.iframe),
            o();
        }),
        (this._processMessage = function (e) {
          if (r(e, this.settings) && 'string' == typeof e.data) {
            var t = e.data.match(this.messageRegex);
            if (!t || 3 !== t.length) return !1;
            var n = t[1],
              i = t[2];
            this._fire(n, i);
          }
        }.bind(this)),
        (this._onHeightMessage = function (e) {
          var t = parseInt(e);
          this.iframe.setAttribute('height', t + 'px');
        }),
        (this._onNavigateToMessage = function (e) {
          (function (e) {
            if (e.match(/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi))
              return !0;
          })(e) && (document.location.href = e);
        }),
        (this._onScrollToChildPosMessage = function (e) {
          var t =
            document.getElementById(this.id).getBoundingClientRect().top +
            window.pageYOffset +
            parseInt(e);
          window.scrollTo(0, t);
        }),
        (this.onMessage = function (e, t) {
          e in this.messageHandlers || (this.messageHandlers[e] = []),
            this.messageHandlers[e].push(t);
        }),
        (this.sendMessage = function (e, t) {
          this.el.getElementsByTagName('iframe').length &&
            (this.el.getElementsByTagName('iframe')[0].contentWindow
              ? this.el
                  .getElementsByTagName('iframe')[0]
                  .contentWindow.postMessage(s(this.id, e, t), '*')
              : this.remove());
        }),
        (this.sendWidth = function () {
          var e = this.el.offsetWidth.toString();
          this.sendMessage('width', e);
        }),
        (this.sendViewportAndIFramePosition = function () {
          var e = this.iframe.getBoundingClientRect(),
            t =
              (window.innerWidth || document.documentElement.clientWidth) +
              ' ' +
              (window.innerHeight || document.documentElement.clientHeight);
          (t += ' ' + e.top + ' ' + e.left),
            (t += ' ' + e.bottom + ' ' + e.right),
            this.sendMessage('viewport-iframe-position', t);
        }),
        i))
          this.settings[a] = i[a];
        return (
          (this._throttleOnScroll = (function (e, t, n) {
            var i,
              r,
              s,
              o = null,
              a = 0;
            n || (n = {});
            var l = function () {
              (a = !1 === n.leading ? 0 : u()),
                (o = null),
                (s = e.apply(i, r)),
                o || (i = r = null);
            };
            return function () {
              var c = u();
              a || !1 !== n.leading || (a = c);
              var h = t - (c - a);
              return (
                (i = this),
                (r = arguments),
                h <= 0 || h > t
                  ? (o && (clearTimeout(o), (o = null)),
                    (a = c),
                    (s = e.apply(i, r)),
                    o || (i = r = null))
                  : o || !1 === n.trailing || (o = setTimeout(l, h)),
                s
              );
            };
          })(this._onScroll.bind(this), this.settings.scrollwait)),
          this.onMessage('height', this._onHeightMessage),
          this.onMessage('navigateTo', this._onNavigateToMessage),
          this.onMessage('scrollToChildPos', this._onScrollToChildPosMessage),
          this.onMessage(
            'parentPositionInfo',
            this.sendViewportAndIFramePosition
          ),
          window.addEventListener('message', this._processMessage, !1),
          this._constructIframe(),
          this
        );
      }),
      (t.Child = function (e) {
        for (var t in ((this.parentWidth = null),
        (this.id = null),
        (this.parentTitle = null),
        (this.parentUrl = null),
        (this.settings = {
          renderCallback: null,
          xdomain: '*',
          polling: 0,
          parenturlparam: 'parentUrl',
        }),
        (this.timerId = null),
        (this.messageRegex = null),
        (this.messageHandlers = {}),
        (e = e || {}),
        (this.onMessage = function (e, t) {
          e in this.messageHandlers || (this.messageHandlers[e] = []),
            this.messageHandlers[e].push(t);
        }),
        (this._fire = function (e, t) {
          if (e in this.messageHandlers)
            for (var n = 0; n < this.messageHandlers[e].length; n++)
              this.messageHandlers[e][n].call(this, t);
        }),
        (this._processMessage = function (e) {
          if (r(e, this.settings) && 'string' == typeof e.data) {
            var t = e.data.match(this.messageRegex);
            if (t && 3 === t.length) {
              var n = t[1],
                i = t[2];
              this._fire(n, i);
            }
          }
        }.bind(this)),
        (this._onWidthMessage = function (e) {
          var t = parseInt(e);
          t !== this.parentWidth &&
            ((this.parentWidth = t),
            this.settings.renderCallback && this.settings.renderCallback(t),
            this.sendHeight());
        }),
        (this.sendMessage = function (e, t) {
          window.parent.postMessage(s(this.id, e, t), '*');
        }),
        (this.sendHeight = function () {
          var e = document
            .getElementsByTagName('body')[0]
            .offsetHeight.toString();
          return this.sendMessage('height', e), e;
        }.bind(this)),
        (this.getParentPositionInfo = function () {
          this.sendMessage('parentPositionInfo');
        }),
        (this.scrollParentTo = function (e) {
          this.sendMessage('navigateTo', '#' + e);
        }),
        (this.navigateParentTo = function (e) {
          this.sendMessage('navigateTo', e);
        }),
        (this.scrollParentToChildEl = function (e) {
          var t =
            document.getElementById(e).getBoundingClientRect().top +
            window.pageYOffset;
          this.scrollParentToChildPos(t);
        }),
        (this.scrollParentToChildPos = function (e) {
          this.sendMessage('scrollToChildPos', e.toString());
        }),
        (this.remove = function () {
          window.removeEventListener('message', this._processMessage),
            this.timerId && clearInterval(this.timerId);
        }),
        e))
          this.settings[t] = e[t];
        (this.id = i('childId') || e.id),
          (this.messageRegex = new RegExp(
            '^pymxPYMx' + this.id + 'xPYMx(\\S+)xPYMx(.*)$'
          ));
        var u = parseInt(i('initialWidth'));
        return (
          (this.parentUrl = i(this.settings.parenturlparam)),
          (this.parentTitle = i('parentTitle')),
          this.onMessage('width', this._onWidthMessage),
          window.addEventListener('message', this._processMessage, !1),
          this.settings.renderCallback && this.settings.renderCallback(u),
          this.sendHeight(),
          this.settings.polling &&
            (this.timerId = window.setInterval(
              this.sendHeight,
              this.settings.polling
            )),
          (function (e) {
            var t,
              i = document.getElementsByTagName('html')[0],
              r = i.className;
            try {
              t = window.self !== window.top ? 'embedded' : 'not-embedded';
            } catch (s) {
              t = 'embedded';
            }
            r.indexOf(t) < 0 &&
              ((i.className = r ? r + ' ' + t : t),
              e && e(t),
              n('marked-embedded'));
          })(e.onMarkedEmbeddedStatus),
          this
        );
      }),
      'undefined' != typeof document && t.autoInit(!0),
      t
    );
  });
var _e = {},
  Be = (e) =>
    encodeURIComponent(e).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  $e = new RegExp('%[a-f0-9]{2}', 'gi'),
  Se = new RegExp('(%[a-f0-9]{2})+', 'gi');
function ze(e, t) {
  try {
    return decodeURIComponent(e.join(''));
  } catch (r) {}
  if (1 === e.length) return e;
  t = t || 1;
  var n = e.slice(0, t),
    i = e.slice(t);
  return Array.prototype.concat.call([], ze(n), ze(i));
}
function Te(e) {
  try {
    return decodeURIComponent(e);
  } catch (i) {
    for (var t = e.match($e), n = 1; n < t.length; n++)
      t = (e = ze(t, n).join('')).match($e);
    return e;
  }
}
var Oe = function (e) {
    if ('string' != typeof e)
      throw new TypeError(
        'Expected `encodedURI` to be of type `string`, got `' + typeof e + '`'
      );
    try {
      return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
    } catch (t) {
      return (function (e) {
        for (var n = { '%FE%FF': '��', '%FF%FE': '��' }, i = Se.exec(e); i; ) {
          try {
            n[i[0]] = decodeURIComponent(i[0]);
          } catch (t) {
            var r = Te(i[0]);
            r !== i[0] && (n[i[0]] = r);
          }
          i = Se.exec(e);
        }
        n['%C2'] = '�';
        for (var s = Object.keys(n), u = 0; u < s.length; u++) {
          var o = s[u];
          e = e.replace(new RegExp(o, 'g'), n[o]);
        }
        return e;
      })(e);
    }
  },
  Ie = (e, t) => {
    if ('string' != typeof e || 'string' != typeof t)
      throw new TypeError('Expected the arguments to be of type `string`');
    if ('' === t) return [e];
    const n = e.indexOf(t);
    return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
  },
  je = function (e, t) {
    for (
      var n = {}, i = Object.keys(e), r = Array.isArray(t), s = 0;
      s < i.length;
      s++
    ) {
      var u = i[s],
        o = e[u];
      (r ? -1 !== t.indexOf(u) : t(u, o, e)) && (n[u] = o);
    }
    return n;
  };
!(function (e) {
  const t = Be,
    n = Oe,
    i = Ie,
    r = je;
  function s(e) {
    if ('string' != typeof e || 1 !== e.length)
      throw new TypeError(
        'arrayFormatSeparator must be single character string'
      );
  }
  function u(e, n) {
    return n.encode ? (n.strict ? t(e) : encodeURIComponent(e)) : e;
  }
  function o(e, t) {
    return t.decode ? n(e) : e;
  }
  function a(e) {
    return Array.isArray(e)
      ? e.sort()
      : 'object' == typeof e
      ? a(Object.keys(e))
          .sort((e, t) => Number(e) - Number(t))
          .map((t) => e[t])
      : e;
  }
  function l(e) {
    const t = e.indexOf('#');
    return -1 !== t && (e = e.slice(0, t)), e;
  }
  function c(e) {
    const t = (e = l(e)).indexOf('?');
    return -1 === t ? '' : e.slice(t + 1);
  }
  function h(e, t) {
    return (
      t.parseNumbers &&
      !Number.isNaN(Number(e)) &&
      'string' == typeof e &&
      '' !== e.trim()
        ? (e = Number(e))
        : !t.parseBooleans ||
          null === e ||
          ('true' !== e.toLowerCase() && 'false' !== e.toLowerCase()) ||
          (e = 'true' === e.toLowerCase()),
      e
    );
  }
  function p(e, t) {
    s(
      (t = Object.assign(
        {
          decode: !0,
          sort: !0,
          arrayFormat: 'none',
          arrayFormatSeparator: ',',
          parseNumbers: !1,
          parseBooleans: !1,
        },
        t
      )).arrayFormatSeparator
    );
    const n = (function (e) {
        let t;
        switch (e.arrayFormat) {
          case 'index':
            return (e, n, i) => {
              (t = /\[(\d*)\]$/.exec(e)),
                (e = e.replace(/\[\d*\]$/, '')),
                t
                  ? (void 0 === i[e] && (i[e] = {}), (i[e][t[1]] = n))
                  : (i[e] = n);
            };
          case 'bracket':
            return (e, n, i) => {
              (t = /(\[\])$/.exec(e)),
                (e = e.replace(/\[\]$/, '')),
                t
                  ? void 0 !== i[e]
                    ? (i[e] = [].concat(i[e], n))
                    : (i[e] = [n])
                  : (i[e] = n);
            };
          case 'comma':
          case 'separator':
            return (t, n, i) => {
              const r =
                  'string' == typeof n && n.includes(e.arrayFormatSeparator),
                s =
                  'string' == typeof n &&
                  !r &&
                  o(n, e).includes(e.arrayFormatSeparator);
              n = s ? o(n, e) : n;
              const u =
                r || s
                  ? n.split(e.arrayFormatSeparator).map((t) => o(t, e))
                  : null === n
                  ? n
                  : o(n, e);
              i[t] = u;
            };
          default:
            return (e, t, n) => {
              void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
            };
        }
      })(t),
      r = Object.create(null);
    if ('string' != typeof e) return r;
    if (!(e = e.trim().replace(/^[?#&]/, ''))) return r;
    for (const s of e.split('&')) {
      if ('' === s) continue;
      let [e, u] = i(t.decode ? s.replace(/\+/g, ' ') : s, '=');
      (u =
        void 0 === u
          ? null
          : ['comma', 'separator'].includes(t.arrayFormat)
          ? u
          : o(u, t)),
        n(o(e, t), u, r);
    }
    for (const i of Object.keys(r)) {
      const e = r[i];
      if ('object' == typeof e && null !== e)
        for (const n of Object.keys(e)) e[n] = h(e[n], t);
      else r[i] = h(e, t);
    }
    return !1 === t.sort
      ? r
      : (!0 === t.sort
          ? Object.keys(r).sort()
          : Object.keys(r).sort(t.sort)
        ).reduce((e, t) => {
          const n = r[t];
          return (
            Boolean(n) && 'object' == typeof n && !Array.isArray(n)
              ? (e[t] = a(n))
              : (e[t] = n),
            e
          );
        }, Object.create(null));
  }
  (e.extract = c),
    (e.parse = p),
    (e.stringify = (e, t) => {
      if (!e) return '';
      s(
        (t = Object.assign(
          {
            encode: !0,
            strict: !0,
            arrayFormat: 'none',
            arrayFormatSeparator: ',',
          },
          t
        )).arrayFormatSeparator
      );
      const n = (n) =>
          (t.skipNull && null == e[n]) || (t.skipEmptyString && '' === e[n]),
        i = (function (e) {
          switch (e.arrayFormat) {
            case 'index':
              return (t) => (n, i) => {
                const r = n.length;
                return void 0 === i ||
                  (e.skipNull && null === i) ||
                  (e.skipEmptyString && '' === i)
                  ? n
                  : null === i
                  ? [...n, [u(t, e), '[', r, ']'].join('')]
                  : [...n, [u(t, e), '[', u(r, e), ']=', u(i, e)].join('')];
              };
            case 'bracket':
              return (t) => (n, i) =>
                void 0 === i ||
                (e.skipNull && null === i) ||
                (e.skipEmptyString && '' === i)
                  ? n
                  : null === i
                  ? [...n, [u(t, e), '[]'].join('')]
                  : [...n, [u(t, e), '[]=', u(i, e)].join('')];
            case 'comma':
            case 'separator':
              return (t) => (n, i) =>
                null == i || 0 === i.length
                  ? n
                  : 0 === n.length
                  ? [[u(t, e), '=', u(i, e)].join('')]
                  : [[n, u(i, e)].join(e.arrayFormatSeparator)];
            default:
              return (t) => (n, i) =>
                void 0 === i ||
                (e.skipNull && null === i) ||
                (e.skipEmptyString && '' === i)
                  ? n
                  : null === i
                  ? [...n, u(t, e)]
                  : [...n, [u(t, e), '=', u(i, e)].join('')];
          }
        })(t),
        r = {};
      for (const s of Object.keys(e)) n(s) || (r[s] = e[s]);
      const o = Object.keys(r);
      return (
        !1 !== t.sort && o.sort(t.sort),
        o
          .map((n) => {
            const r = e[n];
            return void 0 === r
              ? ''
              : null === r
              ? u(n, t)
              : Array.isArray(r)
              ? r.reduce(i(n), []).join('&')
              : u(n, t) + '=' + u(r, t);
          })
          .filter((e) => e.length > 0)
          .join('&')
      );
    }),
    (e.parseUrl = (e, t) => {
      t = Object.assign({ decode: !0 }, t);
      const [n, r] = i(e, '#');
      return Object.assign(
        { url: n.split('?')[0] || '', query: p(c(e), t) },
        t && t.parseFragmentIdentifier && r
          ? { fragmentIdentifier: o(r, t) }
          : {}
      );
    }),
    (e.stringifyUrl = (t, n) => {
      n = Object.assign({ encode: !0, strict: !0 }, n);
      const i = l(t.url).split('?')[0] || '',
        r = e.extract(t.url),
        s = e.parse(r, { sort: !1 }),
        o = Object.assign(s, t.query);
      let a = e.stringify(o, n);
      a && (a = `?${a}`);
      let c = (function (e) {
        let t = '';
        const n = e.indexOf('#');
        return -1 !== n && (t = e.slice(n)), t;
      })(t.url);
      return (
        t.fragmentIdentifier && (c = `#${u(t.fragmentIdentifier, n)}`),
        `${i}${a}${c}`
      );
    }),
    (e.pick = (t, n, i) => {
      i = Object.assign({ parseFragmentIdentifier: !0 }, i);
      const { url: s, query: u, fragmentIdentifier: o } = e.parseUrl(t, i);
      return e.stringifyUrl(
        { url: s, query: r(u, n), fragmentIdentifier: o },
        i
      );
    }),
    (e.exclude = (t, n, i) => {
      const r = Array.isArray(n) ? (e) => !n.includes(e) : (e, t) => !n(e, t);
      return e.pick(t, r, i);
    });
})(_e);
const Re = /^(\w+:\/\/[^/?]+)?(.*?)(\?.+)?$/,
  Ne = /^(\/\/[^/?]+)(.*?)(\?.+)?$/,
  Me = (...e) => {
    const t = e[e.length - 1];
    let n;
    t && 'object' == typeof t && ((n = t), (e = e.slice(0, -1))),
      (n = s({ leadingSlash: !0, trailingSlash: !1, protocolRelative: !1 }, n));
    return ((e, t) => {
      const { prefix: n, pathname: i, suffix: r } = e,
        { parts: u, hasLeading: o, hasTrailing: a } = i,
        { leadingSlash: l, trailingSlash: c } = t,
        h = !0 === l || ('keep' === l && o),
        p = !0 === c || ('keep' === c && a);
      let d = n;
      u.length > 0 && ((d || h) && (d += '/'), (d += u.join('/'))),
        p && (d += '/'),
        !d && h && (d += '/');
      const f = s(s({}, _e.parse(r, t.queryOptions)), t.query),
        g = _e.stringify(f, t.queryOptions);
      return g && (d += `?${g}`), d;
    })(
      ((e, t) => {
        const { protocolRelative: n } = t,
          i = e.join('/'),
          r = n ? Ne : Re,
          [, s = '', u = '', o = ''] = i.match(r) || [];
        return {
          prefix: s,
          pathname: {
            parts: u.split('/').filter((e) => '' !== e),
            hasLeading: o ? /^\/\/+/.test(u) : /^\/+/.test(u),
            hasTrailing: o ? /\/\/+$/.test(u) : /\/+$/.test(u),
          },
          suffix: o,
        };
      })(
        (e = ((e) =>
          e
            .filter((e) => 'string' == typeof e || 'number' == typeof e)
            .map((e) => `${e}`)
            .filter((e) => e))(e)),
        n
      ),
      n
    );
  };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!(function (e) {
  !(function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var e = [], i = 0; i < arguments.length; i++) {
        var r = arguments[i];
        if (r) {
          var s = typeof r;
          if ('string' === s || 'number' === s) e.push(r);
          else if (Array.isArray(r)) {
            if (r.length) {
              var u = n.apply(null, r);
              u && e.push(u);
            }
          } else if ('object' === s)
            if (r.toString === Object.prototype.toString)
              for (var o in r) t.call(r, o) && r[o] && e.push(o);
            else e.push(r.toString());
        }
      }
      return e.join(' ');
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})({ exports: {} });
var Pe = Array.isArray,
  qe = 'object' == typeof ve && ve && ve.Object === Object && ve,
  Ue = 'object' == typeof self && self && self.Object === Object && self,
  Le = qe || Ue || Function('return this')(),
  He = Le.Symbol,
  Ze = He,
  We = Object.prototype,
  Ve = We.hasOwnProperty,
  Ge = We.toString,
  Ye = Ze ? Ze.toStringTag : void 0;
var Xe = function (e) {
    var t = Ve.call(e, Ye),
      n = e[Ye];
    try {
      e[Ye] = void 0;
      var i = !0;
    } catch (s) {}
    var r = Ge.call(e);
    return i && (t ? (e[Ye] = n) : delete e[Ye]), r;
  },
  Je = Object.prototype.toString;
var Ke = Xe,
  Qe = function (e) {
    return Je.call(e);
  },
  et = He ? He.toStringTag : void 0;
var tt = function (e) {
  return null == e
    ? void 0 === e
      ? '[object Undefined]'
      : '[object Null]'
    : et && et in Object(e)
    ? Ke(e)
    : Qe(e);
};
var nt = tt,
  it = function (e) {
    return null != e && 'object' == typeof e;
  };
var rt = function (e) {
    return 'symbol' == typeof e || (it(e) && '[object Symbol]' == nt(e));
  },
  st = Pe,
  ut = rt,
  ot = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  at = /^\w*$/;
var lt = function (e, t) {
  if (st(e)) return !1;
  var n = typeof e;
  return (
    !(
      'number' != n &&
      'symbol' != n &&
      'boolean' != n &&
      null != e &&
      !ut(e)
    ) ||
    at.test(e) ||
    !ot.test(e) ||
    (null != t && e in Object(t))
  );
};
var ct = function (e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  },
  ht = tt,
  pt = ct;
var dt,
  ft = function (e) {
    if (!pt(e)) return !1;
    var t = ht(e);
    return (
      '[object Function]' == t ||
      '[object GeneratorFunction]' == t ||
      '[object AsyncFunction]' == t ||
      '[object Proxy]' == t
    );
  },
  gt = Le['__core-js_shared__'],
  Dt = (dt = /[^.]+$/.exec((gt && gt.keys && gt.keys.IE_PROTO) || ''))
    ? 'Symbol(src)_1.' + dt
    : '';
var mt = function (e) {
    return !!Dt && Dt in e;
  },
  bt = Function.prototype.toString;
var wt = ft,
  vt = mt,
  At = ct,
  xt = function (e) {
    if (null != e) {
      try {
        return bt.call(e);
      } catch (t) {}
      try {
        return e + '';
      } catch (t) {}
    }
    return '';
  },
  kt = /^\[object .+?Constructor\]$/,
  Ft = Function.prototype,
  yt = Object.prototype,
  Ct = Ft.toString,
  Et = yt.hasOwnProperty,
  _t = RegExp(
    '^' +
      Ct.call(Et)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
var Bt = function (e) {
    return !(!At(e) || vt(e)) && (wt(e) ? _t : kt).test(xt(e));
  },
  $t = function (e, t) {
    return null == e ? void 0 : e[t];
  };
var St = function (e, t) {
    var n = $t(e, t);
    return Bt(n) ? n : void 0;
  },
  zt = St(Object, 'create'),
  Tt = zt;
var Ot = function () {
  (this.__data__ = Tt ? Tt(null) : {}), (this.size = 0);
};
var It = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  },
  jt = zt,
  Rt = Object.prototype.hasOwnProperty;
var Nt = function (e) {
    var t = this.__data__;
    if (jt) {
      var n = t[e];
      return '__lodash_hash_undefined__' === n ? void 0 : n;
    }
    return Rt.call(t, e) ? t[e] : void 0;
  },
  Mt = zt,
  Pt = Object.prototype.hasOwnProperty;
var qt = zt;
var Ut = Ot,
  Lt = It,
  Ht = Nt,
  Zt = function (e) {
    var t = this.__data__;
    return Mt ? void 0 !== t[e] : Pt.call(t, e);
  },
  Wt = function (e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = qt && void 0 === t ? '__lodash_hash_undefined__' : t),
      this
    );
  };
function Vt(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
(Vt.prototype.clear = Ut),
  (Vt.prototype.delete = Lt),
  (Vt.prototype.get = Ht),
  (Vt.prototype.has = Zt),
  (Vt.prototype.set = Wt);
var Gt = Vt;
var Yt = function () {
  (this.__data__ = []), (this.size = 0);
};
var Xt = function (e, t) {
  return e === t || (e != e && t != t);
};
var Jt = function (e, t) {
    for (var n = e.length; n--; ) if (Xt(e[n][0], t)) return n;
    return -1;
  },
  Kt = Jt,
  Qt = Array.prototype.splice;
var en = Jt;
var tn = Jt;
var nn = Jt;
var rn = Yt,
  sn = function (e) {
    var t = this.__data__,
      n = Kt(t, e);
    return (
      !(n < 0) &&
      (n == t.length - 1 ? t.pop() : Qt.call(t, n, 1), --this.size, !0)
    );
  },
  un = function (e) {
    var t = this.__data__,
      n = en(t, e);
    return n < 0 ? void 0 : t[n][1];
  },
  on = function (e) {
    return tn(this.__data__, e) > -1;
  },
  an = function (e, t) {
    var n = this.__data__,
      i = nn(n, e);
    return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
  };
function ln(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
(ln.prototype.clear = rn),
  (ln.prototype.delete = sn),
  (ln.prototype.get = un),
  (ln.prototype.has = on),
  (ln.prototype.set = an);
var cn = ln,
  hn = St(Le, 'Map'),
  pn = Gt,
  dn = cn,
  fn = hn;
var gn = function (e) {
  var t = typeof e;
  return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
    ? '__proto__' !== e
    : null === e;
};
var Dn = function (e, t) {
    var n = e.__data__;
    return gn(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map;
  },
  mn = Dn;
var bn = Dn;
var wn = Dn;
var vn = Dn;
var An = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new pn(),
        map: new (fn || dn)(),
        string: new pn(),
      });
  },
  xn = function (e) {
    var t = mn(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  },
  kn = function (e) {
    return bn(this, e).get(e);
  },
  Fn = function (e) {
    return wn(this, e).has(e);
  },
  yn = function (e, t) {
    var n = vn(this, e),
      i = n.size;
    return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
  };
function Cn(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
(Cn.prototype.clear = An),
  (Cn.prototype.delete = xn),
  (Cn.prototype.get = kn),
  (Cn.prototype.has = Fn),
  (Cn.prototype.set = yn);
var En = Cn;
function _n(e, t) {
  if ('function' != typeof e || (null != t && 'function' != typeof t))
    throw new TypeError('Expected a function');
  var n = function () {
    var i = arguments,
      r = t ? t.apply(this, i) : i[0],
      s = n.cache;
    if (s.has(r)) return s.get(r);
    var u = e.apply(this, i);
    return (n.cache = s.set(r, u) || s), u;
  };
  return (n.cache = new (_n.Cache || En)()), n;
}
_n.Cache = En;
var Bn = _n;
var $n =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Sn = /\\(\\)?/g,
  zn = (function (e) {
    var t = Bn(e, function (e) {
        return 500 === n.size && n.clear(), e;
      }),
      n = t.cache;
    return t;
  })(function (e) {
    var t = [];
    return (
      46 === e.charCodeAt(0) && t.push(''),
      e.replace($n, function (e, n, i, r) {
        t.push(i ? r.replace(Sn, '$1') : n || e);
      }),
      t
    );
  });
var Tn = function (e, t) {
    for (var n = -1, i = null == e ? 0 : e.length, r = Array(i); ++n < i; )
      r[n] = t(e[n], n, e);
    return r;
  },
  On = Pe,
  In = rt,
  jn = He ? He.prototype : void 0,
  Rn = jn ? jn.toString : void 0;
var Nn = function e(t) {
  if ('string' == typeof t) return t;
  if (On(t)) return Tn(t, e) + '';
  if (In(t)) return Rn ? Rn.call(t) : '';
  var n = t + '';
  return '0' == n && 1 / t == -Infinity ? '-0' : n;
};
var Mn = Pe,
  Pn = lt,
  qn = zn,
  Un = function (e) {
    return null == e ? '' : Nn(e);
  };
var Ln = rt;
var Hn = function (e, t) {
    return Mn(e) ? e : Pn(e, t) ? [e] : qn(Un(e));
  },
  Zn = function (e) {
    if ('string' == typeof e || Ln(e)) return e;
    var t = e + '';
    return '0' == t && 1 / e == -Infinity ? '-0' : t;
  };
var Wn = function (e, t) {
  for (var n = 0, i = (t = Hn(t, e)).length; null != e && n < i; )
    e = e[Zn(t[n++])];
  return n && n == i ? e : void 0;
};
var Vn = function (e, t, n) {
    var i = null == e ? void 0 : Wn(e, t);
    return void 0 === i ? n : i;
  },
  Gn = { exports: {} };
/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
!(function (e, t) {
  !(function (n, i) {
    var r = 'function',
      s = 'object',
      u = 'string',
      o = 'model',
      a = 'name',
      l = 'type',
      c = 'vendor',
      h = 'version',
      p = 'architecture',
      d = 'console',
      f = 'mobile',
      g = 'tablet',
      D = 'smarttv',
      m = 'wearable',
      b = 'embedded',
      w = {
        extend: function (e, t) {
          var n = {};
          for (var i in e)
            t[i] && t[i].length % 2 == 0
              ? (n[i] = t[i].concat(e[i]))
              : (n[i] = e[i]);
          return n;
        },
        has: function (e, t) {
          return (
            typeof e === u && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
          );
        },
        lowerize: function (e) {
          return e.toLowerCase();
        },
        major: function (e) {
          return typeof e === u ? e.replace(/[^\d\.]/g, '').split('.')[0] : i;
        },
        trim: function (e, t) {
          return (
            (e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')),
            void 0 === t ? e : e.substring(0, 255)
          );
        },
      },
      v = {
        rgx: function (e, t) {
          for (var n, u, o, a, l, c, h = 0; h < t.length && !l; ) {
            var p = t[h],
              d = t[h + 1];
            for (n = u = 0; n < p.length && !l; )
              if ((l = p[n++].exec(e)))
                for (o = 0; o < d.length; o++)
                  (c = l[++u]),
                    typeof (a = d[o]) === s && a.length > 0
                      ? 2 == a.length
                        ? typeof a[1] == r
                          ? (this[a[0]] = a[1].call(this, c))
                          : (this[a[0]] = a[1])
                        : 3 == a.length
                        ? typeof a[1] !== r || (a[1].exec && a[1].test)
                          ? (this[a[0]] = c ? c.replace(a[1], a[2]) : i)
                          : (this[a[0]] = c ? a[1].call(this, c, a[2]) : i)
                        : 4 == a.length &&
                          (this[a[0]] = c
                            ? a[3].call(this, c.replace(a[1], a[2]))
                            : i)
                      : (this[a] = c || i);
            h += 2;
          }
        },
        str: function (e, t) {
          for (var n in t)
            if (typeof t[n] === s && t[n].length > 0) {
              for (var r = 0; r < t[n].length; r++)
                if (w.has(t[n][r], e)) return '?' === n ? i : n;
            } else if (w.has(t[n], e)) return '?' === n ? i : n;
          return e;
        },
      },
      A = {
        browser: {
          oldSafari: {
            version: {
              '1.0': '/8',
              1.2: '/1',
              1.3: '/3',
              '2.0': '/412',
              '2.0.2': '/416',
              '2.0.3': '/417',
              '2.0.4': '/419',
              '?': '/',
            },
          },
          oldEdge: {
            version: {
              0.1: '12.',
              21: '13.',
              31: '14.',
              39: '15.',
              41: '16.',
              42: '17.',
              44: '18.',
            },
          },
        },
        os: {
          windows: {
            version: {
              ME: '4.90',
              'NT 3.11': 'NT3.51',
              'NT 4.0': 'NT4.0',
              2e3: 'NT 5.0',
              XP: ['NT 5.1', 'NT 5.2'],
              Vista: 'NT 6.0',
              7: 'NT 6.1',
              8: 'NT 6.2',
              8.1: 'NT 6.3',
              10: ['NT 6.4', 'NT 10.0'],
              RT: 'ARM',
            },
          },
        },
      },
      x = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [h, [a, 'Chrome']],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [h, [a, 'Edge']],
          [
            /(opera\smini)\/([\w\.-]+)/i,
            /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,
            /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i,
          ],
          [a, h],
          [/opios[\/\s]+([\w\.]+)/i],
          [h, [a, 'Opera Mini']],
          [/\sopr\/([\w\.]+)/i],
          [h, [a, 'Opera']],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
            /(ba?idubrowser)[\/\s]?([\w\.]+)/i,
            /(?:ms|\()(ie)\s([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
            /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,
            /(weibo)__([\d\.]+)/i,
          ],
          [a, h],
          [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
          [h, [a, 'UCBrowser']],
          [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
          [h, [a, 'WeChat(Win) Desktop']],
          [/micromessenger\/([\w\.]+)/i],
          [h, [a, 'WeChat']],
          [/konqueror\/([\w\.]+)/i],
          [h, [a, 'Konqueror']],
          [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
          [h, [a, 'IE']],
          [/yabrowser\/([\w\.]+)/i],
          [h, [a, 'Yandex']],
          [/(avast|avg)\/([\w\.]+)/i],
          [[a, /(.+)/, '$1 Secure Browser'], h],
          [/focus\/([\w\.]+)/i],
          [h, [a, 'Firefox Focus']],
          [/opt\/([\w\.]+)/i],
          [h, [a, 'Opera Touch']],
          [/coc_coc_browser\/([\w\.]+)/i],
          [h, [a, 'Coc Coc']],
          [/dolfin\/([\w\.]+)/i],
          [h, [a, 'Dolphin']],
          [/coast\/([\w\.]+)/i],
          [h, [a, 'Opera Coast']],
          [/xiaomi\/miuibrowser\/([\w\.]+)/i],
          [h, [a, 'MIUI Browser']],
          [/fxios\/([\w\.-]+)/i],
          [h, [a, 'Firefox']],
          [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
          [[a, '360 Browser']],
          [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
          [[a, /(.+)/, '$1 Browser'], h],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[a, /_/g, ' '], h],
          [
            /\s(electron)\/([\w\.]+)\ssafari/i,
            /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i,
          ],
          [a, h],
          [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
          [a],
          [/;fbav\/([\w\.]+);/i],
          [h, [a, 'Facebook']],
          [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
          [[a, 'Facebook']],
          [
            /safari\s(line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(chromium|instagram)[\/\s]([\w\.-]+)/i,
          ],
          [a, h],
          [/\bgsa\/([\w\.]+)\s.*safari\//i],
          [h, [a, 'GSA']],
          [/headlesschrome(?:\/([\w\.]+)|\s)/i],
          [h, [a, 'Chrome Headless']],
          [/\swv\).+(chrome)\/([\w\.]+)/i],
          [[a, 'Chrome WebView'], h],
          [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
          [h, [a, 'Android Browser']],
          [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
          [a, h],
          [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
          [h, [a, 'Mobile Safari']],
          [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
          [h, a],
          [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
          [a, [h, v.str, A.browser.oldSafari.version]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [a, h],
          [/(navigator|netscape)\/([\w\.-]+)/i],
          [[a, 'Netscape'], h],
          [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
          [h, [a, 'Firefox Reality']],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
            /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
            /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
            /(links)\s\(([\w\.]+)/i,
            /(gobrowser)\/?([\w\.]*)/i,
            /(ice\s?browser)\/v?([\w\._]+)/i,
            /(mosaic)[\/\s]([\w\.]+)/i,
          ],
          [a, h],
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
          [[p, 'amd64']],
          [/(ia32(?=;))/i],
          [[p, w.lowerize]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[p, 'ia32']],
          [/\b(aarch64|armv?8e?l?)\b/i],
          [[p, 'arm64']],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[p, 'armhf']],
          [/windows\s(ce|mobile);\sppc;/i],
          [[p, 'arm']],
          [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
          [[p, /ower/, '', w.lowerize]],
          [/(sun4\w)[;\)]/i],
          [[p, 'sparc']],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
          ],
          [[p, w.lowerize]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i,
          ],
          [o, [c, 'Samsung'], [l, g]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,
            /\ssamsung[\s-]([\w-]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [o, [c, 'Samsung'], [l, f]],
          [/\((ip(?:hone|od)[\s\w]*);/i],
          [o, [c, 'Apple'], [l, f]],
          [
            /\((ipad);[\w\s\),;-]+apple/i,
            /applecoremedia\/[\w\.]+\s\((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
          ],
          [o, [c, 'Apple'], [l, g]],
          [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
          [o, [c, 'Huawei'], [l, g]],
          [
            /d\/huawei([\w\s-]+)[;\)]/i,
            /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,
            /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i,
          ],
          [o, [c, 'Huawei'], [l, f]],
          [
            /\b(poco[\s\w]+)(?:\sbuild|\))/i,
            /\b;\s(\w+)\sbuild\/hm\1/i,
            /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
            /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,
            /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i,
          ],
          [
            [o, /_/g, ' '],
            [c, 'Xiaomi'],
            [l, f],
          ],
          [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
          [
            [o, /_/g, ' '],
            [c, 'Xiaomi'],
            [l, g],
          ],
          [
            /;\s(\w+)\sbuild.+\soppo/i,
            /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
          ],
          [o, [c, 'OPPO'], [l, f]],
          [
            /\svivo\s(\w+)(?:\sbuild|\))/i,
            /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i,
          ],
          [o, [c, 'Vivo'], [l, f]],
          [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
          [o, [c, 'Realme'], [l, f]],
          [
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,
            /\smot(?:orola)?[\s-](\w*)/i,
            /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i,
          ],
          [o, [c, 'Motorola'], [l, f]],
          [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
          [o, [c, 'Motorola'], [l, g]],
          [
            /((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i,
          ],
          [o, [c, 'LG'], [l, g]],
          [
            /(lm-?f100[nv]?|nexus\s[45])/i,
            /lg[e;\s\/-]+((?!browser|netcast)\w+)/i,
            /\blg(\-?[\d\w]+)\sbuild/i,
          ],
          [o, [c, 'LG'], [l, f]],
          [
            /(ideatab[\w\-\s]+)/i,
            /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i,
          ],
          [o, [c, 'Lenovo'], [l, g]],
          [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
          [
            [o, /_/g, ' '],
            [c, 'Nokia'],
            [l, f],
          ],
          [/droid.+;\s(pixel\sc)[\s)]/i],
          [o, [c, 'Google'], [l, g]],
          [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
          [o, [c, 'Google'], [l, f]],
          [
            /droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [o, [c, 'Sony'], [l, f]],
          [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
          [
            [o, 'Xperia Tablet'],
            [c, 'Sony'],
            [l, g],
          ],
          [
            /\s(kb2005|in20[12]5|be20[12][59])\b/i,
            /\ba000(1)\sbuild/i,
            /\boneplus\s(a\d{4})[\s)]/i,
          ],
          [o, [c, 'OnePlus'], [l, f]],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)(\sbuild\/|\))/i,
            /(kf[a-z]+)(\sbuild\/|\)).+silk\//i,
          ],
          [o, [c, 'Amazon'], [l, g]],
          [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
          [
            [o, 'Fire Phone'],
            [c, 'Amazon'],
            [l, f],
          ],
          [/\((playbook);[\w\s\),;-]+(rim)/i],
          [o, c, [l, g]],
          [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
          [o, [c, 'BlackBerry'], [l, f]],
          [
            /(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i,
          ],
          [o, [c, 'ASUS'], [l, g]],
          [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
          [o, [c, 'ASUS'], [l, f]],
          [/(nexus\s9)/i],
          [o, [c, 'HTC'], [l, g]],
          [
            /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,
            /(zte)-(\w*)/i,
            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
          ],
          [c, [o, /_/g, ' '], [l, f]],
          [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
          [o, [c, 'Acer'], [l, g]],
          [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
          [o, [c, 'Meizu'], [l, f]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
            /(hp)\s([\w\s]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft);\s(lumia[\s\w]+)/i,
            /(lenovo)[_\s-]?([\w-]+)/i,
            /linux;.+(jolla);/i,
            /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i,
          ],
          [c, o, [l, f]],
          [
            /(archos)\s(gamepad2?)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /\s(nook)[\w\s]+build\/(\w+)/i,
            /(dell)\s(strea[kpr\s\d]*[\dko])/i,
            /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,
            /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,
            /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,
            /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i,
          ],
          [c, o, [l, g]],
          [/\s(surface\sduo)\s/i],
          [o, [c, 'Microsoft'], [l, g]],
          [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
          [o, [c, 'Fairphone'], [l, f]],
          [/\s(u304aa)\sbuild/i],
          [o, [c, 'AT&T'], [l, f]],
          [/sie-(\w*)/i],
          [o, [c, 'Siemens'], [l, f]],
          [/[;\/]\s?(rct\w+)\sbuild/i],
          [o, [c, 'RCA'], [l, g]],
          [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
          [o, [c, 'Dell'], [l, g]],
          [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
          [o, [c, 'Verizon'], [l, g]],
          [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
          [o, [c, 'Barnes & Noble'], [l, g]],
          [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
          [o, [c, 'NuVision'], [l, g]],
          [/;\s(k88)\sbuild/i],
          [o, [c, 'ZTE'], [l, g]],
          [/;\s(nx\d{3}j)\sbuild/i],
          [o, [c, 'ZTE'], [l, f]],
          [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
          [o, [c, 'Swiss'], [l, f]],
          [/[;\/]\s?(zur\d{3})\sbuild/i],
          [o, [c, 'Swiss'], [l, g]],
          [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
          [o, [c, 'Zeki'], [l, g]],
          [
            /[;\/]\s([yr]\d{2})\sbuild/i,
            /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i,
          ],
          [[c, 'Dragon Touch'], o, [l, g]],
          [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
          [o, [c, 'Insignia'], [l, g]],
          [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
          [o, [c, 'NextBook'], [l, g]],
          [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
          [[c, 'Voice'], o, [l, f]],
          [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
          [[c, 'LvTel'], o, [l, f]],
          [/;\s(ph-1)\s/i],
          [o, [c, 'Essential'], [l, f]],
          [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
          [o, [c, 'Envizen'], [l, g]],
          [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
          [o, [c, 'MachSpeed'], [l, g]],
          [/[;\/]\s?tu_(1491)\sbuild/i],
          [o, [c, 'Rotor'], [l, g]],
          [/(shield[\w\s]+)\sbuild/i],
          [o, [c, 'Nvidia'], [l, g]],
          [/(sprint)\s(\w+)/i],
          [c, o, [l, f]],
          [/(kin\.[onetw]{3})/i],
          [
            [o, /\./g, ' '],
            [c, 'Microsoft'],
            [l, f],
          ],
          [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [o, [c, 'Zebra'], [l, g]],
          [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
          [o, [c, 'Zebra'], [l, f]],
          [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
          [c, o, [l, d]],
          [/droid.+;\s(shield)\sbuild/i],
          [o, [c, 'Nvidia'], [l, d]],
          [/(playstation\s[345portablevi]+)/i],
          [o, [c, 'Sony'], [l, d]],
          [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
          [o, [c, 'Microsoft'], [l, d]],
          [/smart-tv.+(samsung)/i],
          [c, [l, D]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [o, /^/, 'SmartTV'],
            [c, 'Samsung'],
            [l, D],
          ],
          [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
          [
            [c, 'LG'],
            [l, D],
          ],
          [/(apple)\s?tv/i],
          [c, [o, 'Apple TV'], [l, D]],
          [/crkey/i],
          [
            [o, 'Chromecast'],
            [c, 'Google'],
            [l, D],
          ],
          [/droid.+aft([\w])(\sbuild\/|\))/i],
          [o, [c, 'Amazon'], [l, D]],
          [/\(dtv[\);].+(aquos)/i],
          [o, [c, 'Sharp'], [l, D]],
          [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
          [
            [c, w.trim],
            [o, w.trim],
            [l, D],
          ],
          [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
          [[l, D]],
          [/((pebble))app\/[\d\.]+\s/i],
          [c, o, [l, m]],
          [/droid.+;\s(glass)\s\d/i],
          [o, [c, 'Google'], [l, m]],
          [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
          [o, [c, 'Zebra'], [l, m]],
          [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
          [c, [l, b]],
          [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
          [o, [l, f]],
          [
            /droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i,
          ],
          [o, [l, g]],
          [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
          [[l, w.lowerize]],
          [/(android[\w\.\s\-]{0,9});.+build/i],
          [o, [c, 'Generic']],
          [/(phone)/i],
          [[l, f]],
        ],
        engine: [
          [/windows.+\sedge\/([\w\.]+)/i],
          [h, [a, 'EdgeHTML']],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [h, [a, 'Blink']],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
            /(icab)[\/\s]([23]\.[\d\.]+)/i,
          ],
          [a, h],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [h, a],
        ],
        os: [
          [/microsoft\s(windows)\s(vista|xp)/i],
          [a, h],
          [
            /(windows)\snt\s6\.2;\s(arm)/i,
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i,
          ],
          [a, [h, v.str, A.os.windows.version]],
          [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
          [
            [a, 'Windows'],
            [h, v.str, A.os.windows.version],
          ],
          [
            /ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [h, /_/g, '.'],
            [a, 'iOS'],
          ],
          [
            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i,
          ],
          [
            [a, 'Mac OS'],
            [h, /_/g, '.'],
          ],
          [
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            /(tizen|kaios)[\/\s]([\w\.]+)/i,
            /\((series40);/i,
          ],
          [a, h],
          [/\(bb(10);/i],
          [h, [a, 'BlackBerry']],
          [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
          [h, [a, 'Symbian']],
          [/mozilla.+\(mobile;.+gecko.+firefox/i],
          [[a, 'Firefox OS']],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [h, [a, 'webOS']],
          [/crkey\/([\d\.]+)/i],
          [h, [a, 'Chromecast']],
          [/(cros)\s[\w]+\s([\w\.]+\w)/i],
          [[a, 'Chromium OS'], h],
          [
            /(nintendo|playstation)\s([wids345portablevuch]+)/i,
            /(xbox);\s+xbox\s([^\);]+)/i,
            /(mint)[\/\s\(\)]?(\w*)/i,
            /(mageia|vectorlinux)[;\s]/i,
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,
            /(hurd|linux)\s?([\w\.]*)/i,
            /(gnu)\s?([\w\.]*)/i,
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku)\s(\w+)/i,
          ],
          [a, h],
          [/(sunos)\s?([\w\.\d]*)/i],
          [[a, 'Solaris'], h],
          [
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
            /(unix)\s?([\w\.]*)/i,
          ],
          [a, h],
        ],
      },
      k = function (e, t) {
        if (('object' == typeof e && ((t = e), (e = i)), !(this instanceof k)))
          return new k(e, t).getResult();
        var r =
            e ||
            (void 0 !== n && n.navigator && n.navigator.userAgent
              ? n.navigator.userAgent
              : ''),
          s = t ? w.extend(x, t) : x;
        return (
          (this.getBrowser = function () {
            var e = { name: i, version: i };
            return (
              v.rgx.call(e, r, s.browser), (e.major = w.major(e.version)), e
            );
          }),
          (this.getCPU = function () {
            var e = { architecture: i };
            return v.rgx.call(e, r, s.cpu), e;
          }),
          (this.getDevice = function () {
            var e = { vendor: i, model: i, type: i };
            return v.rgx.call(e, r, s.device), e;
          }),
          (this.getEngine = function () {
            var e = { name: i, version: i };
            return v.rgx.call(e, r, s.engine), e;
          }),
          (this.getOS = function () {
            var e = { name: i, version: i };
            return v.rgx.call(e, r, s.os), e;
          }),
          (this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU(),
            };
          }),
          (this.getUA = function () {
            return r;
          }),
          (this.setUA = function (e) {
            return (
              (r = typeof e === u && e.length > 255 ? w.trim(e, 255) : e), this
            );
          }),
          this.setUA(r),
          this
        );
      };
    (k.VERSION = '0.7.28'),
      (k.BROWSER = { NAME: a, MAJOR: 'major', VERSION: h }),
      (k.CPU = { ARCHITECTURE: p }),
      (k.DEVICE = {
        MODEL: o,
        VENDOR: c,
        TYPE: l,
        CONSOLE: d,
        MOBILE: f,
        SMARTTV: D,
        TABLET: g,
        WEARABLE: m,
        EMBEDDED: b,
      }),
      (k.ENGINE = { NAME: a, VERSION: h }),
      (k.OS = { NAME: a, VERSION: h }),
      e.exports && (t = e.exports = k),
      (t.UAParser = k);
    var F = void 0 !== n && (n.jQuery || n.Zepto);
    if (F && !F.ua) {
      var y = new k();
      (F.ua = y.getResult()),
        (F.ua.get = function () {
          return y.getUA();
        }),
        (F.ua.set = function (e) {
          y.setUA(e);
          var t = y.getResult();
          for (var n in t) F.ua[n] = t[n];
        });
    }
  })('object' == typeof window ? window : ve);
})(Gn, Gn.exports);
var Yn = {};
!(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var t = [],
    n = 'f013',
    i =
      'M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z';
  (e.definition = {
    prefix: 'fas',
    iconName: 'cog',
    icon: [512, 512, t, n, i],
  }),
    (e.faCog = e.definition),
    (e.prefix = 'fas'),
    (e.iconName = 'cog'),
    (e.width = 512),
    (e.height = 512),
    (e.ligatures = t),
    (e.unicode = n),
    (e.svgPathData = i);
})(Yn);
export {
  U as A,
  o as B,
  we as C,
  f as D,
  D as E,
  v as F,
  u as G,
  Ce as H,
  Yn as I,
  k as J,
  Me as K,
  Z as L,
  N as M,
  j as N,
  d as O,
  Vn as P,
  M as Q,
  me as S,
  $ as a,
  B as b,
  z as c,
  x as d,
  F as e,
  A as f,
  T as g,
  R as h,
  De as i,
  he as j,
  E as k,
  _ as l,
  pe as m,
  O as n,
  de as o,
  le as p,
  ce as q,
  se as r,
  p as s,
  C as t,
  ae as u,
  fe as v,
  ue as w,
  oe as x,
  H as y,
  L as z,
};
