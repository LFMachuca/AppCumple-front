import React from 'react'

const CardBody = ({children}) => {
  return (
    <div className='flex flex-wrap gap-5 p-2 items-center'>{children}</div>
  )
}

export default CardBody