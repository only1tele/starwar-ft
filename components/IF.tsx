import type { ReactNode } from "react";
import React from "react";

interface IFProps {
  condition: boolean;
  children: ReactNode;
}

const IF: React.FC<IFProps> = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

export default IF;
