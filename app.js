const form=document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const ConfirmPassword = document.getElementById("ConfirmPassword");
const submit = document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();
})

const validateInputs=()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const ConfirmPasswordValue = ConfirmPassword.value.trim();

    if(usernameValue === ''){
        setError(username,'Username is required')
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email,'Email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email,'Please enter a valid email');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue == ''){
        setError(password,'Password is required')
    }else if(passwordValue.length <8){
        setError(password,'Password must be at least 8 characters');
    }else{
        setSuccess(password);
    }
    if(ConfirmPasswordValue === ''){
        setError(ConfirmPassword,'Password required');
    }
    else if (ConfirmPasswordValue !== passwordValue) {
        setError(ConfirmPassword, 'Passwords do not match');
    }else{
        setSuccess(ConfirmPassword);
    }
}

const setError= (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess= element=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
