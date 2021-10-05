export function parse(phrase: string): string {

  const REGEX = /[A-Z]+[a-z]*|[a-z]+/g;
  
  var result: string = '';
  var mot = phrase.match(REGEX);

  if(mot !== null) {
    // L'écriture `${acronym}${char[0]}` permet d'éviter les écriture de type acronym += char[0]
    result = mot.reduce((acronym, char) => `${acronym}${char[0].toUpperCase()}`, '');
  }

  return result;
}
