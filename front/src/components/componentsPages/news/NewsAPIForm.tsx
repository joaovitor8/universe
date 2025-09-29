"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';


type FormData = {
  name: string;
  email: string;
  news: string[];
};

type NewsUser = {
  name: string;
  email: string;
  news: string[];
};


export const NewsAPIForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', news: [] });
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<string | null>(null);

	const [getForm, setGetForm] = useState<NewsUser[]>([]);


	// -----------------------------------------------------------


  // Campos de texto
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	// Checkboxes
	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = e.target;
		setFormData(prev => ({ ...prev, news: checked ? [...prev.news, value] : prev.news.filter(n => n !== value) }));
	};


	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setMessage(null);

		if (!formData.name || !formData.email || formData.news.length === 0) {
			setMessage('Please fill in all fields ( Por favor preencha todos os campos )');
			return;
		}

		setLoading(true);
		try {
			await axios.post('http://127.0.0.1:4000/db/news/postUser', formData );
			setMessage('Registration successful! ( Registro realizado com sucesso! )');
			setFormData({ name: '', email: '', news: [] });

			await getUsersForm();
		} catch (error) {
			console.error('Error submitting form ( Erro ao enviar formulário ):', error);
			setMessage('Error submitting form ( Erro ao enviar formulário )');
		} finally {
			setLoading(false);
		}
	};


	// -----------------------------------------------------------


  const getUsersForm = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:4000/db/news/getUsers");
      setGetForm(response.data);
    } catch (error) {
      console.error("Error trying to get users ( Erro ao buscar usuários )", error);
    }
  };


	// -----------------------------------------------------------


	const handleDelete = async (email: string) => {
    try {
      await axios.delete(`http://127.0.0.1:4000/db/news/deleteUser/${email}`);
      alert('User deleted successfully ( Usuário excluído com sucesso )');
      await getUsersForm();
    } catch (error) {
      console.error('Error deleting user ( Erro ao excluir usuário )', error);
      alert('Error deleting user ( Erro ao excluir usuário )');
    }
  };


	useEffect(() => {
		if (message) {
			const timer = setTimeout(() => setMessage(null), 5000);
			return () => clearTimeout(timer);
		}

		getUsersForm();
	}, [message]);


  return { handleSubmit, message, formData, handleInputChange, handleCheckboxChange, loading, getForm, handleDelete }
}
