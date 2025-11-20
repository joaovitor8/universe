"use client"

import { useEffect, useState } from "react";
import { Form } from "./Form";
import { FormAPI } from "./FormAPI";

import { Button } from "@/components/ui/Button";
import { Pencil, Trash2 } from "lucide-react";

type NewsUser = { name: string; email: string; news: string[]; };

export const FormUsers = () => {
  const { getForm, handleDelete, handleUpdate } = FormAPI();
  const [items, setItems] = useState<NewsUser[]>([]);
  const [editingUser, setEditingUser] = useState<NewsUser | null>(null);

  useEffect(() => {
    setItems(getForm || []);
  }, [getForm]);

  useEffect(() => {
    const handler = (ev: any) => {
      const detail = ev?.detail;
      if (detail) {
        setItems(prev => [detail, ...prev]);
      }
    };
    window.addEventListener('news:updated', handler);
    return () => window.removeEventListener('news:updated', handler);
  }, []);

  const onDelete = async (email: string) => {
    if (window.confirm("Are you sure you want to delete this subscriber?")) {
      await handleDelete(email);
      setItems(prev => prev.filter(i => i.email !== email));
    }
  };

  const onUpdate = async (email: string, data: NewsUser) => {
    await handleUpdate(email, data);
    setItems(prev => prev.map(user => user.email === email ? { ...user, ...data } : user));
  };

  if (editingUser) {
    return <Form initialData={editingUser} onSave={onUpdate} onCancel={() => setEditingUser(null)} />
  }

  return(
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-center mb-6">Community Subscribers</h2>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {
            items.map((e) => (
              <div key={e.email} className="border rounded-lg border-slate-800 bg-slate-900/50 p-4 shadow w-full flex flex-col justify-between">
                <div>
                  <p className="wrap-break-words text-sm"><span className="font-semibold text-slate-400">Name:</span> {e.name}</p>
                  <p className="wrap-break-words text-sm"><span className="font-semibold text-slate-400">Email:</span> {e.email}</p>
                  <p className="wrap-break-words text-sm capitalize"><span className="font-semibold text-slate-400">Topics:</span> {Array.isArray(e.news) ? e.news.join(', ') : (() => { try { return JSON.parse(e.news).join(', ') } catch { return String(e.news) } })()}</p>
                </div>
                <div className="flex gap-2 self-end mt-3">
                  <Button onClick={() => setEditingUser(e)} variant="outline" size="sm" className="flex items-center">
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button onClick={() => onDelete(e.email)} variant="destructive" size="sm" className="flex items-center">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            ))
          }
        </div>
      ) : (
        <p className="text-center text-slate-500">No subscribers yet.</p>
      )}
    </div>
  )
}
