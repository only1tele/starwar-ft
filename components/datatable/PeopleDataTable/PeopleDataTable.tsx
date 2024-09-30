import { useRouter } from "next/navigation"
import { People } from "@/services/people/types"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table"

import { DataTablePagination } from "../common/DataTablePagination"
import { PeopleDataTableToolbar } from "./PeopleDataTableToolbar"

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[]
  data: TData[]
  loading: boolean
  tableParams: {
    pagination: {
      current: number
      pageSize: number
    }
  }
}

export function PeopleDataTable<TData>({
  columns,
  data,
  loading,
  tableParams,
}: DataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })
  const router = useRouter()
  const handleNavigation = (id: string) => {
    router.push(`/people/${id}`)
  }
  return (
    <div className="space-y-4">
      <PeopleDataTableToolbar table={table} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  className="cursor-pointer"
                  onClick={() =>
                    handleNavigation((row.original as { id: string }).id)
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination tableParams={tableParams as any} />
    </div>
  )
}
