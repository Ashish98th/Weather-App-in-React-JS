import axios from 'axios';
import './App.css';

import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
const apiKey="278adc5ef028dd47489cad4b0cb6d1f6";
const[inputCity,setCity]=useState("")
const[data,setData]=useState({})
const getWeatherDetails=(cityName)=>{
  if(!cityName) return  //return the code from here only
  // const apiURL="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid" + apiKey
  
  const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
  axios.get(apiURL).then((response)=>{
    console.log("response",response.data)
    setData(response.data);
  }).catch((error)=>{
    console.log("err",error)
  })
}

const handleinputchange=(e)=>{
setCity(e.target.value);
}

//when button click the value in input value will go to Api 
const handleSearch=()=>{
   getWeatherDetails(inputCity)  //Now this need cityName,for that we will make one state
}

// useEffect(()=>{   //api call automatically after rendering
//   getWeatherDetails("delhi")
// },[])
  return (
    <div className="col-md-12">
      <div className='weatherBg'>
  <h1>weather</h1>
<div className='d-grid gap-3 col-4 mt-4'>
<input type="text" className='form-control' onChange={handleinputchange} value={inputCity} />
  <button className="btn btn-primary" type="button" onClick={handleSearch} >Search</button>
</div>
 
  </div>
{Object.keys(data).length>0 &&
<div className="col-md-12 text-center mt-5" >

  <div className='shadow rounded weatherResultBox'>
    <img className="icon" src={'weatherIcon.png'}/>
    <h5 className='weatherCity'>{data?.name}</h5>
    <h6 className='weatherTemp'>{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
  </div>

</div>
}
    </div>
  );
}

export default App;
