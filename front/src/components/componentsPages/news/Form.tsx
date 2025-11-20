"use client"

import { useEffect } from 'react';
import { FormAPI } from './FormAPI';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

type FormData = { name: string; email: string; news: string[]; };
type FormProps = {
  initialData?: FormData;
  onSave?: (email: string, data: FormData) => Promise<void>;
  onCancel?: () => void;
};

const NEWS = [
	{ label: "Articles", value: "articles" },
	{ label: "Blogs", value: "blogs" },
	{ label: "Reports", value: "reports" }
];


export const Form = ({ initialData, onSave, onCancel }: FormProps) => {
	const { formData, setFormData, loading, message, handleInputChange, handleCheckboxChange, handleSubmit } = FormAPI();
  const isEditMode = !!initialData;

  useEffect(() => {
    if (isEditMode) {
      setFormData(initialData);
    } else {
      setFormData({ name: '', email: '', news: [] });
    }
  }, [initialData, isEditMode, setFormData]);

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
    if (isEditMode && onSave && initialData) {
      await onSave(initialData.email, formData);
      onCancel?.();
    } else {
      const payload = { ...formData };
      await handleSubmit(e);
      const ev = new CustomEvent('news:updated', { detail: payload });
      window.dispatchEvent(ev);
    }
	};

	return (
    <Card className="w-full max-w-md animate-fade-in">
      <CardHeader>
        <CardTitle>{isEditMode ? 'Edit Subscriber' : 'Subscribe to our Newsletter'}</CardTitle>
        <CardDescription>{isEditMode ? `Updating information for ${initialData.email}` : 'Get the latest news from the universe delivered to your inbox.'}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          {message && (
            <div className={`text-center p-2 rounded-md text-sm ${
              message.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
            }`}>
              {message.text}
            </div>
          )}

          <div className='flex flex-col gap-1.5'>
            <label htmlFor="name" className="font-medium text-sm">Name</label>
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

          <div className='flex flex-col gap-1.5'>
            <label htmlFor="email" className="font-medium text-sm">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email"
              required
              disabled={isEditMode}
            />
          </div>

          <div>
            <span className='font-medium text-sm block mb-2'>Select Topics:</span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {NEWS.map(type => (
                <label key={type.value} className='flex items-center'>
                  <input
                    type="checkbox"
                    id={`type-${type.value}`}
                    value={type.value}
                    checked={formData.news.includes(type.value)}
                    onChange={handleCheckboxChange}
                    className="accent-purple-700 h-4 w-4"
                  />
                  <span className='pl-2'>{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-6!">
            {isEditMode && (
              <Button type="button" variant="outline" onClick={onCancel} className="w-full">
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Saving...' : isEditMode ? 'Save Changes' : 'Subscribe'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
	);
}
