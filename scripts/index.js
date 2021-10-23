const popups = document.querySelectorAll('.popup');
const popupInfo = document.querySelector('.popup_type_info');
const popupPost = document.querySelector('.popup_type_post');
const popupPhoto = document.querySelector('.popup_type_photo');
const openEditButton = document.querySelector('.profile__edit-button');
const openAddButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const namePage = document.querySelector('.profile__name');
const descriptionPage = document.querySelector('.profile__description');
const nameForm = document.querySelector('.popup__input_type_name');
const descriptionForm = document.querySelector('.popup__input_type_description');
const titleForm = document.querySelector('.popup__input_type_title');
const photoForm = document.querySelector('.popup__input_type_photo');
const formInfo = document.querySelector('.popup__form_type_info');
const formPost = document.querySelector('.popup__form_type_post');
const popupImage = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');

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

const elementsList = document.querySelector('.elements__list');
const templateItem = document.querySelector('#template').content;

initialCards.reverse().forEach(prependCard);

function addCard(item) {
    const element = templateItem.querySelector('.article').cloneNode(true);
    element.querySelector('.article__title').innerText = item.name;
    element.querySelector('.article__image').alt = item.name;
    element.querySelector('.article__image').src = item.link;
    element.querySelector('.article__delete').addEventListener('click',(event) => {
        event.target.closest('.article').remove();
    });
    const likeButton = element.querySelector('.article__like');
    likeButton.addEventListener('click', function(event) {
        event.target.classList.toggle('article__like_liked');
    });
    const articlePhoto = element.querySelector('.article__image');
    articlePhoto.addEventListener('click', function(event) {
        event.preventDefault();
        const image = item.link;
        const title = item.name;
        openImage(image, title);
    });
    return element;
};

function openImage(image, title) {
    openPopup(popupPhoto);
    //popupPhoto.classList.add('popup_opened');
    popupImage.src = image;
    popupImage.alt = title;
    popupFigcaption.textContent = title;
}
function prependCard(item) {
    const element = addCard(item);
    elementsList.prepend(element);
};

function addPhoto(event) {
    event.preventDefault();
    const name = titleForm.value;
    const link = photoForm.value;
    const newCard = {
        name: name,
        link: link
    }
    prependCard(newCard);
    event.target.reset();
    closePopup();
};

function setInfo() {
    nameForm.value = namePage.textContent;
    descriptionForm.value = descriptionPage.textContent;
    //popupInfo.classList.add('popup_opened');
    openPopup(popupInfo);
};

function openPopup(elem) {
    elem.classList.add('popup_opened')
};

function openPopupPost() {
    openPopup(popupPost);
};

function closePopup() {
    popups.forEach((elem) => elem.classList.remove('popup_opened'))
};

function submitForm(event) {
    event.preventDefault();
    namePage.textContent = nameForm.value;
    descriptionPage.textContent = descriptionForm.value;
    closePopup();
};

openEditButton.addEventListener('click', setInfo);
openAddButton.addEventListener('click', openPopupPost);
closeButtons.forEach((elem) => elem.addEventListener('click', closePopup));
formInfo.addEventListener('submit', submitForm);
formPost.addEventListener('submit', addPhoto);


