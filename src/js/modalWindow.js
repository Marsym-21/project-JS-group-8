import { getBookData } from './getBooksData.js';

const booksInform = new getBookData((id = '643282b1e85766588626a0b4'));
const logoPath = new URL('../images/icons.svg', import.meta.url);
let addedToShoppingBag = false;
let booksArray = [];

function renderBookInformation() {
  const modalContainer = document.querySelector('.modal-container');

  booksInform
    .getPromId()
    .then(data => {
      function links(sms) {
        const link = data.buy_links;
        for (let i = 0; i < link.length; i += 1) {
          if (link[i].name === `${sms}`) {
            return link[i].url;
          } else if (link[i].name !== `${sms}`) {
            continue;
          }
        }
      }

      function checkValue(value) {
        if (value !== '') {
          return value;
        } else {
          let message = 'No information';
          return message;
        }
      }

      categoryArray = `
       <div class="modal-close__btn-wrapper">
      <button type='button' class='modal-close-btn js-modal-close-btn '>
     <svg class="close" fill="none" width="30" height="30">
          <use href="${logoPath}#icon-x-close"></use>
</svg>

       <path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2" />
   </svg>
      </button>
      </div>
      <div class ='modal-book'>
      <div class='modal-book__img-container'>
        <img class='modal-book__img' src='${checkValue(data.book_image)}'
        alt='${checkValue(data.title)}'/>
        </div>
        <div class='modal-book__description'>
        <h2 class="modal-book__title">${checkValue(data.title)}</h2>
        <p class ="modal-book__author">${checkValue(data.author)}</p>
        <p class ="modal-book__about">

        "${checkValue(data.description)}"</p>

       <div class = 'modal-book__stores'>

      <div class="modal-book__amazon">
       <a class="amazon__link link"
       href="${links('Amazon')}"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="amazon icon"
   >

   <svg class="book" fill="none" width="60" height="60">
          <use href="${logoPath}#icon-amazon-ar21"></use>
</svg>

   </a>
       </div>
       <div class ="modal-book__applebook">
       <a class="applebook__link link"
       href="${links('Apple Books')}"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Apple Book icon"
   >
       <svg class="book"  width="30" height="30" fill="none">
       <use href="${logoPath}#icon-apple-ibooks"></use>
       </svg>
   </div>

       <div class ="modal-book__bookshop">
       <a class="bookshop__link link"
       href="${links('Bookshop')}"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Bookshop icon"
   >
       <svg class="book"  width="40" height="40">
              <use href="${logoPath}#icon-14008711"></use>
       </svg>
       </div>
       </div>
       </div>
       </div>
       <div  class="modal-book__add__wrapper">
       <button type="button" class="modal-book__button" id="${
         data.id
       }">Add to shopping list</button>
   </div>
        `;

      modalContainer.innerHTML = categoryArray;
      // modalContainer.classList.remove('is-hidden');
      // modalContainer.classList.add('modal-open');

      const closeButton = document.querySelector('.modal-close-btn');
      closeButton.addEventListener('click', closeBtn);
      function closeBtn() {
        modalContainer.classList.add('is-hidden');
        modalContainer.classList.remove('modal-open');
      }

      const addButton = document.querySelector('.modal-book__button');
      addButton.addEventListener('click', () => {
        if (booksArray.includes(id)) {
          let bookIndex = booksArray.indexOf('${data.id}');
          booksArray.splice(bookIndex, 1);
          stringKey = JSON.stringify(booksArray);

          addButton.textContent = 'Add to shopping list';
          addedToShoppingBag = false;

          addButton.classList.remove('btn__add');
          console.log(booksArray);
          localStorage.setItem('id', stringKey);
          return;
        } else {
          booksArray.push(id);
          addButton.textContent = 'Remove from the shopping list';
          stringKey = JSON.stringify(booksArray);
          localStorage.setItem('id', stringKey);
          addedToShoppingBag = true;

          console.log(booksArray);
          addButton.classList.add('btn__add');
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
}
renderBookInformation();

// const ourGallary = document.querySelector('.header-button');
// ourGallary.addEventListener('click', () => {
//   modalContainer.classList.remove('is-hidden');
//   renderBookInformation();
// });
