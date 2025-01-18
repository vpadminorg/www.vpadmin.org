import{g as fe,j as ce}from"./theme.lv2rwdDX.js";function ue(M,o){for(var p=0;p<o.length;p++){const v=o[p];if(typeof v!="string"&&!Array.isArray(v)){for(const y in v)if(y!=="default"&&!(y in M)){const P=Object.getOwnPropertyDescriptor(v,y);P&&Object.defineProperty(M,y,P.get?P:{enumerable:!0,get:()=>v[y]})}}}return Object.freeze(Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}))}var ne={};/*! Magnific Popup - v1.2.0 - 2024-06-08
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2024 Dmytro Semenov; */(function(M){(function(o){o(ce)})(function(o){var p="Close",v="BeforeClose",y="AfterClose",P="BeforeAppend",H="MarkupParse",j="Open",Q="Change",F="mfp",d="."+F,z="mfp-ready",X="mfp-removing",R="mfp-prevent-close",e,B=function(){},W=!!window.jQuery,q,C=o(window),m,A,_,$,c=function(t,r){e.ev.on(F+t+d,r)},I=function(t,r,n,i){var a=document.createElement("div");return a.className="mfp-"+t,n&&(a.innerHTML=n),a=o(a),r&&a.appendTo(r),a},u=function(t,r){e.ev.triggerHandler(F+t,r),e.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),e.st.callbacks[t]&&e.st.callbacks[t].apply(e,Array.isArray(r)?r:[r]))},V=function(t){return(t!==$||!e.currTemplate.closeBtn)&&(e.currTemplate.closeBtn=o(e.st.closeMarkup.replace("%title%",e.st.tClose)),$=t),e.currTemplate.closeBtn},D=function(){o.magnificPopup.instance||(e=new B,e.init(),o.magnificPopup.instance=e)},ie=function(){var t=document.createElement("p").style,r=["ms","O","Moz","Webkit"];if(t.transition!==void 0)return!0;for(;r.length;)if(r.pop()+"Transition"in t)return!0;return!1};B.prototype={constructor:B,init:function(){var t=navigator.appVersion;e.isLowIE=e.isIE8=document.all&&!document.addEventListener,e.isAndroid=/android/gi.test(t),e.isIOS=/iphone|ipad|ipod/gi.test(t),e.supportsTransition=ie(),e.probablyMobile=e.isAndroid||e.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),m=o(document),e.popupsCache={}},open:function(t){var r;if(t.isObj===!1){e.items=t.items.toArray(),e.index=0;var n=t.items,i;for(r=0;r<n.length;r++)if(i=n[r],i.parsed&&(i=i.el[0]),i===t.el[0]){e.index=r;break}}else e.items=Array.isArray(t.items)?t.items:[t.items],e.index=t.index||0;if(e.isOpen){e.updateItemHTML();return}e.types=[],_="",t.mainEl&&t.mainEl.length?e.ev=t.mainEl.eq(0):e.ev=m,t.key?(e.popupsCache[t.key]||(e.popupsCache[t.key]={}),e.currTemplate=e.popupsCache[t.key]):e.currTemplate={},e.st=o.extend(!0,{},o.magnificPopup.defaults,t),e.fixedContentPos=e.st.fixedContentPos==="auto"?!e.probablyMobile:e.st.fixedContentPos,e.st.modal&&(e.st.closeOnContentClick=!1,e.st.closeOnBgClick=!1,e.st.showCloseBtn=!1,e.st.enableEscapeKey=!1),e.bgOverlay||(e.bgOverlay=I("bg").on("click"+d,function(){e.close()}),e.wrap=I("wrap").attr("tabindex",-1).on("click"+d,function(T){e._checkIfClose(T.target)&&e.close()}),e.container=I("container",e.wrap)),e.contentContainer=I("content"),e.st.preloader&&(e.preloader=I("preloader",e.container,e.st.tLoading));var a=o.magnificPopup.modules;for(r=0;r<a.length;r++){var s=a[r];s=s.charAt(0).toUpperCase()+s.slice(1),e["init"+s].call(e)}u("BeforeOpen"),e.st.showCloseBtn&&(e.st.closeBtnInside?(c(H,function(T,x,S,le){S.close_replaceWith=V(le.type)}),_+=" mfp-close-btn-in"):e.wrap.append(V())),e.st.alignTop&&(_+=" mfp-align-top"),e.fixedContentPos?e.wrap.css({overflow:e.st.overflowY,overflowX:"hidden",overflowY:e.st.overflowY}):e.wrap.css({top:C.scrollTop(),position:"absolute"}),(e.st.fixedBgPos===!1||e.st.fixedBgPos==="auto"&&!e.fixedContentPos)&&e.bgOverlay.css({height:m.height(),position:"absolute"}),e.st.enableEscapeKey&&m.on("keyup"+d,function(T){T.keyCode===27&&e.close()}),C.on("resize"+d,function(){e.updateSize()}),e.st.closeOnContentClick||(_+=" mfp-auto-cursor"),_&&e.wrap.addClass(_);var f=e.wH=C.height(),l={};if(e.fixedContentPos&&e._hasScrollBar(f)){var g=e._getScrollbarSize();g&&(l.marginRight=g)}e.fixedContentPos&&(e.isIE7?o("body, html").css("overflow","hidden"):l.overflow="hidden");var E=e.st.mainClass;return e.isIE7&&(E+=" mfp-ie7"),E&&e._addClassToMFP(E),e.updateItemHTML(),u("BuildControls"),o("html").css(l),e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo||o(document.body)),e._lastFocusedEl=document.activeElement,setTimeout(function(){e.content?(e._addClassToMFP(z),e._setFocus()):e.bgOverlay.addClass(z),m.on("focusin"+d,e._onFocusIn)},16),e.isOpen=!0,e.updateSize(f),u(j),t},close:function(){e.isOpen&&(u(v),e.isOpen=!1,e.st.removalDelay&&!e.isLowIE&&e.supportsTransition?(e._addClassToMFP(X),setTimeout(function(){e._close()},e.st.removalDelay)):e._close())},_close:function(){u(p);var t=X+" "+z+" ";if(e.bgOverlay.detach(),e.wrap.detach(),e.container.empty(),e.st.mainClass&&(t+=e.st.mainClass+" "),e._removeClassFromMFP(t),e.fixedContentPos){var r={marginRight:""};e.isIE7?o("body, html").css("overflow",""):r.overflow="",o("html").css(r)}m.off("keyup"+d+" focusin"+d),e.ev.off(d),e.wrap.attr("class","mfp-wrap").removeAttr("style"),e.bgOverlay.attr("class","mfp-bg"),e.container.attr("class","mfp-container"),e.st.showCloseBtn&&(!e.st.closeBtnInside||e.currTemplate[e.currItem.type]===!0)&&e.currTemplate.closeBtn&&e.currTemplate.closeBtn.detach(),e.st.autoFocusLast&&e._lastFocusedEl&&o(e._lastFocusedEl).trigger("focus"),e.currItem=null,e.content=null,e.currTemplate=null,e.prevHeight=0,u(y)},updateSize:function(t){if(e.isIOS){var r=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*r;e.wrap.css("height",n),e.wH=n}else e.wH=t||C.height();e.fixedContentPos||e.wrap.css("height",e.wH),u("Resize")},updateItemHTML:function(){var t=e.items[e.index];e.contentContainer.detach(),e.content&&e.content.detach(),t.parsed||(t=e.parseEl(e.index));var r=t.type;if(u("BeforeChange",[e.currItem?e.currItem.type:"",r]),e.currItem=t,!e.currTemplate[r]){var n=e.st[r]?e.st[r].markup:!1;u("FirstMarkupParse",n),n?e.currTemplate[r]=o(n):e.currTemplate[r]=!0}A&&A!==t.type&&e.container.removeClass("mfp-"+A+"-holder");var i=e["get"+r.charAt(0).toUpperCase()+r.slice(1)](t,e.currTemplate[r]);e.appendContent(i,r),t.preloaded=!0,u(Q,t),A=t.type,e.container.prepend(e.contentContainer),u("AfterChange")},appendContent:function(t,r){e.content=t,t?e.st.showCloseBtn&&e.st.closeBtnInside&&e.currTemplate[r]===!0?e.content.find(".mfp-close").length||e.content.append(V()):e.content=t:e.content="",u(P),e.container.addClass("mfp-"+r+"-holder"),e.contentContainer.append(e.content)},parseEl:function(t){var r=e.items[t],n;if(r.tagName?r={el:o(r)}:(n=r.type,r={data:r,src:r.src}),r.el){for(var i=e.types,a=0;a<i.length;a++)if(r.el.hasClass("mfp-"+i[a])){n=i[a];break}r.src=r.el.attr("data-mfp-src"),r.src||(r.src=r.el.attr("href"))}return r.type=n||e.st.type||"inline",r.index=t,r.parsed=!0,e.items[t]=r,u("ElementParse",r),e.items[t]},addGroup:function(t,r){var n=function(a){a.mfpEl=this,e._openClick(a,t,r)};r||(r={});var i="click.magnificPopup";r.mainEl=t,r.items?(r.isObj=!0,t.off(i).on(i,n)):(r.isObj=!1,r.delegate?t.off(i).on(i,r.delegate,n):(r.items=t,t.off(i).on(i,n)))},_openClick:function(t,r,n){var i=n.midClick!==void 0?n.midClick:o.magnificPopup.defaults.midClick;if(!(!i&&(t.which===2||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey))){var a=n.disableOn!==void 0?n.disableOn:o.magnificPopup.defaults.disableOn;if(a){if(typeof a=="function"){if(!a.call(e))return!0}else if(C.width()<a)return!0}t.type&&(t.preventDefault(),e.isOpen&&t.stopPropagation()),n.el=o(t.mfpEl),n.delegate&&(n.items=r.find(n.delegate)),e.open(n)}},updateStatus:function(t,r){if(e.preloader){q!==t&&e.container.removeClass("mfp-s-"+q),!r&&t==="loading"&&(r=e.st.tLoading);var n={status:t,text:r};u("UpdateStatus",n),t=n.status,r=n.text,e.st.allowHTMLInStatusIndicator?e.preloader.html(r):e.preloader.text(r),e.preloader.find("a").on("click",function(i){i.stopImmediatePropagation()}),e.container.addClass("mfp-s-"+t),q=t}},_checkIfClose:function(t){if(!o(t).closest("."+R).length){var r=e.st.closeOnContentClick,n=e.st.closeOnBgClick;if(r&&n)return!0;if(!e.content||o(t).closest(".mfp-close").length||e.preloader&&t===e.preloader[0])return!0;if(t!==e.content[0]&&!o.contains(e.content[0],t)){if(n&&o.contains(document,t))return!0}else if(r)return!0;return!1}},_addClassToMFP:function(t){e.bgOverlay.addClass(t),e.wrap.addClass(t)},_removeClassFromMFP:function(t){this.bgOverlay.removeClass(t),e.wrap.removeClass(t)},_hasScrollBar:function(t){return(e.isIE7?m.height():document.body.scrollHeight)>(t||C.height())},_setFocus:function(){(e.st.focus?e.content.find(e.st.focus).eq(0):e.wrap).trigger("focus")},_onFocusIn:function(t){if(t.target!==e.wrap[0]&&!o.contains(e.wrap[0],t.target))return e._setFocus(),!1},_parseMarkup:function(t,r,n){var i;n.data&&(r=o.extend(n.data,r)),u(H,[t,r,n]),o.each(r,function(a,s){if(s===void 0||s===!1)return!0;if(i=a.split("_"),i.length>1){var f=t.find(d+"-"+i[0]);if(f.length>0){var l=i[1];l==="replaceWith"?f[0]!==s[0]&&f.replaceWith(s):l==="img"?f.is("img")?f.attr("src",s):f.replaceWith(o("<img>").attr("src",s).attr("class",f.attr("class"))):f.attr(i[1],s)}}else e.st.allowHTMLInTemplate?t.find(d+"-"+a).html(s):t.find(d+"-"+a).text(s)})},_getScrollbarSize:function(){if(e.scrollbarSize===void 0){var t=document.createElement("div");t.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(t),e.scrollbarSize=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return e.scrollbarSize}},o.magnificPopup={instance:null,proto:B.prototype,modules:[],open:function(t,r){return D(),t?t=o.extend(!0,{},t):t={},t.isObj=!0,t.index=r||0,this.instance.open(t)},close:function(){return o.magnificPopup.instance&&o.magnificPopup.instance.close()},registerModule:function(t,r){r.options&&(o.magnificPopup.defaults[t]=r.options),o.extend(this.proto,r.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0,allowHTMLInStatusIndicator:!1,allowHTMLInTemplate:!1}},o.fn.magnificPopup=function(t){D();var r=o(this);if(typeof t=="string")if(t==="open"){var n,i=W?r.data("magnificPopup"):r[0].magnificPopup,a=parseInt(arguments[1],10)||0;i.items?n=i.items[a]:(n=r,i.delegate&&(n=n.find(i.delegate)),n=n.eq(a)),e._openClick({mfpEl:n},r,i)}else e.isOpen&&e[t].apply(e,Array.prototype.slice.call(arguments,1));else t=o.extend(!0,{},t),W?r.data("magnificPopup",t):r[0].magnificPopup=t,e.addGroup(r,t);return r};var K="inline",w,N,L,ee=function(){L&&(N.after(L.addClass(w)).detach(),L=null)};o.magnificPopup.registerModule(K,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){e.types.push(K),c(p+"."+K,function(){ee()})},getInline:function(t,r){if(ee(),t.src){var n=e.st.inline,i=o(t.src);if(i.length){var a=i[0].parentNode;a&&a.tagName&&(N||(w=n.hiddenClass,N=I(w),w="mfp-"+w),L=i.after(N).detach().removeClass(w)),e.updateStatus("ready")}else e.updateStatus("error",n.tNotFound),i=o("<div>");return t.inlineElement=i,i}return e.updateStatus("ready"),e._parseMarkup(r,{},t),r}}});var k="ajax",O,Z=function(){O&&o(document.body).removeClass(O)},te=function(){Z(),e.req&&e.req.abort()};o.magnificPopup.registerModule(k,{options:{settings:null,cursor:"mfp-ajax-cur",tError:"The content could not be loaded."},proto:{initAjax:function(){e.types.push(k),O=e.st.ajax.cursor,c(p+"."+k,te),c("BeforeChange."+k,te)},getAjax:function(t){O&&o(document.body).addClass(O),e.updateStatus("loading");var r=o.extend({url:t.src,success:function(n,i,a){var s={data:n,xhr:a};u("ParseAjax",s),e.appendContent(o(s.data),k),t.finished=!0,Z(),e._setFocus(),setTimeout(function(){e.wrap.addClass(z)},16),e.updateStatus("ready"),u("AjaxContentAdded")},error:function(){Z(),t.finished=t.loadError=!0,e.updateStatus("error",e.st.ajax.tError.replace("%url%",t.src))}},e.st.ajax.settings);return e.req=o.ajax(r),""}}});var h,oe=function(t){if(t.data&&t.data.title!==void 0)return t.data.title;var r=e.st.image.titleSrc;if(r){if(typeof r=="function")return r.call(e,t);if(t.el)return t.el.attr(r)||""}return""};o.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:"The image could not be loaded."},proto:{initImage:function(){var t=e.st.image,r=".image";e.types.push("image"),c(j+r,function(){e.currItem.type==="image"&&t.cursor&&o(document.body).addClass(t.cursor)}),c(p+r,function(){t.cursor&&o(document.body).removeClass(t.cursor),C.off("resize"+d)}),c("Resize"+r,e.resizeImage),e.isLowIE&&c("AfterChange",e.resizeImage)},resizeImage:function(){var t=e.currItem;if(!(!t||!t.img)&&e.st.image.verticalFit){var r=0;e.isLowIE&&(r=parseInt(t.img.css("padding-top"),10)+parseInt(t.img.css("padding-bottom"),10)),t.img.css("max-height",e.wH-r)}},_onImageHasSize:function(t){t.img&&(t.hasSize=!0,h&&clearInterval(h),t.isCheckingImgSize=!1,u("ImageHasSize",t),t.imgHidden&&(e.content&&e.content.removeClass("mfp-loading"),t.imgHidden=!1))},findImageSize:function(t){var r=0,n=t.img[0],i=function(a){h&&clearInterval(h),h=setInterval(function(){if(n.naturalWidth>0){e._onImageHasSize(t);return}r>200&&clearInterval(h),r++,r===3?i(10):r===40?i(50):r===100&&i(500)},a)};i(1)},getImage:function(t,r){var n=0,i=e.st.image,a=function(){t&&(t.img.off(".mfploader"),t===e.currItem&&(e._onImageHasSize(t),e.updateStatus("error",i.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)},s=function(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===e.currItem&&(e._onImageHasSize(t),e.updateStatus("ready")),t.hasSize=!0,t.loaded=!0,u("ImageLoadComplete")):(n++,n<200?setTimeout(s,100):a()))},f=r.find(".mfp-img");if(f.length){var l=document.createElement("img");l.className="mfp-img",t.el&&t.el.find("img").length&&(l.alt=t.el.find("img").attr("alt")),t.img=o(l).on("load.mfploader",s).on("error.mfploader",a),l.src=t.src,f.is("img")&&(t.img=t.img.clone()),l=t.img[0],l.naturalWidth>0?t.hasSize=!0:l.width||(t.hasSize=!1)}return e._parseMarkup(r,{title:oe(t),img_replaceWith:t.img},t),e.resizeImage(),t.hasSize?(h&&clearInterval(h),t.loadError?(r.addClass("mfp-loading"),e.updateStatus("error",i.tError.replace("%url%",t.src))):(r.removeClass("mfp-loading"),e.updateStatus("ready")),r):(e.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,r.addClass("mfp-loading"),e.findImageSize(t)),r)}}});var G,ae=function(){return G===void 0&&(G=document.createElement("p").style.MozTransform!==void 0),G};o.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(t){return t.is("img")?t:t.find("img")}},proto:{initZoom:function(){var t=e.st.zoom,r=".zoom",n;if(!(!t.enabled||!e.supportsTransition)){var i=t.duration,a=function(g){var E=g.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),T="all "+t.duration/1e3+"s "+t.easing,x={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},S="transition";return x["-webkit-"+S]=x["-moz-"+S]=x["-o-"+S]=x[S]=T,E.css(x),E},s=function(){e.content.css("visibility","visible")},f,l;c("BuildControls"+r,function(){if(e._allowZoom()){if(clearTimeout(f),e.content.css("visibility","hidden"),n=e._getItemToZoom(),!n){s();return}l=a(n),l.css(e._getOffset()),e.wrap.append(l),f=setTimeout(function(){l.css(e._getOffset(!0)),f=setTimeout(function(){s(),setTimeout(function(){l.remove(),n=l=null,u("ZoomAnimationEnded")},16)},i)},16)}}),c(v+r,function(){if(e._allowZoom()){if(clearTimeout(f),e.st.removalDelay=i,!n){if(n=e._getItemToZoom(),!n)return;l=a(n)}l.css(e._getOffset(!0)),e.wrap.append(l),e.content.css("visibility","hidden"),setTimeout(function(){l.css(e._getOffset())},16)}}),c(p+r,function(){e._allowZoom()&&(s(),l&&l.remove(),n=null)})}},_allowZoom:function(){return e.currItem.type==="image"},_getItemToZoom:function(){return e.currItem.hasSize?e.currItem.img:!1},_getOffset:function(t){var r;t?r=e.currItem.img:r=e.st.zoom.opener(e.currItem.el||e.currItem);var n=r.offset(),i=parseInt(r.css("padding-top"),10),a=parseInt(r.css("padding-bottom"),10);n.top-=o(window).scrollTop()-i;var s={width:r.width(),height:(W?r.innerHeight():r[0].offsetHeight)-a-i};return ae()?s["-moz-transform"]=s.transform="translate("+n.left+"px,"+n.top+"px)":(s.left=n.left,s.top=n.top),s}}});var b="iframe",se="//about:blank",U=function(t){if(e.currTemplate[b]){var r=e.currTemplate[b].find("iframe");r.length&&(t||(r[0].src=se),e.isIE8&&r.css("display",t?"block":"none"))}};o.magnificPopup.registerModule(b,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){e.types.push(b),c("BeforeChange",function(t,r,n){r!==n&&(r===b?U():n===b&&U(!0))}),c(p+"."+b,function(){U()})},getIframe:function(t,r){var n=t.src,i=e.st.iframe;o.each(i.patterns,function(){if(n.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?n=n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):n=this.id.call(this,n)),n=this.src.replace("%id%",n),!1});var a={};return i.srcAction&&(a[i.srcAction]=n),e._parseMarkup(r,a,t),e.updateStatus("ready"),r}}});var Y=function(t){var r=e.items.length;return t>r-1?t-r:t<0?r+t:t},re=function(t,r,n){return t.replace(/%curr%/gi,r+1).replace(/%total%/gi,n)};o.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%",langDir:null,loop:!0},proto:{initGallery:function(){var t=e.st.gallery,r=".mfp-gallery";if(e.direction=!0,!t||!t.enabled)return!1;t.langDir||(t.langDir=document.dir||"ltr"),_+=" mfp-gallery",c(j+r,function(){t.navigateByImgClick&&e.wrap.on("click"+r,".mfp-img",function(){if(e.items.length>1)return e.next(),!1}),m.on("keydown"+r,function(n){n.keyCode===37?t.langDir==="rtl"?e.next():e.prev():n.keyCode===39&&(t.langDir==="rtl"?e.prev():e.next())}),e.updateGalleryButtons()}),c("UpdateStatus"+r,function(){e.updateGalleryButtons()}),c("UpdateStatus"+r,function(n,i){i.text&&(i.text=re(i.text,e.currItem.index,e.items.length))}),c(H+r,function(n,i,a,s){var f=e.items.length;a.counter=f>1?re(t.tCounter,s.index,f):""}),c("BuildControls"+r,function(){if(e.items.length>1&&t.arrows&&!e.arrowLeft){var n,i,a,s;t.langDir==="rtl"?(n=t.tNext,i=t.tPrev,a="next",s="prev"):(n=t.tPrev,i=t.tNext,a="prev",s="next");var f=t.arrowMarkup,l=e.arrowLeft=o(f.replace(/%title%/gi,n).replace(/%action%/gi,a).replace(/%dir%/gi,"left")).addClass(R),g=e.arrowRight=o(f.replace(/%title%/gi,i).replace(/%action%/gi,s).replace(/%dir%/gi,"right")).addClass(R);t.langDir==="rtl"?(e.arrowNext=l,e.arrowPrev=g):(e.arrowNext=g,e.arrowPrev=l),l.on("click",function(){t.langDir==="rtl"?e.next():e.prev()}),g.on("click",function(){t.langDir==="rtl"?e.prev():e.next()}),e.container.append(l.add(g))}}),c(Q+r,function(){e._preloadTimeout&&clearTimeout(e._preloadTimeout),e._preloadTimeout=setTimeout(function(){e.preloadNearbyImages(),e._preloadTimeout=null},16)}),c(p+r,function(){m.off(r),e.wrap.off("click"+r),e.arrowRight=e.arrowLeft=null})},next:function(){var t=Y(e.index+1);if(!e.st.gallery.loop&&t===0)return!1;e.direction=!0,e.index=t,e.updateItemHTML()},prev:function(){var t=e.index-1;if(!e.st.gallery.loop&&t<0)return!1;e.direction=!1,e.index=Y(t),e.updateItemHTML()},goTo:function(t){e.direction=t>=e.index,e.index=t,e.updateItemHTML()},preloadNearbyImages:function(){var t=e.st.gallery.preload,r=Math.min(t[0],e.items.length),n=Math.min(t[1],e.items.length),i;for(i=1;i<=(e.direction?n:r);i++)e._preloadItem(e.index+i);for(i=1;i<=(e.direction?r:n);i++)e._preloadItem(e.index-i)},_preloadItem:function(t){if(t=Y(t),!e.items[t].preloaded){var r=e.items[t];r.parsed||(r=e.parseEl(t)),u("LazyLoad",r),r.type==="image"&&(r.img=o('<img class="mfp-img" />').on("load.mfploader",function(){r.hasSize=!0}).on("error.mfploader",function(){r.hasSize=!0,r.loadError=!0,u("LazyLoadError",r)}).attr("src",r.src)),r.preloaded=!0}},updateGalleryButtons:function(){!e.st.gallery.loop&&typeof e.arrowPrev=="object"&&e.arrowPrev!==null&&(e.index===0?e.arrowPrev.hide():e.arrowPrev.show(),e.index===e.items.length-1?e.arrowNext.hide():e.arrowNext.show())}}});var J="retina";o.magnificPopup.registerModule(J,{options:{replaceSrc:function(t){return t.src.replace(/\.\w+$/,function(r){return"@2x"+r})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var t=e.st.retina,r=t.ratio;r=isNaN(r)?r():r,r>1&&(c("ImageHasSize."+J,function(n,i){i.img.css({"max-width":i.img[0].naturalWidth/r,width:"100%"})}),c("ElementParse."+J,function(n,i){i.src=t.replaceSrc(i,r)}))}}}}),D()})})();const de=fe(ne),me=ue({__proto__:null,default:de},[ne]);export{me as j};
