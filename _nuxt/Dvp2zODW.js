import{aK as Z}from"./BAjYNYKW.js";function ee(Y,T){for(var b=0;b<T.length;b++){const U=T[b];if(typeof U!="string"&&!Array.isArray(U)){for(const x in U)if(x!=="default"&&!(x in Y)){const m=Object.getOwnPropertyDescriptor(U,x);m&&Object.defineProperty(Y,x,m.get?m:{enumerable:!0,get:()=>U[x]})}}}return Object.freeze(Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"}))}var J={exports:{}};(function(Y){(function(T){Y.exports?(T.default=T,Y.exports=T):T(typeof Highcharts<"u"?Highcharts:void 0)})(function(T){var b=T?T._modules:{};function U(x,m,V,E){x.hasOwnProperty(m)||(x[m]=E.apply(null,V),typeof CustomEvent=="function"&&T.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:m,module:x[m]}})))}U(b,"Core/Geometry/CircleUtilities.js",[b["Core/Geometry/GeometryUtilities.js"]],function(x){var m;let{getAngleBetweenPoints:V,getCenterOfPoints:E,getDistanceBetweenPoints:D}=x;return function(C){function L(f,p){let y=Math.pow(10,p);return Math.round(f*y)/y}function M(f){if(f<=0)throw Error("radius of circle must be a positive number.");return Math.PI*f*f}function P(f,p){return f*f*Math.acos(1-p/f)-(f-p)*Math.sqrt(p*(2*f-p))}function _(f,p){let y=D(f,p),v=f.r,A=p.r,w=[];if(y<v+A&&y>Math.abs(v-A)){let O=v*v,j=(O-A*A+y*y)/(2*y),S=Math.sqrt(O-j*j),c=f.x,a=p.x,o=f.y,d=p.y,t=c+j*(a-c)/y,r=o+j*(d-o)/y,e=-(S/y*(d-o)),n=-(S/y*(a-c));w=[{x:L(t+e,14),y:L(r-n,14)},{x:L(t-e,14),y:L(r+n,14)}]}return w}function z(f){return f.reduce((p,y,v,A)=>{let w=A.slice(v+1).reduce((O,j,S)=>{let c=[v,S+v+1];return O.concat(_(y,j).map(a=>(a.indexes=c,a)))},[]);return p.concat(w)},[])}function G(f,p){return D(f,p)<=p.r+1e-10}function $(f,p){return!p.some(function(y){return!G(f,y)})}function H(f){return z(f).filter(function(p){return $(p,f)})}C.round=L,C.getAreaOfCircle=M,C.getCircularSegmentArea=P,C.getOverlapBetweenCircles=function(f,p,y){let v=0;if(y<f+p){if(y<=Math.abs(p-f))v=M(f<p?f:p);else{let A=(f*f-p*p+y*y)/(2*y);v=P(f,f-A)+P(p,p-(y-A))}v=L(v,14)}return v},C.getCircleCircleIntersection=_,C.getCirclesIntersectionPoints=z,C.isCircle1CompletelyOverlappingCircle2=function(f,p){return D(f,p)+p.r<f.r+1e-10},C.isPointInsideCircle=G,C.isPointInsideAllCircles=$,C.isPointOutsideAllCircles=function(f,p){return!p.some(function(y){return G(f,y)})},C.getCirclesIntersectionPolygon=H,C.getAreaOfIntersectionBetweenCircles=function(f){let p=H(f),y;if(p.length>1){let v=E(p),A=(p=p.map(function(O){return O.angle=V(v,O),O}).sort(function(O,j){return j.angle-O.angle}))[p.length-1],w=p.reduce(function(O,j){let{startPoint:S}=O,c=E([S,j]),a=j.indexes.filter(function(o){return S.indexes.indexOf(o)>-1}).reduce(function(o,d){let t=f[d],r=V(t,j),e=V(t,S),n=e-r+(e<r?2*Math.PI:0),s=e-n/2,i=D(c,{x:t.x+t.r*Math.sin(s),y:t.y+t.r*Math.cos(s)}),{r:l}=t;return i>2*l&&(i=2*l),(!o||o.width>i)&&(o={r:l,largeArc:i>l?1:0,width:i,x:j.x,y:j.y}),o},null);if(a){let{r:o}=a;O.arcs.push(["A",o,o,0,a.largeArc,1,a.x,a.y]),O.startPoint=j}return O},{startPoint:A,arcs:[]}).arcs;w.length===0||w.length===1||(w.unshift(["M",A.x,A.y]),y={center:v,d:w})}return y}}(m||(m={})),m}),U(b,"Series/DrawPointUtilities.js",[],function(){return{draw:function(x,m){let{animatableAttribs:V,onComplete:E,css:D,renderer:C}=m,L=x.series&&x.series.chart.hasRendered?void 0:x.series&&x.series.options.animation,M=x.graphic;if(m.attribs={...m.attribs,class:x.getClassName()},x.shouldDraw())M||(M=m.shapeType==="text"?C.text():m.shapeType==="image"?C.image(m.imageUrl||"").attr(m.shapeArgs||{}):C[m.shapeType](m.shapeArgs||{}),x.graphic=M,M.add(m.group)),D&&M.css(D),M.attr(m.attribs).animate(V,!m.isNew&&L,E);else if(M){let P=()=>{x.graphic=M=M&&M.destroy(),typeof E=="function"&&E()};Object.keys(V).length?M.animate(V,void 0,()=>P()):P()}}}}),U(b,"Series/Venn/VennPoint.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(x,m){let{scatter:{prototype:{pointClass:V}}}=x.seriesTypes,{isNumber:E}=m;return class extends V{isValid(){return E(this.value)}shouldDraw(){return!!this.shapeArgs}}}),U(b,"Series/Venn/VennSeriesDefaults.js",[],function(){return{borderColor:"#cccccc",borderDashStyle:"solid",borderWidth:1,brighten:0,clip:!1,colorByPoint:!0,dataLabels:{enabled:!0,verticalAlign:"middle",formatter:function(){return this.point.name}},inactiveOtherPoints:!0,marker:!1,opacity:.75,showInLegend:!1,legendType:"point",states:{hover:{opacity:1,borderColor:"#333333"},select:{color:"#cccccc",borderColor:"#000000",animation:!1},inactive:{opacity:.075}},tooltip:{pointFormat:"{point.name}: {point.value}"},legendSymbol:"rectangle"}}),U(b,"Series/Venn/VennUtils.js",[b["Core/Geometry/CircleUtilities.js"],b["Core/Geometry/GeometryUtilities.js"],b["Core/Utilities.js"]],function(x,m,V){let{getAreaOfCircle:E,getCircleCircleIntersection:D,getOverlapBetweenCircles:C,isPointInsideAllCircles:L,isPointInsideCircle:M,isPointOutsideAllCircles:P}=x,{getDistanceBetweenPoints:_}=m,{extend:z,isArray:G,isNumber:$,isObject:H,isString:f}=V;function p(c){let a={};return c.filter(o=>o.sets.length===2).forEach(o=>{o.sets.forEach((d,t,r)=>{H(a[d])||(a[d]={totalOverlap:0,overlapping:{}}),a[d]={totalOverlap:(a[d].totalOverlap||0)+o.value,overlapping:{...a[d].overlapping||{},[r[1-t]]:o.value}}})}),c.filter(w).forEach(o=>{let d=a[o.sets[0]];z(o,d)}),c}function y(c,a,o,d,t){let r=c(a),e=c(o),n=100,s=1e-10,i=o-a,l,u,h=1;if(a>=o)throw Error("a must be smaller than b.");if(r*e>0)throw Error("f(a) and f(b) must have opposite signs.");if(r===0)l=a;else if(e===0)l=o;else for(;h++<=n&&u!==0&&i>s;)i=(o-a)/2,r*(u=c(l=a+i))>0?a=l:o=l;return l}function v(c){let a=c.slice(0,-1),o=a.length,d=[],t=(r,e)=>(r.sum+=e[r.i],r);for(let r=0;r<o;r++)d[r]=a.reduce(t,{sum:0,i:r}).sum/o;return d}function A(c,a,o){let d=c+a;return o<=0?d:E(c<a?c:a)<=o?0:y(t=>o-C(c,a,t),0,d)}function w(c){return G(c.sets)&&c.sets.length===1}function O(c){let a={};return H(c)&&$(c.value)&&c.value>-1&&G(c.sets)&&c.sets.length>0&&!c.sets.some(function(o){let d=!1;return!a[o]&&f(o)?a[o]=!0:d=!0,d})}function j(c,a){return a.reduce(function(o,d){let t=0;if(d.sets.length>1){let r=d.value-function(e){let n=0;if(e.length===2){let s=e[0],i=e[1];n=C(s.r,i.r,_(s,i))}return n}(d.sets.map(function(e){return c[e]}));t=Math.round(r*r*1e11)/1e11}return o+t},0)}function S(c,a){return a.totalOverlap!==void 0&&c.totalOverlap!==void 0?a.totalOverlap-c.totalOverlap:NaN}return{geometry:m,geometryCircles:x,addOverlapToSets:p,getCentroid:v,getDistanceBetweenCirclesByOverlap:A,getLabelWidth:function(c,a,o){let d=a.reduce((e,n)=>Math.min(n.r,e),1/0),t=o.filter(e=>!M(c,e)),r=function(e,n){return y(s=>{let i={x:c.x+n*s,y:c.y};return-(e-s)+(L(i,a)&&P(i,t)?0:Number.MAX_VALUE)},0,e)};return 2*Math.min(r(d,-1),r(d,1))},getMarginFromCircles:function(c,a,o){let d=a.reduce((t,r)=>{let e=r.r-_(c,r);return e<=t?e:t},Number.MAX_VALUE);return o.reduce((t,r)=>{let e=_(c,r)-r.r;return e<=t?e:t},d)},isSet:w,layoutGreedyVenn:function(c){let a=[],o={};c.filter(e=>e.sets.length===1).forEach(e=>{o[e.sets[0]]=e.circle={x:Number.MAX_VALUE,y:Number.MAX_VALUE,r:Math.sqrt(e.value/Math.PI)}});let d=(e,n)=>{let s=e.circle;s&&(s.x=n.x,s.y=n.y),a.push(e)};p(c);let t=c.filter(w).sort(S);d(t.shift(),{x:0,y:0});let r=c.filter(e=>e.sets.length===2);for(let e of t){let n=e.circle;if(!n)continue;let s=n.r,i=e.overlapping;d(e,a.reduce((l,u,h)=>{let g=u.circle;if(!g||!i)return l;let X=i[u.sets[0]],W=A(s,g.r,X),N=[{x:g.x+W,y:g.y},{x:g.x-W,y:g.y},{x:g.x,y:g.y+W},{x:g.x,y:g.y-W}];for(let k of a.slice(h+1)){let B=k.circle,q=i[k.sets[0]];if(!B)continue;let R=A(s,B.r,q);N=N.concat(D({x:g.x,y:g.y,r:W},{x:B.x,y:B.y,r:R}))}for(let k of N){n.x=k.x,n.y=k.y;let B=j(o,r);B<l.loss&&(l.loss=B,l.coordinates=k)}return l},{loss:Number.MAX_VALUE,coordinates:void 0}).coordinates)}return o},loss:j,nelderMead:function(c,a){let o=function(s,i){return s.fx-i.fx},d=(s,i,l,u)=>i.map((h,g)=>s*h+l*u[g]),t=(s,i)=>(i.fx=c(i),s[s.length-1]=i,s),r=s=>{let i=s[0];return s.map(l=>{let u=d(.5,i,.5,l);return u.fx=c(u),u})},e=(s,i,l,u)=>{let h=d(l,s,u,i);return h.fx=c(h),h},n=(s=>{let i=s.length,l=Array(i+1);l[0]=s,l[0].fx=c(s);for(let u=0;u<i;++u){let h=s.slice();h[u]=h[u]?1.05*h[u]:.001,h.fx=c(h),l[u+1]=h}return l})(a);for(let s=0;s<100;s++){n.sort(o);let i=n[n.length-1],l=v(n),u=e(l,i,2,-1);if(u.fx<n[0].fx){let h=e(l,i,3,-2);n=t(n,h.fx<u.fx?h:u)}else if(u.fx>=n[n.length-2].fx){let h;n=u.fx>i.fx?(h=e(l,i,.5,.5)).fx<i.fx?t(n,h):r(n):(h=e(l,i,1.5,-.5)).fx<u.fx?t(n,h):r(n)}else n=t(n,u)}return n[0]},processVennData:function(c,a){let o=G(c)?c:[],d=o.reduce(function(r,e){var n;return e.sets&&O(n=e)&&w(n)&&n.value>0&&r.indexOf(e.sets[0])===-1&&r.push(e.sets[0]),r},[]).sort(),t=o.reduce(function(r,e){return e.sets&&O(e)&&!e.sets.some(function(n){return d.indexOf(n)===-1})&&(r[e.sets.sort().join(a)]={sets:e.sets,value:e.value||0}),r},{});return d.reduce(function(r,e,n,s){return s.slice(n+1).forEach(function(i){r.push(e+a+i)}),r},[]).forEach(function(r){if(!t[r]){let e={sets:r.split(a),value:0};t[r]=e}}),Object.keys(t).map(function(r){return t[r]})},sortByTotalOverlap:S}}),U(b,"Series/Venn/VennSeries.js",[b["Core/Animation/AnimationUtilities.js"],b["Core/Color/Color.js"],b["Core/Geometry/CircleUtilities.js"],b["Series/DrawPointUtilities.js"],b["Core/Geometry/GeometryUtilities.js"],b["Core/Series/SeriesRegistry.js"],b["Series/Venn/VennPoint.js"],b["Series/Venn/VennSeriesDefaults.js"],b["Series/Venn/VennUtils.js"],b["Core/Utilities.js"]],function(x,m,V,E,D,C,L,M,P,_){let{animObject:z}=x,{parse:G}=m,{getAreaOfIntersectionBetweenCircles:$,getCirclesIntersectionPolygon:H,isCircle1CompletelyOverlappingCircle2:f,isPointInsideAllCircles:p,isPointOutsideAllCircles:y}=V,{getCenterOfPoints:v}=D,{scatter:A}=C.seriesTypes,{addEvent:w,extend:O,isArray:j,isNumber:S,isObject:c,merge:a}=_;class o extends A{static getLabelPosition(t,r){let e=t.reduce((s,i)=>{let l=i.r/2;return[{x:i.x,y:i.y},{x:i.x+l,y:i.y},{x:i.x-l,y:i.y},{x:i.x,y:i.y+l},{x:i.x,y:i.y-l}].reduce((u,h)=>{let g=P.getMarginFromCircles(h,t,r);return u.margin<g&&(u.point=h,u.margin=g),u},s)},{point:void 0,margin:-Number.MAX_VALUE}).point,n=P.nelderMead(s=>-P.getMarginFromCircles({x:s[0],y:s[1]},t,r),[e.x,e.y]);return p(e={x:n[0],y:n[1]},t)&&y(e,r)||(e=t.length>1?v(H(t)):{x:t[0].x,y:t[0].y}),e}static getLabelValues(t,r){let e=t.sets,n=r.reduce((l,u)=>{let h=e.indexOf(u.sets[0])>-1;return u.circle&&l[h?"internal":"external"].push(u.circle),l},{internal:[],external:[]});n.external=n.external.filter(l=>n.internal.some(u=>!f(l,u)));let s=o.getLabelPosition(n.internal,n.external),i=P.getLabelWidth(s,n.internal,n.external);return{position:s,width:i}}static layout(t){let r={},e={};if(t.length>0){let n=P.layoutGreedyVenn(t),s=t.filter(P.isSet);for(let i of t){let l=i.sets,u=l.join(),h=P.isSet(i)?n[u]:$(l.map(g=>n[g]));h&&(r[u]=h,e[u]=o.getLabelValues(i,s))}}return{mapOfIdToShape:r,mapOfIdToLabelValues:e}}static getScale(t,r,e){let n=e.bottom-e.top,s=e.right-e.left,i=(e.right+e.left)/2,l=(e.top+e.bottom)/2,u=Math.min(s>0?1/s*t:1,n>0?1/n*r:1);return{scale:u,centerX:t/2-i*u,centerY:r/2-l*u}}static updateFieldBoundaries(t,r){let e=r.x-r.r,n=r.x+r.r,s=r.y+r.r,i=r.y-r.r;return(!S(t.left)||t.left>e)&&(t.left=e),(!S(t.right)||t.right<n)&&(t.right=n),(!S(t.top)||t.top>i)&&(t.top=i),(!S(t.bottom)||t.bottom<s)&&(t.bottom=s),t}animate(t){if(!t){let r=z(this.options.animation);for(let e of this.points){let n=e.shapeArgs;if(e.graphic&&n){let s={},i={};n.d?s.opacity=.001:(s.r=0,i.r=n.r),e.graphic.attr(s).animate(i,r),n.d&&setTimeout(()=>{e&&e.graphic&&e.graphic.animate({opacity:1})},r.duration)}}}}drawPoints(){let t=this.chart,r=this.group,e=this.points||[],n=t.renderer;for(let s of e){let i={zIndex:j(s.sets)?s.sets.length:0},l=s.shapeArgs;t.styledMode||O(i,this.pointAttribs(s,s.state)),E.draw(s,{isNew:!s.graphic,animatableAttribs:l,attribs:i,group:r,renderer:n,shapeType:l&&l.d?"path":"circle"})}}init(){A.prototype.init.apply(this,arguments),delete this.opacity}pointAttribs(t,r){let e=this.options||{},n=t&&t.options||{},s=r&&e.states[r]||{},i=a(e,{color:t&&t.color},n,s);return{fill:G(i.color).brighten(i.brightness).get(),opacity:i.opacity,stroke:i.borderColor,"stroke-width":i.borderWidth,dashstyle:i.borderDashStyle}}translate(){let t=this.chart;this.processedXData=this.xData,this.generatePoints();let r=P.processVennData(this.options.data,o.splitter),{mapOfIdToShape:e,mapOfIdToLabelValues:n}=o.layout(r),s=Object.keys(e).filter(g=>{let X=e[g];return X&&S(X.r)}).reduce((g,X)=>o.updateFieldBoundaries(g,e[X]),{top:0,bottom:0,left:0,right:0}),i=o.getScale(t.plotWidth,t.plotHeight,s),l=i.scale,u=i.centerX,h=i.centerY;for(let g of this.points){let X=j(g.sets)?g.sets:[],W=X.join(),N=e[W],k=n[W]||{},B=g.options&&g.options.dataLabels,q,R=k.width,F=k.position;if(N){if(N.r)q={x:u+N.x*l,y:h+N.y*l,r:N.r*l};else if(N.d){let K=N.d;K.forEach(I=>{I[0]==="M"?(I[1]=u+I[1]*l,I[2]=h+I[2]*l):I[0]==="A"&&(I[1]=I[1]*l,I[2]=I[2]*l,I[6]=u+I[6]*l,I[7]=h+I[7]*l)}),q={d:K}}F?(F.x=u+F.x*l,F.y=h+F.y*l):F={},S(R)&&(R=Math.round(R*l))}g.shapeArgs=q,F&&q&&(g.plotX=F.x,g.plotY=F.y),R&&q&&(g.dlOptions=a(!0,{style:{width:R}},c(B,!0)?B:void 0)),g.name=g.options.name||X.join("∩")}}}return o.splitter="highcharts-split",o.defaultOptions=a(A.defaultOptions,M),O(o.prototype,{axisTypes:[],directTouch:!0,isCartesian:!1,pointArrayMap:["value"],pointClass:L,utils:P}),w(o,"afterSetOptions",function(d){let t=d.options.states||{};if(this.is("venn"))for(let r of Object.keys(t))t[r].halo=!1}),C.registerSeriesType("venn",o),o}),U(b,"masters/modules/venn.src.js",[b["Core/Globals.js"]],function(x){return x})})})(J);var Q=J.exports;const te=Z(Q),ie=ee({__proto__:null,default:te},[Q]);export{ie as v};
