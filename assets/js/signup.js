const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!fullName || !email || !password || !confirmPassword) {
        alert("Please fill in all the fields.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Save user
    const user = {
    name: fullName,
    email,
    password
    };

    localStorage.setItem("lifeosUser", JSON.stringify(user));

    alert("🎉 Account Created Successfully!");

    window.location.href = "login.html";

});