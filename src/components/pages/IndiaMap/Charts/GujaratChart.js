import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
const state = {
  labels: ['wheat','Kharif sorughum','Sorughum','Pearl Millet','Maize','Chickpea','Pigenopea','Groundnut','Rapseed','castor','sugarcane'],
  datasets: [
    {
      label: 'Crop Production',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [51531.95846,19366.00346,22842.7789,36939.65779,30652.31184,21994.91338,23608.37713,40303.11485,26573.92279,84960.37831,40077.11912]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
               fontSize:20,
               height:20,
               width:30
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}