import React, { useRef, useCallback } from "react";
import { Translate } from "../../utils/i18n";

const Button = ({
  onClick,
  className,
  children,
  hidden,
  disabled,
  id,
  type = "button",
}) => {
  const btnRef = useRef(null);

  const handleClick = useCallback(
    (e) => {
      if (btnRef.current) {
        btnRef.current.classList.add("buttonAnimation");
        setTimeout(() => {
          btnRef.current && btnRef.current.classList.remove("buttonAnimation");
        }, 1600);
      }
      if (onClick) onClick(e);
    },
    [onClick]
  );

  return (
    <button
      ref={btnRef}
      className={`BubbleButton ${className || ""}`.trim()}
      id={id}
      onClick={handleClick}
      hidden={hidden}
      disabled={disabled}
      type={type}
    >
      <Translate id={children} />
    </button>
  );
};

export default Button;
