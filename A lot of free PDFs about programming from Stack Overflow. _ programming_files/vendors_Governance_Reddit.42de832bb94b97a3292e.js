(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~Governance~Reddit"],{"./node_modules/@r/frames/compiled.js":function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0});var o=arguments,r=".*",t=".postMessage",s={targetOrigin:"*"},i=/\..+$/;function u(e){return new RegExp("\\.(?:"+e.join("|")+")$")}function l(e){return new RegExp("^http(s)?:\\/\\/"+e.join("|")+"$","i")}var a=[r],d=l(a),c=[t],f=u(c),h={},m=!1;function _(n,o,r){e.addEventListener?e.addEventListener(n,o,r):e.attachEvent&&e.attachEvent("on"+n,o)}function p(n,o){e.removeEventListener?e.removeEventListener(n,o):e.detachEvent&&e.detachEvent("on"+n,o)}function g(e){return/\*/.test(e)}var v=n.postMessage=function(e,n,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};i.test(n)||(n+=t);var u=r;Object.keys(s).forEach((function(e){u[e]=s[e]})),e.postMessage(JSON.stringify({type:n,data:o,defaultedOptions:u}),u.targetOrigin)},j=n.receiveMessage=function(e,n,o,r){"string"==typeof e&&(r=o,o=n,n=e,e=null),r=r||void 0;var t=function(n){for(var t=arguments.length,s=Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];e&&e!==n.source&&e.contentWindow!==n.source||o.apply(r,[n].concat(s))};return _(n,t),{off:function(){p(n,t)}}},b=(n.receiveMessageOnce=function(e,n,r,t){var s=j(e,n,(function(){r&&r.apply(void 0,o),s.off()}),t);return s},n.removePostMessageOrigin=function(e){var n=a.indexOf(e);-1!==n&&(a.splice(n,1),d=l(a))}),y=e.CustomEvent;if("undefined"!=typeof window&&"function"!=typeof y){var w={bubbles:!1,cancelable:!1,detail:void 0};(y=function(e,n){n=n||w;var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),o}).prototype=e.Event.prototype}n.addPostMessageOrigin=function(e){g(e)?a=[r]:-1===a.indexOf(e)&&(b(r),a.push(e),d=l(a))};function O(n){if(n.origin===e.location.origin||d.test(n.origin)||"null"===n.origin){var o={};try{o=JSON.parse(n.data)}catch(n){}var r=o.type;if(f.test(r)){var t=r.split(".",2)[1];if(h[t])h[t].targets.forEach((function(e){return v(e,r,o.data,o.options)}));var s=new y(r,{detail:o.data});s.source=n.source,e.dispatchEvent(s)}}}var x=n.listen=function(e){-1===c.indexOf(e)&&(c.push(e),f=u(c)),m||(_("message",O),m=!0)};n.stopListening=function(e){var n=c.indexOf(e);-1!==n&&(c.splice(n,1),c.length?f=u(c):(p("message",O),m=!1))},n.proxy=function(e,n){x(e),Array.isArray(n)||(n=[n]);var o=h[e];o?o.targets=[].concat(o.targets,n):o={targets:n},h[e]=o}}).call(this,o("./node_modules/webpack/buildin/global.js"))},"./node_modules/bignumber.js/bignumber.js":function(e,n,o){var r;!function(t){"use strict";var s,i=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,u=Math.ceil,l=Math.floor,a="[BigNumber Error] ",d=a+"Number primitive has more than 15 significant digits: ",c=1e14,f=14,h=9007199254740991,m=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],_=1e7,p=1e9;function g(e){var n=0|e;return e>0||e===n?n:n-1}function v(e){for(var n,o,r=1,t=e.length,s=e[0]+"";r<t;){for(n=e[r++]+"",o=f-n.length;o--;n="0"+n);s+=n}for(t=s.length;48===s.charCodeAt(--t););return s.slice(0,t+1||1)}function j(e,n){var o,r,t=e.c,s=n.c,i=e.s,u=n.s,l=e.e,a=n.e;if(!i||!u)return null;if(o=t&&!t[0],r=s&&!s[0],o||r)return o?r?0:-u:i;if(i!=u)return i;if(o=i<0,r=l==a,!t||!s)return r?0:!t^o?1:-1;if(!r)return l>a^o?1:-1;for(u=(l=t.length)<(a=s.length)?l:a,i=0;i<u;i++)if(t[i]!=s[i])return t[i]>s[i]^o?1:-1;return l==a?0:l>a^o?1:-1}function b(e,n,o,r){if(e<n||e>o||e!==(e<0?u(e):l(e)))throw Error(a+(r||"Argument")+("number"==typeof e?e<n||e>o?" out of range: ":" not an integer: ":" not a primitive number: ")+e)}function y(e){return"[object Array]"==Object.prototype.toString.call(e)}function w(e){var n=e.c.length-1;return g(e.e/f)==n&&e.c[n]%2!=0}function O(e,n){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(n<0?"e":"e+")+n}function x(e,n,o){var r,t;if(n<0){for(t=o+".";++n;t+=o);e=t+e}else if(++n>(r=e.length)){for(t=o,n-=r;--n;t+=o);e+=t}else n<r&&(e=e.slice(0,n)+"."+e.slice(n));return e}(s=function e(n){var o,r,t,s,A,E,S,N,I,R=z.prototype={constructor:z,toString:null,valueOf:null},C=new z(1),M=20,P=4,T=-7,F=21,L=-1e7,k=1e7,U=!1,D=1,B=0,q={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0},G="0123456789abcdefghijklmnopqrstuvwxyz";function z(e,n){var o,s,u,a,c,m,_,p,g=this;if(!(g instanceof z))return new z(e,n);if(null==n){if(e instanceof z)return g.s=e.s,g.e=e.e,void(g.c=(e=e.c)?e.slice():e);if((m="number"==typeof e)&&0*e==0){if(g.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,c=e;c>=10;c/=10,a++);return g.e=a,void(g.c=[e])}p=e+""}else{if(!i.test(p=e+""))return t(g,p,m);g.s=45==p.charCodeAt(0)?(p=p.slice(1),-1):1}(a=p.indexOf("."))>-1&&(p=p.replace(".","")),(c=p.search(/e/i))>0?(a<0&&(a=c),a+=+p.slice(c+1),p=p.substring(0,c)):a<0&&(a=p.length)}else{if(b(n,2,G.length,"Base"),p=e+"",10==n)return H(g=new z(e instanceof z?e:p),M+g.e+1,P);if(m="number"==typeof e){if(0*e!=0)return t(g,p,m,n);if(g.s=1/e<0?(p=p.slice(1),-1):1,z.DEBUG&&p.replace(/^0\.0*|\./,"").length>15)throw Error(d+e);m=!1}else g.s=45===p.charCodeAt(0)?(p=p.slice(1),-1):1;for(o=G.slice(0,n),a=c=0,_=p.length;c<_;c++)if(o.indexOf(s=p.charAt(c))<0){if("."==s){if(c>a){a=_;continue}}else if(!u&&(p==p.toUpperCase()&&(p=p.toLowerCase())||p==p.toLowerCase()&&(p=p.toUpperCase()))){u=!0,c=-1,a=0;continue}return t(g,e+"",m,n)}(a=(p=r(p,n,10,g.s)).indexOf("."))>-1?p=p.replace(".",""):a=p.length}for(c=0;48===p.charCodeAt(c);c++);for(_=p.length;48===p.charCodeAt(--_););if(p=p.slice(c,++_)){if(_-=c,m&&z.DEBUG&&_>15&&(e>h||e!==l(e)))throw Error(d+g.s*e);if((a=a-c-1)>k)g.c=g.e=null;else if(a<L)g.c=[g.e=0];else{if(g.e=a,g.c=[],c=(a+1)%f,a<0&&(c+=f),c<_){for(c&&g.c.push(+p.slice(0,c)),_-=f;c<_;)g.c.push(+p.slice(c,c+=f));p=p.slice(c),c=f-p.length}else c-=_;for(;c--;p+="0");g.c.push(+p)}}else g.c=[g.e=0]}function $(e,n,o,r){var t,s,i,u,l;if(null==o?o=P:b(o,0,8),!e.c)return e.toString();if(t=e.c[0],i=e.e,null==n)l=v(e.c),l=1==r||2==r&&i<=T?O(l,i):x(l,i,"0");else if(s=(e=H(new z(e),n,o)).e,u=(l=v(e.c)).length,1==r||2==r&&(n<=s||s<=T)){for(;u<n;l+="0",u++);l=O(l,s)}else if(n-=i,l=x(l,s,"0"),s+1>u){if(--n>0)for(l+=".";n--;l+="0");}else if((n+=s-u)>0)for(s+1==u&&(l+=".");n--;l+="0");return e.s<0&&t?"-"+l:l}function V(e,n){var o,r,t=0;for(y(e[0])&&(e=e[0]),o=new z(e[0]);++t<e.length;){if(!(r=new z(e[t])).s){o=r;break}n.call(o,r)&&(o=r)}return o}function W(e,n,o){for(var r=1,t=n.length;!n[--t];n.pop());for(t=n[0];t>=10;t/=10,r++);return(o=r+o*f-1)>k?e.c=e.e=null:o<L?e.c=[e.e=0]:(e.e=o,e.c=n),e}function H(e,n,o,r){var t,s,i,a,d,h,_,p=e.c,g=m;if(p){e:{for(t=1,a=p[0];a>=10;a/=10,t++);if((s=n-t)<0)s+=f,i=n,_=(d=p[h=0])/g[t-i-1]%10|0;else if((h=u((s+1)/f))>=p.length){if(!r)break e;for(;p.length<=h;p.push(0));d=_=0,t=1,i=(s%=f)-f+1}else{for(d=a=p[h],t=1;a>=10;a/=10,t++);_=(i=(s%=f)-f+t)<0?0:d/g[t-i-1]%10|0}if(r=r||n<0||null!=p[h+1]||(i<0?d:d%g[t-i-1]),r=o<4?(_||r)&&(0==o||o==(e.s<0?3:2)):_>5||5==_&&(4==o||r||6==o&&(s>0?i>0?d/g[t-i]:0:p[h-1])%10&1||o==(e.s<0?8:7)),n<1||!p[0])return p.length=0,r?(n-=e.e+1,p[0]=g[(f-n%f)%f],e.e=-n||0):p[0]=e.e=0,e;if(0==s?(p.length=h,a=1,h--):(p.length=h+1,a=g[f-s],p[h]=i>0?l(d/g[t-i]%g[i])*a:0),r)for(;;){if(0==h){for(s=1,i=p[0];i>=10;i/=10,s++);for(i=p[0]+=a,a=1;i>=10;i/=10,a++);s!=a&&(e.e++,p[0]==c&&(p[0]=1));break}if(p[h]+=a,p[h]!=c)break;p[h--]=0,a=1}for(s=p.length;0===p[--s];p.pop());}e.e>k?e.c=e.e=null:e.e<L&&(e.c=[e.e=0])}return e}return z.clone=e,z.ROUND_UP=0,z.ROUND_DOWN=1,z.ROUND_CEIL=2,z.ROUND_FLOOR=3,z.ROUND_HALF_UP=4,z.ROUND_HALF_DOWN=5,z.ROUND_HALF_EVEN=6,z.ROUND_HALF_CEIL=7,z.ROUND_HALF_FLOOR=8,z.EUCLID=9,z.config=z.set=function(e){var n,o;if(null!=e){if("object"!=typeof e)throw Error(a+"Object expected: "+e);if(e.hasOwnProperty(n="DECIMAL_PLACES")&&(b(o=e[n],0,p,n),M=o),e.hasOwnProperty(n="ROUNDING_MODE")&&(b(o=e[n],0,8,n),P=o),e.hasOwnProperty(n="EXPONENTIAL_AT")&&(y(o=e[n])?(b(o[0],-p,0,n),b(o[1],0,p,n),T=o[0],F=o[1]):(b(o,-p,p,n),T=-(F=o<0?-o:o))),e.hasOwnProperty(n="RANGE"))if(y(o=e[n]))b(o[0],-p,-1,n),b(o[1],1,p,n),L=o[0],k=o[1];else{if(b(o,-p,p,n),!o)throw Error(a+n+" cannot be zero: "+o);L=-(k=o<0?-o:o)}if(e.hasOwnProperty(n="CRYPTO")){if((o=e[n])!==!!o)throw Error(a+n+" not true or false: "+o);if(o){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw U=!o,Error(a+"crypto unavailable");U=o}else U=o}if(e.hasOwnProperty(n="MODULO_MODE")&&(b(o=e[n],0,9,n),D=o),e.hasOwnProperty(n="POW_PRECISION")&&(b(o=e[n],0,p,n),B=o),e.hasOwnProperty(n="FORMAT")){if("object"!=typeof(o=e[n]))throw Error(a+n+" not an object: "+o);q=o}if(e.hasOwnProperty(n="ALPHABET")){if("string"!=typeof(o=e[n])||/^.$|\.|(.).*\1/.test(o))throw Error(a+n+" invalid: "+o);G=o}}return{DECIMAL_PLACES:M,ROUNDING_MODE:P,EXPONENTIAL_AT:[T,F],RANGE:[L,k],CRYPTO:U,MODULO_MODE:D,POW_PRECISION:B,FORMAT:q,ALPHABET:G}},z.isBigNumber=function(e){return e instanceof z||e&&!0===e._isBigNumber||!1},z.maximum=z.max=function(){return V(arguments,R.lt)},z.minimum=z.min=function(){return V(arguments,R.gt)},z.random=(s=9007199254740992*Math.random()&2097151?function(){return l(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var n,o,r,t,i,d=0,c=[],h=new z(C);if(null==e?e=M:b(e,0,p),t=u(e/f),U)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(t*=2));d<t;)(i=131072*n[d]+(n[d+1]>>>11))>=9e15?(o=crypto.getRandomValues(new Uint32Array(2)),n[d]=o[0],n[d+1]=o[1]):(c.push(i%1e14),d+=2);d=t/2}else{if(!crypto.randomBytes)throw U=!1,Error(a+"crypto unavailable");for(n=crypto.randomBytes(t*=7);d<t;)(i=281474976710656*(31&n[d])+1099511627776*n[d+1]+4294967296*n[d+2]+16777216*n[d+3]+(n[d+4]<<16)+(n[d+5]<<8)+n[d+6])>=9e15?crypto.randomBytes(7).copy(n,d):(c.push(i%1e14),d+=7);d=t/7}if(!U)for(;d<t;)(i=s())<9e15&&(c[d++]=i%1e14);for(t=c[--d],e%=f,t&&e&&(i=m[f-e],c[d]=l(t/i)*i);0===c[d];c.pop(),d--);if(d<0)c=[r=0];else{for(r=-1;0===c[0];c.splice(0,1),r-=f);for(d=1,i=c[0];i>=10;i/=10,d++);d<f&&(r-=f-d)}return h.e=r,h.c=c,h}),r=function(){function e(e,n,o,r){for(var t,s,i=[0],u=0,l=e.length;u<l;){for(s=i.length;s--;i[s]*=n);for(i[0]+=r.indexOf(e.charAt(u++)),t=0;t<i.length;t++)i[t]>o-1&&(null==i[t+1]&&(i[t+1]=0),i[t+1]+=i[t]/o|0,i[t]%=o)}return i.reverse()}return function(n,r,t,s,i){var u,l,a,d,c,f,h,m,_=n.indexOf("."),p=M,g=P;for(_>=0&&(d=B,B=0,n=n.replace(".",""),f=(m=new z(r)).pow(n.length-_),B=d,m.c=e(x(v(f.c),f.e,"0"),10,t,"0123456789"),m.e=m.c.length),a=d=(h=e(n,r,t,i?(u=G,"0123456789"):(u="0123456789",G))).length;0==h[--d];h.pop());if(!h[0])return u.charAt(0);if(_<0?--a:(f.c=h,f.e=a,f.s=s,h=(f=o(f,m,p,g,t)).c,c=f.r,a=f.e),_=h[l=a+p+1],d=t/2,c=c||l<0||null!=h[l+1],c=g<4?(null!=_||c)&&(0==g||g==(f.s<0?3:2)):_>d||_==d&&(4==g||c||6==g&&1&h[l-1]||g==(f.s<0?8:7)),l<1||!h[0])n=c?x(u.charAt(1),-p,u.charAt(0)):u.charAt(0);else{if(h.length=l,c)for(--t;++h[--l]>t;)h[l]=0,l||(++a,h=[1].concat(h));for(d=h.length;!h[--d];);for(_=0,n="";_<=d;n+=u.charAt(h[_++]));n=x(n,a,u.charAt(0))}return n}}(),o=function(){function e(e,n,o){var r,t,s,i,u=0,l=e.length,a=n%_,d=n/_|0;for(e=e.slice();l--;)u=((t=a*(s=e[l]%_)+(r=d*s+(i=e[l]/_|0)*a)%_*_+u)/o|0)+(r/_|0)+d*i,e[l]=t%o;return u&&(e=[u].concat(e)),e}function n(e,n,o,r){var t,s;if(o!=r)s=o>r?1:-1;else for(t=s=0;t<o;t++)if(e[t]!=n[t]){s=e[t]>n[t]?1:-1;break}return s}function o(e,n,o,r){for(var t=0;o--;)e[o]-=t,t=e[o]<n[o]?1:0,e[o]=t*r+e[o]-n[o];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(r,t,s,i,u){var a,d,h,m,_,p,v,j,b,y,w,O,x,A,E,S,N,I=r.s==t.s?1:-1,R=r.c,C=t.c;if(!(R&&R[0]&&C&&C[0]))return new z(r.s&&t.s&&(R?!C||R[0]!=C[0]:C)?R&&0==R[0]||!C?0*I:I/0:NaN);for(b=(j=new z(I)).c=[],I=s+(d=r.e-t.e)+1,u||(u=c,d=g(r.e/f)-g(t.e/f),I=I/f|0),h=0;C[h]==(R[h]||0);h++);if(C[h]>(R[h]||0)&&d--,I<0)b.push(1),m=!0;else{for(A=R.length,S=C.length,h=0,I+=2,(_=l(u/(C[0]+1)))>1&&(C=e(C,_,u),R=e(R,_,u),S=C.length,A=R.length),x=S,w=(y=R.slice(0,S)).length;w<S;y[w++]=0);N=C.slice(),N=[0].concat(N),E=C[0],C[1]>=u/2&&E++;do{if(_=0,(a=n(C,y,S,w))<0){if(O=y[0],S!=w&&(O=O*u+(y[1]||0)),(_=l(O/E))>1)for(_>=u&&(_=u-1),v=(p=e(C,_,u)).length,w=y.length;1==n(p,y,v,w);)_--,o(p,S<v?N:C,v,u),v=p.length,a=1;else 0==_&&(a=_=1),v=(p=C.slice()).length;if(v<w&&(p=[0].concat(p)),o(y,p,w,u),w=y.length,-1==a)for(;n(C,y,S,w)<1;)_++,o(y,S<w?N:C,w,u),w=y.length}else 0===a&&(_++,y=[0]);b[h++]=_,y[0]?y[w++]=R[x]||0:(y=[R[x]],w=1)}while((x++<A||null!=y[0])&&I--);m=null!=y[0],b[0]||b.splice(0,1)}if(u==c){for(h=1,I=b[0];I>=10;I/=10,h++);H(j,s+(j.e=h+d*f-1)+1,i,m)}else j.e=d,j.r=+m;return j}}(),A=/^(-?)0([xbo])(?=\w[\w.]*$)/i,E=/^([^.]+)\.$/,S=/^\.([^.]+)$/,N=/^-?(Infinity|NaN)$/,I=/^\s*\+(?=[\w.])|^\s+|\s+$/g,t=function(e,n,o,r){var t,s=o?n:n.replace(I,"");if(N.test(s))e.s=isNaN(s)?null:s<0?-1:1,e.c=e.e=null;else{if(!o&&(s=s.replace(A,(function(e,n,o){return t="x"==(o=o.toLowerCase())?16:"b"==o?2:8,r&&r!=t?e:n})),r&&(t=r,s=s.replace(E,"$1").replace(S,"0.$1")),n!=s))return new z(s,t);if(z.DEBUG)throw Error(a+"Not a"+(r?" base "+r:"")+" number: "+n);e.c=e.e=e.s=null}},R.absoluteValue=R.abs=function(){var e=new z(this);return e.s<0&&(e.s=1),e},R.comparedTo=function(e,n){return j(this,new z(e,n))},R.decimalPlaces=R.dp=function(e,n){var o,r,t,s=this;if(null!=e)return b(e,0,p),null==n?n=P:b(n,0,8),H(new z(s),e+s.e+1,n);if(!(o=s.c))return null;if(r=((t=o.length-1)-g(this.e/f))*f,t=o[t])for(;t%10==0;t/=10,r--);return r<0&&(r=0),r},R.dividedBy=R.div=function(e,n){return o(this,new z(e,n),M,P)},R.dividedToIntegerBy=R.idiv=function(e,n){return o(this,new z(e,n),0,1)},R.exponentiatedBy=R.pow=function(e,n){var o,r,t,s,i,d,c,h=this;if((e=new z(e)).c&&!e.isInteger())throw Error(a+"Exponent not an integer: "+e);if(null!=n&&(n=new z(n)),s=e.e>14,!h.c||!h.c[0]||1==h.c[0]&&!h.e&&1==h.c.length||!e.c||!e.c[0])return c=new z(Math.pow(+h.valueOf(),s?2-w(e):+e)),n?c.mod(n):c;if(i=e.s<0,n){if(n.c?!n.c[0]:!n.s)return new z(NaN);(r=!i&&h.isInteger()&&n.isInteger())&&(h=h.mod(n))}else{if(e.e>9&&(h.e>0||h.e<-1||(0==h.e?h.c[0]>1||s&&h.c[1]>=24e7:h.c[0]<8e13||s&&h.c[0]<=9999975e7)))return t=h.s<0&&w(e)?-0:0,h.e>-1&&(t=1/t),new z(i?1/t:t);B&&(t=u(B/f+2))}for(s?(o=new z(.5),d=w(e)):d=e%2,i&&(e.s=1),c=new z(C);;){if(d){if(!(c=c.times(h)).c)break;t?c.c.length>t&&(c.c.length=t):r&&(c=c.mod(n))}if(s){if(H(e=e.times(o),e.e+1,1),!e.c[0])break;s=e.e>14,d=w(e)}else{if(!(e=l(e/2)))break;d=e%2}h=h.times(h),t?h.c&&h.c.length>t&&(h.c.length=t):r&&(h=h.mod(n))}return r?c:(i&&(c=C.div(c)),n?c.mod(n):t?H(c,B,P,void 0):c)},R.integerValue=function(e){var n=new z(this);return null==e?e=P:b(e,0,8),H(n,n.e+1,e)},R.isEqualTo=R.eq=function(e,n){return 0===j(this,new z(e,n))},R.isFinite=function(){return!!this.c},R.isGreaterThan=R.gt=function(e,n){return j(this,new z(e,n))>0},R.isGreaterThanOrEqualTo=R.gte=function(e,n){return 1===(n=j(this,new z(e,n)))||0===n},R.isInteger=function(){return!!this.c&&g(this.e/f)>this.c.length-2},R.isLessThan=R.lt=function(e,n){return j(this,new z(e,n))<0},R.isLessThanOrEqualTo=R.lte=function(e,n){return-1===(n=j(this,new z(e,n)))||0===n},R.isNaN=function(){return!this.s},R.isNegative=function(){return this.s<0},R.isPositive=function(){return this.s>0},R.isZero=function(){return!!this.c&&0==this.c[0]},R.minus=function(e,n){var o,r,t,s,i=this,u=i.s;if(n=(e=new z(e,n)).s,!u||!n)return new z(NaN);if(u!=n)return e.s=-n,i.plus(e);var l=i.e/f,a=e.e/f,d=i.c,h=e.c;if(!l||!a){if(!d||!h)return d?(e.s=-n,e):new z(h?i:NaN);if(!d[0]||!h[0])return h[0]?(e.s=-n,e):new z(d[0]?i:3==P?-0:0)}if(l=g(l),a=g(a),d=d.slice(),u=l-a){for((s=u<0)?(u=-u,t=d):(a=l,t=h),t.reverse(),n=u;n--;t.push(0));t.reverse()}else for(r=(s=(u=d.length)<(n=h.length))?u:n,u=n=0;n<r;n++)if(d[n]!=h[n]){s=d[n]<h[n];break}if(s&&(t=d,d=h,h=t,e.s=-e.s),(n=(r=h.length)-(o=d.length))>0)for(;n--;d[o++]=0);for(n=c-1;r>u;){if(d[--r]<h[r]){for(o=r;o&&!d[--o];d[o]=n);--d[o],d[r]+=c}d[r]-=h[r]}for(;0==d[0];d.splice(0,1),--a);return d[0]?W(e,d,a):(e.s=3==P?-1:1,e.c=[e.e=0],e)},R.modulo=R.mod=function(e,n){var r,t,s=this;return e=new z(e,n),!s.c||!e.s||e.c&&!e.c[0]?new z(NaN):!e.c||s.c&&!s.c[0]?new z(s):(9==D?(t=e.s,e.s=1,r=o(s,e,0,3),e.s=t,r.s*=t):r=o(s,e,0,D),(e=s.minus(r.times(e))).c[0]||1!=D||(e.s=s.s),e)},R.multipliedBy=R.times=function(e,n){var o,r,t,s,i,u,l,a,d,h,m,p,v,j,b,y=this,w=y.c,O=(e=new z(e,n)).c;if(!(w&&O&&w[0]&&O[0]))return!y.s||!e.s||w&&!w[0]&&!O||O&&!O[0]&&!w?e.c=e.e=e.s=null:(e.s*=y.s,w&&O?(e.c=[0],e.e=0):e.c=e.e=null),e;for(r=g(y.e/f)+g(e.e/f),e.s*=y.s,(l=w.length)<(h=O.length)&&(v=w,w=O,O=v,t=l,l=h,h=t),t=l+h,v=[];t--;v.push(0));for(j=c,b=_,t=h;--t>=0;){for(o=0,m=O[t]%b,p=O[t]/b|0,s=t+(i=l);s>t;)o=((a=m*(a=w[--i]%b)+(u=p*a+(d=w[i]/b|0)*m)%b*b+v[s]+o)/j|0)+(u/b|0)+p*d,v[s--]=a%j;v[s]=o}return o?++r:v.splice(0,1),W(e,v,r)},R.negated=function(){var e=new z(this);return e.s=-e.s||null,e},R.plus=function(e,n){var o,r=this,t=r.s;if(n=(e=new z(e,n)).s,!t||!n)return new z(NaN);if(t!=n)return e.s=-n,r.minus(e);var s=r.e/f,i=e.e/f,u=r.c,l=e.c;if(!s||!i){if(!u||!l)return new z(t/0);if(!u[0]||!l[0])return l[0]?e:new z(u[0]?r:0*t)}if(s=g(s),i=g(i),u=u.slice(),t=s-i){for(t>0?(i=s,o=l):(t=-t,o=u),o.reverse();t--;o.push(0));o.reverse()}for((t=u.length)-(n=l.length)<0&&(o=l,l=u,u=o,n=t),t=0;n;)t=(u[--n]=u[n]+l[n]+t)/c|0,u[n]=c===u[n]?0:u[n]%c;return t&&(u=[t].concat(u),++i),W(e,u,i)},R.precision=R.sd=function(e,n){var o,r,t,s=this;if(null!=e&&e!==!!e)return b(e,1,p),null==n?n=P:b(n,0,8),H(new z(s),e,n);if(!(o=s.c))return null;if(r=(t=o.length-1)*f+1,t=o[t]){for(;t%10==0;t/=10,r--);for(t=o[0];t>=10;t/=10,r++);}return e&&s.e+1>r&&(r=s.e+1),r},R.shiftedBy=function(e){return b(e,-h,h),this.times("1e"+e)},R.squareRoot=R.sqrt=function(){var e,n,r,t,s,i=this,u=i.c,l=i.s,a=i.e,d=M+4,c=new z("0.5");if(1!==l||!u||!u[0])return new z(!l||l<0&&(!u||u[0])?NaN:u?i:1/0);if(0==(l=Math.sqrt(+i))||l==1/0?(((n=v(u)).length+a)%2==0&&(n+="0"),l=Math.sqrt(n),a=g((a+1)/2)-(a<0||a%2),r=new z(n=l==1/0?"1e"+a:(n=l.toExponential()).slice(0,n.indexOf("e")+1)+a)):r=new z(l+""),r.c[0])for((l=(a=r.e)+d)<3&&(l=0);;)if(s=r,r=c.times(s.plus(o(i,s,d,1))),v(s.c).slice(0,l)===(n=v(r.c)).slice(0,l)){if(r.e<a&&--l,"9999"!=(n=n.slice(l-3,l+1))&&(t||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(H(r,r.e+M+2,1),e=!r.times(r).eq(i));break}if(!t&&(H(s,s.e+M+2,0),s.times(s).eq(i))){r=s;break}d+=4,l+=4,t=1}return H(r,r.e+M+1,P,e)},R.toExponential=function(e,n){return null!=e&&(b(e,0,p),e++),$(this,e,n,1)},R.toFixed=function(e,n){return null!=e&&(b(e,0,p),e=e+this.e+1),$(this,e,n)},R.toFormat=function(e,n){var o=this.toFixed(e,n);if(this.c){var r,t=o.split("."),s=+q.groupSize,i=+q.secondaryGroupSize,u=q.groupSeparator,l=t[0],a=t[1],d=this.s<0,c=d?l.slice(1):l,f=c.length;if(i&&(r=s,s=i,i=r,f-=r),s>0&&f>0){for(r=f%s||s,l=c.substr(0,r);r<f;r+=s)l+=u+c.substr(r,s);i>0&&(l+=u+c.slice(r)),d&&(l="-"+l)}o=a?l+q.decimalSeparator+((i=+q.fractionGroupSize)?a.replace(new RegExp("\\d{"+i+"}\\B","g"),"$&"+q.fractionGroupSeparator):a):l}return o},R.toFraction=function(e){var n,r,t,s,i,u,l,d,c,h,_,p,g=this,j=g.c;if(null!=e&&(!(d=new z(e)).isInteger()&&(d.c||1!==d.s)||d.lt(C)))throw Error(a+"Argument "+(d.isInteger()?"out of range: ":"not an integer: ")+e);if(!j)return g.toString();for(r=new z(C),h=t=new z(C),s=c=new z(C),p=v(j),u=r.e=p.length-g.e-1,r.c[0]=m[(l=u%f)<0?f+l:l],e=!e||d.comparedTo(r)>0?u>0?r:h:d,l=k,k=1/0,d=new z(p),c.c[0]=0;_=o(d,r,0,1),1!=(i=t.plus(_.times(s))).comparedTo(e);)t=s,s=i,h=c.plus(_.times(i=h)),c=i,r=d.minus(_.times(i=r)),d=i;return i=o(e.minus(t),s,0,1),c=c.plus(i.times(h)),t=t.plus(i.times(s)),c.s=h.s=g.s,n=o(h,s,u*=2,P).minus(g).abs().comparedTo(o(c,t,u,P).minus(g).abs())<1?[h.toString(),s.toString()]:[c.toString(),t.toString()],k=l,n},R.toNumber=function(){return+this},R.toPrecision=function(e,n){return null!=e&&b(e,1,p),$(this,e,n,2)},R.toString=function(e){var n,o=this,t=o.s,s=o.e;return null===s?t?(n="Infinity",t<0&&(n="-"+n)):n="NaN":(n=v(o.c),null==e?n=s<=T||s>=F?O(n,s):x(n,s,"0"):(b(e,2,G.length,"Base"),n=r(x(n,s,"0"),10,e,t,!0)),t<0&&o.c[0]&&(n="-"+n)),n},R.valueOf=R.toJSON=function(){var e,n=this,o=n.e;return null===o?n.toString():(e=v(n.c),e=o<=T||o>=F?O(e,o):x(e,o,"0"),n.s<0?"-"+e:e)},R._isBigNumber=!0,null!=n&&z.set(n),z}()).default=s.BigNumber=s,void 0===(r=function(){return s}.call(n,o,n,e))||(e.exports=r)}()},"./node_modules/core-js/modules/_string-trim.js":function(e,n,o){var r=o("./node_modules/core-js/modules/_export.js"),t=o("./node_modules/core-js/modules/_defined.js"),s=o("./node_modules/core-js/modules/_fails.js"),i=o("./node_modules/core-js/modules/_string-ws.js"),u="["+i+"]",l=RegExp("^"+u+u+"*"),a=RegExp(u+u+"*$"),d=function(e,n,o){var t={},u=s((function(){return!!i[e]()||"​"!="​"[e]()})),l=t[e]=u?n(c):i[e];o&&(t[o]=l),r(r.P+r.F*u,"String",t)},c=d.trim=function(e,n){return e=String(t(e)),1&n&&(e=e.replace(l,"")),2&n&&(e=e.replace(a,"")),e};e.exports=d},"./node_modules/core-js/modules/_string-ws.js":function(e,n){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"./node_modules/core-js/modules/es7.string.trim-right.js":function(e,n,o){"use strict";o("./node_modules/core-js/modules/_string-trim.js")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},"./node_modules/fbjs/lib/emptyFunction.js":function(e,n,o){"use strict";function r(e){return function(){return e}}var t=function(){};t.thatReturns=r,t.thatReturnsFalse=r(!1),t.thatReturnsTrue=r(!0),t.thatReturnsNull=r(null),t.thatReturnsThis=function(){return this},t.thatReturnsArgument=function(e){return e},e.exports=t},"./node_modules/lodash/_arraySampleSize.js":function(e,n,o){var r=o("./node_modules/lodash/_baseClamp.js"),t=o("./node_modules/lodash/_copyArray.js"),s=o("./node_modules/lodash/_shuffleSelf.js");e.exports=function(e,n){return s(t(e),r(n,0,e.length))}},"./node_modules/lodash/_assignMergeValue.js":function(e,n,o){var r=o("./node_modules/lodash/_baseAssignValue.js"),t=o("./node_modules/lodash/eq.js");e.exports=function(e,n,o){(void 0===o||t(e[n],o))&&(void 0!==o||n in e)||r(e,n,o)}},"./node_modules/lodash/_baseClamp.js":function(e,n){e.exports=function(e,n,o){return e==e&&(void 0!==o&&(e=e<=o?e:o),void 0!==n&&(e=e>=n?e:n)),e}},"./node_modules/lodash/_baseInverter.js":function(e,n,o){var r=o("./node_modules/lodash/_baseForOwn.js");e.exports=function(e,n,o,t){return r(e,(function(e,r,s){n(t,o(e),r,s)})),t}},"./node_modules/lodash/_baseMerge.js":function(e,n,o){var r=o("./node_modules/lodash/_Stack.js"),t=o("./node_modules/lodash/_assignMergeValue.js"),s=o("./node_modules/lodash/_baseFor.js"),i=o("./node_modules/lodash/_baseMergeDeep.js"),u=o("./node_modules/lodash/isObject.js"),l=o("./node_modules/lodash/keysIn.js"),a=o("./node_modules/lodash/_safeGet.js");e.exports=function e(n,o,d,c,f){n!==o&&s(o,(function(s,l){if(f||(f=new r),u(s))i(n,o,l,d,e,c,f);else{var h=c?c(a(n,l),s,l+"",n,o,f):void 0;void 0===h&&(h=s),t(n,l,h)}}),l)}},"./node_modules/lodash/_baseMergeDeep.js":function(e,n,o){var r=o("./node_modules/lodash/_assignMergeValue.js"),t=o("./node_modules/lodash/_cloneBuffer.js"),s=o("./node_modules/lodash/_cloneTypedArray.js"),i=o("./node_modules/lodash/_copyArray.js"),u=o("./node_modules/lodash/_initCloneObject.js"),l=o("./node_modules/lodash/isArguments.js"),a=o("./node_modules/lodash/isArray.js"),d=o("./node_modules/lodash/isArrayLikeObject.js"),c=o("./node_modules/lodash/isBuffer.js"),f=o("./node_modules/lodash/isFunction.js"),h=o("./node_modules/lodash/isObject.js"),m=o("./node_modules/lodash/isPlainObject.js"),_=o("./node_modules/lodash/isTypedArray.js"),p=o("./node_modules/lodash/_safeGet.js"),g=o("./node_modules/lodash/toPlainObject.js");e.exports=function(e,n,o,v,j,b,y){var w=p(e,o),O=p(n,o),x=y.get(O);if(x)r(e,o,x);else{var A=b?b(w,O,o+"",e,n,y):void 0,E=void 0===A;if(E){var S=a(O),N=!S&&c(O),I=!S&&!N&&_(O);A=O,S||N||I?a(w)?A=w:d(w)?A=i(w):N?(E=!1,A=t(O,!0)):I?(E=!1,A=s(O,!0)):A=[]:m(O)||l(O)?(A=w,l(w)?A=g(w):h(w)&&!f(w)||(A=u(O))):E=!1}E&&(y.set(O,A),j(A,O,v,b,y),y.delete(O)),r(e,o,A)}}},"./node_modules/lodash/_baseRandom.js":function(e,n){var o=Math.floor,r=Math.random;e.exports=function(e,n){return e+o(r()*(n-e+1))}},"./node_modules/lodash/_baseSampleSize.js":function(e,n,o){var r=o("./node_modules/lodash/_baseClamp.js"),t=o("./node_modules/lodash/_shuffleSelf.js"),s=o("./node_modules/lodash/values.js");e.exports=function(e,n){var o=s(e);return t(o,r(n,0,o.length))}},"./node_modules/lodash/_baseSome.js":function(e,n,o){var r=o("./node_modules/lodash/_baseEach.js");e.exports=function(e,n){var o;return r(e,(function(e,r,t){return!(o=n(e,r,t))})),!!o}},"./node_modules/lodash/_baseXor.js":function(e,n,o){var r=o("./node_modules/lodash/_baseDifference.js"),t=o("./node_modules/lodash/_baseFlatten.js"),s=o("./node_modules/lodash/_baseUniq.js");e.exports=function(e,n,o){var i=e.length;if(i<2)return i?s(e[0]):[];for(var u=-1,l=Array(i);++u<i;)for(var a=e[u],d=-1;++d<i;)d!=u&&(l[u]=r(l[u]||a,e[d],n,o));return s(t(l,1),n,o)}},"./node_modules/lodash/_castSlice.js":function(e,n,o){var r=o("./node_modules/lodash/_baseSlice.js");e.exports=function(e,n,o){var t=e.length;return o=void 0===o?t:o,!n&&o>=t?e:r(e,n,o)}},"./node_modules/lodash/_charsStartIndex.js":function(e,n,o){var r=o("./node_modules/lodash/_baseIndexOf.js");e.exports=function(e,n){for(var o=-1,t=e.length;++o<t&&r(n,e[o],0)>-1;);return o}},"./node_modules/lodash/_createCaseFirst.js":function(e,n,o){var r=o("./node_modules/lodash/_castSlice.js"),t=o("./node_modules/lodash/_hasUnicode.js"),s=o("./node_modules/lodash/_stringToArray.js"),i=o("./node_modules/lodash/toString.js");e.exports=function(e){return function(n){n=i(n);var o=t(n)?s(n):void 0,u=o?o[0]:n.charAt(0),l=o?r(o,1).join(""):n.slice(1);return u[e]()+l}}},"./node_modules/lodash/_createFind.js":function(e,n,o){var r=o("./node_modules/lodash/_baseIteratee.js"),t=o("./node_modules/lodash/isArrayLike.js"),s=o("./node_modules/lodash/keys.js");e.exports=function(e){return function(n,o,i){var u=Object(n);if(!t(n)){var l=r(o,3);n=s(n),o=function(e){return l(u[e],e,u)}}var a=e(n,o,i);return a>-1?u[l?n[a]:a]:void 0}}},"./node_modules/lodash/_createInverter.js":function(e,n,o){var r=o("./node_modules/lodash/_baseInverter.js");e.exports=function(e,n){return function(o,t){return r(o,e,n(t),{})}}},"./node_modules/lodash/_safeGet.js":function(e,n){e.exports=function(e,n){if(("constructor"!==n||"function"!=typeof e[n])&&"__proto__"!=n)return e[n]}},"./node_modules/lodash/_shuffleSelf.js":function(e,n,o){var r=o("./node_modules/lodash/_baseRandom.js");e.exports=function(e,n){var o=-1,t=e.length,s=t-1;for(n=void 0===n?t:n;++o<n;){var i=r(o,s),u=e[i];e[i]=e[o],e[o]=u}return e.length=n,e}},"./node_modules/lodash/camelCase.js":function(e,n,o){var r=o("./node_modules/lodash/capitalize.js"),t=o("./node_modules/lodash/_createCompounder.js")((function(e,n,o){return n=n.toLowerCase(),e+(o?r(n):n)}));e.exports=t},"./node_modules/lodash/capitalize.js":function(e,n,o){var r=o("./node_modules/lodash/toString.js"),t=o("./node_modules/lodash/upperFirst.js");e.exports=function(e){return t(r(e).toLowerCase())}},"./node_modules/lodash/defaults.js":function(e,n,o){var r=o("./node_modules/lodash/_baseRest.js"),t=o("./node_modules/lodash/eq.js"),s=o("./node_modules/lodash/_isIterateeCall.js"),i=o("./node_modules/lodash/keysIn.js"),u=Object.prototype,l=u.hasOwnProperty,a=r((function(e,n){e=Object(e);var o=-1,r=n.length,a=r>2?n[2]:void 0;for(a&&s(n[0],n[1],a)&&(r=1);++o<r;)for(var d=n[o],c=i(d),f=-1,h=c.length;++f<h;){var m=c[f],_=e[m];(void 0===_||t(_,u[m])&&!l.call(e,m))&&(e[m]=d[m])}return e}));e.exports=a},"./node_modules/lodash/find.js":function(e,n,o){var r=o("./node_modules/lodash/_createFind.js")(o("./node_modules/lodash/findIndex.js"));e.exports=r},"./node_modules/lodash/findIndex.js":function(e,n,o){var r=o("./node_modules/lodash/_baseFindIndex.js"),t=o("./node_modules/lodash/_baseIteratee.js"),s=o("./node_modules/lodash/toInteger.js"),i=Math.max;e.exports=function(e,n,o){var u=null==e?0:e.length;if(!u)return-1;var l=null==o?0:s(o);return l<0&&(l=i(u+l,0)),r(e,t(n,3),l)}},"./node_modules/lodash/findLastIndex.js":function(e,n,o){var r=o("./node_modules/lodash/_baseFindIndex.js"),t=o("./node_modules/lodash/_baseIteratee.js"),s=o("./node_modules/lodash/toInteger.js"),i=Math.max,u=Math.min;e.exports=function(e,n,o){var l=null==e?0:e.length;if(!l)return-1;var a=l-1;return void 0!==o&&(a=s(o),a=o<0?i(l+a,0):u(a,l-1)),r(e,t(n,3),a,!0)}},"./node_modules/lodash/flatMap.js":function(e,n,o){var r=o("./node_modules/lodash/_baseFlatten.js"),t=o("./node_modules/lodash/map.js");e.exports=function(e,n){return r(t(e,n),1)}},"./node_modules/lodash/forEach.js":function(e,n,o){var r=o("./node_modules/lodash/_arrayEach.js"),t=o("./node_modules/lodash/_baseEach.js"),s=o("./node_modules/lodash/_castFunction.js"),i=o("./node_modules/lodash/isArray.js");e.exports=function(e,n){return(i(e)?r:t)(e,s(n))}},"./node_modules/lodash/forOwn.js":function(e,n,o){var r=o("./node_modules/lodash/_baseForOwn.js"),t=o("./node_modules/lodash/_castFunction.js");e.exports=function(e,n){return e&&r(e,t(n))}},"./node_modules/lodash/invert.js":function(e,n,o){var r=o("./node_modules/lodash/constant.js"),t=o("./node_modules/lodash/_createInverter.js"),s=o("./node_modules/lodash/identity.js"),i=Object.prototype.toString,u=t((function(e,n,o){null!=n&&"function"!=typeof n.toString&&(n=i.call(n)),e[n]=o}),r(s));e.exports=u},"./node_modules/lodash/isEqualWith.js":function(e,n,o){var r=o("./node_modules/lodash/_baseIsEqual.js");e.exports=function(e,n,o){var t=(o="function"==typeof o?o:void 0)?o(e,n):void 0;return void 0===t?r(e,n,void 0,o):!!t}},"./node_modules/lodash/mapValues.js":function(e,n,o){var r=o("./node_modules/lodash/_baseAssignValue.js"),t=o("./node_modules/lodash/_baseForOwn.js"),s=o("./node_modules/lodash/_baseIteratee.js");e.exports=function(e,n){var o={};return n=s(n,3),t(e,(function(e,t,s){r(o,t,n(e,t,s))})),o}},"./node_modules/lodash/merge.js":function(e,n,o){var r=o("./node_modules/lodash/_baseMerge.js"),t=o("./node_modules/lodash/_createAssigner.js")((function(e,n,o){r(e,n,o)}));e.exports=t},"./node_modules/lodash/mergeWith.js":function(e,n,o){var r=o("./node_modules/lodash/_baseMerge.js"),t=o("./node_modules/lodash/_createAssigner.js")((function(e,n,o,t){r(e,n,o,t)}));e.exports=t},"./node_modules/lodash/sampleSize.js":function(e,n,o){var r=o("./node_modules/lodash/_arraySampleSize.js"),t=o("./node_modules/lodash/_baseSampleSize.js"),s=o("./node_modules/lodash/isArray.js"),i=o("./node_modules/lodash/_isIterateeCall.js"),u=o("./node_modules/lodash/toInteger.js");e.exports=function(e,n,o){return n=(o?i(e,n,o):void 0===n)?1:u(n),(s(e)?r:t)(e,n)}},"./node_modules/lodash/set.js":function(e,n,o){var r=o("./node_modules/lodash/_baseSet.js");e.exports=function(e,n,o){return null==e?e:r(e,n,o)}},"./node_modules/lodash/some.js":function(e,n,o){var r=o("./node_modules/lodash/_arraySome.js"),t=o("./node_modules/lodash/_baseIteratee.js"),s=o("./node_modules/lodash/_baseSome.js"),i=o("./node_modules/lodash/isArray.js"),u=o("./node_modules/lodash/_isIterateeCall.js");e.exports=function(e,n,o){var l=i(e)?r:s;return o&&u(e,n,o)&&(n=void 0),l(e,t(n,3))}},"./node_modules/lodash/toPlainObject.js":function(e,n,o){var r=o("./node_modules/lodash/_copyObject.js"),t=o("./node_modules/lodash/keysIn.js");e.exports=function(e){return r(e,t(e))}},"./node_modules/lodash/trimStart.js":function(e,n,o){var r=o("./node_modules/lodash/_baseToString.js"),t=o("./node_modules/lodash/_castSlice.js"),s=o("./node_modules/lodash/_charsStartIndex.js"),i=o("./node_modules/lodash/_stringToArray.js"),u=o("./node_modules/lodash/toString.js"),l=/^\s+/;e.exports=function(e,n,o){if((e=u(e))&&(o||void 0===n))return e.replace(l,"");if(!e||!(n=r(n)))return e;var a=i(e),d=s(a,i(n));return t(a,d).join("")}},"./node_modules/lodash/union.js":function(e,n,o){var r=o("./node_modules/lodash/_baseFlatten.js"),t=o("./node_modules/lodash/_baseRest.js"),s=o("./node_modules/lodash/_baseUniq.js"),i=o("./node_modules/lodash/isArrayLikeObject.js"),u=t((function(e){return s(r(e,1,i,!0))}));e.exports=u},"./node_modules/lodash/uniqWith.js":function(e,n,o){var r=o("./node_modules/lodash/_baseUniq.js");e.exports=function(e,n){return n="function"==typeof n?n:void 0,e&&e.length?r(e,void 0,n):[]}},"./node_modules/lodash/upperFirst.js":function(e,n,o){var r=o("./node_modules/lodash/_createCaseFirst.js")("toUpperCase");e.exports=r},"./node_modules/lodash/xor.js":function(e,n,o){var r=o("./node_modules/lodash/_arrayFilter.js"),t=o("./node_modules/lodash/_baseRest.js"),s=o("./node_modules/lodash/_baseXor.js"),i=o("./node_modules/lodash/isArrayLikeObject.js"),u=t((function(e){return s(r(e,i))}));e.exports=u},"./node_modules/path-browserify/index.js":function(e,n,o){(function(e){function o(e,n){for(var o=0,r=e.length-1;r>=0;r--){var t=e[r];"."===t?e.splice(r,1):".."===t?(e.splice(r,1),o++):o&&(e.splice(r,1),o--)}if(n)for(;o--;o)e.unshift("..");return e}function r(e,n){if(e.filter)return e.filter(n);for(var o=[],r=0;r<e.length;r++)n(e[r],r,e)&&o.push(e[r]);return o}n.resolve=function(){for(var n="",t=!1,s=arguments.length-1;s>=-1&&!t;s--){var i=s>=0?arguments[s]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(n=i+"/"+n,t="/"===i.charAt(0))}return(t?"/":"")+(n=o(r(n.split("/"),(function(e){return!!e})),!t).join("/"))||"."},n.normalize=function(e){var s=n.isAbsolute(e),i="/"===t(e,-1);return(e=o(r(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&i&&(e+="/"),(s?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(r(e,(function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},n.relative=function(e,o){function r(e){for(var n=0;n<e.length&&""===e[n];n++);for(var o=e.length-1;o>=0&&""===e[o];o--);return n>o?[]:e.slice(n,o-n+1)}e=n.resolve(e).substr(1),o=n.resolve(o).substr(1);for(var t=r(e.split("/")),s=r(o.split("/")),i=Math.min(t.length,s.length),u=i,l=0;l<i;l++)if(t[l]!==s[l]){u=l;break}var a=[];for(l=u;l<t.length;l++)a.push("..");return(a=a.concat(s.slice(u))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var n=e.charCodeAt(0),o=47===n,r=-1,t=!0,s=e.length-1;s>=1;--s)if(47===(n=e.charCodeAt(s))){if(!t){r=s;break}}else t=!1;return-1===r?o?"/":".":o&&1===r?"/":e.slice(0,r)},n.basename=function(e,n){var o=function(e){"string"!=typeof e&&(e+="");var n,o=0,r=-1,t=!0;for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!t){o=n+1;break}}else-1===r&&(t=!1,r=n+1);return-1===r?"":e.slice(o,r)}(e);return n&&o.substr(-1*n.length)===n&&(o=o.substr(0,o.length-n.length)),o},n.extname=function(e){"string"!=typeof e&&(e+="");for(var n=-1,o=0,r=-1,t=!0,s=0,i=e.length-1;i>=0;--i){var u=e.charCodeAt(i);if(47!==u)-1===r&&(t=!1,r=i+1),46===u?-1===n?n=i:1!==s&&(s=1):-1!==n&&(s=-1);else if(!t){o=i+1;break}}return-1===n||-1===r||0===s||1===s&&n===r-1&&n===o+1?"":e.slice(n,r)};var t="b"==="ab".substr(-1)?function(e,n,o){return e.substr(n,o)}:function(e,n,o){return n<0&&(n=e.length+n),e.substr(n,o)}}).call(this,o("./node_modules/process/browser.js"))},"./node_modules/prop-types/factoryWithThrowingShims.js":function(e,n,o){"use strict";var r=o("./node_modules/fbjs/lib/emptyFunction.js"),t=o("./node_modules/fbjs/lib/invariant.js");e.exports=function(){function e(){t(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function n(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n};return o.checkPropTypes=r,o.PropTypes=o,o}},"./node_modules/prop-types/index.js":function(e,n,o){e.exports=o("./node_modules/prop-types/factoryWithThrowingShims.js")()}}]);
//# sourceMappingURL=vendors~Governance~Reddit.42de832bb94b97a3292e.js.map