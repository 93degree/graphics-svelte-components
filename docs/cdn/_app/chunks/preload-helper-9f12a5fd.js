let e;
const r = {},
  t = function (t, n) {
    if (!n) return t();
    if (void 0 === e) {
      const r = document.createElement('link').relList;
      e =
        r && r.supports && r.supports('modulepreload')
          ? 'modulepreload'
          : 'preload';
    }
    return Promise.all(
      n.map((t) => {
        if (t in r) return;
        r[t] = !0;
        const n = t.endsWith('.css'),
          o = n ? '[rel="stylesheet"]' : '';
        if (document.querySelector(`link[href="${t}"]${o}`)) return;
        const s = document.createElement('link');
        return (
          (s.rel = n ? 'stylesheet' : e),
          n || ((s.as = 'script'), (s.crossOrigin = '')),
          (s.href = t),
          document.head.appendChild(s),
          n
            ? new Promise((e, r) => {
                s.addEventListener('load', e), s.addEventListener('error', r);
              })
            : void 0
        );
      })
    ).then(() => t());
  };
export { t as _ };
