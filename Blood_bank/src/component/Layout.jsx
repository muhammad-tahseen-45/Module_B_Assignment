import React from 'react'
import Blood_info from './Blood_info'
import { Link } from 'react-router-dom'
import { Paper } from '@mui/material'

function Layout() {
  return (
    <>
      <div><Blood_info/></div>
      <div className="mt-4">
        <Paper className="p-4">
          <div className="mb-4">
            <Link to={"/donate_reg"} className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
              Register for Donation
            </Link>
          </div>
          <div>
            <Link to={"/cards"} className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
              Check who is available for donation
            </Link>
          </div>
        </Paper>
      </div>
    </>
  )
}

export default Layout
