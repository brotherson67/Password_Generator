var playerName = window.prompt("What is the name of your robot?");
var playerHealth = 100;
var playerAttack = 10;

// you can also log multiple values at once like this
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  
  
//   prompt fight or skip fight?
  var promptFight = window.prompt("Do you want to fight?");
//     promptFight === "FIGHT" || "fight" ? enemyHealth = enemyHealth - playerAttack &
//     console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
//     :console.log(enemyHealth);

//   enemyHealth = enemyHealth - playerAttack;
//   // Log a resulting message to the console so we know that it worked.
//     console.log(playerNamer + " attacked " + enemyName + " and now " + enemyName + " has " + enemyHealth + " health.");
// //   check enemy health
//     enemyHealth <= 0 ? window.alert(enemyName + " has died!")
//      : window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
    
//   // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
//     playerHealth = playerHealth - enemyAttack;
//   // Log a resulting message to the console so we know that it worked.
//   console.log(playerHealth)
// //  check player health
//     playerHealth <= 0 ? window.alert(playerName + " has died! Sorry, to try agian reload the page.")
//     : window.alert(playerName + " still has " + playerHealth + " health remaining."); 
    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure that you want to fight?");

    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Godbye!");
    // subtract money for skipping
    playerMoney = playerMoney - 2;
  } else {
    fight();
  }
};

fight();
fight();