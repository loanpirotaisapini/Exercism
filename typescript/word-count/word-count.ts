export function count(sentence: string): Map<string, number> {
  const regex = /[^\s]+/g;
  const wordCount = new Map();
  const words = sentence.toLowerCase().match(regex);

  // If there's no word that matches the regex
  if (!words || words.length === 0) return wordCount;

  words.forEach((word) =>
    wordCount.get(word)
      ? wordCount.set(word, wordCount.get(word) + 1)
      : wordCount.set(word, 1)
  );

  return wordCount;
}
