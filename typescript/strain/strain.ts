export function keep<T>(startingArray: T[], condition: (param: T) => any):T[] {
  let result: T[] = [];

  for (const item of startingArray) {
    if (condition(item)) result.push(item);
  }

  return result;
}

export function discard<T>(startingArray: T[], condition: (param: T) => any): T[] {
  let result: T[] = [...startingArray];
  
  for (const item of startingArray) {
    if (condition(item)) result.splice(result.indexOf(item), 1);
  }

  return result;
}
