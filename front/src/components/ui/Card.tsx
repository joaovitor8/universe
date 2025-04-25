import React from "react"

interface CardProps {
  className?: string // Classes adicionais para o cartão principal
  children: React.ReactNode // Conteúdo do cartão
}

export const Card: React.FC<CardProps> = ({ className="", children }) => {
  return (
    <div className={`h-min p-5 border border-purple-700 rounded-lg space-y-5 ${className}`}>
      {children}
    </div>
  )
}

export const CardHeader: React.FC<CardProps> = ({ className="", children }) => (
  <div className={`border-b border-gray-700 pb-2 ${className}`}>
    {children}
  </div>
)

export const CardTitle: React.FC<CardProps> = ({ className="", children }) => (
  <h3 className={`text-lg ${className}`}>
    {children}
  </h3>
)

export const CardDescription: React.FC<CardProps> = ({ className="", children }) => (
  <p className={`text-xs ${className}`}>
    {children}
  </p>
)

export const CardContent: React.FC<CardProps> = ({ className="", children }) => (
  <div className={`text-white ${className}`}>
    {children}
  </div>
)

export const CardFooter: React.FC<CardProps> = ({ className="", children }) => (
  <div className={`border-t border-gray-700 pt-2 text-sm ${className}`}>
    {children}
  </div>
)
