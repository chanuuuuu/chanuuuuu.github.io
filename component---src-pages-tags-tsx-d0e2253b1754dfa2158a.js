(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{xSjX:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return i}));a("KKXr"),a("rE2o"),a("ioFf"),a("rGqo"),a("a1Th"),a("Btvt"),a("Vd3H");var n=a("q1tI"),l=a("VXBa"),r=a("H8eV"),u=(a("JYtQ"),a("uP4m")),i="1929229117";t.default=function(e){var t=e.data.allMarkdownRemark.group,a=Object(n.useState)(0),i=a[0],o=a[1],f=Object(n.useState)("Empty Tag"),c=f[0],s=f[1];t.sort((function(e,t){var a=e.fieldValue.toLocaleLowerCase(),n=t.fieldValue.toLocaleLowerCase();return a<n?-1:n<a?1:0}));var d=t.map((function(e){var t;return n.createElement("li",{key:e.fieldValue},n.createElement("div",null,n.createElement("span",{className:"tag-text",style:{fontSize:(t=Math.round(50/(i/e.totalCount)).toString(),t.length<=1&&(t="0"+t),"1."+t+"rem"),opacity:e.fieldValue===c?"0.9":"0.5",fontWeight:e.fieldValue===c?"bold":"normal"},onClick:function(){s(e.fieldValue)}},n.createElement("a",{href:"#"+e.fieldValue},e.fieldValue))))}));d.sort((function(e){return"Empty Tag"===e.key?-1:0}));return Object(n.useEffect)((function(){var e=0,a=t,n=Array.isArray(a),l=0;for(a=n?a:a[Symbol.iterator]();;){var r;if(n){if(l>=a.length)break;r=a[l++]}else{if((l=a.next()).done)break;r=l.value}var u=r;u.totalCount>e&&(e=u.totalCount)}return o(e),function(){}}),[t]),Object(n.useEffect)((function(){return location.hash&&s(location.hash.split("#")[1]),function(){}}),[]),n.createElement(l.a,null,n.createElement(r.a,{title:"Tags"}),n.createElement("div",{id:"tags"},n.createElement("div",{className:"tag-list-wrap"},n.createElement("ul",null,d)),n.createElement(u.a,{posts:t.filter((function(e){return e.fieldValue===c})).length?t.filter((function(e){return e.fieldValue===c}))[0].edges:t.filter((function(e){return"Empty Tag"===e.fieldValue})).length?t.filter((function(e){return"Empty Tag"===e.fieldValue}))[0].edges:[]})))}}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-d0e2253b1754dfa2158a.js.map