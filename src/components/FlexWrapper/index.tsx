import { FC, PropsWithChildren } from 'react';

export const FlexWrapper: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className = 'flex flex-col items-center justify-center' }) => {
  return <div className={`${className}`}>{children}</div>;
};
