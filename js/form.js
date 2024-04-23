const form = document.querySelector('.feedback__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.feedback__form');

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимум 30 символов',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Недопустимый формат',
    }
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Ведите 10 символов',
    },
  ])
