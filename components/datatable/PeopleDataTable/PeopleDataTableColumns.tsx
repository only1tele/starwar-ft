"use client"

import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"

import { DataTableColumnHeader } from "../common/DataTableColumnHeader"

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 max-w-[250px] md:w-[250px]">
          <span className=" truncate font-medium">{row.getValue("name")}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "birth_year",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Birth Year" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 max-w-[100px] md:w-[100px]">
          <span className="truncate font-medium capitalize">
            {row.getValue("birth_year")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gender" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 max-w-[120px] md:w-[120px]">
          <span className="truncate font-medium capitalize">
            {row.getValue("gender")}
          </span>
        </div>
      )
    },
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue) return true
      return row.getValue(columnId) === filterValue
    },
  },
  {
    accessorKey: "created",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 w-[100px]">
          <span className="max-w-[100px] truncate font-medium capitalize">
            {moment(row.getValue("created")).format("MMM DD, YYYY") || ""}
          </span>
        </div>
      )
    },
  },
]
