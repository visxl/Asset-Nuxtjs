import{aK as v}from"./BAjYNYKW.js";function O(c,l){for(var o=0;o<l.length;o++){const i=l[o];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in c)){const s=Object.getOwnPropertyDescriptor(i,n);s&&Object.defineProperty(c,n,s.get?s:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var m={exports:{}};(function(c){(function(l){c.exports?(l.default=l,c.exports=l):l(typeof Highcharts<"u"?Highcharts:void 0)})(function(l){var o=l?l._modules:{};function i(n,s,a,f){n.hasOwnProperty(s)||(n[s]=f.apply(null,a),typeof CustomEvent=="function"&&l.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:s,module:n[s]}})))}i(o,"Extensions/Exporting/Fullscreen.js",[o["Core/Renderer/HTML/AST.js"],o["Core/Globals.js"],o["Core/Utilities.js"]],function(n,s,a){let{composed:f}=s,{addEvent:g,fireEvent:d,pushUnique:x}=a;function w(){this.fullscreen=new F(this)}class F{static compose(e){x(f,"Fullscreen")&&g(e,"beforeRender",w)}constructor(e){this.chart=e,this.isOpen=!1;let t=e.renderTo;!this.browserProps&&(typeof t.requestFullscreen=="function"?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:t.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:t.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:t.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}close(){let e=this,t=e.chart,r=t.options.chart;d(t,"fullscreenClose",null,function(){e.isOpen&&e.browserProps&&t.container.ownerDocument instanceof Document&&t.container.ownerDocument[e.browserProps.exitFullscreen](),e.unbindFullscreenEvent&&(e.unbindFullscreenEvent=e.unbindFullscreenEvent()),t.setSize(e.origWidth,e.origHeight,!1),e.origWidth=void 0,e.origHeight=void 0,r.width=e.origWidthOption,r.height=e.origHeightOption,e.origWidthOption=void 0,e.origHeightOption=void 0,e.isOpen=!1,e.setButtonText()})}open(){let e=this,t=e.chart,r=t.options.chart;d(t,"fullscreenOpen",null,function(){if(r&&(e.origWidthOption=r.width,e.origHeightOption=r.height),e.origWidth=t.chartWidth,e.origHeight=t.chartHeight,e.browserProps){let h=g(t.container.ownerDocument,e.browserProps.fullscreenChange,function(){e.isOpen?(e.isOpen=!1,e.close()):(t.setSize(null,null,!1),e.isOpen=!0,e.setButtonText())}),u=g(t,"destroy",h);e.unbindFullscreenEvent=()=>{h(),u()};let p=t.renderTo[e.browserProps.requestFullscreen]();p&&p.catch(function(){alert("Full screen is not supported inside a frame.")})}})}setButtonText(){let e=this.chart,t=e.exportDivElements,r=e.options.exporting,h=r&&r.buttons&&r.buttons.contextButton.menuItems,u=e.options.lang;if(r&&r.menuItemDefinitions&&u&&u.exitFullscreen&&u.viewFullscreen&&h&&t){let p=t[h.indexOf("viewFullscreen")];p&&n.setElementHTML(p,this.isOpen?u.exitFullscreen:r.menuItemDefinitions.viewFullscreen.text||u.viewFullscreen)}}toggle(){this.isOpen?this.close():this.open()}}return F}),i(o,"masters/modules/full-screen.src.js",[o["Core/Globals.js"],o["Extensions/Exporting/Fullscreen.js"]],function(n,s){return n.Fullscreen=n.Fullscreen||s,n.Fullscreen.compose(n.Chart),n})})})(m);var b=m.exports;const E=v(b),q=O({__proto__:null,default:E},[b]);export{q as f};