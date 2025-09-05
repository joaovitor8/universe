"use client"

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import axios from 'axios';

const NEWS = [
	{ label: "Articles", value: "articles" },
	{ label: "Blogs", value: "blogs" },
	{ label: "Reports", value: "reports" }
];

type FormData = {
	name: string;
	email: string;
	news: string[];
};

export const NewsCreateForm = () => {
	const [formData, setFormData] = useState<FormData>({ name: '', email: '', news: [] });

	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<string | null>(null);


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
			await axios.post('http://127.0.0.1:4000/db/news/user', formData );
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

	useEffect(() => {
		if (message) {
			const timer = setTimeout(() => setMessage(null), 5000);
			return () => clearTimeout(timer);
		}
	}, [message]);

	return (
		<form onSubmit={handleSubmit} className='border border-purple-700 p-4 rounded-xl shadow-md w-1/2'>
			<h2 className='text-lg font-bold mb-4'>Sign up to receive universe news</h2>
			{message && <div className="mb-4">{message}</div>}

			<div className='mb-4 space-x-3'>
				<label htmlFor="name">Name:</label>
				<Input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
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
					onChange={handleInputChange}
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
							checked={formData.news.includes(type.value)}
							onChange={handleCheckboxChange}
						/>
						<span className='pl-1 '>{type.label}</span>
					</label>
				))}
			</div>

			<Button type="submit" disabled={loading}>
				{loading ? 'Sending...' : 'Subscribe'}
			</Button>
		</form>
	);
}
