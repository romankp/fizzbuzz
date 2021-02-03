const formatResponse = i => {
  if (i % 3 === 0 && i % 5 === 0) {
    return 'fizzbuzz';
  } else if (i % 3 === 0) {
    return 'fizz';
  } else if (i % 5 === 0) {
    return 'buzz';
  }
  return i;
};

const loop = () => {
  for (let i = 1; i <= 100; i++ ) {
    console.log(formatResponse(i));
  }
};

loop();