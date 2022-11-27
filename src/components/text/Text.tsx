import { ReactElement } from "react";
import clsx from 'clsx';

export type TextProps = {
  className?: string;
  children?: string;
  content?: string;
  /**
   * The size of the text
   * @default 'md'
   */
  type?: TextType;

  isBold?: boolean;
}

type TextType = 'sm' 
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';

export default function Text(
  {...props}: TextProps,
): ReactElement {
  const { className, children, type, isBold, content } = props;

  const textType = () => {
    if (isBold) {
      return `${type}-bold`;
    }
    return type;
  }

  console.log('textType', );

  return (
    <p className={clsx(`textType-${textType()}`, className)}>
      {children ?? content}
    </p>
  )
}