import './style.css'
import { openPopup, closePopup,} from './components/modal.js';

const accordionItems = document.querySelectorAll('.accordion__item');
const buttonOpenPopup = document.querySelector('.header__button')

const buttonClosePopup = document.querySelector('.popup__close')

accordionItems.forEach(item => {
    const handleOpenAccordion = item.querySelector('.accordion__wrapper');
    const accordionContent = item.querySelector('.accordion__content');
    const dropDownIcon = item.querySelector('.accordion__dropdown-icon'); // Получаем svg только для текущего аккордеона

    handleOpenAccordion.addEventListener('click', (event) => {
        // Открываем или закрываем аккордеон
        if (accordionContent.classList.contains('accordion__content_active')) {
            accordionContent.style.maxHeight = null;
            accordionContent.classList.remove('accordion__content_active');
            dropDownIcon.classList.remove('accordion__dropdown-icon_rotated');
        } else {
            // Закрываем все открытые аккордеоны
            document.querySelectorAll('.accordion__content.accordion__content_active').forEach(content => {
                content.style.maxHeight = null;
                content.classList.remove('accordion__content_active');
                content.parentNode.querySelector('.accordion__dropdown-icon').classList.remove('accordion__dropdown-icon_rotated');
            });
            // Открываем текущий аккордеон
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            dropDownIcon.classList.add('accordion__dropdown-icon_rotated');
            accordionContent.classList.add('accordion__content_active');
        }
    });
});



buttonOpenPopup.addEventListener('click', openPopup)
buttonClosePopup.addEventListener('click', closePopup)





  
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';



const swiper = new Swiper('.sample-slider', {
  loop: false,
  grabCursor:true,
  speed: 250, 
  slideShadows:true,
  slidesPerView: 1,
  centeredSlides : true,    
  parallax: true,
  effect: "cube",
  creativeEffect: {
      limitProgress: 4,
      prev: {
          translate: [-65, 0, -200],
          rotate: [0, 0, 0],
      },
      next: {
          translate: ['110%', 0, 0],
          rotate: [0, 0, 0],
      },
  },
  mousewheel: {
    forceNiceScroll: true,
    invert: false,
  },

})
