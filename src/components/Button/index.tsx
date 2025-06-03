export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className="box w-48 h-48 flex items-center justify-center border rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
