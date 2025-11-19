"use client"

import { useCallback, useState } from "react"
import { TypeAsteroidsLookup } from "@/components/Types"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Select } from "@/components/ui/Select"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import Loading from "@/app/loading"


const DataRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="py-2 border-b border-slate-800/50 flex justify-between items-center text-sm gap-4">
    <span className="text-slate-400">{label}</span>
    <span className="font-medium text-right wrap-break-words">{value || 'N/A'}</span>
  </div>
);

export const Lookup = () => {
  const [asteroidsID, setAsteroidsID] = useState('')
  const [asteroidsLookup, setAsteroidsLookup] = useState<TypeAsteroidsLookup | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedApproachDate, setSelectedApproachDate] = useState<string>('')

  const GetAsteroidsLookup = useCallback(async () => {
    if (!asteroidsID) {
      setError("Please enter an Asteroid ID.");
      return;
    }
    setLoading(true);
    setError(null);
    setAsteroidsLookup(null);

    try {
      const response = await fetch(`http://localhost:3333/api/neows/lookup?id=${asteroidsID}`);
      if (!response.ok) {
        throw new Error(`The asteroid ID may be incorrect or the API is unavailable.`);
      }
      const data = await response.json();
      setAsteroidsLookup(data);

      if (data.close_approach?.length > 0) {
        setSelectedApproachDate(data.close_approach[0].close_approach_date);
      } else {
        setSelectedApproachDate('');
      }
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }, [asteroidsID]);

  const selectedApproachData = asteroidsLookup?.close_approach.find(
    (approach) => approach.close_approach_date === selectedApproachDate
  );

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Asteroid Lookup</h1>
        <p className="text-muted-foreground mt-2">Get detailed information about a specific asteroid by its ID.</p>
      </div>

      <div className="flex justify-center items-center gap-2 mb-8">
        <Input
          type="text"
          placeholder="Enter the Asteroid ID"
          onChange={(e) => setAsteroidsID(e.target.value)}
          className="max-w-xs"
        />
        <Button onClick={GetAsteroidsLookup} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </Button>
      </div>

      {loading && <Loading />}
      {error && (
        <div className="text-center p-12 border-2 border-dashed border-red-500 rounded-lg">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {!loading && !error && !asteroidsLookup && (
        <div className="text-center p-12 border-2 border-dashed border-slate-700 rounded-lg">
          <p className="text-muted-foreground">Enter an Asteroid ID to see its detailed information.</p>
        </div>
      )}

      {asteroidsLookup && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Orbital Data</CardTitle>
              <CardDescription>Orbit information for {asteroidsLookup.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <DataRow label="Orbit Class" value={asteroidsLookup.orbital_data.orbit_class_type} />
              <DataRow label="Aphelion Distance" value={asteroidsLookup.orbital_data.aphelion_distance} />
              <DataRow label="Perihelion Distance" value={asteroidsLookup.orbital_data.perihelion_distance} />
              <DataRow label="Orbital Period" value={`${Math.round(Number(asteroidsLookup.orbital_data.orbital_period))} days`} />
              <DataRow label="Mean Anomaly" value={asteroidsLookup.orbital_data.mean_anomaly} />
              <DataRow label="Inclination" value={asteroidsLookup.orbital_data.inclination} />
              <DataRow label="Equinox" value={asteroidsLookup.orbital_data.equinox} />
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Estimated Diameter</CardTitle>
              </CardHeader>
              <CardContent>
                <DataRow label="Kilometers" value={`${asteroidsLookup.estimated_diameter.kilometers.estimated_diameter_min.toFixed(3)} - ${asteroidsLookup.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}`} />
                <DataRow label="Meters" value={`${asteroidsLookup.estimated_diameter.meters.estimated_diameter_min.toFixed(3)} - ${asteroidsLookup.estimated_diameter.meters.estimated_diameter_max.toFixed(3)}`} />
              </CardContent>
            </Card>

            {selectedApproachData && (
              <Card>
                <CardHeader>
                  <CardTitle>Close Approach Data</CardTitle>
                  <CardDescription>Select a date to see approach details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select
                    placeholder="Select approach date"
                    options={asteroidsLookup.close_approach.map(a => ({ value: a.close_approach_date, label: a.close_approach_date }))}
                    value={selectedApproachDate}
                    onChange={setSelectedApproachDate}
                  />
                  <div>
                    <h4 className="font-semibold mb-2">Relative Velocity</h4>
                    <DataRow label="Km/h" value={Number(selectedApproachData.relative_velocity.kilometers_hour).toLocaleString()} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Miss Distance</h4>
                    <DataRow label="Kilometers" value={Number(selectedApproachData.miss_distance.kilometers).toLocaleString()} />
                    <DataRow label="Lunar" value={Number(selectedApproachData.miss_distance.lunar).toLocaleString()} />
                  </div>
                  <DataRow label="Orbiting Body" value={selectedApproachData.orbiting_body} />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  )
}