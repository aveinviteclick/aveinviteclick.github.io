import{B as Re,a as Ae,b as Te,I as Pe,E as Se,A as Ne,F as Me,c as ke,P as Le,O as $e,T as W,D as Qt}from"./vant-vendor.4ef3227d.js";import{d as De,r as T,b as yt,o as Fe,P as Ue,y as ze,Q as $,W as H,X as u,Y as f,Z as V,q as Z,u as E,j as ot,c as R,S as D,v as Ct,R as Et,a1 as Y,F as Wt,a2 as Ve,_ as Zt,$ as He,a0 as Ke}from"./vue-vendor.35e46c5c.js";import{f as Xt,e as Je,h as Oe,j as Ye}from"./index.6fadf46c.js";import{b as xt,g as je,e as Ge,a as qe,c as Qe,d as We,f as Ze}from"./index.1e767141.js";import{h as Xe}from"./html2canvas-vendor.279e25cc.js";import{t as xe,s as tn,v as en}from"./vendor.98e38a8a.js";import{P as nn}from"./pointsList.6a26d812.js";import{R as on}from"./rebateList.1446cb44.js";import{P as sn}from"./promoteList.f5880e2c.js";import{_ as rn}from"./_plugin-vue_export-helper.cdc0426e.js";import"./main.795ec91e.js";const an="/assets/edit.f336084e.svg",ln="/assets/rebate-bg-cn.5e11b93f.png",cn="/assets/rebate-bg-en.4cc15faf.png";var rt={},un=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},oe={},U={};let kt;const dn=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];U.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};U.getSymbolTotalCodewords=function(t){return dn[t]};U.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};U.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');kt=t};U.isKanjiModeEnabled=function(){return typeof kt<"u"};U.toSJIS=function(t){return kt(t)};var ht={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(s){return s&&typeof s.bit<"u"&&s.bit>=0&&s.bit<4},e.from=function(s,o){if(e.isValid(s))return s;try{return t(s)}catch{return o}}})(ht);function se(){this.buffer=[],this.length=0}se.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var fn=se;function at(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}at.prototype.set=function(e,t,i,s){const o=e*this.size+t;this.data[o]=i,s&&(this.reservedBit[o]=!0)};at.prototype.get=function(e,t){return this.data[e*this.size+t]};at.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};at.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var hn=at,ie={};(function(e){const t=U.getSymbolSize;e.getRowColCoords=function(s){if(s===1)return[];const o=Math.floor(s/7)+2,n=t(s),r=n===145?26:Math.ceil((n-13)/(2*o-2))*2,l=[n-7];for(let a=1;a<o-1;a++)l[a]=l[a-1]-r;return l.push(6),l.reverse()},e.getPositions=function(s){const o=[],n=e.getRowColCoords(s),r=n.length;for(let l=0;l<r;l++)for(let a=0;a<r;a++)l===0&&a===0||l===0&&a===r-1||l===r-1&&a===0||o.push([n[l],n[a]]);return o}})(ie);var re={};const gn=U.getSymbolSize,te=7;re.getPositions=function(t){const i=gn(t);return[[0,0],[i-te,0],[0,i-te]]};var ae={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let r=0,l=0,a=0,d=null,h=null;for(let B=0;B<n;B++){l=a=0,d=h=null;for(let w=0;w<n;w++){let m=o.get(B,w);m===d?l++:(l>=5&&(r+=t.N1+(l-5)),d=m,l=1),m=o.get(w,B),m===h?a++:(a>=5&&(r+=t.N1+(a-5)),h=m,a=1)}l>=5&&(r+=t.N1+(l-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(o){const n=o.size;let r=0;for(let l=0;l<n-1;l++)for(let a=0;a<n-1;a++){const d=o.get(l,a)+o.get(l,a+1)+o.get(l+1,a)+o.get(l+1,a+1);(d===4||d===0)&&r++}return r*t.N2},e.getPenaltyN3=function(o){const n=o.size;let r=0,l=0,a=0;for(let d=0;d<n;d++){l=a=0;for(let h=0;h<n;h++)l=l<<1&2047|o.get(d,h),h>=10&&(l===1488||l===93)&&r++,a=a<<1&2047|o.get(h,d),h>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(o){let n=0;const r=o.data.length;for(let a=0;a<r;a++)n+=o.data[a];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function i(s,o,n){switch(s){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+s)}}e.applyMask=function(o,n){const r=n.size;for(let l=0;l<r;l++)for(let a=0;a<r;a++)n.isReserved(a,l)||n.xor(a,l,i(o,a,l))},e.getBestMask=function(o,n){const r=Object.keys(e.Patterns).length;let l=0,a=1/0;for(let d=0;d<r;d++){n(d),e.applyMask(d,o);const h=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(d,o),h<a&&(a=h,l=d)}return l}})(ae);var gt={};const j=ht,ct=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ut=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];gt.getBlocksCount=function(t,i){switch(i){case j.L:return ct[(t-1)*4+0];case j.M:return ct[(t-1)*4+1];case j.Q:return ct[(t-1)*4+2];case j.H:return ct[(t-1)*4+3];default:return}};gt.getTotalCodewordsCount=function(t,i){switch(i){case j.L:return ut[(t-1)*4+0];case j.M:return ut[(t-1)*4+1];case j.Q:return ut[(t-1)*4+2];case j.H:return ut[(t-1)*4+3];default:return}};var le={},mt={};const st=new Uint8Array(512),dt=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)st[i]=t,dt[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)st[i]=st[i-255]})();mt.log=function(t){if(t<1)throw new Error("log("+t+")");return dt[t]};mt.exp=function(t){return st[t]};mt.mul=function(t,i){return t===0||i===0?0:st[dt[t]+dt[i]]};(function(e){const t=mt;e.mul=function(s,o){const n=new Uint8Array(s.length+o.length-1);for(let r=0;r<s.length;r++)for(let l=0;l<o.length;l++)n[r+l]^=t.mul(s[r],o[l]);return n},e.mod=function(s,o){let n=new Uint8Array(s);for(;n.length-o.length>=0;){const r=n[0];for(let a=0;a<o.length;a++)n[a]^=t.mul(o[a],r);let l=0;for(;l<n.length&&n[l]===0;)l++;n=n.slice(l)}return n},e.generateECPolynomial=function(s){let o=new Uint8Array([1]);for(let n=0;n<s;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(le);const ce=le;function Lt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Lt.prototype.initialize=function(t){this.degree=t,this.genPoly=ce.generateECPolynomial(this.degree)};Lt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const s=ce.mod(i,this.genPoly),o=this.degree-s.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(s,o),n}return s};var mn=Lt,ue={},G={},$t={};$t.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var K={};const de="[0-9]+",pn="[A-Z $%*+\\-./:]+";let it="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";it=it.replace(/u/g,"\\u");const vn="(?:(?![A-Z0-9 $%*+\\-./:]|"+it+`)(?:.|[\r
]))+`;K.KANJI=new RegExp(it,"g");K.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");K.BYTE=new RegExp(vn,"g");K.NUMERIC=new RegExp(de,"g");K.ALPHANUMERIC=new RegExp(pn,"g");const _n=new RegExp("^"+it+"$"),wn=new RegExp("^"+de+"$"),bn=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");K.testKanji=function(t){return _n.test(t)};K.testNumeric=function(t){return wn.test(t)};K.testAlphanumeric=function(t){return bn.test(t)};(function(e){const t=$t,i=K;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,r){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?n.ccBits[0]:r<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function s(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,r){if(e.isValid(n))return n;try{return s(n)}catch{return r}}})(G);(function(e){const t=U,i=gt,s=ht,o=G,n=$t,r=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,l=t.getBCHDigit(r);function a(w,m,b){for(let C=1;C<=40;C++)if(m<=e.getCapacity(C,b,w))return C}function d(w,m){return o.getCharCountIndicator(w,m)+4}function h(w,m){let b=0;return w.forEach(function(C){b+=d(C.mode,m)+C.getBitsLength()}),b}function B(w,m){for(let b=1;b<=40;b++)if(h(w,b)<=e.getCapacity(b,m,o.MIXED))return b}e.from=function(m,b){return n.isValid(m)?parseInt(m,10):b},e.getCapacity=function(m,b,C){if(!n.isValid(m))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=o.BYTE);const S=t.getSymbolTotalCodewords(m),v=i.getTotalCodewordsCount(m,b),y=(S-v)*8;if(C===o.MIXED)return y;const _=y-d(C,m);switch(C){case o.NUMERIC:return Math.floor(_/10*3);case o.ALPHANUMERIC:return Math.floor(_/11*2);case o.KANJI:return Math.floor(_/13);case o.BYTE:default:return Math.floor(_/8)}},e.getBestVersionForData=function(m,b){let C;const S=s.from(b,s.M);if(Array.isArray(m)){if(m.length>1)return B(m,S);if(m.length===0)return 1;C=m[0]}else C=m;return a(C.mode,C.getLength(),S)},e.getEncodedBits=function(m){if(!n.isValid(m)||m<7)throw new Error("Invalid QR Code version");let b=m<<12;for(;t.getBCHDigit(b)-l>=0;)b^=r<<t.getBCHDigit(b)-l;return m<<12|b}})(ue);var fe={};const Pt=U,he=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,yn=1<<14|1<<12|1<<10|1<<4|1<<1,ee=Pt.getBCHDigit(he);fe.getEncodedBits=function(t,i){const s=t.bit<<3|i;let o=s<<10;for(;Pt.getBCHDigit(o)-ee>=0;)o^=he<<Pt.getBCHDigit(o)-ee;return(s<<10|o)^yn};var ge={};const Cn=G;function X(e){this.mode=Cn.NUMERIC,this.data=e.toString()}X.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};X.prototype.getLength=function(){return this.data.length};X.prototype.getBitsLength=function(){return X.getBitsLength(this.data.length)};X.prototype.write=function(t){let i,s,o;for(i=0;i+3<=this.data.length;i+=3)s=this.data.substr(i,3),o=parseInt(s,10),t.put(o,10);const n=this.data.length-i;n>0&&(s=this.data.substr(i),o=parseInt(s,10),t.put(o,n*3+1))};var En=X;const Bn=G,Bt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function x(e){this.mode=Bn.ALPHANUMERIC,this.data=e}x.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};x.prototype.getLength=function(){return this.data.length};x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)};x.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let s=Bt.indexOf(this.data[i])*45;s+=Bt.indexOf(this.data[i+1]),t.put(s,11)}this.data.length%2&&t.put(Bt.indexOf(this.data[i]),6)};var In=x,Rn=function(t){for(var i=[],s=t.length,o=0;o<s;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&s>o+1){var r=t.charCodeAt(o+1);r>=56320&&r<=57343&&(n=(n-55296)*1024+r-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const An=Rn,Tn=G;function tt(e){this.mode=Tn.BYTE,typeof e=="string"&&(e=An(e)),this.data=new Uint8Array(e)}tt.getBitsLength=function(t){return t*8};tt.prototype.getLength=function(){return this.data.length};tt.prototype.getBitsLength=function(){return tt.getBitsLength(this.data.length)};tt.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var Pn=tt;const Sn=G,Nn=U;function et(e){this.mode=Sn.KANJI,this.data=e}et.getBitsLength=function(t){return t*13};et.prototype.getLength=function(){return this.data.length};et.prototype.getBitsLength=function(){return et.getBitsLength(this.data.length)};et.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=Nn.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Mn=et,me={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,s,o){var n={},r={};r[s]=0;var l=t.PriorityQueue.make();l.push(s,0);for(var a,d,h,B,w,m,b,C,S;!l.empty();){a=l.pop(),d=a.value,B=a.cost,w=i[d]||{};for(h in w)w.hasOwnProperty(h)&&(m=w[h],b=B+m,C=r[h],S=typeof r[h]>"u",(S||C>b)&&(r[h]=b,l.push(h,b),n[h]=d))}if(typeof o<"u"&&typeof r[o]>"u"){var v=["Could not find a path from ",s," to ",o,"."].join("");throw new Error(v)}return n},extract_shortest_path_from_predecessor_list:function(i,s){for(var o=[],n=s;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,s,o){var n=t.single_source_shortest_paths(i,s,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var s=t.PriorityQueue,o={},n;i=i||{};for(n in s)s.hasOwnProperty(n)&&(o[n]=s[n]);return o.queue=[],o.sorter=i.sorter||s.default_sorter,o},default_sorter:function(i,s){return i.cost-s.cost},push:function(i,s){var o={value:i,cost:s};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(me);(function(e){const t=G,i=En,s=In,o=Pn,n=Mn,r=K,l=U,a=me.exports;function d(v){return unescape(encodeURIComponent(v)).length}function h(v,y,_){const p=[];let I;for(;(I=v.exec(_))!==null;)p.push({data:I[0],index:I.index,mode:y,length:I[0].length});return p}function B(v){const y=h(r.NUMERIC,t.NUMERIC,v),_=h(r.ALPHANUMERIC,t.ALPHANUMERIC,v);let p,I;return l.isKanjiModeEnabled()?(p=h(r.BYTE,t.BYTE,v),I=h(r.KANJI,t.KANJI,v)):(p=h(r.BYTE_KANJI,t.BYTE,v),I=[]),y.concat(_,p,I).sort(function(N,k){return N.index-k.index}).map(function(N){return{data:N.data,mode:N.mode,length:N.length}})}function w(v,y){switch(y){case t.NUMERIC:return i.getBitsLength(v);case t.ALPHANUMERIC:return s.getBitsLength(v);case t.KANJI:return n.getBitsLength(v);case t.BYTE:return o.getBitsLength(v)}}function m(v){return v.reduce(function(y,_){const p=y.length-1>=0?y[y.length-1]:null;return p&&p.mode===_.mode?(y[y.length-1].data+=_.data,y):(y.push(_),y)},[])}function b(v){const y=[];for(let _=0;_<v.length;_++){const p=v[_];switch(p.mode){case t.NUMERIC:y.push([p,{data:p.data,mode:t.ALPHANUMERIC,length:p.length},{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.ALPHANUMERIC:y.push([p,{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.KANJI:y.push([p,{data:p.data,mode:t.BYTE,length:d(p.data)}]);break;case t.BYTE:y.push([{data:p.data,mode:t.BYTE,length:d(p.data)}])}}return y}function C(v,y){const _={},p={start:{}};let I=["start"];for(let A=0;A<v.length;A++){const N=v[A],k=[];for(let z=0;z<N.length;z++){const M=N[z],O=""+A+z;k.push(O),_[O]={node:M,lastCount:0},p[O]={};for(let q=0;q<I.length;q++){const L=I[q];_[L]&&_[L].node.mode===M.mode?(p[L][O]=w(_[L].lastCount+M.length,M.mode)-w(_[L].lastCount,M.mode),_[L].lastCount+=M.length):(_[L]&&(_[L].lastCount=M.length),p[L][O]=w(M.length,M.mode)+4+t.getCharCountIndicator(M.mode,y))}}I=k}for(let A=0;A<I.length;A++)p[I[A]].end=0;return{map:p,table:_}}function S(v,y){let _;const p=t.getBestModeForData(v);if(_=t.from(y,p),_!==t.BYTE&&_.bit<p.bit)throw new Error('"'+v+'" cannot be encoded with mode '+t.toString(_)+`.
 Suggested mode is: `+t.toString(p));switch(_===t.KANJI&&!l.isKanjiModeEnabled()&&(_=t.BYTE),_){case t.NUMERIC:return new i(v);case t.ALPHANUMERIC:return new s(v);case t.KANJI:return new n(v);case t.BYTE:return new o(v)}}e.fromArray=function(y){return y.reduce(function(_,p){return typeof p=="string"?_.push(S(p,null)):p.data&&_.push(S(p.data,p.mode)),_},[])},e.fromString=function(y,_){const p=B(y,l.isKanjiModeEnabled()),I=b(p),A=C(I,_),N=a.find_path(A.map,"start","end"),k=[];for(let z=1;z<N.length-1;z++)k.push(A.table[N[z]].node);return e.fromArray(m(k))},e.rawSplit=function(y){return e.fromArray(B(y,l.isKanjiModeEnabled()))}})(ge);const pt=U,It=ht,kn=fn,Ln=hn,$n=ie,Dn=re,St=ae,Nt=gt,Fn=mn,ft=ue,Un=fe,zn=G,Rt=ge;function Vn(e,t){const i=e.size,s=Dn.getPositions(t);for(let o=0;o<s.length;o++){const n=s[o][0],r=s[o][1];for(let l=-1;l<=7;l++)if(!(n+l<=-1||i<=n+l))for(let a=-1;a<=7;a++)r+a<=-1||i<=r+a||(l>=0&&l<=6&&(a===0||a===6)||a>=0&&a<=6&&(l===0||l===6)||l>=2&&l<=4&&a>=2&&a<=4?e.set(n+l,r+a,!0,!0):e.set(n+l,r+a,!1,!0))}}function Hn(e){const t=e.size;for(let i=8;i<t-8;i++){const s=i%2===0;e.set(i,6,s,!0),e.set(6,i,s,!0)}}function Kn(e,t){const i=$n.getPositions(t);for(let s=0;s<i.length;s++){const o=i[s][0],n=i[s][1];for(let r=-2;r<=2;r++)for(let l=-2;l<=2;l++)r===-2||r===2||l===-2||l===2||r===0&&l===0?e.set(o+r,n+l,!0,!0):e.set(o+r,n+l,!1,!0)}}function Jn(e,t){const i=e.size,s=ft.getEncodedBits(t);let o,n,r;for(let l=0;l<18;l++)o=Math.floor(l/3),n=l%3+i-8-3,r=(s>>l&1)===1,e.set(o,n,r,!0),e.set(n,o,r,!0)}function At(e,t,i){const s=e.size,o=Un.getEncodedBits(t,i);let n,r;for(n=0;n<15;n++)r=(o>>n&1)===1,n<6?e.set(n,8,r,!0):n<8?e.set(n+1,8,r,!0):e.set(s-15+n,8,r,!0),n<8?e.set(8,s-n-1,r,!0):n<9?e.set(8,15-n-1+1,r,!0):e.set(8,15-n-1,r,!0);e.set(s-8,8,1,!0)}function On(e,t){const i=e.size;let s=-1,o=i-1,n=7,r=0;for(let l=i-1;l>0;l-=2)for(l===6&&l--;;){for(let a=0;a<2;a++)if(!e.isReserved(o,l-a)){let d=!1;r<t.length&&(d=(t[r]>>>n&1)===1),e.set(o,l-a,d),n--,n===-1&&(r++,n=7)}if(o+=s,o<0||i<=o){o-=s,s=-s;break}}}function Yn(e,t,i){const s=new kn;i.forEach(function(a){s.put(a.mode.bit,4),s.put(a.getLength(),zn.getCharCountIndicator(a.mode,e)),a.write(s)});const o=pt.getSymbolTotalCodewords(e),n=Nt.getTotalCodewordsCount(e,t),r=(o-n)*8;for(s.getLengthInBits()+4<=r&&s.put(0,4);s.getLengthInBits()%8!==0;)s.putBit(0);const l=(r-s.getLengthInBits())/8;for(let a=0;a<l;a++)s.put(a%2?17:236,8);return jn(s,e,t)}function jn(e,t,i){const s=pt.getSymbolTotalCodewords(t),o=Nt.getTotalCodewordsCount(t,i),n=s-o,r=Nt.getBlocksCount(t,i),l=s%r,a=r-l,d=Math.floor(s/r),h=Math.floor(n/r),B=h+1,w=d-h,m=new Fn(w);let b=0;const C=new Array(r),S=new Array(r);let v=0;const y=new Uint8Array(e.buffer);for(let N=0;N<r;N++){const k=N<a?h:B;C[N]=y.slice(b,b+k),S[N]=m.encode(C[N]),b+=k,v=Math.max(v,k)}const _=new Uint8Array(s);let p=0,I,A;for(I=0;I<v;I++)for(A=0;A<r;A++)I<C[A].length&&(_[p++]=C[A][I]);for(I=0;I<w;I++)for(A=0;A<r;A++)_[p++]=S[A][I];return _}function Gn(e,t,i,s){let o;if(Array.isArray(e))o=Rt.fromArray(e);else if(typeof e=="string"){let d=t;if(!d){const h=Rt.rawSplit(e);d=ft.getBestVersionForData(h,i)}o=Rt.fromString(e,d||40)}else throw new Error("Invalid data");const n=ft.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const r=Yn(t,i,o),l=pt.getSymbolSize(t),a=new Ln(l);return Vn(a,t),Hn(a),Kn(a,t),At(a,i,0),t>=7&&Jn(a,t),On(a,r),isNaN(s)&&(s=St.getBestMask(a,At.bind(null,a,i))),St.applyMask(s,a),At(a,i,s),{modules:a,version:t,errorCorrectionLevel:i,maskPattern:s,segments:o}}oe.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let s=It.M,o,n;return typeof i<"u"&&(s=It.from(i.errorCorrectionLevel,It.M),o=ft.from(i.version),n=St.from(i.maskPattern),i.toSJISFunc&&pt.setToSJISFunction(i.toSJISFunc)),Gn(t,o,s,n)};var pe={},Dt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let s=i.slice().replace("#","").split("");if(s.length<3||s.length===5||s.length>8)throw new Error("Invalid hex color: "+i);(s.length===3||s.length===4)&&(s=Array.prototype.concat.apply([],s.map(function(n){return[n,n]}))),s.length===6&&s.push("F","F");const o=parseInt(s.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+s.slice(0,6).join("")}}e.getOptions=function(s){s||(s={}),s.color||(s.color={});const o=typeof s.margin>"u"||s.margin===null||s.margin<0?4:s.margin,n=s.width&&s.width>=21?s.width:void 0,r=s.scale||4;return{width:n,scale:n?4:r,margin:o,color:{dark:t(s.color.dark||"#000000ff"),light:t(s.color.light||"#ffffffff")},type:s.type,rendererOpts:s.rendererOpts||{}}},e.getScale=function(s,o){return o.width&&o.width>=s+o.margin*2?o.width/(s+o.margin*2):o.scale},e.getImageWidth=function(s,o){const n=e.getScale(s,o);return Math.floor((s+o.margin*2)*n)},e.qrToImageData=function(s,o,n){const r=o.modules.size,l=o.modules.data,a=e.getScale(r,n),d=Math.floor((r+n.margin*2)*a),h=n.margin*a,B=[n.color.light,n.color.dark];for(let w=0;w<d;w++)for(let m=0;m<d;m++){let b=(w*d+m)*4,C=n.color.light;if(w>=h&&m>=h&&w<d-h&&m<d-h){const S=Math.floor((w-h)/a),v=Math.floor((m-h)/a);C=B[l[S*r+v]?1:0]}s[b++]=C.r,s[b++]=C.g,s[b++]=C.b,s[b]=C.a}}})(Dt);(function(e){const t=Dt;function i(o,n,r){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=r,n.width=r,n.style.height=r+"px",n.style.width=r+"px"}function s(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,r,l){let a=l,d=r;typeof a>"u"&&(!r||!r.getContext)&&(a=r,r=void 0),r||(d=s()),a=t.getOptions(a);const h=t.getImageWidth(n.modules.size,a),B=d.getContext("2d"),w=B.createImageData(h,h);return t.qrToImageData(w.data,n,a),i(B,d,h),B.putImageData(w,0,0),d},e.renderToDataURL=function(n,r,l){let a=l;typeof a>"u"&&(!r||!r.getContext)&&(a=r,r=void 0),a||(a={});const d=e.render(n,r,a),h=a.type||"image/png",B=a.rendererOpts||{};return d.toDataURL(h,B.quality)}})(pe);var ve={};const qn=Dt;function ne(e,t){const i=e.a/255,s=t+'="'+e.hex+'"';return i<1?s+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':s}function Tt(e,t,i){let s=e+t;return typeof i<"u"&&(s+=" "+i),s}function Qn(e,t,i){let s="",o=0,n=!1,r=0;for(let l=0;l<e.length;l++){const a=Math.floor(l%t),d=Math.floor(l/t);!a&&!n&&(n=!0),e[l]?(r++,l>0&&a>0&&e[l-1]||(s+=n?Tt("M",a+i,.5+d+i):Tt("m",o,0),o=0,n=!1),a+1<t&&e[l+1]||(s+=Tt("h",r),r=0)):o++}return s}ve.render=function(t,i,s){const o=qn.getOptions(i),n=t.modules.size,r=t.modules.data,l=n+o.margin*2,a=o.color.light.a?"<path "+ne(o.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+ne(o.color.dark,"stroke")+' d="'+Qn(r,n,o.margin)+'"/>',h='viewBox="0 0 '+l+" "+l+'"',B=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",w='<svg xmlns="http://www.w3.org/2000/svg" '+B+h+' shape-rendering="crispEdges">'+a+d+`</svg>
`;return typeof s=="function"&&s(null,w),w};const Wn=un,Mt=oe,_e=pe,Zn=ve;function Ft(e,t,i,s,o){const n=[].slice.call(arguments,1),r=n.length,l=typeof n[r-1]=="function";if(!l&&!Wn())throw new Error("Callback required as last argument");if(l){if(r<2)throw new Error("Too few arguments provided");r===2?(o=i,i=t,t=s=void 0):r===3&&(t.getContext&&typeof o>"u"?(o=s,s=void 0):(o=s,s=i,i=t,t=void 0))}else{if(r<1)throw new Error("Too few arguments provided");return r===1?(i=t,t=s=void 0):r===2&&!t.getContext&&(s=i,i=t,t=void 0),new Promise(function(a,d){try{const h=Mt.create(i,s);a(e(h,t,s))}catch(h){d(h)}})}try{const a=Mt.create(i,s);o(null,e(a,t,s))}catch(a){o(a)}}rt.create=Mt.create;rt.toCanvas=Ft.bind(null,_e.render);rt.toDataURL=Ft.bind(null,_e.renderToDataURL);rt.toString=Ft.bind(null,function(e,t,i){return Zn.render(e,i)});const J=e=>(He("data-v-79f25d1f"),e=e(),Ke(),e),Xn={class:"home-container"},xn={class:"card-1"},to={class:"card-1_top"},eo={class:"section-1"},no={class:"section-1_left"},oo={class:"color-fff"},so={class:"color-FFC659"},io={class:"section-2 color-fff"},ro={class:"color-FFC659"},ao={class:"section-3"},lo={class:"color-999"},co={class:"color-333"},uo={class:"section-4"},fo={class:"color-999 mr-5"},ho={style:{flex:"1","text-align":"right"},class:"color-333 van-ellipsis"},go={class:"iconfont-svg icon-copy","aria-hidden":"true"},mo=J(()=>u("use",{"xlink:href":"#icon-copy"},null,-1)),po=[mo],vo={class:"section-4"},_o={class:"color-999 mr-5"},wo={style:{flex:"1","text-align":"right"},class:"color-333"},bo={class:"iconfont-svg icon-copy","aria-hidden":"true"},yo=J(()=>u("use",{"xlink:href":"#icon-copy"},null,-1)),Co=[yo],Eo={class:"section-5"},Bo=J(()=>u("svg",{class:"iconfont-svg icon-download","aria-hidden":"true"},[u("use",{"xlink:href":"#icon-download"})],-1)),Io={class:"card-2"},Ro={class:"tab-item"},Ao={class:"tab-item_header"},To=["onClick"],Po=J(()=>u("svg",{class:"iconfont-svg icon-left","aria-hidden":"true"},[u("use",{"xlink:href":"#icon-integral"})],-1)),So={class:"mr-5"},No={class:"color-333"},Mo={key:1,class:"view-more-box"},ko={class:"tab-item"},Lo={class:"tab-item_header"},$o=J(()=>u("svg",{class:"iconfont-svg icon-left","aria-hidden":"true"},[u("use",{"xlink:href":"#icon-integral"})],-1)),Do={class:"mr-5"},Fo={class:"color-333"},Uo=J(()=>u("svg",{class:"iconfont-svg icon-left","aria-hidden":"true"},[u("use",{"xlink:href":"#icon-rebates"})],-1)),zo={class:"mr-5"},Vo={class:"color-333"},Ho={key:1,class:"view-more-box"},Ko={class:"tab-item"},Jo={key:1,class:"view-more-box"},Oo={class:"rules-content"},Yo=J(()=>u("td",null,"10",-1)),jo=J(()=>u("td",null,"10",-1)),Go=J(()=>u("td",null,"5",-1)),qo=J(()=>u("td",null,"5",-1)),Qo={class:"content_tips"},Wo={class:"rules-content_footer"},Zo={class:"rebate-edit-content"},Xo={class:"rebate-edit-content_1"},xo={class:"rebate-edit-content_2"},ts={class:"step-list"},es=["onClick"],ns={key:0,class:"line"},os={class:"step-rebate-info"},ss={class:"content_tips"},is={class:"button-box"},rs={class:"form-bind_1"},as={class:"form-bind_2"},ls={class:"content_tips"},cs={key:0,class:"posters-bg",src:ln,alt:"",srcset:""},us={key:1,class:"posters-bg",src:cn,alt:"",srcset:""},ds={class:"posters-code"},fs=["src"],hs=["onClick"],gs=De({__name:"home",setup(e){const t=xe(),{t:i,locale:s}=tn();new URL("/assets/icon-default.995adb35.png",self.location).href;const o=T(0),n=T(!1),r=T(!1),l=T(0),a=T(0);let d=T({is_active:!1,rebate_id:0,self_rebate:0,share_code:"",total_rebate:0});const h=yt(()=>location.origin+"/link/?code="+d.value.share_code),B=yt(()=>Math.round(d.value.total_rebate/10));function w(){d.value.share_code&&t.push({name:"Points",params:{code:d.value.share_code,interval:0}})}async function m(){let c=await Je(be.value);return c===null?!1:c.address?c.signature?{...c,reg_code:(c==null?void 0:c.reg_code)||""}:(Qt.alert({message:i("watchAddressTips"),confirmButtonText:i("getIt"),confirmButtonColor:"#3F80F7"}),!1):(Qt.confirm({title:i("oneMoreStepToFinish"),message:i("oneMoreStepToFinishTips"),showCancelButton:!1,confirmButtonText:i("confirm"),theme:"round-button",confirmButtonColor:"#3F80F7",beforeClose:g=>{if(g==="confirm")return console.log("action",g),Oe(),Promise.resolve(!1)}}),!1)}const b=T(!1);async function C(){let c=await m();if(!c)return;let g={address:c.address,rebate_id:d.value.rebate_id,total_rebate:d.value.total_rebate,self_rebate:a.value*d.value.total_rebate/B.value,content:c.content,signature:c.signature};b.value=!0,Ge(g).then(F=>{W.success(i("saveSuccess")),k(),r.value=!1}).catch(F=>{W.fail(i("saveFailed"))}).finally(()=>{b.value=!1})}const S=T(""),v=T(!1),y=T(!1);async function _(){let c=await m();!c||(y.value=!0,xt({...c,reg_code:S.value}).then(g=>{console.log(g),W.success(i("bindSuccessfully")),v.value=!1,Jt()}).catch(g=>{var F;console.log(g),(F=g==null?void 0:g.includes)!=null&&F.call(g,"reg_code is not existed")?W.fail(i("invalidReferralID")):typeof g=="string"?W.fail(g):W.fail(i("bindFailed"))}).finally(()=>{y.value=!1}))}const p=T(!1),I=T("");function A(){rt.toDataURL(h.value,{margin:1}).then(c=>{I.value=c}).catch(c=>{console.error(c)}),p.value=!0}function N(){let c=document.querySelector(".posters");c&&(p.value=!1,Xe(c,{backgroundColor:null,scale:3}).then(g=>{let F=g.toDataURL();Ye(F,"ave-poster.png")}))}async function k(){let c=await m();return c?(c.reg_code&&await xt(c).catch(g=>{console.log(g)}),qe(c).then(g=>{d.value=g,console.log(g);let F=Math.round(d.value.total_rebate/10);return a.value=d.value.self_rebate*F/d.value.total_rebate,g.is_active||(v.value=!0),Promise.resolve(g)})):Promise.reject(!1)}const z=T(!1),M=T([]);function O(){!d.value.share_code||(z.value=!0,Qe(d.value.share_code).then(c=>{var g;M.value=((g=c==null?void 0:c.page_info)==null?void 0:g.data)||[],l.value=c.total_points}).finally(()=>{z.value=!1}))}const q=T(!1),L=T([]),Ut=T(0),zt=T(0);function Vt(){!d.value.share_code||(q.value=!0,We(d.value.share_code).then(c=>{var g;L.value=((g=c==null?void 0:c.page_info)==null?void 0:g.data)||[],Ut.value=(c==null?void 0:c.total_rebate)||0,zt.value=(c==null?void 0:c.today_rebate)||0}).finally(()=>{q.value=!1}))}const vt=T(!1);let nt=T([]);function Ht(){!d.value.share_code||(vt.value=!0,Ze(d.value.share_code).then(c=>{nt.value=c.data||[]}).finally(()=>{vt.value=!1}))}const _t=T(0),we=en({interval:1e3}),Kt=T(Date.now()),be=yt(()=>_t.value===0?0:Math.round((we.value-Kt.value+_t.value*1e3)/1e3));function Jt(){je().then(c=>{Kt.value=Date.now(),_t.value=c.server_time,k().then(()=>{O(),Ht(),Vt()})}).catch(c=>{k().then(()=>{O(),Ht(),Vt()})})}return Fe(()=>{Jt()}),(c,g)=>{var jt,Gt,qt;const F=Re,wt=Ae,ye=Te,Q=Pe,lt=Ue("router-link"),bt=Se,Ot=Ne,Ce=Me,Ee=ke,Be=Le,Ie=$e,Yt=ze("copy");return $(),H("div",Xn,[u("div",xn,[u("div",to,[u("div",eo,[u("div",no,[u("span",oo,f(c.$t("promoteTwo-way")),1),u("span",so,f(c.$t("earningPoints")),1)]),u("button",{class:"section-1_right color-3F80F7 clickable",onClick:g[0]||(g[0]=V(P=>n.value=!0,["stop"]))},f(c.$t("inviteRules")),1)]),u("div",io,[u("span",null,f(c.$t("highest")),1),Z("\xA0 "),u("span",ro,f(E(d).total_rebate)+"%",1),Z(" \xA0"),u("span",null,f(c.$t("sharedRebate")),1)])]),u("div",ao,[u("table",null,[u("tr",lo,[u("th",null,f(c.$t("myRebateRate")),1),u("th",null,f(c.$t("friendRebateRatio")),1)]),u("tr",co,[u("td",null,f(E(d).self_rebate)+"%",1),u("td",null,f(E(d).total_rebate-E(d).self_rebate)+"%",1)])]),u("img",{class:"icon-edit",src:an,alt:"",srcset:"",onClick:g[1]||(g[1]=V(P=>r.value=!0,["stop"]))})]),u("div",uo,[u("span",fo,f(c.$t("inviteLink")),1),u("span",ho,f(h.value.slice(0,12)+"..."+h.value.slice(-15)),1),ot(($(),H("svg",go,po)),[[Yt,h.value]])]),u("div",vo,[u("span",_o,f(c.$t("inviteCode")),1),u("span",wo,f(E(d).share_code),1),ot(($(),H("svg",bo,Co)),[[Yt,E(d).share_code]])]),u("div",Eo,[R(F,{class:"btn-download",type:"primary",color:"#3F80F7",round:"",block:"",onClick:A},{default:D(()=>[Bo,u("span",null,f(c.$t("posterShare")),1)]),_:1})])]),u("div",Io,[R(ye,{active:o.value,"onUpdate:active":g[2]||(g[2]=P=>o.value=P),shrink:"",color:"#0077FF","title-inactive-color":"#999999","title-active-color":"#000000",class:"van-hairline--bottom"},{default:D(()=>[R(wt,{title:c.$t("integralReward")},null,8,["title"]),R(wt,{title:c.$t("swapRebate")},null,8,["title"]),R(wt,{title:c.$t("promotionUser")},null,8,["title"])]),_:1},8,["active"]),ot(u("div",Ro,[u("div",Ao,[u("div",{class:"tab-item_header-item clickable",onClick:V(w,["stop"])},[Po,u("span",So,f(c.$t("currentPoints"))+": ",1),u("span",No,f(l.value),1),R(Q,{name:"arrow"})],8,To),R(lt,{to:{name:"Usage"},class:"link clickable"},{default:D(()=>[Z(f(c.$t("pointUsage")),1)]),_:1})]),R(nn,{tableList:M.value},null,8,["tableList"]),M.value&&M.value.length===0&&!z.value?($(),Et(bt,{key:0,class:"empty",description:c.$t("emptyData")},null,8,["description"])):Y("",!0),E(d).share_code&&((jt=M.value)==null?void 0:jt.length)>=20?($(),H("div",Mo,[R(lt,{to:{name:"Points",params:{code:E(d).share_code,interval:0}},class:"view-more-button clickable"},{default:D(()=>[u("span",null,f(c.$t("viewMore")),1),R(Q,{name:"arrow"})]),_:1},8,["to"])])):Y("",!0)],512),[[Ct,o.value===0]]),ot(u("div",ko,[u("div",Lo,[u("div",{class:"tab-item_header-item clickable",onClick:g[3]||(g[3]=V(P=>E(d).share_code&&E(t).push({name:"Rebate",params:{code:E(d).share_code,interval:1}}),["stop"]))},[$o,u("span",Do,f(c.$t("todayRebates"))+": ",1),u("span",Fo,f(E(Xt)(zt.value)),1),R(Q,{name:"arrow"})]),u("div",{class:"tab-item_header-item clickable",onClick:g[4]||(g[4]=V(P=>E(d).share_code&&E(t).push({name:"Rebate",params:{code:E(d).share_code,interval:0}}),["stop"]))},[Uo,u("span",zo,f(c.$t("totalRebates"))+": ",1),u("span",Vo,f(E(Xt)(Ut.value)),1),R(Q,{name:"arrow"})])]),R(on,{tableList:L.value},null,8,["tableList"]),L.value&&L.value.length===0&&!q.value?($(),Et(bt,{key:0,class:"empty",description:c.$t("emptyData")},null,8,["description"])):Y("",!0),E(d).share_code&&((Gt=L.value)==null?void 0:Gt.length)>=20?($(),H("div",Ho,[R(lt,{to:{name:"Rebate",params:{code:E(d).share_code,interval:0}},class:"view-more-button clickable"},{default:D(()=>[u("span",null,f(c.$t("viewMore")),1),R(Q,{name:"arrow"})]),_:1},8,["to"])])):Y("",!0)],512),[[Ct,o.value===1]]),ot(u("div",Ko,[R(sn,{tableList:E(nt)},null,8,["tableList"]),E(nt)&&E(nt).length===0&&!vt.value?($(),Et(bt,{key:0,class:"empty",description:c.$t("emptyData")},null,8,["description"])):Y("",!0),E(d).share_code&&((qt=E(nt))==null?void 0:qt.length)>=20?($(),H("div",Jo,[R(lt,{to:{name:"Promote",params:{code:E(d).share_code,interval:0}},class:"view-more-button clickable"},{default:D(()=>[u("span",null,f(c.$t("viewMore")),1),R(Q,{name:"arrow"})]),_:1},8,["to"])])):Y("",!0)],512),[[Ct,o.value===2]])]),R(Ot,{show:n.value,"onUpdate:show":g[5]||(g[5]=P=>n.value=P),title:c.$t("inviteRules")},{default:D(()=>[u("section",Oo,[u("h3",null,f(c.$t("invitationInstructions")),1),u("ul",null,[u("li",null,f(c.$t("invitationInstructions-1")),1),u("li",null,f(c.$t("invitationInstructions-2")),1),u("li",null,f(c.$t("invitationInstructions-3")),1),u("li",null,f(c.$t("invitationInstructions-4")),1),u("li",null,f(c.$t("invitationInstructions-5")),1)]),u("h3",null,f(c.$t("pointsDescription")),1),u("table",null,[u("tr",null,[u("th",null,f(c.$t("successRewards"))+"/"+f(c.$t("role")),1),u("th",null,f(c.$t("invitationSuccess")),1),u("th",null,f(c.$t("secondInvitationRewards")),1)]),u("tr",null,[u("td",null,f(c.$t("inviter")),1),Yo,jo]),u("tr",null,[u("td",null,f(c.$t("invitees")),1),Go,qo])]),u("h3",null,f(c.$t("referralDescription")),1),u("ul",null,[u("li",null,f(c.$t("invitationInstructions1-1")),1),u("li",null,f(c.$t("invitationInstructions1-2")),1),u("li",null,f(c.$t("invitationInstructions1-3")),1),u("li",null,f(c.$t("invitationInstructions1-4")),1)]),u("div",Qo,"*"+f(c.$t("points-tips")),1),u("div",Wo,f(c.$t("interpretation")),1)])]),_:1},8,["show","title"]),R(Ot,{show:r.value,"onUpdate:show":g[7]||(g[7]=P=>r.value=P),title:c.$t("modifyRebateRatio")},{default:D(()=>[u("section",Zo,[u("div",Xo,f(c.$t("yourSharedRebateRatio"))+": "+f(E(d).total_rebate)+" %",1),u("div",xo,f(c.$t("setRebateRatio")),1),u("div",ts,[($(!0),H(Wt,null,Ve(B.value+1,P=>($(),H(Wt,{key:P},[u("div",{class:Zt(["dot",{active:a.value===P-1}]),onClick:V(ms=>a.value=P-1,["stop"])},null,10,es),P!==B.value+1?($(),H("div",ns)):Y("",!0)],64))),128))]),u("div",os,[u("span",null,f(c.$t("my"))+" "+f(E(d).total_rebate*a.value/B.value||0)+"%",1),u("span",null,f(c.$t("friend"))+" "+f(E(d).total_rebate-E(d).total_rebate*a.value/B.value||0)+"%",1)]),u("div",ss,"*"+f(c.$t("saving-tips")),1),u("div",is,[R(F,{class:"btn",type:"default",round:"",onClick:g[6]||(g[6]=V(P=>r.value=!1,["stop"]))},{default:D(()=>[Z(f(c.$t("cancel")),1)]),_:1}),R(F,{class:"btn",type:"primary",round:"",color:"#3F80F7",loading:b.value,onClick:V(C,["stop"])},{default:D(()=>[Z(f(c.$t("save")),1)]),_:1},8,["loading","onClick"])])])]),_:1},8,["show","title"]),R(Be,{show:v.value,"onUpdate:show":g[9]||(g[9]=P=>v.value=P),style:{width:"90%","border-radius":"0.43rem",padding:"0.64rem"},"close-on-click-overlay":!1},{default:D(()=>[R(Ee,{class:"form-bind",onSubmit:_},{default:D(()=>[u("h3",rs,f(c.$t("completeActivationAndReceive")),1),u("div",as,"5 "+f(c.$t("points")),1),R(Ce,{class:"field-border",modelValue:S.value,"onUpdate:modelValue":g[8]||(g[8]=P=>S.value=P),placeholder:c.$t("fillReferral"),clearable:"",rules:[{required:!0,message:c.$t("fillReferral")}]},null,8,["modelValue","placeholder","rules"]),R(F,{class:"form-bind_submit",round:"",block:"",type:"primary",color:"#3F80F7","native-type":"submit",loading:y.value},{default:D(()=>[Z(f(c.$t("activateNow")),1)]),_:1},8,["loading"]),u("div",ls,f(c.$t("activation-tips")),1)]),_:1})]),_:1},8,["show"]),R(Ie,{show:p.value,onClick:g[13]||(g[13]=P=>p.value=!1)},{default:D(()=>[u("div",{class:Zt(["posters",E(s)]),onClick:g[10]||(g[10]=V(()=>{},["stop"]))},[E(s)==="zh-cn"?($(),H("img",cs)):E(s)==="en"?($(),H("img",us)):Y("",!0),u("div",ds,f(c.$t("inviteCode1"))+": "+f(E(d).share_code),1),u("img",{class:"posters-qrcode",src:I.value,alt:"",srcset:""},null,8,fs)],2),u("div",{class:"posters-footer",onClick:g[12]||(g[12]=V(()=>{},["stop"]))},[u("button",{class:"posters-footer_btn",onClick:V(N,["stop"])},[u("span",null,f(c.$t("savePic")),1)],8,hs),u("button",{class:"posters-footer_btn",onClick:g[11]||(g[11]=V(P=>p.value=!1,["stop"]))},f(c.$t("cancel")),1)])]),_:1},8,["show"])])}}});const As=rn(gs,[["__scopeId","data-v-79f25d1f"]]);export{As as default};
