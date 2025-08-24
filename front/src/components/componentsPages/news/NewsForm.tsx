"use client"

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import axios from 'axios';

const NEWS = [
  { label: "Articles", value: "articles" },
  { label: "Blogs", value: "blogs" },
  { label: "Reports", value: "reports" }
];

export const NewsForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedTypes(prev =>
      checked ? [...prev, value] : prev.filter(type => type !== value)
    );
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || selectedTypes.length === 0) {
      window.alert('Fill in all fields - ( Preencha todos os campos )');
      return;
    }

    axios.post('http://127.0.0.1:4000/db/news/user', { ...formData, types: selectedTypes })
      .then(() => {
        //console.log('Informações para receber notícias:', { ...formData, types: selectedTypes });
        window.alert('Registration successful! - ( Cadastro realizado com sucesso! )');
        setFormData({ name: '', email: '' });
      })
      .catch((error) => {
        console.error('Error registering for newsletter:', error);
        window.alert('Registration failed. Please try again later. - ( O cadastro falhou. Por favor, tente novamente mais tarde. )');
      });
    setSelectedTypes([]);
  };

  return (
    <form onSubmit={handleSubmit} className='border border-purple-700 p-4 rounded-xl shadow-md w-1/2'>
      <h2 className='text-lg font-bold mb-4'>Sign up to receive universe news</h2>
      <div className='mb-4 space-x-3'>
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>

      <div className='mb-4 space-x-3'>
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />
      </div>

      <div className='mb-4'>
        <span className='mr-3'>Select the type of news:</span>
        {NEWS.map(type => (
          <label key={type.value} className='mr-3'>
            <input
              type="checkbox"
              id={`type-${type.value}`}
              value={type.value}
              checked={selectedTypes.includes(type.value)}
              onChange={handleTypeChange}
            />
            <span className='pl-1'>{type.label}</span>
          </label>
        ))}
      </div>
      
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
