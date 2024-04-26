import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  loop: boolean;
  startDelay: number;
  backDelay: number;
  backSpeed: number;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 50,
  startDelay = 50,
  backSpeed = 50,
  backDelay = 1000,
  loop = true,
}) => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings,
        typeSpeed,
        startDelay,
        backSpeed,
        backDelay,
        loop,
      };
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, [strings, typeSpeed, startDelay, backSpeed, backDelay, loop]);

  return <span ref={typedRef}></span>;
};

export default TypedText;
