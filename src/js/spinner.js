const spinnerEl = document.querySelector('.js-spinner');
const bodyEl = document.querySelector('body');
export function spinnerPlay() {
  document.querySelector('body').classList.add('loading');
}

export function spinnerStop() {
  window.setTimeout(function () {
    bodyEl.classList.remove('loading');
    bodyEl.classList.add('loaded');
  }, 1500);
}
