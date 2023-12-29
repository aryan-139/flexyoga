import React from 'react'
import { Box } from '@mui/material'
import PieChart from '../components/pieChart'

const Instructor = () => {

  return (
    <div>
        <Box sx={{marginTop:"3%", marginLeft:"4%", marginRight:"4%", backgroundColor:"whitesmoke", height:"800px"}}>
          <Box id="gender-pie-chart" sx={{marginTop:"3%", marginLeft:"4.5%", height:"500px", width:"500px"}}>
              <PieChart />
          </Box>
        </Box>
       
    </div>
  )
}

export default Instructor