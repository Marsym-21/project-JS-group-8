var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("kyEFX").register(JSON.parse('{"5ZPII":"index.2f53adea.js","8OQ7p":"icons.f4338761.svg","5UbS1":"index.bb227803.css","4l2W5":"index.6e26ca03.js"}')),o("dTazW"),o("nIDCB");var i=o("2dy3d");i=o("2dy3d");function s(e){const t=e.split("");let n=[];for(let e=0;e<t.length;e++){let o=t[e];" "===o&&(o="%20"),n.push(o)}return n.join("")}function l(e){const t=e.split(" ");return t.slice(0,t.length-1).join(" ")}function a(e){const t=e.split(" ");return t[t.length-1]}var c=o("04jNI"),r=(i=o("2dy3d"),c=o("04jNI"),o("dLm4j"));let d=new(0,i.getBookData);var m;m=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const u=new URL(m),p=document.querySelector(".modal-container"),g=document.querySelector(".modal-backdrop"),_=document.querySelector("body"),b=[];let k=[];function h(e){if(""!==e)return e;return"No more information about this book"}function v(e){const t=e.currentTarget.id;!function(){const e=localStorage.getItem("id"),t=JSON.parse(e);k=t?b.concat(t):[]}(),function(e){function t(){let t;return k.includes(e)?(t="Remove from the shopping list",t):(t="Add to shopping list",t)}(0,c.spinnerPlay)(),g.classList.remove("is-hidden"),_.classList.add("modal-open"),d=new(0,i.getBookData)(e),p.innerHTML="",d.getPromId().then((n=>{function o(e){const t=n.buy_links;for(let n=0;n<t.length;n+=1){if(t[n].name===`${e}`)return t[n].url;t[n].name}}p.innerHTML=`\n      \n      <button type='button' class='modal-close-btn close'>\n     <svg class="close-svg" fill="none" width="30" height="30">\n          <use href="${u}#icon-close-black"></use>\n</svg>\n      </button>\n         <div class ='modal-book'>\n      <div class='modal-book__img-container'>\n        <img class='modal-book__img' src=${h(n.book_image)} \n        alt=${h(n.title)}/>\n        </div>\n        <div class='modal-book__description'>\n        <h2 class="modal-book__title">${h(n.title)}</h2>\n        <p class ="modal-book__author">${h(n.author)}</p>\n        <p class ="modal-book__about">\n      \n        ${h(n.description)}</p>\n        \n       <div class = 'modal-book__stores'>\n\n      <div class="modal-book__amazon">\n       <a class="amazon__link link"\n       href="${o("Amazon")}"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="amazon icon"\n   >\n  \n   <svg class="book-svg" fill="none" width="60" height="60">\n          <use href="${u}#icon-amazon-ar21"></use>\n</svg>\n\n   </a>\n       </div>\n       <div class ="modal-book__applebook">\n       <a class="applebook__link link"\n       href="${o("Apple Books")}"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Apple Book icon"\n   >\n       <svg class="book-svg yellow-book"  width="30" height="30" fill="none">\n       <use href="${u}#icon-apple-ibooks"></use> \n       </svg>\n       </a>\n   </div>\n\n       <div class ="modal-book__bookshop">\n       <a class="bookshop__link link"\n       href="${o("Bookshop")}"  \n   target="_blank"\n   rel="noopener noreferrer"\n   aria-label="Bookshop icon"\n   >\n       <svg class="book-svg black-book"  width="30" height="30">\n              <use href="${u}#icon-14008711"></use>\n       </svg>\n       </a>\n       </div>\n       </div>\n       </div>\n       </div>\n       <div  class="modal-book__add__wrapper">  \n       <button type="button" class="modal-book__button">${t()}</button>  \n   </div>  \n        `;const i=document.querySelector(".modal-close-btn"),s=document.querySelector(".modal-book__button");function l(){if(k.includes(e)){let n=k.indexOf(e);k.splice(n,1);const o=JSON.stringify(k);return s.textContent=`${t()}`,void localStorage.setItem("id",o)}{k.push(e),s.textContent=`${t()}`;const n=JSON.stringify(k);localStorage.setItem("id",n)}}function a(){g.classList.add("is-hidden"),_.classList.remove("modal-open"),s.removeEventListener("click",l)}s.addEventListener("click",l),(0,r.getObjectModal)(),i.addEventListener("click",a),g.addEventListener("click",(e=>{e.target.classList.contains("modal-backdrop")&&a()})),window.addEventListener("keydown",(e=>{"Escape"==e.code&&a()}))})).catch((e=>{console.log(e.message)})),(0,c.spinnerStop)()}(t)}r=o("dLm4j");(0,c.spinnerPlay)(),window.addEventListener("load",(()=>{(0,c.spinnerStop)()}));const f=new(0,i.getBookData),y=document.querySelector(".book-categories"),w=document.querySelector(".categories-list");function L(){const e=document.createElement("li");e.classList.add("category-link"),e.classList.add("all"),e.classList.add("active"),e.textContent="All Categories",y.append(e);let t=[];f.getPromCategoryList().then((e=>{t=e.map((e=>`<li class="category-link">${e.list_name}</li>`)).join(""),y.insertAdjacentHTML("beforeend",t);document.querySelector(".all").addEventListener("click",B),document.querySelectorAll(".category-link").forEach((e=>{e.addEventListener("click",S)}))})).catch((e=>{console.log(e.message)}))}function S(e){(0,c.spinnerPlay)(),e.preventDefault(),w.innerHTML="";const t=e.target.innerHTML;e.target.classList.contains("all")||w.classList.add("test");const n=document.querySelector(".category-link.active");n&&n.classList.remove("active"),e.target.classList.add("active");const o=s(`${t}`);let d=[];new(0,i.getBookData)(0,o).getPromCategory().then((n=>{console.log(n),d=n.map((e=>`<li class="books-list__item" id="${e._id}">\n            <div class = "item-img__wrap">\n              <img class="item-img" src="${e.book_image}" alt="${e.title}">\n            <div class="item__overlay">\n            \n                <p class="item__overlay-text">quick view</p>\n                </div>\n                </div>\n              <h2 class="book_name">${e.title.slice(0,20)}${e.title.length>20?"...":""}</h2>\n              <p class="book_author">${e.author.slice(0,30)}${e.author.length>30?"...":""}</p>\n            </li>`)).join(""),w.insertAdjacentHTML("beforeend",d);document.querySelectorAll(".book-card").forEach((e=>{e.addEventListener("click",v)}));const o=document.querySelector(".main-title__first-part"),i=document.querySelector(".main-title__second-part");e.target.classList.contains("all")?(o.textContent="Best Sellers",i.textContent="Books"):(o.textContent=l(t),i.textContent=a(t)),(0,r.getObjectCategory)()})).catch((e=>{console.log(e.message)})),(0,c.spinnerStop)()}i=o("2dy3d"),r=o("dLm4j");(0,(c=o("04jNI")).spinnerPlay)(),window.addEventListener("load",(()=>{(0,c.spinnerStop)()}));const $=document.querySelector(".categories-list");function E(){const e=document.querySelectorAll(".btn-see-more");function t(e){(0,c.spinnerPlay)(),e.preventDefault(),$.innerHTML="";const t=e.target.id,n=s(`${t}`);console.log(n);let o=[];new(0,i.getBookData)(0,n).getPromCategory().then((e=>{console.log(e),o=e.map((e=>`<li class="book-card" id="${e._id}">\n              <img class="book-image" src="${e.book_image}" alt="${e.title}">\n              <h2 class="book_name">${e.title.slice(0,20)}${e.title.length>20?"...":""}</h2>\n              <p class="book_author">${e.author.slice(0,30)}${e.author.length>30?"...":""}</p>\n            </li>`)).join(""),$.insertAdjacentHTML("beforeend",o);const n=document.querySelector(".main-title__first-part"),i=document.querySelector(".main-title__second-part");n.textContent=l(t),i.textContent=a(t);document.querySelectorAll(".book-card").forEach((e=>{e.addEventListener("click",v)})),(0,r.getObjectSeeMore)()})).catch((e=>{console.log(e.message)})),(0,c.spinnerStop)()}console.log(e),e.forEach((e=>{e.addEventListener("click",t)}))}r=o("dLm4j");(0,(c=o("04jNI")).spinnerPlay)(),window.addEventListener("load",(()=>{(0,c.spinnerStop)()}));const j=new(0,i.getBookData),q=document.querySelector(".main-title__first-part"),x=document.querySelector(".main-title__second-part"),A=document.querySelector(".categories-list");function B(){(0,c.spinnerPlay)(),A.classList.remove("test"),q.textContent="Best Sellers",x.textContent="Books";let e=[];j.getPromTopBooks().then((t=>{e=t.slice(0,4).map((e=>{let t=375;addEventListener("resize",(e=>{(window.innerWidth>767&&t<768||window.innerWidth>1439&&t<1440||window.innerWidth<1440&&t>1439||window.innerWidth<768&&t>767)&&location.reload()})),t=window.innerWidth;let n=1;n=t<768?1:t>767&&t<1440?3:5,console.log(n);const o=e.books.slice(0,n).map((e=>`<li class="books-list__item">\n            \n            <div class="item-wrap" id="${e._id}">\n              <div class = "item-img__wrap">\n                <img class="item-img"\n                 src="${e.book_image}" \n                 alt="book cover photo" \n                 width ="${e.book_image_width}" \n                 height ="${e.book_image_height}"\n                />\n                <div class="item__overlay">\n                <p class="item__overlay-text">quick view</p>\n                </div>\n              </div>\n              <div class="item-title__wrap">\n                <h3 class="item__name">${e.title.slice(0,15)}${e.title.length>15?"...":""}</h3>\n                <p class="item__author">${e.author}</p>\n              </div>\n            </div>\n          </li>`)).join("");return`<li class="categories-list__item">\n                 <div class="categories-list__wrap">\n                   <h2 class="category">${e.list_name}</h2>\n                   <ul class="books-list">${o}</ul>\n                   <div class="btn-see-more__wrap">\n                    <button class="btn-see-more" id="${e.list_name}" type="button">see more</button>\n                   </div>\n                 </div>\n                </li>`}));const n=e.join("");A.insertAdjacentHTML("beforeend",n),L(),E();document.querySelectorAll(".item-wrap").forEach((e=>{e.addEventListener("click",v)})),(0,r.getObject)()})).catch((e=>{console.log(e.message)})),(0,c.spinnerStop)()}B(),o("04jNI"),o("7RDlp"),o("dLm4j");let C=document.getElementById("myBtn");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?C.style.display="block":C.style.display="none"};
//# sourceMappingURL=index.2f53adea.js.map
