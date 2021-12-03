import { useState } from "react";

export const useCounter = (min, max, initial = 0, step = 1) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => {
        counter < max && setCounter(counter + step);
    }

    const decrement = () => {
        counter > min && setCounter(counter - step);
    }

    return {
        counter,
        increment,
        decrement
    }
}

export default useCounter;