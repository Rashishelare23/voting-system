
const username = sessionStorage.getItem("username");
const role = sessionStorage.getItem("role");

if (!username || role !== "admin") {
    window.location.href = "index.html"; // Redirect to login
}

// Load and display results
function displayResults() {
    const votes = JSON.parse(localStorage.getItem("votes")) || {
        "BJP": 0,
        "NCP": 0,
        "BSP": 0,
        "AAP": 0,
        "NPP": 0
    };

    const resultsDiv = document.getElementById("results");
    let resultHTML = "<h2>Results:</h2>";

    for (const party in votes) {
        resultHTML += `<p>${party}: ${votes[party]} votes</p>`;
    }

    resultsDiv.innerHTML = resultHTML;
}

// Reset votes to zero
document.getElementById("resetVotes").addEventListener("click", function () {
    if (confirm("Are you sure you want to reset all votes? This action cannot be undone.")) {
        const defaultVotes = {
            "BJP": 0,
            "NCP": 0,
            "BSP": 0,
            "AAP": 0,
            "NPP": 0
        };

        localStorage.setItem("votes", JSON.stringify(defaultVotes));
        alert("All votes have been reset to zero!");
        displayResults(); // Update the displayed results
    }
});

// Display the initial results
displayResults();
