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
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium capitalize">
            {row.getValue("name")}
          </span>
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
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium capitalize">
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
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium capitalize">
            {row.getValue("gender")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "created",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium capitalize">
            {moment(row.getValue("created")).format("MMM DD, YYYY") || ""}
          </span>
        </div>
      )
    },
  },
]
