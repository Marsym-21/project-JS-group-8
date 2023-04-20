import { supportData } from './supportData';
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';
import '../../node_modules/tiny-slider/src/tiny-slider.scss';
// import Swiper from 'swiper';
// import '../../node_modules/swiper/swiper.scss';

function addSupportItemsToList(arr) {
  return arr.map(
    item =>
      `<li class="support_item swiper-slide"><a class="support-link" target="_blank" href="${
        item.url
      }"><span class="support-number">0${arr.indexOf(item) + 1}</span>
    <img class="support-logo" alt="${item.title}" src="${item.img}"></a></li>`
  );
}

// console.log(addSupportItemsToList(supportItemsArr));

function renderSupportList() {
  const elSupportList = document.querySelector('.support-list');
  elSupportList.insertAdjacentHTML(
    'beforeend',
    addSupportItemsToList(supportData).join(' ')
  );
}
renderSupportList();

const supportButtonNext = document.querySelector('.support-button-next');

const slider = tns({
  container: '.my-slider',
  axis: 'vertical',
  controls: false,
  nav: false,
  touch: false,
  items: 4,
  slideBy: 2,
  rewind: true,
  gutter: 20,
  edgePadding: 5,
  speed: 500,
  responsive: {
    768: {
      items: 6,
      slideBy: 1,
      speed: 300,
    },
  },
  // autoHeight: true,

  // prevButton: false,
  // nextButton: '.support-button-next',
  // controlsContainer: '.controls-container',
});

supportButtonNext.addEventListener('click', () => {
  slider.goTo('next');
  const getInfo = slider.getInfo();
  if (getInfo.slideBy === 2) {
    if (getInfo.displayIndex === 6) {
      supportButtonNext.style.transform = 'rotate(180deg)';
    }
    if (getInfo.displayIndex !== 6) {
      supportButtonNext.style.transform = 'none';
    }
  }
  if (getInfo.slideBy === 1) {
    if (getInfo.displayIndex === 4) {
      supportButtonNext.style.transform = 'rotate(180deg)';
    }
    if (getInfo.displayIndex !== 4) {
      supportButtonNext.style.transform = 'none';
    }
  }
});
