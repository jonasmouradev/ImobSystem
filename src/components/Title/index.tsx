import { FC, PropsWithChildren } from 'react';

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="mt-2 text-center">{children}</h1>;
};
