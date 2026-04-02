const username = sessionStorage.getItem("username");
const role = sessionStorage.getItem("role");

if (!username || role !== "user") {
    window.location.href = "index.html"; // Redirect to login
}

document.getElementById("voteForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedVote = document.querySelector('input[name="vote"]:checked');

    if (!selectedVote) {
        alert("Please select a party to vote for!");
        return;
    }

    let votes = JSON.parse(localStorage.getItem("votes")) || {
        "BJP": 0,
        "NCP": 0,
        "BSP": 0,
        "AAP": 0,
        "NPP": 0
    };

    votes[selectedVote.value] += 1;

    localStorage.setItem("votes", JSON.stringify(votes));

    alert("Your vote has been successfully cast!");
    sessionStorage.clear();
    window.location.href = "index.html";
});