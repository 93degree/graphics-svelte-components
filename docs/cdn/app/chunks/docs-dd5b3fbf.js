import{S as a,i as s,s as n,E as t,F as p,G as e,x as o,u as c,e as l,k as i,j as u,c as r,a as k,n as d,m as h,d as g,b as m,f as $,H as f,o as v,r as y,w as E,v as w,Z as A,A as x,D as S,t as I,g as P,I as T}from"./vendor-4a02687e.js";import{D as _}from"./index-218cb765.js";import{_ as z}from"./preload-helper-438f94a3.js";const D=a=>({}),H=a=>({}),b=a=>({}),j=a=>({});function q(a){let s;const n=a[6].title,l=S(n,a,a[5],j);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,n){l&&l.m(a,n),s=!0},p(a,o){l&&l.p&&(!s||32&o)&&t(l,n,a,a[5],s?e(n,a[5],o,b):p(a[5]),j)},i(a){s||(o(l,a),s=!0)},o(a){c(l,a),s=!1},d(a){l&&l.d(a)}}}function G(a){let s;const n=a[6].notes,l=S(n,a,a[5],H);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,n){l&&l.m(a,n),s=!0},p(a,o){l&&l.p&&(!s||32&o)&&t(l,n,a,a[5],s?e(n,a[5],o,D):p(a[5]),H)},i(a){s||(o(l,a),s=!0)},o(a){c(l,a),s=!1},d(a){l&&l.d(a)}}}function L(a){let s,n,t,p,e,A,x=a[3].title&&q(a);var S=a[2];S&&(t=new S({}));let I=a[3].notes&&G(a);return{c(){s=l("section"),x&&x.c(),n=i(),t&&u(t.$$.fragment),p=i(),I&&I.c(),this.h()},l(a){s=r(a,"SECTION",{class:!0,id:!0});var e=k(s);x&&x.l(e),n=d(e),t&&h(t.$$.fragment,e),p=d(e),I&&I.l(e),e.forEach(g),this.h()},h(){m(s,"class",e="ai2svelte graphic "+a[1]),m(s,"id",a[0])},m(a,e){$(a,s,e),x&&x.m(s,null),f(s,n),t&&v(t,s,null),f(s,p),I&&I.m(s,null),A=!0},p(a,[l]){if(a[3].title?x?(x.p(a,l),8&l&&o(x,1)):(x=q(a),x.c(),o(x,1),x.m(s,n)):x&&(y(),c(x,1,1,(()=>{x=null})),E()),S!==(S=a[2])){if(t){y();const a=t;c(a.$$.fragment,1,0,(()=>{w(a,1)})),E()}S?(t=new S({}),u(t.$$.fragment),o(t.$$.fragment,1),v(t,s,p)):t=null}a[3].notes?I?(I.p(a,l),8&l&&o(I,1)):(I=G(a),I.c(),o(I,1),I.m(s,null)):I&&(y(),c(I,1,1,(()=>{I=null})),E()),(!A||2&l&&e!==(e="ai2svelte graphic "+a[1]))&&m(s,"class",e),(!A||1&l)&&m(s,"id",a[0])},i(a){A||(o(x),t&&o(t.$$.fragment,a),o(I),A=!0)},o(a){c(x),t&&c(t.$$.fragment,a),c(I),A=!1},d(a){a&&g(s),x&&x.d(),t&&w(t),I&&I.d()}}}function N(a,s,n){let{$$slots:t={},$$scope:p}=s;const e=A(t);let{path:o}=s,{id:c}=s,{size:l}=s,i=null;return x((async()=>{try{n(2,i=(await z((()=>import("./_ai-chart-59506de7.js")),["chunks/_ai-chart-59506de7.js","assets/_ai-chart-dea94a91.css","chunks/vendor-4a02687e.js"])).default)}catch(a){console.log(`Unable to load ai2svelte component at: ${o}.`,a)}})),a.$$set=a=>{"path"in a&&n(4,o=a.path),"id"in a&&n(0,c=a.id),"size"in a&&n(1,l=a.size),"$$scope"in a&&n(5,p=a.$$scope)},[c,l,i,e,o,p,t]}class M extends a{constructor(a){super(),s(this,a,N,L,n,{path:4,id:0,size:1})}}function U(a){let s,n;return s=new M({props:{path:"_ai-charty",size:"normal"}}),{c(){u(s.$$.fragment)},l(a){h(s.$$.fragment,a)},m(a,t){v(s,a,t),n=!0},p:T,i(a){n||(o(s.$$.fragment,a),n=!0)},o(a){c(s.$$.fragment,a),n=!1},d(a){w(s,a)}}}function O(a){let s,n,t,p,e,o;return{c(){s=l("div"),n=l("h4"),t=I("Earthquake in Haiti"),p=i(),e=l("p"),o=I("A 7.0 magnitude earthquake struck the island on Tuesday."),this.h()},l(a){s=r(a,"DIV",{slot:!0,class:!0});var c=k(s);n=r(c,"H4",{});var l=k(n);t=P(l,"Earthquake in Haiti"),l.forEach(g),p=d(c),e=r(c,"P",{});var i=k(e);o=P(i,"A 7.0 magnitude earthquake struck the island on Tuesday."),i.forEach(g),c.forEach(g),this.h()},h(){m(s,"slot","title"),m(s,"class","title")},m(a,c){$(a,s,c),f(s,n),f(n,t),f(s,p),f(s,e),f(e,o)},d(a){a&&g(s)}}}function R(a){let s,n,t,p,e,o;return{c(){s=l("aside"),n=l("p"),t=I("Note: Data current as of Wednesday."),p=i(),e=l("p"),o=I("Source: USGIS"),this.h()},l(a){s=r(a,"ASIDE",{slot:!0});var c=k(s);n=r(c,"P",{class:!0});var l=k(n);t=P(l,"Note: Data current as of Wednesday."),l.forEach(g),p=d(c),e=r(c,"P",{class:!0});var i=k(e);o=P(i,"Source: USGIS"),i.forEach(g),c.forEach(g),this.h()},h(){m(n,"class","note"),m(e,"class","source"),m(s,"slot","notes")},m(a,c){$(a,s,c),f(s,n),f(n,t),f(s,p),f(s,e),f(e,o)},d(a){a&&g(s)}}}function W(a){let s,n;return s=new M({props:{path:"_ai-charty",id:"ai-map",size:"wide",$$slots:{notes:[R],title:[O]},$$scope:{ctx:a}}}),{c(){u(s.$$.fragment)},l(a){h(s.$$.fragment,a)},m(a,t){v(s,a,t),n=!0},p(a,n){const t={};1&n&&(t.$$scope={dirty:n,ctx:a}),s.$set(t)},i(a){n||(o(s.$$.fragment,a),n=!0)},o(a){c(s.$$.fragment,a),n=!1},d(a){w(s,a)}}}function C(a){let s,n,t,p,e,y,E,A,x,S,T,z,D,H,b,j,q,G;return D=new _({props:{$$slots:{default:[U]},$$scope:{ctx:a}}}),q=new _({props:{$$slots:{default:[W]},$$scope:{ctx:a}}}),{c(){s=l("section"),n=l("h2"),t=I(F),p=i(),e=l("p"),y=I("Puts ai2svelte inside a graphic section with options to add chart chatter."),E=i(),A=l("p"),x=I("The props can be passed from an archieML-formatted Google doc. If you’re using the graphics kit, this component is already wired in so all you need to do is add the necessary block to your doc and the ai2svelte will show up."),S=i(),T=l("pre"),z=i(),u(D.$$.fragment),H=i(),b=l("pre"),j=i(),u(q.$$.fragment),this.h()},l(a){s=r(a,"SECTION",{});var o=k(s);n=r(o,"H2",{});var c=k(n);t=P(c,F),c.forEach(g),p=d(o),e=r(o,"P",{});var l=k(e);y=P(l,"Puts ai2svelte inside a graphic section with options to add chart chatter."),l.forEach(g),E=d(o),A=r(o,"P",{});var i=k(A);x=P(i,"The props can be passed from an archieML-formatted Google doc. If you’re using the graphics kit, this component is already wired in so all you need to do is add the necessary block to your doc and the ai2svelte will show up."),i.forEach(g),o.forEach(g),S=d(a),T=r(a,"PRE",{class:!0}),k(T).forEach(g),z=d(a),h(D.$$.fragment,a),H=d(a),b=r(a,"PRE",{class:!0}),k(b).forEach(g),j=d(a),h(q.$$.fragment,a),this.h()},h(){m(T,"class","language-svelte"),m(b,"class","language-svelte")},m(a,o){$(a,s,o),f(s,n),f(n,t),f(s,p),f(s,e),f(e,y),f(s,E),f(s,A),f(A,x),$(a,S,o),$(a,T,o),T.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>./ai2html/ai-chart.svelte<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>',$(a,z,o),v(D,a,o),$(a,H,o),$(a,b,o),b.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Ai2svelte <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'@reuters-graphics/graphics-svelte-components\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>./ai2html/ai-chart.svelte<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ai-map<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wide<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- Add a title and/or notes with slots --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Earthquake in Haiti<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A 7.0 magnitude earthquake struck the island on Tuesday.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notes<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>note<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Note: Data current as of Wednesday.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>source<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Source: USGIS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Ai2svelte</span><span class="token punctuation">></span></span></code>',$(a,j,o),v(q,a,o),G=!0},p(a,[s]){const n={};1&s&&(n.$$scope={dirty:s,ctx:a}),D.$set(n);const t={};1&s&&(t.$$scope={dirty:s,ctx:a}),q.$set(t)},i(a){G||(o(D.$$.fragment,a),o(q.$$.fragment,a),G=!0)},o(a){c(D.$$.fragment,a),c(q.$$.fragment,a),G=!1},d(a){a&&g(s),a&&g(S),a&&g(T),a&&g(z),w(D,a),a&&g(H),a&&g(b),a&&g(j),w(q,a)}}}const V={title:"Ai2svelte",description:"Ai2html inside a graphics section",slug:"ai2svelte"},{title:F,description:Z,slug:B}=V;export default class extends a{constructor(a){super(),s(this,a,null,C,n,{})}}export{V as metadata};
