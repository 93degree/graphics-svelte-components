const a = 'modulepreload',
  i = {},
  u = 'https://reuters-graphics.github.io/graphics-svelte-components/cdn/app/',
  m = function (s, n) {
    return !n || n.length === 0
      ? s()
      : Promise.all(
          n.map((e) => {
            if (((e = `${u}${e}`), e in i)) return;
            i[e] = !0;
            const r = e.endsWith('.css'),
              o = r ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${e}"]${o}`)) return;
            const t = document.createElement('link');
            if (
              ((t.rel = r ? 'stylesheet' : a),
              r || ((t.as = 'script'), (t.crossOrigin = '')),
              (t.href = e),
              document.head.appendChild(t),
              r)
            )
              return new Promise((c, l) => {
                t.addEventListener('load', c), t.addEventListener('error', l);
              });
          })
        ).then(() => s());
  };
export { m as _ };
