import{aK as ct}from"./BAjYNYKW.js";function pt(_,j){for(var p=0;p<j.length;p++){const S=j[p];if(typeof S!="string"&&!Array.isArray(S)){for(const s in S)if(s!=="default"&&!(s in _)){const l=Object.getOwnPropertyDescriptor(S,s);l&&Object.defineProperty(_,s,l.get?l:{enumerable:!0,get:()=>S[s]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}var nt={exports:{}};(function(_){(function(j){_.exports?(j.default=j,_.exports=j):j(typeof Highcharts<"u"?Highcharts:void 0)})(function(j){var p=j?j._modules:{};function S(s,l,M,A){s.hasOwnProperty(l)||(s[l]=A.apply(null,M),typeof CustomEvent=="function"&&j.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:l,module:s[l]}})))}S(p,"Series/DrawPointUtilities.js",[],function(){return{draw:function(s,l){let{animatableAttribs:M,onComplete:A,css:C,renderer:b}=l,E=s.series&&s.series.chart.hasRendered?void 0:s.series&&s.series.options.animation,y=s.graphic;if(l.attribs={...l.attribs,class:s.getClassName()},s.shouldDraw())y||(y=l.shapeType==="text"?b.text():l.shapeType==="image"?b.image(l.imageUrl||"").attr(l.shapeArgs||{}):b[l.shapeType](l.shapeArgs||{}),s.graphic=y,y.add(l.group)),C&&y.css(C),y.attr(l.attribs).animate(M,!l.isNew&&E,A);else if(y){let O=()=>{s.graphic=y=y&&y.destroy(),typeof A=="function"&&A()};Object.keys(M).length?y.animate(M,void 0,()=>O()):O()}}}}),S(p,"Series/Wordcloud/WordcloudPoint.js",[p["Core/Series/SeriesRegistry.js"],p["Core/Utilities.js"]],function(s,l){let{column:{prototype:{pointClass:M}}}=s.seriesTypes,{extend:A}=l;class C extends M{isValid(){return!0}}return A(C.prototype,{weight:1}),C}),S(p,"Series/Wordcloud/WordcloudSeriesDefaults.js",[],function(){return{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,cropThreshold:1/0,minFontSize:1,maxFontSize:25,placementStrategy:"center",rotation:{from:0,orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",fontWeight:"900",whiteSpace:"nowrap"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.weight}</b><br/>'}}}),S(p,"Series/Wordcloud/WordcloudUtils.js",[p["Core/Globals.js"],p["Core/Utilities.js"]],function(s,l){let{deg2rad:M}=s,{extend:A,find:C,isNumber:b,isObject:E,merge:y}=l;function O(e,t){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)}function N(e){let t=e.axes||[];return t.length||(t=[],e.concat([e[0]]).reduce((o,i)=>{let r=function(n,a){let d=a[0]-n[0],x=a[1]-n[1];return[[-x,d],[x,-d]]}(o,i)[0];return C(t,n=>n[0]===r[0]&&n[1]===r[1])||t.push(r),i}),e.axes=t),t}function k(e,t){let o=e.map(i=>{let r=i[0],n=i[1];return r*t[0]+n*t[1]});return{min:Math.min.apply(this,o),max:Math.max.apply(this,o)}}function X(e,t){let o=N(e),i=N(t);return!C(o.concat(i),r=>function(n,a,d){let x=k(a,n),h=k(d,n);return h.min>x.max||h.max<x.min}(r,e,t))}function Y(e,t){let o=4*e,i=Math.ceil((Math.sqrt(o)-1)/2),r=2*i+1,n=Math.pow(r,2),a=!1;return r-=1,e<=1e4&&(typeof a=="boolean"&&o>=n-r&&(a={x:i-(n-o),y:-i}),n-=r,typeof a=="boolean"&&o>=n-r&&(a={x:-i,y:-i+(n-o)}),n-=r,typeof a=="boolean"&&(a=o>=n-r?{x:-i+(n-o),y:i}:{x:i,y:i-(n-o-r)}),a.x*=5,a.y*=5),a}function G(e,t){let o=Math.pow(10,b(t)?t:14);return Math.round(e*o)/o}function I(e,t){let o=e[0],i=e[1],r=-(M*t),n=Math.cos(r),a=Math.sin(r);return[G(o*n-i*a),G(o*a+i*n)]}function q(e,t,o){let i=I([e[0]-t[0],e[1]-t[1]],o);return[i[0]+t[0],i[1]+t[1]]}return{archimedeanSpiral:function(e,t){let o=t.field,i=o.width*o.width+o.height*o.height,r=.8*e,n=!1;return e<=1e4&&!(Math.min(Math.abs((n={x:r*Math.cos(r),y:r*Math.sin(r)}).x),Math.abs(n.y))<i)&&(n=!1),n},extendPlayingField:function(e,t){let o,i,r,n,a,d,x,h;return E(e)&&E(t)?(o=t.bottom-t.top,d=(a=(i=t.right-t.left)*(r=e.ratioX)>o*(n=e.ratioY)?i:o)*r,x=a*n,h=y(e,{width:e.width+2*d,height:e.height+2*x})):h=e,h},getBoundingBoxFromPolygon:function(e){return e.reduce(function(t,o){let i=o[0],r=o[1];return t.left=Math.min(i,t.left),t.right=Math.max(i,t.right),t.bottom=Math.max(r,t.bottom),t.top=Math.min(r,t.top),t},{left:Number.MAX_VALUE,right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,top:Number.MAX_VALUE})},getPlayingField:function(e,t,o){let i=o.reduce(function(d,x){let h=x.dimensions,f=Math.max(h.width,h.height);return d.maxHeight=Math.max(d.maxHeight,h.height),d.maxWidth=Math.max(d.maxWidth,h.width),d.area+=f*f,d},{maxHeight:0,maxWidth:0,area:0}),r=Math.max(i.maxHeight,i.maxWidth,.85*Math.sqrt(i.area)),n=e>t?e/t:1,a=t>e?t/e:1;return{width:r*n,height:r*a,ratioX:n,ratioY:a}},getPolygon:function(e,t,o,i,r){let n=[e,t],a=e-o/2,d=e+o/2,x=t-i/2,h=t+i/2;return[[a,x],[d,x],[d,h],[a,h]].map(function(f){return q(f,n,-r)})},getRandomPosition:function(e){return Math.round(e*(Math.random()+.5)/2)},getRotation:function(e,t,o,i){let r=!1,n;return b(e)&&b(t)&&b(o)&&b(i)&&e>0&&t>-1&&i>o&&(n=(i-o)/(e-1||1),r=o+t%e*n),r},getScale:function(e,t,o){let i=2*Math.max(Math.abs(o.top),Math.abs(o.bottom)),r=2*Math.max(Math.abs(o.left),Math.abs(o.right));return Math.min(r>0?1/r*e:1,i>0?1/i*t:1)},getSpiral:function(e,t){let o=[];for(let i=1;i<1e4;i++)o.push(e(i,t));return i=>i<=1e4&&o[i-1]},intersectionTesting:function(e,t){let o=t.placed,i=t.field,r=t.rectangle,n=t.polygon,a=t.spiral,d=e.rect=A({},r),x=1,h={x:0,y:0};for(e.polygon=n,e.rotation=t.rotation;h!==!1&&(function(f,W){let T=f.rect,H=f.polygon,B=f.lastCollidedWith,R=function(u){let c=O(T,u.rect);return c&&(f.rotation%90||u.rotation%90)&&(c=X(H,u.polygon)),c},g=!1;return!B||(g=R(B))||delete f.lastCollidedWith,g||(g=!!C(W,function(u){let c=R(u);return c&&(f.lastCollidedWith=u),c})),g}(e,o)||function(f,W){let T={left:-(W.width/2),right:W.width/2,top:-(W.height/2),bottom:W.height/2};return!(T.left<f.left&&T.right>f.right&&T.top<f.top&&T.bottom>f.bottom)}(d,i));)E(h=a(x))&&(d.left=r.left+h.x,d.right=r.right+h.x,d.top=r.top+h.y,d.bottom=r.bottom+h.y,e.polygon=function(f,W,T){return T.map(function(H){return[H[0]+f,H[1]+W]})}(h.x,h.y,n)),x++;return h},isPolygonsColliding:X,isRectanglesIntersecting:O,rectangularSpiral:function(e,t){let o=Y(e),i=t.field;return o&&(o.x*=i.ratioX,o.y*=i.ratioY),o},rotate2DToOrigin:I,rotate2DToPoint:q,squareSpiral:Y,updateFieldBoundaries:function(e,t){return(!b(e.left)||e.left>t.left)&&(e.left=t.left),(!b(e.right)||e.right<t.right)&&(e.right=t.right),(!b(e.top)||e.top>t.top)&&(e.top=t.top),(!b(e.bottom)||e.bottom<t.bottom)&&(e.bottom=t.bottom),e}}}),S(p,"Series/Wordcloud/WordcloudSeries.js",[p["Series/DrawPointUtilities.js"],p["Core/Globals.js"],p["Core/Series/SeriesRegistry.js"],p["Core/Utilities.js"],p["Series/Wordcloud/WordcloudPoint.js"],p["Series/Wordcloud/WordcloudSeriesDefaults.js"],p["Series/Wordcloud/WordcloudUtils.js"]],function(s,l,M,A,C,b,E){let{noop:y}=l,{column:O}=M.seriesTypes,{extend:N,isArray:k,isNumber:X,isObject:Y,merge:G}=A,{archimedeanSpiral:I,extendPlayingField:q,getBoundingBoxFromPolygon:e,getPlayingField:t,getPolygon:o,getRandomPosition:i,getRotation:r,getScale:n,getSpiral:a,intersectionTesting:d,isPolygonsColliding:x,rectangularSpiral:h,rotate2DToOrigin:f,rotate2DToPoint:W,squareSpiral:T,updateFieldBoundaries:H}=E;class B extends O{pointAttribs(g,u){let c=l.seriesTypes.column.prototype.pointAttribs.call(this,g,u);return delete c.stroke,delete c["stroke-width"],c}deriveFontSize(g,u,c){let z=X(g)?g:0,L=X(u)?u:1;return Math.floor(Math.max(X(c)?c:1,z*L))}drawPoints(){let g=this.hasRendered,u=this.xAxis,c=this.yAxis,z=this.chart,L=this.group,w=this.options,lt=w.animation,st=w.allowExtendPlayingField,tt=z.renderer,$=[],dt=this.placementStrategy[w.placementStrategy],ht=w.rotation,ut=this.points.map(function(m){return m.weight}),et=Math.max.apply(null,ut),K=this.points.concat().sort((m,V)=>V.weight-m.weight),J=tt.text().add(L),v;for(let m of(this.group.attr({scaleX:1,scaleY:1}),K)){let V=1/et*m.weight,Q=N({fontSize:this.deriveFontSize(V,w.maxFontSize,w.minFontSize)+"px"},w.style);J.css(Q).attr({x:0,y:0,text:m.name});let P=J.getBBox(!0);m.dimensions={height:P.height,width:P.width}}v=t(u.len,c.len,K);let ot=a(this.spirals[w.spiral],{field:v});for(let m of K){let V=1/et*m.weight,Q=N({fontSize:this.deriveFontSize(V,w.maxFontSize,w.minFontSize)+"px"},w.style),P=dt(m,{data:K,field:v,placed:$,rotation:ht}),F=N(this.pointAttribs(m,m.selected&&"select"),{align:"center","alignment-baseline":"middle","dominant-baseline":"middle",x:P.x,y:P.y,text:m.name,rotation:X(P.rotation)?P.rotation:void 0}),Z=o(P.x,P.y,m.dimensions.width,m.dimensions.height,P.rotation),U=e(Z),D=d(m,{rectangle:U,polygon:Z,field:v,placed:$,spiral:ot,rotation:P.rotation}),rt;!D&&st&&(v=q(v,U),D=d(m,{rectangle:U,polygon:Z,field:v,placed:$,spiral:ot,rotation:P.rotation})),Y(D)?(F.x=(F.x||0)+D.x,F.y=(F.y||0)+D.y,U.left+=D.x,U.right+=D.x,U.top+=D.y,U.bottom+=D.y,v=H(v,U),$.push(m),m.isNull=!1,m.isInside=!0):m.isNull=!0,lt&&(rt={x:F.x,y:F.y},g?(delete F.x,delete F.y):(F.x=0,F.y=0)),s.draw(m,{animatableAttribs:rt,attribs:F,css:Q,group:L,renderer:tt,shapeArgs:void 0,shapeType:"text"})}J=J.destroy();let it=n(u.len,c.len,v);this.group.attr({scaleX:it,scaleY:it})}hasData(){return Y(this)&&this.visible===!0&&k(this.points)&&this.points.length>0}getPlotBox(){let g=this.chart,u=g.inverted,c=this[u?"yAxis":"xAxis"],z=this[u?"xAxis":"yAxis"],L=c?c.len:g.plotWidth,w=z?z.len:g.plotHeight;return{translateX:(c?c.left:g.plotLeft)+L/2,translateY:(z?z.top:g.plotTop)+w/2,scaleX:1,scaleY:1}}}return B.defaultOptions=G(O.defaultOptions,b),N(B.prototype,{animate:y,animateDrilldown:y,animateDrillupFrom:y,isCartesian:!1,pointClass:C,setClip:y,placementStrategy:{random:function(R,g){let u=g.field,c=g.rotation;return{x:i(u.width)-u.width/2,y:i(u.height)-u.height/2,rotation:r(c.orientations,R.index,c.from,c.to)}},center:function(R,g){let u=g.rotation;return{x:0,y:0,rotation:r(u.orientations,R.index,u.from,u.to)}}},pointArrayMap:["weight"],spirals:{archimedean:I,rectangular:h,square:T},utils:{extendPlayingField:q,getRotation:r,isPolygonsColliding:x,rotate2DToOrigin:f,rotate2DToPoint:W}}),M.registerSeriesType("wordcloud",B),B}),S(p,"masters/modules/wordcloud.src.js",[p["Core/Globals.js"]],function(s){return s})})})(nt);var at=nt.exports;const gt=ct(at),ft=pt({__proto__:null,default:gt},[at]);export{ft as w};