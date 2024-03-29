var buyLinks = document.querySelectorAll('.output-item-buy');
var confirmationPopup = document.querySelector('.popup-confirmation');
var confirmationClose = confirmationPopup.querySelector('.button-close');
var amount = document.querySelector('.user-cart span')

for (var i = 0; i < buyLinks.length; i++) {
  buyLinks[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    confirmationPopup.classList.add('modal-show');
    amount.innerText++;
  });
}

confirmationClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  confirmationPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && confirmationPopup.classList.contains('modal-show')) {
    evt.preventDefault();
    confirmationPopup.classList.remove('modal-show');
  }
});
