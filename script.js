document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Login form submitted');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Signup form submitted');
});