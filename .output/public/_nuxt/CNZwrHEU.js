import{aE as ge}from"./DgWlP6BF.js";function ye(K,H){for(var y=0;y<H.length;y++){const A=H[y];if(typeof A!="string"&&!Array.isArray(A)){for(const S in A)if(S!=="default"&&!(S in K)){const N=Object.getOwnPropertyDescriptor(A,S);N&&Object.defineProperty(K,S,N.get?N:{enumerable:!0,get:()=>A[S]})}}}return Object.freeze(Object.defineProperty(K,Symbol.toStringTag,{value:"Module"}))}var ce={exports:{}};(function(K){(function(H){K.exports?(H.default=H,K.exports=H):H(typeof Highcharts<"u"?Highcharts:void 0)})(function(H){var y=H?H._modules:{};function A(S,N,z,M){S.hasOwnProperty(N)||(S[N]=M.apply(null,z),typeof CustomEvent=="function"&&H.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:N,module:S[N]}})))}A(y,"Series/NodesComposition.js",[y["Core/Series/SeriesRegistry.js"],y["Core/Utilities.js"]],function(S,N){var z;let{series:{prototype:M,prototype:{pointClass:{prototype:j}}}}=S,{defined:T,extend:E,find:f,merge:m,pick:l}=N;return function(t){function o(){return this.data=[].concat(this.points||[],this.nodes),M.destroy.apply(this,arguments)}function r(){this.nodes&&(this.nodes.forEach(n=>{n.destroy()}),this.nodes.length=0),M.setData.apply(this,arguments)}function a(n){let s=arguments,i=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];n!=="select"&&i.forEach(p=>{p&&p.series&&(j.setState.apply(p,s),!p.isNode&&(p.fromNode.graphic&&j.setState.apply(p.fromNode,s),p.toNode&&p.toNode.graphic&&j.setState.apply(p.toNode,s)))}),j.setState.apply(this,s)}function d(n,s,i,p){let k=this.series.options.nodes,h=this.series.options.data,u=h&&h.length||0,C=h&&h[this.index];if(j.update.call(this,n,!this.isNode&&s,i,p),this.isNode){let P=(k||[]).reduce((G,e,c)=>this.id===e.id?c:G,-1),x=m(k&&k[P]||{},h&&h[this.index]||{});h&&(C?h[this.index]=C:h.length=u),k?P>=0?k[P]=x:k.push(x):this.series.options.nodes=[x],l(s,!0)&&this.series.chart.redraw(i)}}t.compose=function(n,s){let i=n.prototype,p=s.prototype;return i.setNodeState=a,i.setState=a,i.update=d,p.destroy=o,p.setData=r,s},t.createNode=function(n){let s=this.pointClass,i=(h,u)=>f(h,C=>C.id===u),p=i(this.nodes,n),k;if(!p){k=this.options.nodes&&i(this.options.nodes,n);let h=new s(this,E({className:"highcharts-node",isNode:!0,id:n,y:1},k));h.linksTo=[],h.linksFrom=[],h.getSum=function(){let u=0,C=0;return h.linksTo.forEach(P=>{u+=P.weight||0}),h.linksFrom.forEach(P=>{C+=P.weight||0}),Math.max(u,C)},h.offset=function(u,C){let P=0;for(let x=0;x<h[C].length;x++){if(h[C][x]===u)return P;P+=h[C][x].weight}},h.hasShape=function(){let u=0;return h.linksTo.forEach(C=>{C.outgoing&&u++}),!h.linksTo.length||u!==h.linksTo.length},h.index=this.nodes.push(h)-1,p=h}return p.formatPrefix="node",p.name=p.name||p.options.id||"",p.mass=l(p.options.mass,p.options.marker&&p.options.marker.radius,this.options.marker&&this.options.marker.radius,4),p},t.destroy=o,t.generatePoints=function(){let n=this.chart,s={};M.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach(i=>{i.linksFrom.length=0,i.linksTo.length=0,i.level=i.options.level}),this.points.forEach(i=>{T(i.from)&&(s[i.from]||(s[i.from]=this.createNode(i.from)),s[i.from].linksFrom.push(i),i.fromNode=s[i.from],n.styledMode?i.colorIndex=l(i.options.colorIndex,s[i.from].colorIndex):i.color=i.options.color||s[i.from].color),T(i.to)&&(s[i.to]||(s[i.to]=this.createNode(i.to)),s[i.to].linksTo.push(i),i.toNode=s[i.to]),i.name=i.name||i.id},this),this.nodeLookup=s},t.setNodeState=a,t.updateNode=d}(z||(z={})),z}),A(y,"Series/Sankey/SankeyPoint.js",[y["Core/Series/Point.js"],y["Core/Series/SeriesRegistry.js"],y["Core/Utilities.js"]],function(S,N,z){let{column:M}=N.seriesTypes,{defined:j}=z;class T extends M.prototype.pointClass{applyOptions(f,m){return S.prototype.applyOptions.call(this,f,m),j(this.options.level)&&(this.options.column=this.column=this.options.level),this}getClassName(){return(this.isNode?"highcharts-node ":"highcharts-link ")+S.prototype.getClassName.call(this)}getFromNode(){let f=-1,m;for(let l=0;l<this.linksTo.length;l++){let t=this.linksTo[l];t.fromNode.column>f&&t.fromNode!==this&&(f=(m=t.fromNode).column)}return{fromNode:m,fromColumn:f}}setNodeColumn(){j(this.options.column)||(this.linksTo.length===0?this.column=0:this.column=this.getFromNode().fromColumn+1)}isValid(){return this.isNode||typeof this.weight=="number"}}return T}),A(y,"Series/Sankey/SankeySeriesDefaults.js",[],function(){return{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkColorMode:"from",linkOpacity:.5,opacity:1,minLinkWidth:0,nodeAlignment:"center",nodeWidth:20,nodePadding:10,nodeDistance:30,showInLegend:!1,states:{hover:{linkOpacity:1,opacity:1},inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 0.8em">{series.name}</span><br/>',pointFormat:"{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}}}),A(y,"Series/Sankey/SankeyColumnComposition.js",[y["Core/Utilities.js"]],function(S){var N;let{defined:z,relativeLength:M}=S;return function(j){j.compose=function(E,f){return E.sankeyColumn=new T(E,f),E};class T{constructor(f,m){this.points=f,this.series=m}getTranslationFactor(f){let m=this.points,l=m.slice(),t=f.chart,o=f.options.minLinkWidth||0,r,a=0,d,n=(t.plotSizeY||0)-(f.options.borderWidth||0)-(m.length-1)*f.nodePadding;for(;m.length;){for(a=n/m.sankeyColumn.sum(),r=!1,d=m.length;d--;)m[d].getSum()*a<o&&(m.splice(d,1),n=Math.max(0,n-o),r=!0);if(!r)break}for(let s of(m.length=0,l))m.push(s);return a}top(f){let m=this.series,l=m.nodePadding,t=this.points.reduce((o,r)=>(o>0&&(o+=l),o+=Math.max(r.getSum()*f,m.options.minLinkWidth||0)),0);return{top:0,center:.5,bottom:1}[m.options.nodeAlignment||"center"]*((m.chart.plotSizeY||0)-t)}left(f){let m=this.series,l=m.chart,t=m.options.equalNodes,o=l.inverted?l.plotHeight:l.plotWidth,r=m.nodePadding,a=this.points.reduce((d,n)=>(d>0&&(d+=r),d+=t?o/n.series.nodes.length-r:Math.max(n.getSum()*f,m.options.minLinkWidth||0)),0);return((l.plotSizeX||0)-Math.round(a))/2}sum(){return this.points.reduce((f,m)=>f+m.getSum(),0)}offset(f,m){let l=this.points,t=this.series,o=t.nodePadding,r=0,a;if(t.is("organization")&&f.hangsFrom)return{absoluteTop:f.hangsFrom.nodeY};for(let d=0;d<l.length;d++){let n=l[d].getSum(),s=Math.max(n*m,t.options.minLinkWidth||0),i=f.options[t.chart.inverted?"offsetHorizontal":"offsetVertical"],p=f.options.offset||0;if(a=n?s+o:0,l[d]===f)return{relativeTop:r+(z(i)?M(i,s):M(p,a))};r+=a}}}j.SankeyColumnAdditions=T}(N||(N={})),N}),A(y,"Series/TreeUtilities.js",[y["Core/Color/Color.js"],y["Core/Utilities.js"]],function(S,N){let{extend:z,isArray:M,isNumber:j,isObject:T,merge:E,pick:f,relativeLength:m}=N;return{getColor:function(l,t){let o,r,a,d,n,s,i=t.index,p=t.mapOptionsToLevel,k=t.parentColor,h=t.parentColorIndex,u=t.series,C=t.colors,P=t.siblings,x=u.points,G=u.chart.options.chart;return l&&(o=x[l.i],r=p[l.level]||{},o&&r.colorByPoint&&(d=o.index%(C?C.length:G.colorCount),a=C&&C[d]),u.chart.styledMode||(n=f(o&&o.options.color,r&&r.color,a,k&&(e=>{let c=r&&r.colorVariation;return c&&c.key==="brightness"&&i&&P?S.parse(e).brighten(c.to*(i/P)).get():e})(k),u.color)),s=f(o&&o.options.colorIndex,r&&r.colorIndex,d,h,t.colorIndex)),{color:n,colorIndex:s}},getLevelOptions:function(l){let t,o,r,a,d,n,s={};if(T(l))for(a=j(l.from)?l.from:1,n=l.levels,o={},t=T(l.defaults)?l.defaults:{},M(n)&&(o=n.reduce((i,p)=>{let k,h,u;return T(p)&&j(p.level)&&(h=f((u=E({},p)).levelIsConstant,t.levelIsConstant),delete u.levelIsConstant,delete u.level,T(i[k=p.level+(h?0:a-1)])?E(!0,i[k],u):i[k]=u),i},{})),d=j(l.to)?l.to:1,r=0;r<=d;r++)s[r]=E({},t,T(o[r])?o[r]:{});return s},getNodeWidth:function(l,t){let{chart:o,options:r}=l,{nodeDistance:a=0,nodeWidth:d=0}=r,{plotSizeX:n=1}=o;if(d==="auto"){if(typeof a=="string"&&/%$/.test(a))return n/(t+parseFloat(a)/100*(t-1));let s=Number(a);return(n+s)/(t||1)-s}return m(d,n)},setTreeValues:function l(t,o){let r=o.before,a=o.idRoot,d=o.mapIdToNode[a],n=o.levelIsConstant!==!1,s=o.points[t.i],i=s&&s.options||{},p=[],k=0;t.levelDynamic=t.level-(n?0:d.level),t.name=f(s&&s.name,""),t.visible=a===t.id||o.visible===!0,typeof r=="function"&&(t=r(t,o)),t.children.forEach((u,C)=>{let P=z({},o);z(P,{index:C,siblings:t.children.length,visible:t.visible}),u=l(u,P),p.push(u),u.visible&&(k+=u.val)});let h=f(i.value,k);return t.visible=h>=0&&(k>0||t.visible),t.children=p,t.childrenTotal=k,t.isLeaf=t.visible&&!k,t.val=h,t},updateRootId:function(l){let t,o;return T(l)&&(o=T(l.options)?l.options:{},t=f(l.rootNode,o.rootId,""),T(l.userOptions)&&(l.userOptions.rootId=t),l.rootNode=t),t}}}),A(y,"Extensions/TextPath.js",[y["Core/Globals.js"],y["Core/Utilities.js"]],function(S,N){let{deg2rad:z}=S,{addEvent:M,merge:j,uniqueKey:T,defined:E,extend:f}=N;function m(o,r){r=j(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},r);let a=this.renderer.url,d=this.text||this,n=d.textPath,{attributes:s,enabled:i}=r;if(o=o||n&&n.path,n&&n.undo(),o&&i){let p=M(d,"afterModifyTree",k=>{if(o&&i){let h=o.attr("id");h||o.attr("id",h=T());let u={x:0,y:0};E(s.dx)&&(u.dx=s.dx,delete s.dx),E(s.dy)&&(u.dy=s.dy,delete s.dy),d.attr(u),this.attr({transform:""}),this.box&&(this.box=this.box.destroy());let C=k.nodes.slice(0);k.nodes.length=0,k.nodes[0]={tagName:"textPath",attributes:f(s,{"text-anchor":s.textAnchor,href:`${a}#${h}`}),children:C}}});d.textPath={path:o,undo:p}}else d.attr({dx:0,dy:0}),delete d.textPath;return this.added&&(d.textCache="",this.renderer.buildText(d)),this}function l(o){var d;let r=o.bBox,a=(d=this.element)==null?void 0:d.querySelector("textPath");if(a){let n=[],{b:s,h:i}=this.renderer.fontMetrics(this.element),p=i-s,k=RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)',"g"),h=a.innerHTML.replace(k,"").split(/<tspan class="highcharts-br"[^>]*>/),u=h.length,C=(P,x)=>{let{x:G,y:e}=x,c=(a.getRotationOfChar(P)-90)*z,g=Math.cos(c),b=Math.sin(c);return[[G-p*g,e-p*b],[G+s*g,e+s*b]]};for(let P=0,x=0;x<u;x++){let G=h[x].length;for(let e=0;e<G;e+=5)try{let c=P+e+x,[g,b]=C(c,a.getStartPositionOfChar(c));e===0?(n.push(b),n.push(g)):(x===0&&n.unshift(b),x===u-1&&n.push(g))}catch{break}P+=G-1;try{let e=P+x,c=a.getEndPositionOfChar(e),[g,b]=C(e,c);n.unshift(b),n.unshift(g)}catch{break}}n.length&&n.push(n[0].slice()),r.polygon=n}return r}function t(o){var n;let r=o.labelOptions,a=o.point,d=r[a.formatPrefix+"TextPath"]||r.textPath;d&&!r.useHTML&&(this.setTextPath(((n=a.getDataLabelPath)==null?void 0:n.call(a,this))||a.graphic,d),a.dataLabelPath&&!d.enabled&&(a.dataLabelPath=a.dataLabelPath.destroy()))}return{compose:function(o){M(o,"afterGetBBox",l),M(o,"beforeAddingDataLabel",t);let r=o.prototype;r.setTextPath||(r.setTextPath=m)}}}),A(y,"Series/Sankey/SankeySeries.js",[y["Core/Globals.js"],y["Series/NodesComposition.js"],y["Series/Sankey/SankeyPoint.js"],y["Series/Sankey/SankeySeriesDefaults.js"],y["Core/Series/SeriesRegistry.js"],y["Series/Sankey/SankeyColumnComposition.js"],y["Core/Color/Color.js"],y["Series/TreeUtilities.js"],y["Core/Utilities.js"],y["Core/Renderer/SVG/SVGElement.js"],y["Extensions/TextPath.js"]],function(S,N,z,M,j,T,E,f,m,l,t){let{column:o,line:r}=j.seriesTypes,{parse:a}=E,{getLevelOptions:d,getNodeWidth:n}=f,{clamp:s,crisp:i,extend:p,isObject:k,merge:h,pick:u,relativeLength:C,stableSort:P}=m;t.compose(l);class x extends o{static getDLOptions(e){let c=k(e.optionsPoint)?e.optionsPoint.dataLabels:{};return h({style:{}},k(e.level)?e.level.dataLabels:{},c)}createNodeColumns(){let e=[];for(let c of this.nodes)c.setNodeColumn(),e[c.column]||(e[c.column]=T.compose([],this)),e[c.column].push(c);for(let c=0;c<e.length;c++)e[c]===void 0&&(e[c]=T.compose([],this));return e}order(e,c){if(e.level===void 0)for(let g of(e.level=c,e.linksFrom))g.toNode&&this.order(g.toNode,c+1)}generatePoints(){if(N.generatePoints.apply(this,arguments),this.orderNodes){for(let e of this.nodes)e.linksTo.length===0&&this.order(e,0);P(this.nodes,(e,c)=>e.level-c.level)}}getNodePadding(){let e=this.options.nodePadding||0;if(this.nodeColumns){let c=this.nodeColumns.reduce((g,b)=>Math.max(g,b.length),0);c*e>this.chart.plotSizeY&&(e=this.chart.plotSizeY/c)}return e}hasData(){return!!this.processedXData.length}pointAttribs(e,c){if(!e)return{};let g=this,b=e.isNode?e.level:e.fromNode.level,L=g.mapOptionsToLevel[b||0]||{},B=e.options,O=L.states&&L.states[c||""]||{},Y=["colorByPoint","borderColor","borderWidth","linkOpacity","opacity"].reduce((X,F)=>(X[F]=u(O[F],B[F],L[F],g.options[F]),X),{}),U=u(O.color,B.color,Y.colorByPoint?e.color:L.color);return e.isNode?{fill:U,stroke:Y.borderColor,"stroke-width":Y.borderWidth,opacity:Y.opacity}:{fill:E.parse(U).setOpacity(Y.linkOpacity).get()}}drawTracker(){o.prototype.drawTracker.call(this,this.points),o.prototype.drawTracker.call(this,this.nodes)}drawPoints(){o.prototype.drawPoints.call(this,this.points),o.prototype.drawPoints.call(this,this.nodes)}drawDataLabels(){o.prototype.drawDataLabels.call(this,this.points),o.prototype.drawDataLabels.call(this,this.nodes)}translate(){this.processedXData||this.processData(),this.generatePoints(),this.nodeColumns=this.createNodeColumns();let e=this,c=this.chart,g=this.options,b=this.nodeColumns,L=b.length;for(let B of(this.nodeWidth=n(this,L),this.nodePadding=this.getNodePadding(),this.translationFactor=b.reduce((O,Y)=>Math.min(O,Y.sankeyColumn.getTranslationFactor(e)),1/0),this.colDistance=(c.plotSizeX-this.nodeWidth-g.borderWidth)/Math.max(1,b.length-1),e.mapOptionsToLevel=d({from:1,levels:g.levels,to:b.length-1,defaults:{borderColor:g.borderColor,borderRadius:g.borderRadius,borderWidth:g.borderWidth,color:e.color,colorByPoint:g.colorByPoint,levelIsConstant:!0,linkColor:g.linkColor,linkLineWidth:g.linkLineWidth,linkOpacity:g.linkOpacity,states:g.states}}),b))for(let O of B)e.translateNode(O,B);for(let B of this.nodes)for(let O of B.linksFrom)(O.weight||O.isNull)&&O.to&&(e.translateLink(O),O.allowShadow=!1)}translateLink(e){let c=(R,V)=>{let _=R.offset(e,V)*O;return Math.min(R.nodeY+_,R.nodeY+(R.shapeArgs&&R.shapeArgs.height||0)-v)},g=e.fromNode,b=e.toNode,L=this.chart,{inverted:B}=L,O=this.translationFactor,Y=this.options,U=u(e.linkColorMode,Y.linkColorMode),X=(L.inverted?-this.colDistance:this.colDistance)*Y.curveFactor,F=g.nodeX,w=b.nodeX,oe=e.outgoing,v=Math.max(e.weight*O,this.options.minLinkWidth),W=c(g,"linksFrom"),D=c(b,"linksTo"),I=this.nodeWidth,q=w>F+I;if(L.inverted&&(W=L.plotSizeY-W,D=(L.plotSizeY||0)-D,I=-I,v=-v,q=F>w),e.shapeType="path",e.linkBase=[W,W+v,D,D+v],q&&typeof D=="number")e.shapeArgs={d:[["M",F+I,W],["C",F+I+X,W,w-X,D,w,D],["L",w+(oe?I:0),D+v/2],["L",w,D+v],["C",w-X,D+v,F+I+X,W+v,F+I,W+v],["Z"]]};else if(typeof D=="number"){let R=L.plotHeight-W-v,V=w-20-v,_=w-20,J=F+I,Z=J+20,ie=Z+v,le=W,Q=W+v,ne=Q+20,ee=ne+R,$=ee+20,se=$+v,re=D,te=re+v,ae=te+20,fe=Q-.7*v,de=$+.7*v,me=te-.7*v,he=w-.7*v,pe=J+.7*v;e.shapeArgs={d:[["M",J,le],["C",pe,le,ie,fe,ie,ne],["L",ie,ee],["C",ie,de,pe,se,J,se],["L",w,se],["C",he,se,V,de,V,ee],["L",V,ae],["C",V,me,he,re,w,re],["L",w,te],["C",_,te,_,te,_,ae],["L",_,ee],["C",_,$,_,$,w,$],["L",J,$],["C",Z,$,Z,$,Z,ee],["L",Z,ne],["C",Z,Q,Z,Q,J,Q],["Z"]]}}if(e.dlBox={x:F+(w-F+I)/2,y:W+(D-W)/2,height:v,width:0},e.tooltipPos=L.inverted?[L.plotSizeY-e.dlBox.y-v/2,L.plotSizeX-e.dlBox.x]:[e.dlBox.x,e.dlBox.y+v/2],e.y=e.plotY=1,e.x=e.plotX=1,!e.options.color){if(U==="from")e.color=g.color;else if(U==="to")e.color=b.color;else if(U==="gradient"){let R=a(g.color).get(),V=a(b.color).get();e.color={linearGradient:{x1:1,x2:0,y1:0,y2:0},stops:[[0,B?R:V],[1,B?V:R]]}}}}translateNode(e,c){let g=this.translationFactor,b=this.chart,L=this.options,{borderRadius:B,borderWidth:O=0}=L,Y=e.getSum(),U=Math.max(Math.round(Y*g),this.options.minLinkWidth),X=Math.round(this.nodeWidth),F=c.sankeyColumn.offset(e,g),w=i(u(F.absoluteTop,c.sankeyColumn.top(g)+F.relativeTop),O),oe=i(this.colDistance*e.column+O/2,O)+C(e.options[b.inverted?"offsetVertical":"offsetHorizontal"]||0,X),v=b.inverted?b.plotSizeX-oe:oe;if(e.sum=Y,Y){e.shapeType="roundedRect",e.nodeX=v,e.nodeY=w;let W=v,D=w,I=e.options.width||L.width||X,q=e.options.height||L.height||U,R=s(C(typeof B=="object"?B.radius:B||0,I),0,U/2);b.inverted&&(W=v-X,D=b.plotSizeY-w-U,I=e.options.height||L.height||X,q=e.options.width||L.width||U),e.dlOptions=x.getDLOptions({level:this.mapOptionsToLevel[e.level],optionsPoint:e.options}),e.plotX=1,e.plotY=1,e.tooltipPos=b.inverted?[b.plotSizeY-D-q/2,b.plotSizeX-W-I/2]:[W+I/2,D+q/2],e.shapeArgs={x:W,y:D,width:I,height:q,r:R,display:e.hasShape()?"":"none"}}else e.dlOptions={enabled:!1}}}return x.defaultOptions=h(o.defaultOptions,M),N.compose(z,x),p(x.prototype,{animate:r.prototype.animate,createNode:N.createNode,forceDL:!0,invertible:!0,isCartesian:!1,orderNodes:!0,noSharedTooltip:!0,pointArrayMap:["from","to","weight"],pointClass:z,searchPoint:S.noop}),j.registerSeriesType("sankey",x),x}),A(y,"masters/modules/sankey.src.js",[y["Core/Globals.js"]],function(S){return S})})})(ce);var ue=ce.exports;const ke=ge(ue),Ce=ye({__proto__:null,default:ke},[ue]);export{Ce as s};
