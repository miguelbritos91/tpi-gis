(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{399:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(2),i=t(1),o=t(5),u=t(4),c=t(64),s=t(67);function w(){return new Date(36e5*Math.round(Date.now()/36e5)-108e5)}var d=Object(u.s)([-126,24,-66,50],"EPSG:4326","EPSG:3857"),l=w(),m=null,g=[new o.a({source:new c.a({layer:"terrain"})}),new o.a({extent:d,source:new s.a({attributions:["Iowa State University"],url:"https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r-t.cgi",params:{LAYERS:"nexrad-n0r-wmst"}})})];new a.a({layers:g,target:"map",view:new r.a({center:Object(i.x)(d),zoom:4})});function p(){document.getElementById("info").innerHTML=l.toISOString()}function v(){l.setMinutes(l.getMinutes()+15),l>new Date&&(l=w()),g[1].getSource().updateParams({TIME:l.toISOString()}),p()}v();var E=function(){null!==m&&(window.clearInterval(m),m=null)};document.getElementById("play").addEventListener("click",function(){E(),m=window.setInterval(v,2e3)},!1),document.getElementById("pause").addEventListener("click",E,!1),p()}},[[399,0]]]);
//# sourceMappingURL=wms-time.js.map