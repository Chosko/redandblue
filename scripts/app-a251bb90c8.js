!function(){"use strict";angular.module("redandblue",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ui.bootstrap","sn.skrollr","toastr","dndLists"])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/scene/sky/sky.html",scope:{scene:"="}};return e}angular.module("redandblue").directive("sky",e)}(),function(){"use strict";function e(e,t){function l(){var e=this;e.toAnimate=[],e.vehiclesParallaxTop=30,e.vehiclesParallaxOffset=e.scene.height*e.vehiclesParallaxTop/100,e.vehiclesParallaxStart=e.scene.top-t.windowHeight+e.vehiclesParallaxOffset,e.vehiclesParallaxEnd=e.scene.bottom-t.windowHeight+e.vehiclesParallaxOffset,e.scooterHorizontal=-50,e.scooterParallax=50,e.carParallax=-e.scooterParallax,e.carHorizontal=-e.scooterHorizontal}function n(){}var a={restrict:"E",templateUrl:"app/scene/road/road.html",controller:l,bindToController:!0,controllerAs:"vm",link:n,scope:{scene:"="}};return a}angular.module("redandblue").directive("road",e),e.$inject=["Anim8","utils"]}(),function(){"use strict";function e(e,t,l,n){function a(){var n=this;n.toAnimate=[];var a=-n.scene.height,r=n.scene.top+a,s=n.scene.top;n.parallaxStart=n.scene.top-t.windowHeight,n.parallaxEnd=n.scene.bottom,n.sunriseStart=r,n.sunriseEnd=s,n.sunriseParallax=50,n.layer3Parallax=-60,n.layer2Parallax=-40,n.layer1Parallax=-20,n.cloud0Parallax=10,n.cloud1Parallax=13;var c=l.get("skyNightColor").darken(2),i=new e("#mountains-scene .mountains0");i.addKeyFrame(r,"fill: "+c.toRgbString()),i.addKeyFrame(s,"fill: "+l.get("endMountains0Color").toRgbString()),n.toAnimate.push(i);var o=new e("#mountains-scene .mountains1");o.addKeyFrame(r,"fill: "+c.toRgbString()),o.addKeyFrame(s,"fill: "+l.get("endMountains1Color").toRgbString()),n.toAnimate.push(o);var d=new e("#mountains-scene .mountains2,#mountains");d.addKeyFrame(r,"fill: "+c.toRgbString()),d.addKeyFrame(s,"fill: "+l.get("endMountains2Color").toRgbString()),n.toAnimate.push(d);var p=new e("#mountains-scene .mountains3,#mountains");p.addKeyFrame(r,"fill: "+c.toRgbString()),p.addKeyFrame(s,"fill: "+l.get("endMountains3Color").toRgbString()),n.toAnimate.push(p);var h=new e("#mountains-scene .clouds");h.addKeyFrame(r,"fill: "+c.toRgbString()),h.addKeyFrame(s,"fill: rgb(255,255,255)"),n.toAnimate.push(h);var u=new e("#sky");u.addKeyFrame(r,"background-color: "+l.get("skyNightColor").toRgbString()),u.addKeyFrame(s,"background-color: "+l.get("skyDayColor").toRgbString()),n.toAnimate.push(u);var m=new e("#sun-gradient-center");m.addKeyFrame(r,"stop-color:rgb(255, 40, 0)"),m.addKeyFrame(s,"stop-color:rgb(255, 233, 184)"),n.toAnimate.push(m);var g=new e("#sun-gradient-edge");g.addKeyFrame(r,"stop-color:rgb(255, 0, 0)"),g.addKeyFrame(s,"stop-color:rgb(255, 218, 130)"),n.toAnimate.push(g)}function r(t,l,n,a){e.start(a.toAnimate)}var s={restrict:"E",templateUrl:"app/scene/mountains/mountains.html",controller:a,bindToController:!0,controllerAs:"vm",link:r,scope:{scene:"="}};return s}angular.module("redandblue").directive("mountains",e),e.$inject=["Anim8","utils","rbc","tinycolor"]}(),function(){"use strict";function e(){function e(){var e=this;e.toAnimate=[]}var t={restrict:"E",templateUrl:"app/scene/church/church.html",controller:e,bindToController:!0,controllerAs:"vm",scope:{scene:"="}};return t}angular.module("redandblue").directive("church",e)}(),function(){"use strict";function e(){var e={windowHeight:angular.element(window).height(),windowWidth:angular.element(window).width(),aspectRatio:angular.element(window).width()/angular.element(window).height()};return e}angular.module("redandblue").factory("utils",e)}(),function(){"use strict";function e(e){var t=0,l={},n={add:function(n,a,r){var s={};s.scaling=e.windowWidth/a,s.top=t,s.originalHeight=r,s.height=r*s.scaling,s.bottom=s.top+s.height,s.left=0,s.originalWidth=a,s.width=a*s.scaling,s.right=s.left+s.width,t=s.bottom,l[n]=s},calculateWrapper:function(e){var t=Number.MAX_VALUE,n=0,a=0,r=Number.MAX_VALUE;return angular.forEach(e,function(e){var s=l[e];s&&(s.top<t&&(t=s.top),s.right>n&&(n=s.right),s.bottom>a&&(a=s.bottom),s.left<r&&(r=s.left))}),{top:t,right:n,bottom:a,left:r,height:a-t,width:n-r}},getScenes:function(){return l}};return n}angular.module("redandblue").factory("scenes",e),e.$inject=["utils"]}(),function(){"use strict";function e(e){function t(t,l){var n=l.children(".scene-wrapper");if(t.sceneId||(t.sceneId="sw"+Math.ceil(1e7*Math.random())),t.recalculate=function(){t.scene.height&&n.css("height",t.scene.height+"px"),t.scene.width&&n.css("width",t.scene.width+"px"),t.scene.top&&n.css("top",t.scene.top+"px"),t.scene.left&&n.css("left",t.scene.left+"px")},t.recalculate(),t.scroll){n.addClass("animation fixed");var a=new e(n);a.addKeyFrame(t.scene.top,"top: 0px"),a.addKeyFrame(t.scene.bottom,"top: "+-t.scene.height+"px"),e.start(a)}t.$watch("scene",function(e,l){e!==l&&t.recalculate()})}var l={restrict:"E",template:'<div id="{{ sceneId }}" class="animation scene-wrapper" ng-class="{\'scroll\': scroll, \'no-scroll\': !scroll}"><ng-transclude></ng-transclude></div>',link:t,transclude:!0,scope:{scene:"=",scroll:"=",sceneId:"="}};return l}angular.module("redandblue").directive("sceneWrapper",e),e.$inject=["Anim8"]}(),function(){"use strict";function e(e){function t(t,l){if(t.start&&t.end){var n=l.children(".scene-parallax");t.vertical||(t.vertical=0),t.horizontal||(t.horizontal=0);var a=new e(n);a.addKeyFrame(t.start,"transform: translate("+-t.horizontal+"%, "+t.vertical+"%)"),a.addKeyFrame(t.end,"transform: translate("+t.horizontal+"%, "+-t.vertical+"%)"),e.start(a)}}var l={restrict:"E",template:'<div class="scene-parallax"><ng-transclude></ng-transclude></div>',link:t,transclude:!0,scope:{start:"=",end:"=",vertical:"=",horizontal:"="}};return l}angular.module("redandblue").directive("sceneParallax",e),e.$inject=["Anim8"]}(),function(){"use strict";function e(){function e(e,t){var l=t.children(".scene-element-vertical"),n=l.children(".scene-element-horizontal");e.top&&l.css("padding-top",(e.top||0)+"%"),e.horizontal&&n.css("left",e.horizontal+"%"),e.height&&n.css("height",e.height+"%"),e.width&&n.css("width",e.width+"%")}var t={restrict:"E",template:'<div class="scene-element scene-element-vertical"><div class="scene-element-horizontal"><ng-transclude></ng-transclude></div></div>',link:e,transclude:!0,scope:{top:"=",horizontal:"=",height:"=",width:"="}};return t}angular.module("redandblue").directive("sceneElement",e)}(),function(){"use strict";function e(e,t){var l={},n={skyNightColor:"n0",skyDayColor:"n1",endMountains0Color:"n2",endMountains1Color:"n3",endMountains2Color:"n4",endMountains3Color:"n5"},a={load:function(e){l={},angular.forEach(e,function(e,n){l[n]=t.get(e)}),l.error=t.get("error")},get:function(t){var n=l[t];return n?n.clone():(e.warn('Color "'+t+'"" not found in redandblue colors. Returning an error color.'),l.error.clone())}};return a.load(n),a}angular.module("redandblue").factory("rbc",e),e.$inject=["$log","palette"]}(),function(){"use strict";function e(e){var t={error:e("#f0f"),n0:e("rgb(0,0,40)"),n1:e("#529eb8"),n2:e("#006c86"),n3:e("#00879c"),n4:e("#89b6d0"),n5:e("#aed1e2")},l={get:function(e){return t[e]||null},getPalette:function(){return t}};return l}angular.module("redandblue").factory("palette",e),e.$inject=["tinycolor"]}(),function(){"use strict";function e(e){var t=function(e){this.selector=e,this.keyframes={},this.statics=[]};return t.prototype.selector=null,t.prototype.keyframes=null,t.prototype.statics=null,t.prototype.addKeyFrame=function(e,t){e+="";var l,n=this.keyframes[e];l=angular.isArray(t)?t:[t],this.keyframes[e]=n?n.concat(l):l},t.prototype.addStatic=function(e,t){this.statics.push([e,t])},t.prototype.generate=function(){var e=this,t=angular.element(e.selector);angular.forEach(e.statics,function(e){t.css(e[0],e[1])});var l=!1;angular.forEach(e.keyframes,function(e,n){t.attr("data-"+n,e.join(";")),l=!0}),l&&t.attr("sn-skrollr","")},t.start=function(t){angular.isArray(t)?angular.forEach(t,function(e){e.generate()}):t.generate(),e.refresh()},t.refresh=function(){e.refresh()},t}angular.module("redandblue").factory("Anim8",e),e.$inject=["snSkrollr"]}(),function(){"use strict";function e(e,t){var l=this;l.scenes=e.getScenes(),e.add("sky",1280,1280),e.add("mountains",1280,800),e.add("road",1280,800),e.add("church",1280,800),l.fullScene=e.calculateWrapper(["sky","mountains","road","church"]),l.skyMountains=e.calculateWrapper(["sky","mountains"]);var n=[],a=new t("#sky-wrapper");a.addKeyFrame(0,"top: 0px"),a.addKeyFrame(l.skyHeight,"top: "+-l.skyHeight+"px"),n.push(a),t.start(n)}angular.module("redandblue").controller("SceneController",e),e.$inject=["scenes","Anim8"]}(),function(){"use strict";function e(e){var t=this;t.selected={},t.counter=1,t.childrenTypes=[{value:"custom",string:"Custom"},{value:"triad",string:"Triade"},{value:"tetrad",string:"Tetrade"},{value:"mono",string:"Monocr."},{value:"compl.",string:"Compl."},{value:"split",string:"Separa"},{value:"delete",string:"Elimina"}],t.sampleTemplate={color:"#00ff00",id:t.counter,editable:!0},t.newChildren=function(e){var t={type:e,elements:[]};return t},t.nextId=function(){return t.counter++,t.counter},t.newSample=function(e,l){return{color:e,id:t.nextId(),editable:angular.isUndefined(l)?!0:l}},t.createChildren=function(l,n,a){var r=0,s=null;switch(n){case"custom":l[a]&&"custom"===l[a].type||(l[a]=t.newChildren(n,a));break;case"triad":if(!l[a]||"triad"!==l[a].type)for(l[a]=t.newChildren(n,a),l[a].editable=!1,s=e(l.color).triad(),r=1;r<s.length;r++)l[a].elements.push(t.newSample(s[r].toHexString(),!1));break;case"mono":if(!l[a]||"mono"!==l[a].type)for(l[a]=t.newChildren(n,a),l[a].editable=!1,s=e(l.color).monochromatic(),r=1;r<s.length;r++)l[a].elements.push(t.newSample(s[r].toHexString(),!1));break;case"split":if(!l[a]||"split"!==l[a].type)for(l[a]=t.newChildren(n,a),l[a].editable=!1,s=e(l.color).splitcomplement(),r=1;r<s.length;r++)l[a].elements.push(t.newSample(s[r].toHexString(),!1));break;case"tetrad":if(!l[a]||"tetrad"!==l[a].type)for(l[a]=t.newChildren(n,a),l[a].editable=!1,s=e(l.color).tetrad(),r=1;r<s.length;r++)l[a].elements.push(t.newSample(s[r].toHexString(),!1));break;case"compl.":if(!l[a]||"compl."!==l[a].type){l[a]=t.newChildren(n,a),l[a].editable=!1;var c=e(l.color).complement();l[a].elements.push(t.newSample(c.toHexString(),!1))}break;case"delete":delete l[a]}t.refresh()},t.updateChildren=function(l,n){var a=null,r=[],s=0;switch(l.type){case"custom":angular.forEach(l.elements,function(e){r.push(e.color)});break;case"triad":for(a=e(n).triad(),s=1;s<a.length;s++)r.push(a[s].toHexString());break;case"mono":for(a=e(n).monochromatic(),s=1;s<a.length;s++)r.push(a[s].toHexString());break;case"split":for(a=e(n).splitcomplement(),s=1;s<a.length;s++)r.push(a[s].toHexString());break;case"tetrad":for(a=e(n).tetrad(),s=1;s<a.length;s++)r.push(a[s].toHexString());break;case"compl.":for(a=[e(n).complement()],s=1;s<a.length;s++)r.push(a[s].toHexString())}for(s=0;s<l.elements.length;s++)l.elements[s]&&r[s]&&l.elements[s]!==r[s]&&(l.elements[s].color=r[s],t.update(l.elements[s]))},t.update=function(e){e.right&&t.updateChildren(e.right,e.color),e.down&&t.updateChildren(e.down,e.color)},t.reduce=function(e){e?angular.isArray(e)&&angular.forEach(e,function(e){e.right&&e.right.elements&&(0===e.right.elements.length?delete e.right:t.reduce(e.right.elements)),e.down&&e.down.elements&&(0===e.down.elements.length?delete e.down:t.reduce(e.down.elements))}):(t.reduce(t.palette),t.refresh())},t.refresh=function(e){e?"$apply"!==e.$$phase&&e.$apply():t.palette=angular.copy(t.palette)},t.reindex=function(e){e?(e.id=t.nextId(),e.right&&e.right.elements&&angular.forEach(e.right.elements,t.reindex),e.down&&e.down.elements&&angular.forEach(e.down.elements,t.reindex)):(t.counter=0,angular.forEach(t.palette,t.reindex),t.refresh())},t.loadPalette=function(e){e&&(angular.isString(e)&&(e=angular.fromJson(e)),angular.isArray(e)&&(t.palette=e))},t.palette=[]}angular.module("redandblue").controller("PaletteController",e),e.$inject=["tinycolor"]}(),function(){"use strict";function e(e,t){t.init(),e.debug("runBlock end")}angular.module("redandblue").run(e),e.$inject=["$log","snSkrollr"]}(),function(){"use strict";function e(e,t){e.state("main",{"abstract":!0,template:"<div ui-view></div>"}).state("main.scene",{url:"/",templateUrl:"app/scene/scene.html",controller:"SceneController",controllerAs:"scene"}).state("main.palette",{url:"/palette",templateUrl:"app/palette/palette.html",controller:"PaletteController",controllerAs:"vm"}),t.otherwise("/")}angular.module("redandblue").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("redandblue").constant("moment",moment).constant("Snap",Snap).constant("tinycolor",tinycolor).constant("tinygradient",tinygradient)}(),function(){"use strict";function e(e,t,l,n){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!1,t.progressBar=!1,l.html5Mode(!0),l.hashPrefix("!");var a=angular.element(window).height();n.config={smoothScrolling:!0,smoothScrollingDuration:600,constants:{mountains:a,sun:a/2}}}angular.module("redandblue").config(e),e.$inject=["$logProvider","toastrConfig","$locationProvider","snSkrollrProvider"]}(),angular.module("redandblue").run(["$templateCache",function(e){e.put("app/palette/palette.html",'<script type="text/ng-template" id="sample.html"><div class="sample {{ direction }}" ng-init="ask = false" > <div class="descriptor"> <div class="name"> {{ sample.id }} </div> <div class="color" ng-style="{\'background-color\': sample.color}" > <span class="controls"> <a class="add-right" ng-click="ask=\'right\'" > <span>&gt;</span> </a> <a class="add-down" ng-click="ask=\'down\'" > <span>v</span> </a> <div class="question" ng-style="{\'background-color\': sample.color}" ng-show="ask" > <div class="question-back" ng-init="selectedType = sample[ask].type || \'custom\'"> Aggiungi {{ ask === \'right\' ? \'a destra\' : \'in basso\'}} <select ng-model="selectedType" ng-options="ctype.value as ctype.string for ctype in vm.childrenTypes" > </select> <a class="button-cancel" ng-click="ask = false" > X </a> <a class="button-ok" ng-click="vm.createChildren(sample, selectedType, ask);ask = false" > V </a> </div> </div> </span> </div> <div class="hex"> <span ng-show="vm.selected !== sample || !sample.editable"> {{ sample.color }} </span> <input ng-show="vm.selected === sample && sample.editable" type="text" ng-model="sample.color" ng-change="vm.update(sample);vm.refresh(this)" dnd-nodrag /> </div> </div> <div class="children right" ng-show="sample.right"> <div ng-init="childrenRight = sample.right" ng-include="\'childrenRight.html\'"></div> </div> <div class="children down" ng-show="sample.down"> <div ng-init="childrenDown = sample.down" ng-include="\'childrenDown.html\'"></div> </div> </div></script><script type="text/ng-template" id="childrenRight.html"><span class="arrow"> &lt;-- {{ childrenRight.type }} -- </span> <ul class="children-list right" dnd-list="childrenRight.elements" ng-init="elements = childrenRight.elements" dnd-disable-if="childrenRight.type !== \'custom\'" > <li class="each-children right" ng-repeat="sample in elements" dnd-draggable="sample" dnd-effect-allowed="move" dnd-moved="elements.splice($index, 1);vm.reduce()" dnd-disable-if="childrenRight.type !== \'custom\'" dnd-selected="vm.selected = sample" ng-class="{selected: vm.selected === sample}" ng-include="\'sample.html\'" > </li> </ul></script><script type="text/ng-template" id="childrenDown.html"><span class="arrow"> ^<br>|<br>{{ childrenDown.type }}<br>|<br> </span> <ul class="children-list down" dnd-list="childrenDown.elements" ng-init="elements = childrenDown.elements" dnd-disable-if="childrenDown.type !== \'custom\'" > <li class="each-children down" ng-repeat="sample in elements" dnd-draggable="sample" dnd-effect-allowed="move" dnd-disable-if="childrenDown.type !== \'custom\'" dnd-moved="elements.splice($index, 1);vm.reduce()" dnd-selected="vm.selected = sample" ng-class="{selected: vm.selected === sample}" ng-include="\'sample.html\'" > </li> </ul></script><div class="palette"><div class="tools"><h3>Tools</h3><div class="color-tools"><div class="new-color"><span class="new-color-label" dnd-draggable="vm.sampleTemplate" dnd-effect-allowed="copy" dnd-copied="vm.sampleTemplate.id = vm.nextId()" ng-style="{\'background-color\': vm.sampleTemplate.color}">Nuovo colore<br>(trascina da qui)</span></div><div class="delete-sample" dnd-list="[]"><span>Elimina colore<br>(trascina qui)</span></div><div><button ng-click="vm.reindex()">Riordina gli indici</button></div></div><span class="load-palette">Inserisci qui il codice salvato per ripristinare la palette<br><textarea ng-model="vm.insertedPalette">\n      </textarea><div><button ng-click="vm.loadPalette(vm.insertedPalette)">Carica</button></div></span></div><h5>Trascina qui sotto i colori per creare una palette. Clicca per selezionare, aggiungere colori dipendenti e cambiare esadecimali. Solo i colori custom possono essere modificati</h5><ul dnd-list="vm.palette"><li class="palette-element" ng-repeat="sample in vm.palette" dnd-draggable="sample" dnd-effect-allowed="move" dnd-moved="vm.palette.splice($index, 1)" dnd-selected="vm.selected = sample" ng-class="{selected: vm.selected === sample}" ng-include="\'sample.html\'"></li></ul><p>Copia il codice qui sotto per salvarti le modifiche</p><pre style="text-align: left">{{ vm.palette | json }}</pre></div>'),e.put("app/scene/scene.html",'<scene-wrapper scene="scene.fullScene" scroll="true"><scene-wrapper scene="scene.skyMountains"><div id="sky" class="absolute fill"><sky scene="scene.scenes.sky"></sky><mountains scene="scene.scenes.mountains"></mountains></div></scene-wrapper><road scene="scene.scenes.road"></road><church scene="scene.scenes.church"></church></scene-wrapper>'),e.put("app/scene/church/church.html",'<scene-wrapper scene="vm.scene" id="church-scene"><scene-element top="30" width="20"><svg viewbox="0 0 194.85 415.94"><g id="Livello_1"><polyline fill="#939393" points="18.738,349.583 18.238,342.292 63.571,305.312 138.571,304.49 183.238,342.161 183.738,349.331 138.405,311 64.405,311 18.738,349.917 18.738,349.917"></polyline><polyline fill="#606060" points="138.738,304.573 183.405,342.161 183.405,234 138.405,204.833 138.571,304.49"></polyline><polyline fill="#FFFFFF" points="29.405,227 29.405,140 45.405,140.167 45.405,216 29.405,227"></polyline><path fill="#FFFFFF" d="M29.155,97.875l0.5-40.25c0,0,3,2.75,6,2.25s5.125-2.25,5.125-2.25l1,40L29.155,97.875z"></path><path fill="#939393" d="M29.405,140v-26c0,0-6-2.833-6.667-7.167c-0.667-4.333-0.5-11-0.5-11s2.833,0,4.167,0.667 c1.333,0.667,16.5,1,16.5,1s6.5-1.833,6.5-1.167c0,0.667,0.5,12.667-1.167,14.5c-1.667,1.833-3,2.667-3,2.667l0.167,26.667 L29.405,140z"></path><polygon fill="#444444" points="29.655,57.625 35.53,0 40.78,57.625 35.155,61"></polygon><path fill="#444444" stroke="#070707" stroke-miterlimit="10" d="M35.53,0"></path><path fill="#444444" stroke="#070707" stroke-miterlimit="10" d="M97.738,113.854"></path><line fill="#444444" stroke="#000000" stroke-miterlimit="10" x1="97.738" y1="113.854" x2="97.905" y2="216.979"></line></g><g id="Livello_2"><polygon fill="#FFFFFF" stroke="#FFFFFF" stroke-miterlimit="10" points="63.905,305 63.905,267 97.238,233.5 137.905,266.833 137.905,304"></polygon><polyline fill="#FFFFFF" stroke="#FFFFFF" stroke-miterlimit="10" points="64.071,311.333 137.905,311.5 137.905,408.5 63.405,408.5 64.405,311"></polyline><polygon fill="#D3D3D3" points="91.405,409 91.405,339 100.238,324.667 110.78,340 111.405,409"></polygon><polygon fill="#D3D3D3" points="138.405,311.032 183.738,349.331 184.238,410.497 138.576,410.667"></polygon><polygon fill="#D3D3D3" points="64.405,310.75 63.571,409 18.405,409 18.738,349.792"></polygon><path fill="#444444" d="M35.405,389.833c0,0,2.093-22.862,7-22.771c5.667,0.105,7,20.499,6.833,22.605 C49.172,390.503,35.405,389.833,35.405,389.833z"></path><polygon fill="#939393" points="63.405,267 63.405,251 97.905,216.979 138.405,250.833 138.405,267 97.905,234"></polygon><polygon fill="#606060" points="18.405,342 18.405,234 62.738,204.5 63.571,305.312"></polygon><path fill="#4F4F4F" d="M62.905,251.167"></path><polygon fill="#444444" points="62.905,251.25 63.238,149.042 97.738,113.854 138.405,149 138.405,251 97.905,216.979"></polygon><path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M64.071,311.333"></path><path fill="none" d="M69.571,368.167"></path><path fill="#FCFCFC" d="M35.405,389.833c0,0,3.167-12.333,4.333-11.333c1.167,1,1.73,11.5,1.73,11.5L35.405,389.833z"></path><path fill="#FCFCFC" d="M42.405,389.833c0,0,2.167-12.333,3.333-11.333c1.167,1,2.73,11.5,2.73,11.5L42.405,389.833z"></path><path fill="#444444" d="M156.405,389.833c0,0,2.093-22.862,7-22.771c5.667,0.105,7,20.499,6.833,22.605 C170.172,390.503,156.405,389.833,156.405,389.833z"></path><path fill="#FCFCFC" d="M156.405,389.833c0,0,3.167-12.333,4.333-11.333c1.167,1,1.73,11.5,1.73,11.5L156.405,389.833z"></path><path fill="#FCFCFC" d="M163.405,389.833c0,0,2.167-12.333,3.333-11.333c1.167,1,2.73,11.5,2.73,11.5L163.405,389.833z"></path><path fill="none" stroke="#212120" stroke-miterlimit="10" d="M94.905,351.333"></path><path fill="#444444" d="M95.405,351.667c0,0,0.427-15.424,5.333-15.333c5.667,0.105,6.833,13.062,6.667,15.167 C107.338,352.336,95.405,351.667,95.405,351.667z"></path><path fill="#FCFCFC" d="M96.405,350.833c0,0,0.797-8.167,2.333-8.167c1.667,0,2.333,8.5,2.333,8.5L96.405,350.833z"></path><path fill="#FCFCFC" d="M101.571,351c0,0,0.157-8.167,1.667-8.167c2.372,0,3.213,8.106,3.23,8.167H101.571z"></path><path fill="#444444" d="M91.571,408.5c0,0,2-46.667,10.333-46.667s9.333,46.5,9.333,46.5"></path><path fill="#FCFCFC" d="M78.405,288.833c0,0,3.167-12.333,4.333-11.333s1.73,11.5,1.73,11.5L78.405,288.833z"></path><path fill="#444444" d="M78.405,292.833c0,0,2.093-22.862,7-22.771c5.667,0.105,7,20.499,6.833,22.605 C92.172,293.503,78.405,292.833,78.405,292.833z"></path><path fill="#444444" d="M95.405,292.833c0,0,2.093-22.862,7-22.771c5.667,0.105,7,20.499,6.833,22.605 C109.172,293.503,95.405,292.833,95.405,292.833z"></path><path fill="#444444" d="M112.405,292.833c0,0,2.093-22.862,7-22.771c5.667,0.105,7,20.499,6.833,22.605 C126.172,293.503,112.405,292.833,112.405,292.833z"></path><path fill="#FCFCFC" d="M96.405,291.833c0,0,3.167-12.333,4.333-11.333s1.73,11.5,1.73,11.5L96.405,291.833z"></path><path fill="#FCFCFC" d="M112.405,291.833c0,0,3.167-12.333,4.333-11.333s1.73,11.5,1.73,11.5L112.405,291.833z"></path><path fill="#FCFCFC" d="M119.405,291.833c0,0,2.167-12.333,3.333-11.333s2.73,11.5,2.73,11.5L119.405,291.833z"></path><path fill="#FCFCFC" d="M102.405,291.833c0,0,2.167-12.333,3.333-11.333s2.73,11.5,2.73,11.5L102.405,291.833z"></path><path fill="#FCFCFC" d="M85.405,291.833c0,0,2.167-12.333,3.333-11.333s2.73,11.5,2.73,11.5L85.405,291.833z"></path><path fill="#FCFCFC" d="M79.405,291.833c0,0,3.167-12.333,4.333-11.333s1.73,11.5,1.73,11.5L79.405,291.833z"></path></g></svg></scene-element></scene-wrapper>'),e.put("app/scene/mountains/mountains.html",'<scene-wrapper scene="vm.scene" id="mountains-scene"><scene-parallax start="vm.parallaxStart" end="vm.parallaxEnd" vertical="vm.layer3Parallax"><scene-parallax start="vm.sunriseStart" end="vm.parallaxEnd" vertical="vm.sunriseParallax"><scene-element top="5" width="16"><svg viewbox="0 0 64 64"><g class="sun" style="fill: url(\'#sun-gradient\')"><radialgradient id="sun-gradient" cx="32" cy="32" r="32" gradientunits="userSpaceOnUse"><stop id="sun-gradient-center" offset="0"></stop><stop id="sun-gradient-edge" offset="1"></stop></radialgradient><circle cx="32" cy="32" r="32"></circle></g></svg></scene-element></scene-parallax><scene-element top="30" width="100"><svg viewbox="0 0 625.333 275"><g class="mountains3"><polygon points="37.333,74 59.333,61.333 104.667,78.667 135.333,60.667 162,64.667 178,55.333 218,67.333 285.333,4 324,37.333 339.333,34 374,70.667 404,84.667 451.333,70 492,86 514,85.333 558,110 625.333,108.667 625.333,276 -0.667,276 -2.667,79.333"></polygon></g></svg></scene-element></scene-parallax><scene-parallax start="vm.parallaxStart" end="vm.parallaxEnd" vertical="vm.layer2Parallax"><scene-element top="30" width="100"><svg viewbox="0 0 625.333 221.667"><g class="mountains2"><path d="M-2,3l89.333,34l26-4.667l47.333,25.333l32.667,2.667L214,53l52,19.333c0,0,50.667-1.333,56.667-1.333 s114,13.333,114,13.333l60.667-16l24.667,6l88-48.667l16.667,12V223h-626L-2,3z"></path></g></svg></scene-element></scene-parallax><scene-parallax start="vm.parallaxStart" end="vm.parallaxEnd" vertical="vm.layer1Parallax"><scene-element top="33" width="100"><svg viewbox="0 0 627.333 172"><g class="mountains1"><polygon points="0,22 35.333,0 84.667,26 94,19.333 132.667,40.667 144.667,31.333 181.333,60 187.333,56.667 244.667,82.667 325.333,88.667 627.333,90 627.333,172 -2,172"></polygon></g></svg></scene-element><scene-parallax start="vm.parallaxStart" end="vm.parallaxEnd" horizontal="vm.cloud0Parallax"><scene-element top="5" horizontal="-40" width="27"><svg viewbox="0 70 300 111"><g class="clouds"><path d="M9.8,142.6c-4.2-8.7-4.3-19.2-0.3-28s12-15.6,21.3-18.2c2-9,8.2-17,16.5-21 c5.3-2.6,32.3-9.1,49.3,30.2c1.6,3.7,8.7,15,11.7,17.7c1.7,1.5,23.6,10.7,25.7,11.7c11.2,5.2,26.7,0.7,36,12.3 c18,4.7,35.2-10.6,49.4,0c1.3,1,2.7,2.1,4.2,2.7c2.3,0.9,4.8,0.6,7.2,0.5c15.4-1,31,2.7,44.3,10.4c2.6,1.5,5.2,3.2,8.2,4 c2.8,0.8,5.8,0.7,8.6,1.4c3.6,0.9,7.2,3.5,6.4,7.8c-0.3,1.3-1,2.6-2,3.5c-2.8,2.6-6.6,3-10.2,3c-16.1,0.2-32.6,0.6-48.7,0.1 c-16.6-0.5-30.4,0.1-47-0.1c-11.2-0.1-30.4,0.3-41.7,0c-38.6-1-65.3-1.6-99-3c-8.3-0.3-15.9-0.1-24.1-1.5 c-8.2-1.4-16.3-5.6-20.4-12.7c-4.1-7.2-2.9-17.6,4-22.2"></path></g></svg></scene-element><scene-parallax start="vm.parallaxStart" end="vm.parallaxEnd" horizontal="vm.cloud1Parallax"><scene-element top="20" horizontal="30" width="27"><svg viewbox="854 50 375 100"><g class="clouds"><path d="M854.5,124.3c0.5-9.5,9.6-16.7,18.9-18.8s18.9-0.3,28.3,1.5c-1.2-11.6,10.6-20.7,22.1-22.7 s23.3,0.5,34.8-0.9c16-1.9,27.2-31.8,43.4-31.3c2.5,0.1,14.3,5.4,24.3,10c9.1,4.2,19.5,4.5,28.8,0.8c8-3.2,17.3-6.3,21.5-5.4 c16.4,3.7,22.8,19.4,39.2,23.1c4.5,1,9.4,2.3,12.2,5.9c2,2.6,2,6.7,0.3,9.2c-0.6,0.8-0.1,1.9,0.9,2c14.7,0.4,28.8,6.5,42.3,12.6 c14.6,6.5,29.2,13.1,43.8,19.6c3.7,1.6,7.8,3.7,8.1,8.2c0.2,2.7-1.2,5.3-3.3,7c-4.4,3.4-10,3-15.2,2.6 c-63.2-4.9-126.9-4.2-190,1.9c-6.9,0.7-18.2,0.7-25.1,0.1c-16.9-1.4-46.8-1.5-61.1-1.8C900.6,147.3,853.3,148.8,854.5,124.3z"></path></g></svg></scene-element></scene-parallax></scene-parallax></scene-parallax><scene-parallax><scene-element top="37" width="100"><svg viewbox="2 0 623.333 122.333"><g class="mountains0"><path d="M0,46.333c0,0,81.333-12.667,90.667-12C100,35,172.667,59,172.667,59l34-14l46,20L360,25l12.667,10l6-3.333 L391.333,39L424,23.667l22.667,16.667c0,0,52-20.667,58-20.667S522,27,522,27s68.667-26.667,74-26s5.333,0.667,5.333,0.667 L626,12.333v110H-0.667L0,46.333z"></path></g></svg></scene-element></scene-parallax></scene-wrapper>'),e.put("app/scene/road/road.html",'<scene-wrapper scene="vm.scene" id="road-scene"><scene-parallax start="vm.vehiclesParallaxStart" end="vm.vehiclesParallaxEnd" horizontal="vm.scooterParallax"><scene-element top="vm.vehiclesParallaxTop" width="20" horizontal="vm.scooterHorizontal"><svg viewbox="0 0 640 480"><path fill="#E0DFD9" d="M491.535,175.864c0,0,16.215,14.636,26.965,27.386S529.25,216,529.25,216l0,0l18,24L532,248.944L480,207 l-20.333-17l9.833-18.083L491.535,175.864z"></path><path fill="#FFFFFF" d="M512.219,171.25c0,0-8.054,0.376-24.219,5.75c-22.315,7.419-27.258,13.213-27.258,13.213l0.293-44.717 L464.5,133l28.75,12.75L512.219,171.25z"></path><path fill="#999999" d="M235.5,307l64.167-23.666l47.944,0.831c0,0-27.61,48.835-17.277,51.835s75,14.666,77.333,13 s51-112.667,51-112.667L457,142.667c0,0,16.334,9,16.334,21.333s-13.667,26.333-13.667,26s30.666,8.208,43.333,20.771 s30,35.784,29,38.174s-33.36,29.694-53.666,52.723c-19.019,21.568-45.334,77.999-47.667,80.666s-75.666,2.001-81.333,1.334 S275,376.333,275,376.333"></path><path fill="#FFFFFF" d="M95,218v4c0,0,4.5,1,9,1s131.5,84,131.5,84l16.5,27.5c0,0,11-19.5,25-29.5s30-14,30-14l-6.779-6.44 L120.167,217.5L95,218z"></path><path fill="#0A0D0B" d="M456,143v-4c0,0,2.5-3,8-7.75s13.5-9.25,13.5-9.25s14.375,10.5,21.625,19.25s19.813,28.5,18.063,30 s-4.969,0-4.969,0s-10.977-15.25-22.727-22s-15.996-9.25-21.496-9.5s-6.961,5.746-6.961,5.746L456,143z"></path><path d="M611,377c0,35.347-28.653,64-64,64l0,0c-35.347,0-64-28.653-64-64l0,0c0-35.347,28.653-64,64-64l0,0 C582.347,313,611,341.653,611,377L611,377z"></path><path d="M220,377c0,35.347-28.653,64-64,64l0,0c-35.347,0-64-28.653-64-64l0,0c0-35.347,28.653-64,64-64l0,0 C191.347,313,220,341.653,220,377L220,377z"></path><path fill="#0A0D0B" d="M44.426,151.754c2.968-17.806,3.247-52.242,50.82-45.901c23.928,2.744,56.557,9.016,54.098,54.098 c0,0,3.278,32.788-8.197,38.525s-20.878,8.196-44.045,5.737S35.41,205.852,44.426,151.754z"></path><path fill="#0A0D0B" d="M238.771,225.524c88.524,17.213,117.992,54.099,117.992,54.099s-24.611,22.951-110.677-11.476 c0,0-53.487-17.817-72.059-28.147c-14.119-7.853-47.193-21-53.86-22.5c-5.685,0.268-14.97,0.65-17.544-0.172 c-2.27-3.109,0-6.557,0-6.557L238.771,225.524z"></path><path fill="#FFFFFF" stroke="#1F1800" stroke-miterlimit="10" d="M583.5,377.557c0,20.403-16.54,36.943-36.943,36.943h-0.113 c-20.403,0-36.943-16.54-36.943-36.943v-0.113c0-20.403,16.54-36.943,36.943-36.943h0.113c20.403,0,36.943,16.54,36.943,36.943 V377.557z"></path><path d="M556,378c0,5.522-4.478,10-10,10l0,0c-5.522,0-10-4.478-10-10l0,0c0-5.522,4.478-10,10-10l0,0 C551.522,368,556,372.478,556,378L556,378z"></path><path fill="#FFFFFF" stroke="#1F1800" stroke-miterlimit="10" d="M193.5,377.557c0,20.403-16.54,36.943-36.943,36.943h-0.113 c-20.403,0-36.943-16.54-36.943-36.943v-0.113c0-20.403,16.54-36.943,36.943-36.943h0.113c20.403,0,36.943,16.54,36.943,36.943 V377.557z"></path><path d="M166,377c0,5.522-4.478,10-10,10l0,0c-5.522,0-10-4.478-10-10l0,0c0-5.522,4.478-10,10-10l0,0 C161.522,367,166,371.478,166,377L166,377z"></path><path fill="#333333" d="M264.333,359c0,0-6,4-22.667,6s-21.333,0-21.333,0s0.667-10.666-4-13.333s5.333-1.334-10.667-6.667 s-95.333-28.667-95.333-28.667s-9.138-2-13.902,10.667s5.183,24,5.183,24L209,388c0,0,4.667-3,6-7s6.333-0.667,20.5-3 s32.167-10,32.167-10L264.333,359z"></path><path d="M448.948,163.394c4.006-4.616,4.547-10.706,1.21-13.601l0,0c-3.337-2.895-9.289-1.501-13.295,3.115l-0.028,0.034 c-4.006,4.616-4.547,10.706-1.21,13.601l0,0c3.337,2.895,9.289,1.5,13.295-3.115L448.948,163.394z"></path></svg></scene-element></scene-parallax><scene-parallax start="vm.vehiclesParallaxStart" end="vm.vehiclesParallaxEnd" horizontal="vm.carParallax"><scene-element top="vm.vehiclesParallaxTop" width="20" horizontal="vm.carHorizontal"><svg viewbox="90 100 410 257"><path fill="#DFF0F7" d="M250.189,214.855c9.948-7.437,38.038-52.06,34.526-58.353c-6.222-11.151-61.445,61.786-61.445,61.786"></path><lineargradient id="SVGID_1_" gradientunits="userSpaceOnUse" x1="288.7907" y1="154.9389" x2="300.0179" y2="315.4947"><stop offset="0.6032" style="stop-color:#FF0000"></stop><stop offset="0.6089" style="stop-color:#E00000"></stop><stop offset="0.781" style="stop-color:#CE0000"></stop><stop offset="0.7926" style="stop-color:#9E0000"></stop></lineargradient><path fill="url(#SVGID_1_)" d="M100.237,259.231c0,0,71.386-29.083,83.019-31.727s68.742-16.392,65.569-11.633 c-3.173,4.759,35.957-55.522,35.957-55.522l-5.288-4.759c0,0,32.405-2.045,58.695,0c18.028,1.402,34.726,6.506,47.062,12.162 c12.336,5.656,14.152,7.688,22.209,13.22c8.057,5.531,29.083,24.814,36.486,31.198c5.267,4.542,27.497,4.23,33.313,3.701 c5.817-0.529,10.576-4.23,13.748-4.23c1.586,0,3.106,4.002,4.263,8.317c1.156,4.315,1.95,8.941,2.083,10.191 c0.28,2.629,1.586,22.738-0.529,26.439c-2.115,3.701-10.576,15.864-10.576,15.864s-12.595,17.249-13.748,19.036 c-0.641,0.994-11.633,5.288-11.633,5.288s-8.461-48.119-35.957-39.13c-27.497,8.989-23.795,40.188-25.91,41.774 s-56.58,14.277-75.087,14.277s-97.825,6.345-100.469,3.702s-5.817-44.947-31.198-45.475s-37.544,28.554-38.072,31.198 c-0.529,2.644-2.115,15.864-2.115,15.864s-44.947,1.058-49.177-8.461c-4.23-9.518-8.461-27.497-8.461-27.497L100.237,259.231z"></path><path fill="#DFF0F7" d="M350.5,175.5L353,213c0,0,54.333,0.667,57.333,0s1.667-1-4-9.333c-5.667-8.333-10-13.68-17.333-18.173 s-10-5.16-23.333-7.493"></path><path fill="#DFF0F7" d="M403.333,230.333"></path><path d="M403.333,230.333l14.333,0.333l1.667,5c0,0-3.667,3.667-9,3.333c-5.333-0.333-6-1.667-6-1.667L403.333,230.333z"></path><path d="M312.928,237.559c0,0,2.225,0.636,4.212,0.715c1.987,0.079,4.689-0.318,6.915-0.238c2.225,0.079,4.61,0.556,4.61,0.556 s0.556,2.066,0.556,3.497s-0.318,3.338-0.318,3.338s-1.033-0.238-2.941-0.397c-1.27-0.106-3.974,0.318-6.517,0.238 c-2.543-0.079-6.199-1.51-6.199-1.51L312.928,237.559z"></path><line fill="#DFF0F7" x1="336.135" y1="245.666" x2="325.167" y2="244.712"></line><path fill="#DFF0F7" d="M99.65,263.33c0,0,8.544,2.314,11.304,2.492s13.885-0.089,14.063-0.801s-2.225,10.68-2.759,11.126 c-0.534,0.445-8.455,2.225-12.372,2.225c-3.916,0-13.437-0.996-13.941-1.558l3.261-13.483"></path><path d="M98.65,257.644"></path><path d="M177.439,294.13c0,0-11.633,5.817-12.691,16.921c-1.058,11.104-4.23,25.382,3.173,31.727 c7.403,6.345,28.026,11.633,35.429,0.529c7.403-11.104,16.392-36.486,5.288-43.889S181.141,289.371,177.439,294.13z"></path><path fill="#FFFFFF" d="M177.968,317.397c0.529,5.817,4.759,14.806,9.518,13.22c4.759-1.586,8.989-3.173,10.576-7.932 c0,0,5.288-11.633-4.23-15.335S177.439,311.58,177.968,317.397z"></path><path d="M396.885,353.883"></path><path fill="#DFF0F7" d="M268.5,213H337l-3.5-31c0-18.2-41.5-16.5-41.5-16.5l-17,33"></path><path d="M294.301,154.531c0,0,23.266-33.313,32.785-38.072s33.842-11.633,31.727-11.633s-29.612,13.22-31.198,13.22"></path><path d="M264.333,220.333c0,0,13.182,8,15.924,5.667s12.289-25-4.258-25c-4.667,0-6.667,0.667-9,3.667 S260.557,218.209,264.333,220.333z"></path><path fill="#6EB1D3" d="M282.582,183.129"></path><circle fill="#050505" cx="188.133" cy="320.985" r="29.414"></circle><ellipse fill="#050505" cx="431.452" cy="304.598" rx="27.845" ry="28.237"></ellipse><ellipse fill="#FFFFFF" cx="188.526" cy="322.161" rx="12.202" ry="11.093"></ellipse><ellipse fill="#FFFFFF" cx="431.452" cy="304.598" rx="12.202" ry="11.093"></ellipse></svg></scene-element></scene-parallax></scene-wrapper>'),
e.put("app/scene/sky/sky.html",'<scene-wrapper scene="scene"><scene-element top="16" width="15"><svg viewbox="0 0 64 64"><g class="moon"><circle cx="32" cy="32" r="32"></circle><g class="moon-craters"><circle cx="39" cy="12" r="7"></circle><circle cx="21" cy="45" r="12"></circle><circle cx="14" cy="25" r="9"></circle></g></g></svg></scene-element></scene-wrapper>')}]);