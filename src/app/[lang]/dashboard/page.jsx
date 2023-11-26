import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const DashBoardPage = async () => {

    const session = await getServerSession()
    if (!session) {
        redirect("/")
    }
    
  return (
    <div>DashBoardPage</div>
  )
}

export default DashBoardPage