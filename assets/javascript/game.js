//Create variables
var wins = 0;
var losses = 0;
var targetNumber;
var totalScore = 0;

function ranNum(min,max) {
  return Math.floor(Math.random()*(max-min)) + min
}

// create a start game fuction 
function startGame() {
  // set the target goal
  targetNumber = ranNum(19, 120);
  totalScore = 0;
  // set random values for crystals
  $("#crystal-0").attr("data-value", ranNum(1,10));
  $("#crystal-1").attr("data-value", ranNum(1,10));
  $("#crystal-2").attr("data-value", ranNum(1,10));
  $("#crystal-3").attr("data-value", ranNum(1,10));
  //update the DOM
  $("#wins").text(wins)
  $("#losses").text(losses)
  $("#totalScore").text(totalScore)
  $("#targetNumber").text(targetNumber)
}
  

//listener event to receieve that click
$(".crystals").click(function() {
  //retrieve the value of the crystal selected
  var crystalValue = $(this).data("value")
  //add it to total score
  totalScore += crystalValue
  //compare userscore to targetscore
    //if scores are = 
    //increment wins and start new game
  if (totalScore === targetNumber) {
    wins ++;
    startGame();
  }
  //if userscore > targetscore
    //increment losses and start new game
  else if (totalScore > targetNumber) {
    losses ++;
    startGame();
  }
  //else 
      //update dom to reflect new score
  else {
    $("#totalScore").text(totalScore)
  }
});
    
    
startGame() 

