_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{ODXe:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},grO0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return n("w/X4")}])},"w/X4":function(e,t,n){"use strict";n.r(t);var r=n("ODXe"),a=n("q1tI"),o=n.n(a),i=o.a.createElement;t.default=function(){var e=o.a.useState(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=o.a.useState(""),u=Object(r.a)(s,2),l=u[0],c=u[1],d=o.a.useState(""),f=Object(r.a)(d,2),m=f[0],p=f[1],v=o.a.useState(""),b=Object(r.a)(v,2),y=b[0],w=b[1];o.a.useEffect((function(){var e=setInterval((function(){h()}),1e3);return function(){return clearInterval(e)}}),[]);var h=function(){var e=new Date("August 23, 2022 17:00:00 PDT"),t=Date.parse(e)/1e3,n=new Date,r=t-Date.parse(n)/1e3,o=Math.floor(r/86400),i=Math.floor((r-86400*o)/3600),s=Math.floor((r-86400*o-3600*i)/60),u=Math.floor(r-86400*o-3600*i-60*s);i<"10"&&(i="0"+i),s<"10"&&(s="0"+s),u<"10"&&(u="0"+u),a(o),c(i),p(s),w(u)};return i(o.a.Fragment,null,i("div",{className:"coming-soon-area"},i("div",{className:"d-table"},i("div",{className:"d-table-cell"},i("div",{className:"container"},i("div",{className:"coming-soon-content"},i("h1",null,"Coming Soon"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices."),i("div",{id:"timer"},i("div",{id:"days"},n," ",i("span",null,"Days")),i("div",{id:"hours"},l," ",i("span",null,"Hours")),i("div",{id:"minutes"},m," ",i("span",null,"Minutes")),i("div",{id:"seconds"},y," ",i("span",null,"Seconds"))),i("form",{className:"newsletter-form"},i("input",{type:"email",className:"input-newsletter",placeholder:"Enter email address",name:"email",required:!0}),i("button",{type:"submit",className:"default-btn"},"Notify Me"))))))))}}},[["grO0",0,1]]]);