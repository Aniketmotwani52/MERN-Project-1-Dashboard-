// import React,{useState,useEffect} from "react";
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );


// const PieChart = () => {

//   const [chartData,setChartData] = useState({
//     datasets: [],
//   });

//   const [chartOptions, setChartOptions] = useState({});


//   return (
//     <div>PieChart</div>
//   )
// }

// export default PieChart







// // import React from "react";
// // import { useState } from "react";
// // // import Chart from "chart.js"

// // export default class Chart extends React.Component {
// //   constructor(props: {} | Readonly<{}>) {
// //     super(props);
// //     this.state = {};
// //   }

// //   const data = {
// //     labels: [
// //       'Red',
// //       'Green',
// //       'Yellow'
// //     ],
// //     datasets: [{
// //       data: [300, 50, 100],
// //       backgroundColor: [
// //         '#FF6384',
// //         '#36A2EB',
// //         '#FFCE56'
// //       ],
// //       hoverBackgroundColor: [
// //         '#FF6384',
// //         '#36A2EB',
// //         '#FFCE56'
// //       ]
// //     }]
// //   };

// // const PieChart = ({title,value,series,colors}:PieChartProops) => {
// //   return (
// //     <Box>
// //       <Stack direction="column">
// //         <Typography fontSize={14} color="#808191" >{title}</Typography>
// //         <Typography fontSize={24} color="#11142d" fontWeight={700} mt="1">{value}</Typography>
// //       </Stack>
// //       <Pie                         
// //         data={this.data}          
// //         options={{   
// //           responsive: true,  
// //           maintainAspectRatio: true, 
// //           aspectRatio: 2, 
// //             plugins: {
// //               legend: {                                    
// //                 display: true,
// //                     position:'bottom', 
// //                     labels:{
// //                       padding: 40
// //                     },                                  
// //                 },
// //               },                           
// //             }} 
// //         />
// //     </Box>
// //   )
// // }

// // export default PieChart


// // // import React from 'react';
// // // // import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// // // import { Pie } from 'react-chartjs-2';

// // // // ChartJS.register(ArcElement, Tooltip, Legend); 

// // // const PieChart = () => {
// // //   return (
// // //     <Pie data={{
// // //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// // //       datasets: [
// // //         {
// // //           label: '# of Votes',
// // //           data: [12, 19, 3, 5, 2, 3],
// // //           backgroundColor: [
// // //             'rgba(255, 99, 132, 0.2)',
// // //             'rgba(54, 162, 235, 0.2)',
// // //             'rgba(255, 206, 86, 0.2)',
// // //             'rgba(75, 192, 192, 0.2)',
// // //             'rgba(153, 102, 255, 0.2)',
// // //             'rgba(255, 159, 64, 0.2)',
// // //           ],
// // //           borderColor: [
// // //             'rgba(255, 99, 132, 1)',
// // //             'rgba(54, 162, 235, 1)',
// // //             'rgba(255, 206, 86, 1)',
// // //             'rgba(75, 192, 192, 1)',
// // //             'rgba(153, 102, 255, 1)',
// // //             'rgba(255, 159, 64, 1)',
// // //           ],
// // //           borderWidth: 1,
// // //         },
// // //       ],
// // //     }
// // //   } />
// // //   )
// // // }

// // // export default PieChart

import React from 'react'
import { Box,Typography,Stack, Show, colors } from '@pankod/refine-mui'
import { PieChartProps } from 'interfaces/home';






import ReactApexChart from "react-apexcharts";


const PieChart = ({ title, value, series, colors }: PieChartProps) => {
    return (
        <Box
            id="chart"
            flex={1}
            display="flex"
            bgcolor="#fcfcfc"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            pl={3.5}
            py={2}
            gap={2}
            borderRadius="15px"
            minHeight="110px"
            width="fit-content"
        >
            <Stack direction="column">
                <Typography fontSize={14} color="#808191">
                    {title}
                </Typography>
                <Typography
                    fontSize={24}
                    color="#11142d"
                    fontWeight={700}
                    mt={1}
                >
                    {value}
                </Typography>
            </Stack>

        </Box>
    );
};

export default PieChart;