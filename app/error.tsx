"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/Button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="container flex items-center justify-center h-[500px]">
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-3xl font-semibold">Something went wrong!</h3>
        <p className="text-md text-gray-500">
          An unexpected error occurred. Please refresh the page or try again
          later.
        </p>
        <Button className="mt-4" onClick={() => reset()}>
          Refresh Page
        </Button>
      </div>
    </section>
  )
}
