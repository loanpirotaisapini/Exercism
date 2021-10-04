export function hey(message: string): string {

  var result: string = '';
  
  // First, we have to verify if the message's a question
  if(isQuestion(message.trim())) {
    if (isUpperCase(message) && /[A-z]/.test(message)) { // In case it's in upper case
      result = 'Calm down, I know what I\'m doing!';
    } else { // Otherwise
      result = 'Sure.';
    }
  } else if(isUpperCase(message) && /[A-z]/.test(message)) { // If the message's in upper case and isn't a question
    result = 'Whoa, chill out!';
  } else if (message.trim() === '') { // If the message's empty
    result = 'Fine. Be that way!';
  } else { // Otherwise
    result = 'Whatever.';
  }

  return result;
}

/**
 * Verify if the string's in upper case
 * @param str : String to verify
 * @returns : true or false
 */
function isUpperCase(str: string): boolean {
  return str === str.toUpperCase() ? true : false;
}

/**
 * Verify if the string's a question
 * @param str : String to verify
 * @returns : true or false
 */
function isQuestion(str: string): boolean {
  return str.charAt(str.length - 1) === '?' ? true : false;
}