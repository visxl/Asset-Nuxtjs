import{aK as I}from"./BAjYNYKW.js";function J(n,r){for(var s=0;s<r.length;s++){const i=r[s];if(typeof i!="string"&&!Array.isArray(i)){for(const e in i)if(e!=="default"&&!(e in n)){const o=Object.getOwnPropertyDescriptor(i,e);o&&Object.defineProperty(n,e,o.get?o:{enumerable:!0,get:()=>i[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var z={exports:{}};(function(n){(function(r){n.exports?(r.default=r,n.exports=r):r(typeof Highcharts<"u"?Highcharts:void 0)})(function(r){var s=r?r._modules:{};function i(e,o,A,f){e.hasOwnProperty(o)||(e[o]=f.apply(null,A),typeof CustomEvent=="function"&&r.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:e[o]}})))}i(s,"Series/DotPlot/DotPlotSeriesDefaults.js",[],function(){return{itemPadding:.1,marker:{symbol:"circle",states:{hover:{},select:{}}},slotsPerBar:void 0}}),i(s,"Series/DotPlot/DotPlotSeries.js",[s["Series/DotPlot/DotPlotSeriesDefaults.js"],s["Core/Series/SeriesRegistry.js"],s["Core/Utilities.js"]],function(e,o,A){let{column:f}=o.seriesTypes,{extend:w,isNumber:G,merge:K,pick:L}=A;class g extends f{drawPoints(){var E,M;let j=this.options,k=this.chart.renderer,O=j.marker,S=this.points.reduce((t,p)=>t+Math.abs(p.y||0),0),C=this.points.reduce((t,p)=>{var c;return t+(((c=p.shapeArgs)==null?void 0:c.height)||0)},0),y=j.itemPadding||0,_=((M=(E=this.points[0])==null?void 0:E.shapeArgs)==null?void 0:M.width)||0,l=j.slotsPerBar,x=_;if(!G(l))for(l=1;l<S&&!(S/l<C/x*1.2);)x=_/++l;let d=C*l/S;for(let t of this.points){let p=t.marker||{},c=p.symbol||O.symbol,R=L(p.radius,O.radius),m=c!=="rect"?d:x,b=t.shapeArgs||{},H=(b.x||0)+((b.width||0)-l*m)/2,U=Math.abs(t.y??0),T=b.y||0,q=b.height||0,h,D=H,v=t.negative?T:T+q-d,B=0;t.graphics=h=t.graphics||[];let P=t.pointAttr?t.pointAttr[t.selected?"selected":""]||this.pointAttr[""]:this.pointAttribs(t,t.selected&&"select");if(delete P.r,this.chart.styledMode&&(delete P.stroke,delete P["stroke-width"]),typeof t.y=="number"){t.graphic||(t.graphic=k.g("point").add(this.group));for(let a=0;a<U;a++){let $={x:D+m*y,y:v+d*y,width:m*(1-2*y),height:d*(1-2*y),r:R},u=h[a];u?u.animate($):u=k.symbol(c).attr(w($,P)).add(t.graphic),u.isActive=!0,h[a]=u,D+=m,++B>=l&&(B=0,D=H,v=t.negative?v+d:v-d)}}let N=-1;for(let a of h)++N,a&&(a.isActive?a.isActive=!1:(a.destroy(),h.splice(N,1)))}}}return g.defaultOptions=K(f.defaultOptions,e),w(g.prototype,{markerAttribs:void 0}),o.registerSeriesType("dotplot",g),g}),i(s,"masters/modules/dotplot.src.js",[s["Core/Globals.js"]],function(e){return e})})})(z);var F=z.exports;const Q=I(F),X=J({__proto__:null,default:Q},[F]);export{X as d};
