const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const submitButton = document.querySelector('.popup__submit-button');
const namePage = document.querySelector('.profile__name');
const descriptionPage = document.querySelector('.profile__description');
const nameForm = document.querySelector('.popup__name-form');
const descriptionForm = document.querySelector('.popup__description-form');

function openPopup() {
    popup.classList.add('popup_position_isOpened')
};
function closePopup() {
    popup.classList.remove('popup_position_isOpened')
};
function form(event) {
    event.preventDefault();
    namePage.textContent = nameForm.value;
    descriptionPage.textContent = descriptionForm.value;
    closePopup();
    nameForm.textContent = namePage.value;
    descriptionForm.textContent = descriptionPage.value;
}
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
submitButton.addEventListener('click', form);

