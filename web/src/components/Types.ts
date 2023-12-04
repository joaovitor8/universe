export interface TypeApod {
  hdurl: string
  url: string
  title: string
  date: string
  explanation: string
  copyright: string
  media_type: string
  // thumbnail_url: string
}

export interface TypeApodGallery {
  url: string
  hdurl: string
  media_type: string
}

// ---

export interface TypeAsteroidsFeed {
  id: string
  name: string
  absolute_magnitude: number
  sentry_object: boolean
  potentially_hazardous: boolean
}

export interface TypeAsteroidsLookup {
  estimated_diameter: {
    miles: number
    kilometers: number
    meters: number
    feet: number
  }
  orbital_data: {
    equinox: string
    observation_date: string
    aphelion_distance: string
    perihelion_distance: string
    semi_major_axis: string
    mean_anomaly: string
    mean_motion: string
    ascending_node_longitude: string
    inclination: string
    perihelion_argument: string
    eccentricity: string
    observations_used: string
    epoch_osculation: string
    minimum_orbit_intersection: string
    perihelion_time: string
    orbital_period: string
    jupiter_tisserand_invariant: string
    orbit_class_description: string
    orbit_class_range: string
    orbit_class_type: string
    orbit_determination_date: string
    orbit_id: string
    orbit_uncertainty: string
  }
}
