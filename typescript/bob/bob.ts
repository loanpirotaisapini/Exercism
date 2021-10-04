export function hey(message: string): string {

  var result: string = "";
  
  // Si tout le message est en majuscule
  if(isUpperCase(message)) {
    // Dans le cas où le message est une question
    if(message.indexOf("?") !== null) {
      result = "Calm down, I know what I'm doing!";
    } else { // Dans le cas contraire
      result = "Whoa, chill out!";
    }
  } else {
    if(message.indexOf("?") !== null) {
      result = "Sure.";
    } else {
      result = "Whatever.";
    }
  }

  return result;
}

// Permet de vérifier si tout le message est en majuscule
function isUpperCase(str: string): boolean {
  return str === str.toUpperCase() ? true : false;
}