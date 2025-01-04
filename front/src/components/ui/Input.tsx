interface InputProps {
  type?: "text" | "password" | "date" | "email" | "number"
  placeholder?: string
  onChange?: () => void
  className?: string
}


export const InputGeneric = ({ type, placeholder, selected, onChange, onSelect, className="" }:InputProps ) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      selected={selected}
      onChange={onChange}
      onSelect={onSelect}
      className={`w-full px-5 py-2 bg-transparent border border-RoxoNeon text-roxoborder-RoxoNeon rounded-lg ${className}`}
    />
  );
}
