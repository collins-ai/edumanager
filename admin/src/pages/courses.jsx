import { BiEdit } from "react-icons/bi"
import { MdAdd, MdDelete } from "react-icons/md"

const Courses = () => {
  const courses = [
    { _id: 123456789123456789, name: `english`, description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatum.`, duration: 24, status: `Active` },
    { _id: 123456789123456788, name: `mathematics`, description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatum.`, duration: 12, status: `Active` },
    { _id: 123456789123456787, name: `computer engineering`, description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatum.`, duration: 24, status: `Active` },
    { _id: 123456789123456786, name: `chemistry`, description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatum.`, duration: 12, status: `Active` }
  ]

  return (
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
          <span className="w-30 sm:w-2/10">Description</span>
          <span className="w-30 sm:w-2/10">Duration (months)</span>
          <span className="w-20 sm:w-1/10">Status</span>
          <span className="w-40 sm:w-2/10">Actions</span>
        </div>
        <div className="">
          {courses.map(({ _id, name, description, duration, status }) => 
            <div key={_id} className="w-max flex items-center gap-5 p-2 border-b border-b-neutral-100 sm:w-full">
              <span className="w-30 truncate sm:w-2/10">{_id}</span>
              <span className="w-20 truncate sm:w-1/10">{name}</span>
              <span className="w-30 truncate sm:w-2/10">{description}</span>
              <span className="w-30 truncate sm:w-2/10">{duration}</span>
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
  )
}

export default Courses