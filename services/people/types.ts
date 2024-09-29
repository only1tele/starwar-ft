export interface GetPeopleResponse {
  count: number
  next: number | null
  prev: number | null
  results: Array<People>
}

export interface People {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
}

export interface PeopleDetails extends People {
  homeworld: string
  films: string[]
  vehicles: string[]
  starships: string[]
}
