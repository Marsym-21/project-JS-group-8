!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},o=n.parcelRequired7c6;null==o&&((o=function(n){if(n in e)return e[n].exports;if(n in t){var o=t[n];delete t[n];var a={id:n,exports:{}};return e[n]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){t[n]=e},n.parcelRequired7c6=o),o("iE7OH").register(JSON.parse('{"EVgbq":"index.58d26610.js","410VS":"icons.8e27432b.svg","5UbS1":"index.3f35c893.css","cfiU8":"index.3478d4e0.js"}')),o("xpKCW"),o("cXIps");var a=o("hUz67");a=o("hUz67");function i(n){for(var e=n.split(""),t=[],o=0;o<e.length;o++){var a=e[o];" "===a&&(a="%20"),t.push(a)}return t.join("")}function c(n){var e=n.split(" ");return e.slice(0,e.length-1).join(" ")}function r(n){var e=n.split(" ");return e[e.length-1]}(0,(_=o("j1lrD")).spinnerPlay)(),window.addEventListener("load",(function(){(0,_.spinnerStop)()}));var l=new(0,a.getBookData),s=document.querySelector(".book-categories"),d=document.querySelector(".categories-list");function u(){var n=document.createElement("li");n.classList.add("category-link"),n.classList.add("all"),n.textContent="All Categories",s.append(n);var e=[];l.getPromCategoryList().then((function(n){e=n.map((function(n){return'<li class="category-link">'.concat(n.list_name,"</li>")})).join(""),s.insertAdjacentHTML("beforeend",e),document.querySelector(".all").addEventListener("click",C)})).catch((function(n){console.log(n)}))}s.addEventListener("click",(function(n){(0,_.spinnerPlay)(),n.preventDefault(),console.log(n.target.classList.contains("all")),d.innerHTML="";var e=n.target.innerHTML,t=document.querySelector(".category-link.active");t&&t.classList.remove("active");n.target.classList.add("active");var o=i("".concat(e)),l=[];new(0,a.getBookData)(0,o).getPromCategory().then((function(t){console.log(t),l=t.map((function(n){return'<li class="book-card">\n              <img class="book-image" src="'.concat(n.book_image,'" alt="').concat(n.title,'">\n              <h2 class="book_name">').concat(n.title.slice(0,20)).concat(n.title.length>20?"...":"",'</h2>\n              <p class="book_author">').concat(n.author.slice(0,30)).concat(n.author.length>30?"...":"","</p>\n            </li>")})).join(""),d.insertAdjacentHTML("beforeend",l);var o=document.querySelector(".main-title__first-part"),a=document.querySelector(".main-title__second-part");n.target.classList.contains("all")?(o.textContent="Best Sellers",a.textContent="Books"):(o.textContent=c(e),a.textContent=r(e))})).catch((function(n){console.log(n)})),(0,_.spinnerStop)()}));a=o("hUz67");(0,(_=o("j1lrD")).spinnerPlay)(),window.addEventListener("load",(function(){(0,_.spinnerStop)()}));var m=document.querySelector(".categories-list");function g(){var n=document.querySelectorAll(".btn-see-more");function e(n){(0,_.spinnerPlay)(),n.preventDefault(),m.innerHTML="";var e=n.target.id,t=i("".concat(e));console.log(t);var o=[];new(0,a.getBookData)(0,t).getPromCategory().then((function(n){console.log(n),o=n.map((function(n){return'<div class="book-card">\n              <img class="book-image" src="'.concat(n.book_image,'" alt="').concat(n.title,'">\n              <h2 class="book_name">').concat(n.title.slice(0,20)).concat(n.title.length>20?"...":"",'</h2>\n              <p class="book_author">').concat(n.author.slice(0,30)).concat(n.author.length>30?"...":"","</p>\n            </div>")})).join(""),m.insertAdjacentHTML("beforeend",o);var t=document.querySelector(".main-title__first-part"),a=document.querySelector(".main-title__second-part");t.textContent=c(e),a.textContent=r(e)})).catch((function(n){console.log(n)})),(0,_.spinnerStop)()}console.log(n),n.forEach((function(n){n.addEventListener("click",e)}))}var p,v=o("kmL1J"),_=(a=o("hUz67"),o("j1lrD")),f=(v=o("kmL1J"),new(0,a.getBookData));p=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("410VS");var h=new URL(p),b=document.querySelector(".modal-container"),k=document.querySelector(".modal-backdrop"),w=[],y=[];function S(n){if(""!==n)return n;return"No more information about this book"}function L(){k.classList.add("is-hidden")}function E(n){var e,t,o=n.currentTarget.id;e=localStorage.getItem("id"),t=JSON.parse(e),y=t?w.concat(t):[],function(n){function e(){return y.includes(n)?"Remove from the shopping list":"Add to shopping list"}(0,_.spinnerPlay)(),k.classList.remove("is-hidden"),f=new(0,a.getBookData)(n),b.innerHTML="",f.getPromId().then((function(t){function o(n){for(var e=t.buy_links,o=0;o<e.length;o+=1){if(e[o].name==="".concat(n))return e[o].url;e[o].name,"".concat(n)}}b.innerHTML='\n       <div class="modal-close__btn-wrapper">\n      <button type=\'button\' class=\'modal-close-btn close\'>\n     <svg class="close-svg" fill="none" width="30" height="30">\n          <use href="'.concat(h,'#icon-x-close"></use>\n</svg>\n    \n       <path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2" />\n   </svg>\n      </button>\n      </div>\n      <div class =\'modal-book\'>\n      <div class=\'modal-book__img-container\'>\n        <img class=\'modal-book__img\' src=').concat(S(t.book_image)," \n        alt=").concat(S(t.title),"/>\n        </div>\n        <div class='modal-book__description'>\n        <h2 class=\"modal-book__title\">").concat(S(t.title),'</h2>\n        <p class ="modal-book__author">').concat(S(t.author),'</p>\n        <p class ="modal-book__about">\n      \n        ').concat(S(t.description),'</p>\n        \n       <div class = \'modal-book__stores\'>\n\n      <div class="modal-book__amazon">\n       <a class="amazon__link link"\n       href="').concat(o("Amazon"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="amazon icon"\n   >\n  \n   <svg class="book-svg" fill="none" width="60" height="60">\n          <use href="').concat(h,'#icon-amazon-ar21"></use>\n</svg>\n\n   </a>\n       </div>\n       <div class ="modal-book__applebook">\n       <a class="applebook__link link"\n       href="').concat(o("Apple Books"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Apple Book icon"\n   >\n       <svg class="book-svg"  width="30" height="30" fill="none">\n       <use href="').concat(h,'#icon-apple-ibooks"></use> \n       </svg>\n       </a>\n   </div>\n\n       <div class ="modal-book__bookshop">\n       <a class="bookshop__link link"\n       href="').concat(o("Bookshop"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Bookshop icon"\n   >\n       <svg class="book-svg black-book"  width="30" height="30">\n              <use href="').concat(h,'#icon-14008711"></use>\n       </svg>\n       </a>\n       </div>\n       </div>\n       </div>\n       </div>\n       <div  class="modal-book__add__wrapper">  \n       <button type="button" class="modal-book__button">').concat(e(),"</button>  \n   </div>  \n        "),(0,v.getObject)(),document.querySelector(".modal-close-btn").addEventListener("click",L);var a=document.querySelector(".modal-book__button");a.addEventListener("click",(function(){if(y.includes(n)){var t=y.indexOf(n);y.splice(t,1);var o=JSON.stringify(y);return a.textContent="".concat(e()),void localStorage.setItem("id",o)}y.push(n),a.textContent="".concat(e());var i=JSON.stringify(y);localStorage.setItem("id",i)}))})).catch((function(n){console.log(n)})),(0,_.spinnerStop)()}(o)}k.addEventListener("click",(function(n){n.target.classList.contains("modal-backdrop")&&L()})),window.addEventListener("keydown",(function(n){"Escape"==n.code&&L()})),(0,(_=o("j1lrD")).spinnerPlay)(),window.addEventListener("load",(function(){(0,_.spinnerStop)()}));var q=new(0,a.getBookData),x=document.querySelector(".main-title__first-part"),j=document.querySelector(".main-title__second-part"),H=document.querySelector(".categories-list");function C(){(0,_.spinnerPlay)(),x.textContent="Best Sellers",j.textContent="Books";q.getPromTopBooks().then((function(n){var e=n.slice(0,4).map((function(n){var e=375;addEventListener("resize",(function(n){(window.innerWidth>767&&e<768||window.innerWidth>1439&&e<1440||window.innerWidth<1440&&e>1439||window.innerWidth<768&&e>767)&&location.reload()}));var t=1;t=(e=window.innerWidth)<768?1:e>767&&e<1440?3:5,console.log(t);var o=n.books.slice(0,t).map((function(n){return'<li class="books-list__item">\n            \n            <div class="item-wrap" id="'.concat(n._id,'">\n              <div class = "item-img__wrap">\n                <img class="item-img"\n                 src="').concat(n.book_image,'" \n                 alt="').concat("book cover photo",'" \n                 width ="').concat(n.book_image_width,'" \n                 height ="').concat(n.book_image_height,'"\n                />\n                <div class="item__overlay">\n                <p class="item__overlay-text">quick view</p>\n                </div>\n              </div>\n              <div class="item-title__wrap">\n                <h3 class="item__name">').concat(n.title.slice(0,15)).concat(n.title.length>15?"...":"",'</h3>\n                <p class="item__author">').concat(n.author,"</p>\n              </div>\n            </div>\n          </li>")})).join("");return'<li class="categories-list__item">\n                 <div class="categories-list__wrap">\n                   <h2 class="category">'.concat(n.list_name,'</h2>\n                   <ul class="books-list">').concat(o,'</ul>\n                   <div class="btn-see-more__wrap">\n                    <button class="btn-see-more" id="').concat(n.list_name,'" type="button">see more</button>\n                   </div>\n                 </div>\n                </li>')})).join("");H.insertAdjacentHTML("beforeend",e),u(),g(),(0,v.getObject)(),document.querySelectorAll(".item-wrap").forEach((function(n){n.addEventListener("click",E)}))})).catch((function(n){console.log(n)})),(0,_.spinnerStop)()}C(),o("j1lrD"),o("igOX8"),o("kmL1J")}();
//# sourceMappingURL=index.58d26610.js.map