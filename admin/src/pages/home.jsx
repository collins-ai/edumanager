import { useState } from "react"
import { Outlet } from "react-router"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

const Home = () => {
  const [navmenu, setNavmenu] = useState(false)

  return (
    <div className="flex">
      <Sidebar navmenu={navmenu} setNavmenu={setNavmenu} />
      <div className="bg-neutral-100 min-h-screen w-full flex flex-col gap-8 p-4">
        <Header setNavmenu={setNavmenu} />
        <Outlet />
      </div>
    </div>
  )
}

export default Home