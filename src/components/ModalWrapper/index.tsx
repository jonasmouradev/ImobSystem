import { FC, PropsWithChildren } from 'react';

export const ModalWrapper: FC<PropsWithChildren<{ id: string }>> = ({
  id,
  children,
}) => {
  return (
    <dialog id={id} className="modal">
      <div className="w-full">
        <p className="py-4">{children}</p>
      </div>
    </dialog>
  );
};
