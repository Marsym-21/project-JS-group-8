import { getBookData } from './getBooksData.js';
import { spinnerPlay, spinnerStop } from './spinner.js';
import { getObjectModal } from './toggle-theme.js';

let booksInform = new getBookData();
const logoPath = new URL('../images/icons.svg', import.meta.url);
const modalContainer = document.querySelector('.modal-container');
const modalBackdrop = document.querySelector('.modal-backdrop');
const bodyModalOpen = document.querySelector('body');

const newArray = [];
let booksArray = [];

export function checkLocalStorage() {
  const getLocalstorage = localStorage.getItem('id');

  const parseLokalstorage = JSON.parse(getLocalstorage);

  if (!parseLokalstorage) {
    booksArray = [];
  } else {
    booksArray = newArray.concat(parseLokalstorage);
  }
}

function checkValue(value) {
  if (value !== '') {
    return value;
  } else {
    let message = 'No more information about this book';
    return message;
  }
}

export function renderBookInformation(id) {
  spinnerPlay();
  modalBackdrop.classList.remove('is-hidden');
  bodyModalOpen.classList.add('modal-open')
  booksInform = new getBookData(id);
  modalContainer.innerHTML = '';

  function checkMessage() {
    let message;

    if (booksArray.includes(id)) {
      message = 'Remove from the shopping list';

      return message;
    } else {
      message = 'Add to shopping list';

      return message;
    }
  }

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

      modalContainer.innerHTML = `
      
      <button type='button' class='modal-close-btn close'>
     <svg class="close-svg" fill="none" width="30" height="30">
          <use href="${logoPath}#icon-close-black"></use>
</svg>
      </button>
         <div class ='modal-book'>
      <div class='modal-book__img-container'>
        <img class='modal-book__img' src=${checkValue(data.book_image)} 
        alt=${checkValue(data.title)}/>
        </div>
        <div class='modal-book__description'>
        <h2 class="modal-book__title">${checkValue(data.title)}</h2>
        <p class ="modal-book__author">${checkValue(data.author)}</p>
        <p class ="modal-book__about">
      
        ${checkValue(data.description)}</p>
        
       <div class = 'modal-book__stores'>

      <div class="modal-book__amazon">
       <a class="amazon__link link"
       href="${links('Amazon')}"  
   target="_blank"
   rel="noopener noreferrer"
   aria-label="amazon icon"
   >
  
   <svg class="book-svg" fill="none" width="60" height="60">
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
       <svg class="book-svg yellow-book"  width="30" height="30" fill="none">
       <use href="${logoPath}#icon-apple-ibooks"></use> 
       </svg>
       </a>
   </div>

       <div class ="modal-book__bookshop">
       <a class="bookshop__link link"
       href="${links('Bookshop')}"  
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Bookshop icon"
   >
       <svg class="book-svg black-book"  width="30" height="30">
              <use href="${logoPath}#icon-14008711"></use>
       </svg>
       </a>
       </div>
       </div>
       </div>
       </div>
       <div  class="modal-book__add__wrapper">  
       <button type="button" class="modal-book__button">${checkMessage()}</button>  
   </div>  
        `;

      const closeButton = document.querySelector('.modal-close-btn');
     
      closeButton.addEventListener('click', closeBtn);

      const addButton = document.querySelector('.modal-book__button');

      addButton.addEventListener('click', () => {
        if (booksArray.includes(id)) {
          let bookIndex = booksArray.indexOf(id);

          booksArray.splice(bookIndex, 1);
          const stringKey = JSON.stringify(booksArray);
          addButton.textContent = `${checkMessage()}`;
          localStorage.setItem('id', stringKey);
          return;
        } else {
          booksArray.push(id);
          addButton.textContent = `${checkMessage()}`;
          const stringKey = JSON.stringify(booksArray);
          localStorage.setItem('id', stringKey);
        }
      });
      getObjectModal();
    })
    .catch(error => {
      console.log(error.message);
    });
  spinnerStop();
}

function closeBtn() {
  modalBackdrop.classList.add('is-hidden');
  bodyModalOpen.classList.remove('modal-open');
}

export function renderModalWindow(e) {
  const data = e.currentTarget.id;

  checkLocalStorage();
  renderBookInformation(data);
}

modalBackdrop.addEventListener('click', e => {
  if (!e.target.classList.contains('modal-backdrop')) {
    return;
  }
  closeBtn();
});

window.addEventListener('keydown', e => {
  if (e.code != 'Escape') {
    return;
  } else {
    closeBtn();
  }
});
