"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var i=t.default.Application,l=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,l=i.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(l,r.default.modulePrefix),e.default=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:a})}),define("dummy/components/step-manager/component",["exports","ember-wizard/components/step-manager/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/step-manager/step/component",["exports","ember-wizard/components/step-manager/step/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/hook",["exports","ember-hook/helpers/hook"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"hook",{enumerable:!0,get:function(){return t.hook}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/ember-hook/initialize",["exports","ember-hook/initializers/ember-hook/initialize"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/named-steps/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:4,column:2},end:{line:10,column:2}},moduleName:"dummy/named-steps/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("This is the first step");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n    ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("\n      Next, please!\n    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[3]),r=new Array(2);return r[0]=e.createAttrMorph(a,"data-test"),r[1]=e.createElementMorph(a),r},statements:[["attribute","data-test",["subexpr","hook",["first-button"],[],["loc",[null,[null,null],[7,45]]],0,0],0,0,0,0],["element","action",[["get","w.transition-to",["loc",[null,[7,55],[7,70]]],0,0,0,0],"second"],[],["loc",[null,[7,46],[7,81]]],0,0]],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:12,column:2},end:{line:18,column:2}},moduleName:"dummy/named-steps/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("This is the second step");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n    ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("\n      Next, please!\n    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[3]),r=new Array(2);return r[0]=e.createAttrMorph(a,"data-test"),r[1]=e.createElementMorph(a),r},statements:[["attribute","data-test",["subexpr","hook",["second-button"],[],["loc",[null,[null,null],[15,46]]],0,0],0,0,0,0],["element","action",[["get","w.transition-to",["loc",[null,[15,56],[15,71]]],0,0,0,0],"third"],[],["loc",[null,[15,47],[15,81]]],0,0]],locals:[],templates:[]}}(),n=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:20,column:2},end:{line:26,column:2}},moduleName:"dummy/named-steps/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("This is the third step");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n    ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("\n      Back to the beginning!\n    ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[3]),r=new Array(2);return r[0]=e.createAttrMorph(a,"data-test"),r[1]=e.createElementMorph(a),r},statements:[["attribute","data-test",["subexpr","hook",["third-button"],[],["loc",[null,[null,null],[23,45]]],0,0],0,0,0,0],["element","action",[["get","w.transition-to",["loc",[null,[23,55],[23,70]]],0,0,0,0],"first"],[],["loc",[null,[23,46],[23,80]]],0,0]],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:3,column:0},end:{line:27,column:0}},moduleName:"dummy/named-steps/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(t,2,2,n),a[2]=e.createMorphAt(t,4,4,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","w.step",[],["name","first"],0,null,["loc",[null,[4,2],[10,13]]]],["block","w.step",[],["name","second"],1,null,["loc",[null,[12,2],[18,13]]]],["block","w.step",[],["name","third"],2,null,["loc",[null,[20,2],[26,13]]]]],locals:["w"],templates:[e,t,n]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:28,column:0}},moduleName:"dummy/named-steps/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("Named Steps");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["block","step-manager",[],[],0,null,["loc",[null,[3,0],[27,17]]]]],locals:[],templates:[e]}}())}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t.default.Router,r=a.extend({location:n.default.locationType,rootURL:n.default.rootURL});r.map(function(){this.route("named-steps")}),e.default=r}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),r=JSON.parse(unescape(a)),i={default:r};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"@alexlafroscia/ember-wizard",version:"0.3.0+703b5617"});