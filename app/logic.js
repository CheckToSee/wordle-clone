import { toast } from 'react-toastify';

let boxCounter = 0;
let rowCounter = 1;
let answer = 'bison';

export function keypress(keydown) {
  let letter = keydown.key
  letter = letter.toUpperCase()

  const rowList = Array.from(
    document.getElementsByClassName('row' + rowCounter),
  );

  if (keydown.key == 'Backspace') {
    deleteLetter()
  } else if (keydown.key == 'Enter') {
    submitLine()
  } else if (boxCounter < 5 && rowCounter < 7 && /^[A-Za-z]$/.test(letter)) {
    rowList[boxCounter].innerHTML = letter;
    rowList[boxCounter].style.borderColor = '#565758';
    boxCounter++;
  }
}

export function keyClick(keydown) {
  const rowList = Array.from(
    document.getElementsByClassName('row' + rowCounter),
  );
  if (boxCounter < 5 && rowCounter < 7) {
    rowList[boxCounter].innerHTML = keydown.target.value;
    rowList[boxCounter].style.borderColor = '#565758';
    boxCounter++;
  } else {
    console.log('out of range');
  }
}

// IGNORE FOR NOW
// export function keyHighlight(keydown) {
//   const rowList = Array.from(
//     document.getElementsByClassName('row' + rowCounter),
//   );
//   console.log(keydown.target.value);
//   if (keydown.target.innerHTML == '') {
//     return true;
//   }
//   return false;
// }

export function deleteLetter() {
  const rowList = Array.from(
    document.getElementsByClassName('row' + rowCounter),
  );
  if (boxCounter > 0) {
    rowList[boxCounter - 1].innerHTML = '';
    rowList[boxCounter - 1].style.borderColor = '#3A3A3C';
    boxCounter--;
  }
}

// FIX YELLOW ON EVERY LETTER
export function submitLine() {

  let guess = getLine();
  guess = guess.toLowerCase();
  let guessUpper = guess.toUpperCase();
  console.log(guessUpper);

  let tileColor = '';
  const rowList = Array.from(
    document.getElementsByClassName('row' + rowCounter),
  );

  if (guess == answer) {
    for (let k=0; k<5; k++) {
      rowList[k].style.backgroundColor = '#538D4E';
      rowList[k].style.borderColor = '#538D4E';
      document.getElementById(guessUpper[k]).style.backgroundColor = '#538D4E';
    }
    gameWon()
  } else if (rowCounter < 7 && boxCounter == 5) {
    for (let i=0;i<5;i++) {
      if (guess[i] == answer[i]) {
        tileColor += 'g';
      } else if (answer.includes(guess[i])) {
        tileColor += 'y'
      } else {
        tileColor += 'n'
      }
    }
    console.log(tileColor)

    for (let j=0; j<5; j++) {
      if (tileColor[j] == 'g') {
        rowList[j].style.backgroundColor = '#538D4E';
        rowList[j].style.borderColor = '#538D4E';
        document.getElementById(guessUpper[j]).style.backgroundColor = '#538D4E';
      } else if (tileColor[j] == 'y') {
        rowList[j].style.backgroundColor = '#B59F3B';
        rowList[j].style.borderColor = '#B59F3B';
        document.getElementById(guessUpper[j]).style.backgroundColor = '#B59F3B';
      } else {
        rowList[j].style.backgroundColor = '#3A3A3C';
        rowList[j].style.borderColor = '#3A3A3C';
        document.getElementById(guessUpper[j]).style.backgroundColor = '#3A3A3C';
      }
    }
    boxCounter = 0;
    rowCounter++;
  } else if (boxCounter < 5) {
    toast('Not enough letters', {
      position: "top-center",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  } // else if (NOT IN WORDLIST) {toast(stuff)}
}

export function getLine() {
  let guess = '';
  const rowList = Array.from(
    document.getElementsByClassName('row' + rowCounter),
  );
  for (let i = 0; i < boxCounter; i++) {
    guess += rowList[i].innerHTML;
  }
  return guess;
}

// ADD STUFF TO RESET KEYBOARD
export function resetGame() {
  for (let i=1;i<7;i++) {
    const rowList = Array.from(
      document.getElementsByClassName('row' + i),
    );
    for (let i=0;i<5;i++) {
      rowList[i].innerHTML = '';
      rowList[i].style.backgroundColor = '#121213';
      rowList[i].style.borderColor = '#3A3A3C';
    }
  }
  boxCounter = 0;
  rowCounter = 1;
}

// ADD UI ELEMENT HERE
export function gameWon() {
  console.log('YOU WIN!')
}
