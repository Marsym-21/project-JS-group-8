var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o("kyEFX").register(JSON.parse('{"5ZPII":"index.64640bec.js","8OQ7p":"icons.8e27432b.svg","5UbS1":"index.911c43bf.css","4l2W5":"index.339f3b94.js"}')),o("dTazW"),o("nIDCB");var i=o("2dy3d");i=o("2dy3d");function s(e){const n=e.split("");let t=[];for(let e=0;e<n.length;e++){let o=n[e];" "===o&&(o="%20"),t.push(o)}return t.join("")}function l(e){const n=e.split(" ");return n.slice(0,n.length-1).join(" ")}function a(e){const n=e.split(" ");return n[n.length-1]}var r=o("04jNI"),c=(i=o("2dy3d"),r=o("04jNI"),o("dLm4j"));let d=new(0,i.getBookData);var m;m=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const u=new URL(m),g=document.querySelector(".modal-container"),p=document.querySelector(".modal-backdrop"),_=[];let b=[];function h(e){if(""!==e)return e;return"No more information about this book"}function k(){p.classList.add("is-hidden")}function v(e){const n=e.currentTarget.id;!function(){const e=localStorage.getItem("id"),n=JSON.parse(e);b=n?_.concat(n):[]}(),function(e){function n(){let n;return b.includes(e)?(n="Remove from the shopping list",n):(n="Add to shopping list",n)}(0,r.spinnerPlay)(),p.classList.remove("is-hidden"),d=new(0,i.getBookData)(e),g.innerHTML="",d.getPromId().then((t=>{function o(e){const n=t.buy_links;for(let t=0;t<n.length;t+=1){if(n[t].name===`${e}`)return n[t].url;n[t].name}}g.innerHTML=`\n       <div class="modal-close__btn-wrapper">\n      <button type='button' class='modal-close-btn close'>\n     <svg class="close-svg" fill="none" width="30" height="30">\n          <use href="${u}#icon-x-close"></use>\n</svg>\n    \n       <path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2" />\n   </svg>\n      </button>\n      </div>\n      <div class ='modal-book'>\n      <div class='modal-book__img-container'>\n        <img class='modal-book__img' src=${h(t.book_image)} \n        alt=${h(t.title)}/>\n        </div>\n        <div class='modal-book__description'>\n        <h2 class="modal-book__title">${h(t.title)}</h2>\n        <p class ="modal-book__author">${h(t.author)}</p>\n        <p class ="modal-book__about">\n      \n        ${h(t.description)}</p>\n        \n       <div class = 'modal-book__stores'>\n\n      <div class="modal-book__amazon">\n       <a class="amazon__link link"\n       href="${o("Amazon")}"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="amazon icon"\n   >\n  \n   <svg class="book-svg" fill="none" width="60" height="60">\n          <use href="${u}#icon-amazon-ar21"></use>\n</svg>\n\n   </a>\n       </div>\n       <div class ="modal-book__applebook">\n       <a class="applebook__link link"\n       href="${o("Apple Books")}"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Apple Book icon"\n   >\n       <svg class="book-svg"  width="30" height="30" fill="none">\n       <use href="${u}#icon-apple-ibooks"></use> \n       </svg>\n       </a>\n   </div>\n\n       <div class ="modal-book__bookshop">\n       <a class="bookshop__link link"\n       href="${o("Bookshop")}"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Bookshop icon"\n   >\n       <svg class="book-svg black-book"  width="30" height="30">\n              <use href="${u}#icon-14008711"></use>\n       </svg>\n       </a>\n       </div>\n       </div>\n       </div>\n       </div>\n       <div  class="modal-book__add__wrapper">  \n       <button type="button" class="modal-book__button">${n()}</button>  \n   </div>  \n        `;const i=document.querySelector(".modal-close-btn");console.log(i),i.addEventListener("click",k);const s=document.querySelector(".modal-book__button");s.addEventListener("click",(()=>{if(b.includes(e)){let t=b.indexOf(e);b.splice(t,1);const o=JSON.stringify(b);return s.textContent=`${n()}`,void localStorage.setItem("id",o)}{b.push(e),s.textContent=`${n()}`;const t=JSON.stringify(b);localStorage.setItem("id",t)}})),(0,c.getObjectModal)()})).catch((e=>{console.log(e.message)})),(0,r.spinnerStop)()}(n)}p.addEventListener("click",(e=>{e.target.classList.contains("modal-backdrop")&&k()})),window.addEventListener("keydown",(e=>{"Escape"==e.code&&k()}));c=o("dLm4j");(0,r.spinnerPlay)(),window.addEventListener("load",(()=>{(0,r.spinnerStop)()}));const f=new(0,i.getBookData),y=document.querySelector(".book-categories"),w=document.querySelector(".categories-list");function S(){const e=document.createElement("li");e.classList.add("category-link"),e.classList.add("all"),e.textContent="All Categories",y.append(e);let n=[];f.getPromCategoryList().then((e=>{n=e.map((e=>`<li class="category-link">${e.list_name}</li>`)).join(""),y.insertAdjacentHTML("beforeend",n);document.querySelector(".all").addEventListener("click",C),document.querySelectorAll(".category-link").forEach((e=>{e.addEventListener("click",$)}))})).catch((e=>{console.log(e.message)}))}function $(e){(0,r.spinnerPlay)(),e.preventDefault(),console.log(e.target.classList.contains("all")),w.innerHTML="";const n=e.target.innerHTML,t=document.querySelector(".category-link.active");t&&t.classList.remove("active"),e.target.classList.add("active");const o=s(`${n}`);let d=[];new(0,i.getBookData)(0,o).getPromCategory().then((t=>{console.log(t),d=t.map((e=>`<li class="book-card" id="${e._id}">\n              <img class="book-image" src="${e.book_image}" alt="${e.title}">\n              <h2 class="book_name">${e.title.slice(0,20)}${e.title.length>20?"...":""}</h2>\n              <p class="book_author">${e.author.slice(0,30)}${e.author.length>30?"...":""}</p>\n            </li>`)).join(""),w.insertAdjacentHTML("beforeend",d);document.querySelectorAll(".book-card").forEach((e=>{e.addEventListener("click",v)}));const o=document.querySelector(".main-title__first-part"),i=document.querySelector(".main-title__second-part");e.target.classList.contains("all")?(o.textContent="Best Sellers",i.textContent="Books"):(o.textContent=l(n),i.textContent=a(n)),(0,c.getObjectCategory)()})).catch((e=>{console.log(e.message)})),(0,r.spinnerStop)()}i=o("2dy3d"),c=o("dLm4j");(0,(r=o("04jNI")).spinnerPlay)(),window.addEventListener("load",(()=>{(0,r.spinnerStop)()}));const L=document.querySelector(".categories-list");function E(){const e=document.querySelectorAll(".btn-see-more");function n(e){(0,r.spinnerPlay)(),e.preventDefault(),L.innerHTML="";const n=e.target.id,t=s(`${n}`);console.log(t);let o=[];new(0,i.getBookData)(0,t).getPromCategory().then((e=>{console.log(e),o=e.map((e=>`<li class="book-card" id="${e._id}">\n              <img class="book-image" src="${e.book_image}" alt="${e.title}">\n              <h2 class="book_name">${e.title.slice(0,20)}${e.title.length>20?"...":""}</h2>\n              <p class="book_author">${e.author.slice(0,30)}${e.author.length>30?"...":""}</p>\n            </li>`)).join(""),L.insertAdjacentHTML("beforeend",o);const t=document.querySelector(".main-title__first-part"),i=document.querySelector(".main-title__second-part");t.textContent=l(n),i.textContent=a(n);document.querySelectorAll(".book-card").forEach((e=>{e.addEventListener("click",v)})),(0,c.getObjectSeeMore)()})).catch((e=>{console.log(e.message)})),(0,r.spinnerStop)()}console.log(e),e.forEach((e=>{e.addEventListener("click",n)}))}c=o("dLm4j");(0,(r=o("04jNI")).spinnerPlay)(),window.addEventListener("load",(()=>{(0,r.spinnerStop)()}));const j=new(0,i.getBookData),q=document.querySelector(".main-title__first-part"),x=document.querySelector(".main-title__second-part"),A=document.querySelector(".categories-list");function C(){(0,r.spinnerPlay)(),q.textContent="Best Sellers",x.textContent="Books";let e=[];j.getPromTopBooks().then((n=>{e=n.slice(0,4).map((e=>{let n=375;addEventListener("resize",(e=>{(window.innerWidth>767&&n<768||window.innerWidth>1439&&n<1440||window.innerWidth<1440&&n>1439||window.innerWidth<768&&n>767)&&location.reload()})),n=window.innerWidth;let t=1;t=n<768?1:n>767&&n<1440?3:5,console.log(t);const o=e.books.slice(0,t).map((e=>`<li class="books-list__item">\n            \n            <div class="item-wrap" id="${e._id}">\n              <div class = "item-img__wrap">\n                <img class="item-img"\n                 src="${e.book_image}" \n                 alt="book cover photo" \n                 width ="${e.book_image_width}" \n                 height ="${e.book_image_height}"\n                />\n                <div class="item__overlay">\n                <p class="item__overlay-text">quick view</p>\n                </div>\n              </div>\n              <div class="item-title__wrap">\n                <h3 class="item__name">${e.title.slice(0,15)}${e.title.length>15?"...":""}</h3>\n                <p class="item__author">${e.author}</p>\n              </div>\n            </div>\n          </li>`)).join("");return`<li class="categories-list__item">\n                 <div class="categories-list__wrap">\n                   <h2 class="category">${e.list_name}</h2>\n                   <ul class="books-list">${o}</ul>\n                   <div class="btn-see-more__wrap">\n                    <button class="btn-see-more" id="${e.list_name}" type="button">see more</button>\n                   </div>\n                 </div>\n                </li>`}));const t=e.join("");A.insertAdjacentHTML("beforeend",t),S(),E();document.querySelectorAll(".item-wrap").forEach((e=>{e.addEventListener("click",v)})),(0,c.getObject)()})).catch((e=>{console.log(e.message)})),(0,r.spinnerStop)()}C(),o("04jNI"),o("7RDlp"),o("dLm4j");
//# sourceMappingURL=index.64640bec.js.map