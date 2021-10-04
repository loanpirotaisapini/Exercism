export function parse(phrase: string): string {

  const REGEX_SPECIAL_CHARACTERS = /[$&+,:;=?@#|'<>.^*()%!-]/;
  
  var result: string = '';
  var splitedPhrase: string[] = phrase.split(' ');

  for (let index = 0; index < splitedPhrase.length; index++) {
    const element = splitedPhrase[index];
    if(REGEX_SPECIAL_CHARACTERS.test(element)) {
      var splitedElement = element.split(/[$&+,:;=?@#|'<>.^*()%!-]/);
      for (let i = 0; i < splitedElement.length; i++) {
        const e = splitedElement[i];
        result += e.toUpperCase().charAt(0);
      }
    } else {
      result += element.toUpperCase().charAt(0);
    }
  }

  return result;
}
