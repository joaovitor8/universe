import { useEffect, useState } from "react";
import { NewsAPIForm } from "./NewsAPIForm";


export const NewsFormUsers = () => {
  const { getForm, handleDelete } = NewsAPIForm();

  // usa estado local para permitir atualizações imediatas na UI
  const [items, setItems] = useState<any[]>(getForm || []);

  // sincroniza quando getForm inicial mudar (p.ex. carregamento inicial)
  useEffect(() => {
    setItems(getForm || []);
  }, [getForm]);

  // escuta eventos disparados pelo formulário para atualizações em tempo real
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

  // wrapper para deletar também atualizar o estado local
  const onDelete = async (email: string) => {
    await handleDelete(email);
    setItems(prev => prev.filter(i => i.email !== email));
  };

  return(
    <div className="p-4 w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {
          items.map((e, index) => (
            <div key={index} className="border rounded border-purple-700 p-4 shadow w-full">
              <p className="wrap-break-word"><span className="font-semibold">Name:</span> {e.name}</p>
              <p className="wrap-break-word"><span className="font-semibold">Email:</span> {e.email}</p>
              <p className="wrap-break-word"><span className="font-semibold">News:</span> {Array.isArray(e.news) ? e.news.join(', ') : (() => { try { return JSON.parse(e.news).join(', ') } catch { return String(e.news) } })()}</p>
              <button onClick={() => onDelete(e.email)} className="bg-red-700 hover:bg-red-900 px-3 py-1 rounded mt-3 transition" > Delete </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
