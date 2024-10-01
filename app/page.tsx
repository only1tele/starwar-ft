"use client"

import { FC, useEffect, useState } from "react"
import { getPeople } from "@/services/people"
import { People } from "@/services/people/types"

import { PeopleDataTable } from "@/components/datatable/PeopleDataTable/PeopleDataTable"
import { columns } from "@/components/datatable/PeopleDataTable/PeopleDataTableColumns"

interface TableParams {
  pagination: {
    current: number
    pageSize: number
    totalCount: number
    onPageChange: (page: number) => void
  }
}
const IndexPage: FC = () => {
  const [data, setData] = useState<Array<People>>([])
  const [loading, setLoading] = useState(true)
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      totalCount: 0,
      onPageChange: (newPage: number) => {
        setTableParams((prev) => ({
          ...prev,
          pagination: {
            ...prev.pagination,
            current: newPage,
          },
        }))
      },
    },
  })

  const fetchData = async () => {
    setLoading(true)
    const response = await getPeople(tableParams.pagination.current)
    setLoading(false)
    if (response) {
      setData(response.results)
      setTableParams((prev) => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          totalCount: response.count,
        },
      }))
    }
  }

  useEffect(() => {
    fetchData()
  }, [tableParams.pagination.current])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-lg font-semibold md:text-2xl">People</h1>

      <PeopleDataTable
        columns={columns}
        data={data}
        loading={loading}
        tableParams={tableParams}
      />
    </section>
  )
}

export default IndexPage
