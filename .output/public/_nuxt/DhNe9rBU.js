import{aE as K}from"./DgWlP6BF.js";function Q(G,A){for(var l=0;l<A.length;l++){const C=A[l];if(typeof C!="string"&&!Array.isArray(C)){for(const d in C)if(d!=="default"&&!(d in G)){const g=Object.getOwnPropertyDescriptor(C,d);g&&Object.defineProperty(G,d,g.get?g:{enumerable:!0,get:()=>C[d]})}}}return Object.freeze(Object.defineProperty(G,Symbol.toStringTag,{value:"Module"}))}var q={exports:{}};(function(G){(function(A){G.exports?(A.default=A,G.exports=A):A(typeof Highcharts<"u"?Highcharts:void 0)})(function(A){var l=A?A._modules:{};function C(d,g,p,u){d.hasOwnProperty(g)||(d[g]=u.apply(null,p),typeof CustomEvent=="function"&&A.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,module:d[g]}})))}C(l,"Extensions/PatternFill.js",[l["Core/Animation/AnimationUtilities.js"],l["Core/Defaults.js"],l["Core/Utilities.js"]],function(d,g,p){let{animObject:u}=d,{getOptions:x}=g,{addEvent:f,defined:b,erase:k,extend:_,merge:y,pick:m,removeEvent:M,wrap:v}=p,E=function(){let e=[],t=x().colors,i=0;for(let a of["M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5","M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5","M 2 0 L 2 5 M 4 0 L 4 5","M 0 2 L 5 2 M 0 4 L 5 4","M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5"])e.push({path:a,color:t[i++],width:5,height:5,patternTransform:"scale(1.4 1.4)"});for(let a of(i=5,["M 0 0 L 5 10 L 10 0","M 3 3 L 8 3 L 8 8 L 3 8 Z","M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0","M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11","M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"]))e.push({path:a,color:t[i],width:10,height:10}),i+=5;return e}();function S(e,t){let i=JSON.stringify(e),a=i.length||0,s=0,r=0,o;if(t){o=Math.max(Math.floor(a/500),1);for(let n=0;n<a;n+=o)s+=i.charCodeAt(n);s&=s}for(;r<a;++r)s=(s<<5)-s+i.charCodeAt(r),s&=s;return s.toString(16).replace("-","1")}function j(){if(this.renderer&&(this.renderer.defIds||[]).filter(e=>e&&e.indexOf&&e.indexOf("highcharts-pattern-")===0).length){for(let e of this.series)if(e.visible)for(let t of e.points){let i=t.options&&t.options.color;i&&i.pattern&&(i.pattern._width="defer",i.pattern._height="defer")}this.redraw(!1)}}function D(){let e={},t=this.renderer,i=(t.defIds||[]).filter(a=>a.indexOf&&a.indexOf("highcharts-pattern-")===0);if(i.length)for(let a of([].forEach.call(this.renderTo.querySelectorAll('[color^="url("], [fill^="url("], [stroke^="url("]'),s=>{let r=s.getAttribute("fill")||s.getAttribute("color")||s.getAttribute("stroke");r&&(e[r.replace(t.url,"").replace("url(#","").replace(")","")]=!0)}),i))!e[a]&&(k(t.defIds,a),t.patternElements[a]&&(t.patternElements[a].destroy(),delete t.patternElements[a]))}function $(){let e=this.options.color;e&&e.pattern&&(typeof e.pattern.path=="string"&&(e.pattern.path={d:e.pattern.path}),this.color=this.options.color=y(this.series.options.color,e))}function W(e){let t=e.args[0],i=e.args[1],a=e.args[2],s=this.chartIndex||0,r=t.pattern,o="#333333";if(t.patternIndex!==void 0&&E&&(r=E[t.patternIndex]),!r)return!0;if(r.image||typeof r.path=="string"||r.path&&r.path.d){let n=a.parentNode&&a.parentNode.getAttribute("class");n=n&&n.indexOf("highcharts-legend")>-1,(r._width==="defer"||r._height==="defer")&&P.call({graphic:{element:a}},r),(n||!r.id)&&((r=y({},r)).id="highcharts-pattern-"+s+"-"+S(r)+S(r,!0)),this.addPattern(r,!this.forExport&&m(r.animation,this.globalAnimation,{duration:100})),o=`url(${this.url}#${r.id+(this.forExport?"-export":"")})`}else o=r.color||o;return a.setAttribute(i,o),t.toString=function(){return o},!1}function F(){let e=this.chart.isResizing;if(this.isDirtyData||e||!this.chart.hasRendered)for(let t of this.points){let i=t.options&&t.options.color;i&&i.pattern&&(e&&!(t.shapeArgs&&t.shapeArgs.width&&t.shapeArgs.height)?(i.pattern._width="defer",i.pattern._height="defer"):t.calculatePatternDimensions(i.pattern))}}function P(e){if(e.width&&e.height)return;let t=this.graphic&&(this.graphic.getBBox&&this.graphic.getBBox(!0)||this.graphic.element&&this.graphic.element.getBBox())||{},i=this.shapeArgs;if(i&&(t.width=i.width||t.width,t.height=i.height||t.height,t.x=i.x||t.x,t.y=i.y||t.y),e.image){if(!t.width||!t.height){e._width="defer",e._height="defer";let a=this.series.chart.mapView&&this.series.chart.mapView.getSVGTransform().scaleY;b(a)&&a<0&&(e._inverted=!0);return}e.aspectRatio&&(t.aspectRatio=t.width/t.height,e.aspectRatio>t.aspectRatio?t.aspectWidth=t.height*e.aspectRatio:t.aspectHeight=t.width/e.aspectRatio),e._width=e.width||Math.ceil(t.aspectWidth||t.width),e._height=e.height||Math.ceil(t.aspectHeight||t.height)}e.width||(e._x=e.x||0,e._x+=t.x-Math.round(t.aspectWidth?Math.abs(t.aspectWidth-t.width)/2:0)),e.height||(e._y=e.y||0,e._y+=t.y-Math.round(t.aspectHeight?Math.abs(t.aspectHeight-t.height)/2:0))}function H(e,t){let i=m(t,!0),a=u(i),s=e.color||"#333333",r=e.height||(typeof e._height=="number"?e._height:0)||32,o=e.width||(typeof e._width=="number"?e._width:0)||32,n,h=e.id,c;if(!h&&(this.idCounter=this.idCounter||0,h="highcharts-pattern-"+this.idCounter+"-"+(this.chartIndex||0),++this.idCounter),this.forExport&&(h+="-export"),this.defIds=this.defIds||[],this.defIds.indexOf(h)>-1)return;this.defIds.push(h);let B={id:h,patternUnits:"userSpaceOnUse",patternContentUnits:e.patternContentUnits||"userSpaceOnUse",width:o,height:r,x:e._x||e.x||0,y:e._y||e.y||0};e._inverted&&(B.patternTransform="scale(1, -1)",e.patternTransform&&(e.patternTransform+=" scale(1, -1)")),e.patternTransform&&(B.patternTransform=e.patternTransform);let w=this.createElement("pattern").attr(B).add(this.defs);if(w.id=h,e.path){if(c=p.isObject(e.path)?e.path:{d:e.path},e.backgroundColor){let L;L=e.backgroundColor,this.rect(0,0,o,r).attr({fill:L}).add(w)}n={d:c.d},this.styledMode||(n.stroke=c.stroke||s,n["stroke-width"]=m(c.strokeWidth,2),n.fill=c.fill||"none"),c.transform&&(n.transform=c.transform),this.createElement("path").attr(n).add(w),w.color=s}else e.image&&(i?this.image(e.image,0,0,o,r,function(){this.animate({opacity:m(e.opacity,1)},a),M(this.element,"load")}).attr({opacity:0}).add(w):this.image(e.image,0,0,o,r).add(w));return e.image&&i||e.opacity===void 0||[].forEach.call(w.element.childNodes,L=>{L.setAttribute("opacity",e.opacity)}),this.patternElements=this.patternElements||{},this.patternElements[h]=w,w}function I(e){let t=this.options.color;t&&t.pattern&&!t.pattern.color?(delete this.options.color,e.apply(this,[].slice.call(arguments,1)),t.pattern.color=this.color,this.color=this.options.color=t):e.apply(this,[].slice.call(arguments,1))}function T(){var i,a;if(!((i=this.chart)!=null&&i.mapView))return;let e=this.chart.renderer,t=e.patternElements;(a=e.defIds)!=null&&a.length&&t&&this.points.filter(function(s){var r,o,n,h;return!!s.graphic&&(s.graphic.element.hasAttribute("fill")||s.graphic.element.hasAttribute("color")||s.graphic.element.hasAttribute("stroke"))&&!((o=(r=s.options.color)==null?void 0:r.pattern)!=null&&o.image)&&!!((n=s.group)!=null&&n.scaleX)&&!!((h=s.group)!=null&&h.scaleY)}).map(function(s){var r,o,n,h,c;return{id:(((r=s.graphic)==null?void 0:r.element.getAttribute("fill"))||((o=s.graphic)==null?void 0:o.element.getAttribute("color"))||((n=s.graphic)==null?void 0:n.element.getAttribute("stroke"))||"").replace(e.url,"").replace("url(#","").replace(")",""),x:((h=s.group)==null?void 0:h.scaleX)||1,y:((c=s.group)==null?void 0:c.scaleY)||1}}).filter(function(s,r,o){return s.id!==""&&s.id.indexOf("highcharts-pattern-")!==-1&&!o.some(function(n,h){return n.id===s.id&&h<r})}).forEach(function(s){let r=s.id;t[r].scaleX=1/s.x,t[r].scaleY=1/s.y,t[r].updateTransform("patternTransform")})}return{compose:function(e,t,i){let a=t.prototype.pointClass,s=a.prototype;s.calculatePatternDimensions||(f(e,"endResize",j),f(e,"redraw",D),_(s,{calculatePatternDimensions:P}),f(a,"afterInit",$),f(t,"render",F),v(t.prototype,"getColor",I),f(t,"afterRender",T),f(t,"mapZoomComplete",T),_(i.prototype,{addPattern:H}),f(i,"complexColor",W))},patterns:E}}),C(l,"Series/Pictorial/PictorialUtilities.js",[l["Core/Utilities.js"]],function(d){let{defined:g}=d;return{rescalePatternFill:function(p,u,x,f,b=1){let k=p&&p.attr("fill"),_=k&&k.match(/url\(([^)]+)\)/);if(_){let y=document.querySelector(`${_[1]} path`);if(y){let m=y.getBBox();if(m.width===0){let D=y.parentElement;p.renderer.box.appendChild(y),m=y.getBBox(),D.appendChild(y)}let M=1/(m.width+b),v=u/f/m.height,E=m.width/m.height,S=x/u,j=-m.width/2;E<S&&(M=M*E/S),y.setAttribute("stroke-width",b/(x*M)),y.setAttribute("transform",`translate(0.5, 0)scale(${M} ${v}) translate(${j+b*M/2}, ${-m.y})`)}}},invertShadowGroup:function(p,u){let x=u.chart.inverted;x&&p.attr({rotation:x?90:0,scaleX:x?-1:1})},getStackMetrics:function(p,u){let x=p.len,f=0;return u&&g(u.max)&&(f=p.toPixels(u.max,!0),x=p.len-f),{height:x,y:f}}}}),C(l,"Series/Pictorial/PictorialPoint.js",[l["Core/Series/SeriesRegistry.js"],l["Series/Pictorial/PictorialUtilities.js"]],function(d,g){let p=d.seriesTypes.column.prototype.pointClass,{rescalePatternFill:u,getStackMetrics:x}=g;return class extends p{setState(){super.setState.apply(this,arguments);let f=this.series,b=f.options.paths;if(this.graphic&&this.shapeArgs&&b){let k=b[this.index%b.length];u(this.graphic,x(f.yAxis,k).height,this.shapeArgs.width||0,this.shapeArgs.height||1/0,this.series.options.borderWidth||0)}}}}),C(l,"Series/Pictorial/PictorialSeries.js",[l["Extensions/PatternFill.js"],l["Core/Animation/AnimationUtilities.js"],l["Core/Chart/Chart.js"],l["Series/Pictorial/PictorialPoint.js"],l["Series/Pictorial/PictorialUtilities.js"],l["Core/Series/Series.js"],l["Core/Series/SeriesRegistry.js"],l["Core/Axis/Stacking/StackItem.js"],l["Core/Renderer/SVG/SVGRenderer.js"],l["Core/Utilities.js"]],function(d,g,p,u,x,f,b,k,_,y){let m=b.seriesTypes.column;d.compose(p,f,_);let{animObject:M}=g,{getStackMetrics:v,invertShadowGroup:E,rescalePatternFill:S}=x,{addEvent:j,defined:D,merge:$,objectEach:W,pick:F}=y;class P extends m{animate(t){let{chart:i,group:a}=this,s=M(this.options.animation),r=[this.getSharedClipKey(),s.duration,s.easing,s.defer].join(","),o=i.sharedClips[r];if(t&&a){let n=this.getClipBox();o||(n.y=n.height,n.height=0,o=i.renderer.clipRect(n),i.sharedClips[r]=o),a.clip(o)}else if(o&&!o.hasClass("highcharts-animating")){let n=this.getClipBox();o.addClass("highcharts-animating").animate(n,s)}}animateDrilldown(){}animateDrillupFrom(){}pointAttribs(t){let i=super.pointAttribs.apply(this,arguments),a=this.options.paths;if(t&&t.shapeArgs&&a){let s=a[t.index%a.length],{y:r,height:o}=v(this.yAxis,s),n=s.definition;n!==t.pathDef?(t.pathDef=n,i.fill={pattern:{path:{d:n,fill:i.fill,strokeWidth:i["stroke-width"],stroke:i.stroke},x:t.shapeArgs.x,y:r,width:t.shapeArgs.width||0,height:o,patternContentUnits:"objectBoundingBox",backgroundColor:"none",color:"#ff0000"}}):t.pathDef&&t.graphic&&delete i.fill}return delete i.stroke,delete i.strokeWidth,i}getExtremes(){let t=super.getExtremes.apply(this,arguments),i=this.options.paths;return i&&i.forEach(function(a){D(a.max)&&D(t.dataMax)&&a.max>t.dataMax&&(t.dataMax=a.max)}),t}}function H(e){let t=Object.keys(e.points).filter(o=>o.split(",").length>1),i=e.axis.chart.series,a=t.map(o=>parseFloat(o.split(",")[0])),s=-1;a.forEach(o=>{i[o]&&i[o].visible&&(s=o)});let r=e.axis.chart.series[s];if(r&&r.is("pictorial")&&e.axis.hasData()&&r.xAxis.hasData()){let o=r.xAxis,n=e.axis.options,h=e.axis.chart,c=e.shadow,B=o.toPixels(e.x,!0),w=h.inverted?o.len-B:B,L=r.options.paths||[],J=e.x%L.length,Y=L[J],R=r.getColumnMetrics&&r.getColumnMetrics().width,{height:O,y:X}=v(r.yAxis,Y),U=n.stackShadow,V=F(U&&U.borderWidth,r.options.borderWidth,1);if(!c&&U&&U.enabled&&Y)e.shadowGroup||(e.shadowGroup=h.renderer.g("shadow-group").add()),e.shadowGroup.attr({translateX:h.inverted?e.axis.pos:o.pos,translateY:h.inverted?o.pos:e.axis.pos}),e.shadow=h.renderer.rect(w,X,R,O).attr({fill:{pattern:{path:{d:Y.definition,fill:U.color||"#dedede",strokeWidth:V,stroke:U.borderColor||"transparent"},x:w,y:X,width:R,height:O,patternContentUnits:"objectBoundingBox",backgroundColor:"none",color:"#dedede"}}}).add(e.shadowGroup),E(e.shadowGroup,e.axis),S(e.shadow,O,R,O,V),e.setOffset(r.pointXOffset||0,r.barW||0);else if(c&&e.shadowGroup){c.animate({x:w,y:X,width:R,height:O});let N=c.attr("fill"),z=N&&N.match(/url\(([^)]+)\)/);z&&h.renderer.patternElements&&h.renderer.patternElements[z[1].slice(1)].animate({x:w,y:X,width:R,height:O}),e.shadowGroup.animate({translateX:h.inverted?e.axis.pos:o.pos,translateY:h.inverted?o.pos:e.axis.pos}),E(e.shadowGroup,e.axis),S(c,O,R,O,V),e.setOffset(r.pointXOffset||0,r.barW||0)}}else e.shadow&&e.shadowGroup&&(e.shadow.destroy(),e.shadow=void 0,e.shadowGroup.destroy(),e.shadowGroup=void 0)}function I(e,t){e.axes&&e.axes.forEach(function(i){i.stacking&&W(i.stacking.stacks,function(a){W(a,function(s){t(s)})})})}function T(e){I(e,function(t){t.shadow&&t.shadowGroup&&(t.shadow.destroy(),t.shadowGroup.destroy(),delete t.shadow,delete t.shadowGroup)})}return P.defaultOptions=$(m.defaultOptions,{borderWidth:0}),j(P,"afterRender",function(){let e=this,t=e.options.paths,i=/url\(([^)]+)\)/;e.points.forEach(function(a){if(a.graphic&&a.shapeArgs&&t){let s=t[a.index%t.length],r=a.graphic.attr("fill"),o=r&&r.match(i),{y:n,height:h}=v(e.yAxis,s);if(o&&e.chart.renderer.patternElements){let c=e.chart.renderer.patternElements[o[1].slice(1)];c&&c.animate({x:a.shapeArgs.x,y:n,width:a.shapeArgs.width||0,height:h})}S(a.graphic,v(e.yAxis,s).height,a.shapeArgs.width||0,a.shapeArgs.height||1/0,e.options.borderWidth||0)}})}),j(p,"render",function(){I(this,H)}),j(k,"afterSetOffset",function(e){if(this.shadow){let{chart:t,len:i}=this.axis,{xOffset:a,width:s}=e,r=t.inverted?a-t.xAxis[0].len:a,o=t.inverted?-i:0;this.shadow.attr({translateX:r,translateY:o}),this.shadow.animate({width:s})}}),j(p,"afterDrilldown",function(){T(this)}),j(p,"afterDrillUp",function(){T(this)}),P.prototype.pointClass=u,b.registerSeriesType("pictorial",P),P}),C(l,"masters/modules/pictorial.src.js",[l["Core/Globals.js"]],function(d){return d})})})(q);var Z=q.exports;const ee=K(Z),ie=Q({__proto__:null,default:ee},[Z]);export{ie as p};