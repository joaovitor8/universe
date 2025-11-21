import { SolarSystemNav } from "@/components/componentsPages/solarSystem/SolarSystemNav";

export default function SolarSystemLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Solar System</h1>
        <p className="text-muted-foreground mt-2">Select a celestial body to learn more about it.</p>
      </div>
      <SolarSystemNav />

      <main className="mt-12"> {children} </main>
    </section>
  );
}
