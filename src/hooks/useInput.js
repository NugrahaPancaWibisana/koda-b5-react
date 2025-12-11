import { useState } from "react";

export default function useInput(
  initialState,
  option = { required: false, minLength: 0 }
) {
  const [value, setValue] = useState(() => {
    if (typeof initialState === "function") return initialState();
    return initialState;
  });
  const [error, setError] = useState("");

  function onChangeHandler(e) {
    setValue(e.target.value);

    const inputName = e.target.name || "Input";
    if (option.required && e.target.value.length === 0) {
      setError(`${inputName} cannot be empty`);
      return;
    }

    if (e.target.value.length < option.minLength) {
      setError(
        `${inputName} cannot be less than ${option.minLength} characters`
      );
      return;
    }

    setError("");
  }

  function reset() {
    setValue(() => {
      if (typeof initialState === "function") return initialState();
      return initialState;
    });
    setError("");
  }

  return {
    value,
    isValid: !error,
    error,
    onChangeHandler,
    reset,
  };
}
