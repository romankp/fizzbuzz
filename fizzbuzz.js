const eq = (i, num) => {
  return i % num === 0;
};

const formatResponse = i => {
  if (eq(i, 3) && eq(i, 5)) {
    return 'fizzbuzz';
  } else if (eq(i, 3)) {
    return 'fizz';
  } else if (eq(i, 5)) {
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