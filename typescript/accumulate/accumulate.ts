export function accumulate(
  list: (string | number)[],
  accumulator: (param: any) => any): any[] {
  let result: unknown[] = [];

  for (const item of list) {
    result.push(accumulator(item));
  }

  return result;
}
