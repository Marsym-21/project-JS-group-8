var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o("kyEFX").register(JSON.parse('{"5ZPII":"index.d96e4df5.js","8OQ7p":"icons.8e27432b.svg","5UbS1":"index.2210aa95.css","4l2W5":"index.39ed9408.js"}')),o("dTazW"),o("nIDCB");var i=o("2dy3d");i=o("2dy3d");function s(e){const n=e.split("");let t=[];for(let e=0;e<n.length;e++){let o=n[e];" "===o&&(o="%20"),t.push(o)}return t.join("")}function l(e){const n=e.split(" ");return n.slice(0,n.length-1).join(" ")}function a(e){const n=e.split(" ");return n[n.length-1]}(0,(_=o("04jNI")).spinnerPlay)(),window.addEventListener("load",(()=>{(0,_.spinnerStop)()}));const r=new(0,i.getBookData),c=document.querySelector(".book-categories"),d=document.querySelector(".categories-list");function u(){const e=document.createElement("li");e.classList.add("category-link"),e.classList.add("all"),e.textContent="All Categories",c.append(e);let n=[];r.getPromCategoryList().then((e=>{n=e.map((e=>`<li class="category-link">${e.list_name}</li>`)).join(""),c.insertAdjacentHTML("beforeend",n);document.querySelector(".all").addEventListener("click",C)})).catch((e=>{console.log(e)}))}c.addEventListener("click",(function(e){(0,_.spinnerPlay)(),e.preventDefault(),console.log(e.target.classList.contains("all")),d.innerHTML="";const n=e.target.innerHTML,t=document.querySelector(".category-link.active");t&&t.classList.remove("active");e.target.classList.add("active");const o=s(`${n}`);let r=[];new(0,i.getBookData)(0,o).getPromCategory().then((t=>{console.log(t),r=t.map((e=>`<li class="book-card">\n              <img class="book-image" src="${e.book_image}" alt="${e.title}">\n              <h2 class="book_name">${e.title.slice(0,20)}${e.title.length>20?"...":""}</h2>\n              <p class="book_author">${e.author.slice(0,30)}${e.author.length>30?"...":""}</p>\n            </li>`)).join(""),d.insertAdjacentHTML("beforeend",r);const o=document.querySelector(".main-title__first-part"),i=document.querySelector(".main-title__second-part");e.target.classList.contains("all")?(o.textContent="Best Sellers",i.textContent="Books"):(o.textContent=l(n),i.textContent=a(n))})).catch((e=>{console.log(e)})),(0,_.spinnerStop)()}));i=o("2dy3d");(0,(_=o("04jNI")).spinnerPlay)(),window.addEventListener("load",(()=>{(0,_.spinnerStop)()}));const m=document.querySelector(".categories-list");function p(){const e=document.querySelectorAll(".btn-see-more");function n(e){(0,_.spinnerPlay)(),e.preventDefault(),m.innerHTML="";const n=e.target.id,t=s(`${n}`);console.log(t);let o=[];new(0,i.getBookData)(0,t).getPromCategory().then((e=>{console.log(e),o=e.map((e=>`<div class="book-card">\n              <img class="book-image" src="${e.book_image}" alt="${e.title}">\n              <h2 class="book_name">${e.title.slice(0,20)}${e.title.length>20?"...":""}</h2>\n              <p class="book_author">${e.author.slice(0,30)}${e.author.length>30?"...":""}</p>\n            </div>`)).join(""),m.insertAdjacentHTML("beforeend",o);const t=document.querySelector(".main-title__first-part"),i=document.querySelector(".main-title__second-part");t.textContent=l(n),i.textContent=a(n)})).catch((e=>{console.log(e)})),(0,_.spinnerStop)()}console.log(e),e.forEach((e=>{e.addEventListener("click",n)}))}var g=o("dLm4j"),_=(i=o("2dy3d"),o("04jNI"));g=o("dLm4j");let b=new(0,i.getBookData);var h;h=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const k=new URL(h),v=document.querySelector(".modal-container"),f=document.querySelector(".modal-backdrop"),y=[];let w=[];function $(e){if(""!==e)return e;return"No more information about this book"}function S(){f.classList.add("is-hidden")}function L(e){const n=e.currentTarget.id;!function(){const e=localStorage.getItem("id"),n=JSON.parse(e);w=n?y.concat(n):[]}(),function(e){function n(){let n;return w.includes(e)?(n="Remove from the shopping list",n):(n="Add to shopping list",n)}(0,_.spinnerPlay)(),f.classList.remove("is-hidden"),b=new(0,i.getBookData)(e),v.innerHTML="",b.getPromId().then((t=>{function o(e){const n=t.buy_links;for(let t=0;t<n.length;t+=1){if(n[t].name===`${e}`)return n[t].url;n[t].name}}v.innerHTML=`\n       <div class="modal-close__btn-wrapper">\n      <button type='button' class='modal-close-btn close'>\n     <svg class="close-svg" fill="none" width="30" height="30">\n          <use href="${k}#icon-x-close"></use>\n</svg>\n    \n       <path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2" />\n   </svg>\n      </button>\n      </div>\n      <div class ='modal-book'>\n      <div class='modal-book__img-container'>\n        <img class='modal-book__img' src=${$(t.book_image)} \n        alt=${$(t.title)}/>\n        </div>\n        <div class='modal-book__description'>\n        <h2 class="modal-book__title">${$(t.title)}</h2>\n        <p class ="modal-book__author">${$(t.author)}</p>\n        <p class ="modal-book__about">\n      \n        ${$(t.description)}</p>\n        \n       <div class = 'modal-book__stores'>\n\n      <div class="modal-book__amazon">\n       <a class="amazon__link link"\n       href="${o("Amazon")}"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="amazon icon"\n   >\n  \n   <svg class="book-svg" fill="none" width="60" height="60">\n          <use href="${k}#icon-amazon-ar21"></use>\n</svg>\n\n   </a>\n       </div>\n       <div class ="modal-book__applebook">\n       <a class="applebook__link link"\n       href="${o("Apple Books")}"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Apple Book icon"\n   >\n       <svg class="book-svg"  width="30" height="30" fill="none">\n       <use href="${k}#icon-apple-ibooks"></use> \n       </svg>\n       </a>\n   </div>\n\n       <div class ="modal-book__bookshop">\n       <a class="bookshop__link link"\n       href="${o("Bookshop")}"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Bookshop icon"\n   >\n       <svg class="book-svg black-book"  width="30" height="30">\n              <use href="${k}#icon-14008711"></use>\n       </svg>\n       </a>\n       </div>\n       </div>\n       </div>\n       </div>\n       <div  class="modal-book__add__wrapper">  \n       <button type="button" class="modal-book__button">${n()}</button>  \n   </div>  \n        `,(0,g.getObject)(),document.querySelector(".modal-close-btn").addEventListener("click",S);const i=document.querySelector(".modal-book__button");i.addEventListener("click",(()=>{if(w.includes(e)){let t=w.indexOf(e);w.splice(t,1);const o=JSON.stringify(w);return i.textContent=`${n()}`,void localStorage.setItem("id",o)}{w.push(e),i.textContent=`${n()}`;const t=JSON.stringify(w);localStorage.setItem("id",t)}}))})).catch((e=>{console.log(e)})),(0,_.spinnerStop)()}(n)}f.addEventListener("click",(e=>{e.target.classList.contains("modal-backdrop")&&S()})),window.addEventListener("keydown",(e=>{"Escape"==e.code&&S()})),(0,(_=o("04jNI")).spinnerPlay)(),window.addEventListener("load",(()=>{(0,_.spinnerStop)()}));const E=new(0,i.getBookData),j=document.querySelector(".main-title__first-part"),x=document.querySelector(".main-title__second-part"),q=document.querySelector(".categories-list");function C(){(0,_.spinnerPlay)(),j.textContent="Best Sellers",x.textContent="Books";let e=[];E.getPromTopBooks().then((n=>{e=n.slice(0,4).map((e=>{let n=375;addEventListener("resize",(e=>{(window.innerWidth>767&&n<768||window.innerWidth>1439&&n<1440||window.innerWidth<1440&&n>1439||window.innerWidth<768&&n>767)&&location.reload()})),n=window.innerWidth;let t=1;t=n<768?1:n>767&&n<1440?3:5,console.log(t);const o=e.books.slice(0,t).map((e=>`<li class="books-list__item">\n            \n            <div class="item-wrap" id="${e._id}">\n              <div class = "item-img__wrap">\n                <img class="item-img"\n                 src="${e.book_image}" \n                 alt="book cover photo" \n                 width ="${e.book_image_width}" \n                 height ="${e.book_image_height}"\n                />\n                <div class="item__overlay">\n                <p class="item__overlay-text">quick view</p>\n                </div>\n              </div>\n              <div class="item-title__wrap">\n                <h3 class="item__name">${e.title.slice(0,19)}${e.title.length>19?"...":""}</h3>\n                <p class="item__author">${e.author}</p>\n              </div>\n            </div>\n          </li>`)).join("");return`<li class="categories-list__item">\n                 <div class="categories-list__wrap">\n                   <h2 class="category">${e.list_name}</h2>\n                   <ul class="books-list">${o}</ul>\n                   <div class="btn-see-more__wrap">\n                    <button class="btn-see-more" id="${e.list_name}" type="button">see more</button>\n                   </div>\n                 </div>\n                </li>`}));const t=e.join("");q.insertAdjacentHTML("beforeend",t),u(),p(),(0,g.getObject)();document.querySelectorAll(".item-wrap").forEach((e=>{e.addEventListener("click",L)}))})).catch((e=>{console.log(e)})),(0,_.spinnerStop)()}C(),o("04jNI"),o("7RDlp"),o("dLm4j");
//# sourceMappingURL=index.d96e4df5.js.map
