
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  // --------------------
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
}

export const Button = ({ children, onClick, className="", type, disabled, variant, size }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 bg-purple-700 hover:bg-purple-900 duration-700 rounded-lg ${className}`}
      type={type}
      disabled={disabled}
      // --------------------
      data-variant={variant}
      data-size={size}
    >
      {children}
    </button>
  );
}
