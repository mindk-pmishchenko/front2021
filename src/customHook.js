import {useState} from 'react';

export const useCustomHook = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);

    return [counter, setCounter];
}