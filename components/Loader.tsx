import React from "react"
import { Loader } from "lucide-react"

interface Props {}

const LoaderUI: React.FC<Props> = () => {
  return (
    <div className="flex justify-center items-center w-full h-64">
      <Loader className="animate-spin h-8 w-8 text-muted-foreground" />
    </div>
  )
}

export default LoaderUI
