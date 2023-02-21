import React from 'react'
import { useList } from '@pankod/refine-core'

import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
    TopAgent
} from "../components"
import { Box,Typography,Stack } from '@pankod/refine-mui'

const home = () => {
    return(
        <Box>
            <Typography fontSize={25} fontWeight={700} color = "#11142D" >Dashboard</Typography>

            <Box mt="20px" display={'flex'} flexWrap="wrap" gap={4}>
                <PieChart title="Properties for Sale" value={684} series={[75,25]} colors={["#475be8","e4e8ef"]}></PieChart>
                <PieChart title="Properties for Rent" value={412} series={[60,40]} colors={["#435bf8","f5f8ef"]}></PieChart>
                <PieChart title="Total Customers" value={75491} series={[80,20]} colors={["#178ag8","b7e9ea"]}></PieChart>
                <PieChart title="Properties for Cities" value={534} series={[30,70]} colors={["#378ea8","a7c1eg"]}></PieChart>
            </Box>

            <Stack mt="25px" width="100%" direction={{xs : "column" , lg:"row"}} gap={4}>
                <TotalRevenue></TotalRevenue>
                <PropertyReferrals></PropertyReferrals>
            </Stack>
        </Box>
    )   
}

export default home