import { useState } from "react";

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    const addCounter = (add = 1) => {
        setCounter((current) => current + add)
    }

    const subsCounter = (sub = 1) => {
        setCounter((current) => current - sub)
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