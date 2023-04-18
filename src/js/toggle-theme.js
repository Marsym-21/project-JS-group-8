const checkbox = document.getElementById('theme-checkbox');

if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
}

let ref = {
  body: document.querySelector('body'),
  header: document.querySelector('.header_btn__shopping'),
  newElem: document.querySelectorAll('.btn-see-more'),
};
console.log(ref);

export function getObject() {
  ref = {
    body: document.querySelector('body'),
    header: document.querySelector('.header_btn__shopping'),
    newElem: document.querySelectorAll('.btn-see-more'), 
  };
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

  // Функция для отслеживания изменений в ref.newElem
  const observer = new MutationObserver(() => {
    if (ref.newElem !== null) {
      observer.disconnect();
      // Вместо обработчика события использовать MutationObserver для ожидания появления ref.newElem
      if (checkbox.checked) {
        getArrayAddList(object);
        localStorage.setItem('theme', 'dark');
      } else {
        getArrayRemoveList(object);
        localStorage.setItem('theme', 'light');
      }

      // Дополнительная логика для работы с ref.newElem
      console.log(ref.buttonseemore); // ref.newElem теперь доступен и может быть использован
    }
  });

  // Наблюдаем за изменениями в ref.buttonseemore
  observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: true,
  });
}

function getArrayAddList(array) {
  array.forEach(data => {
    if (ref[data] instanceof NodeList) { // Проверяем, является ли элемент NodeList (т.е. выборка нескольких элементов)
      ref[data].forEach(item => item.classList.add('dark')); // Применяем класс ко всем элементам выборки
    } else {
      ref[data].classList.add('dark'); // Применяем класс, если элемент не является NodeList
    }
  });
  return array;
}

function getArrayRemoveList(array) {
  array.forEach(data => {
    if (ref[data] instanceof NodeList) {
      ref[data].forEach(item => item.classList.remove('dark'));
    } else {
      ref[data].classList.remove('dark');
    }
  });
  return array;
}
