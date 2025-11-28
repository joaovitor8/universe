import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";


// Componente para seções de conteúdo
export const SectionCard = ({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);



// Componente para exibir dados em linhas
export const DataRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="py-2 border-b border-slate-800/50 flex justify-between items-center text-sm">
    <span className="text-slate-400">{label}</span>
    <span className="font-medium">{value || 'N/A'}</span>
  </div>
);

