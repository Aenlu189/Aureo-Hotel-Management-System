document.querySelector('.appUserForm'),addEventListener('submit', async (e) =>{
    e.preventDefault();

    const username = document.querySelector('#userForm').value;
    const email = document.getElementById('emailForm').value;
    const password = document.getElementById('inputPasswordSU').value;
    const confirmPassword = document.getElementById('inputPasswordSU2').value;

    if (password !== confirmPassword){
        alert("Passwords do not match!");
        return;
    }

    const user = {
        name: username,
        email: email,
        password: password
    };

    try {
        const response = await axios.post('http://localhost:9191/api/users', user);

        console.log('User created:', response.data);
        alert('Sign up successfully!');

        document.querySelector('.appUserForm').reset();
    } catch (error){
        console.error('Error creating user', error);
        alert('Error signing up. Please try again.')
    }
});

function togglePasswordVisibilitySU(){
    var passwordField = document.getElementById('inputPasswordSU');
    var image = document.getElementById('showLogInPassword');

    if (passwordField.type==='password'){
        passwordField.type = "text";
        image.src = "Images/hide.png";
    } else {
        passwordField.type = "password";
        image.src = "Images/show.png"
    }
}

function togglePasswordVisibilitySU2(){
    var passwordField = document.getElementById("inputPasswordSU2");
    var image = document.getElementById("showLogInPassword2");

    if (passwordField.type === "password"){
        passwordField.type = "text";
        image.src = "Images/hide.png";
    } else {
        passwordField.type = "password";
        image.src = "Images/show.png";
    }
}