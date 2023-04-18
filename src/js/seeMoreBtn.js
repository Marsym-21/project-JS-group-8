import { createCategoryString } from './getCategoryString';
import { getBookData } from './getBooksData';
import { createFirstPartTitle } from './getCategoryTitle.js';
import { createLastPartTitle } from './getCategoryTitle.js';

const categoryList = document.querySelector('.categories-list');
export function seeMorebtn() {
  const sMoreButton = document.querySelectorAll('.btn-see-more');

  sMoreButton.forEach(element => {
    element.addEventListener('click', renderCategory);
  });

  function renderCategory(e) {
    e.preventDefault();

    categoryList.innerHTML = '';

    const data = e.target.id;

    const categoryString = createCategoryString(`${data}`);
    console.log(categoryString);

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
        firstSpanMainTitle.textContent = createFirstPartTitle(data);
        secondSpanMainTitle.textContent = createLastPartTitle(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
