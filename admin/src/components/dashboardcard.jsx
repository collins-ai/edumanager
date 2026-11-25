import { BiSolidUser } from "react-icons/bi"

const Dashboardcard = ({ title, value, Icon }) => {
  return (
    <div className="bg-white smwidth flex flex-col gap-1 p-4 rounded-xl shadow-sm shadow-neutral-200 lg:lgwidth">
      <Icon className="bg-blue-500 text-white text-3xl p-1 rounded-lg" />
      <p>{title}</p>
      <span>{value}</span>
    </div>
  )
}

export default Dashboardcard