import { getBookData } from './getBooksData.js';
import { renderCategoryList } from './render-hp-all-categories.js';

// import { getString } from './render-hp-all-categories.js';

const booksInform = new getBookData();
const firstSpanMainTitle = document.querySelector('.main-title__first-part');
const secondSpanMainTitle = document.querySelector('.main-title__second-part');

const imgAttributeAlt = 'book cover photo';

const categoryList = document.querySelector('.categories-list');

export function renderCategoryPage() {
  // Get reference to the ul element using its id
  firstSpanMainTitle.textContent = 'Best Sellers';
  secondSpanMainTitle.textContent = 'Books';
  let categoryArray = [];
  booksInform
    .getPromTopBooks()
    .then(books => {
      categoryArray = books.slice(0, 4).map(book => {
        const booksArray = book.books
          .map(
            data =>
              `<li class="books-list__item" data-id="${data._id}">
            <div class="item-wrap">
             <div class = "item-img__wrap">
               <img class="item-img"
                src="${data.book_image}" 
                alt="${imgAttributeAlt}" 
                width ="${data.book_image_width}" 
                height ="${data.book_image_height}"
               />
              </div>
              <div class="item-title__wrap">
                <h3 class="item__name">${data.title.slice(0, 30)}${
                data.title.length > 30 ? '...' : ''
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
                   <button class="btn-see-more" type="button">see more</button>
                 </div>
                </li>`;
      });

      const categoryHtml = categoryArray.join(''); // Join the array of HTML strings into a single string
      categoryList.insertAdjacentHTML('beforeend', categoryHtml); // Insert the HTML code into the ul element
      renderCategoryList();
    })
    .catch(error => {
      console.log(error);
    });
}

renderCategoryPage();

// function resetContent() {
//   sectionCategory.innerHTML => getString(e);
// }

// const button = document.querySelector('.btn-see-more');
// button.addEventListener('click', getString);
