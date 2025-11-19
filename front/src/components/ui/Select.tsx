"use client"

import { useEffect, useRef, useState } from 'react';

// Define a interface para as opções do select
interface SelectOption {
  value: string;
  label: string;
}

// Define a interface para as props do componente
interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

// ChevronDown Icon SVG Component
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Select = ({ options, value, onChange, placeholder = "Select an option" }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  // Fecha o dropdown se o usuário clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: SelectOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        type="button"
        className="w-full flex items-center justify-between px-3 py-2 text-sm text-left bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? 'text-white' : 'text-slate-400'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-slate-900 border border-slate-700 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul role="listbox">
            {options.map(option => (
              <li
                key={option.value}
                className="px-3 py-2 text-sm text-slate-300 hover:bg-purple-950/50 cursor-pointer"
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={value === option.value}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
