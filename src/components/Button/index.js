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
      // eigene Animation triggern
      if (btnRef.current) {
        btnRef.current.classList.add("buttonAnimation");
        // Dauer passend zu CSS-Animation (1.5-2s)
        setTimeout(() => {
          btnRef.current && btnRef.current.classList.remove("buttonAnimation");
        }, 1600);
      }
      // externen onClick weiterreichen
      if (onClick) onClick(e);
    },
    [onClick]
  );

  return (
    <button
      ref={btnRef}
      className={`TAXGOButton ${className || ""}`.trim()}
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
