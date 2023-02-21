import React from 'react'
import { Box,Typography,Stack, Show, colors } from '@pankod/refine-mui'
import ReactApexChart from "react-apexcharts";
import {propertyReferralsInfo} from "constants/index";

interface ProgressBarProps {
  title : string,
  percentage : number,
  color : string
}

const ProgressBar =({title, percentage, color}:ProgressBarProps)=>{
  return(
    <Box>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Typography fontSize={16} fontWeight={500} color={"#11142d"}> {title} </Typography>
        <Typography fontSize={16} fontWeight={500} color={"#11142d"}> {percentage}% </Typography>
      </Stack>

      <Box mt={2} position ="relative" width="100%" bgcolor="#e4e8ef" height="8px" borderRadius={1}>
        {/* Make sure that the comma which is used is a tilted one `` not '' */}
        <Box width={`${percentage}%`}bgcolor={color} position="absolute" height="100%" borderRadius={1} ></Box>
      </Box>
    </Box>
  )
}

const PropertyReferrals = () => {
  return (
    
    <Box  p={4} flex={1} bgcolor="#fcfcfc" id="chart" display="flex" flexDirection="column" borderRadius="15px" minWidth={490}>
      <Typography fontSize={18} fontWeight={600} color="#11142d">Total Revenue</Typography>
      
      <Stack my="20px" direction="column" gap={4}>
        {propertyReferralsInfo.map((bar)=> <ProgressBar key = {bar.title} {...bar}></ProgressBar>)}
      </Stack>
      
    </Box>
    )
}

export default PropertyReferrals