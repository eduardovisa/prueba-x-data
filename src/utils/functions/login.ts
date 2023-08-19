import { Dispatch, FormEvent, SetStateAction } from 'react';
import { useRouter } from 'next/router';

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

  if (!validateEmail(emailInput.value)) {
    if (error) error.innerHTML = '<p>Invalid email format</p>';
    return false;
  } else {
    if (
      emailInput.value === 'x-data@gmail.com' &&
      passwordInput.value === 'p53765_'
    ) {
      return true;
    }
  }

  if (error) error.innerHTML = '<p>Invalid email or password</p>';
  return false;
}
