import {
  S as s,
  i as e,
  s as t,
  D as n,
  E as l,
  x as o,
  u,
} from './chunks/vendor-edfb1eb4.js';
function c(s) {
  let e;
  const t = s[1].default,
    c = n(t, s, s[0], null);
  return {
    c() {
      c && c.c();
    },
    l(s) {
      c && c.l(s);
    },
    m(s, t) {
      c && c.m(s, t), (e = !0);
    },
    p(s, [n]) {
      c && c.p && (!e || 1 & n) && l(c, t, s, s[0], e ? n : -1, null, null);
    },
    i(s) {
      e || (o(c, s), (e = !0));
    },
    o(s) {
      u(c, s), (e = !1);
    },
    d(s) {
      c && c.d(s);
    },
  };
}
function r(s, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return (
    (s.$$set = (s) => {
      '$$scope' in s && t(0, (l = s.$$scope));
    }),
    [l, n]
  );
}
export default class extends s {
  constructor(s) {
    super(), e(this, s, r, c, t, {});
  }
}
