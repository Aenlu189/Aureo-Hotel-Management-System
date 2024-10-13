document.querySelector('.appUserForm').addEventListener('submit', async(e) => {
    e.preventDefault();
    
    const username = document.querySelector('#userForm').value;
    const email = document.getElementById('emailForm').value;
    const password = document.getElementById('inputPasswordSU').value;
    const confirmPassword = document.getElementById('inputPasswordSU2').value;
    
    if (password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }
    
    const user = {
        name: username,
        email: email,
        password: password
    };
    
    try {
        const response = await axios.post('http://localhost:9191/api/signup', user);
        console.log('User created:', response.data);
        alert('Sign up successfull!');
        window.location.href = 'index.html';
        document.querySelector('.appUserForm').reset();
    } catch (error) {
        console.error('Error creating user', error);
        alert('Error signing up. Please try again.');
    }
})

function togglePasswordVisibilitySU1(){
    var passwordField = document.getElementById('inputPasswordSU1');
    var image = document.getElementById('showSignupPassword1');

    if (passwordField.type==='password'){
        passwordField.type = "text";
        image.src = "/assets/images/hide.png";
    } else {
        passwordField.type = "password";
        image.src = "/assets/images/show.png"
    }
}

function togglePasswordVisibilitySU2(){
    var passwordField = document.getElementById("inputPasswordSU2");
    var image = document.getElementById("showSignupPassword2");

    if (passwordField.type === "password"){
        passwordField.type = "text";
        image.src = "/assets/images/hide.png";
    } else {
        passwordField.type = "password";
        image.src = "/assets/images/show.png";
    }
}