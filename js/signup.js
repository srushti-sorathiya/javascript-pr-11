let data = [
  {
    username: 'srushti',
    useremail: 'srushti@gmail.com',
    userpassword: 99,
    role: 'Admin'
  }
];
function logindata() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let cpassword = document.getElementById('cpassword').value;
  // let role = document.getElementById('role').value;

  if (password == cpassword) {
    let obj = {
      username: name,
      useremail: email,
      userpassword: password,
      role: 'User',
      grid: Math.floor(Math.random() * 10000),
      image: "user-1.jpg"
    }

    if (localStorage.getItem('register') === null || localStorage.getItem('register') === undefined) {
      data.push(obj);
      let st = JSON.stringify(data);
      localStorage.setItem('register', st);
    } else {
      let allData = localStorage.getItem('register');
      let value = JSON.parse(allData);
      data = value
      data.push(obj);
      let st = JSON.stringify(data);
      localStorage.setItem('register', st);
    }
    alert("user successfully register");
    window.location.href = 'signin.html';
    document.getElementById('name').value = " ";
    document.getElementById('email').value = " ";
    document.getElementById('password').value = " ";
    document.getElementById('cpassword').value = " ";

  }
  else {
    alert("Newpassword and confirm password not match");
  }

}