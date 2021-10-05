/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(str = ''): string {
  
  return (str.trim().length === 0 || str === '') ?  'One for you, one for me.' : 'One for ' + str.trim() + ', one for me.';
}
