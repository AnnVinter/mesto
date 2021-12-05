const popupPhoto = document.querySelector('.popup_type_photo');
class Card {
    constructor(card, templateSelector, openPopup) {
        this._name = card.name;
        this._link = card.link;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
        //const popupPhoto = document.querySelector('.popup_type_photo');
    }

    _getTemplate() {
        const element = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.article')
        .cloneNode(true);
        return element;
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        const cardTitle = this._element.querySelector('.article__title');
        const cardImage = this._element.querySelector('.article__image');
        cardTitle.textContent = this._name;
        cardImage.alt = this._name;
        cardImage.src = this._link;
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.article__like').addEventListener('click', (evt) => this._likePhoto(evt));
        this._element.querySelector('.article__delete').addEventListener('click', (evt) => this._deletePhoto(evt));
        this._element.querySelector('.article__image').addEventListener('click', () => this._openImage(this._link, this._name));
    }

    _likePhoto(evt) {
        evt.target.classList.toggle('article__like_liked');
    }

    _deletePhoto(evt) {
        evt.target.closest('.article').remove();
    }

    _openImage(link, name) {
        document.querySelector('.popup__image').src = link;
        document.querySelector('.popup__image').alt = name;
        document.querySelector('.popup__figcaption').textContent = name;
        this._openPopup(popupPhoto);
    }
}
export default Card;


