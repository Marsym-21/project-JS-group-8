const checkbox = document.getElementById('theme-checkbox');

if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
} else {
  checkbox.checked = false;
  localStorage.setItem('theme', 'light');
}
/*Best sellers*/
export function getObject() {
  const ref = {
    body: document.querySelector('body'),
    bookBlockContainer: document.querySelector('.book-block'),
    header: document.querySelector('.header_btn__shopping'),
    headerLogo: document.querySelector('.header_logo'),
    headerBody: document.querySelector('.header'),
    headerBtnActive: document.querySelector('.current_btn'),
    spanTitle: document.querySelector('.main-title__first-part'),
    headerBtnToogle: document.querySelector('.menu-togle-svg'),
    headerMenuContainer: document.querySelector('.menu-container'),
    headerMenuMobile: document.querySelector('.mobile-menu'),
    headerUser: document.querySelector('.header_user_name'),
    headerLogoBook: document.querySelector('.header_logo_book'),
    headerBtnMobile: document.querySelector('.header_mobile_shopping'),
    headerMobileCurrent: document.querySelector('.current_btn_mobile'),
    headerMobileCurrent: document.querySelector('.current_btn_mobile'),
    headerCloseSvg: document.querySelector('.menu-togle-close'),
    bookBlockContainer: document.querySelector('.book-block'),
    headerCloseSvg: document.querySelector('.menu-togle-close'),
    bookBlockContainer: document.querySelector('.book-block'),
    modaWindow: document.querySelector('.modal-container'),
  };
  const seeMoreBtn = document.querySelectorAll('.btn-see-more');
  const bookName = document.querySelectorAll('.item__name');
  console.log(bookName);

  const object = Object.keys(ref);

  const checkbox = document.getElementById('theme-checkbox');
  if (localStorage.getItem('theme') === 'dark') {
    checkbox.checked = true;
    ref.body.classList.add('dark');
    getArrayAddList(object);
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      seeMoreBtn.forEach(element => element.classList.add('dark'));
      bookName.forEach(element => element.classList.add('dark'));
      getArrayAddList(object);
      localStorage.setItem('theme', 'dark');
    } else {
      seeMoreBtn.forEach(element => element.classList.remove('dark'));
      bookName.forEach(element => element.classList.remove('dark'));
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
/*Shoping list*/
export function getObjectShop() {
  const ref = {
    body: document.querySelector('body'),
    header: document.querySelector('.header_btn__shopping'),
    headerLogo: document.querySelector('.header_logo'),
    headerBody: document.querySelector('.header'),
    headerBtnHome: document.querySelector('.header_btn__home'),
    headerBtnActive: document.querySelector('.current_btn'),
    headerBtnToogle: document.querySelector('.menu-togle-svg'),
    headerMenuContainer: document.querySelector('.menu-container'),
    headerUser: document.querySelector('.header_user_name'),
    headerLogoBook: document.querySelector('.header_logo_book'),
    headerBtnMobile: document.querySelector('.header_mobile_shopping'),
    headerMobileCurrent: document.querySelector('.current_btn_mobile'),
    headerCloseSvg: document.querySelector('.menu-togle-close'),
    title: document.querySelector('.shopingList_title--first'),
  };

  console.log(ref.title);
  const object = Object.keys(ref);

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
/*Modal Window*/
export function getObjectModal() {
  const ref = {
    body: document.querySelector('body'),
    modalWindowCloseBtn: document.querySelector('.modal-close-btn'),
    addButton: document.querySelector('.modal-book__button'),
    modalWindowAbout: document.querySelector('.modal-book__about'),
    bookSvg: document.querySelector('.book-svg'),
    blackBook: document.querySelector('.black-book'),
    yellowBook: document.querySelector('.yellow-book'),
    closeSvg: document.querySelector('.close-svg'),
  };

  const object = Object.keys(ref);

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
/*Category from category list*/
export function getObjectCategory() {
  const ref = {
    body: document.querySelector('body'),
  };
  const bookName = document.querySelectorAll('.book_name');

  const object = Object.keys(ref);

  const checkbox = document.getElementById('theme-checkbox');
  if (localStorage.getItem('theme') === 'dark') {
    checkbox.checked = true;
    ref.body.classList.add('dark');
    getArrayAddList(object);
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      bookName.forEach(element => element.classList.add('dark'));
      getArrayAddList(object);
      localStorage.setItem('theme', 'dark');
    } else {
      bookName.forEach(element => element.classList.remove('dark'));
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

/*Category from btn seemore*/
export function getObjectSeeMore() {
  const ref = {
    body: document.querySelector('body'),
  };
  const bookName = document.querySelectorAll('.book_name');

  const object = Object.keys(ref);

  const checkbox = document.getElementById('theme-checkbox');
  if (localStorage.getItem('theme') === 'dark') {
    checkbox.checked = true;
    ref.body.classList.add('dark');
    getArrayAddList(object);
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      bookName.forEach(element => element.classList.add('dark'));
      getArrayAddList(object);
      localStorage.setItem('theme', 'dark');
    } else {
      bookName.forEach(element => element.classList.remove('dark'));
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
