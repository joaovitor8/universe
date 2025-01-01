import { SolarSystemNav } from "@/components/componentsPages/solarSystem/SolarSystemNav";

export default function SolarSystemLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <SolarSystemNav/>
      {children}
    </div>
  );
}