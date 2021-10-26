let numbers = ['Six', 'Five', 'Four', 'Three', 'Two', 'One'
];
let values = [1,2,3,4,5,6];

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let rollButton = document.getElementById('roll-button');
let rollSpace1 = document.getElementById('roll_1');
let rollSpace2 = document.getElementById('roll_2');
rollButton.style.display = 'none';

let gameStart = false,
  gameOver = false,
  roll1 = 0,
  roll2 = 0,
  rollTotal = 0;
  rolls = [],
  playerScore = 0;

  newGameButton.addEventListener('click', function() {
    gameStarted = true;
    gameOver = false;
    newGameButton.style.display = 'none';
    rollButton.style.display = 'inline';
  });


  rollButton.addEventListener('click', function(){
    
    rollDice();
    showStatus();

  });

  function showStatus() {
    console.log("You rolled a " + roll1 + "and a " + roll2 + "\n");
    if(!gameStarted)
    {
      textArea.innerText = 'Welcome to Simplified Craps!';
    }
    else {
        let total = roll1 + roll2;
        textArea.innerText = 'You rolled : ' + roll1 + ' and ' + roll2 + '\n' + 'Total is : ' + (total) + '\n';
    }
    return;
  }

  function rollDice() {
       console.log("Rolling\n");
       roll1 = Math.floor(Math.random() * (6 - 1)) + 1;
       roll2 = Math.floor(Math.random() * (6 - 1)) + 1;
       console.log("Roll1: " + roll1);
       console.log("Roll2: " + roll2);
       if (rollTotal == 0) {
       const img = new Image(200, 200); // width, height
       img.src = getDieImage(roll1);
       img.id = "img1";
       document.getElementById("roll_1").appendChild(img);
       const img2 = new Image(200, 200); // width, height
       img2.src = getDieImage(roll2);
       img2.id = "img2";
       document.getElementById("roll_2").appendChild(img2);
       }
       else {
        const img = new Image(200, 200); // width, height
        img.src = getDieImage(roll1);
        img.id = "img1";
        //document.getElementById('roll_1').removeChild()
        rollSpace1.removeChild(rollSpace1.childNodes[0]);
        document.getElementById("roll_1").appendChild(img);
        const img2 = new Image(200, 200); // width, height
        img2.src = getDieImage(roll2);
        img2.id = "img2";
        //document.getElementById("roll_2").appendChild(img2);
        rollSpace2.removeChild(rollSpace2.childNodes[0]);
        document.getElementById("roll_2").appendChild(img2);
       }
       rollTotal++;
  }

  function getDieImage(number) {
      let dieImage = '';

      if (number == 1) {
        dieImage = '../assets/dice/dieWhite1.png';
      }
      if (number == 2) {
        dieImage = '../assets/dice/dieWhite2.png';
      }
      if (number == 3) {
        dieImage = '../assets/dice/dieWhite3.png';
      }
      if (number == 4) {
        dieImage = '../assets/dice/dieWhite4.png';
      }
      if (number == 5) {
        dieImage = '../assets/dice/dieWhite5.png';
      }
      if (number == 6) {
        dieImage = '../assets/dice/dieWhite6.png';
      }
      return dieImage;
  }