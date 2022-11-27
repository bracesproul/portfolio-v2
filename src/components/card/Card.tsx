import { ReactElement } from "react";

export type CardProps = {
  className?: string;
  title: string;
}

export default function Card(props: CardProps): ReactElement {
  const { className, title } = props;
  return (
    <div className={'flex flex-col items-center bg-slate-600'}>
      <h1 className={'text-white text-xl font-bold'}>{title}</h1>
    </div>
  )
}