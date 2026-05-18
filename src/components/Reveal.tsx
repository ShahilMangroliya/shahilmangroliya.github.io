import { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

const Reveal = ({ as: Tag = "div", children, delay = 0, className = "", style, id }: RevealProps) => {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag
      id={id}
      ref={ref as never}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
