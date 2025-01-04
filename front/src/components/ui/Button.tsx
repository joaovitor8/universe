interface ButtonProps {
  children: React.ReactNode; // O conteúdo do botão (texto, ícone, etc.)
  onClick?: () => void; // Função chamada ao clicar no botão
  className?: string; // Classes CSS adicionais
}


export const ButtonGeneric = ({ children, onClick, className="" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`px-5 py-2 bg-RoxoNeon hover:bg-purple-900 duration-700 rounded-lg ${className}`}>
      {children}
    </button>
  );
}
