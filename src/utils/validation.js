export const required = (value) =>
  value ? undefined : `You forgot to enter your email!`;

export const minLength = (min) => (value) =>
  value.length >= min ? undefined : `Should be longer than ${min} symbols`;

export const maxLength = (max) => (value) =>
  value.length <= max ? undefined : `Should be shorter than ${max} symbols`;

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined,
    );
export const isEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(value)
    ? `Invalid email address`
    : undefined;

export const checkPassword = (firstPassword) => (value) => {
  return firstPassword === value ? undefined : ` Password doesn't match`;
};
