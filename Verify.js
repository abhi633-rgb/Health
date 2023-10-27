function verifyLogin(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Abhi' && password === 'Abhixhek') {
        alert('Login successful!');
        window.location.href = 'DashBoard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
