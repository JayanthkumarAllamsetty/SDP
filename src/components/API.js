import React from 'react'
import "../components/API.css"

export default function api() {
        const style = {
          height: "650px",
          width: "1800px",
          borderWidth: '5px', 
          }
    return (
        <div className='framebox'>
<iframe style={style}src="https://www.accuweather.com/en/in/vijayawada/186815/weather-forecast/186815" ></iframe>      
  </div>
    )
}
