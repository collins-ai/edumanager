import { useState } from "react"
import { Outlet } from "react-router"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

const Home = () => {
  const [navmenu, setNavmenu] = useState(false)
  const toggleNavmenu = () => setNavmenu(previous => !previous)

  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col gap-8 p-4">
      <Header toggleNavmenu={toggleNavmenu} />
      {navmenu && <Sidebar toggleNavmenu={toggleNavmenu} />}
      <Outlet />
    </div>
  )
}

export default Home