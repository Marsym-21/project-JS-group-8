!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},t=n.parcelRequired7c6;null==t&&((t=function(n){if(n in e)return e[n].exports;if(n in o){var t=o[n];delete o[n];var a={id:n,exports:{}};return e[n]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){o[n]=e},n.parcelRequired7c6=t),t("iE7OH").register(JSON.parse('{"EVgbq":"index.b009a902.js","410VS":"icons.8e27432b.svg","5UbS1":"index.877374d6.css","cfiU8":"index.1b69e025.js"}')),t("xpKCW"),t("cXIps");var a=t("hUz67");a=t("hUz67");function i(n){for(var e=n.split(""),o=[],t=0;t<e.length;t++){var a=e[t];" "===a&&(a="%20"),o.push(a)}return o.join("")}function c(n){var e=n.split(" ");return e.slice(0,e.length-1).join(" ")}function l(n){var e=n.split(" ");return e[e.length-1]}(0,(_=t("j1lrD")).spinnerPlay)(),window.addEventListener("load",(function(){(0,_.spinnerStop)()}));var r=new(0,a.getBookData),s=document.querySelector(".book-categories"),d=document.querySelector(".categories-list");function u(){var n=document.createElement("li");n.classList.add("category-link"),n.classList.add("all"),n.textContent="All Categories",s.append(n);var e=[];r.getPromCategoryList().then((function(n){e=n.map((function(n){return'<li class="category-link">'.concat(n.list_name,"</li>")})).join(""),s.insertAdjacentHTML("beforeend",e),document.querySelector(".all").addEventListener("click",C)})).catch((function(n){console.log(n)}))}s.addEventListener("click",(function(n){(0,_.spinnerPlay)(),n.preventDefault(),console.log(n.target.classList.contains("all")),d.innerHTML="";var e=n.target.innerHTML,o=document.querySelector(".category-link.active");o&&o.classList.remove("active");n.target.classList.add("active");var t=i("".concat(e)),r=[];new(0,a.getBookData)(0,t).getPromCategory().then((function(o){console.log(o),r=o.map((function(n){return'<li class="book-card">\n              <img class="book-image" src="'.concat(n.book_image,'" alt="').concat(n.title,'">\n              <h2 class="book_name">').concat(n.title.slice(0,20)).concat(n.title.length>20?"...":"",'</h2>\n              <p class="book_author">').concat(n.author.slice(0,30)).concat(n.author.length>30?"...":"","</p>\n            </li>")})).join(""),d.insertAdjacentHTML("beforeend",r);var t=document.querySelector(".main-title__first-part"),a=document.querySelector(".main-title__second-part");n.target.classList.contains("all")?(t.textContent="Best Sellers",a.textContent="Books"):(t.textContent=c(e),a.textContent=l(e))})).catch((function(n){console.log(n)})),(0,_.spinnerStop)()}));a=t("hUz67");(0,(_=t("j1lrD")).spinnerPlay)(),window.addEventListener("load",(function(){(0,_.spinnerStop)()}));var g=document.querySelector(".categories-list");function m(){var n=document.querySelectorAll(".btn-see-more");function e(n){(0,_.spinnerPlay)(),n.preventDefault(),g.innerHTML="";var e=n.target.id,o=i("".concat(e));console.log(o);var t=[];new(0,a.getBookData)(0,o).getPromCategory().then((function(n){console.log(n),t=n.map((function(n){return'<div class="book-card">\n              <img class="book-image" src="'.concat(n.book_image,'" alt="').concat(n.title,'">\n              <h2 class="book_name">').concat(n.title.slice(0,20)).concat(n.title.length>20?"...":"",'</h2>\n              <p class="book_author">').concat(n.author.slice(0,30)).concat(n.author.length>30?"...":"","</p>\n            </div>")})).join(""),g.insertAdjacentHTML("beforeend",t);var o=document.querySelector(".main-title__first-part"),a=document.querySelector(".main-title__second-part");o.textContent=c(e),a.textContent=l(e)})).catch((function(n){console.log(n)})),(0,_.spinnerStop)()}console.log(n),n.forEach((function(n){n.addEventListener("click",e)}))}var p,v=t("kmL1J"),_=(a=t("hUz67"),t("j1lrD")),f=new(0,a.getBookData);p=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("410VS");var h=new URL(p),b=document.querySelector(".modal-container"),k=document.querySelector(".modal-backdrop"),w=[],y=[];function S(n){if(""!==n)return n;return"No more information about this book"}function L(){k.classList.add("is-hidden")}function E(n){var e=n.currentTarget.id;!function(){var n=localStorage.getItem("id");console.log(n);var e=JSON.parse(n);console.log(e),y=e?w.concat(e):[]}(),function(n){function e(){var e;return console.log(y),y.includes(n)?(e="Remove from the shopping list",console.log(e),e):(e="Add to shopping list",console.log(e),e)}(0,_.spinnerPlay)(),k.classList.remove("is-hidden"),f=new(0,a.getBookData)(n),b.innerHTML="",f.getPromId().then((function(o){function t(n){for(var e=o.buy_links,t=0;t<e.length;t+=1){if(e[t].name==="".concat(n))return e[t].url;e[t].name,"".concat(n)}}console.log(o),b.innerHTML='\n       <div class="modal-close__btn-wrapper">\n      <button type=\'button\' class=\'modal-close-btn close\'>\n     <svg class="close" fill="none" width="30" height="30">\n          <use href="'.concat(h,'#icon-x-close"></use>\n</svg>\n    \n       <path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2" />\n   </svg>\n      </button>\n      </div>\n      <div class =\'modal-book\'>\n      <div class=\'modal-book__img-container\'>\n        <img class=\'modal-book__img\' src=').concat(S(o.book_image)," \n        alt=").concat(S(o.title),"/>\n        </div>\n        <div class='modal-book__description'>\n        <h2 class=\"modal-book__title\">").concat(S(o.title),'</h2>\n        <p class ="modal-book__author">').concat(S(o.author),'</p>\n        <p class ="modal-book__about">\n      \n        ').concat(S(o.description),'</p>\n        \n       <div class = \'modal-book__stores\'>\n\n      <div class="modal-book__amazon">\n       <a class="amazon__link link"\n       href="').concat(t("Amazon"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="amazon icon"\n   >\n  \n   <svg class="book" fill="none" width="60" height="60">\n          <use href="').concat(h,'#icon-amazon-ar21"></use>\n</svg>\n\n   </a>\n       </div>\n       <div class ="modal-book__applebook">\n       <a class="applebook__link link"\n       href="').concat(t("Apple Books"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Apple Book icon"\n   >\n       <svg class="book"  width="30" height="30" fill="none">\n       <use href="').concat(h,'#icon-apple-ibooks"></use> \n       </svg>\n       </a>\n   </div>\n\n       <div class ="modal-book__bookshop">\n       <a class="bookshop__link link"\n       href="').concat(t("Bookshop"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Bookshop icon"\n   >\n       <svg class="book"  width="40" height="40">\n              <use href="').concat(h,'#icon-14008711"></use>\n       </svg>\n       </a>\n       </div>\n       </div>\n       </div>\n       </div>\n       <div  class="modal-book__add__wrapper">  \n       <button type="button" class="modal-book__button" id="').concat(o.id,'">').concat(e(),"</button>  \n   </div>  \n        "),console.log(b.innerHTML),document.querySelector(".modal-close-btn").addEventListener("click",L);var a=document.querySelector(".modal-book__button");a.addEventListener("click",(function(){if(y.includes(n)){var o=y.indexOf(n);y.splice(o,1);var t=JSON.stringify(y);return a.textContent="".concat(e()),void localStorage.setItem("id",t)}y.push(n),a.textContent="".concat(e());var i=JSON.stringify(y);localStorage.setItem("id",i)}))})).catch((function(n){console.log(n)})),(0,_.spinnerStop)()}(e)}console.log(y),k.addEventListener("click",(function(n){n.target.classList.contains("modal-backdrop")&&L()})),window.addEventListener("keydown",(function(n){"Escape"==n.code&&L()})),(0,(_=t("j1lrD")).spinnerPlay)(),window.addEventListener("load",(function(){(0,_.spinnerStop)()}));var q=new(0,a.getBookData),x=document.querySelector(".main-title__first-part"),H=document.querySelector(".main-title__second-part"),j=document.querySelector(".categories-list");function C(){(0,_.spinnerPlay)(),x.textContent="Best Sellers",H.textContent="Books";q.getPromTopBooks().then((function(n){var e=n.slice(0,4).map((function(n){var e=375;addEventListener("resize",(function(n){(window.innerWidth>767&&e<768||window.innerWidth>1439&&e<1440||window.innerWidth<1440&&e>1439||window.innerWidth<768&&e>767)&&location.reload()}));var o=1;o=(e=window.innerWidth)<768?1:e>767&&e<1440?3:5,console.log(o);var t=n.books.slice(0,o).map((function(n){return'<li class="books-list__item">\n            \n            <div class="item-wrap" id="'.concat(n._id,'">\n              <div class = "item-img__wrap">\n                <img class="item-img"\n                 src="').concat(n.book_image,'" \n                 alt="').concat("book cover photo",'" \n                 width ="').concat(n.book_image_width,'" \n                 height ="').concat(n.book_image_height,'"\n                />\n                <div class="item__overlay">\n                <p class="item__overlay-text">quick view</p>\n                </div>\n              </div>\n              <div class="item-title__wrap">\n                <h3 class="item__name">').concat(n.title.slice(0,19)).concat(n.title.length>19?"...":"",'</h3>\n                <p class="item__author">').concat(n.author,"</p>\n              </div>\n            </div>\n          </li>")})).join("");return'<li class="categories-list__item">\n                 <div class="categories-list__wrap">\n                   <h2 class="category">'.concat(n.list_name,'</h2>\n                   <ul class="books-list">').concat(t,'</ul>\n                   <div class="btn-see-more__wrap">\n                    <button class="btn-see-more" id="').concat(n.list_name,'" type="button">see more</button>\n                   </div>\n                 </div>\n                </li>')})).join("");j.insertAdjacentHTML("beforeend",e),u(),m(),(0,v.getObject)(),document.querySelectorAll(".item-wrap").forEach((function(n){n.addEventListener("click",E)}))})).catch((function(n){console.log(n)})),(0,_.spinnerStop)()}C(),t("j1lrD"),t("igOX8"),t("kmL1J")}();
//# sourceMappingURL=index.b009a902.js.map