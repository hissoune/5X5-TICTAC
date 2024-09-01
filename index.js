  const startButton = document.getElementById("startnow");
  const popup = document.getElementById("popup");
  const cancelPopupButton = document.getElementById("cancelpopup");
  const submitButton = document.getElementById("submitnames");
  
  startButton.addEventListener("click", function() {
    popup.style.display = "block";
  });

    submitButton.addEventListener("click", function() {
    const firstname = document.getElementById("firstname").value;
    const secondname = document.getElementById("secondname").value;
        // console.log(firstname);
        if (firstname && secondname) {
           const Players = {
  player1: { name: firstname, score: 0 },
  player2: { name: secondname, score: 0 }
};

localStorage.setItem("Players", JSON.stringify(Players));
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



