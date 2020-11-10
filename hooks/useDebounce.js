import { useState, useEffect } from 'react';

const useDebounce = (inputValue, delay) => {
    const [ value, setValue ] = useState(inputValue);
    useEffect(()=> {
        const timeout = setTimeout(()=> {
            setValue(inputValue);
        }, delay);
        return () => clearTimeout(timeout);
    }, [inputValue, delay]);

    return value;
}

export default useDebounce;