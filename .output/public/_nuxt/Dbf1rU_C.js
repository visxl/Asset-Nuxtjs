import{aE as Z}from"./DgWlP6BF.js";function _(y,c){for(var a=0;a<c.length;a++){const u=c[a];if(typeof u!="string"&&!Array.isArray(u)){for(const r in u)if(r!=="default"&&!(r in y)){const l=Object.getOwnPropertyDescriptor(u,r);l&&Object.defineProperty(y,r,l.get?l:{enumerable:!0,get:()=>u[r]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}var D={exports:{}};(function(y){(function(c){y.exports?(c.default=c,y.exports=c):c(typeof Highcharts<"u"?Highcharts:void 0)})(function(c){var a=c?c._modules:{};function u(r,l,g,f){r.hasOwnProperty(l)||(r[l]=f.apply(null,g),typeof CustomEvent=="function"&&c.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:l,module:r[l]}})))}u(a,"Series/Variwide/VariwideComposition.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(r,l){let{composed:g}=r,{addEvent:f,pushUnique:P,wrap:S}=l;function V(e){this.variwide&&this.cross&&this.cross.attr("stroke-width",e.point&&e.point.crosshairWidth)}function j(){let e=this;this.variwide&&this.chart.labelCollectors.push(function(){return e.tickPositions.filter(n=>!!e.ticks[n].label).map((n,o)=>{let s=e.ticks[n].label;return s.labelrank=e.zData[o],s})})}function C(e){let n=this.axis,o=n.horiz?"x":"y";n.variwide&&(this[o+"Orig"]=e.pos[o],this.postTranslate(e.pos,o,this.pos))}function A(e,n,o){let s=this.axis,i=e[n]-s.pos;s.horiz||(i=s.len-i),i=s.series[0].postTranslate(o,i),s.horiz||(i=s.len-i),e[n]=s.pos+i}function b(e,n,o,s,i,t,h,d){let p=Array.prototype.slice.call(arguments,1),x=i?"x":"y";this.axis.variwide&&typeof this[x+"Orig"]=="number"&&(p[i?0:1]=this[x+"Orig"]);let v=e.apply(this,p);return this.axis.variwide&&this.axis.categories&&this.postTranslate(v,x,this.pos),v}return{compose:function(e,n){if(P(g,"Variwide")){let o=n.prototype;f(e,"afterDrawCrosshair",V),f(e,"afterRender",j),f(n,"afterGetPosition",C),o.postTranslate=A,S(o,"getLabelPosition",b)}}}}),u(a,"Series/Variwide/VariwidePoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(r,l){let{column:{prototype:{pointClass:g}}}=r.seriesTypes,{isNumber:f}=l;return class extends g{isValid(){return f(this.y)&&f(this.z)}}}),u(a,"Series/Variwide/VariwideSeriesDefaults.js",[],function(){return{pointPadding:0,groupPadding:0}}),u(a,"Series/Variwide/VariwideSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Series/Variwide/VariwideComposition.js"],a["Series/Variwide/VariwidePoint.js"],a["Series/Variwide/VariwideSeriesDefaults.js"],a["Core/Utilities.js"]],function(r,l,g,f,P){let{column:S}=r.seriesTypes,{addEvent:V,crisp:j,extend:C,merge:A,pick:b}=P;class e extends S{processData(o){this.totalZ=0,this.relZ=[],r.seriesTypes.column.prototype.processData.call(this,o),(this.xAxis.reversed?this.zData.slice().reverse():this.zData).forEach(function(s,i){this.relZ[i]=this.totalZ,this.totalZ+=s},this),this.xAxis.categories&&(this.xAxis.variwide=!0,this.xAxis.zData=this.zData)}postTranslate(o,s,i){let t=this.xAxis,h=this.relZ,d=t.reversed?h.length-o:o,p=t.reversed?-1:1,x=t.toPixels(t.reversed?(t.dataMax||0)+t.pointRange:t.dataMin||0),v=t.toPixels(t.reversed?t.dataMin||0:(t.dataMax||0)+t.pointRange),w=Math.abs(v-x),m=this.totalZ,k=this.chart.inverted?v-(this.chart.plotTop-p*t.minPixelPadding):x-this.chart.plotLeft-p*t.minPixelPadding,O=d/h.length*w,M=(d+p)/h.length*w,T=b(h[d],m)/m*w,z=b(h[d+p],m)/m*w;return i&&(i.crosshairWidth=z-T),k+T+(s-(k+O))*(z-T)/(M-O)}translate(){this.crispOption=this.options.crisp,this.options.crisp=!1,super.translate(),this.options.crisp=this.crispOption}correctStackLabels(){let o,s,i,t,h=this.options,d=this.yAxis;for(let p of this.points)t=p.x,s=p.shapeArgs.width,(i=d.stacking.stacks[(this.negStacks&&p.y<(h.startFromThreshold?0:h.threshold)?"-":"")+this.stackKey])&&(o=i[t])&&!p.isNull&&o.setOffset(-(s/2)||0,s||0,void 0,void 0,p.plotX,this.xAxis)}}return e.compose=l.compose,e.defaultOptions=A(S.defaultOptions,f),V(e,"afterColumnTranslate",function(){let n=this.xAxis,o=this.chart.inverted,s=-1;for(let i of this.points){let t,h;++s;let d=i.shapeArgs||{},{x:p=0,width:x=0}=d,{plotX:v=0,tooltipPos:w,z:m=0}=i;n.variwide?(t=this.postTranslate(s,p,i),h=this.postTranslate(s,p+x)):(t=v,h=n.translate(i.x+m,!1,!1,!1,!0)),this.crispOption&&(t=j(t,this.borderWidth),h=j(h,this.borderWidth)),d.x=t,d.width=Math.max(h-t,1),i.plotX=(t+h)/2,w&&(o?w[1]=n.len-d.x-d.width/2:w[0]=d.x+d.width/2)}this.options.stacking&&this.correctStackLabels()},{order:2}),C(e.prototype,{irregularWidths:!0,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],pointClass:g}),r.registerSeriesType("variwide",e),e}),u(a,"masters/modules/variwide.src.js",[a["Core/Globals.js"],a["Series/Variwide/VariwideSeries.js"]],function(r,l){return l.compose(r.Axis,r.Tick),r})})})(D);var E=D.exports;const L=Z(E),W=_({__proto__:null,default:L},[E]);export{W as v};