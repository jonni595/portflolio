import { useState } from "react";

const useShowState = () => {
  const [hidden, setHidden] = useState(false);

  const showMore = () => {
    setHidden(!hidden);
  };

  return { hidden, showMore };
};

export default useShowState;
