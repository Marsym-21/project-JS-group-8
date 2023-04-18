import { getBookData } from './getBooksData.js';
import { renderCategoryList } from './render-hp-all-categories.js';

// import { getString } from './render-hp-all-categories.js';

const booksInform = new getBookData();

const firstSpanMainTitle = document.createElement('span');
firstSpanMainTitle.textContent = 'Best Sellers';
firstSpanMainTitle.classList.add('main-title__first-part');
const secondSpanMainTitle = document.createElement('span');
secondSpanMainTitle.textContent = ' Books';
secondSpanMainTitle.classList.add('main-title__second-part');
const imgAttributeAlt = 'book cover photo';
const sectionCategory = document.querySelector('.categories');
const categoryList = document.querySelector('.categories-list');

function renderCategoryPage() {
  // Get reference to the ul element using its id
  let categoryArray = [];
  booksInform
    .getPromTopBooks()
    .then(books => {
      const mainTitleName = document.createElement('h1');
      mainTitleName.classList.add('default__main-title');
      console.log(mainTitleName);
      sectionCategory.prepend(mainTitleName);
      mainTitleName.prepend(firstSpanMainTitle, secondSpanMainTitle);

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
