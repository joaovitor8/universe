import { SolarSystemNav } from "@/components/componentsPages/solarSystem/SolarSystemNav";

export default function SolarSystemLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <SolarSystemNav/>
      {children}
    </div>
  );
}
