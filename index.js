  const startButton = document.getElementById("startnow");
  const popup = document.getElementById("popup");
  const cancelPopupButton = document.getElementById("cancelpopup");
  const submitButton = document.getElementById("submitnames");
  
  startButton.addEventListener("click", function() {
    popup.style.display = "block";
  });
const PlayersHistory = JSON.parse(localStorage.getItem("PlayersHistory")) || [];
    submitButton.addEventListener("click", function() {
    const firstname = document.getElementById("firstname").value;
        const secondname = document.getElementById("secondname").value;
        const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(firstname)) {
        alert("Please enter a valid first name. Only letters and spaces are allowed.");
        return;
        }
        if (!nameRegex.test(secondname)) {
        alert("Please enter a valid second name. Only letters and spaces are allowed.");
        return;
    }
        // console.log(firstname);
        if (firstname && secondname) {
           const Players = {
  player1: { name: firstname, score: 0 },
  player2: { name: secondname, score: 0 }
            };
            
       
            // console.log(PlayersHistory);
// localStorage.setItem("PlayersHistory", JSON.stringify(PlayersHistory));

            localStorage.setItem("Players", JSON.stringify(Players));
            PlayersHistory.push(Players);
            localStorage.setItem("PlayersHistory", JSON.stringify(PlayersHistory));
            
    //   localStorage.setItem("secondPlayer", secondPlayer);
    //   localStorage.setItem("secondPlayer", secondPlayer);

            window.location.href = "/game.html";
        } else {
            
      alert("Please enter names for both players.");
    }
  });
  cancelPopupButton.addEventListener("click", function() {
    popup.style.display = "none";
  });



