const checkPassword = (passwd) => {
  const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  return regex.test(passwd);
};

const passwordsMatches = (pass1, pass2) => {
  return pass1 === pass2
}

const minLength = (text, minLength) => text.length >= minLength

export { checkPassword, passwordsMatches, minLength };
