import { useCallback, useMemo, useState } from "react";

export const useErrorContext = () => {
    const [errors, setErrors] = useState<string[]>([]);
    
    const addError = useCallback(
        (message: string) => {
            if (!errors.includes(message)) {
                setErrors((prevErrors) => [...prevErrors, message]);
            }
        },
        [errors],
    );

    const errorContextValue = useMemo(
        () => ({
            errors,
            setErrors: addError,
        }),
        [errors, addError],
    );

    return {errorContextValue}
}