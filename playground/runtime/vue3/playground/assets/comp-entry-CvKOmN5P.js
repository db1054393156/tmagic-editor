import"./index-Dff9FH9L.js";var ye=(e=>(e.CONTAINER="container",e.PAGE="page",e.ROOT="app",e.PAGE_FRAGMENT="page-fragment",e))(ye||{});const Re=(e="")=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),J="__tmagic__dslNode",$e=e=>typeof e[J]>"u"||e[J]===!0,V=({methods:e={},config:t,iteratorContainerId:i,iteratorIndex:o})=>{const n=VueDemi.inject("app"),r={config:t,...e},a=c=>{if(c.visible===!1||c.condResult===!1)return!1;const u=c.display;return typeof u=="function"?u(n):u!==!1},s=$e(t)&&t.id?n==null?void 0:n.getNode(t.id,i,o):void 0;return s&&(s.emit("created",r),VueDemi.onMounted(()=>{s.emit("mounted",r)}),VueDemi.onBeforeUnmount(()=>{s.emit("destroy",r)})),{app:n,node:s,display:a}},Le=VueDemi.defineComponent({props:{config:{type:Object,required:!0},model:{type:Object,default:()=>({})}},setup(e){const t=()=>{window.location.reload()},{app:i}=V({config:e.config,methods:{refresh:t}});return{app:i}}}),S=(e,t)=>{const i=e.__vccOpts||e;for(const[o,n]of t)i[o]=n;return i};function ke(e,t,i,o,n,r){const a=Vue.resolveComponent("magic-ui-container");return Vue.openBlock(),Vue.createBlock(a,{class:"magic-ui-page","data-tmagic-id":e.config.id,config:e.config},null,8,["data-tmagic-id","config"])}const ve=S(Le,[["render",ke]]),Fe=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(e){const{display:t,app:i}=V({config:e.config,iteratorContainerId:e.iteratorContainerId,iteratorIndex:e.iteratorIndex,methods:{}}),o=VueDemi.computed(()=>{const r=["magic-ui-container"];return e.config.layout&&r.push("magic-layout-".concat(e.config.layout)),e.config.className&&r.push(e.config.className),r.join(" ")}),n=VueDemi.computed(()=>e.config[J]?{}:i==null?void 0:i.transformStyle(e.config.style||{}));return{app:i,className:o,style:n,IS_DSL_NODE_KEY:J,display:t,toLine:Re}}});function Ue(e,t,i,o,n,r){return e.display(e.config)?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,class:Vue.normalizeClass(e.className),style:Vue.normalizeStyle(e.style)},[Vue.renderSlot(e.$slots,"default",{},()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.config.items,(a,s)=>{var c;return Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[e.display(a)?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent("magic-ui-".concat(e.toLine(a.type))),{key:a.id,"data-tmagic-id":a.id,"data-tmagic-iterator-index":e.iteratorIndex,"data-tmagic-iterator-container-id":e.iteratorContainerId,"data-container-index":s,class:Vue.normalizeClass(a.className?"".concat(a.className," magic-ui-").concat(e.toLine(a.type)):"magic-ui-".concat(e.toLine(a.type))),style:Vue.normalizeStyle((c=e.app)==null?void 0:c.transformStyle(a.style||{})),config:{...a,[e.IS_DSL_NODE_KEY]:!0},"container-index":s,"iterator-index":e.iteratorIndex,"iterator-container-id":e.iteratorContainerId},null,8,["data-tmagic-id","data-tmagic-iterator-index","data-tmagic-iterator-container-id","data-container-index","class","style","config","container-index","iterator-index","iterator-container-id"])):Vue.createCommentVNode("",!0)],64)}),256))])],6)):Vue.createCommentVNode("",!0)}const Oe=S(Fe,[["render",Ue]]),ze=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(e){V({config:e.config,methods:{},iteratorContainerId:e.iteratorContainerId,iteratorIndex:e.iteratorIndex})}});function je(e,t,i,o,n,r){return Vue.openBlock(),Vue.createElementBlock("button",null,[Vue.renderSlot(e.$slots,"default",{},()=>{var a;return[Vue.createTextVNode(Vue.toDisplayString(((a=e.config)==null?void 0:a.text)||""),1)]})])}const He=S(ze,[["render",je]]),Ke=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(e){V({config:e.config,methods:{},iteratorContainerId:e.iteratorContainerId,iteratorIndex:e.iteratorIndex})}});function Je(e,t,i,o,n,r){return Vue.openBlock(),Vue.createElementBlock("p",null,Vue.toDisplayString(e.config.text),1)}const Ye=S(Ke,[["render",Je]]),qe=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(e){const t=()=>{e.config.url&&(window.location.href=e.config.url)};return V({config:e.config,iteratorContainerId:e.iteratorContainerId,iteratorIndex:e.iteratorIndex,methods:{}}),{clickHandler:t}}}),Ge=["src"];function Qe(e,t,i,o,n,r){return Vue.openBlock(),Vue.createElementBlock("img",{src:e.config.src,onClick:t[0]||(t[0]=(...a)=>e.clickHandler&&e.clickHandler(...a))},null,8,Ge)}const xe=S(qe,[["render",Qe]]);var z={},We=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Ce={},N={};let ce;const Ze=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};N.getSymbolTotalCodewords=function(t){return Ze[t]};N.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ce=t};N.isKanjiModeEnabled=function(){return typeof ce<"u"};N.toSJIS=function(t){return ce(t)};var G={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,n){if(e.isValid(o))return o;try{return t(o)}catch(r){return n}}})(G);function pe(){this.buffer=[],this.length=0}pe.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Xe=pe;function j(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}j.prototype.set=function(e,t,i,o){const n=e*this.size+t;this.data[n]=i,o&&(this.reservedBit[n]=!0)};j.prototype.get=function(e,t){return this.data[e*this.size+t]};j.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};j.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var et=j,we={};(function(e){const t=N.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const n=Math.floor(o/7)+2,r=t(o),a=r===145?26:Math.ceil((r-13)/(2*n-2))*2,s=[r-7];for(let c=1;c<n-1;c++)s[c]=s[c-1]-a;return s.push(6),s.reverse()},e.getPositions=function(o){const n=[],r=e.getRowColCoords(o),a=r.length;for(let s=0;s<a;s++)for(let c=0;c<a;c++)s===0&&c===0||s===0&&c===a-1||s===a-1&&c===0||n.push([r[s],r[c]]);return n}})(we);var Ee={};const tt=N.getSymbolSize,ge=7;Ee.getPositions=function(t){const i=tt(t);return[[0,0],[i-ge,0],[0,i-ge]]};var Ie={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const r=n.size;let a=0,s=0,c=0,u=null,l=null;for(let w=0;w<r;w++){s=c=0,u=l=null;for(let g=0;g<r;g++){let f=n.get(w,g);f===u?s++:(s>=5&&(a+=t.N1+(s-5)),u=f,s=1),f=n.get(g,w),f===l?c++:(c>=5&&(a+=t.N1+(c-5)),l=f,c=1)}s>=5&&(a+=t.N1+(s-5)),c>=5&&(a+=t.N1+(c-5))}return a},e.getPenaltyN2=function(n){const r=n.size;let a=0;for(let s=0;s<r-1;s++)for(let c=0;c<r-1;c++){const u=n.get(s,c)+n.get(s,c+1)+n.get(s+1,c)+n.get(s+1,c+1);(u===4||u===0)&&a++}return a*t.N2},e.getPenaltyN3=function(n){const r=n.size;let a=0,s=0,c=0;for(let u=0;u<r;u++){s=c=0;for(let l=0;l<r;l++)s=s<<1&2047|n.get(u,l),l>=10&&(s===1488||s===93)&&a++,c=c<<1&2047|n.get(l,u),l>=10&&(c===1488||c===93)&&a++}return a*t.N3},e.getPenaltyN4=function(n){let r=0;const a=n.data.length;for(let c=0;c<a;c++)r+=n.data[c];return Math.abs(Math.ceil(r*100/a/5)-10)*t.N4};function i(o,n,r){switch(o){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(n,r){const a=r.size;for(let s=0;s<a;s++)for(let c=0;c<a;c++)r.isReserved(c,s)||r.xor(c,s,i(n,c,s))},e.getBestMask=function(n,r){const a=Object.keys(e.Patterns).length;let s=0,c=1/0;for(let u=0;u<a;u++){r(u),e.applyMask(u,n);const l=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(u,n),l<c&&(c=l,s=u)}return s}})(Ie);var Q={};const P=G,H=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],K=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Q.getBlocksCount=function(t,i){switch(i){case P.L:return H[(t-1)*4+0];case P.M:return H[(t-1)*4+1];case P.Q:return H[(t-1)*4+2];case P.H:return H[(t-1)*4+3];default:return}};Q.getTotalCodewordsCount=function(t,i){switch(i){case P.L:return K[(t-1)*4+0];case P.M:return K[(t-1)*4+1];case P.Q:return K[(t-1)*4+2];case P.H:return K[(t-1)*4+3];default:return}};var Be={},x={};const U=new Uint8Array(512),Y=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)U[i]=t,Y[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)U[i]=U[i-255]})();x.log=function(t){if(t<1)throw new Error("log("+t+")");return Y[t]};x.exp=function(t){return U[t]};x.mul=function(t,i){return t===0||i===0?0:U[Y[t]+Y[i]]};(function(e){const t=x;e.mul=function(o,n){const r=new Uint8Array(o.length+n.length-1);for(let a=0;a<o.length;a++)for(let s=0;s<n.length;s++)r[a+s]^=t.mul(o[a],n[s]);return r},e.mod=function(o,n){let r=new Uint8Array(o);for(;r.length-n.length>=0;){const a=r[0];for(let c=0;c<n.length;c++)r[c]^=t.mul(n[c],a);let s=0;for(;s<r.length&&r[s]===0;)s++;r=r.slice(s)}return r},e.generateECPolynomial=function(o){let n=new Uint8Array([1]);for(let r=0;r<o;r++)n=e.mul(n,new Uint8Array([1,t.exp(r)]));return n}})(Be);const Ae=Be;function ue(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ue.prototype.initialize=function(t){this.degree=t,this.genPoly=Ae.generateECPolynomial(this.degree)};ue.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=Ae.mod(i,this.genPoly),n=this.degree-o.length;if(n>0){const r=new Uint8Array(this.degree);return r.set(o,n),r}return o};var nt=ue,Ne={},R={},le={};le.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var T={};const _e="[0-9]+",rt="[A-Z $%*+\\-./:]+";let O="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";O=O.replace(/u/g,"\\u");const ot="(?:(?![A-Z0-9 $%*+\\-./:]|"+O+")(?:.|[\r\n]))+";T.KANJI=new RegExp(O,"g");T.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");T.BYTE=new RegExp(ot,"g");T.NUMERIC=new RegExp(_e,"g");T.ALPHANUMERIC=new RegExp(rt,"g");const it=new RegExp("^"+O+"$"),at=new RegExp("^"+_e+"$"),st=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");T.testKanji=function(t){return it.test(t)};T.testNumeric=function(t){return at.test(t)};T.testAlphanumeric=function(t){return st.test(t)};(function(e){const t=le,i=T;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,a){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?r.ccBits[0]:a<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return i.testNumeric(r)?e.NUMERIC:i.testAlphanumeric(r)?e.ALPHANUMERIC:i.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits};function o(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(r,a){if(e.isValid(r))return r;try{return o(r)}catch(s){return a}}})(R);(function(e){const t=N,i=Q,o=G,n=R,r=le,a=7973,s=t.getBCHDigit(a);function c(g,f,y){for(let C=1;C<=40;C++)if(f<=e.getCapacity(C,y,g))return C}function u(g,f){return n.getCharCountIndicator(g,f)+4}function l(g,f){let y=0;return g.forEach(function(C){const A=u(C.mode,f);y+=A+C.getBitsLength()}),y}function w(g,f){for(let y=1;y<=40;y++)if(l(g,y)<=e.getCapacity(y,f,n.MIXED))return y}e.from=function(f,y){return r.isValid(f)?parseInt(f,10):y},e.getCapacity=function(f,y,C){if(!r.isValid(f))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=n.BYTE);const A=t.getSymbolTotalCodewords(f),m=i.getTotalCodewordsCount(f,y),p=(A-m)*8;if(C===n.MIXED)return p;const h=p-u(C,f);switch(C){case n.NUMERIC:return Math.floor(h/10*3);case n.ALPHANUMERIC:return Math.floor(h/11*2);case n.KANJI:return Math.floor(h/13);case n.BYTE:default:return Math.floor(h/8)}},e.getBestVersionForData=function(f,y){let C;const A=o.from(y,o.M);if(Array.isArray(f)){if(f.length>1)return w(f,A);if(f.length===0)return 1;C=f[0]}else C=f;return c(C.mode,C.getLength(),A)},e.getEncodedBits=function(f){if(!r.isValid(f)||f<7)throw new Error("Invalid QR Code version");let y=f<<12;for(;t.getBCHDigit(y)-s>=0;)y^=a<<t.getBCHDigit(y)-s;return f<<12|y}})(Ne);var be={};const oe=N,Ve=1335,ct=21522,he=oe.getBCHDigit(Ve);be.getEncodedBits=function(t,i){const o=t.bit<<3|i;let n=o<<10;for(;oe.getBCHDigit(n)-he>=0;)n^=Ve<<oe.getBCHDigit(n)-he;return(o<<10|n)^ct};var Se={};const ut=R;function $(e){this.mode=ut.NUMERIC,this.data=e.toString()}$.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};$.prototype.getLength=function(){return this.data.length};$.prototype.getBitsLength=function(){return $.getBitsLength(this.data.length)};$.prototype.write=function(t){let i,o,n;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),n=parseInt(o,10),t.put(n,10);const r=this.data.length-i;r>0&&(o=this.data.substr(i),n=parseInt(o,10),t.put(n,r*3+1))};var lt=$;const ft=R,X=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function L(e){this.mode=ft.ALPHANUMERIC,this.data=e}L.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};L.prototype.getLength=function(){return this.data.length};L.prototype.getBitsLength=function(){return L.getBitsLength(this.data.length)};L.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=X.indexOf(this.data[i])*45;o+=X.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(X.indexOf(this.data[i]),6)};var dt=L,gt=function(t){for(var i=[],o=t.length,n=0;n<o;n++){var r=t.charCodeAt(n);if(r>=55296&&r<=56319&&o>n+1){var a=t.charCodeAt(n+1);a>=56320&&a<=57343&&(r=(r-55296)*1024+a-56320+65536,n+=1)}if(r<128){i.push(r);continue}if(r<2048){i.push(r>>6|192),i.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){i.push(r>>12|224),i.push(r>>6&63|128),i.push(r&63|128);continue}if(r>=65536&&r<=1114111){i.push(r>>18|240),i.push(r>>12&63|128),i.push(r>>6&63|128),i.push(r&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const ht=gt,mt=R;function k(e){this.mode=mt.BYTE,typeof e=="string"&&(e=ht(e)),this.data=new Uint8Array(e)}k.getBitsLength=function(t){return t*8};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var yt=k;const Ct=R,pt=N;function v(e){this.mode=Ct.KANJI,this.data=e}v.getBitsLength=function(t){return t*13};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=pt.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var wt=v,Te={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,n){var r={},a={};a[o]=0;var s=t.PriorityQueue.make();s.push(o,0);for(var c,u,l,w,g,f,y,C,A;!s.empty();){c=s.pop(),u=c.value,w=c.cost,g=i[u]||{};for(l in g)g.hasOwnProperty(l)&&(f=g[l],y=w+f,C=a[l],A=typeof a[l]>"u",(A||C>y)&&(a[l]=y,s.push(l,y),r[l]=u))}if(typeof n<"u"&&typeof a[n]>"u"){var m=["Could not find a path from ",o," to ",n,"."].join("");throw new Error(m)}return r},extract_shortest_path_from_predecessor_list:function(i,o){for(var n=[],r=o;r;)n.push(r),i[r],r=i[r];return n.reverse(),n},find_path:function(i,o,n){var r=t.single_source_shortest_paths(i,o,n);return t.extract_shortest_path_from_predecessor_list(r,n)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,n={},r;i=i||{};for(r in o)o.hasOwnProperty(r)&&(n[r]=o[r]);return n.queue=[],n.sorter=i.sorter||o.default_sorter,n},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var n={value:i,cost:o};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Te);var Et=Te.exports;(function(e){const t=R,i=lt,o=dt,n=yt,r=wt,a=T,s=N,c=Et;function u(m){return unescape(encodeURIComponent(m)).length}function l(m,p,h){const d=[];let E;for(;(E=m.exec(h))!==null;)d.push({data:E[0],index:E.index,mode:p,length:E[0].length});return d}function w(m){const p=l(a.NUMERIC,t.NUMERIC,m),h=l(a.ALPHANUMERIC,t.ALPHANUMERIC,m);let d,E;return s.isKanjiModeEnabled()?(d=l(a.BYTE,t.BYTE,m),E=l(a.KANJI,t.KANJI,m)):(d=l(a.BYTE_KANJI,t.BYTE,m),E=[]),p.concat(h,d,E).sort(function(B,_){return B.index-_.index}).map(function(B){return{data:B.data,mode:B.mode,length:B.length}})}function g(m,p){switch(p){case t.NUMERIC:return i.getBitsLength(m);case t.ALPHANUMERIC:return o.getBitsLength(m);case t.KANJI:return r.getBitsLength(m);case t.BYTE:return n.getBitsLength(m)}}function f(m){return m.reduce(function(p,h){const d=p.length-1>=0?p[p.length-1]:null;return d&&d.mode===h.mode?(p[p.length-1].data+=h.data,p):(p.push(h),p)},[])}function y(m){const p=[];for(let h=0;h<m.length;h++){const d=m[h];switch(d.mode){case t.NUMERIC:p.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:p.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:p.push([d,{data:d.data,mode:t.BYTE,length:u(d.data)}]);break;case t.BYTE:p.push([{data:d.data,mode:t.BYTE,length:u(d.data)}])}}return p}function C(m,p){const h={},d={start:{}};let E=["start"];for(let I=0;I<m.length;I++){const B=m[I],_=[];for(let D=0;D<B.length;D++){const b=B[D],F=""+I+D;_.push(F),h[F]={node:b,lastCount:0},d[F]={};for(let Z=0;Z<E.length;Z++){const M=E[Z];h[M]&&h[M].node.mode===b.mode?(d[M][F]=g(h[M].lastCount+b.length,b.mode)-g(h[M].lastCount,b.mode),h[M].lastCount+=b.length):(h[M]&&(h[M].lastCount=b.length),d[M][F]=g(b.length,b.mode)+4+t.getCharCountIndicator(b.mode,p))}}E=_}for(let I=0;I<E.length;I++)d[E[I]].end=0;return{map:d,table:h}}function A(m,p){let h;const d=t.getBestModeForData(m);if(h=t.from(p,d),h!==t.BYTE&&h.bit<d.bit)throw new Error('"'+m+'" cannot be encoded with mode '+t.toString(h)+".\n Suggested mode is: "+t.toString(d));switch(h===t.KANJI&&!s.isKanjiModeEnabled()&&(h=t.BYTE),h){case t.NUMERIC:return new i(m);case t.ALPHANUMERIC:return new o(m);case t.KANJI:return new r(m);case t.BYTE:return new n(m)}}e.fromArray=function(p){return p.reduce(function(h,d){return typeof d=="string"?h.push(A(d,null)):d.data&&h.push(A(d.data,d.mode)),h},[])},e.fromString=function(p,h){const d=w(p,s.isKanjiModeEnabled()),E=y(d),I=C(E,h),B=c.find_path(I.map,"start","end"),_=[];for(let D=1;D<B.length-1;D++)_.push(I.table[B[D]].node);return e.fromArray(f(_))},e.rawSplit=function(p){return e.fromArray(w(p,s.isKanjiModeEnabled()))}})(Se);const W=N,ee=G,It=Xe,Bt=et,At=we,Nt=Ee,ie=Ie,ae=Q,_t=nt,q=Ne,bt=be,Vt=R,te=Se;function St(e,t){const i=e.size,o=Nt.getPositions(t);for(let n=0;n<o.length;n++){const r=o[n][0],a=o[n][1];for(let s=-1;s<=7;s++)if(!(r+s<=-1||i<=r+s))for(let c=-1;c<=7;c++)a+c<=-1||i<=a+c||(s>=0&&s<=6&&(c===0||c===6)||c>=0&&c<=6&&(s===0||s===6)||s>=2&&s<=4&&c>=2&&c<=4?e.set(r+s,a+c,!0,!0):e.set(r+s,a+c,!1,!0))}}function Tt(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function Mt(e,t){const i=At.getPositions(t);for(let o=0;o<i.length;o++){const n=i[o][0],r=i[o][1];for(let a=-2;a<=2;a++)for(let s=-2;s<=2;s++)a===-2||a===2||s===-2||s===2||a===0&&s===0?e.set(n+a,r+s,!0,!0):e.set(n+a,r+s,!1,!0)}}function Dt(e,t){const i=e.size,o=q.getEncodedBits(t);let n,r,a;for(let s=0;s<18;s++)n=Math.floor(s/3),r=s%3+i-8-3,a=(o>>s&1)===1,e.set(n,r,a,!0),e.set(r,n,a,!0)}function ne(e,t,i){const o=e.size,n=bt.getEncodedBits(t,i);let r,a;for(r=0;r<15;r++)a=(n>>r&1)===1,r<6?e.set(r,8,a,!0):r<8?e.set(r+1,8,a,!0):e.set(o-15+r,8,a,!0),r<8?e.set(8,o-r-1,a,!0):r<9?e.set(8,15-r-1+1,a,!0):e.set(8,15-r-1,a,!0);e.set(o-8,8,1,!0)}function Pt(e,t){const i=e.size;let o=-1,n=i-1,r=7,a=0;for(let s=i-1;s>0;s-=2)for(s===6&&s--;;){for(let c=0;c<2;c++)if(!e.isReserved(n,s-c)){let u=!1;a<t.length&&(u=(t[a]>>>r&1)===1),e.set(n,s-c,u),r--,r===-1&&(a++,r=7)}if(n+=o,n<0||i<=n){n-=o,o=-o;break}}}function Rt(e,t,i){const o=new It;i.forEach(function(c){o.put(c.mode.bit,4),o.put(c.getLength(),Vt.getCharCountIndicator(c.mode,e)),c.write(o)});const n=W.getSymbolTotalCodewords(e),r=ae.getTotalCodewordsCount(e,t),a=(n-r)*8;for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const s=(a-o.getLengthInBits())/8;for(let c=0;c<s;c++)o.put(c%2?17:236,8);return $t(o,e,t)}function $t(e,t,i){const o=W.getSymbolTotalCodewords(t),n=ae.getTotalCodewordsCount(t,i),r=o-n,a=ae.getBlocksCount(t,i),s=o%a,c=a-s,u=Math.floor(o/a),l=Math.floor(r/a),w=l+1,g=u-l,f=new _t(g);let y=0;const C=new Array(a),A=new Array(a);let m=0;const p=new Uint8Array(e.buffer);for(let B=0;B<a;B++){const _=B<c?l:w;C[B]=p.slice(y,y+_),A[B]=f.encode(C[B]),y+=_,m=Math.max(m,_)}const h=new Uint8Array(o);let d=0,E,I;for(E=0;E<m;E++)for(I=0;I<a;I++)E<C[I].length&&(h[d++]=C[I][E]);for(E=0;E<g;E++)for(I=0;I<a;I++)h[d++]=A[I][E];return h}function Lt(e,t,i,o){let n;if(Array.isArray(e))n=te.fromArray(e);else if(typeof e=="string"){let u=t;if(!u){const l=te.rawSplit(e);u=q.getBestVersionForData(l,i)}n=te.fromString(e,u||40)}else throw new Error("Invalid data");const r=q.getBestVersionForData(n,i);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+r+".\n");const a=Rt(t,i,n),s=W.getSymbolSize(t),c=new Bt(s);return St(c,t),Tt(c),Mt(c,t),ne(c,i,0),t>=7&&Dt(c,t),Pt(c,a),isNaN(o)&&(o=ie.getBestMask(c,ne.bind(null,c,i))),ie.applyMask(o,c),ne(c,i,o),{modules:c,version:t,errorCorrectionLevel:i,maskPattern:o,segments:n}}Ce.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let o=ee.M,n,r;return typeof i<"u"&&(o=ee.from(i.errorCorrectionLevel,ee.M),n=q.from(i.version),r=ie.from(i.maskPattern),i.toSJISFunc&&W.setToSJISFunction(i.toSJISFunc)),Lt(t,n,o,r)};var Me={},fe={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(r){return[r,r]}))),o.length===6&&o.push("F","F");const n=parseInt(o.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const n=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,r=o.width&&o.width>=21?o.width:void 0,a=o.scale||4;return{width:r,scale:r?4:a,margin:n,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,n){return n.width&&n.width>=o+n.margin*2?n.width/(o+n.margin*2):n.scale},e.getImageWidth=function(o,n){const r=e.getScale(o,n);return Math.floor((o+n.margin*2)*r)},e.qrToImageData=function(o,n,r){const a=n.modules.size,s=n.modules.data,c=e.getScale(a,r),u=Math.floor((a+r.margin*2)*c),l=r.margin*c,w=[r.color.light,r.color.dark];for(let g=0;g<u;g++)for(let f=0;f<u;f++){let y=(g*u+f)*4,C=r.color.light;if(g>=l&&f>=l&&g<u-l&&f<u-l){const A=Math.floor((g-l)/c),m=Math.floor((f-l)/c);C=w[s[A*a+m]?1:0]}o[y++]=C.r,o[y++]=C.g,o[y++]=C.b,o[y]=C.a}}})(fe);(function(e){const t=fe;function i(n,r,a){n.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=a,r.width=a,r.style.height=a+"px",r.style.width=a+"px"}function o(){try{return document.createElement("canvas")}catch(n){throw new Error("You need to specify a canvas element")}}e.render=function(r,a,s){let c=s,u=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(u=o()),c=t.getOptions(c);const l=t.getImageWidth(r.modules.size,c),w=u.getContext("2d"),g=w.createImageData(l,l);return t.qrToImageData(g.data,r,c),i(w,u,l),w.putImageData(g,0,0),u},e.renderToDataURL=function(r,a,s){let c=s;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const u=e.render(r,a,c),l=c.type||"image/png",w=c.rendererOpts||{};return u.toDataURL(l,w.quality)}})(Me);var De={};const kt=fe;function me(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function re(e,t,i){let o=e+t;return typeof i<"u"&&(o+=" "+i),o}function vt(e,t,i){let o="",n=0,r=!1,a=0;for(let s=0;s<e.length;s++){const c=Math.floor(s%t),u=Math.floor(s/t);!c&&!r&&(r=!0),e[s]?(a++,s>0&&c>0&&e[s-1]||(o+=r?re("M",c+i,.5+u+i):re("m",n,0),n=0,r=!1),c+1<t&&e[s+1]||(o+=re("h",a),a=0)):n++}return o}De.render=function(t,i,o){const n=kt.getOptions(i),r=t.modules.size,a=t.modules.data,s=r+n.margin*2,c=n.color.light.a?"<path "+me(n.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",u="<path "+me(n.color.dark,"stroke")+' d="'+vt(a,r,n.margin)+'"/>',l='viewBox="0 0 '+s+" "+s+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+l+' shape-rendering="crispEdges">'+c+u+"</svg>\n";return typeof o=="function"&&o(null,g),g};const Ft=We,se=Ce,Pe=Me,Ut=De;function de(e,t,i,o,n){const r=[].slice.call(arguments,1),a=r.length,s=typeof r[a-1]=="function";if(!s&&!Ft())throw new Error("Callback required as last argument");if(s){if(a<2)throw new Error("Too few arguments provided");a===2?(n=i,i=t,t=o=void 0):a===3&&(t.getContext&&typeof n>"u"?(n=o,o=void 0):(n=o,o=i,i=t,t=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(i=t,t=o=void 0):a===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(c,u){try{const l=se.create(i,o);c(e(l,t,o))}catch(l){u(l)}})}try{const c=se.create(i,o);n(null,e(c,t,o))}catch(c){n(c)}}z.create=se.create;z.toCanvas=de.bind(null,Pe.render);z.toDataURL=de.bind(null,Pe.renderToDataURL);z.toString=de.bind(null,function(e,t,i){return Ut.render(e,i)});const Ot=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(e){const t=VueDemi.ref();return VueDemi.watch(()=>e.config.url,(i="")=>{z.toDataURL(i,(o,n)=>{o&&console.error(o),t.value=n})},{immediate:!0}),V({config:e.config,methods:{},iteratorContainerId:e.iteratorContainerId,iteratorIndex:e.iteratorIndex}),{imgUrl:t}}}),zt=["src"];function jt(e,t,i,o,n,r){return Vue.openBlock(),Vue.createElementBlock("img",{src:e.imgUrl},null,8,zt)}const Ht=S(Ot,[["render",jt]]),Kt=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(e){var r;const t=VueDemi.ref(!1),{app:i,node:o}=V({config:e.config,iteratorContainerId:e.iteratorContainerId,iteratorIndex:e.iteratorIndex,methods:{openOverlay(){t.value=!0,i==null||i.emit("overlay:open",o)},closeOverlay(){t.value=!1,i==null||i.emit("overlay:close",o)}}}),n=(a,s)=>{s.find(c=>c.id===e.config.id)?o==null||o.instance.openOverlay():o==null||o.instance.closeOverlay()};return(r=i==null?void 0:i.page)==null||r.on("editor:select",n),VueDemi.onBeforeUnmount(()=>{var a;(a=i==null?void 0:i.page)==null||a.off("editor:select",n)}),{visible:t}}});function Jt(e,t,i,o,n,r){const a=Vue.resolveComponent("magic-ui-container");return e.visible?(Vue.openBlock(),Vue.createBlock(a,{key:0,config:{items:e.config.items}},{default:Vue.withCtx(()=>[Vue.renderSlot(e.$slots,"default")]),_:3},8,["config"])):Vue.createCommentVNode("",!0)}const Yt=S(Kt,[["render",Jt]]),qt=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(e){const{app:t}=V({config:e.config,methods:{},iteratorContainerId:e.iteratorContainerId,iteratorIndex:e.iteratorIndex}),i=VueDemi.computed(()=>{var n,r;return(r=(n=t==null?void 0:t.dsl)==null?void 0:n.items)==null?void 0:r.find(a=>a.id===e.config.pageFragmentId)});return{containerConfig:VueDemi.computed(()=>{if(!i.value)return{items:[],id:"",type:ye.CONTAINER};const{id:n,type:r,items:a,...s}=i.value,c=a.map(u=>{const{id:l,...w}=u;return{...w}});return(t==null?void 0:t.platform)==="editor"?{...s,items:c}:{...s,items:a}})}}});function Gt(e,t,i,o,n,r){const a=Vue.resolveComponent("magic-ui-container");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(a,{"iterator-index":e.iteratorIndex,"iterator-container-id":e.iteratorContainerId,config:e.containerConfig,model:e.model},null,8,["iterator-index","iterator-container-id","config","model"])])}const Qt=S(qt,[["render",Gt],["__scopeId","data-v-aaca48d8"]]),xt=VueDemi.defineComponent({props:{config:{type:Object,required:!0},model:{type:Object,default:()=>({})}},setup(e){const{app:t}=V({config:e.config,methods:{}});return{app:t}}});function Wt(e,t,i,o,n,r){var s;const a=Vue.resolveComponent("magic-ui-container");return Vue.openBlock(),Vue.createBlock(a,{class:"magic-ui-page-fragment","data-tmagic-id":e.config.id,config:e.config,style:Vue.normalizeStyle((s=e.app)==null?void 0:s.transformStyle(e.config.style||{}))},null,8,["data-tmagic-id","config","style"])}const Zt=S(xt,[["render",Wt]]),Xt=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(e){const{app:t}=V({config:e.config,iteratorContainerId:e.iteratorContainerId,iteratorIndex:e.iteratorIndex,methods:{}}),i=VueDemi.computed(()=>{let{iteratorData:o=[]}=e.config;const{itemConfig:n,dsField:r,items:a}=e.config;return Array.isArray(o)||(o=[]),(t==null?void 0:t.platform)==="editor"&&!o.length&&o.push({}),o.map(s=>{var l,w,g,f;const c=(t==null?void 0:t.platform)!=="editor"&&(w=(l=t==null?void 0:t.dataSourceManager)==null?void 0:l.compliedIteratorItemConds(s,n,r))!=null?w:!0;return{items:(f=(g=t==null?void 0:t.dataSourceManager)==null?void 0:g.compliedIteratorItems(s,a,r))!=null?f:a,condResult:c,style:{position:"relative",left:0,top:0,...n.style}}})});return VueDemi.watch(i,o=>{if(!e.config.id)return;const n=t==null?void 0:t.getNode(e.config.id,e.iteratorContainerId,e.iteratorIndex);n&&(n.resetNodes(),o.forEach((r,a)=>{n.setNodes(r.items,a)}))},{immediate:!0}),{configs:i}}});function en(e,t,i,o,n,r){const a=Vue.resolveComponent("magic-ui-container");return Vue.openBlock(),Vue.createElementBlock("div",null,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.configs,(s,c)=>(Vue.openBlock(),Vue.createBlock(a,{"iterator-index":[...e.iteratorIndex||[],c],"iterator-container-id":[...e.iteratorContainerId||[],e.config.id],key:c,config:s},null,8,["iterator-index","iterator-container-id","config"]))),128))])}const tn=S(Xt,[["render",en]]),rn={page:ve,container:Oe,button:He,text:Ye,img:xe,qrcode:Ht,overlay:Yt,"page-fragment-container":Qt,"page-fragment":Zt,"iterator-container":tn};export{rn as default};
//# sourceMappingURL=comp-entry-CvKOmN5P.js.map
