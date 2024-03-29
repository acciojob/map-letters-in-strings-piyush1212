//your JS code here. If required.
function mapLetters(word) {
  const letterIndexes = {};
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!letterIndexes[letter]) {
      letterIndexes[letter] = [];
    }
    letterIndexes[letter].push(i);
  }
  return letterIndexes;
}
