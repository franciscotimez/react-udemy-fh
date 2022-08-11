import { useState } from "react";

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    const addCounter = (add = 1) => {
        setCounter(counter + add)
    }

    const subsCounter = (sub = 1) => {
        setCounter(counter - sub)
    }

    const resetCounter = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        addCounter,
        subsCounter,
        resetCounter
    }
}