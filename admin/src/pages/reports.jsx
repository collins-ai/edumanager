import Areachart from "../components/areachart"
import Piechart from "../components/piechart"
import Progressbar from "../components/progressbar"
import Reportscard from "../components/reportscard"

const Reports = () => {
  const cards = [
    { _id: 1, title: `New enrollments`, value: 128 },
    { _id: 2, title: `Graduates`, value: 34 },
    { _id: 3, title: `Completion rate`, value: `72%` },
    { _id: 4, title: `Active students`, value: 412 }
  ]

  const students = [
    { _id: 1, course: `english`, students: 180, completion: 81 },
    { _id: 2, course: `mathematics`, students: 142, completion: 67 },
    { _id: 3, course: `computer engineering`, students: 90, completion: 54 },
    { _id: 4, course: `chemistry`, students: 66, completion: 75 }
  ]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <select name="" id="" className="bg-white w-35 px-4 py-2 outline-none rounded-lg">
          <option value="30">Last 30 days</option>
          <option value="7">Last 7 days</option>
          <option value="1">Last 1 day</option>
        </select>
        <select name="" id="" className="bg-white w-35 px-4 py-2 outline-none rounded-lg">
          <option value="all">All courses</option>
          <option value="english">english</option>
          <option value="mathematics">mathematics</option>
          <option value="computer engineering" className="w-full line-clamp-1">computer</option>
          <option value="chemistry">chemistry</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-4">
        {cards.map(({ _id, title, value }) =>
          <Reportscard key={_id} title={title} value={value} />
        )}
      </div>
      <Areachart />
      <Piechart />
      <div className="bg-white flex flex-col gap-4 p-4 rounded-xl shadow-sm shadow-neutral-200">
        <p className="font-bold">Course performance</p>
        <div className="overflow-auto">
          <div className="w-max font-semibold bg-neutral-100 flex gap-5 p-2 sm:w-full">
            <span className="w-30 sm:w-2/10">Course</span>
            <span className="w-30 sm:w-1/10">Students</span>
            <span className="w-30 sm:w-1/10">Completion</span>
            <span className="w-40 sm:w-2/10">Avg. progress</span>
          </div>
          <div className="">
            {students.map(({ _id, course, students, completion }) => 
              <div key={_id} className="w-max flex items-center gap-5 p-2 border-b border-b-neutral-100 sm:w-full">
                <span className="w-30 line-clamp-1 sm:w-2/10">{course}</span>
                <span className="w-30 line-clamp-1 sm:w-1/10">{students}</span>
                <span className="w-30 line-clamp-1 sm:w-2/10">{completion}%</span>
                <div className="w-40 sm:w-2/10">
                  <Progressbar value={completion} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports