import{aE as Ct}from"./DgWlP6BF.js";function At(X,O){for(var m=0;m<O.length;m++){const R=O[m];if(typeof R!="string"&&!Array.isArray(R)){for(const p in R)if(p!=="default"&&!(p in X)){const w=Object.getOwnPropertyDescriptor(R,p);w&&Object.defineProperty(X,p,w.get?w:{enumerable:!0,get:()=>R[p]})}}}return Object.freeze(Object.defineProperty(X,Symbol.toStringTag,{value:"Module"}))}var dt={exports:{}};(function(X){(function(O){X.exports?(O.default=O,X.exports=O):O(typeof Highcharts<"u"?Highcharts:void 0)})(function(O){var m=O?O._modules:{};function R(p,w,f,W){p.hasOwnProperty(w)||(p[w]=W.apply(null,f),typeof CustomEvent=="function"&&O.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:w,module:p[w]}})))}R(m,"Extensions/DownloadURL.js",[m["Core/Globals.js"]],function(p){let{isSafari:w,win:f,win:{document:W}}=p,J=f.URL||f.webkitURL||f;function Q(y){let V=y.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([A-Z+\d\/]+)/i);if(V&&V.length>3&&f.atob&&f.ArrayBuffer&&f.Uint8Array&&f.Blob&&J.createObjectURL){let k=f.atob(V[3]),j=new f.ArrayBuffer(k.length),v=new f.Uint8Array(j);for(let B=0;B<v.length;++B)v[B]=k.charCodeAt(B);return J.createObjectURL(new f.Blob([v],{type:V[1]}))}}return{dataURLtoBlob:Q,downloadURL:function(y,V){let k=f.navigator,j=W.createElement("a");if(typeof y!="string"&&!(y instanceof String)&&k.msSaveOrOpenBlob){k.msSaveOrOpenBlob(y,V);return}if(y=""+y,k.userAgent.length>1e3)throw Error("Input too long");let v=/Edge\/\d+/.test(k.userAgent);if((w&&typeof y=="string"&&y.indexOf("data:application/pdf")===0||v||y.length>2e6)&&!(y=Q(y)||""))throw Error("Failed to convert to blob");if(j.download!==void 0)j.href=y,j.download=V,W.body.appendChild(j),j.click(),W.body.removeChild(j);else try{if(!f.open(y,"chart"))throw Error("Failed to open window")}catch{f.location.href=y}}}}),R(m,"Extensions/ExportData/ExportDataDefaults.js",[],function(){return{exporting:{csv:{annotations:{itemDelimiter:"; ",join:!1},columnHeaderFormatter:null,dateFormat:"%Y-%m-%d %H:%M:%S",decimalPoint:null,itemDelimiter:null,lineDelimiter:`
`},showTable:!1,useMultiLevelHeaders:!0,useRowspanHeaders:!0,showExportInProgress:!0},lang:{downloadCSV:"Download CSV",downloadXLS:"Download XLS",exportData:{annotationHeader:"Annotations",categoryHeader:"Category",categoryDatetimeHeader:"DateTime"},viewData:"View data table",hideData:"Hide data table",exportInProgress:"Exporting..."}}}),R(m,"Extensions/ExportData/ExportData.js",[m["Core/Renderer/HTML/AST.js"],m["Core/Defaults.js"],m["Extensions/DownloadURL.js"],m["Extensions/ExportData/ExportDataDefaults.js"],m["Core/Globals.js"],m["Core/Utilities.js"]],function(p,w,f,W,J,Q){let{getOptions:y,setOptions:V}=w,{downloadURL:k}=f,{doc:j,win:v}=J,{addEvent:B,defined:pt,extend:st,find:ut,fireEvent:tt,isNumber:ft,pick:F}=Q;function nt(o){var a;let s=!!((a=this.options.exporting)!=null&&a.showExportInProgress),e=v.requestAnimationFrame||setTimeout;e(()=>{s&&this.showLoading(this.options.lang.exportInProgress),e(()=>{try{o.call(this)}finally{s&&this.hideLoading()}})})}function gt(){nt.call(this,()=>{let o=this.getCSV(!0);k(lt(o,"text/csv")||"data:text/csv,\uFEFF"+encodeURIComponent(o),this.getFilename()+".csv")})}function mt(){nt.call(this,()=>{let o='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Ark1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";} .text{ mso-number-format:"@";}</style><meta name=ProgId content=Excel.Sheet><meta charset=UTF-8></head><body>'+this.getTable(!0)+"</body></html>";k(lt(o,"application/vnd.ms-excel")||"data:application/vnd.ms-excel;base64,"+v.btoa(unescape(encodeURIComponent(o))),this.getFilename()+".xls")})}function xt(o){let s="",e=this.getDataRows(),a=this.options.exporting.csv,r=F(a.decimalPoint,a.itemDelimiter!==","&&o?1.1.toLocaleString()[1]:"."),i=F(a.itemDelimiter,r===","?";":","),l=a.lineDelimiter;return e.forEach((n,u)=>{let c="",T=n.length;for(;T--;)typeof(c=n[T])=="string"&&(c=`"${c}"`),typeof c=="number"&&r!=="."&&(c=c.toString().replace(".",r)),n[T]=c;n.length=e.length?e[0].length:0,s+=n.join(i),u<e.length-1&&(s+=l)}),s}function bt(o){let s,e,a=this.hasParallelCoordinates,r=this.time,i=this.options.exporting&&this.options.exporting.csv||{},l=this.xAxis,n={},u=[],c=[],T=[],q=this.options.lang.exportData,G=q.categoryHeader,x=q.categoryDatetimeHeader,d=function(t,D,S){if(i.columnHeaderFormatter){let L=i.columnHeaderFormatter(t,D,S);if(L!==!1)return L}return t?t.bindAxes?o?{columnTitle:S>1?D:t.name,topLevelColumnTitle:t.name}:t.name+(S>1?" ("+D+")":""):t.options.title&&t.options.title.text||(t.dateTime?x:G):G},b=function(t,D,S){let L={},z={};return D.forEach(function(P){let _=(t.keyToAxis&&t.keyToAxis[P]||P)+"Axis",$=ft(S)?t.chart[_][S]:t[_];L[P]=$&&$.categories||[],z[P]=$&&$.dateTime}),{categoryMap:L,dateTimeValueAxisMap:z}},I=function(t,D){let S=t.pointArrayMap||["y"];return t.data.some(L=>L.y!==void 0&&L.name)&&D&&!D.categories&&t.exportKey!=="name"?["x",...S]:S},h=[],E,A,N,C=0,U,M;for(U in this.series.forEach(function(t){let D=t.options.keys,S=t.xAxis,L=D||I(t,S),z=L.length,P=!t.requireSorting&&{},_=l.indexOf(S),$=b(t,L),ct,H;if(t.options.includeInDataExport!==!1&&!t.options.isInternal&&t.visible!==!1){for(ut(h,function(it){return it[0]===_})||h.push([_,C]),H=0;H<z;)N=d(t,L[H],L.length),T.push(N.columnTitle||N),o&&c.push(N.topLevelColumnTitle||N),H++;ct={chart:t.chart,autoIncrement:t.autoIncrement,options:t.options,pointArrayMap:t.pointArrayMap,index:t.index},t.options.data.forEach(function(it,et){let g,rt,ot,Y={series:ct};a&&($=b(t,L,et)),t.pointClass.prototype.applyOptions.apply(Y,[it]);let at=t.data[et]&&t.data[et].name;if(g=(Y.x??"")+","+at,H=0,(!S||t.exportKey==="name"||!a&&S&&S.hasNames&&at)&&(g=at),P&&(P[g]&&(g+="|"+et),P[g]=!0),n[g]){let K=`${g},${n[g].pointers[t.index]}`,Z=g;n[g].pointers[t.index]&&(n[K]||(n[K]=[],n[K].xValues=[],n[K].pointers=[]),g=K),n[Z].pointers[t.index]+=1}else{n[g]=[],n[g].xValues=[];let K=[];for(let Z=0;Z<t.chart.series.length;Z++)K[Z]=0;n[g].pointers=K,n[g].pointers[t.index]=1}for(n[g].x=Y.x,n[g].name=at,n[g].xValues[_]=Y.x;H<z;)ot=Y[rt=L[H]],n[g][C+H]=F($.categoryMap[rt][ot],$.dateTimeValueAxisMap[rt]?r.dateFormat(i.dateFormat,ot):null,ot),H++}),C+=H}}),n)Object.hasOwnProperty.call(n,U)&&u.push(n[U]);for(A=o?[c,T]:[T],C=h.length;C--;)s=h[C][0],e=h[C][1],E=l[s],u.sort(function(t,D){return t.xValues[s]-D.xValues[s]}),M=d(E),A[0].splice(e,0,M),o&&A[1]&&A[1].splice(e,0,M),u.forEach(function(t){let D=t.name;E&&!pt(D)&&(E.dateTime?(t.x instanceof Date&&(t.x=t.x.getTime()),D=r.dateFormat(i.dateFormat,t.x)):D=E.categories?F(E.names[t.x],E.categories[t.x],t.x):t.x),t.splice(e,0,D)});return tt(this,"exportData",{dataRows:A=A.concat(u)}),A}function yt(o){let s=e=>{if(!e.tagName||e.tagName==="#text")return e.textContent||"";let a=e.attributes,r=`<${e.tagName}`;return a&&Object.keys(a).forEach(i=>{let l=a[i];r+=` ${i}="${l}"`}),r+=">"+(e.textContent||""),(e.children||[]).forEach(i=>{r+=s(i)}),r+=`</${e.tagName}>`};return s(this.getTableAST(o))}function Dt(o){let s=0,e=[],a=this.options,r=o?1.1.toLocaleString()[1]:".",i=F(a.exporting.useMultiLevelHeaders,!0),l=this.getDataRows(i),n=i?l.shift():null,u=l.shift(),c=function(x,d){let b=x.length;if(d.length!==b)return!1;for(;b--;)if(x[b]!==d[b])return!1;return!0},T=function(x,d,b,I){let h=F(I,""),E="highcharts-text"+(d?" "+d:"");return typeof h=="number"?(h=h.toString(),r===","&&(h=h.replace(".",r)),E="highcharts-number"):I||(E="highcharts-empty"),{tagName:x,attributes:b=st({class:E},b),textContent:h}};a.exporting.tableCaption!==!1&&e.push({tagName:"caption",attributes:{class:"highcharts-table-caption"},textContent:F(a.exporting.tableCaption,a.title.text?a.title.text:"Chart")});for(let x=0,d=l.length;x<d;++x)l[x].length>s&&(s=l[x].length);e.push(function(x,d,b){let I=[],h=0,E=b||d&&d.length,A,N=0,C;if(i&&x&&d&&!c(x,d)){let U=[];for(;h<E;++h)if((A=x[h])===x[h+1])++N;else if(N)U.push(T("th","highcharts-table-topheading",{scope:"col",colspan:N+1},A)),N=0;else{A===d[h]?a.exporting.useRowspanHeaders?(C=2,delete d[h]):(C=1,d[h]=""):C=1;let M=T("th","highcharts-table-topheading",{scope:"col"},A);C>1&&M.attributes&&(M.attributes.valign="top",M.attributes.rowspan=C),U.push(M)}I.push({tagName:"tr",children:U})}if(d){let U=[];for(h=0,E=d.length;h<E;++h)d[h]!==void 0&&U.push(T("th",null,{scope:"col"},d[h]));I.push({tagName:"tr",children:U})}return{tagName:"thead",children:I}}(n,u,Math.max(s,u.length)));let q=[];l.forEach(function(x){let d=[];for(let b=0;b<s;b++)d.push(T(b?"td":"th",null,b?{}:{scope:"row"},x[b]));q.push({tagName:"tr",children:d})}),e.push({tagName:"tbody",children:q});let G={tree:{tagName:"table",id:`highcharts-data-table-${this.index}`,children:e}};return tt(this,"aftergetTableAST",G),G.tree}function wt(){this.toggleDataTable(!1)}function vt(o){let s=(o=F(o,!this.isDataTableVisible))&&!this.dataTableDiv;if(s&&(this.dataTableDiv=j.createElement("div"),this.dataTableDiv.className="highcharts-data-table",this.renderTo.parentNode.insertBefore(this.dataTableDiv,this.renderTo.nextSibling)),this.dataTableDiv){let l=this.dataTableDiv.style,n=l.display;l.display=o?"block":"none",o?(this.dataTableDiv.innerHTML=p.emptyHTML,new p([this.getTableAST()]).addToDOM(this.dataTableDiv),tt(this,"afterViewData",{element:this.dataTableDiv,wasHidden:s||n!==l.display})):tt(this,"afterHideData")}this.isDataTableVisible=o;let e=this.exportDivElements,a=this.options.exporting,r=a&&a.buttons&&a.buttons.contextButton.menuItems,i=this.options.lang;if(a&&a.menuItemDefinitions&&i&&i.viewData&&i.hideData&&r&&e){let l=e[r.indexOf("viewData")];l&&p.setElementHTML(l,this.isDataTableVisible?i.hideData:i.viewData)}}function Tt(){this.toggleDataTable(!0)}function lt(o,s){let e=v.navigator,a=v.URL||v.webkitURL||v;try{if(e.msSaveOrOpenBlob&&v.MSBlobBuilder){let r=new v.MSBlobBuilder;return r.append(o),r.getBlob("image/svg+xml")}return a.createObjectURL(new v.Blob(["\uFEFF"+o],{type:s}))}catch{}}function Et(){let o=this,s=o.dataTableDiv,e=(r,i)=>r.children[i].textContent,a=(r,i)=>(l,n)=>{let u,c;return u=e(i?l:n,r),c=e(i?n:l,r),u===""||c===""||isNaN(u)||isNaN(c)?u.toString().localeCompare(c):u-c};if(s&&o.options.exporting&&o.options.exporting.allowTableSorting){let r=s.querySelector("thead tr");r&&r.childNodes.forEach(i=>{let l=i.closest("table");i.addEventListener("click",function(){let n=[...s.querySelectorAll("tr:not(thead tr)")],u=[...i.parentNode.children];n.sort(a(u.indexOf(i),o.ascendingOrderInTable=!o.ascendingOrderInTable)).forEach(c=>{l.appendChild(c)}),u.forEach(c=>{["highcharts-sort-ascending","highcharts-sort-descending"].forEach(T=>{c.classList.contains(T)&&c.classList.remove(T)})}),i.classList.add(o.ascendingOrderInTable?"highcharts-sort-ascending":"highcharts-sort-descending")})})}}function St(){this.options&&this.options.exporting&&this.options.exporting.showTable&&!this.options.chart.forExport&&this.viewData()}function Lt(){var o;(o=this.dataTableDiv)==null||o.remove()}return{compose:function(o,s){let e=o.prototype;if(!e.getCSV){let a=y().exporting;B(o,"afterViewData",Et),B(o,"render",St),B(o,"destroy",Lt),e.downloadCSV=gt,e.downloadXLS=mt,e.getCSV=xt,e.getDataRows=bt,e.getTable=yt,e.getTableAST=Dt,e.hideData=wt,e.toggleDataTable=vt,e.viewData=Tt,a&&(st(a.menuItemDefinitions,{downloadCSV:{textKey:"downloadCSV",onclick:function(){this.downloadCSV()}},downloadXLS:{textKey:"downloadXLS",onclick:function(){this.downloadXLS()}},viewData:{textKey:"viewData",onclick:function(){nt.call(this,this.toggleDataTable)}}}),a.buttons&&a.buttons.contextButton.menuItems&&a.buttons.contextButton.menuItems.push("separator","downloadCSV","downloadXLS","viewData")),V(W);let{arearange:r,gantt:i,map:l,mapbubble:n,treemap:u,xrange:c}=s.types;r&&(r.prototype.keyToAxis={low:"y",high:"y"}),i&&(i.prototype.exportKey="name",i.prototype.keyToAxis={start:"x",end:"x"}),l&&(l.prototype.exportKey="name"),n&&(n.prototype.exportKey="name"),u&&(u.prototype.exportKey="name"),c&&(c.prototype.keyToAxis={x2:"x"})}}}}),R(m,"masters/modules/export-data.src.js",[m["Core/Globals.js"],m["Extensions/DownloadURL.js"],m["Extensions/ExportData/ExportData.js"]],function(p,w,f){return p.dataURLtoBlob=p.dataURLtoBlob||w.dataURLtoBlob,p.downloadURL=p.downloadURL||w.downloadURL,f.compose(p.Chart,p.Series),p})})})(dt);var ht=dt.exports;const Ot=Ct(ht),kt=At({__proto__:null,default:Ot},[ht]);export{kt as e};
