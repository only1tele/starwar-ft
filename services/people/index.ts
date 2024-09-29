import { handleRequestError } from "@/helper"
import { StarwarsConstants } from "@/helper/starwarsConstants"
import Request from "services"
import { Endpoints } from "services/endpoints"

import { GetPeopleResponse, PeopleDetails } from "./types"

export const getPeople = async (
  page = 1,
  size = StarwarsConstants.DEFAULT_PAGE_SIZE
) => {
  try {
    const response = await Request.get<GetPeopleResponse>(Endpoints.getPeople, {
      params: { page, size },
    })
    return response
  } catch (error) {
    handleRequestError(error)
  }
}

export const getPeopleById = async (id: string) => {
  try {
    const response = await Request.get<PeopleDetails>(
      Endpoints.getPeopleById(id)
    )
    return response
  } catch (error) {
    handleRequestError(error)
  }
}
