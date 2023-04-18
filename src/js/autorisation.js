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

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('.error');
    inputControl.classList.remove('.success');
};

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

//---------------------------------------------//валідація інпутів SignUp//--------------------------------------------------//

const validateSignUpInputs = () => {
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();

    if(usernameValue === '') {
      Notify.warning( 'Username is required');
    } else { 
        setSuccess(username) ;
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
} else if ('' < passwordValue.lenght < 6 ) {
    Notify.warning('Password must be at least 6 characters!');
} else {
    setSuccess(password);
}
// console.log({ email: email.value, passwordValue: password.value }); 
};

//---------------------------------------------//валідація інпутів SignIn//--------------------------------------------------//


// const validateSignInInputs = () => {
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();


//  if(emailValue === '') {
//      Notify.warning('Email is required');
//  } else if (!isValidEmail(emailValue)) {
//      Notify.warning('Provide a valid email address!');
//  } else {
//      setSuccess(email);
//  } 

//  if(passwordValue === '') {
//      Notify.warning('Password is required');
// } else if ('' < passwordValue.lenght < 6 ) {
//  Notify.warning('Password must be at least 6 characters!');
// } else {
//  setSuccess(password);
// }
// // console.log({ email: email.value, passwordValue: password.value }); 
// };
//---------------------------------------------//відкрити-закрити модалку //--------------------------------------------------//

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  };

  refs.signInBtnEl.addEventListener("click", toggleModal);
  
//---------------------------------------------//ховає username//--------------------------------------------------//

  function hideSection() {
    refs.section.classList.add("is-hidden");
    refs.nameOfUser.classList.add("is-hidden");
    // refs2.activeButton.classList.remove("active");
    // refs2.unactiveButton.classList.add("active");
    document.getElementsByClassName('btnmodal__input-pass')[0].textContent = "SIGN IN";
};  

//---------------------------------------------//відкриває username//--------------------------------------------------//
  function openSection() {
    refs.section.classList.remove("is-hidden");
    refs.nameOfUser.classList.remove("is-hidden");
    document.getElementsByClassName('btnmodal__input-pass')[0].textContent = "SIGN UP";
  };

refs.signInBtn.addEventListener("click", hideSection);
refs.signUpBtn.addEventListener("click", hideSection);
refs.signUpBtn.addEventListener("click", openSection);
refs.closeModalBtn.addEventListener("click", toggleModal);

 //--------------------------------------------------//запис даних в localStorage//-------------------------------------//

   function regSignUp(e) {

    validateSignUpInputs();

    //запис username
   let userNameLS = {username: username.value};
   let serialUserNameLS = JSON.stringify(userNameLS);
   localStorage.setItem("KeyUserName", serialUserNameLS);

    //запис e-mail
    let emailLS = {email: email.value};
    let serialEmailLS = JSON.stringify(emailLS);
    localStorage.setItem("KeyEmail", serialEmailLS);

    //запис пароля
    let passwordLS = {password: password.value};
    let serialPasswordLS = JSON.stringify(passwordLS);
    localStorage.setItem("KeyPass", serialPasswordLS);
   

  let returnUserNameLS = JSON.parse(localStorage.getItem("KeyUserName"));
  console.log(returnUserNameLS);

  let returnEMailLS = JSON.parse(localStorage.getItem("KeyEmail"));
  let returnPasswordLS = JSON.parse(localStorage.getItem("KeyPass"));

  console.log(returnEMailLS);
  console.log(returnPasswordLS);

};

refs.bigButtonChangeName.addEventListener('click', regSignUp);

 //--------------------------------------------------//читання даних в localStorage//-------------------------------------//

///...////