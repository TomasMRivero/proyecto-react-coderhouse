export const useCounter = (initial = 0, step = 1) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => {
        setCounter(counter + step);
    }

    const decrement = () => {
        setCounter(counter - step);
    }

    return {
        counter,
        increment,
        decrement
    }
}

export default useCounter;