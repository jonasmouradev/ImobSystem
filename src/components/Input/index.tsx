export const Input = ({
  id,
  name,
  type = 'text',
  placeholder = '',
  className = 'input input-bordered w-full',
}: {
  id: string;
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name || ''}
      className={className}
      placeholder={placeholder}
    />
  );
};
