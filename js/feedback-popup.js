var link = document.querySelector('.contacts .red-button');
var popup = document.querySelector('.popup-feedback');
var close = popup.querySelector('.button-close');
var form = popup.querySelector('form');
var userName = popup.querySelector('#write-name');
var userEmail = popup.querySelector('#write-email');
var userMessage = popup.querySelector('#write-message');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('userName');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  userName.focus();
  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    popup.classList.add('modal-error');
  } else if (isStorageSupport) {
    localStorage.setItem('userName', userName.value);
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
    }
  }
});
