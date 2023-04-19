import { getBookData } from './getBooksData.js';
import { renderCategoryList } from './render-hp-all-categories.js';
import { seeMorebtn } from './seeMoreBtn.js';
import { getObject } from './toggle-theme.js';
import { renderModalWindow } from './modalWindow.js';
import { spinnerPlay, spinnerStop } from './spinner.js';
spinnerPlay();
window.addEventListener('load', () => {
  spinnerStop();
});

const booksInform = new getBookData();
const firstSpanMainTitle = document.querySelector('.main-title__first-part');
const secondSpanMainTitle = document.querySelector('.main-title__second-part');

const imgAttributeAlt = 'book cover photo';

const categoryList = document.querySelector('.categories-list');

export function renderCategoryPage() {
  spinnerPlay();
  // Get reference to the ul element using its id
  firstSpanMainTitle.textContent = 'Best Sellers';
  secondSpanMainTitle.textContent = 'Books';
  let categoryArray = [];
  booksInform
    .getPromTopBooks()
    .then(books => {
      categoryArray = books.slice(0, 4).map(book => {
        // слухаємо вьюпорт і відповідно до його розміру обрізаємо кількість книг ...
        let currentRenderWidth = 375;
        addEventListener('resize', event => {
          if (
            (window.innerWidth > 767 && currentRenderWidth < 768) ||
            (window.innerWidth > 1439 && currentRenderWidth < 1440) ||
            (window.innerWidth < 1440 && currentRenderWidth > 1439) ||
            (window.innerWidth < 768 && currentRenderWidth > 767)
          ) {
            location.reload();
          }
        });

        currentRenderWidth = window.innerWidth;
        let sliseQuantity = 1;
        if (currentRenderWidth < 768) {
          sliseQuantity = 1;
        } else if (currentRenderWidth > 767 && currentRenderWidth < 1440) {
          sliseQuantity = 3;
        } else {
          sliseQuantity = 5;
        }
        console.log(sliseQuantity);

        const booksArray = book.books
          .slice(0, sliseQuantity)
          .map(
            data =>
              `<li class="books-list__item">
            
            <div class="item-wrap" id="${data._id}">
              <div class = "item-img__wrap">
                <img class="item-img"
                 src="${data.book_image}" 
                 alt="${imgAttributeAlt}" 
                 width ="${data.book_image_width}" 
                 height ="${data.book_image_height}"
                />
                <div class="item__overlay">
                <p class="item__overlay-text">quick view</p>
                </div>
              </div>
              <div class="item-title__wrap">
                <h3 class="item__name">${data.title.slice(0, 19)}${
                data.title.length > 19 ? '...' : ''
              }</h3>
                <p class="item__author">${data.author}</p>
              </div>
            </div>
          </li>`
          )
          .join('');
        return `<li class="categories-list__item">
                 <div class="categories-list__wrap">
                   <h2 class="category">${book.list_name}</h2>
                   <ul class="books-list">${booksArray}</ul>
                   <div class="btn-see-more__wrap">
                    <button class="btn-see-more" id="${book.list_name}" type="button">see more</button>
                   </div>
                 </div>
                </li>`;
      });

      const categoryHtml = categoryArray.join(''); // Join the array of HTML strings into a single string
      categoryList.insertAdjacentHTML('beforeend', categoryHtml); // Insert the HTML code into the ul element

      renderCategoryList();
      seeMorebtn();
      getObject();
      const wrapFunction = document.querySelectorAll('.item-wrap');
      wrapFunction.forEach(element => {
        element.addEventListener('click', renderModalWindow);
      });
    })
    .catch(error => {
      console.log(error);
    });
  spinnerStop();
}

renderCategoryPage();
