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
      className="border-forground h-14 w-full rounded-md border bg-background p-4 ring ring-transparent transition-all hover:border-primary focus:border-primary focus:outline-none focus:ring-primary"
      {...props}
    />
  );
};

export default Input;
