import { useEffect, useState } from "react"

export const useDebounce = (value: string) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        let intervalId = setInterval(() => setDebouncedValue(value), 500);
        return () => clearInterval(intervalId)
    }, [value]);

    return debouncedValue;
}