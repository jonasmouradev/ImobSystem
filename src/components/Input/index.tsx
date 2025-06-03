export const Input = ({
  id,
  name,
  type = 'text',
  placeholder = '',
  value = '',
  className = 'input input-bordered w-full',
  onChange = () => {},
}: {
  id: string;
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name || ''}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
