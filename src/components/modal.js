const popup = document.querySelector('.popup')

function openPopup() {
    popup.classList.add('popup_is_active');
    popup.addEventListener('click', handleOverlayClosePopup);
    document.addEventListener('keydown', handleEscClosePopup);
}
function closePopup() {
    popup.classList.remove('popup_is_active');
    popup.removeEventListener('click', handleOverlayClosePopup);
    document.removeEventListener('keydown', handleEscClosePopup);
}

function handleOverlayClosePopup(evt){
    if(evt.target === evt.currentTarget){
        closePopup(evt.target)
    }
  }
  function handleEscClosePopup(evt){
    if(evt.key === 'Escape'){
        closePopup(document.querySelector('.popup_is-opened'));
    }
  }

  export {openPopup, closePopup} ;