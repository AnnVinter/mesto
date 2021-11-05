const configuration = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error'
}; 

function enableValidation(validConfig) {
    const forms = [...document.querySelectorAll(validConfig.formSelector)];
    forms.forEach((form) => {
        setFormListeners(form, validConfig);
    });
}
enableValidation(configuration);

function handleSubmit(evt) {
    evt.preventDefault();
}

function checkSubmitButton(form, formConfig) {
    const button = form.querySelector(formConfig.submitButtonSelector);
    button.disabled = !form.checkValidity();
    button.classList.toggle(formConfig.inactiveButtonClass, !form.checkValidity());
}

function setFormListeners(form, formConfig) {
    checkSubmitButton(form, formConfig);
    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', () => checkSubmitButton(form, formConfig));
    const inputs = [...form.querySelectorAll(formConfig.inputSelector)];
    inputs.forEach((input) => {
        input.addEventListener('input', () => handleFieldValidation(input, form, formConfig))
    });
}

function handleFieldValidation(input, form, formConfig) {
    if (!input.validity.valid) {
        showError(input, form, formConfig);
    } else {
        hideError(input, form, formConfig);
    }
}

const showError = (input, form, formConfig) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add(formConfig.inputErrorClass);
    error.textContent = input.validationMessage;
}

const hideError = (input, form, formConfig) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.remove(formConfig.inputErrorClass);
    error.textContent = '';
}


