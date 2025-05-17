"use client"

import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Information for receiving news:', formData);
    window.alert('Registration completed successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className='border border-purple-700 p-4 rounded-xl shadow-md'>
      <h2 className='text-lg font-bold mb-4'>Sign up to receive news from the universe</h2>
      <div className='mb-4 space-x-3'>
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
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
          placeholder="Enter your email"
          required
        />
      </div>
      <Button type="submit">Subscribe</Button>
    </form>
  );
};
