import { Dispatch, SetStateAction } from 'react';

export function setPreState(setState: Dispatch<SetStateAction<boolean>>) {
  setState((prevState: boolean) => !prevState);
}

const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

export function loginUser(event: EventTarget) {
  const emailInput = (event as HTMLFormElement).elements.namedItem(
    'email'
  ) as HTMLInputElement;
  const passwordInput = (event as HTMLFormElement).elements.namedItem(
    'password'
  ) as HTMLInputElement;

  const error = document.getElementById('errorEmail');
  console.log(emailInput.value == '' && passwordInput.value == '');

  if (emailInput.value == '' || passwordInput.value == '') {
    if (error) error.innerHTML = '<p>Email or password empty</p>';
  } else {
    if (!validateEmail(emailInput.value)) {
      if (error) error.innerHTML = '<p>Invalid email format</p>';
      return false;
    } else {
      if (
        emailInput.value === 'x-data@gmail.com' &&
        passwordInput.value === 'p53765_'
      ) {
        if (error) error.innerHTML = '';
        return true;
      } else {
        if (error) error.innerHTML = '<p>Wrong email or password</p>';
        return false;
      }
    }
  }
}
