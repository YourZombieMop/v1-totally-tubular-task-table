import React, { FC, ReactElement, useEffect, useState } from "react";

interface ClickableContainerProps {
  children: React.ReactNode;
  onSingleClick?: () => any | undefined;
  onDoubleClick?: () => any | undefined;
  msDelay?: number;
  disableTextSelect?: boolean;
  onRightClick?: () => any | undefined;
  disableContextMenu?: boolean;
}

const ClickableContainer: FC<ClickableContainerProps> = ({
  children,
  onSingleClick = undefined,
  onDoubleClick = undefined,
  msDelay = 250,
  disableTextSelect = false,
  onRightClick = undefined,
  disableContextMenu = false
}): ReactElement => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    switch (clickCount) {
      case 1:
        setTimer(
          setTimeout(() => {
            // console.log("SINGLE LEFT CLICK");
            setClickCount(0);
            if (onSingleClick !== undefined) {
              onSingleClick();
            }
          }, msDelay)
        );
        break;
      case 2:
        // console.log("DOUBLE LEFT CLICK");
        if (onDoubleClick !== undefined) {
          onDoubleClick();
        }
        clearTimeout(timer);
        setClickCount(0);
        break;
      default:
        break;
    }
  }, [clickCount]);

  return (
    <div
      className="clickable"
      onClick={(e) => {
        // console.log("LEFT CLICK");
        setClickCount((clickCount) => clickCount + 1);
      }}
      onMouseDown={(e) => {
        if (disableTextSelect) {
          e.preventDefault();
          return false;
        }
      }}
      onContextMenu={(e) => {
        // console.log("RIGHT CLICK");
        if (onRightClick !== undefined) {
          onRightClick();
        }
        if (disableContextMenu) {
          e.preventDefault();
          return false;
        }
      }}
    >
      {children}
    </div>
  );
};

export default ClickableContainer;
