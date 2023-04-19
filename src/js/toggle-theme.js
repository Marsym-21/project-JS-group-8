const checkbox = document.getElementById('theme-checkbox');

if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
}
const body_list = document.querySelector('body_shoping_list');
console.log(body_list);

export function getObject() {
  const ref = {
    body: document.querySelector('body'),
    header: document.querySelector('.header_btn__shopping'),
    newElem: document.querySelector('.btn-see-more'),
    headerBody: document.querySelector('.header'),
    headerBtnActive: document.querySelector('.current_btn'),
    // headerShopActive: document.querySelector('.current_btn_shopping'),
    headerBtnToogle: document.querySelector('.menu-togle-svg'),
    headerMenuContainer: document.querySelector('.menu-container'),
    headerUser: document.querySelector('.header_user_name'),
    headerLogoBook: document.querySelector('.header_logo_book'),
    headerBtnMobile: document.querySelector('.header_mobile_shopping'),
    // headerMobileHome: document.querySelector('.header_mobile_home'),
    // headerMobileCurrent: document.querySelector('.current_btn_mobile'),
    headerCloseSvg: document.querySelector('.menu-togle-close'),
    seeMoreBtn: document.querySelector('.btn-see-more'),
    bookBlockContainer: document.querySelector('.book-block'),
    modaWindow: document.querySelector('.modal-container'),
    modalWindowCloseBtn: document.querySelector('.modal-close-btn'),
    addButton: document.querySelector('.modal-book__button'),
    modalWindowAbout: document.querySelector('.modal-book__about'),
    bookSvg: document.querySelector('.book-svg'),
    blackBook: document.querySelector('.black-book'),
  };

  const object = Object.keys(ref);
  console.log(object);

  const checkbox = document.getElementById('theme-checkbox');
  if (localStorage.getItem('theme') === 'dark') {
    checkbox.checked = true;
    ref.body.classList.add('dark');
    getArrayAddList(object);
  }
  console.log(ref);

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      getArrayAddList(object);
      localStorage.setItem('theme', 'dark');
    } else {
      getArrayRemoveList(object);
      localStorage.setItem('theme', 'light');
    }
  });

  function getArrayAddList(array) {
    array.forEach(data => ref[data].classList.add('dark'));
    return array;
  }

  function getArrayRemoveList(array) {
    array.forEach(data => ref[data].classList.remove('dark'));
    return array;
  }
}

export function getObjectShop() {
  const ref = {
    body: document.querySelector('body'),
    header: document.querySelector('.header_btn__shopping'),
    headerBody: document.querySelector('.header'),
    headerBtnActive: document.querySelector('.current_btn'),
    headerBtnToogle: document.querySelector('.menu-togle-svg'),
    headerMenuContainer: document.querySelector('.menu-container'),
    headerUser: document.querySelector('.header_user_name'),
    headerLogoBook: document.querySelector('.header_logo_book'),
    headerBtnMobile: document.querySelector('.header_mobile_shopping'),
    headerMobileCurrent: document.querySelector('.current_btn_mobile'),
    headerCloseSvg: document.querySelector('.menu-togle-close'),
  };
  const object = Object.keys(ref);
  console.log(object);

  const checkbox = document.getElementById('theme-checkbox');
  if (localStorage.getItem('theme') === 'dark') {
    checkbox.checked = true;
    ref.body.classList.add('dark');
    getArrayAddList(object);
  }
  console.log(ref);

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      getArrayAddList(object);
      localStorage.setItem('theme', 'dark');
    } else {
      getArrayRemoveList(object);
      localStorage.setItem('theme', 'light');
    }
  });

  function getArrayAddList(array) {
    array.forEach(data => ref[data].classList.add('dark'));
    return array;
  }

  function getArrayRemoveList(array) {
    array.forEach(data => ref[data].classList.remove('dark'));
    return array;
  }
}
