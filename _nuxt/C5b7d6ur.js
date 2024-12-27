import{aK as b}from"./BAjYNYKW.js";function S(n,r){for(var e=0;e<r.length;e++){const s=r[e];if(typeof s!="string"&&!Array.isArray(s)){for(const t in s)if(t!=="default"&&!(t in n)){const o=Object.getOwnPropertyDescriptor(s,t);o&&Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:()=>s[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var h={exports:{}};(function(n){(function(r){n.exports?(r.default=r,n.exports=r):r(typeof Highcharts<"u"?Highcharts:void 0)})(function(r){var e=r?r._modules:{};function s(t,o,p,a){t.hasOwnProperty(o)||(t[o]=a.apply(null,p),typeof CustomEvent=="function"&&r.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:t[o]}})))}s(e,"Series/Lollipop/LollipopPoint.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,o){let{series:{prototype:{pointClass:p}},seriesTypes:{scatter:{prototype:{pointClass:a}},dumbbell:{prototype:{pointClass:i}}}}=t,{extend:c}=o;class f extends p{}return c(f.prototype,{destroy:i.prototype.destroy,pointSetState:a.prototype.setState,setState:i.prototype.setState}),f}),s(e,"Series/Lollipop/LollipopSeries.js",[e["Series/Lollipop/LollipopPoint.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Series/Series.js"],e["Core/Utilities.js"]],function(t,o,p,a){let{seriesTypes:{column:{prototype:i},dumbbell:{prototype:c},scatter:f}}=o,{extend:y,merge:m}=a;class u extends p{drawPoints(){let g=this.points.length,d=0,l;for(super.drawPoints.apply(this,arguments);d<g;)l=this.points[d],this.drawConnector(l),d++}translate(){for(let g of(i.translate.apply(this,arguments),this.points)){let{pointWidth:d,shapeArgs:l}=g;l!=null&&l.x&&(l.x+=d/2,g.plotX=l.x||0)}}}return u.defaultOptions=m(p.defaultOptions,{threshold:0,connectorWidth:1,groupPadding:.2,pointPadding:.1,states:{hover:{lineWidthPlus:0,connectorWidthPlus:1,halo:!1}},lineWidth:0,dataLabels:{align:void 0,verticalAlign:void 0},pointRange:1}),y(u.prototype,{alignDataLabel:i.alignDataLabel,crispCol:i.crispCol,drawConnector:c.drawConnector,drawDataLabels:i.drawDataLabels,getColumnMetrics:i.getColumnMetrics,getConnectorAttribs:c.getConnectorAttribs,pointClass:t}),o.registerSeriesType("lollipop",u),u}),s(e,"masters/modules/lollipop.src.js",[e["Core/Globals.js"]],function(t){return t})})})(h);var C=h.exports;const j=b(C),L=S({__proto__:null,default:j},[C]);export{L as l};
