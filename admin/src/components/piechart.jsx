import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

const COLORS = ["#17aae4", "#2bf119", "#a7a7a7"]
const pieData = [
  { name: "Paid", value: 60 },
  { name: "Pending", value: 25 },
  { name: "Failed", value: 15 },
]

// import { useEffect, useState } from "react"

// function Dashboard() {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     fetch("/api/stats")
//       .then((res) => res.json())
//       .then(setData)
//   }, [])

//   if (!data.length) return <p>Loading...</p>
//   return <SalesChart data={data} />
// }

const Piechart = () => {
  return (
    <div className="bg-white w-full h-80 p-4 rounded-xl">
      <p className="font-bold">Students by status</p>
      <PieChart width={`100%`} height={250}>
        <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={80} outerRadius={100}>
          {pieData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default Piechart