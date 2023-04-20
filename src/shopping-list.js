import './js/support.js';
import './js/header-theme.js';
import './js/toggle-theme.js';
// import './js/mobile-menu.js';
import './js/spinner.js';
import './js/header-mobile.js';
import './js/toggle-theme.js';
import { getBookData } from '../src/js/getBooksData.js';
import { spinnerPlay, spinnerStop } from './js/spinner.js';
import { getObjectShop } from './js/toggle-theme.js';

spinnerPlay();
window.addEventListener('load', () => {
  spinnerStop();
});

const header = document.querySelector('.header_btn__shopping');
console.log(header);
console.log(document);

const logoPath = new URL('./images/icons.svg', import.meta.url);
const emptyBook = new URL('./images/img_emp@1x.png', import.meta.url);
const emptyBookRetina = new URL('./images/img_emp@2x.png', import.meta.url);
const shopingListEl = document.querySelector('.shopingList');

const getLocal = localStorage.getItem('id');
let parseLokalstorageQ = JSON.parse(getLocal);

shopingListEl.addEventListener('click', deleteBook);

const getLocalstorages = localStorage.getItem('id');

let arrey = localStorage.getItem('id');
let parceArrey = JSON.parse(arrey);

function renderBook(localstorArr) {
  localstorArr.map(id => {
    const getBook = new getBookData((id = `${id}`));

    const renderCard = getBook
      .getPromId()
      .then(
        ({
          list_name,
          author,
          title,
          book_image,
          description,
          buy_links,
          _id,
        }) => {
          function links(sms) {
            const link = buy_links;
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
              let message = 'No more information about this book';
              return message;
            }
          }

          return `
<li class="shoppinglist_item data-id="${_id}">
    <div class="shoppinglist_img-container">
        <img class="shoppinglist_img" src="${book_image}" alt="" />
        <p class="shoppinglist_authorM">${author}</p>
    </div>
    <div class="shoppinglist_info">
        <h2 class="shoppinglist_title">${title}</h2>
        <p class="shoppinglist_category">
            ${list_name}
        </p>
    </div>
    <ul class="shoppinglistlink_list">
        <li>
            <a href="${links(
              'Amazon'
            )}" target="_blank" rel="noopener noreferrer">
                <svg fill="none" width="55" height="60">
                        <use href="${logoPath}#icon-amazon-ar21"></use>
                    </svg>
            </a>
        </li>
        <li>
            <a href="${links(
              'Apple Books'
            )}" target="_blank" rel="noopener noreferrer">
                <svg width="28" height="27" fill="none">
                        <use href="${logoPath}#icon-apple-ibooks"></use>
                    </svg>
            </a>
        </li>
        <li>
            <a href="${links(
              'Bookshop'
            )}" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32">
                        <use href="${logoPath}#icon-14008711"></use>
                    </svg>
            </a>
        </li>
    </ul>
    <p class="shoppinglist_desc">
    ${checkValue(description)}
    </p>
    <p class="shoppinglist_author">${author}</p>
    <button class="shoppinglist_btn type="button">
        <svg class="shoppinglist_btn-icon">
            <use href="${logoPath}#icon-dump-1" class="removecard" data-id="${_id}"></use>
        </svg>
    </button>
</li>
   `;
        }
      );

    const card = renderCard.then(data => {
      shopingListEl.insertAdjacentHTML('beforeend', data);
    });
  });
}

renderBook(parseLokalstorageQ);

function deleteBook(event) {
  let id = event.target.dataset.id;

  if (event.target.parentElement.classList.value === 'shoppinglist_btn-icon') {
    // console.log(localStorage.getItem('arrey'))

    if (parceArrey.includes(id)) {
      // console.log(parceArrey)
      let bookIndex = parceArrey.indexOf(id);
      parceArrey.splice(bookIndex, 1);

      // console.log(parceArrey)

      const newArr = JSON.stringify(parceArrey);

      // console.log(newArr)
      localStorage.setItem('id', newArr);
      shopingListEl.innerHTML = '';

      let newRender = JSON.parse(newArr);
      renderBook(newRender);
      if (parceArrey.length < 1) {
        shopingListEl.innerHTML = '';
        shopingListEl.innerHTML = `<p class="empty-book-text"> 
    This page is empty, add some books and proceed to order. 
  </p> 
  <img 
    class="empty-book-page" 
    src="${emptyBook}" 
    srcset="${emptyBook} 1x, ${emptyBookRetina} 2x"
    alt="The page is emrty" 
  />`;
      }
    }
  }
}

getObjectShop();
