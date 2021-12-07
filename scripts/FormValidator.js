class FormValidator {
    constructor(config, formName) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._formName = formName;
        this._button = this._formName.querySelector(this._submitButtonSelector);
        this._inputs = Array.from(this._formName.querySelectorAll(this._inputSelector));
    }

    enableValidation = () => {
        this._setFormListeners();
    }
    
    _handleSubmit(evt) {
        evt.preventDefault();
    }

    _setFormListeners = () => {
        this._checkSubmitButton();
        this._formName.addEventListener('submit', this._handleSubmit);
        this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._handleFieldValidation(input);
                this._checkSubmitButton();
            });
        });
    }
 
    _checkSubmitButton() {
        this._button.disabled = !this._formName.checkValidity();
        this._button.classList.toggle(this._inactiveButtonClass, !this._formName.checkValidity());
    }
    
    _handleFieldValidation(input) {
        if (!input.validity.valid) {
            this._showError(input, input.validationMessage);
        } else {
            this._hideError(input);
        }
    }
    
    _showError(input, errorMessage) {
        const error = this._formName.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        error.textContent = errorMessage;
    }
    
    _hideError(input) {
        const error = this._formName.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        error.textContent = '';
    }
    resetValidation() {
        this._checkSubmitButton();
        this._inputs.forEach((input) => {
            this._hideError(input);
        })
    }
}
export default FormValidator;


