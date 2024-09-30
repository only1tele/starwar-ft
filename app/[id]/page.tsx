"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getPeopleById } from "@/services/people"
import { People } from "@/services/people/types"
import { Copy, Loader } from "lucide-react"
import moment from "moment"

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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import IF from "@/components/IF"

const PeopleDetailsPage = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<People>()
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
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
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <IF condition={loading}>
        <div className="flex justify-center items-center">
          <Loader className="animate-spin h-8 w-8 text-muted-foreground" />
        </div>
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
                {data?.name}
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Order ID</span>
                </Button>
              </CardTitle>
              <CardDescription>
                Date: {formatDate(data?.created)}
              </CardDescription>
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
                  <span className="capitalize">{data?.name}</span>
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
              Updated <time>{formatDate(data?.created)}</time>
            </div>
          </CardFooter>
        </Card>
      </IF>
    </section>
  )
}

export default PeopleDetailsPage
