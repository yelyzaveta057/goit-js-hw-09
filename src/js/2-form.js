const form = document.querySelector('.feedback-form');
const localStorageKey = 'goit-example-message';

let formData = {
  email: '',
  message: '',
};

loadFormData();

function loadFormData() {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
}

form.addEventListener('input', onInputChange);

function onInputChange(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', onSubmitChange);
function onSubmitChange(event) {
  event.preventDefault();
  const { email, message } = form.elements;
  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Fill please all fields');
  }

  console.log({ email: email.value, message: message.value });

  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = {
    email: '',
    message: '',
  };
}
