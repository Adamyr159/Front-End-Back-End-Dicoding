// const form = document.querySelector('form');
// const additionalForm = form.elements.additionalForm;
// const isMarried = form.elements.isMarried;

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const nameInput = event.target.elements.name;
//   const wifeNameInput = event.target.elements.wifeName;
//   const childCountInput = event.target.elements.childCount;

//   let additionalInformation;

//   if (isMarried.checked) {
//     additionalInformation = `Saya memiliki istri bernama ${wifeNameInput.value} dan anak berjumlah ${childCountInput.value}`;
//   } else {
//     additionalInformation = 'Saya belum berkeluarga';
//   }

//   console.log(`Nama saya ${nameInput.value}. ${additionalInformation}`);
// });

// if (additionalForm) {
//   additionalForm.hidden = true;
// }

// if (isMarried) {
//   isMarried.setAttribute('aria-expanded', false);
//   isMarried.setAttribute('aria-controls', isMarried.dataset.controls);

//   isMarried.addEventListener('click', (event) => {
//     let isChecked = event.target.checked;

//     if (isChecked) {
//       event.target.setAttribute('aria-expanded', true);
//       additionalForm.hidden = false;
//     } else {
//       event.target.setAttribute('aria-expanded', false);
//       additionalForm.hidden = true;
//     }
//   });
// }

const form = document.querySelector('form');
const additionalForm = form.elements.additionalForm;
const isMarried = form.elements.isMarried;

if (additionalForm) {
  additionalForm.hidden = true;
}

if (isMarried) {
  isMarried.setAttribute('aria-expanded', false);
  isMarried.setAttribute('aria-controls', isMarried.dataset.controls);

  isMarried.addEventListener('click', (event) => {
    let isChecked = event.target.checked;

    if (isChecked) {
      event.target.setAttribute('aria-expanded', true);
      additionalForm.hidden = false;
    } else {
      event.target.setAttribute('aria-expanded', false);
      additionalForm.hidden = true;
    }
  });
}

// const form = document.querySelector('form');
// const usernameInput = form.elements.username;

// form.addEventListener('submit', (event) => event.preventDefault());

// const customValidationUsernameHandler = (event) => {
//   event.target.setCustomValidity('');

//   if (event.target.validity.valueMissing) {
//     event.target.setCustomValidity('Wajib diisi.');
//     return;
//   }

//   if (event.target.validity.tooShort) {
//     event.target.setCustomValidity('Minimal panjang adalah enam karakter.');
//     return;
//   }

//   if (event.target.validity.patternMismatch) {
//     event.target.setCustomValidity(
//       'Tidak boleh diawali dengan simbol, mengandung white space atau spasi, dan mengandung karakter spesial seperti dolar ($).',
//     );
//     return;
//   }
// };

// usernameInput.addEventListener('change', customValidationUsernameHandler);
// usernameInput.addEventListener('invalid', customValidationUsernameHandler);

// usernameInput.addEventListener('blur', (event) => {
//   // Validate the field
//   const isValid = event.target.validity.valid;
//   const errorMessage = event.target.validationMessage;

//   const connectedValidationId = event.target.getAttribute('aria-describedby');
//   const connectedValidationEl = connectedValidationId ? document.getElementById(connectedValidationId) : null;
//   if (connectedValidationEl && errorMessage && !isValid) {
//     connectedValidationEl.innerText = errorMessage;
//   } else {
//     connectedValidationEl.innerText = '';
//   }
// });
