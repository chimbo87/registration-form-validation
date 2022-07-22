const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue ===''){
        //show error
        //add error class
        setErrorFor(username, 'Username is required')
    } else {
        //add success class
        setSuccessFor(username);
    }
    if(emailValue === ''){
        setErrorFor(email, 'Email is required')
    }else{
        setSuccessFor(email);
    }

    if(passwordValue ===''){
        setErrorFor(password, 'password is required');
    } else {
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2, 'please confirm your password')

    }else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'password does not match');
    } else {
        setSuccessFor(password2);
    }

    
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

