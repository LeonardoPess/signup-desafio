import { validateEmail } from './Utils/ValidateEmail.js';

export function initHandleSubmit() {
  const form = document.querySelector('[data-form="form"]');

  // NAME SELECTORS
  const nameInput = document.querySelector('[data-form="nameInput"]');
  const nameInputWrapper = document.querySelector('[data-form="nameWrapper"]');
  const nameErrorMessage = document.querySelector('[data-form="nameErrorMessage"]');

  // LAST NAME SELECTORS
  const lastNameInput = document.querySelector('[data-form="lastNameInput"]');
  const lastNameInputWrapper = document.querySelector('[data-form="lastNameWrapper"]');
  const lastNameErrorMessage = document.querySelector('[data-form="lastNameErrorMessage"]');

  // EMAIL SELECTORS
  const emailInput = document.querySelector('[data-form="emailInput"]');
  const emailInputWrapper = document.querySelector('[data-form="emailWrapper"]');
  const emailErrorMessage = document.querySelector('[data-form="emailErrorMessage"]');

  // EMAIL SELECTORS
  const passwordInput = document.querySelector('[data-form="passwordInput"]');
  const passwordInputWrapper = document.querySelector('[data-form="passwordWrapper"]');
  const passwordErrorMessage = document.querySelector('[data-form="passwordErrorMessage"]');

  let hasClickedEmailInput = false;

  function showInputError(inputWrapper, errorMessageElement, message) {
    inputWrapper.classList.add('error');
    errorMessageElement.innerHTML = message;
  }

  function hideInputError(inputWrapper) {
    inputWrapper.classList.remove('error');
  }

  function handleClickEmailInput() {
    if (!hasClickedEmailInput) {
      emailInput.classList.remove('color-red');
      emailInput.value = '';
      hasClickedEmailInput = true;
    }
  }

  function validateInputs() {
    if(!nameInput.value) {
      showInputError(nameInputWrapper, nameErrorMessage, 'First Name cannot be empty');
    } else {
      hideInputError(nameInputWrapper);
    }

    if(!lastNameInput.value) {
      showInputError(lastNameInputWrapper, lastNameErrorMessage, 'Last Name cannot be empty');
    } else {
      hideInputError(lastNameInputWrapper);
    }

    if(!validateEmail(emailInput.value)) {
      showInputError(emailInputWrapper, emailErrorMessage, 'Looks like this is not an email');
      emailInput.classList.add('color-red');
      emailInput.value = 'email@example/com';
      hasClickedEmailInput = false;
      emailInput.addEventListener('click', handleClickEmailInput);
    } else {
      hideInputError(emailInputWrapper);
    }

    if(!passwordInput.value) {
      showInputError(passwordInputWrapper, passwordErrorMessage, 'Password cannot be empty');
    } else {
      hideInputError(passwordInputWrapper);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateInputs();
  }

  if (form, nameInput, nameInputWrapper, nameErrorMessage, lastNameInput, 
    lastNameInputWrapper, lastNameErrorMessage, emailInput, emailInputWrapper, 
    emailErrorMessage, passwordInput, passwordInputWrapper, passwordErrorMessage) {
    form.addEventListener('submit', handleSubmit);
  }
}