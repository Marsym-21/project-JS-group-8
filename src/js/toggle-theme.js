const checkbox = document.getElementById('theme-checkbox');

if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
}

export function getObject() {
  const ref = {
    body: document.querySelector('body'),
    header: document.querySelector('.header_btn__shopping'),
    newElem: document.querySelector('.btn-see-more'),
    headerBody: document.querySelector('.header'),
    headerBtnActive: document.querySelector('.current_btn'),
    headerBtnToogle: document.querySelector('.menu-togle-svg'),
    headerMenuContainer: document.querySelector('.menu-container'),
    headerMenuMobile: document.querySelector('.mobile-menu'),
    headerUser: document.querySelector('.header_user_name'),
    headerLogoBook: document.querySelector('.header_logo_book'),
    headerBtnMobile: document.querySelector('.header_mobile_shopping'),
    headerMobileHome: document.querySelector('.header_mobile_home'),
    headerMobileCurrent: document.querySelector('.current_btn_mobile'),
    headerCloseSvg: document.querySelector('.menu-togle-close'),
    seeMoreBtn: document.querySelector('.btn-see-more'),
  };

  const checkbox = document.getElementById('theme-checkbox');
  if (localStorage.getItem('theme') === 'dark') {
    checkbox.checked = true;
    ref.body.classList.add('dark');
  }
  console.log(ref);

  const object = Object.keys(ref);
  console.log(object);

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
