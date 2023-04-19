// const checkbox = document.getElementById('theme-checkbox');

// if (localStorage.getItem('theme') === 'dark') {
//   checkbox.checked = true;
// }

export function getObject() {
  const ref = {
    body: document.querySelector('body'),
    header: document.querySelector('.header_btn__shopping'),
    newElem: document.querySelector('.btn-see-more'),
    headerHome: document.querySelector('.header_btn__shopping'),
    headerBody: document.querySelector('.header'),
    headerBtnActive: document.querySelector('.current_btn'),
    headerBtnToogle: document.querySelector('.menu-togle-svg'),
    headerMenuContainer: document.querySelector('.menu-container'),
    // headerLock: document.querySelector('.header_link__lock'),
    headerUser: document.querySelector('.header_user_name'),
    headerLogoBook: document.querySelector('.header_logo_book'),
    seeMoreBtn: document.querySelector('.btn-see-more'),
    bookBlockContainer: document.querySelector('.book-block'),
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
