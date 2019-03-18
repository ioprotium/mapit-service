(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(e,t,a){e.exports=a(367)},211:function(e,t,a){},367:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),u=a.n(c),l=(a(211),a(16)),i=a(49),o=a.n(i),s=Object(l.createMuiTheme)({typography:{useNextVariants:!0}});var m=function(e){return function(t){return n.a.createElement(l.MuiThemeProvider,{theme:s},n.a.createElement(o.a,null),n.a.createElement(e,t))}},d=a(18),p=a.n(d),k=a(50),f=a.n(k),g=a(20),E=a(53);var b=Object(E.GoogleApiWrapper)({apiKey:"AIzaSyAG5QJV4kxe7-lFoEUsWUgcZexFSxJyu4M"})(function(e){var t=Object(r.useRef)(),a=Object(r.useState)(e.markers),c=Object(g.a)(a,2),u=c[0],l=c[1];return Object(r.useEffect)(function(){e.currentMarker.id&&t.current.map.panTo({lat:e.currentMarker.latitude,lng:e.currentMarker.longitude})},[e.currentMarker]),Object(r.useEffect)(function(){l(e.markers)},[e.markers]),n.a.createElement(E.Map,{google:e.google,style:{width:e.width},zoom:6,initialCenter:{lat:51.1657,lng:10.4515},ref:t},u.map(function(t){return n.a.createElement(E.Marker,{key:t.id,name:t.name,position:{lat:t.latitude,lng:t.longitude},onClick:function(a){return e.setCurrentMarker(t)}})}))}),M=a(51),v=a(21),h=a(38),y=a.n(h),j=a(24),O=a.n(j);var x=Object(l.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},button:{float:"right",margin:"0 10px 10px 0"}}})(function(e){var t={name:!1,latitude:!1,longitude:!1},a=e.classes,c=e.currentMarker,u=Object(r.useState)(c),l=Object(g.a)(u,2),i=l[0],o=l[1],s=Object(r.useState)(t),m=Object(g.a)(s,2),d=m[0],k=m[1],f=Object(r.useState)(""),E=Object(g.a)(f,2),b=E[0],h=E[1],j=Object(r.useState)(null),x=Object(g.a)(j,2),R=x[0],C=x[1];Object(r.useEffect)(function(){k(t),o(c)},[e.currentMarker]);var w=function(e){var t=e.target,a=t.name,r=t.value;o(Object(v.a)({},i,Object(M.a)({},a,r)))};return n.a.createElement("form",{noValidate:!0,className:a.container,onSubmit:function(t){t.preventDefault();var a={};i.name||(a.name=!0),i.latitude||(a.latitude=!0),i.longitude||(a.longitude=!0),Object.keys(a).length?k(a):(null!==i.id?e.updateMarker(i):e.addMarker(i),h(""))}},n.a.createElement(p.a,{item:!0,xs:12},n.a.createElement(O.a,{label:"Search Address",margin:"normal",type:"address",placeholder:"Berlin, Germany",fullWidth:!0,className:a.textField,onChange:function(t){clearTimeout(R);var a=t.target.value;h(a),a.length>=3&&C(setTimeout(function(){return e.getGeocode(a)},500))},value:b})),n.a.createElement(p.a,{item:!0,xs:12},n.a.createElement(O.a,{name:"name",autoFocus:!0,required:!0,label:"Name",margin:"normal",type:"name",className:a.textField,value:i.name,onChange:w,error:d.name})),n.a.createElement(p.a,{item:!0,xs:12,md:6},n.a.createElement(O.a,{label:"Latitude",name:"latitude",required:!0,margin:"normal",type:"number",className:a.textField,value:i.latitude,onChange:w,error:d.latitude})),n.a.createElement(p.a,{item:!0,xs:12,md:6},n.a.createElement(O.a,{name:"longitude",type:"number",label:"Longitude",required:!0,margin:"normal",className:a.textField,value:i.longitude,onChange:w,error:d.longitude})),n.a.createElement(p.a,{item:!0,xs:12},n.a.createElement(n.a.Fragment,null,n.a.createElement(y.a,{variant:"contained",color:"secondary",className:a.button,onClick:function(){return e.setCurrentMarker()}},"Cancel"),n.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary",className:a.button},i.id?"Update":"Create"))))}),R=a(39),C=a.n(R),w=a(127),S=a.n(w),A=a(126),T=a.n(A),N=a(52);var _=function(e){return n.a.createElement(N.a,{cellHeight:"auto",cols:2,className:e.className},e.markers.map(function(t){return n.a.createElement(N.b,{key:t.id,cols:1},n.a.createElement("h1",null,t.name),n.a.createElement("p",null,"Latitude: ",t.latitude),n.a.createElement("p",null,"Longitude: ",t.longitude),n.a.createElement("p",null,n.a.createElement(C.a,{"aria-label":"Edit",onClick:function(a){return e.setCurrentMarker(t)}},n.a.createElement(T.a,{fontSize:"large"})),n.a.createElement(C.a,{"aria-label":"Delete",onClick:function(a){return e.deleteMarker(t.id)}},n.a.createElement(S.a,{fontSize:"large"}))))}))},K=a(19),D=a.n(K),F=a(30),U=a(128),G=a(31),L=a.n(G),z=function(e,t){switch(t.type){case"ADD_MARKER":return Object(v.a)({},e,{markers:[t.payload].concat(Object(U.a)(e.markers)),currentMarker:J});case"UPDATE_MARKER":return Object(v.a)({},e,{markers:e.markers.map(function(e){return e.id===t.payload.id?t.payload:e}),currentMarker:J});case"DELETE_MARKER":return Object(v.a)({},e,{markers:e.markers.filter(function(e){return e.id!==t.payload}),currentMarker:t.payload===e.currentMarker.id?J:e.currentMarker});case"SET_CURRENT_MARKER":return Object(v.a)({},e,{currentMarker:t.payload});case"SET_MARKERS":return Object(v.a)({},e,{markers:t.payload});default:return e}},J={id:null,latitude:"",longitude:"",name:""},W=m(Object(l.withStyles)(function(e){return{divider:{marginTop:"20px"},rightColumn:{width:"30%",float:"right",padding:"0 20px",maxHeight:"100vh"},list:{maxHeight:"60vh"}}})(function(e){var t=e.classes,a=function(){var e=Object(r.useReducer)(z,{currentMarker:J,markers:[]}),t=Object(g.a)(e,2),a=t[0],n=t[1],c=Object(r.useCallback)(function(){var e=Object(F.a)(D.a.mark(function e(t){var a,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("".concat("/api/v1","/markers"),t);case 2:a=e.sent,r=a.data,n({type:"ADD_MARKER",payload:r});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[n]),u=Object(r.useCallback)(function(){var e=Object(F.a)(D.a.mark(function e(t){var a,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.put("".concat("/api/v1","/markers/").concat(t.id),t);case 2:a=e.sent,r=a.data,n({type:"UPDATE_MARKER",payload:r});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[n]),l=function(){var e=Object(F.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("".concat("/api/v1","/markers"));case 3:t=e.sent,a=t.data,n({type:"SET_MARKERS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),i=Object(r.useCallback)(function(e){return n({type:"SET_CURRENT_MARKER",payload:e||J})},[a.currentMarker]),o=Object(r.useCallback)(function(){return a.markers},[a.markers]),s=function(){var e=Object(F.a)(D.a.mark(function e(t){var r,c,u;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("".concat("/api/v1","/geocoder/").concat(t));case 3:r=e.sent,(c=r.data).results.length&&(u=c.results[0],n({type:"SET_CURRENT_MARKER",payload:Object(v.a)({},a.currentMarker,{name:u.formatted_address,latitude:u.geometry.location.lat,longitude:u.geometry.location.lng})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}();return{addMarker:c,updateMarker:u,deleteMarker:function(){var e=Object(F.a)(D.a.mark(function e(t){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.delete("".concat("/api/v1","/markers/").concat(t));case 3:n({type:"DELETE_MARKER",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),getMarkers:o,fetchMarkers:l,setCurrentMarker:i,getGeocode:s,state:a}}(),c=a.addMarker,u=a.updateMarker,l=a.deleteMarker,i=a.setCurrentMarker,o=a.getMarkers,s=a.fetchMarkers,m=a.state,d=a.getGeocode;Object(r.useEffect)(function(){s()},[]);var k=o();return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{width:"70%",markers:k,setCurrentMarker:i,currentMarker:m.currentMarker}),n.a.createElement(p.a,{container:!0,spacing:0,className:t.rightColumn},n.a.createElement(p.a,{item:!0},n.a.createElement("h1",null,"Mapit")),n.a.createElement(p.a,{item:!0,xs:12},n.a.createElement(x,{currentMarker:m.currentMarker,setCurrentMarker:i,getGeocode:d,addMarker:c,updateMarker:u}),n.a.createElement(f.a,{className:t.divider,variant:"middle"}),n.a.createElement(_,{className:t.list,markers:k,setCurrentMarker:i,deleteMarker:l}))))}));u.a.render(n.a.createElement(W,null),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.f8981a3e.chunk.js.map