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
        console.log(firstname);
    if (firstname && secondname) {
      localStorage.setItem("firstPlayer", firstname);
      localStorage.setItem("secondPlayer", secondname);

      window.location.href = "/game.html";
    } else {
      alert("Please enter names for both players.");
    }
  });
  cancelPopupButton.addEventListener("click", function() {
    popup.style.display = "none";
  });

  submitButton.addEventListener("click", function() {
    const firstname = document.getElementById("firstname").value;
    const secondname = document.getElementById("secondname").value;

    if (firstname && secondname) {
      localStorage.setItem("firstPlayer", firstname);
      localStorage.setItem("secondPlayer", secondname);

      window.location.href = "/game.html";
    } else {
      alert("Please enter names for both players.");
    }
  });

