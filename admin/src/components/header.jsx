import { BiSearch, BiSolidGraduation, BiSolidUser } from "react-icons/bi"

const Header = ({ toggleNavmenu }) => {
  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <header className="bg-white p-4 flex flex-col gap-8 rounded-xl">
      <div onClick={toggleNavmenu} className="text-blue-500 flex items-center gap-3">
        <BiSolidGraduation className="text-4xl" />
        <span className="text-2xl font-bold">EduManager</span>
      </div>
      <div className="flex justify-between items-center">
        <form onSubmit={handleSearch} className="bg-neutral-100 rounded-lg relative">
          <button type="submit" className="absolute top-1/2 -translate-y-1/2 left-2 text-xl">
            <BiSearch />
          </button>
          <input type="search" name="" id="" placeholder="Search student..." className="p-2 ps-8 py-1.5 outline-none" />
        </form>
        <div className="flex items-center gap-2">
          <BiSolidUser className="bg-blue-500 text-white text-3xl p-1 rounded-full" />
          <span className="">Admin</span>
        </div>
      </div>
      {/* <div className="">
        ID, Name, Description, Duration (months), Status, Actions
      </div> */}
    </header>
  )
}

export default Header