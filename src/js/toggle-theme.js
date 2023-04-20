const checkbox = document.getElementById('theme-checkbox');

if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
} else {
  checkbox.checked = false;
  localStorage.setItem('theme', 'light');
}

export function getObject() {
  const ref = {
    body: document.querySelector('body'),
    header: document.querySelector('.header_btn__shopping'),
    headerBody: document.querySelector('.header'),
    headerBtnActive: document.querySelector('.current_btn'),
    spanTitle: document.querySelector('.main-title__first-part'),
    // headerShopActive: document.querySelector('.current_btn_shopping'),
    headerBtnToogle: document.querySelector('.menu-togle-svg'),
    headerMenuContainer: document.querySelector('.menu-container'),
    headerUser: document.querySelector('.header_user_name'),
    headerLogoBook: document.querySelector('.header_logo_book'),
    headerBtnMobile: document.querySelector('.header_mobile_shopping'),
    // headerMobileHome: document.querySelector('.header_mobile_home'),
    // headerMobileCurrent: document.querySelector('.current_btn_mobile'),
    headerCloseSvg: document.querySelector('.menu-togle-close'),

    bookBlockContainer: document.querySelector('.book-block'),
    modaWindow: document.querySelector('.modal-container'),
    // modalWindowCloseBtn: document.querySelector('.modal-close-btn'),
    // addButton: document.querySelector('.modal-book__button'),
    // modalWindowAbout: document.querySelector('.modal-book__about'),
    // bookSvg: document.querySelector('.book-svg'),
    // blackBook: document.querySelector('.black-book'),
  };
  const seeMoreBtn = document.querySelectorAll('.btn-see-more');
  console.log(seeMoreBtn);
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
      seeMoreBtn.forEach(element => element.classList.add('dark'));
      getArrayAddList(object);
      localStorage.setItem('theme', 'dark');
    } else {
      seeMoreBtn.forEach(element => element.classList.remove('dark'));
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

export function getObjectModal() {
  const ref = {
    body: document.querySelector('body'),
    modalWindowCloseBtn: document.querySelector('.modal-close-btn'),
    addButton: document.querySelector('.modal-book__button'),
    modalWindowAbout: document.querySelector('.modal-book__about'),
    bookSvg: document.querySelector('.book-svg'),
    blackBook: document.querySelector('.black-book'),
  };
  console.log(ref);
  console.log(ref.addButton);

  const object = Object.keys(ref);
  console.log(object);

  const checkbox = document.getElementById('theme-checkbox');
  if (localStorage.getItem('theme') === 'dark') {
    checkbox.checked = true;
    ref.body.classList.add('dark');
    getArrayAddList(object);
  }

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
