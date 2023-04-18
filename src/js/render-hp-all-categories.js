import { getBookData } from './getBooksData.js';
import { renderCategoryPage } from './render-hp-default-markup.js';
import { createCategoryString } from './getCategoryString.js';
import { createFirstPartTitle } from './getCategoryTitle.js';
import { createLastPartTitle } from './getCategoryTitle.js';

const booksInform = new getBookData();

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
const categoryAll = document.querySelector('.all');
categoryAll.addEventListener('click', renderCategoryPage);
list.addEventListener('click', getString);

function getString(e) {
  e.preventDefault();
  console.log(e.target.classList.contains('all'));
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

      const firstSpanMainTitle = document.querySelector(
        '.main-title__first-part'
      );
      const secondSpanMainTitle = document.querySelector(
        '.main-title__second-part'
      );

      if (e.target.classList.contains('all')) {
        firstSpanMainTitle.textContent = 'Best Sellers';
        secondSpanMainTitle.textContent = 'Books';
      } else {
        firstSpanMainTitle.textContent = createFirstPartTitle(data);
        secondSpanMainTitle.textContent = createLastPartTitle(data);
      }
      const block = document.querySelector('.book-block');

      // block.scroll({
      //   top: 100,
      //   left: 100,
      //   behavior: 'smooth',
      // });
    })
    .catch(error => {
      console.log(error);
    });
}
