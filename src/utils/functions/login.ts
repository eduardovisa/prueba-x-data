import { Dispatch, FormEvent, SetStateAction } from 'react';
import { useRouter } from 'next/router';

export function setPreState(setState: Dispatch<SetStateAction<boolean>>) {
  setState((prevState: boolean) => !prevState);
}

export function loginUser() {}
