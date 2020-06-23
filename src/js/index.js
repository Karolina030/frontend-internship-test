var successMessage = document.querySelector(".success-message");
var helloMessage = document.getElementById("show-popup-form");
successMessage.style.display='flex';
successMessage.style.display='none';

function showPopup(){
    document.querySelector('.popup').style.visibility = "visible";
    helloMessage.style.display='none';

}

function closePopup(){
    document.querySelector('.popup').style.visibility = "hidden";
    helloMessage.style.display ='flex';
}

function showSuccessMessage(){
    if (validation()) {
        document.querySelector('.popup').style.visibility = "hidden";
        helloMessage.style.display='none';
        successMessage.style.display='flex';
    }
}

function validation() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwReg=  /^[A-Za-z]\w{7,14}$/;
    if (email === '' || password === '') {
        alert("Please fill all fields");
        return false;
    } else if (!(email).match(emailReg)) {
        alert("Invalid email");
	return false;
    } else if (!(password).match(passwReg)) {
        alert("Invalid password");
        return false;
    } else {
	return true;
    }
}
