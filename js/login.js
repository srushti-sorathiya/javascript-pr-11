let r = JSON.parse(localStorage.getItem('register'))

if (!r) {
    alert('You must register first')
    window.location.href='register.html'
}

function login() {
    let e = document.getElementById('email').value
    let p = document.getElementById('password').value
    let r = document.getElementById('role').value

    let val = JSON.parse(localStorage.getItem('register'))
    let check = 0
    for (i in val) {
        if (val[i].useremail == e && val[i].userpassword == p && val[i].role == r) {
            check = 1
            let obj = {
                username: val[i].username,
                useremail: val[i].useremail,
                userrole: val[i].role,
            }
            localStorage.setItem('Userlogin', JSON.stringify(obj))
        }
    }
    if (check == 1) {
        alert('User successfully login')
        window.location.href = 'index.html'
    } else {
        alert('Your email,password && role is not valid')
    }
}