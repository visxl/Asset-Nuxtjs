import{aE as Yt}from"./DgWlP6BF.js";function Dt($,T){for(var b=0;b<T.length;b++){const v=T[b];if(typeof v!="string"&&!Array.isArray(v)){for(const M in v)if(M!=="default"&&!(M in $)){const Y=Object.getOwnPropertyDescriptor(v,M);Y&&Object.defineProperty($,M,Y.get?Y:{enumerable:!0,get:()=>v[M]})}}}return Object.freeze(Object.defineProperty($,Symbol.toStringTag,{value:"Module"}))}var ct={exports:{}};(function($){(function(T){$.exports?(T.default=T,$.exports=T):T(typeof Highcharts<"u"?Highcharts:void 0)})(function(T){var b=T?T._modules:{};function v(M,Y,E,V){M.hasOwnProperty(Y)||(M[Y]=V.apply(null,E),typeof CustomEvent=="function"&&T.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:Y,module:M[Y]}})))}v(b,"Extensions/MarkerClusters/MarkerClusterDefaults.js",[],function(){return{cluster:{enabled:!1,allowOverlap:!0,animation:{duration:500},drillToCluster:!0,minimumClusterSize:2,layoutAlgorithm:{gridSize:50,distance:40,kmeansThreshold:100},marker:{symbol:"cluster",radius:15,lineWidth:0,lineColor:"#ffffff"},dataLabels:{enabled:!0,format:"{point.clusterPointsAmount}",verticalAlign:"middle",align:"center",style:{color:"contrast"},inside:!0}},tooltip:{clusterFormat:"<span>Clustered points: {point.clusterPointsAmount}</span><br/>"}}}),v(b,"Extensions/MarkerClusters/MarkerClusterScatter.js",[b["Core/Animation/AnimationUtilities.js"],b["Extensions/MarkerClusters/MarkerClusterDefaults.js"],b["Core/Utilities.js"]],function(M,Y,E){let V,{animObject:J}=M,{cluster:O}=Y,{addEvent:w,defined:X,error:Q,isArray:F,isFunction:ot,isObject:tt,isNumber:B,merge:et,objectEach:pt,relativeLength:nt,syncTimeout:it}=E,ut={grid:function(i,r,s,a){let t,h,d,u,n,l={},o=this.getGridOffset(),p=this.getScaledGridSize(a);for(n=0;n<i.length;n++){let x=W(this,{x:i[n],y:r[n]});t=x.x-o.plotLeft,h=x.y-o.plotTop,d=Math.floor(t/p),l[u=Math.floor(h/p)+"-"+d]||(l[u]=[]),l[u].push({dataIndex:s[n],x:i[n],y:r[n]})}return l},kmeans:function(i,r,s,a){let t=[],h=[],d={},u=a.processedDistance||O.layoutAlgorithm.distance,n=a.iterations,l=0,o=!0,p=0,x=0,f,C=[];a.processedGridSize=a.processedDistance;let c=this.markerClusterAlgorithms?this.markerClusterAlgorithms.grid.call(this,i,r,s,a):{};for(let e in c)c[e].length>1&&(f=G(c[e]),t.push({posX:f.x,posY:f.y,oldX:0,oldY:0,startPointsLen:c[e].length,points:[]}));for(;o;){for(let e of t)e.points.length=0;h.length=0;for(let e=0;e<i.length;e++)p=i[e],x=r[e],(C=this.getClusterDistancesFromPoint(t,p,x)).length&&C[0].distance<u?t[C[0].clusterIndex].points.push({x:p,y:x,dataIndex:s[e]}):h.push({x:p,y:x,dataIndex:s[e]});for(let e=0;e<t.length;e++)t[e].points.length===1&&(C=this.getClusterDistancesFromPoint(t,t[e].points[0].x,t[e].points[0].y))[1].distance<u&&(t[C[1].clusterIndex].points.push(t[e].points[0]),t[C[0].clusterIndex].points.length=0);o=!1;for(let e=0;e<t.length;e++)f=G(t[e].points),t[e].oldX=t[e].posX,t[e].oldY=t[e].posY,t[e].posX=f.x,t[e].posY=f.y,(t[e].posX>t[e].oldX+1||t[e].posX<t[e].oldX-1||t[e].posY>t[e].oldY+1||t[e].posY<t[e].oldY-1)&&(o=!0);n&&(o=l<n-1),l++}for(let e=0,k=t.length;e<k;++e)d["cluster"+e]=t[e].points;for(let e=0,k=h.length;e<k;++e)d["noise"+e]=[h[e]];return d},optimizedKmeans:function(i,r,s,a){let t=a.processedDistance||O.layoutAlgorithm.gridSize,h=this.getRealExtremes(),d=(this.options.cluster||{}).marker,u,n={},l,o;if(!this.markerClusterInfo||this.initMaxX&&this.initMaxX<h.maxX||this.initMinX&&this.initMinX>h.minX||this.initMaxY&&this.initMaxY<h.maxY||this.initMinY&&this.initMinY>h.minY)this.initMaxX=h.maxX,this.initMinX=h.minX,this.initMaxY=h.maxY,this.initMinY=h.minY,n=this.markerClusterAlgorithms?this.markerClusterAlgorithms.kmeans.call(this,i,r,s,a):{},this.baseClusters=null;else{for(let p of(this.baseClusters||(this.baseClusters={clusters:this.markerClusterInfo.clusters,noise:this.markerClusterInfo.noise}),this.baseClusters.clusters)){for(let f of(p.pointsOutside=[],p.pointsInside=[],p.data)){let C=W(this,f),c=W(this,p);u=Math.sqrt(Math.pow(C.x-c.x,2)+Math.pow(C.y-c.y,2)),l=t-(o=p.clusterZone&&p.clusterZone.marker&&p.clusterZone.marker.radius?p.clusterZone.marker.radius:d&&d.radius?d.radius:O.marker.radius)>=0?t-o:o,u>o+l&&X(p.pointsOutside)?p.pointsOutside.push(f):X(p.pointsInside)&&p.pointsInside.push(f)}p.pointsInside.length&&(n[p.id]=p.pointsInside);let x=0;for(let f of p.pointsOutside)n[p.id+"_noise"+x++]=[f]}for(let p of this.baseClusters.noise)n[p.id]=p.data}return n}},K=[],dt=0;function lt(i,r,s){i.attr({opacity:r}).animate({opacity:1},s)}function P(i,r,s,a){for(let t of(y(i,a,s),r))t.point&&t.point.destroy&&t.point.destroy()}function y(i,r,s,a,t){i.point&&(i.point.graphic&&(i.point.graphic.show(),lt(i.point.graphic,r,s)),i.point.dataLabel&&(i.point.dataLabel.show(),lt(i.point.dataLabel,r,s)))}function G(i){let r=i.length,s=0,a=0;for(let t=0;t<r;t++)s+=i[t].x,a+=i[t].y;return{x:s/r,y:a/r}}function U(i,r){let s=[];return s.length=r,i.clusters.forEach(function(a){a.data.forEach(function(t){s[t.dataIndex]=t})}),i.noise.forEach(function(a){s[a.data[0].dataIndex]=a.data[0]}),s}function _(){return Math.random().toString(36).substring(2,7)+"-"+dt++}function st(i,r,s){i.point&&(i.point.graphic&&i.point.graphic.hide(),i.point.dataLabel&&i.point.dataLabel.hide())}function mt(i){(i.point||i.target).firePointEvent("drillToCluster",i,function(r){let s=r.point||r.target,a=s.series,t=s.series.xAxis,h=s.series.yAxis,d=s.series.chart,{inverted:u,mapView:n,pointer:l}=d;if((a.options.cluster||{}).drillToCluster&&s.clusteredData){let o=s.clusteredData.map(g=>g.x).sort((g,L)=>g-L),p=s.clusteredData.map(g=>g.y).sort((g,L)=>g-L),x=o[0],f=o[o.length-1],C=p[0],c=p[p.length-1],e=Math.abs((f-x)*.1),k=Math.abs((c-C)*.1),D=Math.min(x,f)-e,S=Math.max(x,f)+e,A=Math.min(C,c)-k,m=Math.max(C,c)+k;if(n)n.fitToBounds({x1:D,x2:S,y1:A,y2:m});else if(t&&h){let g=t.toPixels(D),L=t.toPixels(S),I=h.toPixels(A),z=h.toPixels(m);u&&([g,L,I,z]=[I,z,g,L]),g>L&&([g,L]=[L,g]),I>z&&([I,z]=[z,I]),l&&(l.zoomX=!0,l.zoomY=!0),d.transform({from:{x:g,y:I,width:L-g,height:z-I}})}}})}function rt(i,r){let{chart:s,xAxis:a,yAxis:t}=i;return s.mapView?s.mapView.pixelsToProjectedUnits(r):{x:a?a.toValue(r.x):0,y:t?t.toValue(r.y):0}}function gt(i){let r=this.chart,s=r.mapView,a=J((this.options.cluster||{}).animation),t=a.duration||500,h=(this.markerClusterInfo||{}).pointsState,d=(h||{}).newState,u=(h||{}).oldState,n=[],l,o,p,x=0,f=0,C=0,c=!1,e=!1;if(u&&d){let k=W(this,o=d[i.stateId]);f=k.x-(s?0:r.plotLeft),C=k.y-(s?0:r.plotTop),o.parentsId.length===1?(l=u[(d||{})[i.stateId].parentsId[0]],o.point&&o.point.graphic&&l&&l.point&&l.point.plotX&&l.point.plotY&&l.point.plotX!==o.point.plotX&&l.point.plotY!==o.point.plotY&&(p=o.point.graphic.getBBox(),x=o.point.graphic&&o.point.graphic.isImg?0:p.width/2,o.point.graphic.attr({x:l.point.plotX-x,y:l.point.plotY-x}),o.point.graphic.animate({x:f-(o.point.graphic.radius||0),y:C-(o.point.graphic.radius||0)},a,function(){e=!0,l.point&&l.point.destroy&&l.point.destroy()}),o.point.dataLabel&&o.point.dataLabel.alignAttr&&l.point.dataLabel&&l.point.dataLabel.alignAttr&&(o.point.dataLabel.attr({x:l.point.dataLabel.alignAttr.x,y:l.point.dataLabel.alignAttr.y}),o.point.dataLabel.animate({x:o.point.dataLabel.alignAttr.x,y:o.point.dataLabel.alignAttr.y},a)))):o.parentsId.length===0?(st(o),it(function(){y(o,.1,a)},t/2)):(st(o),o.parentsId.forEach(function(D){u&&u[D]&&(l=u[D],n.push(l),l.point&&l.point.graphic&&(c=!0,l.point.graphic.show(),l.point.graphic.animate({x:f-(l.point.graphic.radius||0),y:C-(l.point.graphic.radius||0),opacity:.4},a,function(){e=!0,P(o,n,a,.7)}),l.point.dataLabel&&l.point.dataLabel.y!==-9999&&o.point&&o.point.dataLabel&&o.point.dataLabel.alignAttr&&(l.point.dataLabel.show(),l.point.dataLabel.animate({x:o.point.dataLabel.alignAttr.x,y:o.point.dataLabel.alignAttr.y,opacity:.4},a))))}),it(function(){e||P(o,n,a,.85)},t),c||it(function(){P(o,n,a,.1)},t/2))}}function xt(){(this.markerClusterSeriesData||[]).forEach(function(i){i&&i.destroy&&i.destroy()}),this.markerClusterSeriesData=null}function yt(){let i,r,s,a,t,h,d,u,n,l,o,p,x,f,C,c,e=this,k=e.chart,D=k.mapView,S=e.xData,A=e.yData,m=e.options.cluster,g=e.getRealExtremes(),L=[],I=[],z=[];if(D&&e.is("mappoint")&&S&&A&&(e.options.data||[]).forEach((q,H)=>{let Z=e.projectPoint(q);Z&&(S[H]=Z.x,A[H]=Z.y)}),m&&m.enabled&&S&&S.length&&A&&A.length&&!k.polar){o=m.layoutAlgorithm.type,(f=m.layoutAlgorithm).processedGridSize=nt(f.gridSize||O.layoutAlgorithm.gridSize,k.plotWidth),f.processedDistance=nt(f.distance||O.layoutAlgorithm.distance,k.plotWidth),a=f.kmeansThreshold||O.layoutAlgorithm.kmeansThreshold;let q=f.processedGridSize/2,H=rt(e,{x:0,y:0}),Z=rt(e,{x:q,y:q});for(c=0,t=Math.abs(H.x-Z.x),h=Math.abs(H.y-Z.y);c<S.length;c++)!e.dataMaxX&&(X(u)&&X(d)&&X(l)&&X(n)?B(A[c])&&B(l)&&B(n)&&(u=Math.max(S[c],u),d=Math.min(S[c],d),l=Math.max(A[c]||l,l),n=Math.min(A[c]||n,n)):(u=d=S[c],l=n=A[c])),S[c]>=g.minX-t&&S[c]<=g.maxX+t&&(A[c]||g.minY)>=g.minY-h&&(A[c]||g.maxY)<=g.maxY+h&&(L.push(S[c]),I.push(A[c]),z.push(c));X(u)&&X(d)&&B(l)&&B(n)&&(e.dataMaxX=u,e.dataMinX=d,e.dataMaxY=l,e.dataMinY=n),p=(x=(ot(o)?o:e.markerClusterAlgorithms?o&&e.markerClusterAlgorithms[o]?e.markerClusterAlgorithms[o]:L.length<a?e.markerClusterAlgorithms.kmeans:e.markerClusterAlgorithms.grid:function(){return!1}).call(this,L,I,z,f))?e.getClusteredData(x,m):x,m.animation&&e.markerClusterInfo&&e.markerClusterInfo.pointsState&&e.markerClusterInfo.pointsState.oldState?(function(j){if(j){let N;for(let at of Object.keys(j))(N=j[at]).point&&N.point.destroy&&N.point.destroy()}}(e.markerClusterInfo.pointsState.oldState),i=e.markerClusterInfo.pointsState.newState):i={},r=S.length,s=e.markerClusterInfo,p&&(e.processedXData=p.groupedXData,e.processedYData=p.groupedYData,e.hasGroupedData=!0,e.markerClusterInfo=p,e.groupMap=p.groupMap),V.apply(this),p&&e.markerClusterInfo&&((e.markerClusterInfo.clusters||[]).forEach(function(j){(C=e.points[j.index]).isCluster=!0,C.clusteredData=j.data,C.clusterPointsAmount=j.data.length,j.point=C,w(C,"click",mt)}),(e.markerClusterInfo.noise||[]).forEach(function(j){j.point=e.points[j.index]}),m.animation&&e.markerClusterInfo&&(e.markerClusterInfo.pointsState={oldState:i,newState:e.getPointsState(p,s,r)}),m.animation?this.hideClusteredData():this.destroyClusteredData(),this.markerClusterSeriesData=this.hasGroupedData?this.points:null)}else V.apply(this)}function Ct(i,r,s){let a=[];for(let t=0;t<i.length;t++){let h=W(this,{x:r,y:s}),d=W(this,{x:i[t].posX,y:i[t].posY}),u=Math.sqrt(Math.pow(h.x-d.x,2)+Math.pow(h.y-d.y,2));a.push({clusterIndex:t,distance:u})}return a.sort((t,h)=>t.distance-h.distance)}function kt(i,r){let s=[],a=[],t=[],h=[],d=[],u=Math.max(2,r.minimumClusterSize||2),n=0,l,o,p,x,f,C,c,e,k,D,S,A,m,g;if(ot(r.layoutAlgorithm.type)&&!this.isValidGroupedDataObject(i))return Q("Highcharts marker-clusters module: The custom algorithm result is not valid!",!1,this.chart),!1;for(g in i)if(i[g].length>=u){if(p=i[g],l=_(),f=p.length,r.zones)for(m=0;m<r.zones.length;m++)f>=r.zones[m].from&&f<=r.zones[m].to&&((S=r.zones[m]).zoneIndex=m,D=r.zones[m].marker,A=r.zones[m].className);for(k=G(p),r.layoutAlgorithm.type!=="grid"||r.allowOverlap?c={x:k.x,y:k.y}:(C=this.options.marker||{},c=this.preventClusterCollisions({x:k.x,y:k.y,key:g,groupedData:i,gridSize:this.getScaledGridSize(r.layoutAlgorithm),defaultRadius:C.radius||3+(C.lineWidth||0),clusterRadius:D&&D.radius?D.radius:(r.marker||{}).radius||O.marker.radius})),m=0;m<f;m++)p[m].parentStateId=l;if(t.push({x:c.x,y:c.y,id:g,stateId:l,index:n,data:p,clusterZone:S,clusterZoneClassName:A}),s.push(c.x),a.push(c.y),d.push({options:{formatPrefix:"cluster",dataLabels:r.dataLabels,marker:et(r.marker,{states:r.states},D||{})}}),this.options.data&&this.options.data.length)for(m=0;m<f;m++)tt(this.options.data[p[m].dataIndex])&&(p[m].options=this.options.data[p[m].dataIndex]);n++,D=null}else for(m=0;m<i[g].length;m++)o=i[g][m],l=_(),e=null,x=((this.options||{}).data||[])[o.dataIndex],s.push(o.x),a.push(o.y),o.parentStateId=l,h.push({x:o.x,y:o.y,id:g,stateId:l,index:n,data:i[g]}),e=x&&typeof x=="object"&&!F(x)?et(x,{x:o.x,y:o.y}):{userOptions:x,x:o.x,y:o.y},d.push({options:e}),n++;return{clusters:t,noise:h,groupedXData:s,groupedYData:a,groupMap:d}}function Mt(){let i=this.chart,r=this.xAxis,s=this.yAxis;return{plotLeft:r&&this.dataMinX&&this.dataMaxX?r.reversed?r.toPixels(this.dataMaxX):r.toPixels(this.dataMinX):i.plotLeft,plotTop:s&&this.dataMinY&&this.dataMaxY?s.reversed?s.toPixels(this.dataMinY):s.toPixels(this.dataMaxY):i.plotTop}}function It(i,r,s){let a,t,h=r?U(r,s):[],d=U(i,s),u={};K=[],i.clusters.forEach(function(n){u[n.stateId]={x:n.x,y:n.y,id:n.stateId,point:n.point,parentsId:[]}}),i.noise.forEach(function(n){u[n.stateId]={x:n.x,y:n.y,id:n.stateId,point:n.point,parentsId:[]}});for(let n=0;n<d.length;n++)a=d[n],t=h[n],a&&t&&a.parentStateId&&t.parentStateId&&u[a.parentStateId]&&u[a.parentStateId].parentsId.indexOf(t.parentStateId)===-1&&(u[a.parentStateId].parentsId.push(t.parentStateId),K.indexOf(t.parentStateId)===-1&&K.push(t.parentStateId));return u}function bt(){let i=this.chart,r=i.mapView?0:i.plotLeft,s=rt(this,{x:r,y:i.mapView?0:i.plotTop}),a=rt(this,{x:r+i.plotWidth,y:r+i.plotHeight}),t=s.x,h=a.x,d=s.y,u=a.y;return{minX:Math.min(t,h),maxX:Math.max(t,h),minY:Math.min(d,u),maxY:Math.max(d,u)}}function St(i){let r=this.xAxis,s=this.chart.mapView,a=i.processedGridSize||O.layoutAlgorithm.gridSize,t=!0,h=1,d=1;this.gridValueSize||(s?this.gridValueSize=a/s.getScale():this.gridValueSize=Math.abs(r.toValue(a)-r.toValue(0)));let u=+(a/(s?this.gridValueSize*s.getScale():r.toPixels(this.gridValueSize)-r.toPixels(0))).toFixed(14);for(;t&&u!==1;){let n=Math.pow(2,h);u>.75&&u<1.25?t=!1:u>=1/n&&u<1/n*2?(t=!1,d=n):u<=n&&u>n/2&&(t=!1,d=1/n),h++}return a/d/u}function At(){let i=this.markerClusterSeriesData,r=((this.markerClusterInfo||{}).pointsState||{}).oldState||{},s=K.map(a=>(r[a].point||{}).id||"");(i||[]).forEach(function(a){a&&s.indexOf(a.id)!==-1?(a.graphic&&a.graphic.hide(),a.dataLabel&&a.dataLabel.hide()):a&&a.destroy&&a.destroy()})}function Xt(i){let r=!1,s;return!!tt(i)&&(pt(i,function(a){if(r=!0,!F(a)||!a.length){r=!1;return}for(s=0;s<a.length;s++)if(!tt(a[s])||!a[s].x||!a[s].y){r=!1;return}}),r)}function Pt(i){let[r,s]=i.key.split("-").map(parseFloat),a=i.gridSize,t=i.groupedData,h=i.defaultRadius,d=i.clusterRadius,u=s*a,n=r*a,l=W(this,i),o=[],p=(this.options.cluster||{}).marker,x=(this.options.cluster||{}).zones,f=this.getGridOffset(),C=l.x,c=l.y,e=0,k=0,D,S,A,m,g,L,I,z,q,H,Z,j,N;for(C-=f.plotLeft,c-=f.plotTop,I=1;I<5;I++)for(z=0,A=I%2?-1:1,m=I<3?-1:1,g=Math.floor((C+A*d)/a),N=[(L=Math.floor((c+m*d)/a))+"-"+g,L+"-"+s,r+"-"+g];z<N.length;z++)o.indexOf(N[z])===-1&&N[z]!==i.key&&o.push(N[z]);for(let R of o)if(t[R]){t[R].posX||(Z=G(t[R]),t[R].posX=Z.x,t[R].posY=Z.y);let ht=W(this,{x:t[R].posX||0,y:t[R].posY||0});if(D=ht.x-f.plotLeft,S=ht.y-f.plotTop,[H,q]=R.split("-").map(parseFloat),x)for(I=0,e=t[R].length;I<x.length;I++)e>=x[I].from&&e<=x[I].to&&(k=X((x[I].marker||{}).radius)?x[I].marker.radius||0:p&&p.radius?p.radius:O.marker.radius);t[R].length>1&&k===0&&p&&p.radius?k=p.radius:t[R].length===1&&(k=h),j=d+k,k=0,q!==s&&Math.abs(C-D)<j&&(C=q-s<0?u+d:u+a-d),H!==r&&Math.abs(c-S)<j&&(c=H-r<0?n+d:n+a-d)}let at=rt(this,{x:C+f.plotLeft,y:c+f.plotTop});return t[i.key].posX=at.x,t[i.key].posY=at.y,at}function W(i,r){let{chart:s,xAxis:a,yAxis:t}=i;return s.mapView?s.mapView.projectedUnitsToPixels(r):{x:a?a.toPixels(r.x):0,y:t?t.toPixels(r.y):0}}return{compose:function(i,r){let s=r.prototype;s.markerClusterAlgorithms||(V=s.generatePoints,s.markerClusterAlgorithms=ut,s.animateClusterPoint=gt,s.destroyClusteredData=xt,s.generatePoints=yt,s.getClusterDistancesFromPoint=Ct,s.getClusteredData=kt,s.getGridOffset=Mt,s.getPointsState=It,s.getRealExtremes=bt,s.getScaledGridSize=St,s.hideClusteredData=At,s.isValidGroupedDataObject=Xt,s.preventClusterCollisions=Pt,w(r,"destroy",s.destroyClusteredData),(i.plotOptions||{}).series=et((i.plotOptions||{}).series,Y))}}}),v(b,"Extensions/MarkerClusters/MarkerClusters.js",[b["Core/Animation/AnimationUtilities.js"],b["Core/Defaults.js"],b["Core/Globals.js"],b["Extensions/MarkerClusters/MarkerClusterDefaults.js"],b["Extensions/MarkerClusters/MarkerClusterScatter.js"],b["Core/Utilities.js"]],function(M,Y,E,V,J,O){let{animObject:w}=M,{defaultOptions:X}=Y,{composed:Q}=E,{addEvent:F,defined:ot,error:tt,isFunction:B,merge:et,pushUnique:pt,syncTimeout:nt}=O;function it(){let P=this.chart,y=0;for(let G of P.series)G.markerClusterInfo&&(y=w((G.options.cluster||{}).animation).duration||0);nt(()=>{P.tooltip&&P.tooltip.destroy()},y)}function ut(){var P;for(let y of this.series||[])if(y.markerClusterInfo){let G=y.options.cluster,U=((y.markerClusterInfo||{}).pointsState||{}).oldState;if((G||{}).animation&&y.markerClusterInfo&&(((P=y.chart.pointer)==null?void 0:P.pinchDown)||[]).length===0&&((y.xAxis||{}).eventArgs||{}).trigger!=="pan"&&U&&Object.keys(U).length){for(let _ of y.markerClusterInfo.clusters)y.animateClusterPoint(_);for(let _ of y.markerClusterInfo.noise)y.animateClusterPoint(_)}}}function K(P){let y=(((P.point||P.target).series.options.cluster||{}).events||{}).drillToCluster;B(y)&&y.call(this,P)}function dt(){if(this.dataGroup)return tt("Highcharts marker-clusters module: Running `Point.update` when point belongs to clustered series is not supported.",!1,this.series.chart),!1}function lt(){let P=(this.options.cluster||{}).drillToCluster;if(this.markerClusterInfo&&this.markerClusterInfo.clusters)for(let y of this.markerClusterInfo.clusters)y.point&&y.point.graphic&&(y.point.graphic.addClass("highcharts-cluster-point"),P&&y.point&&(y.point.graphic.css({cursor:"pointer"}),y.point.dataLabel&&y.point.dataLabel.css({cursor:"pointer"})),ot(y.clusterZone)&&y.point.graphic.addClass(y.clusterZoneClassName||"highcharts-cluster-zone-"+y.clusterZone.zoneIndex))}return(X.plotOptions||{}).series=et((X.plotOptions||{}).series,V),{compose:function(P,y,G,U){if(pt(Q,"MarkerClusters")){let _=U.prototype.pointClass,{scatter:st}=U.types;F(P,"setExtremes",it),F(y,"render",ut),F(_,"drillToCluster",K),F(_,"update",dt),F(U,"afterRender",lt),st&&J.compose(G,st)}}}}),v(b,"Extensions/MarkerClusters/MarkerClusterSymbols.js",[],function(){let M;function Y(E,V,J,O){let w=J/2,X=O/2,Q=M.arc(E+w,V+X,w-4,X-4,{start:.5*Math.PI,end:2.5*Math.PI,open:!1}),F=M.arc(E+w,V+X,w-3,X-3,{start:.5*Math.PI,end:2.5*Math.PI,innerR:w-2,open:!1});return M.arc(E+w,V+X,w-1,X-1,{start:.5*Math.PI,end:2.5*Math.PI,innerR:w,open:!1}).concat(F,Q)}return{compose:function(E){(M=E.prototype.symbols).cluster=Y}}}),v(b,"masters/modules/marker-clusters.src.js",[b["Core/Globals.js"],b["Extensions/MarkerClusters/MarkerClusters.js"],b["Extensions/MarkerClusters/MarkerClusterSymbols.js"]],function(M,Y,E){return Y.compose(M.Axis,M.Chart,M.defaultOptions,M.Series),E.compose(M.SVGRenderer),M})})})(ct);var ft=ct.exports;const Lt=Yt(ft),jt=Dt({__proto__:null,default:Lt},[ft]);export{jt as m};
