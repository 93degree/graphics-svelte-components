import{K as e,L as t,S as s,i as r,s as n,e as a,l as o,M as i,c,a as p,d as l,N as h,b as d,F as m,G as g,O as u,P as v,Q as f,f as y}from"./vendor-edfb1eb4.js";import{a as b,b as w}from"./paths-2c73d5fe.js";const E=(t="")=>e(b,t);var T={name:"@reuters-graphics/graphics-svelte-components",version:"0.1.3",type:"module",private:!1,homepage:"https://reuters-graphics.github.io/graphics-svelte-components",repository:"https://github.com/reuters-graphics/graphics-svelte-components",scripts:{start:"svelte-kit dev --open",build:"svelte-kit package && svelte-kit build",postinstall:"husky install",release:"npm run build && npm publish dist",postversion:"git push origin master && git push origin master --tags && npm run release",prepublishOnly:"echo \"Did you mean to run 'yarn release'?\" && exit 1"},"lint-staged":{"*.js":"eslint --cache --fix","*.{js,css,md,svelte}":"prettier --write"},devDependencies:{"@reuters-graphics/eslint-config":"^0.0.2","@reuters-graphics/graphics-bin":"^0.0.17","@reuters-graphics/graphics-kit-publisher":"^0.0.20","@rollup/plugin-dsv":"^2.0.1","@sveltejs/adapter-static":"1.0.0-next.13","@sveltejs/kit":"1.0.0-next.120",autoprefixer:"^10.2.5",eslint:"^7.24.0","eslint-plugin-svelte3":"^3.2.0","front-matter":"^4.0.2",glob:"^7.1.6",husky:">=6","lint-staged":">=10",mdsvex:"^0.9.8","npm-run-all":"^4.1.5",prettier:"^2.2.1","prettier-plugin-svelte":"^2.2.0",sass:"^1.0.0",svelte:"^3.38.3","svelte-preprocess":"^4.7.3",vite:"^2.4.1"},engines:{node:">= 14.16.0"},dependencies:{"@fortawesome/free-brands-svg-icons":"^5.15.3","@fortawesome/free-regular-svg-icons":"^5.15.3","@fortawesome/free-solid-svg-icons":"^5.15.3","@reuters-graphics/style-theme-eisbaer":"^0.3.0",classnames:"^2.3.1",lodash:"^4.17.21","lodash-es":"^4.17.21","prop-types":"^15.7.2","proper-url-join":"^2.1.1","pym.js":"^1.3.2","svelte-fa":"^2.2.0","svelte-i18n":"^3.3.9","svelte-markdown":"^0.1.5","ua-parser-js":"^0.7.27"}};const A={subscribe:e=>(()=>{const e=t("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};var k={"reuters-graphics.jpg":{width:1200,height:675,size:100}};var x=(e,t)=>{var s,r,n,a,o,i,c;s=window,r=document,n="script",a="https://www.google-analytics.com/analytics.js",o="ga",s.GoogleAnalyticsObject=o,s[o]=s[o]||function(){(s[o].q=s[o].q||[]).push(arguments)},s[o].l=1*new Date,i=r.createElement(n),c=r.getElementsByTagName(n)[0],i.async=1,i.src=a,c.parentNode.insertBefore(i,c),window.ga("create","UA-41619329-3",{cookieDomain:"auto"}),window.ga("require","linkid","linkid.js"),window.ga("send","pageview",{page:e,title:t})};function M(e){let t,s,r,n,u,v,y,b,w,T,A,k,x,M,j,I,N,S,D,_,P,$,G,R,z,K,L,F,B,O,q,W;return document.title=s=e[0],{c(){t=a("html"),r=a("meta"),n=a("link"),u=a("link"),v=a("link"),y=a("link"),b=a("link"),w=a("meta"),T=a("meta"),A=a("meta"),k=a("meta"),x=a("meta"),j=a("meta"),I=a("meta"),N=a("meta"),S=a("meta"),D=a("meta"),P=a("meta"),$=a("meta"),G=a("meta"),z=a("meta"),K=a("meta"),L=a("meta"),F=a("meta"),B=new f,O=o(),q=new f,W=o(),this.h()},l(e){const s=i('[data-svelte="svelte-jzg17n"]',document.head);t=c(s,"HTML",{lang:!0}),p(t).forEach(l),r=c(s,"META",{name:!0,content:!0}),n=c(s,"LINK",{rel:!0,href:!0}),u=c(s,"LINK",{rel:!0,type:!0,href:!0}),v=c(s,"LINK",{rel:!0,type:!0,href:!0,sizes:!0}),y=c(s,"LINK",{rel:!0,type:!0,href:!0,sizes:!0}),b=c(s,"LINK",{rel:!0,type:!0,href:!0,sizes:!0}),w=c(s,"META",{property:!0,content:!0}),T=c(s,"META",{property:!0,content:!0}),A=c(s,"META",{property:!0,content:!0,itemprop:!0}),k=c(s,"META",{property:!0,content:!0,itemprop:!0}),x=c(s,"META",{property:!0,content:!0,itemprop:!0}),j=c(s,"META",{property:!0,content:!0}),I=c(s,"META",{name:!0,content:!0}),N=c(s,"META",{name:!0,content:!0}),S=c(s,"META",{name:!0,content:!0}),D=c(s,"META",{name:!0,content:!0}),P=c(s,"META",{name:!0,content:!0}),$=c(s,"META",{name:!0,content:!0}),G=c(s,"META",{name:!0,content:!0}),z=c(s,"META",{property:!0,content:!0}),K=c(s,"META",{property:!0,content:!0}),L=c(s,"META",{property:!0,content:!0}),F=c(s,"META",{property:!0,content:!0}),B=h(s),O=o(),q=h(s),W=o(),s.forEach(l),this.h()},h(){d(t,"lang",e[5]),d(r,"name","description"),d(r,"content",e[1]),d(n,"rel","canonical"),d(n,"href",e[7]),d(u,"rel","shortcut icon"),d(u,"type","image/x-icon"),d(u,"href","https://s3.reutersmedia.net/resources_v2/images/favicon/favicon.ico"),d(v,"rel","icon"),d(v,"type","image/png"),d(v,"href","https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-16x16.png"),d(v,"sizes","16x16"),d(y,"rel","icon"),d(y,"type","image/png"),d(y,"href","https://s1.reutersmedia.net/resources_v2/images/favicon/favicon-32x32.png"),d(y,"sizes","32x32"),d(b,"rel","icon"),d(b,"type","image/png"),d(b,"href","https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-96x96.png"),d(b,"sizes","96x96"),d(w,"property","og:url"),d(w,"content",e[7]),d(T,"property","og:type"),d(T,"content","article"),d(A,"property","og:title"),d(A,"content",e[2]),d(A,"itemprop","name"),d(k,"property","og:description"),d(k,"content",e[3]),d(k,"itemprop","description"),d(x,"property","og:image"),d(x,"content",M=`https://${e[6]}`+E(e[4])),d(x,"itemprop","image"),d(j,"property","og:site_name"),d(j,"content","Reuters"),d(I,"name","twitter:card"),d(I,"content","summary_large_image"),d(N,"name","twitter:site"),d(N,"content","@ReutersGraphics"),d(S,"name","twitter:creator"),d(S,"content","@ReutersGraphics"),d(D,"name","twitter:domain"),d(D,"content",_=`https://${e[6]}`),d(P,"name","twitter:title"),d(P,"content",e[2]),d($,"name","twitter:description"),d($,"content",e[3]),d(G,"name","twitter:image:src"),d(G,"content",R=`https://${e[6]}`+E(e[4])),d(z,"property","fb:app_id"),d(z,"content","319194411438328"),d(K,"property","fb:admins"),d(K,"content","616167736"),d(L,"property","fb:admins"),d(L,"content","625796953"),d(F,"property","fb:admins"),d(F,"content","571759798"),B.a=O,q.a=W},m(e,s){m(document.head,t),m(document.head,r),m(document.head,n),m(document.head,u),m(document.head,v),m(document.head,y),m(document.head,b),m(document.head,w),m(document.head,T),m(document.head,A),m(document.head,k),m(document.head,x),m(document.head,j),m(document.head,I),m(document.head,N),m(document.head,S),m(document.head,D),m(document.head,P),m(document.head,$),m(document.head,G),m(document.head,z),m(document.head,K),m(document.head,L),m(document.head,F),B.m('<script type="application/ld+json" ✂prettier:content✂="JyArIEpTT04uc3RyaW5naWZ5KG9yZ0xkSnNvbikgKyAn" ✂prettier:content✂="e30=">{}<\/script>',document.head),m(document.head,O),q.m('<script type="application/ld+json" ✂prettier:content✂="JyArIEpTT04uc3RyaW5naWZ5KGFydGljbGVMZEpzb24pICsgJw==" ✂prettier:content✂="e30=">{}<\/script>',document.head),m(document.head,W)},p(e,[n]){32&n&&d(t,"lang",e[5]),1&n&&s!==(s=e[0])&&(document.title=s),2&n&&d(r,"content",e[1]),4&n&&d(A,"content",e[2]),8&n&&d(k,"content",e[3]),80&n&&M!==(M=`https://${e[6]}`+E(e[4]))&&d(x,"content",M),64&n&&_!==(_=`https://${e[6]}`)&&d(D,"content",_),4&n&&d(P,"content",e[2]),8&n&&d($,"content",e[3]),80&n&&R!==(R=`https://${e[6]}`+E(e[4]))&&d(G,"content",R)},i:g,o:g,d(e){l(t),l(r),l(n),l(u),l(v),l(y),l(b),l(w),l(T),l(A),l(k),l(x),l(j),l(I),l(N),l(S),l(D),l(P),l($),l(G),l(z),l(K),l(L),l(F),l(O),e&&B.d(),l(W),e&&q.d()}}}function j(t,s,r){let n;u(t,A,(e=>r(8,n=e)));let{seoTitle:a}=s,{seoDescription:o}=s,{shareTitle:i}=s,{shareDescription:c}=s,{shareImgPath:p}=s,{lang:l="en"}=s,{hostname:h="graphics.reuters.com"}=s;const d=v(T,"homepage")?e(T.homepage,n.path,{trailingSlash:!0}):v(T,"reuters.preview")?e(T.reuters.preview,n.path,{trailingSlash:!0}):n.host?e("https://"+n.host,n.path,{trailingSlash:!0}):`https://${h}`;return"graphics.reuters.com"===window.location.host&&(x(d,a),(()=>{const e=window.googletag||{};e.cmd=e.cmd||[],function(){const e=document.createElement("script");e.async=!0,e.type="text/javascript";const t="https:"===document.location.protocol;e.src=(t?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";const s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s)}(),e.cmd.push((function(){e.defineSlot("/4735792/reuters_investigates",[[300,250]],"div-gpt-ad-1441822201033-0").addService(e.pubads()),e.pubads().enableSingleRequest(),e.enableServices()}))})()),E(p),E(p),v(k,`${p}.width`,1200),v(k,`${p}.height`,600),(new Date).getFullYear(),v(T,"reuters.graphic.published"),v(T,"reuters.graphic.published"),v(T,"reuters.graphic.updated"),v(T,"reuters.graphic.authors",[]).map((({name:e,url:t})=>({"@type":"Person",name:e,url:t}))),t.$$set=e=>{"seoTitle"in e&&r(0,a=e.seoTitle),"seoDescription"in e&&r(1,o=e.seoDescription),"shareTitle"in e&&r(2,i=e.shareTitle),"shareDescription"in e&&r(3,c=e.shareDescription),"shareImgPath"in e&&r(4,p=e.shareImgPath),"lang"in e&&r(5,l=e.lang),"hostname"in e&&r(6,h=e.hostname)},[a,o,i,c,p,l,h,d]}class I extends s{constructor(e){super(),r(this,e,j,M,n,{seoTitle:0,seoDescription:1,shareTitle:2,shareDescription:3,shareImgPath:4,lang:5,hostname:6})}}function N(e){let t,s,r,n,o,i;return{c(){t=a("nav"),s=a("div"),r=a("a"),n=a("figure"),o=a("img"),this.h()},l(e){t=c(e,"NAV",{class:!0});var a=p(t);s=c(a,"DIV",{class:!0});var i=p(s);r=c(i,"A",{href:!0});var h=p(r);n=c(h,"FIGURE",{class:!0});var d=p(n);o=c(d,"IMG",{class:!0,src:!0,alt:!0}),d.forEach(l),h.forEach(l),i.forEach(l),a.forEach(l),this.h()},h(){d(o,"class","logo reuters-graphics"),o.src!==(i="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg")&&d(o,"src","https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg"),d(o,"alt","Reuters graphics logo"),d(n,"class","navbar-brand"),d(r,"href",`${w}/`),d(s,"class","logo-container"),d(t,"class","nav svelte-ca3v86")},m(e,a){y(e,t,a),m(t,s),m(s,r),m(r,n),m(n,o)},p:g,i:g,o:g,d(e){e&&l(t)}}}class S extends s{constructor(e){super(),r(this,e,null,N,n,{})}}var D=[{title:"BodyText",description:"Parse mardown-formatted text.",slug:"body-text",path:"BodyText"},{title:"EmbedPreviewerLink",description:"An embed tool for development in graphics-kit.",slug:"embed-previewer-link",path:"EmbedPreviewerLink"},{title:"EndNotes",description:"End notes section.",slug:"end-notes",path:"EndNotes"},{title:"Footer",description:"Add a bottom footer bar to the page.",slug:"footer",path:"Footer"},{title:"Framer",description:"An embed tool for development in the graphics kit.",slug:"framer",path:"Framer"},{title:"Image",description:"A full-width image inside the text well.",slug:"image",path:"Image"},{title:"Nav",description:"Add a top-level nav bar to the page.",slug:"nav",path:"Nav"},{title:"PymChild",description:"A Pym.js child instance for embeddables.",slug:"pym-child",path:"PymChild"},{title:"Referrals",description:"Add a referrals bar with recent graphics stories.",slug:"referrals",path:"Referrals"},{title:"SEO",description:"Add SEO to the page.",slug:"seo",path:"SEO"},{title:"Sharer",description:"Add share tools to a page.",slug:"sharer",path:"Sharer"}];export{S as N,I as S,D as c};
