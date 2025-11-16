
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

	// Substituir o onSubmit do form para disparar evento após o cadastro
	const onSubmit = async (e: any) => {
		e.preventDefault();
		// captura os dados atuais antes do hook possivelmente resetar o form
		const payload = { ...formData };
		// aguarda o submit original
		await handleSubmit(e);
		// notifica demais componentes que um novo registro foi criado
		const ev = new CustomEvent('news:updated', { detail: payload });
		window.dispatchEvent(ev);
	};

	return (
		<form
			onSubmit={onSubmit}
			className='border border-purple-700 p-4 rounded-xl w-full max-w-md mx-auto shadow-md'
		>
			<h2 className='text-lg font-bold mb-4 text-center'>Sign up to receive universe news</h2>
			{message && <div className="mb-4 text-center">{message}</div>}

			<div className='mb-4 flex flex-col gap-2'>
				<label htmlFor="name" className="font-medium">Name:</label>
				<Input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
					placeholder="Your name"
					required
					className="w-full"
				/>
			</div>

			<div className='mb-4 flex flex-col gap-2'>
				<label htmlFor="email" className="font-medium">Email:</label>
				<Input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					placeholder="Your email"
					required
					className="w-full"
				/>
			</div>

			<div className='mb-4'>
				<span className='mr-3 font-medium block mb-2'>Select the type of news:</span>
				<div className="flex flex-col sm:flex-row sm:items-center gap-2">
					{NEWS.map(type => (
						<label key={type.value} className='flex items-center mr-0 sm:mr-3'>
							<input
								type="checkbox"
								id={`type-${type.value}`}
								value={type.value}
								checked={formData.news.includes(type.value)}
								onChange={handleCheckboxChange}
								className="accent-purple-700"
							/>
							<span className='pl-1'>{type.label}</span>
						</label>
					))}
				</div>
			</div>

			<Button type="submit" disabled={loading} className="w-full mt-2">
				{loading ? 'Sending...' : 'Subscribe'}
			</Button>
		</form>
	);
}
