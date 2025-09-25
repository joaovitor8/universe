
import { NewsAPIForm } from './NewsAPIForm';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';


const NEWS = [
	{ label: "Articles", value: "articles" },
	{ label: "Blogs", value: "blogs" },
	{ label: "Reports", value: "reports" }
];


export const NewsForm = () => {
	const { formData, loading, message, handleInputChange, handleCheckboxChange, handleSubmit } = NewsAPIForm();

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
