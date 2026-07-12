const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("lifeosUser"));

    if (!savedUser) {
        alert("No account found. Please sign up first.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {

        localStorage.setItem("isLoggedIn", "true");

        alert("🎉 Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid email or password.");

    }

});