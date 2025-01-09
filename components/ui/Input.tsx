interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Input = ({
  placeholder = 'Search screenly...',
  ...props
}: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border-forground h-14 w-full rounded-md border bg-background p-4 ring ring-transparent transition-all hover:border-secondary focus:border-secondary focus:outline-none focus:ring-secondary"
      {...props}
    />
  );
};

export default Input;
