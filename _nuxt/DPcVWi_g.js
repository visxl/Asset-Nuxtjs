import{aK as ot}from"./BAjYNYKW.js";function nt(G,F){for(var Y=0;Y<F.length;Y++){const S=F[Y];if(typeof S!="string"&&!Array.isArray(S)){for(const y in S)if(y!=="default"&&!(y in G)){const j=Object.getOwnPropertyDescriptor(S,y);j&&Object.defineProperty(G,y,j.get?j:{enumerable:!0,get:()=>S[y]})}}}return Object.freeze(Object.defineProperty(G,Symbol.toStringTag,{value:"Module"}))}var st={exports:{}};(function(G){(function(F){G.exports?(F.default=F,G.exports=F):F(typeof Highcharts<"u"?Highcharts:void 0)})(function(F){var Y=F?F._modules:{};function S(y,j,P,V){y.hasOwnProperty(j)||(y[j]=V.apply(null,P),typeof CustomEvent=="function"&&F.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:j,module:y[j]}})))}S(Y,"Core/HttpUtilities.js",[Y["Core/Globals.js"],Y["Core/Utilities.js"]],function(y,j){let{win:P}=y,{discardElement:V,objectEach:K}=j,X={ajax:function(v){let L={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"},b=new XMLHttpRequest;function M(U,O){v.error&&v.error(U,O)}if(!v.url)return!1;b.open((v.type||"get").toUpperCase(),v.url,!0),v.headers&&v.headers["Content-Type"]||b.setRequestHeader("Content-Type",L[v.dataType||"json"]||L.text),K(v.headers,function(U,O){b.setRequestHeader(O,U)}),v.responseType&&(b.responseType=v.responseType),b.onreadystatechange=function(){let U;if(b.readyState===4){if(b.status===200){if(v.responseType!=="blob"&&(U=b.responseText,v.dataType==="json"))try{U=JSON.parse(U)}catch(O){if(O instanceof Error)return M(b,O)}return v.success&&v.success(U,b)}M(b,b.responseText)}},v.data&&typeof v.data!="string"&&(v.data=JSON.stringify(v.data)),b.send(v.data)},getJSON:function(v,L){X.ajax({url:v,success:L,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(v,L,b){let M=new P.FormData;K(L,function($,B){M.append(B,$)}),M.append("b64","true");let{filename:U,type:O}=L;return P.fetch(v,{method:"POST",body:M,...b}).then($=>{$.ok&&$.text().then(B=>{let _=document.createElement("a");_.href=`data:${O};base64,${B}`,_.download=U,_.click(),V(_)})})}};return X}),S(Y,"Extensions/Data.js",[Y["Core/Chart/Chart.js"],Y["Core/Defaults.js"],Y["Core/Globals.js"],Y["Core/HttpUtilities.js"],Y["Core/Series/Point.js"],Y["Core/Series/SeriesRegistry.js"],Y["Core/Utilities.js"]],function(y,j,P,V,K,X,v){let{getOptions:L}=j,{doc:b}=P,{ajax:M}=V,{seriesTypes:U}=X,{addEvent:O,defined:$,extend:B,fireEvent:_,isNumber:W,merge:k,objectEach:at,pick:Z,splat:it}=v;function q(I){return!!(I&&(I.rowsURL||I.csvURL||I.columnsURL))}class J{static data(t,s={},r){return new J(t,s,r)}static rowsToColumns(t){let s,r,e,a,o;if(t)for(s=0,o=[],r=t.length;s<r;s++)for(e=0,a=t[s].length;e<a;e++)o[e]||(o[e]=[]),o[e][s]=t[s][e];return o}constructor(t,s={},r){this.rowsToColumns=J.rowsToColumns,this.dateFormats={"YYYY/mm/dd":{regex:/^(\d{4})[\-\/\.](\d{1,2})[\-\/\.](\d{1,2})$/,parser:function(e){return e?Date.UTC(+e[1],e[2]-1,+e[3]):NaN}},"dd/mm/YYYY":{regex:/^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,parser:function(e){return e?Date.UTC(+e[3],e[2]-1,+e[1]):NaN},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,parser:function(e){return e?Date.UTC(+e[3],e[1]-1,+e[2]):NaN}},"dd/mm/YY":{regex:/^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,parser:function(e){if(!e)return NaN;let a=new Date,o=+e[3];return o>a.getFullYear()-2e3?o+=1900:o+=2e3,Date.UTC(o,e[2]-1,+e[1])},alternative:"mm/dd/YY"},"mm/dd/YY":{regex:/^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,parser:function(e){return e?Date.UTC(+e[3]+2e3,e[1]-1,+e[2]):NaN}}},this.chart=r,this.chartOptions=s,this.options=t,this.rawColumns=[],this.init(t,s,r)}init(t,s,r){let e=t.decimalPoint,a;s&&(this.chartOptions=s),r&&(this.chart=r),e!=="."&&e!==","&&(e=void 0),this.options=t,this.columns=t.columns||this.rowsToColumns(t.rows)||[],this.firstRowAsNames=Z(t.firstRowAsNames,this.firstRowAsNames,!0),this.decimalRegex=e&&RegExp("^(-?[0-9]+)"+e+"([0-9]+)$"),this.liveDataTimeout!==void 0&&clearTimeout(this.liveDataTimeout),this.rawColumns=[],this.columns.length&&(this.dataFound(),a=!q(t)),a||(a=this.fetchLiveData()),a||(a=!!this.parseCSV().length),a||(a=!!this.parseTable().length),a||(a=this.parseGoogleSpreadsheet()),!a&&t.afterComplete&&t.afterComplete()}getColumnDistribution(){let t=this.chartOptions,s=this.options,r=[],e=function(h){return(U[h||"line"].prototype.pointArrayMap||[0]).length},a=function(h){return U[h||"line"].prototype.pointArrayMap},o=t&&t.chart&&t.chart.type,i=[],u=[],l=s&&s.seriesMapping||t&&t.series&&t.series.map(function(){return{x:0}})||[],f=0,d;(t&&t.series||[]).forEach(h=>{i.push(e(h.type||o))}),l.forEach(h=>{r.push(h.x||0)}),r.length===0&&r.push(0),l.forEach(h=>{let C=new tt,T=i[f]||e(o),g=(t&&t.series||[])[f]||{},D=a(g.type||o),w=D||["y"];for(($(h.x)||g.isCartesian||!D)&&C.addColumnReader(h.x,"x"),at(h,function(c,R){R!=="x"&&C.addColumnReader(c,R)}),d=0;d<T;d++)C.hasReader(w[d])||C.addColumnReader(void 0,w[d]);u.push(C),f++});let m=a(o);m===void 0&&(m=["y"]),this.valueCount={global:e(o),xColumns:r,individual:i,seriesBuilders:u,globalPointArrayMap:m}}dataFound(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns)),this.getColumnDistribution(),this.parseTypes(),this.parsed()!==!1&&this.complete()}parseCSV(t){let s=this,r=this.columns=[],e=t||this.options,a=e.startColumn!==void 0&&e.startColumn?e.startColumn:0,o=e.endColumn||Number.MAX_VALUE,i=[],u={",":0,";":0,"	":0},l=e.csv,f=e.startRow!==void 0&&e.startRow?e.startRow:0,d=e.endRow||Number.MAX_VALUE,m,h,C=0;if(l&&e.beforeParse&&(l=e.beforeParse.call(this,l)),l){if(h=l.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(e.lineDelimiter||`
`),(!f||f<0)&&(f=0),(!d||d>=h.length)&&(d=h.length-1),e.itemDelimiter)m=e.itemDelimiter;else{let g,D,w;m=null,g=0,D=0,w=!1,h.some(function(c,R){let x=!1,p,E,N,A="";if(R>13)return!0;for(let n=0;n<c.length;n++){if(p=c[n],E=c[n+1],N=c[n-1],p==="#")return;if(p==='"')if(x){if(N!=='"'&&E!=='"'){for(;E===" "&&n<c.length;)E=c[++n];u[E]!==void 0&&u[E]++,x=!1}}else x=!0;else u[p]!==void 0?(isNaN(Date.parse(A=A.trim()))?(isNaN(A)||!isFinite(A))&&u[p]++:u[p]++,A=""):A+=p;p===","&&D++,p==="."&&g++}}),u[";"]>u[","]?w=";":(u[","],u[";"],w=","),e.decimalPoint||(g>D?e.decimalPoint=".":e.decimalPoint=",",s.decimalRegex=RegExp("^(-?[0-9]+)"+e.decimalPoint+"([0-9]+)$")),m=w}let T=0;for(C=f;C<=d;C++)h[C][0]==="#"?T++:function(g,D,w,c){let R=0,x="",p="",E="",N="",A=0,n=0;function z(H){x=g[H],p=g[H-1],E=g[H+1]}function Q(H){i.length<n+1&&i.push([H]),i[n][i[n].length-1]!==H&&i[n].push(H)}function et(){if(a>A||A>o){++A,N="";return}e.columnTypes||(!isNaN(parseFloat(N))&&isFinite(N)?(N=parseFloat(N),Q("number")):isNaN(Date.parse(N))?Q("string"):(N=N.replace(/\//g,"-"),Q("date"))),r.length<n+1&&r.push([]),r[n][D]=N,N="",++n,++A}if(g.trim().length&&g.trim()[0]!=="#"){for(;R<g.length;R++)if(z(R),x==='"')for(z(++R);R<g.length&&(x!=='"'||p==='"'||E==='"');)(x!=='"'||x==='"'&&p!=='"')&&(N+=x),z(++R);else x===m?et():N+=x;et()}}(h[C],C-f-T);(!e.columnTypes||e.columnTypes.length===0)&&i.length&&i[0].length&&i[0][1]==="date"&&!e.dateFormat&&(e.dateFormat=function(g,D){let w="YYYY/mm/dd",c=[],R=[],x,p=[],E,N=0,A=!1,n;for((!D||D>g.length)&&(D=g.length);N<D;N++)if(g[N]!==void 0&&g[N]&&g[N].length)for(n=0,x=g[N].trim().replace(/\//g," ").replace(/\-/g," ").replace(/\./g," ").split(" "),p=["","",""];n<x.length;n++)n<p.length&&(x[n]=parseInt(x[n],10),x[n]&&(R[n]=!R[n]||R[n]<x[n]?x[n]:R[n],c[n]!==void 0?c[n]!==x[n]&&(c[n]=!1):c[n]=x[n],x[n]>31?x[n]<100?p[n]="YY":p[n]="YYYY":x[n]>12&&x[n]<=31?(p[n]="dd",A=!0):p[n].length||(p[n]="mm")));if(A){for(n=0;n<c.length;n++)c[n]!==!1?R[n]>12&&p[n]!=="YY"&&p[n]!=="YYYY"&&(p[n]="YY"):R[n]>12&&p[n]==="mm"&&(p[n]="dd");return p.length===3&&p[1]==="dd"&&p[2]==="dd"&&(p[2]="YY"),E=p.join("/"),(e.dateFormats||s.dateFormats)[E]?E:(_("deduceDateFailed"),w)}return w}(r[0])),this.dataFound()}return r}parseTable(){let t=this.options,s=this.columns||[],r=t.startRow||0,e=t.endRow||Number.MAX_VALUE,a=t.startColumn||0,o=t.endColumn||Number.MAX_VALUE;if(t.table){let i=t.table;typeof i=="string"&&(i=b.getElementById(i)),[].forEach.call(i.getElementsByTagName("tr"),(u,l)=>{l>=r&&l<=e&&[].forEach.call(u.children,(f,d)=>{let m=s[d-a],h=1;if((f.tagName==="TD"||f.tagName==="TH")&&d>=a&&d<=o)for(s[d-a]||(s[d-a]=[]),s[d-a][l-r]=f.innerHTML;l-r>=h&&m[l-r-h]===void 0;)m[l-r-h]=null,h++})}),this.dataFound()}return s}fetchLiveData(){let t=this,s=this.chart,r=this.options,e=r.enablePolling,a=k(r),o=0,i=1e3*(r.dataRefreshRate||2);return!!q(r)&&(i<1e3&&(i=1e3),delete r.csvURL,delete r.rowsURL,delete r.columnsURL,function u(l){function f(d,m,h){if(!d||!/^(http|\/|\.\/|\.\.\/)/.test(d))return d&&r.error&&r.error("Invalid URL"),!1;function C(){e&&s.liveDataURL===d&&(t.liveDataTimeout=setTimeout(u,i))}return l&&(clearTimeout(t.liveDataTimeout),s.liveDataURL=d),M({url:d,dataType:h||"json",success:function(T){s&&s.series&&m(T),C()},error:function(T,g){return++o<3&&C(),r.error&&r.error(g,T)}}),!0}f(a.csvURL,function(d){s.update({data:{csv:d}})},"text")||f(a.rowsURL,function(d){s.update({data:{rows:d}})})||f(a.columnsURL,function(d){s.update({data:{columns:d}})})}(!0),q(r))}parseGoogleSpreadsheet(){let t=this,s=this.options,r=s.googleSpreadsheetKey,e=this.chart,a=Math.max(1e3*(s.dataRefreshRate||2),4e3),o=()=>{if(s.googleSpreadsheetRange)return s.googleSpreadsheetRange;let i="ABCDEFGHIJKLMNOPQRSTUVWXYZ",u=(i.charAt(s.startColumn||0)||"A")+((s.startRow||0)+1),l=i.charAt(Z(s.endColumn,-1))||"ZZ";return $(s.endRow)&&(l+=s.endRow+1),`${u}:${l}`};return r&&(delete s.googleSpreadsheetKey,function i(u){M({url:["https://sheets.googleapis.com/v4/spreadsheets",r,"values",o(),"?alt=json&majorDimension=COLUMNS&valueRenderOption=UNFORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING&key="+s.googleAPIKey].join("/"),dataType:"json",success:function(l){u(l),s.enablePolling&&(t.liveDataTimeout=setTimeout(function(){i(u)},a))},error:function(l,f){return s.error&&s.error(f,l)}})}(function(i){let u=i.values;if(!u||u.length===0)return!1;let l=u.reduce((f,d)=>Math.max(f,d.length),0);u.forEach(f=>{for(let d=0;d<l;d++)f[d]===void 0&&(f[d]=null)}),e&&e.series?e.update({data:{columns:u}}):(t.columns=u,t.dataFound())})),!1}trim(t,s){return typeof t=="string"&&(t=t.replace(/^\s+|\s+$/g,""),s&&/[\d\s]+/.test(t)&&(t=t.replace(/\s/g,"")),this.decimalRegex&&(t=t.replace(this.decimalRegex,"$1.$2"))),t}parseTypes(){let t=this.columns||[],s=t.length;for(;s--;)this.parseColumn(t[s],s)}parseColumn(t,s){let r=this.rawColumns,e=this.columns,a=this.firstRowAsNames,o=this.valueCount.xColumns.indexOf(s)!==-1,i=[],u=this.chartOptions,l=(this.options.columnTypes||[])[s],f=o&&u&&u.xAxis&&it(u.xAxis)[0].type==="category"||l==="string",d=$(t.name),m=t.length,h,C,T,g,D,w,c;for(r[s]||(r[s]=[]);m--;)h=i[m]||t[m],T=this.trim(h),C=parseFloat(g=this.trim(h,!0)),r[s][m]===void 0&&(r[s][m]=T),f||m===0&&a&&!d?t[m]=""+T:+g===C?(t[m]=C,C>31536e6&&l!=="float"?t.isDatetime=!0:t.isNumeric=!0,t[m+1]!==void 0&&(c=C>t[m+1])):(T&&T.length&&(D=this.parseDate(h)),o&&W(D)&&l!=="float"?(i[m]=h,t[m]=D,t.isDatetime=!0,t[m+1]!==void 0&&((w=D>t[m+1])!==c&&c!==void 0&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,m=t.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):t.unsorted=!0),c=w)):(t[m]=T===""?null:T,m!==0&&(t.isDatetime||t.isNumeric)&&(t.mixed=!0)));if(o&&t.mixed&&(e[s]=r[s]),o&&c&&this.options.sort)for(s=0;s<e.length;s++)e[s].reverse(),a&&e[s].unshift(e[s].pop())}parseDate(t){let s=this.options.parseDate,r,e,a,o=this.options.dateFormat||this.dateFormat,i;if(s)r=s(t);else if(typeof t=="string"){if(o)(a=this.dateFormats[o])||(a=this.dateFormats["YYYY/mm/dd"]),(i=t.match(a.regex))&&(r=a.parser(i));else for(e in this.dateFormats)if(a=this.dateFormats[e],i=t.match(a.regex)){this.dateFormat=o=e,this.alternativeFormat=a.alternative,r=a.parser(i);break}!i&&(t.match(/:.+(GMT|UTC|[Z+\-])/)&&(t=t.replace(/\s*(?:GMT|UTC)?([+\-])(\d\d)(\d\d)$/,"$1$2:$3").replace(/(?:\s+|GMT|UTC)([+\-])/,"$1").replace(/(\d)\s*(?:GMT|UTC|Z)$/,"$1+00:00")),typeof(i=Date.parse(t))=="object"&&i!==null&&i.getTime?r=i.getTime()-6e4*i.getTimezoneOffset():W(i)&&(r=i-6e4*new Date(i).getTimezoneOffset()))}return r}getData(){if(this.columns)return this.rowsToColumns(this.columns).slice(1)}parsed(){if(this.options.parsed)return this.options.parsed.call(this,this.columns)}complete(){let t,s,r,e,a,o,i,u,l,f,d,m,h=this.columns,C=this.options,T=[];if(h.length,C.complete||C.afterComplete){if(this.firstRowAsNames)for(e=0;e<h.length;e++){let g=h[e];$(g.name)||(g.name=Z(g.shift(),"").toString())}for(i=0,s=[],f=function(g,D){let w,c,R,x=[],p=[];for(c=0;c<g;c+=1)x.push(!0);for(w=0;w<D.length;w+=1)for(c=0,R=D[w].getReferencedColumnIndexes();c<R.length;c+=1)x[R[c]]=!1;for(c=0;c<x.length;c+=1)x[c]&&p.push(c);return p}(h.length,this.valueCount.seriesBuilders);i<this.valueCount.seriesBuilders.length;i++)(l=this.valueCount.seriesBuilders[i]).populateColumns(f)&&T.push(l);for(;f.length>0;){for((l=new tt).addColumnReader(0,"x"),(m=f.indexOf(0))!==-1&&f.splice(m,1),e=0;e<this.valueCount.global;e++)l.addColumnReader(void 0,this.valueCount.globalPointArrayMap[e]);l.populateColumns(f)&&T.push(l)}if(T.length>0&&T[0].readers.length>0&&(d=h[T[0].readers[0].columnIndex])!==void 0&&(d.isDatetime?t="datetime":d.isNumeric||(t="category")),t==="category")for(i=0;i<T.length;i++)for(o=0,l=T[i];o<l.readers.length;o++)l.readers[o].configName==="x"&&(l.readers[o].configName="name");for(i=0;i<T.length;i++){for(a=0,l=T[i],r=[];a<h[0].length;a++)r[a]=l.read(h,a);s[i]={data:r},l.name&&(s[i].name=l.name),t==="category"&&(s[i].turboThreshold=0)}u={series:s},t&&(u.xAxis={type:t},t==="category"&&(u.xAxis.uniqueNames=!1)),C.complete&&C.complete(u),C.afterComplete&&C.afterComplete(u)}}update(t,s){let r=this.chart,e=r.options;t&&(t.afterComplete=function(a){a&&(a.xAxis&&r.xAxis[0]&&a.xAxis.type===r.xAxis[0].options.type&&delete a.xAxis,r.update(a,s,!0))},k(!0,e.data,t),e.data&&e.data.googleSpreadsheetKey&&!t.columns&&delete e.data.columns,this.init(e.data))}}O(y,"init",function(I){let t=this,s=I.args[1],r=L().data,e=I.args[0]||{};if((r||e&&e.data)&&!t.hasDataDef){t.hasDataDef=!0;let a=k(r,e.data);t.data=new J(B(a,{afterComplete:function(o){let i,u;if(Object.hasOwnProperty.call(e,"series"))if(typeof e.series=="object")for(i=Math.max(e.series.length,o&&o.series?o.series.length:0);i--;)u=e.series[i]||{},e.series[i]=k(u,o&&o.series?o.series[i]:{});else delete e.series;e=k(o,e),t.init(e,s)}}),e,t),I.preventDefault()}});class tt{constructor(){this.readers=[],this.pointIsArray=!0}populateColumns(t){let s=!0;return this.readers.forEach(r=>{r.columnIndex===void 0&&(r.columnIndex=t.shift())}),this.readers.forEach(r=>{r.columnIndex===void 0&&(s=!1)}),s}read(t,s){let r=this.pointIsArray,e=r?[]:{};if(this.readers.forEach(a=>{let o=t[a.columnIndex][s];r?e.push(o):a.configName.indexOf(".")>0?K.prototype.setNestedProperty(e,o,a.configName):e[a.configName]=o}),this.name===void 0&&this.readers.length>=2){let a=[];this.readers.forEach(function(o){(o.configName==="x"||o.configName==="name"||o.configName==="y")&&o.columnIndex!==void 0&&a.push(o.columnIndex)}),a.length>=2&&(a.shift(),a.sort(function(o,i){return o-i})),this.name=t[Z(a.shift(),0)].name}return e}addColumnReader(t,s){this.readers.push({columnIndex:t,configName:s}),s==="x"||s==="y"||s===void 0||(this.pointIsArray=!1)}getReferencedColumnIndexes(){let t,s,r=[];for(t=0;t<this.readers.length;t+=1)(s=this.readers[t]).columnIndex!==void 0&&r.push(s.columnIndex);return r}hasReader(t){let s;for(s=0;s<this.readers.length;s+=1)if(this.readers[s].configName===t)return!0}}return J}),S(Y,"masters/modules/data.src.js",[Y["Core/Globals.js"],Y["Core/HttpUtilities.js"],Y["Extensions/Data.js"]],function(y,j,P){return y.Data=y.Data||P,y.HttpUtilities=y.HttpUtilities||j,y.ajax=y.HttpUtilities.ajax,y.data=y.Data.data,y.getJSON=y.HttpUtilities.getJSON,y.post=y.HttpUtilities.post,y})})})(st);var rt=st.exports;const lt=ot(rt),ut=nt({__proto__:null,default:lt},[rt]);export{ut as d};
