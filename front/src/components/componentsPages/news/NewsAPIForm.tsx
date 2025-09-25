"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';

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
			setMessage('Please fill in all fields.');
			return;
		}

		setLoading(true);
		try {
			await axios.post('http://127.0.0.1:4000/db/news/postUser', formData );
			setMessage('Registration successful!');
			setFormData({ name: '', email: '', news: [] });

      console.log(formData);
		} catch (error) {
			if (axios.isAxiosError(error) && error.response?.data?.error) {
				console.error('What went wrong?:', error.response.data.error);
				setMessage(error.response.data.error);
			} else {
				console.error('What went wrong?:', error);
				setMessage(String(error));
			}
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
      console.error("Front-End: Error trying to get users ", error);
    }
  };


	// -----------------------------------------------------------


	const handleDelete = async (email: string) => {
    try {
      await axios.delete(`http://127.0.0.1:4000/db/news/deleteUser?email=${email}`);
      alert('User deleted successfully');
      await getUsersForm(); // Atualiza a lista após deletar
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
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
