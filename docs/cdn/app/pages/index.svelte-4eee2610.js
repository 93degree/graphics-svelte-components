import{S as s,i as e,s as t,J as a,K as r,j as n,m as o,o as l,x as c,u as i,v as f,l as h,f as g,d as m,k as $,e as p,t as u,n as d,c as v,a as j,g as E,b as w,H as z,L as C,I as b}from"../chunks/vendor-0706e572.js";import{S as I,N as S,M as k,c as q}from"../chunks/@component-docs-658a2fcf.js";import{b as x}from"../chunks/paths-6758d194.js";function L(s){let e,t;return e=new a({props:{fw:!0,size:s[0],icon:r.faCog,primaryColor:"#ccc"}}),{c(){n(e.$$.fragment)},l(s){o(e.$$.fragment,s)},m(s,a){l(e,s,a),t=!0},p(s,[t]){const a={};1&t&&(a.size=s[0]),e.$set(a)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){i(e.$$.fragment,s),t=!1},d(s){f(e,s)}}}function T(s,e,t){let{size:a="sm"}=e;return s.$$set=s=>{"size"in s&&t(0,a=s.size)},[a]}class R extends s{constructor(s){super(),e(this,s,T,L,t,{size:0})}}function A(s,e,t){const a=s.slice();return a[0]=e[t],a}function D(s){let e,t=s[0].title&&s[0].slug&&function(s){let e,t,a,r,n=s[0].title+"";return{c(){e=p("li"),t=p("a"),a=u(n),this.h()},l(s){e=v(s,"LI",{class:!0});var r=j(e);t=v(r,"A",{href:!0,class:!0});var o=j(t);a=E(o,n),o.forEach(m),r.forEach(m),this.h()},h(){w(t,"href",r=`${x}/components/${s[0].slug}/`),w(t,"class","svelte-hjd8qg"),w(e,"class","svelte-hjd8qg")},m(s,r){g(s,e,r),z(e,t),z(t,a)},p:b,d(s){s&&m(e)}}}(s);return{c(){t&&t.c(),e=h()},l(s){t&&t.l(s),e=h()},m(s,a){t&&t.m(s,a),g(s,e,a)},p(s,e){s[0].title&&s[0].slug&&t.p(s,e)},d(s){t&&t.d(s),s&&m(e)}}}function G(s){let e,t,a,r,h,b,x,L,T,G,H,N,y,J;e=new I({props:{seoTitle:"Reuters Graphics components",seoDescription:"Svelte tools to build graphics pages",shareTitle:"Reuters Graphics components",shareDescription:"Svelte tools to build graphics pages",shareImgPath:"images/reuters-graphics.jpg",lang:"en",hostname:"reuters-graphics.github.io"}}),a=new S({}),h=new k({props:{components:q}}),G=new R({});let K=q,M=[];for(let n=0;n<K.length;n+=1)M[n]=D(A(s,K,n));return{c(){n(e.$$.fragment),t=$(),n(a.$$.fragment),r=$(),n(h.$$.fragment),b=$(),x=p("article"),L=p("section"),T=p("h1"),n(G.$$.fragment),H=u(" Components"),N=$(),y=p("ul");for(let s=0;s<M.length;s+=1)M[s].c();this.h()},l(s){o(e.$$.fragment,s),t=d(s),o(a.$$.fragment,s),r=d(s),o(h.$$.fragment,s),b=d(s),x=v(s,"ARTICLE",{});var n=j(x);L=v(n,"SECTION",{});var l=j(L);T=v(l,"H1",{class:!0});var c=j(T);o(G.$$.fragment,c),H=E(c," Components"),c.forEach(m),N=d(l),y=v(l,"UL",{class:!0});var i=j(y);for(let e=0;e<M.length;e+=1)M[e].l(i);i.forEach(m),l.forEach(m),n.forEach(m),this.h()},h(){w(T,"class","svelte-hjd8qg"),w(y,"class","svelte-hjd8qg")},m(s,n){l(e,s,n),g(s,t,n),l(a,s,n),g(s,r,n),l(h,s,n),g(s,b,n),g(s,x,n),z(x,L),z(L,T),l(G,T,null),z(T,H),z(L,N),z(L,y);for(let e=0;e<M.length;e+=1)M[e].m(y,null);J=!0},p(s,[e]){if(0&e){let t;for(K=q,t=0;t<K.length;t+=1){const a=A(s,K,t);M[t]?M[t].p(a,e):(M[t]=D(a),M[t].c(),M[t].m(y,null))}for(;t<M.length;t+=1)M[t].d(1);M.length=K.length}},i(s){J||(c(e.$$.fragment,s),c(a.$$.fragment,s),c(h.$$.fragment,s),c(G.$$.fragment,s),J=!0)},o(s){i(e.$$.fragment,s),i(a.$$.fragment,s),i(h.$$.fragment,s),i(G.$$.fragment,s),J=!1},d(s){f(e,s),s&&m(t),f(a,s),s&&m(r),f(h,s),s&&m(b),s&&m(x),f(G),C(M,s)}}}export default class extends s{constructor(s){super(),e(this,s,null,G,t,{})}}