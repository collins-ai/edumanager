import { BiSolidBook, BiSolidGraduation, BiSolidUser } from 'react-icons/bi'
import { MdRateReview } from 'react-icons/md'
import Table from '../components/table'
import Dashboardcard from '../components/dashboardcard'

const Dashboard = () => {
  const cards = [
    { _id: 1, title: `Total Students`, value: `4`, icon: BiSolidUser },
    { _id: 2, title: `Active Courses`, value: `3`, icon: BiSolidBook },
    { _id: 3, title: `Gradutes`, value: `0`, icon: BiSolidGraduation },
    { _id: 4, title: `Success Rate`, value: `0%`, icon: MdRateReview }
  ]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        {cards.map(({ _id, title, value, icon }) => 
          <Dashboardcard key={_id} title={title} value={value} Icon={icon} />
        )}
      </div>
      <Table />
    </div>
  )
}

export default Dashboard