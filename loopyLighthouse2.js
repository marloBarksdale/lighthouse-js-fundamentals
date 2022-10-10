const loopyLighthouse = (range, multiples, words) => {
  let [i, limit] = range;

  const [multiple1, multiple2] = multiples;

  const [word1, word2] = words;

  for (i; i <= limit; i++) {
    if (i % multiple1 === 0 && i % multiple2 === 0) {
      console.log(word1 + word2);
    } else if (i % multiple1 === 0) {
      console.log(word1);
    } else if (i % multiple2 === 0) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon']);
