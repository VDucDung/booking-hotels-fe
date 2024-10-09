/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import clsx from "clsx";
import useColorClasses from "../../hooks/useColorClasses";
import useResponsiveStyle from "../../hooks/useResponsiveStyle";

type DividerProps = {
  orientation?: "horizontal" | "vertical";
  color?: string;
  width?: string;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
  borderStyle?: "solid" | "dashed" | "dotted";
  className?: string;
  [key: string]: any; 
};

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  color = "dark-200",
  width = "100%",
  height = "1px",
  marginTop = "0",
  marginBottom = "0",
  borderStyle = "solid",
  className,
  ...props
}) => {
  const { borderColor: newBorderColor } = useColorClasses({
    borderColor: color,
  });

  const dimensionStyle = useResponsiveStyle(
    orientation === "horizontal" ? width : height,
    orientation === "horizontal" ? "w" : "h"
  );

  const borderThickness = orientation === "horizontal" ? height : width;

  const style = {
    ...dimensionStyle,
    borderWidth: borderThickness,
    borderStyle: borderStyle,
    marginTop,
    marginBottom,
  };

  return (
    <div className={clsx(className, newBorderColor)} style={style} {...props} />
  );
};

export default Divider;
