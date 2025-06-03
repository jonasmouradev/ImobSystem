import { FC, PropsWithChildren } from 'react';

export const Label: FC<PropsWithChildren> = ({ children }) => {
  return (
    <label className="label">
      <span className="label-text">{children}</span>
    </label>
  );
};
