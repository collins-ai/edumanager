import { BiSolidUser } from "react-icons/bi"

const Reportscard = ({ title, value }) => {
  return (
    <div className="bg-white smwidth flex flex-col gap-2 p-4 rounded-xl shadow-sm shadow-neutral-200 lg:lgwidth">
      <p>{title}</p>
      <span className="text-2xl font-bold">{value}</span>
    </div>
  )
}

export default Reportscard