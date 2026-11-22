import React from 'react'
import Card from '../components/card'
import { BiEdit, BiSolidBook, BiSolidGraduation, BiSolidUser } from 'react-icons/bi'
import { MdAdd, MdDelete, MdRateReview } from 'react-icons/md'

const Dashboard = () => {
  const cards = [
    { _id: 1, title: `Total Students`, value: `4`, icon: BiSolidUser },
    { _id: 2, title: `Active Courses`, value: `3`, icon: BiSolidBook },
    { _id: 3, title: `Gradutes`, value: `0`, icon: BiSolidGraduation },
    { _id: 4, title: `Success Rate`, value: `0%`, icon: MdRateReview }
  ]

  const students = [
    { _id: 123456789123456789, name: `Paul`, course: `english`, enrollment: `Oct 1 2024`, status: `Active` },
    { _id: 123456789123456788, name: `Daniel`, course: `mathematics`, enrollment: `Oct 1 2024`, status: `Active` },
    { _id: 123456789123456787, name: `Kesha`, course: `computer engineering`, enrollment: `Oct 1 2024`, status: `Active` },
    { _id: 123456789123456786, name: `Tega`, course: `chemistry`, enrollment: `Oct 1 2024`, status: `Active` }
  ]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        {cards.map(({ _id, title, value, icon }) => 
          <Card key={_id} title={title} value={value} Icon={icon} />
        )}
      </div>
      <div className="bg-white rounded-xl flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <p className="font-bold">Recent Students</p>
          <button type="button" className="bg-blue-500 text-white flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer">
            <MdAdd className="text-2xl" />
            <span>Add Student</span>
          </button>
        </div>
        <div className="overflow-auto">
          <div className="w-max font-semibold bg-neutral-100 flex gap-5 p-2 sm:w-full">
            <span className="w-30 sm:w-2/10">ID</span>
            <span className="w-20 sm:w-1/10">Name</span>
            <span className="w-30 sm:w-2/10">Course</span>
            <span className="w-30 sm:w-2/10">Enrollment Date</span>
            <span className="w-20 sm:w-1/10">Status</span>
            <span className="w-40 sm:w-2/10">Actions</span>
          </div>
          <div className="">
            {students.map(({ _id, name, course, enrollment, status }) => 
              <div key={_id} className="w-max flex items-center gap-5 p-2 border-b border-b-neutral-100 sm:w-full">
                <span className="w-30 truncate sm:w-2/10">{_id}</span>
                <span className="w-20 truncate sm:w-1/10">{name}</span>
                <span className="w-30 truncate sm:w-2/10">{course}</span>
                <span className="w-30 truncate sm:w-2/10">{enrollment}</span>
                <div className="w-20 truncate sm:w-1/10">
                  <span className="bg-green-100 text-green-500 font-semibold px-2 py-1">{status}</span>
                </div>
                <div className="flex gap-2 w-40 truncate sm:w-2/10">
                  <button type="button" className="bg-blue-100 text-blue-500 px-2 py-1 flex items-center gap-1 rounded-lg cursor-pointer">
                    <BiEdit />
                    <span className="">edit</span>
                  </button>
                  <button type="button" className="bg-red-100 text-red-500 px-2 py-1 flex items-center gap-1 rounded-lg cursor-pointer">
                    <MdDelete />
                    <span className="">delete</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard