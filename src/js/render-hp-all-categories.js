import { getBookData } from './getBooksData.js';
import { renderCategoryPage } from './render-hp-default-markup.js';
import { createCategoryString } from './getCategoryString.js';
import { createFirstPartTitle } from './getCategoryTitle.js';
import { createLastPartTitle } from './getCategoryTitle.js';
import { spinnerPlay, spinnerStop } from './spinner.js';
import { renderModalWindow } from './modalWindow.js';
spinnerPlay();
window.addEventListener('load', () => {
  spinnerStop();
});

const booksInform = new getBookData();
const list = document.querySelector('.book-categories');
const categoryList = document.querySelector('.categories-list');

export function renderCategoryList() {
  const allCategor = document.createElement('li');
  allCategor.classList.add('category-link');
  allCategor.classList.add('all');
  allCategor.textContent = 'All Categories';
  list.append(allCategor);
  let categoryArray = [];
  booksInform
    .getPromCategoryList()
    .then(books => {
      categoryArray = books
        .map(book => `<li class="category-link">${book.list_name}</li>`)
        .join('');
      list.insertAdjacentHTML('beforeend', categoryArray);
      const categoryAll = document.querySelector('.all');
      categoryAll.addEventListener('click', renderCategoryPage);
    })
    .catch(error => {
      console.log(error);
    });
}

list.addEventListener('click', getString);

function getString(e) {
  spinnerPlay();
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
            `<li class="book-card" id="${book._id}">
              <img class="book-image" src="${book.book_image}" alt="${
              book.title
            }">
              <h2 class="book_name">${book.title.slice(0, 20)}${
              book.title.length > 20 ? '...' : ''
            }</h2>
              <p class="book_author">${book.author.slice(0, 30)}${
              book.author.length > 30 ? '...' : ''
            }</p>
            </li>`
        )
        .join('');
        
      categoryList.insertAdjacentHTML('beforeend', categoryArray);

      const bookCardItem = document.querySelectorAll('.book-card');
        bookCardItem.forEach(element => {
          element.addEventListener('click', renderModalWindow);
        });
        
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
    })
    .catch(error => {
      console.log(error);
    });
  spinnerStop();
}
