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





// window.onload = function() {
//     var textElements = document.querySelectorAll('.typewriter');

//     textElements.forEach(function(element) {
//       var text = element.dataset.text;
//       var typedText = '';
//       var index = 0;

//       var typewriter = setInterval(function() {
//         typedText += text.charAt(index);
//         element.innerHTML = typedText;
//         index++;

//         if (index >= text.length) {
//           clearInterval(typewriter);
//         }
//       }, 50);
//     });
//   };


  


  
