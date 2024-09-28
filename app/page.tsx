import { PeopleDataTable } from "../components/datatable/PeopleDataTable/PeopleDataTable"
import { columns } from "../components/datatable/PeopleDataTable/PeopleDataTableColumns"

const data = [
  {
    name: "Chewbacca",
    height: "228",
    mass: "112",
    hair_color: "brown",
    skin_color: "unknown",
    eye_color: "blue",
    birth_year: "200BBY",
    gender: "male",
    created: "2014-12-10T16:42:45.066000Z",
  },
  {
    name: "Han Solo",
    height: "180",
    mass: "80",
    hair_color: "brown",
    skin_color: "fair",
    eye_color: "brown",
    birth_year: "29BBY",
    gender: "male",
    created: "2014-12-10T16:49:14.582000Z",
  },
  {
    name: "Greedo",
    height: "173",
    mass: "74",
    hair_color: "n/a",
    skin_color: "green",
    eye_color: "black",
    birth_year: "44BBY",
    gender: "male",
    created: "2014-12-10T17:03:30.334000Z",
  },
]
export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 space-x-4">
      <PeopleDataTable columns={columns} data={data} />
    </section>
  )
}
