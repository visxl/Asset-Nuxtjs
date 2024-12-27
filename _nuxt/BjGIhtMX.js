import{aK as be}from"./BAjYNYKW.js";function me(_,m){for(var h=0;h<m.length;h++){const L=m[h];if(typeof L!="string"&&!Array.isArray(L)){for(const u in L)if(u!=="default"&&!(u in _)){const y=Object.getOwnPropertyDescriptor(L,u);y&&Object.defineProperty(_,u,y.get?y:{enumerable:!0,get:()=>L[u]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}var ne={exports:{}};(function(_){(function(m){_.exports?(m.default=m,_.exports=m):m(typeof Highcharts<"u"?Highcharts:void 0)})(function(m){var h=m?m._modules:{};function L(u,y,q,O){u.hasOwnProperty(y)||(u[y]=O.apply(null,q),typeof CustomEvent=="function"&&m.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:y,module:u[y]}})))}L(h,"Series/Funnel/FunnelSeriesDefaults.js",[],function(){return{animation:!1,borderRadius:0,center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,size:!0,dataLabels:{connectorWidth:1,verticalAlign:"middle"},states:{select:{color:"#cccccc",borderColor:"#000000"}}}}),L(h,"Series/Funnel/FunnelSeries.js",[h["Series/Funnel/FunnelSeriesDefaults.js"],h["Core/Globals.js"],h["Extensions/BorderRadius.js"],h["Core/Series/SeriesRegistry.js"],h["Core/Utilities.js"]],function(u,y,q,O,Z){let{composed:z,noop:J}=y,{column:re,pie:Q}=O.seriesTypes,{addEvent:oe,correctFloat:de,extend:le,fireEvent:he,isArray:pe,merge:ue,pick:ce,pushUnique:fe,relativeLength:te,splat:ye}=Z,ge=O.series.prototype.alignDataLabel;function X(U,t){return/%$/.test(U)?t*parseInt(U,10)/100:parseInt(U,10)}class N extends Q{alignDataLabel(t,d,s,C,w){let P=t.series,A=P.options.reversed,p=t.dlBox||t.shapeArgs,{align:G,padding:g=0,verticalAlign:f}=s,H=((P.options||{}).dataLabels||{}).inside,S=P.center[1],W=t.plotY||0,E=d.height??d.getBBox().height,I=P.getWidthAt((A?2*S-W:W)-p.height/2+E),T=f==="middle"?(p.topWidth-p.bottomWidth)/4:(I-p.bottomWidth)/2,B=p.y,D=p.x;f==="middle"?B=p.y-p.height/2+E/2:f==="top"&&(B=p.y-p.height+E+g),(f==="top"&&!A||f==="bottom"&&A||f==="middle")&&(G==="right"?D=p.x-g+T:G==="left"&&(D=p.x+g-T)),C={x:D,y:A?B-p.height:B,width:p.bottomWidth,height:p.height},s.verticalAlign="bottom",H&&(s.distance=void 0),H&&t.visible&&ge.call(P,t,d,s,C,w),H&&(!t.visible&&t.dataLabel&&(t.dataLabel.placed=!1),t.contrastColor&&d.css({color:t.contrastColor}))}drawDataLabels(){(ye(this.options.dataLabels)[0].inside?re:Q).prototype.drawDataLabels.call(this)}getDataLabelPosition(t,d){let s=t.plotY||0,C=t.half?1:-1,w=this.getX(s,!!t.half,t);return{distance:d,natural:{x:0,y:s},computed:{},alignment:t.half?"right":"left",connectorPosition:{breakAt:{x:w+(d-5)*C,y:s},touchingSliceAt:{x:w+d*C,y:s}}}}translate(){let t=this,d=t.chart,s=t.options,C=s.reversed,w=s.ignoreHiddenPoint,P=q.optionsToObject(s.borderRadius),A=d.plotWidth,p=d.plotHeight,G=s.center,g=X(G[0],A),f=X(G[1],p),H=X(s.width,A),S=X(s.height,p),W=X(s.neckWidth,A),E=X(s.neckHeight,p),I=f-S/2+S-E,T=t.points,B=te(P.radius,H),D=P.scope,xe=s.dataLabels.position==="left"?1:0,V=a=>{let b=Math.tan(a/2),v=Math.cos(Y),F=Math.sin(Y),k=B,e=k/b,c=Math.tan((Math.PI-a)/3.2104);return e>R&&(k=(e=R)*b),{dx:[e*v,(e-(c*=k))*v,e-c,e],dy:[e*F,(e-c)*F,e-c,e].map(se=>C?-se:se)}},ee=0,ie=0,$,x,K,Y,R,M,l,j,n,i,o,r;for(let a of(t.getWidthAt=function(b){let v=f-S/2;return b>I||S===E?W:W+(H-W)*(1-(b-v)/(S-E))},t.getX=function(b,v,F){var k,e,c;return g+(v?-1:1)*(t.getWidthAt(C?2*f-b:b)/2+(((e=(k=F.dataLabel)==null?void 0:k.dataLabelPosition)==null?void 0:e.distance)??te(((c=this.options.dataLabels)==null?void 0:c.distance)||0,H)))},t.center=[g,f,S],t.centerX=g,T))a.y&&a.isValid()&&(!w||a.visible!==!1)&&(ee+=a.y);for(let a of T){if(r=null,K=ee?a.y/ee:0,i=(l=f-S/2+ie*S)+K*S,j=(M=g-($=t.getWidthAt(l))/2)+$,o=(n=g-($=t.getWidthAt(i))/2)+$,de(l)>=I?(M=n=g-W/2,j=o=g+W/2):i>I&&(r=i,o=(n=g-($=t.getWidthAt(I))/2)+$,i=I),C&&(l=2*f-l,i=2*f-i,r!==null&&(r=2*f-r)),B&&(D==="point"||a.index===0||a.index===T.length-1||r!==null)){let b=Math.abs(i-l),v=j-o,F=o-n,k=Math.sqrt(v*v+b*b);Y=Math.atan(v!==0?b/v:1/0),R=k/2,r!==null&&(R=Math.min(R,Math.abs(r-i)/2)),F>=1&&(R=Math.min(R,F/2));let e=V(Y);if(x=D==="stack"&&a.index!==0?[["M",M,l],["L",j,l]]:[["M",M+e.dx[0],l+e.dy[0]],["C",M+e.dx[1],l+e.dy[1],M+e.dx[2],l,M+e.dx[3],l],["L",j-e.dx[3],l],["C",j-e.dx[2],l,j-e.dx[1],l+e.dy[1],j-e.dx[0],l+e.dy[0]]],r!==null){let c=V(Math.PI/2);e=V(Math.PI/2+Y),x.push(["L",o+e.dx[0],i-e.dy[0]],["C",o+e.dx[1],i-e.dy[1],o,i+e.dy[2],o,i+e.dy[3]]),D==="stack"&&a.index!==T.length-1?x.push(["L",o,r],["L",n,r]):x.push(["L",o,r-c.dy[3]],["C",o,r-c.dy[2],o-c.dx[2],r,o-c.dx[3],r],["L",n+c.dx[3],r],["C",n+c.dx[2],r,n,r-c.dy[2],n,r-c.dy[3]]),x.push(["L",n,i+e.dy[3]],["C",n,i+e.dy[2],n-e.dx[1],i-e.dy[1],n-e.dx[0],i-e.dy[0]])}else F>=1?(e=V(Math.PI-Y),D==="stack"&&a.index===0?x.push(["L",o,i],["L",n,i]):x.push(["L",o+e.dx[0],i-e.dy[0]],["C",o+e.dx[1],i-e.dy[1],o-e.dx[2],i,o-e.dx[3],i],["L",n+e.dx[3],i],["C",n+e.dx[2],i,n-e.dx[1],i-e.dy[1],n-e.dx[0],i-e.dy[0]])):(e=V(Math.PI-2*Y),x.push(["L",n+e.dx[0],i-e.dy[0]],["C",n+e.dx[1],i-e.dy[1],n-e.dx[1],i-e.dy[1],n-e.dx[0],i-e.dy[0]]))}else x=[["M",M,l],["L",j,l],["L",o,i]],r!==null&&x.push(["L",o,r],["L",n,r]),x.push(["L",n,i]);x.push(["Z"]),a.shapeType="path",a.shapeArgs={d:x},a.percentage=100*K,a.plotX=g,a.plotY=(l+(r||i))/2,a.tooltipPos=[g,a.plotY],a.dlBox={x:n,y:l,topWidth:j-M,bottomWidth:o-n,height:Math.abs(ce(r,i)-l),width:NaN},a.slice=J,a.half=xe,a.isValid()&&(!w||a.visible!==!1)&&(ie+=K)}he(t,"afterTranslate")}sortByAngle(t){t.sort((d,s)=>d.plotY-s.plotY)}}return N.defaultOptions=ue(Q.defaultOptions,u),le(N.prototype,{animate:J}),function(U){function t(){for(let d of this.series){let s=d.options&&d.options.dataLabels;pe(s)&&(s=s[0]),d.is("pie")&&d.placeDataLabels&&s&&!s.inside&&d.placeDataLabels()}}U.compose=function(d){fe(z,"FunnelSeries")&&oe(d,"afterHideAllOverlappingLabels",t)}}(N||(N={})),O.registerSeriesType("funnel",N),N}),L(h,"Series/Pyramid/PyramidSeriesDefaults.js",[],function(){return{neckHeight:"0%",neckWidth:"0%",reversed:!0}}),L(h,"Series/Pyramid/PyramidSeries.js",[h["Series/Funnel/FunnelSeries.js"],h["Series/Pyramid/PyramidSeriesDefaults.js"],h["Core/Series/SeriesRegistry.js"],h["Core/Utilities.js"]],function(u,y,q,O){let{merge:Z}=O;class z extends u{}return z.defaultOptions=Z(u.defaultOptions,y),q.registerSeriesType("pyramid",z),z}),L(h,"masters/modules/funnel.src.js",[h["Core/Globals.js"],h["Series/Funnel/FunnelSeries.js"]],function(u,y){return y.compose(u.Chart),u})})})(ne);var ae=ne.exports;const Le=be(ae),ve=me({__proto__:null,default:Le},[ae]);export{ve as f};