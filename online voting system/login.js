document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (password === "1234") {
        if (["user1", "user2", "user3"].includes(username)) {
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("role", "user");
            window.location.href = "vote.html";
        } else if (username === "admin") {
            sessionStorage.setItem("username", "admin");
            sessionStorage.setItem("role", "admin");
            window.location.href = "admin.html";
        } else {
            alert("Invalid username or password!");
        }
    } else {
        alert("Invalid username or password!");
    }
});