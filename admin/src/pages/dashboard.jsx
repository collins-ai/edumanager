import React from 'react'
import Card from '../components/card'
import { BiSolidBook, BiSolidGraduation, BiSolidUser } from 'react-icons/bi'
import { MdAdd, MdRateReview } from 'react-icons/md'

const Dashboard = () => {
  const cards = [
    { _id: 1, title: `Total Students`, value: `4`, icon: BiSolidUser },
    { _id: 2, title: `Active Courses`, value: `3`, icon: BiSolidBook },
    { _id: 3, title: `Gradutes`, value: `0`, icon: BiSolidGraduation },
    { _id: 4, title: `Success Rate`, value: `0%`, icon: MdRateReview }
  ]

  const students = [
    { _id: 1, name: `Paul`, course: `english`, enrollment: `Oct 1 2024`, status: `active`, actions: [
      { _id: 1, value: `edit` }, { _id: 2, value: `delete` }
    ] },
    { _id: 2, name: `Daniel`, course: `mathematics`, enrollment: `Oct 1 2024`, status: `active`, actions: [
      { _id: 1, value: `edit` }, { _id: 2, value: `delete` }
    ] },
    { _id: 3, name: `Kesha`, course: `computer engineering`, enrollment: `Oct 1 2024`, status: `active`, actions: [
      { _id: 1, value: `edit` }, { _id: 2, value: `delete` }
    ] },
    { _id: 4, name: `Tega`, course: `chemistry`, enrollment: `Oct 1 2024`, status: `active`, actions: [
      { _id: 1, value: `edit` }, { _id: 2, value: `delete` }
    ] }
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
          <button type="button" className="bg-blue-500 text-white flex items-center gap-2 px-4 py-2 rounded-lg">
            <MdAdd className="text-2xl" />
            <span>Add Student</span>
          </button>
        </div>
        <div className="">
          <div className="bg-neutral-100 flex gap-5 p-2 overflow-auto">
            <span className="min-w-30">ID</span>
            <span className="min-w-30">Name</span>
            <span className="min-w-30">Course</span>
            <span className="min-w-30">Enrollment Date</span>
            <span className="min-w-30">Status</span>
            <span className="min-w-30">Actions</span>
          </div>
          <div className="overflow-auto">
            {students.map(({ _id, name, course, enrollment, status, actions }) => 
              <div key={_id} className="flex gap-5 p-2 border-b border-b-neutral-100">
                <span className="min-w-30 line-clamp-1">{_id}</span>
                <span className="min-w-30 line-clamp-1">{name}</span>
                <span className="min-w-30 line-clamp-1">{course}</span>
                <span className="min-w-30 line-clamp-1">{enrollment}</span>
                <span className="min-w-30 line-clamp-1">{status}</span>
                <span className="min-w-30 line-clamp-1">
                  {actions.map(({ _id, value }) => 
                    <button key={_id} type="button">{value}</button>
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard