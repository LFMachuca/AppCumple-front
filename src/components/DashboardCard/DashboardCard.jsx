import React from 'react'

const DashboardCard = ({children}) => {
  return (
    <div className=' w-full bg-white p-4  rounded-xl flex flex-col gap-3  '>
      {children}
    </div>
  )
}

export default DashboardCard