import { StarwarToasts } from "@/utils/starwarToasts"
import { AxiosError } from "axios"

export const handleRequestError = (
  error: AxiosError | any,
  defaultMessage = "An unexpected error occurred."
) => {
  let useMessage = null
  let statusCode = error.response?.status?.toString()
  if (statusCode?.startsWith("4") || statusCode?.startsWith("5")) {
    const data = error?.response?.data
    useMessage =
      data?.message ||
      data?.challenge ||
      (data?.errors && data?.errors[0]?.message) ||
      error?.message ||
      defaultMessage
  }

  if (useMessage) StarwarToasts.error(useMessage)
}
