import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
const state = {
  labels: ['Rice','Wheat','Kharif Sorghum','Sorghum','Pearl','Maize','Finger Millet','Barley','ChickPea','Pigeonpea','Minor Pules','GroundNut','Rapeseed and Mustard','SunFlower','sugarcane'],
  datasets: [
    {
      label: 'Crop Production',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [117160.86,168014.75,45761.19,45761.19,63997.99,95783.6,130787.24,55595.54,46632.39,41823.97,45559.04,56358.6,25773.34,307083.22]
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