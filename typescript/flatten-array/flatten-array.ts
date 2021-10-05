export function flatten(arrayToFlatten: any[], result: any[] = []): number[] {

  // Foreach value of the given array
  arrayToFlatten.forEach((value) => {
    // If the value's an array
    if (value instanceof Array) {
      value = value.splice(0, value.length);
      flatten(value, result);
    } else if (value !== undefined && value !== null && result) {
      result.push(value);
    } 
  });
  
  return result ? result : [];
}
