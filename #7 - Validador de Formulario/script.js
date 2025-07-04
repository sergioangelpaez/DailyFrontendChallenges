function loadApp(){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const form = document.getElementById('userDataForm').elements;
    const errorMessages = {
        username: document.getElementById('usernameErrorMessage'),
        email: document.getElementById('emailErrorMessage'),
        password: document.getElementById('passwordErrorMessage'),
        confirmPassword: document.getElementById('confirmPasswordErrorMessage')
    };

    function isUsernameValid(){
        if(form.username.value.length < 4){
            errorMessages.username.textContent = 'Username must be at least 4 characters long.';
            return false;
        }else{
            errorMessages.username.textContent = '';
            return true;
        }
    }

    function isEmailValid(){
        if(!regex.test(form.email.value)){
            errorMessages.email.textContent = 'Please enter a valid email address.';
            return false;
        }else{
            errorMessages.email.textContent = '';
            return true;
        }
    }

    function isPasswordValid(){
        if(form.password.value.length < 6){
            errorMessages.password.textContent = 'Password must be at least 6 characters long.';
            return false;
        }else{
            errorMessages.password.textContent = '';
            return true;
        }
    }

    function isConfirmedPasswordValid(){
        if(form.confirmPassword.value === ''){
            errorMessages.confirmPassword.textContent = 'Please confirm password.';
            return false;
        }else{
            if(form.confirmPassword.value !== form.password.value){
                errorMessages.confirmPassword.textContent = 'Passwords do not match.';
                return false;
            }else{
                errorMessages.confirmPassword.textContent = '';
                return true;
            }
        }
    }

    form.username.addEventListener('change', isUsernameValid);
    form.email.addEventListener('change', isEmailValid);
    form.password.addEventListener('change', isPasswordValid);
    form.confirmPassword.addEventListener('change', isConfirmedPasswordValid);

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const usernameValid = isUsernameValid();
        const emailValid = isEmailValid();
        const passwordValid = isPasswordValid();
        const confirmedPasswordValid = isConfirmedPasswordValid();

        if(usernameValid && emailValid && passwordValid && confirmedPasswordValid){
            alert('Form has been sent succesfully!');
        }
    });
}

document.addEventListener('DOMContentLoaded', loadApp);