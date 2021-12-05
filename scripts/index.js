import Card from './Card.js';
import FormValidator from './FormValidator.js';
const popups = document.querySelectorAll('.popup');
const popupInfo = document.querySelector('.popup_type_info');
const popupPost = document.querySelector('.popup_type_post');
const openEditButton = document.querySelector('.profile__edit-button');
const openAddButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const namePage = document.querySelector('.profile__name');
const descriptionPage = document.querySelector('.profile__description');
const titleForm = document.querySelector('.popup__input_type_title');
const photoForm = document.querySelector('.popup__input_type_photo');
const nameForm = document.querySelector('.popup__input_type_name');
const descriptionForm = document.querySelector('.popup__input_type_description');
const formInfo = document.querySelector('.popup__form_type_info');
const formPost = document.querySelector('.popup__form_type_post');
const popupImage = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');
const elementsList = document.querySelector('.elements__list');

const configuration = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error'
}; 

const editUserValid = new FormValidator(configuration, formInfo);
editUserValid.enableValidation();

const addPhotoValid = new FormValidator(configuration, formPost);
addPhotoValid.enableValidation();

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function createCard(elem) {
    const card = new Card(elem, '.template', openPopup);
    const cardElement = card.createCard();
    return cardElement;
}

initialCards.forEach((elem) => {
    prependCard(elem);
});

function prependCard(elem) {
    const card = createCard(elem);
    elementsList.prepend(card);
}

function addPhoto(evt) {
    const name = titleForm.value;
    const link = photoForm.value;
    const newCard = {
        name: name,
        link: link
    }
    prependCard(newCard);
    evt.target.reset();
    closePopup();
}

function openPopupPost() {
    titleForm.value = '';
    photoForm.value = '';
    addPhotoValid.resetValidation();
    openPopup(popupPost);
}

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup();
    }
}

function closePopupByClick(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup();
    }
}

function openPopup(elem) {
    elem.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
    document.addEventListener('click', closePopupByClick);
}

function closePopup() {
    popups.forEach((elem) => elem.classList.remove('popup_opened'));
    document.removeEventListener('keydown', closePopupByEsc);
    document.removeEventListener('click', closePopupByClick);
}

function setInfo() {
    nameForm.value = namePage.textContent;
    descriptionForm.value = descriptionPage.textContent;
    editUserValid.resetValidation();
    openPopup(popupInfo);
}

function submitForm(evt) {
    evt.preventDefault();
    namePage.textContent = nameForm.value;
    descriptionPage.textContent = descriptionForm.value;
    closePopup();
}

openEditButton.addEventListener('click', setInfo);
openAddButton.addEventListener('click', openPopupPost);
closeButtons.forEach((elem) => elem.addEventListener('click', closePopup));
formInfo.addEventListener('submit', submitForm);
formPost.addEventListener('submit', addPhoto);
