import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();
    regSignUp(e);
});

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    // errorDisplay.innerText = '';
    inputControl.classList.add('.success');
    inputControl.classList.remove('.error');
    
};

const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateSignUpInputs = () => {
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();

    if(usernameValue === '') {
      Notify.warning( 'Username is required');
    } else {
      setSuccess(username);
    }

    if(emailValue === '') {
        Notify.warning('Email is required');
    } else if (!isValidEmail(emailValue)) {
        Notify.warning('Provide a valid email address!');
    } else {
        setSuccess(email);
    } 

    if(passwordValue === '') {
        Notify.warning('Password is required');
} else if (passwordValue.length < 6 ) {
    Notify.warning('Password must be at least 6 characters!');
} else {
    setSuccess(password);
}
};

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  };

  refs.signInBtnEl.addEventListener("click", toggleModal);
  


  function hideSection() {
    refs.section.classList.add("is-hidden");
    refs.nameOfUser.classList.add("is-hidden");
    document.getElementsByClassName('btnmodal__input-pass')[0].textContent = "SIGN IN";
};  


  function openSection() {
    refs.section.classList.remove("is-hidden");
    refs.nameOfUser.classList.remove("is-hidden");
    document.getElementsByClassName('btnmodal__input-pass')[0].textContent = "SIGN UP";
  };

refs.signInBtn.addEventListener("click", hideSection);
refs.signInBtnEl.addEventListener("click", hideSection);
refs.signUpBtn.addEventListener("click", hideSection);
refs.signUpBtn.addEventListener("click", openSection);
refs.closeModalBtn.addEventListener("click", toggleModal);



   function regSignUp(e) {

    validateSignUpInputs();
    //запис username
  let userNameLS = username.value.trim();
  let serialUserNameLS = JSON.stringify(userNameLS);
  let emailLS = email.value.trim();
  let serialEmailLS = JSON.stringify(emailLS);
  let passwordLS = password.value.trim();
  let serialPasswordLS = JSON.stringify(passwordLS);


   if (username.value && isValidEmail(email.value) === true && password.value.length >= 6 ) {
   localStorage.setItem("KeyUserName", serialUserNameLS);
   localStorage.setItem("KeyEmail", serialEmailLS);
   localStorage.setItem("KeyPass", serialPasswordLS);
  };


  let returnUserNameLS = JSON.parse(localStorage.getItem("KeyUserName"));
  let returnEMailLS = JSON.parse(localStorage.getItem("KeyEmail"));
  let returnPasswordLS = JSON.parse(localStorage.getItem("KeyPass"));

  console.log(returnUserNameLS);
  console.log(returnEMailLS);
  console.log(returnPasswordLS);
};



refs.bigButtonChangeName.addEventListener('click', regSignUp);


