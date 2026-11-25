import { useState } from "react"
import { Outlet, useLocation } from "react-router"
import Sidebar from "../components/sidebar"
import Header from "../components/header"

const Home = () => {
  const [navmenu, setNavmenu] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen">
      <Sidebar navmenu={navmenu} setNavmenu={setNavmenu} />
      <div className="bg-neutral-200 w-full flex flex-col gap-8 p-4">
        <Header setNavmenu={setNavmenu} pathname={pathname} />
        <Outlet />
      </div>
    </div>
  )
}

export default Home