import{aK as mt}from"./BAjYNYKW.js";function gt(N,V){for(var h=0;h<V.length;h++){const P=V[h];if(typeof P!="string"&&!Array.isArray(P)){for(const c in P)if(c!=="default"&&!(c in N)){const x=Object.getOwnPropertyDescriptor(P,c);x&&Object.defineProperty(N,c,x.get?x:{enumerable:!0,get:()=>P[c]})}}}return Object.freeze(Object.defineProperty(N,Symbol.toStringTag,{value:"Module"}))}var et={exports:{}};(function(N){(function(V){N.exports?(V.default=V,N.exports=V):V(typeof Highcharts<"u"?Highcharts:void 0)})(function(V){var h=V?V._modules:{};function P(c,x,S,b){c.hasOwnProperty(x)||(c[x]=b.apply(null,S),typeof CustomEvent=="function"&&V.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:x,module:c[x]}})))}P(h,"Core/Axis/Color/ColorAxisComposition.js",[h["Core/Color/Color.js"],h["Core/Utilities.js"]],function(c,x){var S;let{parse:b}=c,{addEvent:L,extend:I,merge:y,pick:u,splat:m}=x;return function(n){let p;function g(){let{userOptions:e}=this;this.colorAxis=[],e.colorAxis&&(e.colorAxis=m(e.colorAxis),e.colorAxis.map(t=>new p(this,t)))}function j(e){let t=this.chart.colorAxis||[],s=l=>{let a=e.allItems.indexOf(l);a!==-1&&(this.destroyItem(e.allItems[a]),e.allItems.splice(a,1))},o=[],d,i;for(t.forEach(function(l){(d=l.options)&&d.showInLegend&&(d.dataClasses&&d.visible?o=o.concat(l.getDataClassLegendSymbols()):d.visible&&o.push(l),l.series.forEach(function(a){(!a.options.showInLegend||d.dataClasses)&&(a.options.legendType==="point"?a.points.forEach(function(C){s(C)}):s(a))}))}),i=o.length;i--;)e.allItems.unshift(o[i])}function f(e){e.visible&&e.item.legendColor&&e.item.legendItem.symbol.attr({fill:e.item.legendColor})}function D(e){var t;(t=this.chart.colorAxis)==null||t.forEach(s=>{s.update({},e.redraw)})}function w(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function k(){let e=this.axisTypes;e?e.indexOf("colorAxis")===-1&&e.push("colorAxis"):this.axisTypes=["colorAxis"]}function T(e){let t=this,s=e?"show":"hide";t.visible=t.options.visible=!!e,["graphic","dataLabel"].forEach(function(o){t[o]&&t[o][s]()}),this.series.buildKDTree()}function v(){let e=this,t=this.getPointsCollection(),s=this.options.nullColor,o=this.colorAxis,d=this.colorKey;t.forEach(i=>{let l=i.getNestedProperty(d),a=i.options.color||(i.isNull||i.value===null?s:o&&l!==void 0?o.toColor(l,i):i.color||e.color);a&&i.color!==a&&(i.color=a,e.options.legendType==="point"&&i.legendItem&&i.legendItem.label&&e.chart.legend.colorizeItem(i,i.visible))})}function U(){this.elem.attr("fill",b(this.start).tweenTo(b(this.end),this.pos),void 0,!0)}function r(){this.elem.attr("stroke",b(this.start).tweenTo(b(this.end),this.pos),void 0,!0)}n.compose=function(e,t,s,o,d){let i=t.prototype,l=s.prototype,a=d.prototype;i.collectionsWithUpdate.includes("colorAxis")||(p=e,i.collectionsWithUpdate.push("colorAxis"),i.collectionsWithInit.colorAxis=[i.addColorAxis],L(t,"afterGetAxes",g),function(C){let M=C.prototype.createAxis;C.prototype.createAxis=function(A,E){if(A!=="colorAxis")return M.apply(this,arguments);let z=new p(this,y(E.axis,{index:this[A].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach(O=>{O.series=[]}),this.series.forEach(O=>{O.bindAxes(),O.isDirtyData=!0}),u(E.redraw,!0)&&this.redraw(E.animation),z}}(t),l.fillSetter=U,l.strokeSetter=r,L(o,"afterGetAllItems",j),L(o,"afterColorizeItem",f),L(o,"afterUpdate",D),I(a,{optionalAxis:"colorAxis",translateColors:v}),I(a.pointClass.prototype,{setVisible:T}),L(d,"afterTranslate",w,{order:1}),L(d,"bindAxes",k))},n.pointSetVisible=T}(S||(S={})),S}),P(h,"Core/Axis/Color/ColorAxisDefaults.js",[],function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineColor:"#ffffff",gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{distance:8,overflow:"justify",rotation:0},minColor:"#e6e9ff",maxColor:"#0022ff",tickLength:5,showInLegend:!0}}),P(h,"Core/Axis/Color/ColorAxisLike.js",[h["Core/Color/Color.js"],h["Core/Utilities.js"]],function(c,x){var S,b;let{parse:L}=c,{merge:I}=x;return(b=S||(S={})).initDataClasses=function(y){let u=this.chart,m=this.legendItem=this.legendItem||{},n=this.options,p=y.dataClasses||[],g,j,f=u.options.chart.colorCount,D=0,w;this.dataClasses=j=[],m.labels=[];for(let k=0,T=p.length;k<T;++k)g=I(g=p[k]),j.push(g),(u.styledMode||!g.color)&&(n.dataClassColor==="category"?(u.styledMode||(f=(w=u.options.colors||[]).length,g.color=w[D]),g.colorIndex=D,++D===f&&(D=0)):g.color=L(n.minColor).tweenTo(L(n.maxColor),T<2?.5:k/(T-1)))},b.initStops=function(){let y=this.options,u=this.stops=y.stops||[[0,y.minColor||""],[1,y.maxColor||""]];for(let m=0,n=u.length;m<n;++m)u[m].color=L(u[m][1])},b.normalizedValue=function(y){let u=this.max||0,m=this.min||0;return this.logarithmic&&(y=this.logarithmic.log2lin(y)),1-(u-y)/(u-m||1)},b.toColor=function(y,u){let m,n,p,g,j,f,D=this.dataClasses,w=this.stops;if(D){for(f=D.length;f--;)if(n=(j=D[f]).from,p=j.to,(n===void 0||y>=n)&&(p===void 0||y<=p)){g=j.color,u&&(u.dataClass=f,u.colorIndex=j.colorIndex);break}}else{for(m=this.normalizedValue(y),f=w.length;f--&&!(m>w[f][0]););n=w[f]||w[f+1],m=1-((p=w[f+1]||n)[0]-m)/(p[0]-n[0]||1),g=n.color.tweenTo(p.color,m)}return g},S}),P(h,"Core/Axis/Color/ColorAxis.js",[h["Core/Axis/Axis.js"],h["Core/Axis/Color/ColorAxisComposition.js"],h["Core/Axis/Color/ColorAxisDefaults.js"],h["Core/Axis/Color/ColorAxisLike.js"],h["Core/Defaults.js"],h["Core/Legend/LegendSymbol.js"],h["Core/Series/SeriesRegistry.js"],h["Core/Utilities.js"]],function(c,x,S,b,L,I,y,u){let{defaultOptions:m}=L,{series:n}=y,{defined:p,extend:g,fireEvent:j,isArray:f,isNumber:D,merge:w,pick:k,relativeLength:T}=u;m.colorAxis=w(m.xAxis,S);class v extends c{static compose(r,e,t,s){x.compose(v,r,e,t,s)}constructor(r,e){super(r,e),this.coll="colorAxis",this.visible=!0,this.init(r,e)}init(r,e){let t=r.options.legend||{},s=e.layout?e.layout!=="vertical":t.layout!=="vertical";this.side=e.side||s?2:1,this.reversed=e.reversed||!s,this.opposite=!s,super.init(r,e,"colorAxis"),this.userOptions=e,f(r.userOptions.colorAxis)&&(r.userOptions.colorAxis[this.index]=e),e.dataClasses&&this.initDataClasses(e),this.initStops(),this.horiz=s,this.zoomEnabled=!1}hasData(){return!!(this.tickPositions||[]).length}setTickPositions(){if(!this.dataClasses)return super.setTickPositions()}setOptions(r){let e=w(m.colorAxis,r,{showEmpty:!1,title:null,visible:this.chart.options.legend.enabled&&r.visible!==!1});super.setOptions(e),this.options.crosshair=this.options.marker}setAxisSize(){var o;let r=this.chart,e=(o=this.legendItem)==null?void 0:o.symbol,{width:t,height:s}=this.getSize();e&&(this.left=+e.attr("x"),this.top=+e.attr("y"),this.width=t=+e.attr("width"),this.height=s=+e.attr("height"),this.right=r.chartWidth-this.left-t,this.bottom=r.chartHeight-this.top-s,this.pos=this.horiz?this.left:this.top),this.len=(this.horiz?t:s)||v.defaultLegendLength}getOffset(){var t;let r=(t=this.legendItem)==null?void 0:t.group,e=this.chart.axisOffset[this.side];if(r){this.axisParent=r,super.getOffset();let s=this.chart.legend;s.allItems.forEach(function(o){o instanceof v&&o.drawLegendSymbol(s,o)}),s.render(),this.chart.getMargins(!0),this.chart.series.some(o=>o.isDrilling)||(this.isDirty=!0),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=e}}setLegendColor(){let r=this.horiz,e=this.reversed,t=e?1:0,s=e?0:1,o=r?[t,0,s,0]:[0,s,0,t];this.legendColor={linearGradient:{x1:o[0],y1:o[1],x2:o[2],y2:o[3]},stops:this.stops}}drawLegendSymbol(r,e){let t=e.legendItem||{},s=r.padding,o=r.options,d=this.options.labels,i=k(o.itemDistance,10),l=this.horiz,{width:a,height:C}=this.getSize(),M=k(o.labelPadding,l?16:30);this.setLegendColor(),t.symbol||(t.symbol=this.chart.renderer.symbol("roundedRect").attr({r:o.symbolRadius??3,zIndex:1}).add(t.group)),t.symbol.attr({x:0,y:(r.baseline||0)-11,width:a,height:C}),t.labelWidth=a+s+(l?i:k(d.x,d.distance)+(this.maxLabelLength||0)),t.labelHeight=C+s+(l?M:0)}setState(r){this.series.forEach(function(e){e.setState(r)})}setVisible(){}getSeriesExtremes(){let r=this.series,e,t,s,o,d,i,l=r.length,a,C;for(this.dataMin=1/0,this.dataMax=-1/0;l--;){if(t=(i=r[l]).colorKey=k(i.options.colorKey,i.colorKey,i.pointValKey,i.zoneAxis,"y"),o=i.pointArrayMap,d=i[t+"Min"]&&i[t+"Max"],i[t+"Data"])e=i[t+"Data"];else if(o){if(e=[],s=o.indexOf(t),a=i.yData,s>=0&&a)for(C=0;C<a.length;C++)e.push(k(a[C][s],a[C]))}else e=i.yData;if(d)i.minColorValue=i[t+"Min"],i.maxColorValue=i[t+"Max"];else{let M=n.prototype.getExtremes.call(i,e);i.minColorValue=M.dataMin,i.maxColorValue=M.dataMax}p(i.minColorValue)&&p(i.maxColorValue)&&(this.dataMin=Math.min(this.dataMin,i.minColorValue),this.dataMax=Math.max(this.dataMax,i.maxColorValue)),d||n.prototype.applyExtremes.call(i)}}drawCrosshair(r,e){let t,s=this.legendItem||{},o=e&&e.plotX,d=e&&e.plotY,i=this.pos,l=this.len;e&&((t=this.toPixels(e.getNestedProperty(e.series.colorKey)))<i?t=i-2:t>i+l&&(t=i+l+2),e.plotX=t,e.plotY=this.len-t,super.drawCrosshair(r,e),e.plotX=o,e.plotY=d,this.cross&&!this.cross.addedToColorAxis&&s.group&&(this.cross.addClass("highcharts-coloraxis-marker").add(s.group),this.cross.addedToColorAxis=!0,this.chart.styledMode||typeof this.crosshair!="object"||this.cross.attr({fill:this.crosshair.color})))}getPlotLinePath(r){let e=this.left,t=r.translatedValue,s=this.top;return D(t)?this.horiz?[["M",t-4,s-6],["L",t+4,s-6],["L",t,s],["Z"]]:[["M",e,t],["L",e-6,t+6],["L",e-6,t-6],["Z"]]:super.getPlotLinePath(r)}update(r,e){let t=this.chart.legend;this.series.forEach(s=>{s.isDirtyData=!0}),(r.dataClasses&&t.allItems||this.dataClasses)&&this.destroyItems(),super.update(r,e),this.legendItem&&this.legendItem.label&&(this.setLegendColor(),t.colorizeItem(this,!0))}destroyItems(){let r=this.chart,e=this.legendItem||{};if(e.label)r.legend.destroyItem(this);else if(e.labels)for(let t of e.labels)r.legend.destroyItem(t);r.isDirtyLegend=!0}destroy(){this.chart.isDirtyLegend=!0,this.destroyItems(),super.destroy(...[].slice.call(arguments))}remove(r){this.destroyItems(),super.remove(r)}getDataClassLegendSymbols(){let r,e=this,t=e.chart,s=e.legendItem&&e.legendItem.labels||[],o=t.options.legend,d=k(o.valueDecimals,-1),i=k(o.valueSuffix,""),l=a=>e.series.reduce((C,M)=>(C.push(...M.points.filter(A=>A.dataClass===a)),C),[]);return s.length||e.dataClasses.forEach((a,C)=>{let M=a.from,A=a.to,{numberFormatter:E}=t,z=!0;r="",M===void 0?r="< ":A===void 0&&(r="> "),M!==void 0&&(r+=E(M,d)+i),M!==void 0&&A!==void 0&&(r+=" - "),A!==void 0&&(r+=E(A,d)+i),s.push(g({chart:t,name:r,options:{},drawLegendSymbol:I.rectangle,visible:!0,isDataClass:!0,setState:O=>{for(let R of l(C))R.setState(O)},setVisible:function(){this.visible=z=e.visible=!z;let O=[];for(let R of l(C))R.setVisible(z),R.hiddenInDataClass=!z,O.indexOf(R.series)===-1&&O.push(R.series);t.legend.colorizeItem(this,z),O.forEach(R=>{j(R,"afterDataClassLegendClick")})}},a))}),s}getSize(){let{chart:r,horiz:e}=this,{height:t,width:s}=this.options,{legend:o}=r.options;return{width:k(p(s)?T(s,r.chartWidth):void 0,o==null?void 0:o.symbolWidth,e?v.defaultLegendLength:12),height:k(p(t)?T(t,r.chartHeight):void 0,o==null?void 0:o.symbolHeight,e?12:v.defaultLegendLength)}}}return v.defaultLegendLength=200,v.keepProps=["legendItem"],g(v.prototype,b),Array.prototype.push.apply(c.keepProps,v.keepProps),v}),P(h,"masters/modules/coloraxis.src.js",[h["Core/Globals.js"],h["Core/Axis/Color/ColorAxis.js"]],function(c,x){return c.ColorAxis=c.ColorAxis||x,c.ColorAxis.compose(c.Chart,c.Fx,c.Legend,c.Series),c}),P(h,"Series/ColorMapComposition.js",[h["Core/Series/SeriesRegistry.js"],h["Core/Renderer/SVG/SVGElement.js"],h["Core/Utilities.js"]],function(c,x,S){var b;let{column:{prototype:L}}=c.seriesTypes,{addEvent:I,defined:y}=S;return function(u){function m(n){let p=this.series,g=p.chart.renderer;this.moveToTopOnHover&&this.graphic&&(p.stateMarkerGraphic||(p.stateMarkerGraphic=new x(g,"use").css({pointerEvents:"none"}).add(this.graphic.parentGroup)),(n==null?void 0:n.state)==="hover"?(this.graphic.attr({id:this.id}),p.stateMarkerGraphic.attr({href:`${g.url}#${this.id}`,visibility:"visible"})):p.stateMarkerGraphic.attr({href:""}))}u.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return this.value!==null&&this.value!==1/0&&this.value!==-1/0&&(this.value===void 0||!isNaN(this.value))}},u.seriesMembers={colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(n){let p={};return y(n.color)&&(!n.state||n.state==="normal")&&(p[this.colorProp||"fill"]=n.color),p},pointAttribs:L.pointAttribs},u.compose=function(n){return I(n.prototype.pointClass,"afterSetState",m),n}}(b||(b={})),b}),P(h,"Series/Heatmap/HeatmapPoint.js",[h["Core/Series/SeriesRegistry.js"],h["Core/Utilities.js"]],function(c,x){let{scatter:{prototype:{pointClass:S}}}=c.seriesTypes,{clamp:b,defined:L,extend:I,pick:y}=x;class u extends S{applyOptions(n,p){return(this.isNull||this.value===null)&&delete this.color,super.applyOptions(n,p),this.formatPrefix=this.isNull||this.value===null?"null":"point",this}getCellAttributes(){let n=this.series,p=n.options,g=(p.colsize||1)/2,j=(p.rowsize||1)/2,f=n.xAxis,D=n.yAxis,w=this.options.marker||n.options.marker,k=n.pointPlacementToXValue(),T=y(this.pointPadding,p.pointPadding,0),v={x1:b(Math.round(f.len-f.translate(this.x-g,!1,!0,!1,!0,-k)),-f.len,2*f.len),x2:b(Math.round(f.len-f.translate(this.x+g,!1,!0,!1,!0,-k)),-f.len,2*f.len),y1:b(Math.round(D.translate(this.y-j,!1,!0,!1,!0)),-D.len,2*D.len),y2:b(Math.round(D.translate(this.y+j,!1,!0,!1,!0)),-D.len,2*D.len)};for(let U of[["width","x"],["height","y"]]){let r=U[0],e=U[1],t=e+"1",s=e+"2",o=Math.abs(v[t]-v[s]),d=w&&w.lineWidth||0,i=Math.abs(v[t]+v[s])/2,l=w&&w[r];if(L(l)&&l<o){let a=l/2+d/2;v[t]=i-a,v[s]=i+a}T&&((e==="x"&&f.reversed||e==="y"&&!D.reversed)&&(t=s,s=e+"1"),v[t]+=T,v[s]-=T)}return v}haloPath(n){if(!n)return[];let{x:p=0,y:g=0,width:j=0,height:f=0}=this.shapeArgs||{};return[["M",p-n,g-n],["L",p-n,g+f+n],["L",p+j+n,g+f+n],["L",p+j+n,g-n],["Z"]]}isValid(){return this.value!==1/0&&this.value!==-1/0}}return I(u.prototype,{dataLabelOnNull:!0,moveToTopOnHover:!0,ttBelow:!1}),u}),P(h,"Series/Heatmap/HeatmapSeriesDefaults.js",[h["Core/Utilities.js"]],function(c){let{isNumber:x}=c;return{animation:!1,borderRadius:0,borderWidth:0,interpolation:!1,nullColor:"#f7f7f7",dataLabels:{formatter:function(){let{numberFormatter:S}=this.series.chart,{value:b}=this.point;return x(b)?S(b,-1):""},inside:!0,verticalAlign:"middle",crop:!1,overflow:"allow",padding:0},marker:{symbol:"rect",radius:0,lineColor:void 0,states:{hover:{lineWidthPlus:0},select:{}}},clip:!0,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{hover:{halo:!1,brightness:.2}},legendSymbol:"rectangle"}}),P(h,"Series/InterpolationUtilities.js",[h["Core/Globals.js"],h["Core/Utilities.js"]],function(c,x){let{doc:S}=c,{defined:b,pick:L}=x;return{colorFromPoint:function(I,y){let u=y.series.colorAxis;if(u){let m=u.toColor(I||0,y).split(")")[0].split("(")[1].split(",").map(n=>L(parseFloat(n),parseInt(n,10)));return m[3]=255*L(m[3],1),b(I)&&y.visible||(m[3]=0),m}return[0,0,0,0]},getContext:function(I){let{canvas:y,context:u}=I;return y&&u?(u.clearRect(0,0,y.width,y.height),u):(I.canvas=S.createElement("canvas"),I.context=I.canvas.getContext("2d",{willReadFrequently:!0})||void 0,I.context)}}}),P(h,"Series/Heatmap/HeatmapSeries.js",[h["Core/Color/Color.js"],h["Series/ColorMapComposition.js"],h["Series/Heatmap/HeatmapPoint.js"],h["Series/Heatmap/HeatmapSeriesDefaults.js"],h["Core/Series/SeriesRegistry.js"],h["Core/Renderer/SVG/SVGRenderer.js"],h["Core/Utilities.js"],h["Series/InterpolationUtilities.js"]],function(c,x,S,b,L,I,y,u){let{series:m,seriesTypes:{column:n,scatter:p}}=L,{prototype:{symbols:g}}=I,{addEvent:j,extend:f,fireEvent:D,isNumber:w,merge:k,pick:T}=y,{colorFromPoint:v,getContext:U}=u;class r extends p{constructor(){super(...arguments),this.valueMax=NaN,this.valueMin=NaN,this.isDirtyCanvas=!0}drawPoints(){let t=this,s=t.options,o=s.interpolation,d=s.marker||{};if(o){let{image:i,chart:l,xAxis:a,yAxis:C}=t,{reversed:M=!1,len:A}=a,{reversed:E=!1,len:z}=C,O={width:A,height:z};if(!i||t.isDirtyData||t.isDirtyCanvas){let R=U(t),{canvas:W,options:{colsize:it=1,rowsize:ot=1},points:rt,points:{length:at}}=t,lt=l.colorAxis&&l.colorAxis[0];if(W&&R&&lt){let{min:_,max:nt}=a.getExtremes(),{min:B,max:ht}=C.getExtremes(),J=nt-_,Q=ht-B,F=Math.round(J/it/8*8),X=Math.round(Q/ot/8*8),[dt,pt]=[[F,F/J,M,"ceil"],[X,X/Q,!E,"floor"]].map(([H,G,Z,K])=>Z?q=>Math[K](H-G*q):q=>Math[K](G*q)),Y=W.width=F+1,$=Y*(W.height=X+1),ct=(at-1)/$,tt=new Uint8ClampedArray(4*$),ut=(H,G)=>4*Math.ceil(Y*pt(G-B)+dt(H-_));t.buildKDTree();for(let H=0;H<$;H++){let G=rt[Math.ceil(ct*H)],{x:Z,y:K}=G;tt.set(v(G.value,G),ut(Z,K))}R.putImageData(new ImageData(tt,Y),0,0),i?i.attr({...O,href:W.toDataURL("image/png",1)}):(t.directTouch=!1,t.image=l.renderer.image(W.toDataURL("image/png",1)).attr(O).add(t.group))}t.isDirtyCanvas=!1}else(i.width!==A||i.height!==z)&&i.attr(O)}else(d.enabled||t._hasPointMarkers)&&(m.prototype.drawPoints.call(t),t.points.forEach(i=>{i.graphic&&(i.graphic[t.chart.styledMode?"css":"animate"](t.colorAttribs(i)),i.value===null&&i.graphic.addClass("highcharts-null-point"))}))}getExtremes(){let{dataMin:t,dataMax:s}=m.prototype.getExtremes.call(this,this.valueData);return w(t)&&(this.valueMin=t),w(s)&&(this.valueMax=s),m.prototype.getExtremes.call(this)}getValidPoints(t,s){return m.prototype.getValidPoints.call(this,t,s,!0)}hasData(){return!!this.xData}init(){super.init.apply(this,arguments);let t=this.options;t.pointRange=T(t.pointRange,t.colsize||1),this.yAxis.axisPointRange=t.rowsize||1,g.ellipse=g.circle,t.marker&&w(t.borderRadius)&&(t.marker.r=t.borderRadius)}markerAttribs(t,s){let o=t.shapeArgs||{};if(t.hasImage)return{x:t.plotX,y:t.plotY};if(s&&s!=="normal"){let d=t.options.marker||{},i=this.options.marker||{},l=i.states&&i.states[s]||{},a=d.states&&d.states[s]||{},C=(a.width||l.width||o.width||0)+(a.widthPlus||l.widthPlus||0),M=(a.height||l.height||o.height||0)+(a.heightPlus||l.heightPlus||0);return{x:(o.x||0)+((o.width||0)-C)/2,y:(o.y||0)+((o.height||0)-M)/2,width:C,height:M}}return o}pointAttribs(t,s){let o=m.prototype.pointAttribs.call(this,t,s),d=this.options||{},i=this.chart.options.plotOptions||{},l=i.series||{},a=i.heatmap||{},C=t&&t.options.borderColor||d.borderColor||a.borderColor||l.borderColor,M=t&&t.options.borderWidth||d.borderWidth||a.borderWidth||l.borderWidth||o["stroke-width"];if(o.stroke=t&&t.marker&&t.marker.lineColor||d.marker&&d.marker.lineColor||C||this.color,o["stroke-width"]=M,s&&s!=="normal"){let A=k(d.states&&d.states[s],d.marker&&d.marker.states&&d.marker.states[s],t&&t.options.states&&t.options.states[s]||{});o.fill=A.color||c.parse(o.fill).brighten(A.brightness||0).get(),o.stroke=A.lineColor||o.stroke}return o}translate(){let{borderRadius:t,marker:s}=this.options,o=s&&s.symbol||"rect",d=g[o]?o:"rect",i=["circle","square"].indexOf(d)!==-1;if(!this.processedXData){let{xData:l,yData:a}=this.getProcessedData();this.processedXData=l,this.processedYData=a}for(let l of(this.generatePoints(),this.points)){let a=l.getCellAttributes(),C=Math.min(a.x1,a.x2),M=Math.min(a.y1,a.y2),A=Math.max(Math.abs(a.x2-a.x1),0),E=Math.max(Math.abs(a.y2-a.y1),0);if(l.hasImage=(l.marker&&l.marker.symbol||o||"").indexOf("url")===0,i){let z=Math.abs(A-E);C=Math.min(a.x1,a.x2)+(A<E?0:z/2),M=Math.min(a.y1,a.y2)+(A<E?z/2:0),A=E=Math.min(A,E)}l.hasImage&&(l.marker={width:A,height:E}),l.plotX=l.clientX=(a.x1+a.x2)/2,l.plotY=(a.y1+a.y2)/2,l.shapeType="path",l.shapeArgs=k(!0,{x:C,y:M,width:A,height:E},{d:g[d](C,M,A,E,{r:w(t)?t:0})})}D(this,"afterTranslate")}}return r.defaultOptions=k(p.defaultOptions,b),j(r,"afterDataClassLegendClick",function(){this.isDirtyCanvas=!0,this.drawPoints()}),f(r.prototype,{axisTypes:x.seriesMembers.axisTypes,colorKey:x.seriesMembers.colorKey,directTouch:!0,getExtremesFromAll:!0,parallelArrays:x.seriesMembers.parallelArrays,pointArrayMap:["y","value"],pointClass:S,specialGroup:"group",trackerGroups:x.seriesMembers.trackerGroups,alignDataLabel:n.prototype.alignDataLabel,colorAttribs:x.seriesMembers.colorAttribs,getSymbol:m.prototype.getSymbol}),x.compose(r),L.registerSeriesType("heatmap",r),r}),P(h,"masters/modules/heatmap.src.js",[h["Core/Globals.js"]],function(c){return c})})})(et);var st=et.exports;const ft=mt(st),yt=gt({__proto__:null,default:ft},[st]);export{yt as h};
