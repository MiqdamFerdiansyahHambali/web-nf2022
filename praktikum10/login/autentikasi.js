function login() {
    event.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user == "miqey22166" && pass == "abcdefg") {
        location.replace("success.html");
        alert("Login berhasil");
    }
    else {
        alert("Login gagal");
    }

}