import { useState } from "react";

export default function useToggleState(initialVal = {}) {
  const [state, setState] = useState(initialVal);
  const toggle = (key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return [state, toggle];
}
