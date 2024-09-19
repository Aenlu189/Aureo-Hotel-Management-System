function togglePasswordVisibility(){
    var passwordField = document.getElementById('inputPassword6');
    var image = document.getElementById('showLogInPassword');
    
    if (passwordField.type==='password'){
        passwordField.type = "text";
        image.src = "Images/hide.png";
    } else {
        passwordField.type = "password";
        image.src = "Images/show.png"
    }
}

function togglePasswordVisibility2(){
    var passwordField = document.getElementById("inputPassword2");
    var image = document.getElementById("showLogInPassword2");

    if (passwordField.type === "password"){
        passwordField.type = "text";
        image.src = "Images/hide.png";
    } else {
        passwordField.type = "password";
        image.src = "Images/show.png";
    }
}