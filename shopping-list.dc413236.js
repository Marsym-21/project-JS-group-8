!function(){function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var r={id:n,exports:{}};return t[n]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){o[n]=e},e.parcelRequired7c6=r),r.register("iE7OH",(function(e,t){var o,r;n(e.exports,"register",(function(){return o}),(function(n){return o=n})),n(e.exports,"resolve",(function(){return r}),(function(n){return r=n}));var i={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)i[e[t]]=n[e[t]]},r=function(n){var e=i[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),r.register("aNJCr",(function(e,t){var o;n(e.exports,"getBundleURL",(function(){return o}),(function(n){return o=n}));var r={};function i(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(n){var e=r[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return i(n[2])}return"/"}(),r[n]=e),e}})),r("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.dc413236.js","410VS":"icons.8e27432b.svg","B6AU1":"emptyBook.9d82d098.png","5UbS1":"index.fdef1412.css","cfiU8":"index.b68e0f25.js"}')),r("xpKCW"),r("cXIps");var i=r("kmL1J"),a=r("j1lrD");r("igOX8");r("kmL1J");var s=r("hUz67");a=r("j1lrD"),i=r("kmL1J");(0,a.spinnerPlay)(),window.addEventListener("load",(function(){(0,a.spinnerStop)()}));var c=document.querySelector(".header_btn__shopping");console.log(c),console.log(document);var l;l=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("410VS");var p,u=new URL(l);p=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("B6AU1");var g=new URL(p),d=document.querySelector(".shopingList"),f=localStorage.getItem("id"),h=JSON.parse(f);d.addEventListener("click",(function(n){var e=n.target.dataset.id;if("shoppinglist_btn-icon"===n.target.parentElement.classList.value&&m.includes(e)){var t=m.indexOf(e);m.splice(t,1);var o=JSON.stringify(m);localStorage.setItem("id",o),d.innerHTML="",_(JSON.parse(o)),m.length<1&&(d.innerHTML="",d.innerHTML='<p class="empty-book-text"> \n    This page is empty, add some books and proceed to order. \n  </p> \n  <img \n    class="empty-book-page" \n    src="'.concat(g,'" \n    alt="The page is emrty" \n  />'))}}));localStorage.getItem("id");var v=localStorage.getItem("id"),m=JSON.parse(v);function _(n){n.map((function(n){new(0,s.getBookData)(n="".concat(n)).getPromId().then((function(n){var e=n.list_name,t=n.author,o=n.title,r=n.book_image,i=n.description,a=n.buy_links,s=n._id;function c(n){for(var e=a,t=0;t<e.length;t+=1){if(e[t].name==="".concat(n))return e[t].url;e[t].name,"".concat(n)}}return'\n<li class="shoppinglist_item data-id="'.concat(s,'">\n    <div class="shoppinglist_img-container">\n        <img class="shoppinglist_img" src="').concat(r,'" alt="" />\n        <p class="shoppinglist_authorM">').concat(t,'</p>\n    </div>\n    <div class="shoppinglist_info">\n        <h2 class="shoppinglist_title">').concat(o,'</h2>\n        <p class="shoppinglist_category">\n            ').concat(e,'\n        </p>\n    </div>\n    <ul class="shoppinglistlink_list">\n        <li>\n            <a href="').concat(c("Amazon"),'" target="_blank" rel="noopener noreferrer">\n                <svg fill="none" width="55" height="60">\n                        <use href="').concat(u,'#icon-amazon-ar21"></use>\n                    </svg>\n            </a>\n        </li>\n        <li>\n            <a href="').concat(c("Apple Books"),'" target="_blank" rel="noopener noreferrer">\n                <svg width="28" height="27" fill="none">\n                        <use href="').concat(u,'#icon-apple-ibooks"></use>\n                    </svg>\n            </a>\n        </li>\n        <li>\n            <a href="').concat(c("Bookshop"),'" target="_blank" rel="noopener noreferrer">\n                <svg width="32" height="32">\n                        <use href="').concat(u,'#icon-14008711"></use>\n                    </svg>\n            </a>\n        </li>\n    </ul>\n    <p class="shoppinglist_desc">\n        ').concat(i,'\n    </p>\n    <p class="shoppinglist_author">').concat(t,'</p>\n    <button class="shoppinglist_btn type="button">\n        <svg class="shoppinglist_btn-icon">\n            <use href="').concat(u,'#icon-dump-1" class="removecard" data-id="').concat(s,'"></use>\n        </svg>\n    </button>\n</li>\n   ')})).then((function(n){d.insertAdjacentHTML("beforeend",n)}))}))}_(h),(0,i.getObject)()}();
//# sourceMappingURL=shopping-list.dc413236.js.map
