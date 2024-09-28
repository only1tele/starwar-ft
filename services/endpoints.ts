export const API_BASE_URL = process.env.REACT_APP_BASE_URL

export class Endpoints {
  static getPeople = API_BASE_URL + "/people"
  static getPeopleById = (id: string) => API_BASE_URL + `/people/${id}`
  static getPlanets = API_BASE_URL + "/planets"
  static getPlanetsById = (id: string) => API_BASE_URL + `/planets/${id}`
}
