export interface GetPlanetResponse {
  count: number
  next: number | null
  prev: number | null
  records: Array<{ planets: Array<Planet> }>
}

export interface Planet {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
}

export interface PlanetDetails extends Planet {
  residents: string[]
  films: string[]
}
