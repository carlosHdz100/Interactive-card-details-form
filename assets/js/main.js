
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {

  input.addEventListener('input', (e) => {
    proceso(input.id, e.target.value);
  })
});

function proceso(idInput, value) {

  switch (true) {
    case idInput == 'nameCard':
      let nameCard = document.querySelector('.name-card-front')
      value == '' ? nameCard.textContent = '-- --' : nameCard.textContent = value;
      break;

    case idInput == 'numberCard':
      let numberCard = document.querySelector('.number-card-front')
      value == '' ? numberCard.textContent = '0000 0000 0000 0000' : numberCard.textContent = value;
      break;

    case idInput == 'mes':
      let mes = document.querySelector('.mes');
      value == '' ? mes.textContent = '00' : mes.textContent = value;
      break;
    case idInput == 'year':
      let year = document.querySelector('.year');
      value == '' ? year.textContent = '00' : year.textContent = value;
      break;
    case idInput == 'cvv':
      let cvv = document.querySelector('.cvv-card-back');
      value == '' ? cvv.textContent = '000' : cvv.textContent = value;
      break;
    default:
      alert(`${idInput} == nameCard`);
      break;
  }
}



const forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {

  form.addEventListener('submit', event => {
    event.preventDefault()
    event.stopPropagation()
    if (!form.checkValidity()) {

      console.log('todo mal');
    } else {
      const containerForm = document.querySelector('.container-form');
      containerForm.innerHTML = `<div class="text-center"> <img src="images/icon-complete.svg" class="my-4" alt="icon complete">
        <h1>THANK YOU!</h1>
        <h2 class="my-3 fs-5 text-secondary">We 've added your card details</h2>
        <a href="index.html" class="btn btn-confirm py-2 col-12 class="my-3" type="button">Continue</button></div>`;

    }

    form.classList.add('was-validated')
  }, false)


});
