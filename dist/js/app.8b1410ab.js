(function(){"use strict";var t={42:function(t,e,n){var o=n(242),r=n(396);function i(t,e){const n=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r.Wm)(o)],64)}var a=n(89);const u={},c=(0,a.Z)(u,[["render",i]]);var s=c,l=n(483);const f={class:"home"};function p(t,e,n,o,i,a){const u=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(u,{msg:"Welcome to Your Vue.js App"})])}const d={class:"container"},m=["src"];function v(t,e,n,o,i,a){return(0,r.wg)(),(0,r.iD)("ul",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.images,((t,e)=>((0,r.wg)(),(0,r.iD)("li",{key:e},[(0,r._)("img",{src:t.attributes.Image.data[0].attributes.url,alt:"image"},null,8,m)])))),128))])}var g={name:"HelloWorld",props:{msg:String},beforeMount(){this.getImages()},data(){return{images:[]}},methods:{async getImages(){const t=await fetch("https://strapi-production-4272.up.railway.app/api/illustrations?populate=Image",{method:"GET",headers:{"Content-Type":"application/json"}}),e=await t.json();console.log(e.data),this.images=e.data}}};const h=(0,a.Z)(g,[["render",v],["__scopeId","data-v-725a30a5"]]);var b=h,y={name:"HomeView",components:{HelloWorld:b}};const w=(0,a.Z)(y,[["render",p]]);var k=w;const j=[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,381))}],O=(0,l.p7)({history:(0,l.r5)(),routes:j});var T=O,W=n(65),_=(0,W.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(s).use(_).use(T).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.5de11cf6.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="strapi:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=o),t[o]=[r];var p=function(e,n){u.onerror=u.onload=null,clearTimeout(d);var r=t[o];if(delete t[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),u=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],u=o[1],c=o[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var l=c(n)}for(e&&e(o);s<a.length;s++)i=a[s],n.o(t,i)&&t[i]&&t[i][0](),t[a[s]]=0;return n.O(l)},o=self["webpackChunkstrapi"]=self["webpackChunkstrapi"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(42)}));o=n.O(o)})();
//# sourceMappingURL=app.8b1410ab.js.map