"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getPeopleById } from "@/services/people"
import { People } from "@/services/people/types"
import { ChevronLeft, Copy, Loader } from "lucide-react"
import moment from "moment"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb"
import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Separator } from "@/components/ui/Separator"
import IF from "@/components/IF"
import LoaderUI from "@/components/Loader"

const PeopleDetailsPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter()
  const [data, setData] = useState<People>()
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    // setLoading(true)
    const response = await getPeopleById(params?.id)
    setLoading(false)
    if (response) setData(response)
  }

  useEffect(() => {
    fetchData()
  }, [params?.id])

  function formatDate(date: string) {
    return moment(date).format("MMM DD, YYYY")
  }

  const handleNavigation = () => {
    router.push(`/`)
  }
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <IF condition={loading}>
        <LoaderUI />
      </IF>
      <IF condition={!loading}>
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>{data?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Card>
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={handleNavigation}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                {data?.name}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Person Details</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span className="capitalize">{data?.name}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Height</span>
                  <span className="capitalize">{data?.height}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Mass</span>
                  <span className="capitalize">{data?.mass}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Hair color</span>
                  <span className="capitalize">{data?.hair_color}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Skin color</span>
                  <span className="capitalize">{data?.skin_color}</span>
                </li>
              </ul>
              <Separator className="my-4" />
              <ul className="grid gap-3">
                <div className="font-semibold">Homeworld </div>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span className="capitalize">{data?.homeworld}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Climate</span>
                  <span className="capitalize">{data?.height}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Terrain</span>
                  <span className="capitalize">{data?.mass}</span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Created <time>{formatDate(data?.created || "")}</time>
            </div>
          </CardFooter>
        </Card>
      </IF>
    </section>
  )
}

export default PeopleDetailsPage
