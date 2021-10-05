export function parse(phrase: string): string {

  const REGEX = /[A-Z]+[a-z]*|[a-z]+/g;
  
  var result: string = '';
  var mot = phrase.match(REGEX);

  if(mot !== null) {
    result = mot.reduce((acronym, char) => acronym += char[0].toUpperCase(), '');
  }

  return result;
}
