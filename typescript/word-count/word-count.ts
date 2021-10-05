export function count(sentence: string): Map<string, number> {
  
  const regex = /[^\s]+/g;
  const wordCount = new Map();
  const words = sentence.toLowerCase().match(regex);

  // If there's no word that matches the regex
  if (!words || words.length === 0) return wordCount;

  // For each word
  for (const word of words) {
    // If the word already exists in our map
    if (wordCount.get(word)) {
      // We increase the number of ocurrences in the Map
      wordCount.set(word, wordCount.get(word) + 1);
    } else { // Otherwise, we add the word in the Map
      wordCount.set(word, 1);
    }
  }
  
  return wordCount;
}
