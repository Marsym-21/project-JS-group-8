import { getBookData } from './getBooksData.js';
import { createCategoryString } from './getCategoryString.js';
// import {
//   createFirstPartTitle,
//   createLastPartTitle,
// } from './getCategoryTitle.js';

const booksInform = new getBookData();

// reset content of <section class="categories" id="categories">
const defaultMainTitleName = document.querySelector('.default__main-title');
// console.log(defaultMainTitleName);

export function renderCategoryList() {
  let categoryArray = [];
  booksInform
    .getPromCategoryList()
    .then(books => {
      categoryArray = books
        .map(book => `<li class="category-link">${book.list_name}</li>`)
        .join('');
      list.insertAdjacentHTML('beforeend', categoryArray);
    })
    .catch(error => {
      console.log(error);
    });
}

const list = document.querySelector('.book-categories');
const categoryList = document.querySelector('.categories-list');
list.addEventListener('click', getString);

function getString(e) {
  e.preventDefault();
  categoryList.innerHTML = '';
  const data = e.target.innerHTML;

  // Добавляем класс "active" к нажатому элементу списка
  const activeItem = document.querySelector('.category-link.active');
  if (activeItem) {
    activeItem.classList.remove('active');
  }
  e.target.classList.add('active');

  const categoryString = createCategoryString(`${data}`);

  let categoryArray = [];
  const booksInform = new getBookData(0, categoryString);
  booksInform
    .getPromCategory()
    .then(books => {
      console.log(books);
      categoryArray = books
        .map(
          book =>
            `<div class="book-card">
              <img class="book-image" src="${book.book_image}" alt="${
              book.title
            }">
              <h2 class="book_name">${book.title.slice(0, 20)}${
              book.title.length > 20 ? '...' : ''
            }</h2>
              <p class="book_author">${book.author.slice(0, 30)}${
              book.author.length > 30 ? '...' : ''
            }</p>
            </div>`
        )
        .join('');

      categoryList.insertAdjacentHTML('beforeend', categoryArray);

      const title = document.createElement('h1');
      const lastWord = document.createElement('span');

      const wordsArray = data.split(' ');
      const lastWordText = wordsArray.pop();

      title.classList.add('category-title');
      lastWord.classList.add('last-word');
      lastWord.style.color = '#4F2EE8';

      title.appendChild(document.createTextNode(wordsArray.join(' ')));
      lastWord.appendChild(document.createTextNode(` ${lastWordText}`)); // добавляем пробел перед последним словом

      title.appendChild(lastWord);

      categoryList.innerHTML = `<div class="books_collection">${title.outerHTML}
            <ul class="books_list">${categoryArray}</ul>
        </div>`;
    })
    .catch(error => {
      console.log(error);
    });
}
