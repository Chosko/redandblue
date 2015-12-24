!function(){"use strict";angular.module("redandblue",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ui.bootstrap","sn.skrollr"])}(),function(){"use strict";function e(e){function t(e,t,a){}var a={restrict:"E",templateUrl:"app/main/sky/sky.html",link:t,scope:{scene:"="}};return a}angular.module("redandblue").directive("sky",e),e.$inject=["Anim8"]}(),function(){"use strict";function e(e,t,a,l){function n(){var e=this;e.toAnimate=[],e.vehiclesParallaxTop=30,e.vehiclesParallaxOffset=e.scene.height*e.vehiclesParallaxTop/100,e.vehiclesParallaxStart=e.scene.top-t.windowHeight+e.vehiclesParallaxOffset,e.vehiclesParallaxEnd=e.scene.bottom-t.windowHeight+e.vehiclesParallaxOffset,e.scooterHorizontal=-50,e.scooterParallax=50,e.carParallax=-e.scooterParallax,e.carHorizontal=-e.scooterHorizontal}function c(e,t,a,l){}var r={restrict:"E",templateUrl:"app/main/road/road.html",controller:n,bindToController:!0,controllerAs:"vm",link:c,scope:{scene:"="}};return r}angular.module("redandblue").directive("road",e),e.$inject=["Anim8","utils","SKY_NIGHT_COLOR","SKY_DAY_COLOR"]}(),function(){"use strict";function e(e,t,a,l){function n(){var n=this;n.toAnimate=[];var c=-n.scene.height/2,r=n.scene.top+c,s=n.scene.top;n.parallaxStart=n.scene.top-t.windowHeight,n.parallaxEnd=n.scene.bottom,n.sunriseStart=r,n.sunriseEnd=s,n.sunriseParallax=50,n.layer2Parallax=-60,n.layer1Parallax=-35,n.cloud0Parallax=10,n.cloud1Parallax=13;var i=a.clone().darken(2),o=tinygradient(["rgb(37,39,41)",l.clone().darken(6).desaturate(30)]).rgb(3),p=new e("#mountains-scene .mountains0");p.addKeyFrame(r,"fill: "+i.toRgbString()),p.addKeyFrame(s,"fill: "+o[0].toRgbString()),n.toAnimate.push(p);var d=new e("#mountains-scene .mountains1");d.addKeyFrame(r,"fill: "+i.toRgbString()),d.addKeyFrame(s,"fill: "+o[1].toRgbString()),n.toAnimate.push(d);var h=new e("#mountains-scene .mountains2,#mountains");h.addKeyFrame(r,"fill: "+i.toRgbString()),h.addKeyFrame(s,"fill: "+o[2].toRgbString()),n.toAnimate.push(h);var u=new e("#mountains-scene .clouds");u.addKeyFrame(r,"fill: "+i.toRgbString()),u.addKeyFrame(s,"fill: rgb(255,255,255)"),n.toAnimate.push(u);var m=new e("#sky");m.addKeyFrame(r,"background-color: "+a.toRgbString()),m.addKeyFrame(s,"background-color: "+l.toRgbString()),n.toAnimate.push(m);var f=new e("#sun-gradient-center");f.addKeyFrame(r,"stop-color:rgb(255, 40, 0)"),f.addKeyFrame(s,"stop-color:rgb(255, 233, 184)"),n.toAnimate.push(f);var g=new e("#sun-gradient-edge");g.addKeyFrame(r,"stop-color:rgb(255, 0, 0)"),g.addKeyFrame(s,"stop-color:rgb(255, 218, 130)"),n.toAnimate.push(g)}function c(t,a,l,n){e.start(n.toAnimate)}var r={restrict:"E",templateUrl:"app/main/mountains/mountains.html",controller:n,bindToController:!0,controllerAs:"vm",link:c,scope:{scene:"="}};return r}angular.module("redandblue").directive("mountains",e),e.$inject=["Anim8","utils","SKY_NIGHT_COLOR","SKY_DAY_COLOR"]}(),function(){"use strict";function e(e,t,a,l){function n(){var e=this;e.toAnimate=[]}function c(e,t,a,l){}var r={restrict:"E",templateUrl:"app/main/church/church.html",controller:n,bindToController:!0,controllerAs:"vm",link:c,scope:{scene:"="}};return r}angular.module("redandblue").directive("church",e),e.$inject=["Anim8","utils","SKY_NIGHT_COLOR","SKY_DAY_COLOR"]}(),function(){"use strict";function e(){var e={windowHeight:$(window).height(),windowWidth:$(window).width(),aspectRatio:$(window).width()/$(window).height()};return e}angular.module("redandblue").factory("utils",e)}(),function(){"use strict";function e(e){var t=0,a={},l={add:function(l,n,c){var r={};r.scaling=e.windowWidth/n,r.top=t,r.originalHeight=c,r.height=c*r.scaling,r.bottom=r.top+r.height,r.left=0,r.originalWidth=n,r.width=n*r.scaling,r.right=r.left+r.width,t=r.bottom,a[l]=r},calculateWrapper:function(e){var t=Number.MAX_VALUE,l=0,n=0,c=Number.MAX_VALUE;return angular.forEach(e,function(e){var r=a[e];r&&(r.top<t&&(t=r.top),r.right>l&&(l=r.right),r.bottom>n&&(n=r.bottom),r.left<c&&(c=r.left))}),{top:t,right:l,bottom:n,left:c,height:n-t,width:l-c}},getScenes:function(){return a}};return l}angular.module("redandblue").factory("scenes",e),e.$inject=["utils"]}(),function(){"use strict";function e(e){function t(t,a,l){var n=a.children(".scene-wrapper");if(t.sceneId||(t.sceneId="sw"+Math.ceil(1e7*Math.random())),t.recalculate=function(){t.scene.height&&n.css("height",t.scene.height+"px"),t.scene.width&&n.css("width",t.scene.width+"px"),t.scene.top&&n.css("top",t.scene.top+"px"),t.scene.left&&n.css("left",t.scene.left+"px")},t.recalculate(),t.scroll){n.addClass("animation fixed");var c=new e(n);c.addKeyFrame(t.scene.top,"top: 0px"),c.addKeyFrame(t.scene.bottom,"top: "+-t.scene.height+"px"),e.start(c)}t.$watch("scene",function(e,a){e!==a&&t.recalculate()})}var a={restrict:"E",template:'<div id="{{ sceneId }}" class="animation scene-wrapper" ng-class="{\'scroll\': scroll, \'no-scroll\': !scroll}"><ng-transclude></ng-transclude></div>',link:t,transclude:!0,scope:{scene:"=",scroll:"=",sceneId:"="}};return a}angular.module("redandblue").directive("sceneWrapper",e),e.$inject=["Anim8"]}(),function(){"use strict";function e(e){function t(t,a,l){if(t.start&&t.end){var n=a.children(".scene-parallax");t.vertical||(t.vertical=0),t.horizontal||(t.horizontal=0);var c=new e(n);c.addKeyFrame(t.start,"transform: translate("+-t.horizontal+"%, "+t.vertical+"%)"),c.addKeyFrame(t.end,"transform: translate("+t.horizontal+"%, "+-t.vertical+"%)"),e.start(c)}}var a={restrict:"E",template:'<div class="scene-parallax"><ng-transclude></ng-transclude></div>',link:t,transclude:!0,scope:{start:"=",end:"=",vertical:"=",horizontal:"="}};return a}angular.module("redandblue").directive("sceneParallax",e),e.$inject=["Anim8"]}(),function(){"use strict";function e(){function e(e,t,a){var l=t.children(".scene-element-vertical"),n=l.children(".scene-element-horizontal");e.top&&l.css("padding-top",(e.top||0)+"%"),e.horizontal&&n.css("left",e.horizontal+"%"),e.height&&n.css("height",e.height+"%"),e.width&&n.css("width",e.width+"%")}var t={restrict:"E",template:'<div class="scene-element scene-element-vertical"><div class="scene-element-horizontal"><ng-transclude></ng-transclude></div></div>',link:e,transclude:!0,scope:{top:"=",horizontal:"=",height:"=",width:"="}};return t}angular.module("redandblue").directive("sceneElement",e)}(),function(){"use strict";function e(e){var t=function(e){this.selector=e,this.keyframes={},this.statics=[]};return t.prototype.selector=null,t.prototype.keyframes=null,t.prototype.statics=null,t.prototype.addKeyFrame=function(e,t){e+="";var a,l=this.keyframes[e];a=Array.isArray(t)?t:[t],this.keyframes[e]=l?l.concat(a):a},t.prototype.addStatic=function(e,t){this.statics.push([e,t])},t.prototype.generate=function(){var e=this;$.each(e.statics,function(t,a){$(e.selector).css(a[0],a[1])});var t=!1;$.each(e.keyframes,function(a,l){$(e.selector).attr("data-"+a,l.join(";")),t=!0}),t&&$(e.selector).attr("sn-skrollr","")},t.start=function(t){angular.isArray(t)?angular.forEach(t,function(e){e.generate()}):t.generate(),e.refresh()},t.refresh=function(){e.refresh()},t}angular.module("redandblue").factory("Anim8",e),e.$inject=["snSkrollr"]}(),function(){"use strict";function e(e,t){var a=this;a.scenes=e.getScenes(),e.add("sky",1280,1280),e.add("mountains",1280,800),e.add("road",1280,800),e.add("church",1280,800),a.fullScene=e.calculateWrapper(["sky","mountains","road","church"]),a.skyMountains=e.calculateWrapper(["sky","mountains"]);var l=[],n=new t("#sky-wrapper");n.addKeyFrame(0,"top: 0px"),n.addKeyFrame(a.skyHeight,"top: "+-a.skyHeight+"px"),l.push(n),t.start(l)}angular.module("redandblue").controller("MainController",e),e.$inject=["scenes","Anim8"]}(),function(){"use strict";function e(e,t){t.init(),e.debug("runBlock end")}angular.module("redandblue").run(e),e.$inject=["$log","snSkrollr"]}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}angular.module("redandblue").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("redandblue").constant("toastr",toastr).constant("moment",moment).constant("Snap",Snap).constant("SKY_NIGHT_COLOR",tinycolor("rgb(0,0,40)")).constant("SKY_DAY_COLOR",tinycolor("rgb(136, 184, 216)"))}(),function(){"use strict";function e(e,t,a){e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0;var l=$(window).height();a.config={smoothScrolling:!0,smoothScrollingDuration:600,constants:{mountains:l,sun:l/2}}}angular.module("redandblue").config(e),e.$inject=["$logProvider","toastr","snSkrollrProvider"]}(),angular.module("redandblue").run(["$templateCache",function(e){e.put("app/main/main.html",'<scene-wrapper scene="main.fullScene" scroll="true"><scene-wrapper scene="main.skyMountains"><div id="sky" class="absolute fill"><sky scene="main.scenes.sky"></sky><mountains scene="main.scenes.mountains"></mountains></div></scene-wrapper><road scene="main.scenes.road"></road><church scene="main.scenes.church"></church></scene-wrapper>'),e.put("app/main/church/church.html",'<scene-wrapper scene="vm.scene" id="church-scene"><scene-element top="30" width="20"><svg viewbox="0 0 194.85 415.94"><g id="Livello_1"><polyline fill="#939393" points="18.738,349.583 18.238,342.292 63.571,305.312 138.571,304.49 183.238,342.161 183.738,349.331 138.405,311 64.405,311 18.738,349.917 18.738,349.917"></polyline><polyline fill="#606060" points="138.738,304.573 183.405,342.161 183.405,234 138.405,204.833 138.571,304.49"></polyline><polyline fill="#FFFFFF" points="29.405,227 29.405,140 45.405,140.167 45.405,216 29.405,227"></polyline><path fill="#FFFFFF" d="M29.155,97.875l0.5-40.25c0,0,3,2.75,6,2.25s5.125-2.25,5.125-2.25l1,40L29.155,97.875z"></path><path fill="#939393" d="M29.405,140v-26c0,0-6-2.833-6.667-7.167c-0.667-4.333-0.5-11-0.5-11s2.833,0,4.167,0.667 c1.333,0.667,16.5,1,16.5,1s6.5-1.833,6.5-1.167c0,0.667,0.5,12.667-1.167,14.5c-1.667,1.833-3,2.667-3,2.667l0.167,26.667 L29.405,140z"></path><polygon fill="#444444" points="29.655,57.625 35.53,0 40.78,57.625 35.155,61"></polygon><path fill="#444444" stroke="#070707" stroke-miterlimit="10" d="M35.53,0"></path><path fill="#444444" stroke="#070707" stroke-miterlimit="10" d="M97.738,113.854"></path><line fill="#444444" stroke="#000000" stroke-miterlimit="10" x1="97.738" y1="113.854" x2="97.905" y2="216.979"></line></g><g id="Livello_2"><polygon fill="#FFFFFF" stroke="#FFFFFF" stroke-miterlimit="10" points="63.905,305 63.905,267 97.238,233.5 137.905,266.833 137.905,304"></polygon><polyline fill="#FFFFFF" stroke="#FFFFFF" stroke-miterlimit="10" points="64.071,311.333 137.905,311.5 137.905,408.5 63.405,408.5 64.405,311"></polyline><polygon fill="#D3D3D3" points="91.405,409 91.405,339 100.238,324.667 110.78,340 111.405,409"></polygon><polygon fill="#D3D3D3" points="138.405,311.032 183.738,349.331 184.238,410.497 138.576,410.667"></polygon><polygon fill="#D3D3D3" points="64.405,310.75 63.571,409 18.405,409 18.738,349.792"></polygon><path fill="#444444" d="M35.405,389.833c0,0,2.093-22.862,7-22.771c5.667,0.105,7,20.499,6.833,22.605 C49.172,390.503,35.405,389.833,35.405,389.833z"></path><polygon fill="#939393" points="63.405,267 63.405,251 97.905,216.979 138.405,250.833 138.405,267 97.905,234"></polygon><polygon fill="#606060" points="18.405,342 18.405,234 62.738,204.5 63.571,305.312"></polygon><path fill="#4F4F4F" d="M62.905,251.167"></path><polygon fill="#444444" points="62.905,251.25 63.238,149.042 97.738,113.854 138.405,149 138.405,251 97.905,216.979"></polygon><path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M64.071,311.333"></path><path fill="none" d="M69.571,368.167"></path><path fill="#FCFCFC" d="M35.405,389.833c0,0,3.167-12.333,4.333-11.333c1.167,1,1.73,11.5,1.73,11.5L35.405,389.833z"></path><path fill="#FCFCFC" d="M42.405,389.833c0,0,2.167-12.333,3.333-11.333c1.167,1,2.73,11.5,2.73,11.5L42.405,389.833z"></path><path fill="#444444" d="M156.405,389.833c0,0,2.093-22.862,7-22.771c5.667,0.105,7,20.499,6.833,22.605 C170.172,390.503,156.405,389.833,156.405,389.833z"></path><path fill="#FCFCFC" d="M156.405,389.833c0,0,3.167-12.333,4.333-11.333c1.167,1,1.73,11.5,1.73,11.5L156.405,389.833z"></path><path fill="#FCFCFC" d="M163.405,389.833c0,0,2.167-12.333,3.333-11.333c1.167,1,2.73,11.5,2.73,11.5L163.405,389.833z"></path><path fill="none" stroke="#212120" stroke-miterlimit="10" d="M94.905,351.333"></path><path fill="#444444" d="M95.405,351.667c0,0,0.427-15.424,5.333-15.333c5.667,0.105,6.833,13.062,6.667,15.167 C107.338,352.336,95.405,351.667,95.405,351.667z"></path><path fill="#FCFCFC" d="M96.405,350.833c0,0,0.797-8.167,2.333-8.167c1.667,0,2.333,8.5,2.333,8.5L96.405,350.833z"></path><path fill="#FCFCFC" d="M101.571,351c0,0,0.157-8.167,1.667-8.167c2.372,0,3.213,8.106,3.23,8.167H101.571z"></path><path fill="#444444" d="M91.571,408.5c0,0,2-46.667,10.333-46.667s9.333,46.5,9.333,46.5"></path><path fill="#FCFCFC" d="M78.405,288.833c0,0,3.167-12.333,4.333-11.333s1.73,11.5,1.73,11.5L78.405,288.833z"></path><path fill="#444444" d="M78.405,292.833c0,0,2.093-22.862,7-22.771c5.667,0.105,7,20.499,6.833,22.605 C92.172,293.503,78.405,292.833,78.405,292.833z"></path><path fill="#444444" d="M95.405,292.833c0,0,2.093-22.862,7-22.771c5.667,0.105,7,20.499,6.833,22.605 C109.172,293.503,95.405,292.833,95.405,292.833z"></path><path fill="#444444" d="M112.405,292.833c0,0,2.093-22.862,7-22.771c5.667,0.105,7,20.499,6.833,22.605 C126.172,293.503,112.405,292.833,112.405,292.833z"></path><path fill="#FCFCFC" d="M96.405,291.833c0,0,3.167-12.333,4.333-11.333s1.73,11.5,1.73,11.5L96.405,291.833z"></path><path fill="#FCFCFC" d="M112.405,291.833c0,0,3.167-12.333,4.333-11.333s1.73,11.5,1.73,11.5L112.405,291.833z"></path><path fill="#FCFCFC" d="M119.405,291.833c0,0,2.167-12.333,3.333-11.333s2.73,11.5,2.73,11.5L119.405,291.833z"></path><path fill="#FCFCFC" d="M102.405,291.833c0,0,2.167-12.333,3.333-11.333s2.73,11.5,2.73,11.5L102.405,291.833z"></path><path fill="#FCFCFC" d="M85.405,291.833c0,0,2.167-12.333,3.333-11.333s2.73,11.5,2.73,11.5L85.405,291.833z"></path><path fill="#FCFCFC" d="M79.405,291.833c0,0,3.167-12.333,4.333-11.333s1.73,11.5,1.73,11.5L79.405,291.833z"></path></g></svg></scene-element></scene-wrapper>'),e.put("app/main/mountains/mountains.html",'<scene-wrapper scene="vm.scene" id="mountains-scene"><scene-parallax start="vm.parallaxStart" end="vm.parallaxEnd" vertical="vm.layer2Parallax"><scene-parallax start="vm.sunriseStart" end="vm.parallaxEnd" vertical="vm.sunriseParallax"><scene-element top="2" width="16"><svg viewbox="0 0 64 64"><g class="sun" style="fill: url(\'#sun-gradient\')"><radialgradient id="sun-gradient" cx="32" cy="32" r="32" gradientunits="userSpaceOnUse"><stop id="sun-gradient-center" offset="0"></stop><stop id="sun-gradient-edge" offset="1"></stop></radialgradient><circle cx="32" cy="32" r="32"></circle></g></svg></scene-element></scene-parallax><scene-element top="30" width="100"><svg viewbox="0 255 1280 545"><g class="mountains2"><path d="M-0.7,347.2c28.9-14.3,52.3-36.4,60.1-41.6c7.8-5.2,44.2,26,50.6,20.8s28.6-20.5,28.6-20.5 l31.2,10.1l18.2-3.6l27.3-18.2l48.1-36.4c0,0,14.3,13,18.2,14.3c3.9,1.3,31.2,14,31.2,14s40.4,21.8,53.2,15.6 c15.2-7.4,30.5-22.6,42.9-29.9c9.9-5.8,20.8-14,24.9-8.1c23.2,32.8,52.4-6.3,60.8,2.9c0,0,15.6,11.3,26,15.4 c10.4,4.1,19.8,9.9,36.4,6.7c8.9-1.7,57.9-35.2,59.7-30.9c5.4,12.5,36.4,20.3,44.2,30.9c7.8,10.6,26,0,41.6,2.6 c15.6,2.6,42.9-23.4,42.9-23.4s27.3,24.5,31.2,23.4c2.1-0.6,14.4-7.7,25.2-14c8.1-4.7,18.3-1.6,22.7,6.6c1.6,2.9,3.4,5.1,5.4,5.1 c6.5,0,28.6-9.3,28.6-9.3l8.9-8.1c4.3-3.9,10.9-3.7,14.9,0.4c7.9,8.1,20.9,19.1,29.4,15.7c13-5.2,29.9,0,36.4,0 c6.5,0,53.2,30.9,62.3,27c9.1-3.9,62,22.8,71.4,19.5c15.2-5.3,33.8-24.7,50.7-23.4c16.9,1.3,25.1-18.7,45.5-27.3 c5.9-2.5,34.5,12.5,58.4,11.7c11.5-0.4,45.2,2.6,45.2,2.6l-1.9,502.1L-1.2,799.5L-0.7,347.2z"></path></g></svg></scene-element></scene-parallax><scene-parallax start="vm.parallaxStart" end="vm.parallaxEnd" vertical="vm.layer1Parallax"><scene-element top="33" width="100"><svg viewbox="0 253 1280 548"><g class="mountains1"><path d="M-0.7,375.8c12.8-6.5,71.2-42.9,76.4-48.1c5.2-5.2,51.9-44.2,51.9-44.2s11.8,22.7,24,26.6 s51.3,16.3,64.3,19.5c13,3.2,120.7-19.9,121.3-19.3c0.6,0.6,15.1-21.6,22.9-26.8c7.8-5.2,45.9-32.3,59.7-26.1 c13.8,6.3,39,46.9,54.5,45.6s45.5-2.6,46.8,3.9c1.3,6.5,32.5,4.2,40.3,9.2c7.8,5.1,57.3-16.1,62.3-20.2c5-4.1,63.6-39.4,63.6-39.4 s29.9,59.7,29.9,59.6c0-0.1,26,51.8,33.8,51.8c7.8,0,61-89.6,61-89.6s15.6-17.7,27.3-21.8c11.7-4.2,27.3-4.4,27.3,0.9 c0,5.3,19.5,36.5,22.1,46.9s23.4,10.2,45.5,10.3c22.1,0.1,41.6-45.3,48.1-47.9c6.5-2.6,80.5-15.8,88.3-9.2 c7.8,6.6,16.9,14.4,24.7,19.6c7.8,5.2,8.3,11.5,23,15.5c14.7,4,22.5,6.6,38.1,10.5c15.6,3.9,9.1,6.3,42.9,11.6s40.7-19.9,58.5-18.6 c17.8,1.3,22.5-28.1,22.5-28.1l-0.7,532L-1.2,799.5L-0.7,375.8z"></path></g></svg></scene-element><scene-parallax start="vm.parallaxStart" end="vm.parallaxEnd" horizontal="vm.cloud0Parallax"><scene-element top="5" horizontal="-40" width="27"><svg viewbox="0 70 300 111"><g class="clouds"><path d="M9.8,142.6c-4.2-8.7-4.3-19.2-0.3-28s12-15.6,21.3-18.2c2-9,8.2-17,16.5-21 c5.3-2.6,32.3-9.1,49.3,30.2c1.6,3.7,8.7,15,11.7,17.7c1.7,1.5,23.6,10.7,25.7,11.7c11.2,5.2,26.7,0.7,36,12.3 c18,4.7,35.2-10.6,49.4,0c1.3,1,2.7,2.1,4.2,2.7c2.3,0.9,4.8,0.6,7.2,0.5c15.4-1,31,2.7,44.3,10.4c2.6,1.5,5.2,3.2,8.2,4 c2.8,0.8,5.8,0.7,8.6,1.4c3.6,0.9,7.2,3.5,6.4,7.8c-0.3,1.3-1,2.6-2,3.5c-2.8,2.6-6.6,3-10.2,3c-16.1,0.2-32.6,0.6-48.7,0.1 c-16.6-0.5-30.4,0.1-47-0.1c-11.2-0.1-30.4,0.3-41.7,0c-38.6-1-65.3-1.6-99-3c-8.3-0.3-15.9-0.1-24.1-1.5 c-8.2-1.4-16.3-5.6-20.4-12.7c-4.1-7.2-2.9-17.6,4-22.2"></path></g></svg></scene-element><scene-parallax start="vm.parallaxStart" end="vm.parallaxEnd" horizontal="vm.cloud1Parallax"><scene-element top="20" horizontal="30" width="27"><svg viewbox="854 50 375 100"><g class="clouds"><path d="M854.5,124.3c0.5-9.5,9.6-16.7,18.9-18.8s18.9-0.3,28.3,1.5c-1.2-11.6,10.6-20.7,22.1-22.7 s23.3,0.5,34.8-0.9c16-1.9,27.2-31.8,43.4-31.3c2.5,0.1,14.3,5.4,24.3,10c9.1,4.2,19.5,4.5,28.8,0.8c8-3.2,17.3-6.3,21.5-5.4 c16.4,3.7,22.8,19.4,39.2,23.1c4.5,1,9.4,2.3,12.2,5.9c2,2.6,2,6.7,0.3,9.2c-0.6,0.8-0.1,1.9,0.9,2c14.7,0.4,28.8,6.5,42.3,12.6 c14.6,6.5,29.2,13.1,43.8,19.6c3.7,1.6,7.8,3.7,8.1,8.2c0.2,2.7-1.2,5.3-3.3,7c-4.4,3.4-10,3-15.2,2.6 c-63.2-4.9-126.9-4.2-190,1.9c-6.9,0.7-18.2,0.7-25.1,0.1c-16.9-1.4-46.8-1.5-61.1-1.8C900.6,147.3,853.3,148.8,854.5,124.3z"></path></g></svg></scene-element></scene-parallax></scene-parallax><scene-parallax start="vm.parallaxStart" end="vm.parallaxEnd" horizontal="vm.cloud1Parallax"></scene-parallax></scene-parallax><scene-parallax><scene-element top="37" width="100"><svg viewbox="0 220 1280 570"><g class="mountains0"><path d="M1278.5,308.9c11.9,4.2-8.5,8.5-44.5-20.3c-14-11.2-55-40.4-65.4-34.1 c-10.4,6.3-75.6,56.9-90,61c-14.3,4.1-50.9,30.1-70.4,23.7c-19.6-6.3-121.3-8.9-144.8-23.8c-23.5-14.9-65.2-83.8-73-81.3 c-7.8,2.5-31.3,43-44.3,46.8c-13,3.8-32.6-2.5-32.6-2.5s-22.2-22.8-26.1-22.8c-3.9,0-33.9,16.5-41.7,21.5s-54.8,43-65.2,54.4 c-10.4,11.4-60.2,43.8-72.3,41.8c-36.1-6.2-30.7-2.5-59.4-10.1c-28.7-7.6-66.5-35.4-90-40.5c-23.5-5.1-67.8-74.7-67.8-74.7 s0,0-7.8-3.8c-7.8-3.8-31.3-25.3-40.4-22.8c-9,2.5-70.9,70.8-87.4,105.5c-5.4,11.5-8.7,18.6-25,26.1c-6.2,2.8-22.8,10.5-28.7,13.9 l-23.6,5.1l-79.8,37.5V800h1280.5L1278.5,308.9z"></path></g></svg></scene-element></scene-parallax></scene-wrapper>'),e.put("app/main/road/road.html",'<scene-wrapper scene="vm.scene" id="road-scene"><scene-parallax start="vm.vehiclesParallaxStart" end="vm.vehiclesParallaxEnd" horizontal="vm.scooterParallax"><scene-element top="vm.vehiclesParallaxTop" width="20" horizontal="vm.scooterHorizontal"><svg viewbox="0 0 640 480"><path fill="#E0DFD9" d="M491.535,175.864c0,0,16.215,14.636,26.965,27.386S529.25,216,529.25,216l0,0l18,24L532,248.944L480,207 l-20.333-17l9.833-18.083L491.535,175.864z"></path><path fill="#FFFFFF" d="M512.219,171.25c0,0-8.054,0.376-24.219,5.75c-22.315,7.419-27.258,13.213-27.258,13.213l0.293-44.717 L464.5,133l28.75,12.75L512.219,171.25z"></path><path fill="#999999" d="M235.5,307l64.167-23.666l47.944,0.831c0,0-27.61,48.835-17.277,51.835s75,14.666,77.333,13 s51-112.667,51-112.667L457,142.667c0,0,16.334,9,16.334,21.333s-13.667,26.333-13.667,26s30.666,8.208,43.333,20.771 s30,35.784,29,38.174s-33.36,29.694-53.666,52.723c-19.019,21.568-45.334,77.999-47.667,80.666s-75.666,2.001-81.333,1.334 S275,376.333,275,376.333"></path><path fill="#FFFFFF" d="M95,218v4c0,0,4.5,1,9,1s131.5,84,131.5,84l16.5,27.5c0,0,11-19.5,25-29.5s30-14,30-14l-6.779-6.44 L120.167,217.5L95,218z"></path><path fill="#0A0D0B" d="M456,143v-4c0,0,2.5-3,8-7.75s13.5-9.25,13.5-9.25s14.375,10.5,21.625,19.25s19.813,28.5,18.063,30 s-4.969,0-4.969,0s-10.977-15.25-22.727-22s-15.996-9.25-21.496-9.5s-6.961,5.746-6.961,5.746L456,143z"></path><path d="M611,377c0,35.347-28.653,64-64,64l0,0c-35.347,0-64-28.653-64-64l0,0c0-35.347,28.653-64,64-64l0,0 C582.347,313,611,341.653,611,377L611,377z"></path><path d="M220,377c0,35.347-28.653,64-64,64l0,0c-35.347,0-64-28.653-64-64l0,0c0-35.347,28.653-64,64-64l0,0 C191.347,313,220,341.653,220,377L220,377z"></path><path fill="#0A0D0B" d="M44.426,151.754c2.968-17.806,3.247-52.242,50.82-45.901c23.928,2.744,56.557,9.016,54.098,54.098 c0,0,3.278,32.788-8.197,38.525s-20.878,8.196-44.045,5.737S35.41,205.852,44.426,151.754z"></path><path fill="#0A0D0B" d="M238.771,225.524c88.524,17.213,117.992,54.099,117.992,54.099s-24.611,22.951-110.677-11.476 c0,0-53.487-17.817-72.059-28.147c-14.119-7.853-47.193-21-53.86-22.5c-5.685,0.268-14.97,0.65-17.544-0.172 c-2.27-3.109,0-6.557,0-6.557L238.771,225.524z"></path><path fill="#FFFFFF" stroke="#1F1800" stroke-miterlimit="10" d="M583.5,377.557c0,20.403-16.54,36.943-36.943,36.943h-0.113 c-20.403,0-36.943-16.54-36.943-36.943v-0.113c0-20.403,16.54-36.943,36.943-36.943h0.113c20.403,0,36.943,16.54,36.943,36.943 V377.557z"></path><path d="M556,378c0,5.522-4.478,10-10,10l0,0c-5.522,0-10-4.478-10-10l0,0c0-5.522,4.478-10,10-10l0,0 C551.522,368,556,372.478,556,378L556,378z"></path><path fill="#FFFFFF" stroke="#1F1800" stroke-miterlimit="10" d="M193.5,377.557c0,20.403-16.54,36.943-36.943,36.943h-0.113 c-20.403,0-36.943-16.54-36.943-36.943v-0.113c0-20.403,16.54-36.943,36.943-36.943h0.113c20.403,0,36.943,16.54,36.943,36.943 V377.557z"></path><path d="M166,377c0,5.522-4.478,10-10,10l0,0c-5.522,0-10-4.478-10-10l0,0c0-5.522,4.478-10,10-10l0,0 C161.522,367,166,371.478,166,377L166,377z"></path><path fill="#333333" d="M264.333,359c0,0-6,4-22.667,6s-21.333,0-21.333,0s0.667-10.666-4-13.333s5.333-1.334-10.667-6.667 s-95.333-28.667-95.333-28.667s-9.138-2-13.902,10.667s5.183,24,5.183,24L209,388c0,0,4.667-3,6-7s6.333-0.667,20.5-3 s32.167-10,32.167-10L264.333,359z"></path><path d="M448.948,163.394c4.006-4.616,4.547-10.706,1.21-13.601l0,0c-3.337-2.895-9.289-1.501-13.295,3.115l-0.028,0.034 c-4.006,4.616-4.547,10.706-1.21,13.601l0,0c3.337,2.895,9.289,1.5,13.295-3.115L448.948,163.394z"></path></svg></scene-element></scene-parallax><scene-parallax start="vm.vehiclesParallaxStart" end="vm.vehiclesParallaxEnd" horizontal="vm.carParallax"><scene-element top="vm.vehiclesParallaxTop" width="20" horizontal="vm.carHorizontal"><svg viewbox="90 100 410 257"><path fill="#DFF0F7" d="M250.189,214.855c9.948-7.437,38.038-52.06,34.526-58.353c-6.222-11.151-61.445,61.786-61.445,61.786"></path><lineargradient id="SVGID_1_" gradientunits="userSpaceOnUse" x1="288.7907" y1="154.9389" x2="300.0179" y2="315.4947"><stop offset="0.6032" style="stop-color:#FF0000"></stop><stop offset="0.6089" style="stop-color:#E00000"></stop><stop offset="0.781" style="stop-color:#CE0000"></stop><stop offset="0.7926" style="stop-color:#9E0000"></stop></lineargradient><path fill="url(#SVGID_1_)" d="M100.237,259.231c0,0,71.386-29.083,83.019-31.727s68.742-16.392,65.569-11.633 c-3.173,4.759,35.957-55.522,35.957-55.522l-5.288-4.759c0,0,32.405-2.045,58.695,0c18.028,1.402,34.726,6.506,47.062,12.162 c12.336,5.656,14.152,7.688,22.209,13.22c8.057,5.531,29.083,24.814,36.486,31.198c5.267,4.542,27.497,4.23,33.313,3.701 c5.817-0.529,10.576-4.23,13.748-4.23c1.586,0,3.106,4.002,4.263,8.317c1.156,4.315,1.95,8.941,2.083,10.191 c0.28,2.629,1.586,22.738-0.529,26.439c-2.115,3.701-10.576,15.864-10.576,15.864s-12.595,17.249-13.748,19.036 c-0.641,0.994-11.633,5.288-11.633,5.288s-8.461-48.119-35.957-39.13c-27.497,8.989-23.795,40.188-25.91,41.774 s-56.58,14.277-75.087,14.277s-97.825,6.345-100.469,3.702s-5.817-44.947-31.198-45.475s-37.544,28.554-38.072,31.198 c-0.529,2.644-2.115,15.864-2.115,15.864s-44.947,1.058-49.177-8.461c-4.23-9.518-8.461-27.497-8.461-27.497L100.237,259.231z"></path><path fill="#DFF0F7" d="M350.5,175.5L353,213c0,0,54.333,0.667,57.333,0s1.667-1-4-9.333c-5.667-8.333-10-13.68-17.333-18.173 s-10-5.16-23.333-7.493"></path><path fill="#DFF0F7" d="M403.333,230.333"></path><path d="M403.333,230.333l14.333,0.333l1.667,5c0,0-3.667,3.667-9,3.333c-5.333-0.333-6-1.667-6-1.667L403.333,230.333z"></path><path d="M312.928,237.559c0,0,2.225,0.636,4.212,0.715c1.987,0.079,4.689-0.318,6.915-0.238c2.225,0.079,4.61,0.556,4.61,0.556 s0.556,2.066,0.556,3.497s-0.318,3.338-0.318,3.338s-1.033-0.238-2.941-0.397c-1.27-0.106-3.974,0.318-6.517,0.238 c-2.543-0.079-6.199-1.51-6.199-1.51L312.928,237.559z"></path><line fill="#DFF0F7" x1="336.135" y1="245.666" x2="325.167" y2="244.712"></line><path fill="#DFF0F7" d="M99.65,263.33c0,0,8.544,2.314,11.304,2.492s13.885-0.089,14.063-0.801s-2.225,10.68-2.759,11.126 c-0.534,0.445-8.455,2.225-12.372,2.225c-3.916,0-13.437-0.996-13.941-1.558l3.261-13.483"></path><path d="M98.65,257.644"></path><path d="M177.439,294.13c0,0-11.633,5.817-12.691,16.921c-1.058,11.104-4.23,25.382,3.173,31.727 c7.403,6.345,28.026,11.633,35.429,0.529c7.403-11.104,16.392-36.486,5.288-43.889S181.141,289.371,177.439,294.13z"></path><path fill="#FFFFFF" d="M177.968,317.397c0.529,5.817,4.759,14.806,9.518,13.22c4.759-1.586,8.989-3.173,10.576-7.932 c0,0,5.288-11.633-4.23-15.335S177.439,311.58,177.968,317.397z"></path><path d="M396.885,353.883"></path><path fill="#DFF0F7" d="M268.5,213H337l-3.5-31c0-18.2-41.5-16.5-41.5-16.5l-17,33"></path><path d="M294.301,154.531c0,0,23.266-33.313,32.785-38.072s33.842-11.633,31.727-11.633s-29.612,13.22-31.198,13.22"></path><path d="M264.333,220.333c0,0,13.182,8,15.924,5.667s12.289-25-4.258-25c-4.667,0-6.667,0.667-9,3.667 S260.557,218.209,264.333,220.333z"></path><path fill="#6EB1D3" d="M282.582,183.129"></path><circle fill="#050505" cx="188.133" cy="320.985" r="29.414"></circle><ellipse fill="#050505" cx="431.452" cy="304.598" rx="27.845" ry="28.237"></ellipse><ellipse fill="#FFFFFF" cx="188.526" cy="322.161" rx="12.202" ry="11.093"></ellipse><ellipse fill="#FFFFFF" cx="431.452" cy="304.598" rx="12.202" ry="11.093"></ellipse></svg></scene-element></scene-parallax></scene-wrapper>'),e.put("app/main/sky/sky.html",'<scene-wrapper scene="scene"><scene-element top="16" width="15"><svg viewbox="0 0 64 64"><g class="moon"><circle cx="32" cy="32" r="32"></circle><g class="moon-craters"><circle cx="39" cy="12" r="7"></circle><circle cx="21" cy="45" r="12"></circle><circle cx="14" cy="25" r="9"></circle></g></g></svg></scene-element></scene-wrapper>')}]);