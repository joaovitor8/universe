interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className="" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 bg-purple-700 hover:bg-purple-900 duration-700 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}
