  let userScore = 0;
  let computerScore = 0;
  const userScore_span = document.getElementById("user-score");
  const computerScore_span = document.getElementById("computer-score");
  const scoreBoard_div = document.querySelector(".score-board");
  const result_p = document.querySelector(".result > p");
  const rock_div = document.getElementById("r");
  const paper_div = document.getElementById("p");
  const scissors_div = document.getElementById("s");

// caching the DOM with a_ underscore allows content to be checked once the first time instead of having to 
// have the tiems recalled each time. 

  function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  } 
// this function controls the choices of Rock, Paper or Scissors

  
  function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
  }

// this function converts the a single letter to a word. ex[when "r" is called it will callback "Rock"]

  function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} BEATS ${convertToWord(computerChoice)}${smallCompWord} YOU WIN! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow') , 300);
  }

  // This function controls the player win function, the smalluser word and player score and timeout function for the glowing circles
  function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} BEATS ${convertToWord(computerChoice)}${smallCompWord} YOU LOOSE! `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow') , 300);
  }

  // This function controls the computer win function, the smallcomp word  and comp score and timeout function for the glowing circles
  
  function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} EQUALS ${convertToWord(computerChoice)}${smallCompWord} TIED UP, let's go again! `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(()  => userChoice_div.classList.remove('gray-glow') , 300);
  }


  function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, computerChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
    }

}

  function main() {
    rock_div.addEventListener('click', () => game("r"));
  
    paper_div.addEventListener('click', () => game("p"));
 
    scissors_div.addEventListener('click', () => game("s"));
}

main();
