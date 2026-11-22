import { NavLink } from "react-router"
import { FaUser } from "react-icons/fa"
import { MdDashboard, MdSettings } from "react-icons/md"
import { BiLogOut, BiSolidBook, BiSolidGraduation, BiSolidReport, BiSolidUser } from "react-icons/bi"

const Sidebar = ({ toggleNavmenu }) => {
  const links = [
    { _id: 1, title: `Dashboard`, path: `/`, icon: <MdDashboard className="text-2xl" /> },
    { _id: 2, title: `Students`, path: `/students`, icon: <BiSolidUser className="text-2xl" /> },
    { _id: 3, title: `Courses`, path: `/courses`, icon: <BiSolidBook className="text-2xl" /> },
    { _id: 4, title: `Reports`, path: `/reports`, icon: <BiSolidReport className="text-2xl" /> },
    { _id: 5, title: `Settings`, path: `/settings`, icon: <MdSettings className="text-2xl" /> }
  ]

  return (
    <nav className="fixed inset-0 flex">
      <div className="bg-white w-4/5 flex flex-col gap-8 p-4">
        <div className="text-blue-500 flex items-center gap-3">
          <BiSolidGraduation className="text-4xl" />
          <span className="text-2xl font-bold">EduManager</span>
        </div>
        <div className="flex flex-col gap-2">
          {links.map(link => 
            <NavLink key={link._id} to={link.path} onClick={toggleNavmenu} className={({isActive}) => `flex items-center gap-2 p-2 ${isActive && 'bg-blue-500 text-white rounded-lg'}`}>
              {link.icon}
              <span>{link.title}</span>
            </NavLink>
          )}
        </div>
        <button type="button" className="bg-blue-500 text-white mt-auto flex items-center gap-2 p-2 rounded-lg">
          <BiLogOut className="text-2xl" />
          <span>Logout</span>
        </button>
      </div>
      <div onClick={toggleNavmenu} className="bg-black/50 w-1/5"></div>
    </nav>
  )
}

export default Sidebar