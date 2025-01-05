import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "date" | "password" | "email" | "number" // Tipos suportados
  className?: string // Classes adicionais
}


export const Input: React.FC<InputProps> = ({ type, onChange, className="", ...props }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      className={`w-full px-5 py-2 bg-transparent border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-puborder-purple-700 transition ${className}`}
      {...props} // Propaga outras propriedades
    />
  )
}
