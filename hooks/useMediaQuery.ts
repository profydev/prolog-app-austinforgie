import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery: string) => {
  const [mediaMatched, setMediaMatched] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    setMediaMatched(mediaQueryList.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMediaMatched(event.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [mediaQuery]);

  return mediaMatched;
};

export default useMediaQuery;
