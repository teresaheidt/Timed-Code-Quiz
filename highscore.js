
// get the localstorage 
    
 
    var displayBtn = document.getElementById("displayScores");

    var saveInitials = document.getElementById("saveYourInitials");

    var user = {
    initial: highScore,
    score: score
    }


    saveInitals.addEventListener("click", save);
    function save() {
    var userData = JSON.parse(localStorage.getItem("data")) || [];
    userData.push(user);
    localStorage.setItem("data",JSON.stringify(userData));
    for (let i = 0; i< userData.length; i++) {
      console.log(
          'initials: ' +
          "time:" +
          userData[i].score
      )
      
    }
    console.log(saveInitials);
}

}

//highscore.js file should only get the scores and initials from the locale storage and display them on the highscore.html 