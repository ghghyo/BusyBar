import React, { useRef, useEffect } from "react";

type BackProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Backdrop = ({ onClick, children }: BackProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick && onClick();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClick]);

  if (!children) {
    return null;
  }

  return (
    <div ref={ref} className="backdrop">
      {children}
    </div>
  );
};

export default Backdrop;
