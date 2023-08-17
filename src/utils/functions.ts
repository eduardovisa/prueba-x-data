import { Dispatch, SetStateAction } from "react";

export function setPreState(setState: Dispatch<SetStateAction<boolean>>) {
  setState((prevState: boolean) => !prevState);
}