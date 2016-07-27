// Generated by CoffeeScript 1.10.0
var misspell;

misspell = function(text, caps, capsTypes) {
  var capsType, i, j, k, l, len, len1, len2, len3, letter, letterToSwap, letterToSwapIndex, letters, m, misspellType, n, newWords, randomCapLetter, startCaps, upperPartOfWord, w, word, words;
  words = text.split(" ");
  capsType = capsTypes[misspell.random(0, capsTypes.length)] || misspell.random(1, 7);
  misspellType = misspell.random(1, 2);
  newWords = [];
  startCaps = null;
  for (w = k = 0, len = words.length; k < len; w = ++k) {
    word = words[w];
    letters = word.split("");
    if (caps === true) {
      if (startCaps !== true) {
        switch (capsType) {
          case 1:
            letters[0] = letters[0].toUpperCase();
            break;
          case 2:
            if (misspell.random(0, 2) === 0) {
              letters[0] = letters[0].toUpperCase();
            }
            break;
          case 3:
            letters = letters.join("").toUpperCase().split("");
            break;
          case 4:
            letters = letters.join("").toLowerCase().split("");
            break;
          case 5:
            for (i = l = 0, len1 = letters.length; l < len1; i = ++l) {
              letter = letters[i];
              randomCapLetter = misspell.random(0, 3);
              switch (randomCapLetter) {
                case 0:
                  letters[i] = letter.toUpperCase();
                  break;
                case 1:
                  letters[i] = letter.toLowerCase();
              }
            }
            break;
          case 6:
            for (i = m = 0, len2 = letters.length; m < len2; i = ++m) {
              letter = letters[i];
              if (misspell.random(0, text.length) === misspell.random(0, text.length) && startCaps !== true) {
                startCaps = true;
                upperPartOfWord = letters.slice(i, letters.length);
                for (j = n = 0, len3 = upperPartOfWord.length; n < len3; j = ++n) {
                  letter = upperPartOfWord[j];
                  upperPartOfWord[j] = letter.toUpperCase();
                }
                letters = letters.slice(0, i).concat(upperPartOfWord);
              }
            }
        }
      } else if (startCaps === true) {
        letters = letters.join("").toUpperCase().split("");
      }
    }
    if (words[misspell.random(0, words.length)] === words[misspell.random(0, words.length)]) {
      switch (misspellType) {
        case 1:
          letterToSwapIndex = misspell.random(0, letters.length - 1);
          letterToSwap = letters[letterToSwapIndex];
          letters[letterToSwapIndex] = letters[letterToSwapIndex + 1];
          letters[letterToSwapIndex + 1] = letterToSwap;
          break;
        case 2:
          console.log("meh");
      }
    }
    newWords.push(letters.join(""));
  }
  return newWords.join(" ");
};

misspell.random = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
