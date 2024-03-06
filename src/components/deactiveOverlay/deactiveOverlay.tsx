import React, { useEffect } from "react";

interface DeactiveOverlayProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  autoDismiss?: boolean;
}

function DeactiveOverlay({
  isActive,
  setIsActive,
  autoDismiss = false,
}: DeactiveOverlayProps) {
  const handleResize = () => {
    if (autoDismiss && window.innerWidth >= 1024) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (autoDismiss) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (autoDismiss) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [autoDismiss]);

  useEffect(() => {
    const body: HTMLElement = document.body;
    if (isActive) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      className="overlay fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={() => setIsActive(false)}
    ></div>
  );
}

export default DeactiveOverlay;
