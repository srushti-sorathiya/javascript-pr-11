let singldata = localStorage.getItem('chekUserLogin');
let value = JSON.parse(singldata);
document.getElementById('username').innerHTML = value.username;
document.getElementById('username1').innerHTML = value.username;

function logout()
        {
            localStorage.removeItem('chekUserLogin');
            window.location.href = 'signin.html';
        }