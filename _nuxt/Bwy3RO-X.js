import{aK as dt}from"./BAjYNYKW.js";function mt(C,y){for(var u=0;u<y.length;u++){const x=y[u];if(typeof x!="string"&&!Array.isArray(x)){for(const m in x)if(m!=="default"&&!(m in C)){const g=Object.getOwnPropertyDescriptor(x,m);g&&Object.defineProperty(C,m,g.get?g:{enumerable:!0,get:()=>x[m]})}}}return Object.freeze(Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}))}var ot={exports:{}};(function(C){(function(y){C.exports?(y.default=y,C.exports=y):y(typeof Highcharts<"u"?Highcharts:void 0)})(function(y){var u=y?y._modules:{};function x(m,g,O,L){m.hasOwnProperty(g)||(m[g]=L.apply(null,O),typeof CustomEvent=="function"&&y.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,module:m[g]}})))}x(u,"Series/FlowMap/FlowMapPoint.js",[u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(m,g){let{seriesTypes:{mapline:{prototype:{pointClass:O}}}}=m,{pick:L,isString:Q,isNumber:F}=g;return class extends O{isValid(){let E=!!(this.options.to&&this.options.from);return[this.options.to,this.options.from].forEach(function(P){E=!!(E&&P&&(Q(P)||F(L(P[0],P.lat))&&F(L(P[1],P.lon))))}),E}}}),x(u,"Series/FlowMap/FlowMapSeries.js",[u["Series/FlowMap/FlowMapPoint.js"],u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(m,g,O){let{series:{prototype:{pointClass:L}},seriesTypes:{column:Q,map:F,mapline:E}}=g,{addEvent:P,arrayMax:st,arrayMin:rt,defined:q,extend:nt,isArray:G,merge:I,pick:b,relativeLength:N}=O;class w extends E{static getLength(e,s){return Math.sqrt(e*e+s*s)}static normalize(e,s){let o=this.getLength(e,s);return[e/o,s/o]}static markerEndPath(e,s,o,t){let r=N(t.width||0,this.getLength(s[0]-e[0],s[1]-e[1])),l=t.markerType||"arrow",[f,n]=this.normalize(s[0]-e[0],s[1]-e[1]),i=[];if(l==="arrow"){let[p,a]=e;p-=f*r,a-=n*r,i.push(["L",p,a]),i.push(["L",o[0],o[1]]),[p,a]=s,p+=f*r,a+=n*r,i.push(["L",p,a])}if(l==="mushroom"){let[p,a]=e,[h,d]=s,[c,M]=o,T=(h-p)/2+p,z=(d-a)/2+a;p-=f*r,a-=n*r,i.push(["L",p,a]),h+=f*r,d+=n*r,i.push(["Q",(c-T)*2+T,(M-z)*2+z,h,d])}return i}animate(e){let s=this.points;e||s.forEach(o=>{if(o.shapeArgs&&G(o.shapeArgs.d)&&o.shapeArgs.d.length){let t=o.shapeArgs.d,r=t[0][1],l=t[0][2];if(r&&l){let f=[];for(let n=0;n<t.length;n++){f.push([...t[n]]);for(let i=1;i<t[n].length;i++)f[n][i]=i%2?r:l}o.graphic&&(o.graphic.attr({d:f}),o.graphic.animate({d:t}))}}})}getLinkWidth(e){let s=this.options.width,o=e.options.weight||this.options.weight;if(e.options.weight=o,s&&!o)return s;let t=this.smallestWeight,r=this.greatestWeight;if(!q(o)||!t||!r)return 0;let l=this.options.minWidth;return(o-t)*(this.options.maxWidth-l)/(r-t||1)+l}autoCurve(e,s,o,t,r,l){let f={x:o-e,y:t-s},n={x:(o-e)/2+e,y:(t-s)/2+s},i={x:n.x-r,y:n.y-l},p=f.x*i.x+f.y*i.y,a=Math.atan2(f.x*i.y-f.y*i.x,p),h=180*a/Math.PI;return h<0&&(h=360+h),-(.7*Math.sin(a=h*Math.PI/180))}pointAttribs(e,s){let o=F.prototype.pointAttribs.call(this,e,s);return o.fill=b(e.options.fillColor,e.options.color,this.options.fillColor==="none"?null:this.options.fillColor,this.color),o["fill-opacity"]=b(e.options.fillOpacity,this.options.fillOpacity),o["stroke-width"]=b(e.options.lineWidth,this.options.lineWidth,1),e.options.opacity&&(o.opacity=e.options.opacity),o}translate(){this.chart.hasRendered&&(this.isDirtyData||!this.hasRendered)&&(this.processData(),this.generatePoints());let e=[],s=0,o=0;this.points.forEach(t=>{let r,l,f=this.chart,n=f.mapView,i=t.options,p=()=>{t.series.isDirty=!0},a=d=>{let c=f.get(d);if(c instanceof L&&c.plotX&&c.plotY)return P(c,"update",p),{x:c.plotX,y:c.plotY}},h=d=>G(d)?{lon:d[0],lat:d[1]}:d;typeof i.from=="string"?r=a(i.from):typeof i.from=="object"&&n&&(r=n.lonLatToPixels(h(i.from))),typeof i.to=="string"?l=a(i.to):typeof i.to=="object"&&n&&(l=n.lonLatToPixels(h(i.to))),t.fromPos=r,t.toPos=l,r&&l&&(s+=(r.x+l.x)/2,o+=(r.y+l.y)/2),b(t.options.weight,this.options.weight)&&e.push(b(t.options.weight,this.options.weight))}),this.smallestWeight=rt(e),this.greatestWeight=st(e),this.centerOfPoints={x:s/this.points.length,y:o/this.points.length},this.points.forEach(t=>{if(!this.getLinkWidth(t)){t.shapeArgs={d:[]};return}t.fromPos&&(t.plotX=t.fromPos.x,t.plotY=t.fromPos.y),t.shapeType="path",t.shapeArgs=this.getPointShapeArgs(t),t.color=b(t.options.color,t.series.color)})}getPointShapeArgs(e){let{fromPos:s,toPos:o}=e;if(!s||!o)return{};let t=this.getLinkWidth(e)/2,r=e.options,l=I(this.options.markerEnd,r.markerEnd),f=b(r.growTowards,this.options.growTowards),n=s.x||0,i=s.y||0,p=o.x||0,a=o.y||0,h=b(r.curveFactor,this.options.curveFactor),d=l&&l.enabled&&l.height||0;if(q(h)||(h=this.autoCurve(n,i,p,a,this.centerOfPoints.x,this.centerOfPoints.y)),d){d=N(d,4*t);let W=p-n,Y=a-i,at=n+(W*=.5),pt=i+(Y*=.5),lt=W,ht=at+(W=Y)*h,ft=pt+(Y=-lt)*h,[tt,et]=w.normalize(ht-p,ft-a);tt*=d,et*=d,p+=tt,a+=et}let c=p-n,M=a-i,T=n+(c*=.5),z=i+(M*=.5),S=c;c=M,M=-S;let[D,$]=w.normalize(c,M),U=1+.25*Math.sqrt(h*h);D*=t*U,$*=t*U;let R=T+c*h,H=z+M*h,[k,A]=w.normalize(R-n,H-i);S=k,k=A,A=-S,k*=t,A*=t;let[j,v]=w.normalize(R-p,H-a);S=j,j=-v,v=S,j*=t,v*=t,f&&(k/=t,A/=t,D/=4,$/=4);let X={d:[["M",n-k,i-A],["Q",R-D,H-$,p-j,a-v],["L",p+j,a+v],["Q",R+D,H+$,n+k,i+A],["Z"]]};if(l&&l.enabled&&X.d){let W=w.markerEndPath([p-j,a-v],[p+j,a+v],[o.x,o.y],l);X.d.splice(2,0,...W)}let V=e.options.from,K=e.options.to,Z=V.lat,_=V.lon,B=K.lat,J=K.lon;return Z&&_&&(e.options.from=`${+Z}, ${+_}`),B&&J&&(e.options.to=`${+B}, ${+J}`),X}}return w.defaultOptions=I(E.defaultOptions,{animation:!0,dataLabels:{enabled:!1},fillOpacity:.5,markerEnd:{enabled:!0,height:"40%",width:"40%",markerType:"arrow"},width:1,maxWidth:25,minWidth:5,lineWidth:void 0,tooltip:{headerFormat:'<span style="font-size: 0.8em">{series.name}</span><br/>',pointFormat:"{point.options.from} → {point.options.to}: <b>{point.options.weight}</b>"}}),nt(w.prototype,{pointClass:m,pointArrayMap:["from","to","weight"],drawPoints:Q.prototype.drawPoints,useMapGeometry:!0}),g.registerSeriesType("flowmap",w),w}),x(u,"masters/modules/flowmap.src.js",[u["Core/Globals.js"]],function(m){return m})})})(ot);var it=ot.exports;const ct=dt(it),gt=mt({__proto__:null,default:ct},[it]);export{gt as f};
