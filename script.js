function register() {
    let student = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value,
        password: document.getElementById("password").value
    };

    if(student.email === "" || student.password === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem(student.email, JSON.stringify(student));
    alert("Registration Successful!");
    window.location.href = "login.html";
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let data = localStorage.getItem(email);

    if(data == null) {
        alert("User not found!");
        return;
    }

    let student = JSON.parse(data);

    if(student.password === password) {
        alert("Login Successful! Welcome " + student.name);
    } else {
        alert("Wrong Password!");
    }
}
