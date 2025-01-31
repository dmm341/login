// Toggle Login and Register Boxes
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginBox').classList.toggle('hidden');
    document.getElementById('registerBox').classList.add('hidden');
});

document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerBox').classList.toggle('hidden');
    document.getElementById('loginBox').classList.add('hidden');
});

// Handle Registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        // Save user data to local storage
        localStorage.setItem(username, password);
        alert('Registration successful!');
        document.getElementById('registerForm').reset();
    } else {
        alert('Passwords do not match!');
    }
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Retrieve user data from local storage
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert('Login successful!');
        document.getElementById('loginForm').reset();
    } else {
        alert('Invalid username or password!');
    }
});
