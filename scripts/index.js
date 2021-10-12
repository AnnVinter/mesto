const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const namePage = document.querySelector('.profile__name');
const descriptionPage = document.querySelector('.profile__description');
const nameForm = document.querySelector('.popup__input_type_name');
const descriptionForm = document.querySelector('.popup__input_type_description');
const form = document.querySelector('.popup__form')

function openPopup() {
    nameForm.value = namePage.textContent;
    descriptionForm.value = descriptionPage.textContent;
    popup.classList.add('popup_opened');
};

function closePopup() {
    popup.classList.remove('popup_opened')
};

function submitForm(event) {
    event.preventDefault();
    namePage.textContent = nameForm.value;
    descriptionPage.textContent = descriptionForm.value;
    closePopup();
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit', submitForm);


