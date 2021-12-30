const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const passwordRegex =
  /(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+/;

const isEmailValid = (value) => emailRegex.test(value);
const isPasswordValid = (value) => passwordRegex.test(value);

export { isEmailValid, isPasswordValid };
