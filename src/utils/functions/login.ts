import { Dispatch, FormEvent, SetStateAction } from "react";

export function setPreState(setState: Dispatch<SetStateAction<boolean>>) {
  setState((prevState: boolean) => !prevState);
}

export function loginUser(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}