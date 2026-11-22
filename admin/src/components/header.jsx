import { Link } from "react-router"
import { BiSearch, BiSolidGraduation, BiSolidUser } from "react-icons/bi"

const Header = ({ setNavmenu }) => {
  const handleSearch = (e) => {
    e.preventDefault()
  }

  const openNavmenu = () => {
    setNavmenu(previous => !previous)
    document.body.classList.add(`overflow-hidden`)
  }

  return (
    <header className="bg-white p-4 flex flex-col gap-8 rounded-xl">
      <div onClick={openNavmenu} className="text-blue-500 flex items-center gap-2 sm:hidden">
        <BiSolidGraduation className="text-4xl" />
        <span className="text-2xl font-bold">EduManager</span>
      </div>
      <div className="flex justify-between items-center gap-5">
        <form onSubmit={handleSearch} className="bg-neutral-100 rounded-lg relative">
          <button type="submit" className="absolute top-1/2 -translate-y-1/2 left-2 text-xl">
            <BiSearch />
          </button>
          <input type="search" name="" id="" placeholder="Search student..." className="p-2 ps-8 py-1.5 outline-none w-full" />
        </form>
        <Link to={`/settings`} className="flex items-center gap-2">
          <BiSolidUser className="bg-blue-500 text-white text-3xl p-1 rounded-full" />
          <span className="">Admin</span>
        </Link>
      </div>
    </header>
  )
}

export default Header