import { ReactElement } from "react";

export type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps): ReactElement {
  const { className, children } = props;
  return (
    <button className={className}>
      {children}
    </button>
  )
}