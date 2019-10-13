var confirmationLinks = document.querySelectorAll('.output-item-buy');
var confirmationPopup = document.querySelector('.popup-confirmation');
var confirmationClose = confirmationPopup.querySelector('.button-close');

confirmationLinks.forEach(function (link) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    confirmationPopup.classList.add('modal-show');
  });
});

confirmationClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  confirmationPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (confirmationPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      confirmationPopup.classList.remove('modal-show');
    }
  }
});
