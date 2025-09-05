"use client"

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import axios from 'axios';

export const NewsCreateForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!formData.name || !formData.email || selectedTypes.length === 0) {
      setMessage('Preencha todos os campos.');
      return;
    }

    setLoading(true);
    try {
      await axios.delete('http://127.0.0.1:4000/db/news/user', { data: { ...formData, types: selectedTypes } });
      setMessage('Cadastro realizado com sucesso!');
      setFormData({ name: '', email: '' });
      setSelectedTypes([]);
    } catch (error) {
      console.error('Error during news signup:', error);
      setMessage('O cadastro falhou. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='border border-purple-700 p-4 rounded-xl shadow-md w-1/2'>
      <h2 className='text-lg font-bold mb-4'>Sign up to receive universe news</h2>
      {message && <div className="mb-4 text-red-600">{message}</div>}

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
      
      <Button type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Subscribe'}
      </Button>
    </form>
  );
}
