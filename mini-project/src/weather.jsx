import { useState } from 'react';
import Info_Box from './infoBox';
import Search from './SearchBox';
import "./weather.css";


export default function Weather(){
    let [weather, setweather] = useState({
        City : "Delhi",
        Humidity: 7.5,
        temp : 34.4,
        temp_max : 45.3,
        temp_min : 23.5,
        wind_speed : 1.5,
        pressure: 5.7,
    });

    let updateInfo = ((result)=>{
setweather(result);
    })
return(
   
     <div className='weather' > 
    
         <h2 className="h2">Weather App</h2>
       <Search updateInfo = {updateInfo}/>
        <Info_Box info={weather}/> 
        
         </div>
  
  
)
}