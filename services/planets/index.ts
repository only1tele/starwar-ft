import { handleRequestError } from "@/helper"
import { StarwarsConstants } from "@/helper/starwarsConstants"
import Request from "services"
import { Endpoints } from "services/endpoints"

import { GetPlanetResponse, Planet, PlanetDetails } from "./types"

export const getPlanets = async (
  page = 1,
  size = StarwarsConstants.DEFAULT_PAGE_SIZE
) => {
  try {
    const response = await Request.get<GetPlanetResponse>(Endpoints.getPlanets)
    return response
  } catch (error) {
    handleRequestError(error)
  }
}

export const getPlanetById = async (id: string) => {
  try {
    const response = await Request.get<PlanetDetails>(
      Endpoints.getPlanetsById(id)
    )
    return response
  } catch (error) {
    handleRequestError(error)
  }
}
