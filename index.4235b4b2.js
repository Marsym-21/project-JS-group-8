!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},t=n.parcelRequired7c6;null==t&&((t=function(n){if(n in e)return e[n].exports;if(n in o){var t=o[n];delete o[n];var a={id:n,exports:{}};return e[n]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(n,e){o[n]=e},n.parcelRequired7c6=t),t("iE7OH").register(JSON.parse('{"EVgbq":"index.4235b4b2.js","410VS":"icons.8e27432b.svg","5UbS1":"index.3f0f66e4.css","cfiU8":"index.4861e297.js"}')),t("xpKCW"),t("cXIps");var a=t("hUz67");a=t("hUz67");function c(n){for(var e=n.split(""),o=[],t=0;t<e.length;t++){var a=e[t];" "===a&&(a="%20"),o.push(a)}return o.join("")}function i(n){var e=n.split(" ");return e.slice(0,e.length-1).join(" ")}function l(n){var e=n.split(" ");return e[e.length-1]}(0,(f=t("j1lrD")).spinnerPlay)(),window.addEventListener("load",(function(){(0,f.spinnerStop)()}));var r=new(0,a.getBookData),s=document.querySelector(".book-categories"),d=document.querySelector(".categories-list");function u(){var n=document.createElement("li");n.classList.add("category-link"),n.classList.add("all"),n.textContent="All Categories",s.append(n);var e=[];r.getPromCategoryList().then((function(n){e=n.map((function(n){return'<li class="category-link">'.concat(n.list_name,"</li>")})).join(""),s.insertAdjacentHTML("beforeend",e),document.querySelector(".all").addEventListener("click",x)})).catch((function(n){console.log(n)}))}s.addEventListener("click",(function(n){(0,f.spinnerPlay)(),n.preventDefault(),console.log(n.target.classList.contains("all")),d.innerHTML="";var e=n.target.innerHTML,o=document.querySelector(".category-link.active");o&&o.classList.remove("active");n.target.classList.add("active");var t=c("".concat(e)),r=[];new(0,a.getBookData)(0,t).getPromCategory().then((function(o){console.log(o),r=o.map((function(n){return'<div class="book-card">\n              <img class="book-image" src="'.concat(n.book_image,'" alt="').concat(n.title,'">\n              <h2 class="book_name">').concat(n.title.slice(0,20)).concat(n.title.length>20?"...":"",'</h2>\n              <p class="book_author">').concat(n.author.slice(0,30)).concat(n.author.length>30?"...":"","</p>\n            </div>")})).join(""),d.insertAdjacentHTML("beforeend",r);var t=document.querySelector(".main-title__first-part"),a=document.querySelector(".main-title__second-part");n.target.classList.contains("all")?(t.textContent="Best Sellers",a.textContent="Books"):(t.textContent=i(e),a.textContent=l(e))})).catch((function(n){console.log(n)})),(0,f.spinnerStop)()}));a=t("hUz67");(0,(f=t("j1lrD")).spinnerPlay)(),window.addEventListener("load",(function(){(0,f.spinnerStop)()}));var m=document.querySelector(".categories-list");function g(){var n=document.querySelectorAll(".btn-see-more");function e(n){(0,f.spinnerPlay)(),n.preventDefault(),m.innerHTML="";var e=n.target.id,o=c("".concat(e));console.log(o);var t=[];new(0,a.getBookData)(0,o).getPromCategory().then((function(n){console.log(n),t=n.map((function(n){return'<div class="book-card">\n              <img class="book-image" src="'.concat(n.book_image,'" alt="').concat(n.title,'">\n              <h2 class="book_name">').concat(n.title.slice(0,20)).concat(n.title.length>20?"...":"",'</h2>\n              <p class="book_author">').concat(n.author.slice(0,30)).concat(n.author.length>30?"...":"","</p>\n            </div>")})).join(""),m.insertAdjacentHTML("beforeend",t);var o=document.querySelector(".main-title__first-part"),a=document.querySelector(".main-title__second-part");o.textContent=i(e),a.textContent=l(e)})).catch((function(n){console.log(n)})),(0,f.spinnerStop)()}console.log(n),n.forEach((function(n){n.addEventListener("click",e)}))}var p,_=t("kmL1J"),b=new(0,(a=t("hUz67")).getBookData);p=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("410VS");var f,v=new URL(p),h=document.querySelector(".modal-container"),k=document.querySelector(".modal-backdrop");function y(n){if(""!==n)return n;return"No more information about this book"}function S(){k.classList.add("is-hidden")}function w(n){var e,o=n.currentTarget.id;checkLocalStorage(o),e=o,console.log(e),k.classList.remove("is-hidden"),b=new(0,a.getBookData)(e),h.innerHTML="",b.getPromId().then((function(n){function e(e){for(var o=n.buy_links,t=0;t<o.length;t+=1){if(o[t].name==="".concat(e))return o[t].url;o[t].name,"".concat(e)}}console.log(n),h.innerHTML='\n       <div class="modal-close__btn-wrapper">\n      <button type=\'button\' class=\'modal-close-btn close\'>\n     <svg class="close" fill="none" width="30" height="30">\n          <use href="'.concat(v,'#icon-x-close"></use>\n</svg>\n    \n       <path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2" />\n   </svg>\n      </button>\n      </div>\n      <div class =\'modal-book\'>\n      <div class=\'modal-book__img-container\'>\n        <img class=\'modal-book__img\' src=').concat(y(n.book_image)," \n        alt=").concat(y(n.title),"/>\n        </div>\n        <div class='modal-book__description'>\n        <h2 class=\"modal-book__title\">").concat(y(n.title),'</h2>\n        <p class ="modal-book__author">').concat(y(n.author),'</p>\n        <p class ="modal-book__about">\n      \n        ').concat(y(n.description),'</p>\n        \n       <div class = \'modal-book__stores\'>\n\n      <div class="modal-book__amazon">\n       <a class="amazon__link link"\n       href="').concat(e("Amazon"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="amazon icon"\n   >\n  \n   <svg class="book" fill="none" width="60" height="60">\n          <use href="').concat(v,'#icon-amazon-ar21"></use>\n</svg>\n\n   </a>\n       </div>\n       <div class ="modal-book__applebook">\n       <a class="applebook__link link"\n       href="').concat(e("Apple Books"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Apple Book icon"\n   >\n       <svg class="book"  width="30" height="30" fill="none">\n       <use href="').concat(v,'#icon-apple-ibooks"></use> \n       </svg>\n       </a>\n   </div>\n\n       <div class ="modal-book__bookshop">\n       <a class="bookshop__link link"\n       href="').concat(e("Bookshop"),'"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Bookshop icon"\n   >\n       <svg class="book"  width="40" height="40">\n              <use href="').concat(v,'#icon-14008711"></use>\n       </svg>\n       </a>\n       </div>\n       </div>\n       </div>\n       </div>\n       <div  class="modal-book__add__wrapper">  \n       <button type="button" class="modal-book__button" id="').concat(n.id,'"></button>  \n   </div>  \n        '),console.log(h.innerHTML),document.querySelector(".modal-close-btn").addEventListener("click",S),document.querySelector(".modal-book__button")})).catch((function(n){console.log(n)}))}console.log([]),k.addEventListener("click",(function(n){n.target.classList.contains("modal-backdrop")&&S()})),window.addEventListener("keydown",(function(n){"Escape"==n.code&&S()})),(0,(f=t("j1lrD")).spinnerPlay)(),window.addEventListener("load",(function(){(0,f.spinnerStop)()}));var L=new(0,a.getBookData),E=document.querySelector(".main-title__first-part"),q=document.querySelector(".main-title__second-part"),H=document.querySelector(".categories-list");function x(){(0,f.spinnerPlay)(),E.textContent="Best Sellers",q.textContent="Books";L.getPromTopBooks().then((function(n){var e=n.slice(0,4).map((function(n){var e=n.books.map((function(n){return'<li class="books-list__item">\n            <div class="item-wrap" id="'.concat(n._id,'">\n             <div class = "item-img__wrap">\n               <img class="item-img"\n                src="').concat(n.book_image,'" \n                alt="').concat("book cover photo",'" \n                width ="').concat(n.book_image_width,'" \n                height ="').concat(n.book_image_height,'"\n               />\n              </div>\n              <div class="item-title__wrap">\n                <h3 class="item__name">').concat(n.title.slice(0,30)).concat(n.title.length>30?"...":"",'</h3>\n                <p class="item__author">').concat(n.author,"</p>\n              </div>\n            </div>\n          </li>")})).join("");return'<li class="categories-list__item">\n                 <div class="categories-list__wrap">\n                   <h2 class="category">'.concat(n.list_name,'</h2>\n                   <ul class="books-list">').concat(e,'</ul>\n                   <button class="btn-see-more" id="').concat(n.list_name,'" type="button">see more</button>\n                 </div>\n                </li>')})).join("");H.insertAdjacentHTML("beforeend",e),u(),g(),(0,_.getObject)(),document.querySelectorAll(".item-wrap").forEach((function(n){n.addEventListener("click",w)}))})).catch((function(n){console.log(n)})),(0,f.spinnerStop)()}x(),t("j1lrD"),t("igOX8"),t("kmL1J");localStorage.setItem("arrey",JSON.stringify(["643282b2e85766588626a144","643282b2e85766588626a0f2","643282b3e85766588626a194","643282b2e85766588626a144","643282b2e85766588626a0f2","643282b3e85766588626a194"]))}();
//# sourceMappingURL=index.4235b4b2.js.map
