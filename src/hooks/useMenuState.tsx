import { useState } from "react";

const useMenuState = () => {
  const [hidden, setHidden] = useState(false);

  const toggleMenu  = () => {
    setHidden(!hidden);
  };

  return [hidden, toggleMenu ];
};

export default useMenuState;
