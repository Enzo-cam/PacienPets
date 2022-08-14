import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-orange-700 text-white uppercase text-center font-bold p-1 mb-3 rounded-md'>
        {children}
    </div>
  )
}

export default Error