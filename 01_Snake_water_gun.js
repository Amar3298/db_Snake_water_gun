// computer-user
// Author:- Amar Raut 
probabilityies = {
  "S-S": "Tie",
  "S-W": "Computer wins",
  "S-G": "User wins",
  "W-W": "Tie",
  "W-S": "User wins",
  "W-G": "Computer wins",
  "G-G": "Tie",
  "G-S": "Computer wins",
  "G-W": "User wins",
};
function computer_choice() {
  let list1 = ["S", "W", "G"];
  let result = list1[Math.floor(Math.random() * list1.length)];
  return result;
}
let Tie = 0;
let Computer = 0;
let User = 0;
let life = 3;
let user_name = prompt("Enter your name: ");
while (life != 0) {
  life -= 1;
  alert(
    `life:${life}\nScore Card\nComputer: ${Computer}\n${user_name}: ${User}\nTie: ${Tie}`
  );
  user_choice = prompt("Chose (S/W/G) ");
  user_choice = user_choice.toUpperCase();
  C_choice = computer_choice();
  check_winer = `${C_choice}-${user_choice}`;
  winer_result = probabilityies[check_winer];
  if (winer_result == "Tie") {
    Tie += 1;
    alert("\nIt's an Tie\n");
  } else if (winer_result == "Computer wins") {
    Computer += 1;
    alert("\nComputer wins\n");
  } else if (winer_result == "User wins") {
    User += 1;
    alert(`\n${user_name} wins\n`);
  }
}
alert("***************************** Result *****************************");
alert(`${user_name}'s Score Card:\nComputer: ${Computer}\n${user_name}: ${User}\nTie: ${Tie}`);
if (Computer > User && Computer > Tie) {
  alert("Oppps computer won the match ");
} else if (User > Computer && User > Tie) {
  alert("Bravo! you won the match ");
} else if (Tie > Computer && Tie > User) {
  alert("Well try its an draw");
} else {
  alert("Try again");
}

