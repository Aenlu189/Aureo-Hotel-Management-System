document.querySelector('.loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.querySelector('#userForm').value;
    const password = document.getElementById('inputPassword').value;

    const loginCredentials = {
        name: username,
        password: password
    };

    try {
        const loginResponse = await axios.post('http://localhost:9191/api/login', loginCredentials);
        if (loginResponse.status == 200){
            console.log('User logged in: ', loginResponse.data);
            alert('Login Successful!');
            window.location.href = 'main.html';
        } else {
            alert ('Invalid credentials. Please try again. ');
        }
    } catch (error){
        if (error.response) {
            console.error('Error during login process', error.response.data);
            alert('Wrong Credentials!');
        } else {
            console.error('Error during login process', error);
            alert('Error during login. Please try again.');
        }
    }
});

function togglePasswordVisibility(){
    var passwordField = document.getElementById('inputPassword');
    var image = document.getElementById('showLogInPassword');
    
    if (passwordField.type==='password'){
        passwordField.type = "text";
        image.src = "/assets/images/hide.png";
    } else {
        passwordField.type = "password";
        image.src = "/assets/images/show.png"
    }
}