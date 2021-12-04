class Card {
    constructor(card, templateSelector, openPopup) {
        this._title = card.title;
        this._link = card.link;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
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
        cardTitle.textContent = this._title;
        cardImage.alt = this._title;
        cardImage.src = this._link;
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.article__like').addEventListener('click', (evt) => this._likePhoto(evt));
        this._element.querySelector('.article__delete').addEventListener('click', (evt) => this._deletePhoto(evt));
        this._element.querySelector('.article__image').addEventListener('click', () => this._openImage(this._link, this._title));
    }

    _likePhoto(evt) {
        evt.target.classList.toggle('article__like_liked');
    }

    _deletePhoto(evt) {
        evt.target.closest('.article').remove();
    }

    _openImage(link, title) {
        document.querySelector('.popup__image').src = link;
        document.querySelector('.popup__image').alt = title;
        document.querySelector('.popup__figcaption').textContent = title;
        this._openPopup(document.querySelector('.popup_type_photo'));
    }
}
export default Card;


