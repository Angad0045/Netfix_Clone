import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPostion, setScrollPostion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPostion(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollPostion;
};

export default useScrollPosition;
