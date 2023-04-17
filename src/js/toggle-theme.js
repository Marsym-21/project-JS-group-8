const checkbox = document.getElementById('theme-checkbox');
if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
}

ref = {
  body: document.querySelector('body'),
  header: document.querySelector('.header_btn__shopping'),
  // newElem: document.querySelector('#seemore__btn'),
};
console.log(ref);

export function getObject() {
  ref = {
    body: document.querySelector('body'),
    header: document.querySelector('.header_btn__shopping'),
    // newElem: document.querySelector('#seemore__btn'),
  };
  console.log(ref);

  // const object = Object.keys(ref);
  // console.log(object);

  // checkbox.addEventListener('change', () => {
  //   if (checkbox.checked) {
  //     getArrayAddList(object);
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     getArrayRemoveList(object);
  //     localStorage.setItem('theme', 'light');
  //   }
  // });

  // function getArrayAddList(array) {
  //   array.forEach(data => ref[data].classList.add('dark'));
  //   return array;
  // }

  // function getArrayRemoveList(array) {
  //   array.forEach(data => ref[data].classList.remove('dark'));
  //   return array;
  // }
}
