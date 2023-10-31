import React from 'react'

const InnerSectionContainer = ({children}) => {
  return (
    <div className={` mx-auto px-5 md:px-1 py-10`}>
        {children}
    </div>
  )
}

export default InnerSectionContainer