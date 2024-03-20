import { useEffect, useState } from "react";

/**
 * Custom hook to dynamically set an element's max-height based on the viewport height minus a fixed value.
 * @param subtractPx Amount of pixels to subtract from the viewport height.
 * @returns The dynamic height in pixels as a string.
 */

export const useDynamicHeight = (subtractPx: number): string => {
  const [dynamicHeight, setDynamicHeight] = useState<string>(
    `${window.innerHeight - subtractPx}px`
  );

  useEffect(() => {
    const updateHeight = (): void => {
      const height = window.innerHeight - subtractPx;
      setDynamicHeight(`${height}px`);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => window.removeEventListener("resize", updateHeight);
  }, [subtractPx]);
  // console.log(dynamicHeight);

  return dynamicHeight;
};
