// const checkbox = document.getElementById('theme-checkbox');
// const body = document.querySelector('body');

// const header = document.querySelector('.header_btn__home___light');

// // Check local storage for theme preference
// if (localStorage.getItem('theme') === 'dark') {
//   checkbox.checked = true;
//   body.classList.add('dark');
// }
// checkbox.addEventListener('change', () => {
//   if (checkbox.checked) {
//     localStorage.setItem('theme', 'header_btn__home___dark');
//   } else {
//     body.classList.remove('header_btn__home___dark');
//     localStorage.setItem('theme', 'header_btn__home___light');
//   }
// });
const BtnOpenMenu = document.querySelector('.js-open-menu');
addEventListener('resize', event => {
    if (window.innerWidth < 767){BtnOpenMenu.removeEventListener}
})
