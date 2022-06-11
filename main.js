function checkPass(){
    let pass1 = document.querySelector('#password');
    let pass2 = document.querySelector('#confirm-password');
    let message = document.querySelector(".error-message");
    if(pass1.value != pass2.value){
        pass1.classList.add("error");
        pass2.classList.add("error");
        message.textContent = "*Passwords do not match";
        message.style.color = "red";
    }else{
        pass1.classList.remove("error");
        pass2.classList.remove("error");
        message.textContent = "*Passwords match";
        message.style.color = "green";
    }
}