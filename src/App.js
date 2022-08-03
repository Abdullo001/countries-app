
import './App.scss';
import Item from "../src/components/Item/Item"
import Header from "../src/components/Header/Header"
import {useEffect, useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



function App() {

  const [countries, setCountries] = useState([])
  const [value, setValue] = useState("")
  const [region, setRegion] = useState("")

  useEffect(()=>{
   if (value.length){
    fetch("https://restcountries.com/v3.1/name/"+value)
    .then((res)=>res.json())
    .then((data) => setCountries(data))
    .catch((er)=>console.log(er))
   }
   else{
    fetch("https://restcountries.com/v3.1/all/")
    .then((res)=>res.json())
    .then((data) => setCountries(data))
    .catch((er)=>console.log(er))
   }
  },[value])


  useEffect(()=>{
    if (region.length){
      fetch("https://restcountries.com/v3.1/region/"+region)
      .then((res)=>res.json())
      .then((data) => setCountries(data))
      .catch((er)=>console.log(er))
     }
     else{
      fetch("https://restcountries.com/v3.1/all/")
      .then((res)=>res.json())
      .then((data) => setCountries(data))
      .catch((er)=>console.log(er))
     }
  },[region])

  let count=1;

  countries.forEach((el)=>{
    el.id=count;
    count++;
  })






  return (

    
    <div className="App appBody">
      <Header/>
      <div className="container ">
        <div className="searchBox">
          <input type="text" className=' input ' onKeyUp={(evt)=>{
            if(evt.code==="Enter"){
              setValue(evt.target.value)
            }
          }} 
          placeholder="Search for a country…"
          />

          <select defaultValue={"0"}  onChange={(evt)=>{
            setRegion(evt.target.value);
          }} >
            <option disabled value={""}  selected>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>



        <ul className='list '>
          {
            countries.length?countries.map((e)=>{
            return(
              <Item key={e.id} img={e.flags.png} name={e.name.official} region={e.region} capital={e.capital} population={e.population} />
            )
            }):"Loading..."
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
