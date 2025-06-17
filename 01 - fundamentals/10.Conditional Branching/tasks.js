if (" 0") { alert('Hello'); } // Oui alert sera shown, string pleine

////////////
const nameOfJS = prompt("What is the 'official' name of JavaScript?") // Meme si ECMAScript n'est pas vraiment le nom officiel, c'est une recommandation globale qui prend plus de langage que js, par exemple actionscript

if (nameOfJS.toLowerCase() === "ecmascript") {
  alert("right !");
} else {
  alert("you don't know ES");
}
////////////

const number = +prompt("tell me a number")
if (number < 0) {
  alert(1)
} else if (number > 0) {
  alert(-1)
} else if (number === 0) {
  alert(0)
} else {
  return
}

///////////

let result;

(a + b < 4) ? result = 'Below' : result = 'Over'

//////////

let message;

(login == 'Employee') ?
  message = 'Hello' : (login == 'Director') ?
    message = 'Greetings' : (login == '') ?
      message = 'No login' : message = "";

///////////

