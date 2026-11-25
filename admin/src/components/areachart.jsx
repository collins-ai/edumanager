import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 550 },
  { month: "Apr", sales: 480 }
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

const Areachart = () => {
  return (
    <div className="bg-white w-full h-80 flex flex-col gap-4 p-4 rounded-xl">
      <p className="font-bold">Enrollments over time</p>
      <div className="w-full h-70">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Areachart






// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

// <ResponsiveContainer width="100%" height={300}>
//   <BarChart data={data}>
//     <XAxis dataKey="month" />
//     <YAxis />
//     <Tooltip />
//     <Bar dataKey="sales" fill="#10b981" radius={[4, 4, 0, 0]} />
//   </BarChart>
// </ResponsiveContainer>









// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

// const pieData = [
//   { name: "Paid", value: 60 },
//   { name: "Pending", value: 25 },
//   { name: "Failed", value: 15 },
// ]
// const COLORS = ["#10b981", "#f59e0b", "#ef4444"]

// <PieChart width={300} height={300}>
//   <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100}>
//     {pieData.map((_, i) => (
//       <Cell key={i} fill={COLORS[i % COLORS.length]} />
//     ))}
//   </Pie>
//   <Tooltip />
//   <Legend />
// </PieChart>


    

{/* <Pie data={pieData} dataKey="value" nameKey="name"
     innerRadius={60} outerRadius={100} /> */}







//      import {
//   AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
// } from "recharts"

// <ResponsiveContainer width="100%" height={300}>
//   <AreaChart data={data}>
//     <defs>
//       <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="5%" stopColor="#6366f1" stopOpacity={0.5} />
//         <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
//       </linearGradient>
//     </defs>
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis dataKey="month" />
//     <YAxis />
//     <Tooltip />
//     <Area type="monotone" dataKey="sales" stroke="#6366f1" fill="url(#fill)" />
//   </AreaChart>
// </ResponsiveContainer>