import{aE as ae}from"./DgWlP6BF.js";function se(H,U){for(var s=0;s<U.length;s++){const A=U[s];if(typeof A!="string"&&!Array.isArray(A)){for(const l in A)if(l!=="default"&&!(l in H)){const b=Object.getOwnPropertyDescriptor(A,l);b&&Object.defineProperty(H,l,b.get?b:{enumerable:!0,get:()=>A[l]})}}}return Object.freeze(Object.defineProperty(H,Symbol.toStringTag,{value:"Module"}))}var X={exports:{}};(function(H){(function(U){H.exports?(U.default=U,H.exports=U):U(typeof Highcharts<"u"?Highcharts:void 0)})(function(U){var s=U?U._modules:{};function A(l,b,c,P){l.hasOwnProperty(b)||(l[b]=P.apply(null,c),typeof CustomEvent=="function"&&U.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,module:l[b]}})))}A(s,"Extensions/DownloadURL.js",[s["Core/Globals.js"]],function(l){let{isSafari:b,win:c,win:{document:P}}=l,I=c.URL||c.webkitURL||c;function T(h){let F=h.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([A-Z+\d\/]+)/i);if(F&&F.length>3&&c.atob&&c.ArrayBuffer&&c.Uint8Array&&c.Blob&&I.createObjectURL){let B=c.atob(F[3]),S=new c.ArrayBuffer(B.length),k=new c.Uint8Array(S);for(let D=0;D<k.length;++D)k[D]=B.charCodeAt(D);return I.createObjectURL(new c.Blob([k],{type:F[1]}))}}return{dataURLtoBlob:T,downloadURL:function(h,F){let B=c.navigator,S=P.createElement("a");if(typeof h!="string"&&!(h instanceof String)&&B.msSaveOrOpenBlob){B.msSaveOrOpenBlob(h,F);return}if(h=""+h,B.userAgent.length>1e3)throw Error("Input too long");let k=/Edge\/\d+/.test(B.userAgent);if((b&&typeof h=="string"&&h.indexOf("data:application/pdf")===0||k||h.length>2e6)&&!(h=T(h)||""))throw Error("Failed to convert to blob");if(S.download!==void 0)S.href=h,S.download=F,P.body.appendChild(S),S.click(),P.body.removeChild(S);else try{if(!c.open(h,"chart"))throw Error("Failed to open window")}catch{c.location.href=h}}}}),A(s,"Extensions/OfflineExporting/OfflineExportingDefaults.js",[],function(){return{libURL:"https://code.highcharts.com/11.4.7/lib/",menuItemDefinitions:{downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChartLocal({type:"application/pdf"})}}}}}),A(s,"Extensions/OfflineExporting/OfflineExporting.js",[s["Core/Renderer/HTML/AST.js"],s["Core/Chart/Chart.js"],s["Core/Defaults.js"],s["Extensions/DownloadURL.js"],s["Extensions/Exporting/Exporting.js"],s["Core/Globals.js"],s["Core/HttpUtilities.js"],s["Extensions/OfflineExporting/OfflineExportingDefaults.js"],s["Core/Utilities.js"]],function(l,b,c,P,I,T,h,F,B){var S;let{defaultOptions:k}=c,{downloadURL:D}=P,{doc:z,win:y}=T,{ajax:ee}=h,{addEvent:te,error:q,extend:oe,fireEvent:ne,merge:K}=B;return l.allowedAttributes.push("data-z-index","fill-opacity","filter","rx","ry","stroke-dasharray","stroke-linejoin","stroke-opacity","text-anchor","transform","version","viewBox","visibility","xmlns","xmlns:xlink"),l.allowedTags.push("desc","clippath","g"),function(E){function re(t,n){let o=this,e=K(o.options.exporting,t),f=function(a){e.fallbackToExportServer===!1?e.error?e.error(e,a):q(28,!0):o.exportChart(e)};if(T.isMS&&o.styledMode&&!I.inlineAllowlist.length&&I.inlineAllowlist.push(/^blockSize/,/^border/,/^caretColor/,/^color/,/^columnRule/,/^columnRuleColor/,/^cssFloat/,/^cursor/,/^fill$/,/^fillOpacity/,/^font/,/^inlineSize/,/^length/,/^lineHeight/,/^opacity/,/^outline/,/^parentRule/,/^rx$/,/^ry$/,/^stroke/,/^textAlign/,/^textAnchor/,/^textDecoration/,/^transform/,/^vectorEffect/,/^visibility/,/^x$/,/^y$/),T.isMS&&(e.type==="application/pdf"||o.container.getElementsByTagName("image").length&&e.type!=="image/svg+xml")||e.type==="application/pdf"&&[].some.call(o.container.getElementsByTagName("image"),function(a){let x=a.getAttribute("href");return x!==""&&typeof x=="string"&&x.indexOf("data:")!==0})){f(Error("Image type not supported for this chart/browser."));return}o.getSVGForLocalExport(e,n||{},f,function(a){a.indexOf("<foreignObject")>-1&&e.type!=="image/svg+xml"&&(T.isMS||e.type==="application/pdf")?f(Error("Image type not supported for charts with embedded HTML")):E.downloadSVGLocal(a,oe({filename:o.getFilename()},e),f,()=>ne(o,"exportChartLocalSuccess"))})}function $(t,n){let o=z.getElementsByTagName("head")[0],e=z.createElement("script");e.type="text/javascript",e.src=t,e.onload=n,e.onerror=function(){q("Error loading script "+t)},o.appendChild(e)}function ie(t,n,o,e){let f=this,a=d=>f.sanitizeSVG(d,w),x=()=>{L&&C===j&&e(a(i.innerHTML))},R=(d,u,O)=>{++C,O.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",d),x()},r,i,w,v=null,L,j=0,C=0;f.unbindGetSVG=te(f,"getSVG",d=>{w=d.chartCopy.options,j=(L=(i=d.chartCopy.container.cloneNode(!0))&&i.getElementsByTagName("image")||[]).length}),f.getSVGForExport(t,n);try{if(!L||!L.length){e(a(i.innerHTML));return}for(let d=0;d<L.length;d++)(v=(r=L[d]).getAttributeNS("http://www.w3.org/1999/xlink","href"))?E.imageToDataUrl(v,"image/png",{imageElement:r},t.scale,R,o,o,o):(C++,r.parentNode.removeChild(r),d--,x())}catch(d){o(d)}f.unbindGetSVG()}function J(t,n,o,e,f,a,x,R,r){let i=new y.Image,w,v=()=>{setTimeout(function(){let j,C=z.createElement("canvas"),d=C.getContext&&C.getContext("2d");try{if(d){C.height=i.height*e,C.width=i.width*e,d.drawImage(i,0,0,C.width,C.height);try{j=C.toDataURL(n),f(j,n,o,e)}catch{w(t,n,o,e)}}else x(t,n,o,e)}finally{r&&r(t,n,o,e)}},E.loadEventDeferDelay)},L=()=>{R(t,n,o,e),r&&r(t,n,o,e)};w=()=>{i=new y.Image,w=a,i.crossOrigin="Anonymous",i.onload=v,i.onerror=L,i.src=t},i.onload=v,i.onerror=L,i.src=t}function _(t){let n=y.navigator.userAgent,o=n.indexOf("WebKit")>-1&&0>n.indexOf("Chrome");try{if(!o&&t.indexOf("<foreignObject")===-1)return E.domurl.createObjectURL(new y.Blob([t],{type:"image/svg+xml;charset-utf-16"}))}catch{}return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(t)}function W(t,n,o,e){let f=(Number(t.getAttribute("width"))+2*n)*o,a=(Number(t.getAttribute("height"))+2*n)*o,x=new y.jspdf.jsPDF(a>f?"p":"l","pt",[f,a]);[].forEach.call(t.querySelectorAll('*[visibility="hidden"]'),function(r){r.parentNode.removeChild(r)});let R=t.querySelectorAll("linearGradient");for(let r=0;r<R.length;r++){let i=R[r].querySelectorAll("stop"),w=0;for(;w<i.length&&i[w].getAttribute("offset")==="0"&&i[w+1].getAttribute("offset")==="0";)i[w].remove(),w++}[].forEach.call(t.querySelectorAll("tspan"),r=>{r.textContent==="​"&&(r.textContent=" ",r.setAttribute("dx",-5))}),x.svg(t,{x:0,y:0,width:f,height:a,removeInvalid:!0}).then(()=>e(x.output("datauristring")))}E.CanVGRenderer={},E.domurl=y.URL||y.webkitURL||y,E.loadEventDeferDelay=T.isMS?150:0,E.compose=function(t){let n=t.prototype;return n.exportChartLocal||(n.getSVGForLocalExport=ie,n.exportChartLocal=re,K(!0,k.exporting,F)),t},E.downloadSVGLocal=function(t,n,o,e){let f=z.createElement("div"),a=n.type||"image/png",x=(n.filename||"chart")+"."+(a==="image/svg+xml"?"svg":a.split("/")[1]),R=n.scale||1,r,i,w,v=n.libURL||k.exporting.libURL,L=!0,j=n.pdfFont;v=v.slice(-1)!=="/"?v+"/":v;let C=(u,O)=>{let N,V,M=(g,G)=>{y.jspdf.jsPDF.API.events.push(["initialized",function(){this.addFileToVFS(g,G),this.addFont(g,"HighchartsFont",g),this.getFontList().HighchartsFont||this.setFont("HighchartsFont")}])};j&&(V=u.textContent||"",!/[^\u0000-\u007F\u200B]+/.test(V))&&(j=void 0);let m=["normal","italic","bold","bolditalic"],p=()=>{let g=m.shift();if(!g)return O();let G=j&&j[g];G?ee({url:G,responseType:"blob",success:(fe,le)=>{let Z=new FileReader;Z.onloadend=function(){if(typeof this.result=="string"){let Q=this.result.split(",")[1];M(g,Q),g==="normal"&&(N=Q)}p()},Z.readAsDataURL(le.response)},error:p}):(N&&M(g,N),p())};p()},d=()=>{let u,O;l.setElementHTML(f,t);let N=f.getElementsByTagName("text"),V=function(m,p){let g=m;for(;g&&g!==f;){if(g.style[p]){let G=g.style[p];p==="fontSize"&&/em$/.test(G)&&(G=Math.round(16*parseFloat(G))+"px"),m.style[p]=G;break}g=g.parentNode}};[].forEach.call(N,function(m){for(["fontFamily","fontSize"].forEach(p=>{V(m,p)}),m.style.fontFamily=j&&j.normal?"HighchartsFont":String(m.style.fontFamily&&m.style.fontFamily.split(" ").splice(-1)),u=m.getElementsByTagName("title"),[].forEach.call(u,function(p){m.removeChild(p)}),O=m.getElementsByClassName("highcharts-text-outline");O.length>0;)m.removeChild(O[0])});let M=f.querySelector("svg");M&&C(M,()=>{W(M,0,R,m=>{try{D(m,x),e&&e()}catch(p){o(p)}})})};if(a==="image/svg+xml")try{y.MSBlobBuilder!==void 0?((i=new y.MSBlobBuilder).append(t),r=i.getBlob("image/svg+xml")):r=_(t),D(r,x),e&&e()}catch(u){o(u)}else a==="application/pdf"?y.jspdf&&y.jspdf.jsPDF?d():(L=!0,$(v+"jspdf.js",function(){$(v+"svg2pdf.js",d)})):(r=_(t),w=function(){try{E.domurl.revokeObjectURL(r)}catch{}},J(r,a,{},R,function(u){try{D(u,x),e&&e()}catch(O){o(O)}},function(){if(t.length>1e8)throw Error("Input too long");let u=z.createElement("canvas"),O=u.getContext("2d"),N=t.match(/^<svg[^>]*\s{,1000}width\s{,1000}=\s{,1000}\"?(\d+)\"?[^>]*>/),V=t.match(/^<svg[^>]*\s{0,1000}height\s{,1000}=\s{,1000}\"?(\d+)\"?[^>]*>/);if(O&&N&&V){let M=+N[1]*R,m=+V[1]*R,p=()=>{y.canvg.Canvg.fromString(O,t).start();try{D(y.navigator.msSaveOrOpenBlob?u.msToBlob():u.toDataURL(a),x),e&&e()}catch(g){o(g)}finally{w()}};u.width=M,u.height=m,y.canvg?p():(L=!0,$(v+"canvg.js",p))}},o,o,function(){L&&w()}))},E.getScript=$,E.imageToDataUrl=J,E.svgToDataUrl=_,E.svgToPdf=W}(S||(S={})),S}),A(s,"masters/modules/offline-exporting.src.js",[s["Core/Globals.js"],s["Extensions/DownloadURL.js"],s["Extensions/OfflineExporting/OfflineExporting.js"]],function(l,b,c){return l.dataURLtoBlob=l.dataURLtoBlob||b.dataURLtoBlob,l.downloadSVGLocal=c.downloadSVGLocal,l.downloadURL=l.downloadURL||b.downloadURL,c.compose(l.Chart),l})})})(X);var Y=X.exports;const ce=ae(Y),pe=se({__proto__:null,default:ce},[Y]);export{pe as o};
