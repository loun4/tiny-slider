var tns=function(){"use strict";function t(t){function f(){return"gallery"===zt||"page"===t.slideBy?Rt:t.slideBy}function m(){if(Gt<=Rt){Kt=!1;var n;mn="gallery"===zt?0:en,mn!==n&&T.emit("indexChanged",gt()),dn&&c(dn),cn&&c(cn),An&&c(An)}else Kt=t.arrowKeys,un&&u(dn),sn&&u(cn),wn&&u(An)}function y(){if(r(Wt,{"data-tns-role":"wrapper"}),r(Ht,{"data-tns-role":"content-wrapper"}),"vertical"===Ot?r(Ht,{"data-tns-hidden":"y"}):r(Wt,{"data-tns-hidden":"x"}),"carousel"===zt){var t=Xt&&Ut?q():Ut?Ut+Ft:0;Ht.style.cssText="horizontal"===Ot?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+Ut+"px; height: "+j()+"px;"}}function A(){Dt=Gn(),Rt=Hn(),At=an-Rt-bn,"horizontal"!==Ot||Xt||(tn=Bn()),Tt=qn(),jt=f()}function D(){""===Bt.id&&(Bt.id=_t);var t="";if(Ot&&(t+=Ot),Qt&&(t+=" autoheight"),r(Bt,{"data-tns-role":"content","data-tns-mode":zt,"data-tns-features":t}),"carousel"===zt)if("horizontal"===Ot){var n="width: "+(tn+1)*an+"px; ",e=-mn*tn,a=p?p+": translate3d("+e+"px, 0px, 0px)":"left: "+e+"px";Bt.style.cssText+=n+a}else{var i=-wt[mn];Bt.style.cssText+=p?p+": translate3d(0px, "+i+"px, 0px)":"top: "+i+"px"}}function k(){navigator.msMaxTouchPoints&&(Wt.classList.add("ms-touch"),h(Wt,["scroll",ct]))}function I(){for(var t=0;t<Gt;t++){var n=qt[t];n.id=_t+"-item"+t,"gallery"===zt&&zn&&n.classList.add(zn),r(n,{"aria-hidden":"true"});var e="horizontal"===Ot?"right":"bottom",a="";"carousel"===zt&&(a="margin-"+e+": "+Ft+"px;"),"horizontal"===Ot&&(a="width: "+(tn-Ft)+"px; "+a),n.style.cssText+=a}if(Jt||Ut){for(var i=document.createDocumentFragment(),o=document.createDocumentFragment(),l=en;l--;){var c=l%Gt,u=qt[c].cloneNode(!0);if(s(u,"id"),o.insertBefore(u,o.firstChild),"carousel"===zt){var d=qt[Gt-1-c].cloneNode(!0);s(d,"id"),i.appendChild(d)}}Bt.insertBefore(i,Bt.firstChild),Bt.appendChild(o),qt=Bt.children}}function L(){sn&&(t.controlsContainer||(gn.append(Wt,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+_t+'" type="button">'+ln[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+_t+'" type="button">'+ln[1]+"</button></div>"),cn=Wt.querySelector('[data-tns-role="controls"]')),Et=cn.querySelector('[data-controls="prev"]'),Ct=cn.querySelector('[data-controls="next"]'),i(cn,"tabindex")||(r(cn,{"aria-label":"Carousel Navigation"}),r(cn.children,{"aria-controls":_t,tabindex:"-1"})))}function N(){if(un){if(!t.navContainer){for(var n="",e=0;e<Gt;e++)n+='<button data-slide="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+_t+"-item"+e+'" type="button"></button>';wn&&(n+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Mn[0]+"</button>"),n='<div data-tns-role="nav" aria-label="Carousel Pagination">'+n+"</div>",gn.append(Wt,n),dn=Wt.querySelector('[data-tns-role="nav"]')}if(Mt=dn.querySelectorAll("[data-slide]"),!i(dn,"aria-label")){r(dn,{"aria-label":"Carousel Pagination"});for(var a=0;a<Gt;a++)r(Mt[a],{tabindex:"-1","aria-selected":"false","aria-controls":_t+"-item"+a})}for(var o=Tt;o<Gt;o++)r(Mt[o],{hidden:""});fn=Tt}}function P(){wn&&(dn||(gn.append(Wt,'<div data-tns-role="nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Mn[0]+"</button></div>"),dn=Wt.querySelector('[data-tns-role="nav"]')),An||(An=dn.querySelector("[data-action]")),et())}function S(){for(var t=mn;t<mn+Rt;t++){var n=qt[t];r(n,{"aria-hidden":"false"}),"gallery"===zt&&(n.style.marginLeft=tn*(t-mn)+"px",n.classList.remove(zn),n.classList.add(Pn))}sn&&(r(Ct,{tabindex:"0"}),(mn===xn&&!Jt||Vt)&&(Et.disabled=!0)),un&&r(Mt[0],{tabindex:"0","aria-selected":"true"})}function z(){if("carousel"===zt&&(x&&h(Bt,[x,Q]),In&&h(Bt,[["touchstart",ut],["touchmove",dt],["touchend",ft],["touchcancel",ft]])),un)for(var t=0;t<Gt;t++)h(Mt[t],[["click",nt],["keydown",lt]]);sn&&(h(Et,[["click",_],["keydown",st]]),h(Ct,[["click",tt],["keydown",st]])),wn&&(h(An,["click",it]),Tn&&(h(Bt,["mouseover",function(){Dn&&(at(),kn=!0)}]),h(Bt,["mouseout",function(){!Dn&&kn&&(et(),kn=!1)}]))),Kt&&h(document,["keydown",ot]),h(window,[["resize",bt],["scroll",xt]])}function O(){if($t&&gn.isInViewport(Bt)){for(var t=[],n=mn-1;n<mn+Rt+1;n++){for(var e=qt[n].querySelectorAll('[data-tns-role="lazy-img"]'),a=e.length;a--;t.unshift(e[a]));t.unshift()}for(var i=t.length;i--;){var r=t[i];r.classList.contains("loaded")||(r.src=o(r,"data-src"),r.classList.add("loaded"))}}}function W(){if(Qt){for(var t=[],n=mn;n<mn+Rt;n++)for(var e=qt[n].querySelectorAll("img"),a=e.length;a--;)t.push(e[a]);0===t.length?G():H(t)}}function H(t){for(var n=t.length;n--;)d(t[n])&&t.splice(n,1);0===t.length?G():setTimeout(function(){H(t)},16)}function B(){gn.wrap(Bt,Ht),gn.wrap(Ht,Wt),A(),I(),"vertical"===Ot&&R(),y(),D(),k(),L(),N(),P(),S(),z(),m(),O(),W(),T.emit("initialized",gt())}function q(){return(Dt%tn+Ft)/2}function G(){for(var t,n=[],e=mn;e<mn+Rt;e++)n.push(qt[e].offsetHeight);t=Math.max.apply(null,n),Bt.style.height!==t&&(g&&Y(1),Bt.style.height=t+"px")}function R(){wt=[0];for(var t,n=qt[0].getBoundingClientRect().top,e=1;e<an;e++)t=qt[e].getBoundingClientRect().top,wt.push(t-n)}function j(){return wt[mn+Rt]-wt[mn]}function F(){Wt.style.msScrollSnapPointsX="snapInterval(0%, "+tn+")"}function U(){var t,n,e,a;mn!==yn&&(mn>yn?(t=yn,n=Math.min(yn+Rt,mn),e=Math.max(yn+Rt,mn),a=mn+Rt):(t=Math.max(mn+Rt,yn),n=yn+Rt,e=mn,a=Math.min(mn+Rt,yn))),jt%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),a=Math.round(a));for(var i=t;i<n;i++)r(qt[i],{"aria-hidden":"true"});for(var o=e;o<a;o++)r(qt[o],{"aria-hidden":"false"})}function X(){un&&(hn===-1?t.navContainer?vn=mn%Gt:(vn=Math.floor(mn%Gt/Rt),Jt||Gt%Rt===0||mn!==At||(vn+=1)):(vn=hn,hn=-1),vn!==pn&&(r(Mt[pn],{tabindex:"-1","aria-selected":"false"}),r(Mt[vn],{tabindex:"0","aria-selected":"true"}),pn=vn))}function K(){if(sn&&!Jt){var t=[],n=[];if(mn===xn?(t.push(Et),n.push(Ct),rt(Et,Ct)):Vt||mn!==At?n.push(Et,Ct):(t.push(Ct),n.push(Et),rt(Ct,Et)),t.length>0)for(var e=t.length;e--;){var a=t[e];a.disabled||(a.disabled=!0,r(a,{tabindex:"-1"}))}if(n.length>0)for(var i=n.length;i--;){var o=n[i];o.disabled&&(o.disabled=!1,r(o,{tabindex:"0"}))}}}function Y(t,n){t=0===t?"":Yt/1e3+"s",n=n||Bt,n.style[g]=t,"gallery"===zt&&(n.style[w]=t),"vertical"===Ot&&(Ht.style[g]=t)}function V(t,n){g&&Y(t),Rn(n)}function J(){r(Bt,{"aria-busy":"true"}),rn&&jn(),mn!==yn&&T.emit("indexChanged",gt()),p&&T.emit("transitionStart",gt()),V(),x||Q()}function Q(t){if(x&&T.emit("transitionEnd",gt(t)),"gallery"===zt&&nn.length>0)for(var n=0;n<Rt;n++){var e=nn[n];g&&Y(0,e),On&&b&&(e.style[b]=e.style[E]=""),e.classList.remove(Sn),e.classList.add(zn),e.style.marginLeft=""}if(!x||t&&"height"!==t.propertyName){if(!rn){var a=mn;jn(),mn!==a&&(V(0),T.emit("indexChanged",gt()))}U(),X(),K(),O(),W(),s(Bt,"aria-busy"),Z()}}function Z(){yn=mn}function $(t){"true"!==o(Bt,"aria-busy")&&(mn+=t*jt,J())}function _(){$(-1)}function tt(){$(Vt&&mn===At?-(At-xn)/jt:1)}function nt(n){if("true"!==o(Bt,"aria-busy")){for(var e,a=n.target||n.srcElement;gn.indexOf(Mt,a)===-1;)a=a.parentNode;e=hn=Number(o(a,"data-slide")),mn=t.navContainer?e+en:e*Rt+en,mn!==yn&&J()}}function et(){kt=setInterval(function(){$(Cn)},En),An.setAttribute("data-action","stop"),An.innerHTML="<span hidden>Stop Animation</span>"+Mn[1],Dn=!0}function at(){clearInterval(kt),An.setAttribute("data-action","start"),An.innerHTML="<span hidden>Stop Animation</span>"+Mn[0],Dn=!1}function it(){Dn?at():et()}function ot(t){switch(t=t||window.event,t.keyCode){case M.LEFT:_();break;case M.RIGHT:tt()}}function rt(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function st(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case M.LEFT:case M.UP:case M.HOME:case M.PAGEUP:e!==Et&&Et.disabled!==!0&&rt(e,Et);break;case M.RIGHT:case M.DOWN:case M.END:case M.PAGEDOWN:e!==Ct&&Ct.disabled!==!0&&rt(e,Ct);break;case M.ENTER:case M.SPACE:e===Ct?tt():_()}}function lt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,a=o(e,"data-slide");switch(n){case M.LEFT:case M.PAGEUP:a>0&&rt(e,e.previousElementSibling);break;case M.UP:case M.HOME:0!==a&&rt(e,Mt[0]);break;case M.RIGHT:case M.PAGEDOWN:a<Tt-1&&rt(e,e.nextElementSibling);break;case M.DOWN:case M.END:a<Tt-1&&rt(e,Mt[Tt-1]);break;case M.ENTER:case M.SPACE:nt(t)}}function ct(){V(0,Bt.scrollLeft()),Z()}function ut(t){var n=t.changedTouches[0];Ln=parseInt(n.clientX),Nn=parseInt(n.clientY);var e="horizontal"===Ot?[12,-13]:[17,-8];It=Number(Bt.style[p].slice(e[0],e[1])),T.emit("touchStart",gt(t))}function dt(t){var n=t.changedTouches[0];if(Lt=parseInt(n.clientX)-Ln,Nt=parseInt(n.clientY)-Nn,a(e(Nt,Lt),15)===Ot){Pt=!0,t.preventDefault(),T.emit("touchMove",gt(t));var i=0,o=0;"horizontal"===Ot?i=It+Lt:o=It+Nt,Y(0),Bt.style[p]="translate3d("+i+"px, "+o+"px, 0px"}}function ft(t){var n=t.changedTouches[0];if(Lt=parseInt(n.clientX)-Ln,Nt=parseInt(n.clientY)-Nn,T.emit("touchEnd",gt(t)),Pt){if(Pt=!1,t.preventDefault(),"horizontal"===Ot)mn=-(It+Lt)/tn,mn=Lt>0?Math.floor(mn):Math.ceil(mn);else{var e=-(It+Nt);if(e<=0)mn=xn;else if(e>=wt[wt.length-1])mn=At;else{var a=0;do a++,mn=Nt<0?a+1:a;while(a<an&&e>=Math.round(wt[a+1]))}}J()}}function ht(){Bt.style.width=(tn+1)*an+"px";for(var t=an;t--;)qt[t].style.width=tn-Ft+"px"}function vt(){for(var t=mn+1,n=mn+Rt;t<n;t++)qt[t].style.marginLeft=tn*(t-mn)+"px"}function pt(){Ht.style.cssText="margin: 0px "+q()+"px"}function mt(){Ht.style.height=j()+"px"}function yt(){if(Tt!==fn)if(Tt>fn)for(var t=fn;t<Tt;t++)s(Mt[t],"hidden");else for(var n=Tt;n<fn;n++)r(Mt[n],{hidden:""});fn=Tt}function gt(t){return{container:Bt,slideItems:qt,navItems:Mt,prevButton:Et,nextButton:Ct,items:Rt,index:mn,indexCached:yn,navCurrent:vn,navCurrentCached:pn,slideCount:Gt,cloneCount:en,slideCountNew:an,event:t||{}}}function bt(){clearTimeout(St),St=setTimeout(function(){if(Dt!==Gn()){var n=mn,e=Rt;A(),m(),jn(),"horizontal"===Ot?Xt&&Ut?pt():(ht(),"gallery"===zt&&vt()):(R(),mt()),mn!==n&&(T.emit("indexChanged",gt()),U(),Jt||K()),Rt===e||t.navContainer||(yt(),X()),(mn!==n||"carousel"===zt&&!Xt)&&V(0),mn===n&&Rt===e&&"gallery"!==zt||(W(),O()),navigator.msMaxTouchPoints&&F()}},100)}function xt(){Wn||window.requestAnimationFrame(function(){O(),Wn=!1}),Wn=!0}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","pause"],autoplayHoverPause:!1,autoplayButton:!1,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{destory:function(){},events:T};var wt,Et,Ct,Mt,Tt,At,Dt,kt,It,Lt,Nt,Pt,St,zt=t.mode,Ot=t.axis,Wt=document.createElement("div"),Ht=document.createElement("div"),Bt=t.container,qt=Bt.children,Gt=qt.length,Rt=t.items,jt=f(),Ft=t.gutter,Ut="gallery"!==zt&&t.edgePadding,Xt=t.fixedWidth,Kt=t.arrowKeys,Yt=t.speed,Vt=t.rewind,Jt="gallery"===zt||!t.rewind&&t.loop,Qt="gallery"===zt||t.autoHeight,Zt=!Xt&&t.responsive,$t=t.lazyload,_t=Bt.id||n(),tn=Xt?Xt+Ft:0,nn=[],en=Jt?2*Gt:Ut?1:0,an="gallery"===zt?Gt+en:Gt+2*en,on=!(!Xt||Jt||Ut),rn="gallery"===zt||!Jt,sn=t.controls,ln=t.controlsText,cn=!!t.controlsContainer&&t.controlsContainer,un=t.nav,dn=!!t.navContainer&&t.navContainer,fn=Gt,hn=-1,vn=0,pn=0,mn="gallery"===zt?0:en,yn=mn,bn=Ut?1:0,xn=bn,wn=t.autoplay,En=t.autoplayTimeout,Cn="forward"===t.autoplayDirection?1:-1,Mn=t.autoplayText,Tn=t.autoplayHoverPause,An=t.autoplayButton,Dn=!1,kn=!1,In=t.touch,Ln=0,Nn=0,Pn=w?t.animateIn:"tns-fadeIn",Sn=w?t.animateOut:"tns-fadeOut",zn=w?t.animateNormal:"tns-normal",On=!!w&&t.animateDelay,Wn=!1,Hn=function(){return Xt?function(){return Math.max(1,Math.min(Gt,Math.floor(Dt/Xt)))}:function(){var n=t.items,e="object"==typeof Zt&&Object.keys(Zt);if(e)for(var a=0;a<e.length;a++)Dt>=e[a]&&(n=Zt[e[a]]);return Math.max(1,Math.min(Gt,n))}}(),Bn=function(){return navigator.appVersion.indexOf("MSIE 8")>0?function(){return Math.round((Dt+Ft)/Rt)}:function(){return(Dt+Ft)/Rt}}(),qn=function(){return t.navContainer?function(){return Gt}:function(){return Math.ceil(Gt/Rt)}}(),Gn=function(){return"horizontal"===Ot&&!Xt&&Ut?function(){return Wt.clientWidth-2*(Ut+Ft)}:function(){return Wt.clientWidth}}();B();var Rn=function(){return"carousel"===zt?function(t){t||(t="horizontal"===Ot?-tn*mn:-wt[mn]),on&&mn===At&&(t=Math.max(t,-an*tn+Dt+Ft));var n="translate3d(",e={x:[p,n,t,"px, 0px, 0px)"],y:[p,n+"0px, ",t,"px, 0px)"],l:["left","",t,"px"],t:["top","",t,"px"]},a="horizontal"===Ot?p?"x":"l":p?"y":"t";Bt.style[e[a][0]]=e[a][1]+e[a][2]+e[a][3],"vertical"===Ot&&(Ht.style.height=j()+"px")}:function(){nn=[],v(qt[yn],[[x,Q],[C,Q]]),h(qt[mn],[[x,Q],[C,Q]]),function(){for(var t=yn,n=yn+Rt;t<n;t++){var e=qt[t];if(g&&Y(1,e),On&&b){var a=On*(t-yn)/1e3;e.style[b]=a+"s",e.style[E]=a+"s"}e.classList.remove(Pn),e.classList.add(Sn),nn.push(e)}}(),function(){for(var t=mn,n=mn+Rt;t<n;t++){var e=qt[t];if(g&&Y(1,e),On&&b){var a=On*(t-mn)/1e3;e.style[b]=a+"s",e.style[E]=a+"s"}e.classList.remove(zn),e.classList.add(Pn),t>mn&&(e.style.marginLeft=(t-mn)*tn+"px")}}()}}(),jn=function(){return Jt?function(){var t="carousel"===zt?jt+xn:xn,n="carousel"===zt?At-jt:At;if(Xt&&Dt%tn!==0&&(n-=1),mn>n)for(;mn>=t+Gt;)mn-=Gt;else if(mn<t)for(;mn<=n-Gt;)mn+=Gt}:function(){mn=Math.max(xn,Math.min(At,mn))}}();return{getInfo:gt,events:T,destory:function(){if(gn.unwrap(Wt),gn.unwrap(Ht),Wt=Ht=null,s(Bt,["id","style","data-tns-role","data-tns-features"]),Jt)for(var n=en;n--;)qt[0].remove(),qt[qt.length-1].remove();s(qt,["id","style","aria-hidden"]),_t=Gt=null,sn&&(t.controlsContainer?(s(cn,["aria-label"]),s(cn.children,["aria-controls","tabindex"]),l(cn)):(cn.remove(),cn=Et=Ct=null)),un&&(t.navContainer?(s(dn,["aria-label"]),s(Mt,["aria-selected","aria-controls","tabindex"]),l(dn)):(dn.remove(),dn=null),Mt=null),wn&&(t.navContainer||null===dn?l(An):(dn.remove(),dn=null)),l(Bt),Kt&&v(document,["keydown",ot]),v(window,[["resize",bt],["scroll",xt]])}}}function n(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function a(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function i(t,n){return t.hasAttribute(n)}function o(t,n){return t.getAttribute(n)}function r(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var a in n)t[e].setAttribute(a,n[a])}function s(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,a=t.length;a--;)for(var i=e;i--;)t[a].removeAttribute(n[i])}function l(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function c(t){i(t,"hidden")||r(t,{hidden:""})}function u(t){i(t,"hidden")&&s(t,"hidden")}function d(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(t){var n,e=document.createElement("fakeelement");for(n in t)if(void 0!==e.style[n])return[n,t[n][0],t[n][1]];return!1}function h(t,n){function e(n){t.addEventListener(n[0],n[1],!1)}if(Array.isArray(n))if(Array.isArray(n[0]))for(var a=n.length;a--;)e(n[a]);else e(n)}function v(t,n){function e(n){t.removeEventListener(n[0],n[1],!1)}if(Array.isArray(n))if(Array.isArray(n[0]))for(var a=n.length;a--;)e(n[a]);else e(n)}var p=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),m={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","oTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","webkitTransitionEnd"]},y={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","oAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","webkitAnimationEnd"]},g=f(m)[0],b=f(m)[1],x=f(m)[2],w=f(y)[0],E=f(y)[1],C=f(y)[2],M={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},T={events:{},on:function(t,n){this.events[t]=this.events[t]||[],this.events[t].push(n)},off:function(t,n){if(this.events[t])for(var e=0;e<this.events[t].length;e++)if(this.events[t][e]===n){this.events[t].splice(e,1);break}},emit:function(t,n){this.events[t]&&this.events[t].forEach(function(t){t(n)})}};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
