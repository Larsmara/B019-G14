(function(t){function e(e){for(var s,a,i=e[0],l=e[1],c=e[2],u=0,f=[];u<i.length;u++)a=i[u],n[a]&&f.push(n[a][0]),n[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var s={},n={app:0},o=[];function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"34ef":function(t,e,r){"use strict";var s=r("d4e6"),n=r.n(s);n.a},"428f":function(t,e,r){},4678:function(t,e,r){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return r(e)}function o(t){var e=s[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="4678"},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-light",attrs:{id:"app"}},[r("b-navbar",{staticClass:"shadow-sm p-3  bg-white rounded",attrs:{id:"main-nav",toggleable:"lg",type:"light",fixed:"top"}},[r("b-navbar-brand",{attrs:{to:"/"}},[t._v("Smart City")]),r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{id:"hjem",to:"/"}},[t._v("Home")]),t.userIsAuthenticated&&t.user?r("b-nav-item",{attrs:{id:"ny-idé",to:"/ny-idé"}},[t._v("Send idé")]):t._e(),r("b-nav-item",{attrs:{id:"prosjekter",to:"/prosjekter"}},[t._v("Prosjekter")]),r("b-nav-item",{attrs:{id:"om-oss",to:"/om-oss"}},[t._v("Om oss")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[t.userIsAuthenticated&&t.user?r("b-nav-item",{attrs:{to:"#"}},[t._v("Dashboard")]):t._e(),t.userIsAuthenticated&&t.user?r("b-nav-item",{attrs:{to:"#"}},[t._v("Min side")]):t._e(),r("b-nav-item",{on:{click:function(e){t.show_dialog=!t.show_dialog,t.tab=0}}},[t._v("Logg Inn")]),r("b-nav-item",{on:{click:function(e){t.show_dialog=!t.show_dialog,t.tab=1}}},[t._v("Registrer deg")]),t.userIsAuthenticated&&t.user?r("b-nav-item",{on:{click:t.onLogOut}},[t._v("Logg ut")]):t._e()],1)],1)],1),r("testDialog",{attrs:{show:t.show_dialog,tabIndex:t.tab}}),r("div",{staticClass:"main-view"},[r("router-view")],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{staticClass:"m-0 p-0",attrs:{visible:t.show,title:"Smart City"}},[r("b-tabs",{staticClass:"m-0 p-0 login-tabs",model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[r("b-tab",{attrs:{title:"Logg Inn"}},[t._v("Logg Inn")]),r("b-tab",{attrs:{title:"Registrer deg"}},[t._v("I'm the second tab")])],1)],1)],1)},i=[],l={props:{show:Boolean,tabIndex:0},data:function(){return{dialog2:!1,email:null,password:null,tabIndex:0}}},c=l,d=r("2877"),u=Object(d["a"])(c,a,i,!1,null,null,null),f=u.exports,m={data:function(){return{show_dialog:!1,dialog2:!1,tabIndex:0,email:"",password:""}},components:{testDialog:f},computed:{userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},user:function(){return this.$store.getters.user}},methods:{onLogOut:function(){this.$store.dispatch("logout"),this.$router.push("/")}},created:{show_dialog:!1}},p=m,g=Object(d["a"])(p,n,o,!1,null,null,null),b=g.exports,v=r("8aa5"),j=r("8c4f"),h=(r("d25f"),r("cebc")),k=(r("9865"),r("7f7f"),r("f3e2"),r("7514"),r("2f62")),_=r("c1df"),y=r.n(_);r("3e8f");s["a"].use(k["a"]),y.a.locale("nb");var C=new k["a"].Store({state:{loadedProjects:[],interneProsjekter:[],loadedUser:[],user:null,loading:!1,error:null,success:null},mutations:{setLoadedProjects:function(t,e){t.loadedProjects=e},setInterneProsjekter:function(t,e){t.interneProsjekter=e},setUser:function(t,e){t.user=e},updateUser:function(t,e){var r=t.user.find(function(t){return t.userId===e.userId});e.email&&(r.email=e.email),e.phone&&(r.phone=e.phone)},setLoadedUser:function(t,e){t.loadedUser=e},setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},setSuccess:function(t,e){t.success=e},clearError:function(t){t.error=null},clearSuccess:function(t,e){t.success=null}},actions:{loadProjects:function(t){var e=t.commit,r=[];v["firestore"]().collection("projects").onSnapshot(function(t){t.docChanges().forEach(function(t){if("added"==t.type||"modified"==t.type){var e=t.doc;r.push({id:e.id,title:e.data().title,content:e.data().content,imageUrl:e.data().imageUrl,date:y()(e.data().date).format("lll"),slug:e.data().slug,internt:e.data().internt,eksternt:e.data().eksternt,produksjon:e.data().produksjon,utvalgt:e.data().utvalgt,creatorId:e.data().creatorId}),console.log("Pushet prosjekter til array")}}),e("setLoadedProjects",r),e("setLoading",!1)})},createProject:function(t,e){var r=t.commit;t.getters;r("clearError"),r("clearSuccess");var s,n,o={title:e.title,content:e.content,date:e.date,slug:e.slug,internt:!1,eksternt:!1,utvalgt:!1,produksjon:!1,creatorId:v["auth"]().currentUser.uid};v["firestore"]().collection("projects").add(o).then(function(t){return n=t.id,n}).then(function(t){var r=e.image.name,s=r.slice(r.lastIndexOf("."));return v["storage"]().ref("projects/"+t+"."+s).put(e.image)}).then(function(t){return t.ref.getDownloadURL().then(function(t){return s=t,v["firestore"]().collection("projects").doc(n).update({imageUrl:t})})}).then(function(){var t={message:"Takk for ditt bidrag!"};r("setSuccess",t),r("createProject",Object(h["a"])({},o,{imageUrl:s,id:n}))}).catch(function(t){console.log(t)})},updateToInternt:function(t,e){var r=t.commit;r("clearSuccess"),r("clearError"),console.log(e.id),v["firestore"]().collection("projects").doc(e.id).update({internt:!0,eksternt:!1,produksjon:!1}).then(function(){console.log("oppdatert til internt - "+e.title)}).catch(function(t){console.log(t)})},updateToEksternt:function(t,e){var r=t.commit;r("clearSuccess"),r("clearError"),console.log(e.id),v["firestore"]().collection("projects").doc(e.id).update({eksternt:!0,internt:!1,produksjon:!1}).then(function(){console.log("oppdatert til eksternt - "+e.title)}).catch(function(t){console.log(t)})},updateToUtvalgt:function(t,e){var r=t.commit;r("clearSuccess"),r("clearError"),console.log(e.id),v["firestore"]().collection("projects").doc(e.id).update({eksternt:e.eksternt,internt:e.internt,produksjon:e.produksjon,utvalgt:!0}).then(function(){console.log("oppdatert til utvalgt - "+e.title)}).catch(function(t){console.log(t)})},updateToProduksjon:function(t,e){var r=t.commit;r("clearSuccess"),r("clearError"),console.log(e.id),v["firestore"]().collection("projects").doc(e.id).update({eksternt:e.eksternt,internt:e.internt,produksjon:!0,utvalgt:e.utvalgt}).then(function(){console.log("oppdatert til produksjon - "+e.title)}).catch(function(t){console.log(t)})},deleteProject:function(t,e){t.commit;v["firestore"]().collection("projects").doc(e.id).delete(),console.log("Slettet prosjekt "+e.title)},signUserUp:function(t,e){var r=t.commit;t.getters;r("setLoading",!0),r("clearSuccess"),r("clearError"),v["firestore"]().collection("users").doc(e.user.phone).get().then(function(t){if(console.log(t),t.exists){var s={message:"Mobilnummber finnes"};r("setError",s)}else v["auth"]().createUserWithEmailAndPassword(e.email,e.passord).then(function(t){v["firestore"]().collection("users").doc(e.user.phone).set({email:e.user.email,name:e.user.name,slug:e.user.slug,phone:e.user.phone,gdpr:e.user.gdpr,isAdmin:!1,joined:e.user.joined,userId:t.user.uid}),v["auth"]().currentUser.updateProfile({displayName:e.user.phone}).then(function(){console.log("oppdatert bruker")}).catch(function(t){console.log(t)}),r("setLoading",!1);var s=[id=t.uid];r("setUser",s)}).catch(function(t){r("setLoading",!1),r("setError",t),console.log(t)})})},updateUser:function(t,e){var r=t.commit,s=t.getters;r("setLoading",!0),r("clearSuccess"),r("clearError");var n={};e.email&&(n.email=e.email),e.phone&&(n.phone=e.phone);s.user[0].phone;v["auth"]().currentUser.updateEmail(e.email).then(function(){r("setLoading",!1),r("updateUser",e);var t={message:"Epost adresse er endret"};r("setSuccess",t)}).then(function(){}).catch(function(t){console.log(t),r("setError",t),r("setLoading",!1)})},signUserIn:function(t,e){var r=t.commit;r("setLoading",!0),r("clearSuccess"),r("clearError"),v["auth"]().signInWithEmailAndPassword(e.email,e.password).then(function(t){r("setLoading",!1);var e={id:t.uid};r("setUser",e)}).catch(function(t){r("setLoading",!1),r("setError",t),console.log(t)})},loadUser:function(t,e){t.commit},fetchUserData:function(t){var e=t.commit;e("setLoading",!0),e("clearSuccess"),e("clearError");var r=[];v["firestore"]().collection("users").where("userId","==",v["auth"]().currentUser.uid).get().then(function(t){t.forEach(function(t){var e=t.data();console.log(y()(e.joined)),r.push({email:t.data().email,name:e.name,phone:e.phone,admin:e.isAdmin,joined:y()(e.joined),slug:e.slug,userId:e.userId}),console.log("Bruker epost "+t.data().email)})}),e("setLoading",!1),e("setUser",r)},autoSignIn:function(t,e){var r=t.commit;r("setUser",{id:e.uid})},logout:function(t){var e=t.commit;v["auth"]().signOut(),e("setUser",null)},clearError:function(t){var e=t.commit;e("clearError")},clearSuccess:function(t){var e=t.commit;e("clearSuccess")}},getters:{loadedProjects:function(t){return t.loadedProjects},loadedProject:function(t){return function(e){return t.loadedProjects.find(function(t){return t.id===e})}},adminProject:function(t){return t.loadedProjects.filter(function(t){return!1===t.internt&&!1===t.eksternt&&!1===t.utvalgt})},interneProsjekter:function(t){return t.loadedProjects.filter(function(t){return t.internt})},eksterneProsjekter:function(t){return t.loadedProjects.filter(function(t){return t.eksternt})},utvalgteProsjekter:function(t){return t.loadedProjects.filter(function(t){return t.utvalgt})},produksjonProsjekter:function(t){return t.loadedProjects.filter(function(t){return t.produksjon})},brukerProsjekter:function(t){return t.loadedProjects.filter(function(e){return e.creatorId===t.user[0].userId})},loadedUser:function(t){return t.loadedUser},user:function(t){return t.user},loading:function(t){return t.loading},error:function(t){return t.error},success:function(t){return t.success}}}),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loginComp"},[r("b-modal",{attrs:{"v-model":t.show,"hide-footer":"",centered:"",title:"Smart City"}},[r("b-tabs",{staticClass:"navbar-dark",attrs:{"content-class":"mt-3"}},[r("b-tab",{staticClass:"text--dark",attrs:{title:"Logg inn",active:""}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("b-form-group",{attrs:{label:"E-post:"}},[r("b-form-input",{attrs:{type:"email",required:"",placeholder:"E-post"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("b-form-group",{attrs:{label:"Passord:"}},[r("b-form-input",{attrs:{type:"password",required:"",placeholder:"Passord"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("div",{staticClass:"knapper mt-4"},[r("b-button",{attrs:{type:"submit"}},[t._v("Logg inn")])],1),r("div",{staticClass:"knapper mt-2"},[r("b-button",{attrs:{variant:"link"},on:{click:function(e){t.dialog2=!t.dialog2}}},[t._v("Glemt passord?")])],1)],1)],1),r("b-tab",{attrs:{title:"Registrer deg"}},[r("p",[t._v("I'm the second tab content")])])],1)],1),r("b-modal",{attrs:{"hide-footer":"",centered:"",title:"Glemt passord"},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("b-form-group",{attrs:{label:"E-post:"}},[r("b-form-input",{attrs:{type:"email",required:"",placeholder:"E-post"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("div",{staticClass:"knapper mt-4"},[r("b-button",{staticClass:"mr-2",on:{click:function(e){t.dialog2=!t.dialog2}}},[t._v("Avbryt")]),r("b-button",{attrs:{type:"submit"}},[t._v("Nullstill passord")])],1)],1)],1)],1)},P=[],x={name:"Login",data:function(){return{modalShow:!1,show:!1,dialog2:!1,tabIndex:0,email:"",password:""}},methods:{linkClass:function(t){return this.tabIndex===t?["bg-info","text-white"]:["bg-light","text-info"]},login:function(){console.log("logget inn"),this.$store.dispatch("signUserIn",{email:this.email,password:this.password})}}},I=x,S=(r("34ef"),Object(d["a"])(I,w,P,!1,null,null,null)),E=S.exports,U=function(t,e,r){C.getters.user?r():r("/")},L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home-section"}},[r("section",{staticClass:"pt-5",attrs:{id:"showcase"}},[r("div",{staticClass:"container-fluid w-75"},[r("div",{staticClass:"row justify-content-between align-items-center"},[r("div",{staticClass:"col-lg-3 order-sm-3 order-lg-1 mb-3"},[r("h1",{staticClass:"display-4"},[t._v("Smart City")]),r("p",{staticClass:"lead"},[t._v("Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer hvordan byer og bygder skal utvikles til å bli bærekraftige og moderne samfunn der både økonomiske, sosiale og miljømessige verdier gjennomsyrer alt vi gjør og skaper.")]),r("router-link",{staticClass:"btn hk-btn btn-lg",attrs:{to:"/om-oss",tag:"button"}},[t._v("Mer om Smart City")])],1),r("div",{staticClass:"col-lg-4 order-sm-1 order-lg-2 mb-3"},[r("h1",{staticClass:"display-3"},[t._v("Har du en idé?")]),r("p",{staticClass:"lead"},[t._v("Vi som kommune ønsker å være på topp når det gjelder innovative løsninger, men det er ikke alltid at det er oss ansatte som sitter på de beste idéene, eller ser behovene. Derfor ønsker vi å høre deres idéforslag.")]),t.userIsAuthenticated?r("router-link",{staticClass:"btn hk-btn btn-lg",attrs:{to:"/ny-idé",tag:"button"}},[t._v("Send Idé")]):r("b-button",{staticClass:"btn hk-btn btn-lg",on:{click:function(e){t.show_dialog=!t.show_dialog}}},[t._v("Logg inn for å sende idé")])],1),r("div",{staticClass:"col-lg-3 order-sm-2 order-lg-3 mb-3"},[r("h1",{staticClass:"display-4"},[t._v("Prosjekter")]),r("p",{staticClass:"lead"},[t._v("Et Smart City Halden prosjekt utpeker seg ved at (1) prosjektet er bærekraftig på både kort og lang sikt, (2) det utføres i samarbeid med flere ulike samfunnsaktører og (3) det tar i bruk teknologi på en innovativ måte.")]),r("router-link",{staticClass:"btn hk-btn btn-lg",attrs:{to:"/prosjekter",tag:"button"}},[t._v("Se prosjekter")])],1)])])]),r("testDialog",{attrs:{show:t.show_dialog}}),t._m(0)],1)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"logo"}},[s("div",{staticClass:"carousel-inner d-none d-xl-block pt-4"},[s("div",{staticClass:"carousel-item img-fluid carousel-image-1 active"},[s("img",{staticClass:"img-fluid",attrs:{src:r("db47"),alt:""}})])])])}],O={name:"home",data:function(){return{show_dialog:!1}},components:{testDialog:f},created:function(){document.title="Hjem";var t=document.getElementById("hjem");t.classList.add("active","hk-nav-active")},destroyed:function(){document.title="Prosjekter";var t=document.getElementById("hjem");t.classList.remove("active","hk-nav-active")},computed:{userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},user:function(){return this.$store.getters.user}}},z=O,D=Object(d["a"])(z,L,$,!1,null,null,null),A=D.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about "},[r("b-container",[r("b-row",[r("b-col",[r("b-card-group",{attrs:{deck:""}},[r("b-card",{staticClass:"text-left hello"},[r("h2",[t._v("Smart City Halden")]),r("h4",[t._v(" Smart by, et godt sted å leve")]),r("p",[r("span",{staticClass:"about-intro"},[t._v("Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer\n                        hvordan byer og bygder skal utvikles til å bli bærekraftige og moderne samfunn der både økonomiske, sosiale og\n                        miljømessige verdier gjennomsyrer alt vi gjør og skaper. ")])]),r("p"),r("p",[t._v("Halden kommune skal være Norges mest innovative kommune, og har startet programmet Smart City Halden for å bidra til dette. ")]),r("p",[t._v("Programmet skal legge til rette for forskning, utvikling og innovasjon for en bærekraftig samfunnsutvikling. Programmet skal\n                      stimulere til eksperimentering, testing og demonstrering av ny teknologi, nye tjenester til innbyggerne og nye typer\n                      forretningsmodeller som skaper verdi for et fremtidsrettet samfunn. ")]),r("p",[t._v("Et Smart City Halden prosjekt utpeker seg ved at "),r("br"),t._v("(1) prosjektet er bærekraftig på både kort og lang sikt "),r("br"),t._v("(2) det utføres\n                      i samarbeid med flere ulike samfunnsaktører og "),r("br"),t._v("(3) det tar i bruk teknologi på en innovativ måte. ")]),r("p",[t._v("Disse tre er driverne i Smart City Halden, og skal være synlige i ethvert Smart City Halden-prosjekt.")]),r("b-button",{on:{click:function(e){t.show_dialog=!0}}},[t._v("Login")])],1)],1)],1)],1)],1),r("testDialog",{attrs:{show:t.show_dialog}})],1)},T=[],H={data:function(){return{show_dialog:!1}},components:{testDialog:f},methods:{showing:function(){this.show_dialog=!0,console.log("test")}},created:function(){document.title="Om-oss";var t=document.getElementById("om-oss");t.classList.add("active","hk-nav-active")},destroyed:function(){document.title="Prosjekter";var t=document.getElementById("om-oss");t.classList.remove("active","hk-nav-active")}},R=H,F=(r("c8fc"),Object(d["a"])(R,B,T,!1,null,"2f2f747a",null)),M=F.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"prosjekt"},[r("div",{staticClass:"mb-2 mt-4 py-3 knapper"},[r("b-button",{attrs:{variant:"info",router:"",to:"/prosjekter"}},[t._v("Prosjekter i produksjon")]),r("b-button",{staticClass:"ml-2",attrs:{variant:"info",router:"",to:"/prosjekter/utvalgte"}},[t._v("Utvalgte prosjekter")]),r("h2",{staticClass:"mt-4"},[t._v("Prosjekter i produksjon")])],1),r("b-container",{staticClass:"prosjekt-container w-75 p-3",attrs:{fluid:""}},[r("b-row",t._l(t.projects,function(e){return r("div",{key:e.id,staticClass:"card mb-4 mr-2 ml-2 ",staticStyle:{width:"20rem"}},[e.imageUrl?t._e():r("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/600/300/?image=25",alt:"Standard bilde"}}),e.imageUrl?r("img",{staticClass:"card-img-top",attrs:{src:e.imageUrl,alt:"Prosjekt bilde"}}):t._e(),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),r("p",{staticClass:"card-text"},[t._v(t._s(e.content))]),r("b-button",{attrs:{variant:"info",router:"",to:"/prosjekt/"+e.id}},[t._v("Les mer")])],1)])}),0)],1)],1)},q=[],N={name:"Prosjekt",data:function(){return{}},created:function(){document.title="Prosjekter";var t=document.getElementById("prosjekter");t.classList.add("active","hk-nav-active")},destroyed:function(){document.title="Prosjekter";var t=document.getElementById("prosjekter");t.classList.remove("active","hk-nav-active")},computed:{projects:function(){return this.$store.getters.produksjonProsjekter},loading:function(){return this.$store.getters.loading},success:function(){return this.$store.getters.success}}},V=N,W=(r("d726"),Object(d["a"])(V,G,q,!1,null,null,null)),J=W.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"test"},[r("div",{staticClass:"mb-2 mt-4 knapper"},[r("b-button",{attrs:{variant:"info",router:"",to:"/prosjekter"}},[t._v("Prosjekter i produksjon")]),r("b-button",{staticClass:"ml-2",attrs:{variant:"info",router:"",to:"/prosjekter/test"}},[t._v("Utvalgte prosjekter")]),r("h2",{staticClass:"mt-4"},[t._v("Utvalgte prosjekter")])],1),r("b-container",{staticClass:"prosjekt-container w-75 p-3",attrs:{fluid:""}},[r("b-row",t._l(t.projects,function(e){return r("b-card",{key:e.id,staticClass:"mb-4 mr-2 ml-4",staticStyle:{width:"20rem"},attrs:{title:e.title,"img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-img"),r("b-card-text",[t._v("\n                "+t._s(e.content)+"\n                ")]),r("b-button",{attrs:{variant:"info",router:"",to:"/prosjekt/"+e.id}},[t._v("Les mer")])],1)}),1)],1)],1)},K=[],X={name:"Prosjekt",data:function(){return{}},created:function(){document.title="Prosjekter"},computed:{projects:function(){return this.$store.getters.utvalgteProsjekter},loading:function(){return this.$store.getters.loading},success:function(){return this.$store.getters.success}}},Y=X,Z=Object(d["a"])(Y,Q,K,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"prosjekt"},[r("b-container",[r("b-button",{staticClass:"mt-4 mr-2",attrs:{variant:"info"},on:{click:t.goBack}},[t._v("Tilbake")]),r("div",{staticClass:"card mb-4 mr-2 ml-2 mt-2"},[t.project.imageUrl?t._e():r("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/600/300/?image=25",alt:"Standard bilde"}}),t.project.imageUrl?r("img",{staticClass:"card-img-top",attrs:{src:t.project.imageUrl,alt:"Prosjekt bilde"}}):t._e(),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.project.title))]),r("hr"),r("p",{staticClass:"card-text"},[t._v(t._s(t.project.content))])]),r("div",{staticClass:"card-footer text-muted"},[t._v("\n                    Innsendt: "+t._s(t.project.date)+"\n                ")])])],1)],1)},rt=[],st={props:["id"],computed:{project:function(){return this.$store.getters.loadedProject(this.id)}},methods:{goBack:function(){this.$router.go(-1)}}},nt=st,ot=Object(d["a"])(nt,et,rt,!1,null,null,null),at=ot.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-4 "},[r("h1",{staticClass:"text-center"},[t._v("Send oss din idé!")]),r("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("b-form-group",{attrs:{id:"exampleInputGroup1",label:"Tittel:","label-for":"exampleInput1"}},[r("b-form-input",{attrs:{id:"exampleInput1",type:"text",placeholder:"Tittel"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),r("b-form-group",{attrs:{label:"Bildefil:"}},[r("b-form-file",{attrs:{accept:"image/*",state:Boolean(t.file),placeholder:"Trykk her for å velge fil","drop-placeholder":"Drop file here..."},on:{change:t.onFilePicked},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),r("div",{staticClass:"mt-3"},[t._v("Valgt fil: "+t._s(t.file?t.file.name:""))]),t.imageUrl?r("div",{staticClass:"field"},[r("img",{attrs:{src:t.imageUrl,height:"150px"}})]):t._e()],1),r("b-form-group",{attrs:{id:"exampleInputGroup2",label:"Forklar din idé:","label-for":"exampleInput2"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),r("b-button",{staticClass:"mb-2 mr-2",attrs:{type:"submit",variant:"info"}},[t._v("Registrer idé")]),r("b-button",{staticClass:"mb-2",attrs:{variant:"danger",id:"resetBtn"},on:{click:t.reset}},[t._v("Reset")])],1)],1)},lt=[],ct=r("0a0d"),dt=r.n(ct),ut=r("d0c2"),ft=r.n(ut),mt={data:function(){return{title:null,content:null,file:null,slug:null,imageUrl:null}},methods:{onSubmit:function(){if(null!==this.title||null!==this.content){this.slug=ft()(this.title,{replacement:"-",remove:/[$*_+~.()'"!\._@]/g,lower:!0});var t={title:this.title,content:this.content,date:dt()(),image:this.image,slug:this.slug};this.$store.dispatch("createProject",t),this.$router.push("/prosjekter")}},onFilePicked:function(t){var e=this,r=t.target.files,s=r[0].name;if(s.lastIndexOf(".")<=0)return alert("Please add a valid file!");var n=new FileReader;n.addEventListener("load",function(){e.imageUrl=n.result}),n.readAsDataURL(r[0]),this.image=r[0]},reset:function(){this.title=null,this.content=null,this.file=null,this.imageUrl=null}}},pt=mt,gt=(r("bec1"),Object(d["a"])(pt,it,lt,!1,null,"b1a3e348",null)),bt=gt.exports;s["a"].use(j["a"]);var vt=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"hjem",component:A},{path:"/om-oss",name:"about",component:M},{path:"/prosjekter",name:"prosjekter",component:J},{path:"/prosjekter/utvalgte",name:"utvalgte",component:tt},{path:"/ny-idé",name:"createProject",component:bt,beforeEnter:U},{path:"/prosjekt/:id",name:"SeProsjekt",props:!0,component:at}]}),jt=r("9f7b"),ht=r.n(jt);r("f9e3"),r("2dd8"),r("428f");s["a"].config.productionTip=!1,s["a"].use(ht.a),s["a"].component("app-login",E),s["a"].component("app-dialog",f),new s["a"]({router:vt,store:C,render:function(t){return t(b)},created:function(){var t=this;v["initializeApp"]({apiKey:"AIzaSyCQSTFAbaVWVBwe8oUeuWPFQ9EmV1pF_0E",authDomain:"bachelor-824d5.firebaseapp.com",databaseURL:"https://bachelor-824d5.firebaseio.com",projectId:"bachelor-824d5",storageBucket:"bachelor-824d5.appspot.com",messagingSenderId:"896918903719"}),v["auth"]().onAuthStateChanged(function(e){e?(t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData")):console.log("Bruker er ikke deffinert")}),this.$store.dispatch("loadProjects")}}).$mount("#app")},6130:function(t,e,r){},9479:function(t,e,r){},bec1:function(t,e,r){"use strict";var s=r("6130"),n=r.n(s);n.a},c8fc:function(t,e,r){"use strict";var s=r("9479"),n=r.n(s);n.a},d4e6:function(t,e,r){},d726:function(t,e,r){"use strict";var s=r("f745"),n=r.n(s);n.a},db47:function(t,e,r){t.exports=r.p+"img/hk-design.c2348ca7.png"},f745:function(t,e,r){}});
//# sourceMappingURL=app.c38a5c33.js.map