import { SolarSystemNav } from "@/components/componentsPages/solarSystem/SolarSystemNav";

export default function SolarSystemLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <SolarSystemNav/>
      {children}
    </main>
  );
}
