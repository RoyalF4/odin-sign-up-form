const passowrdInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#confirm-password');
const submit = document.querySelector('button');
const noMatch = document.querySelector('.noMatch');

submit.addEventListener('click', () => {
    if(passowrdInput.value != passwordConfirmInput.value) {
        passowrdInput.classList.add('error');
        passwordConfirmInput.classList.add('error');
        noMatch.style.display = 'block';
    }
    else {
        passowrdInput.classList.remove('error');
        passwordConfirmInput.classList.remove('error');
        noMatch.style.display = 'none';
    }
});

