import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import back from "../../assets/images/call-made.svg";
import { Link } from "react-router-dom";

import "./country.scss"

const Country = () => {
  const params = useParams();

  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => err);
  }, [params.name]);

  console.log(country);

  let currency=""

  country.forEach((e) => {
		for (let item in e.currencies) {
			currency = e.currencies[item].name;
		}})

    let languages=[]
    country.forEach((e)=>{
      for (let item in e.languages){
        languages.push(e.languages[item])
      }
    })

    console.log(languages);

  return (
    <div className="container">
      <Link to="/">
        <button className="return-btn">
          <img src={back} alt="Back" />
          <span>Back</span>
        </button>
      </Link>

      {
        country.map((e) => {
          return (
            <div key={"1"} className="countryBox">
              <img src={e.flags.png} alt="e.name.common" />

              <div className="info">
                <h3 className="info__title">{e.name.common}</h3>

                <ul className="info__list">
                  <li key={"1"} className="info__item">
                    <strong>Native Name: <span>{e.name.official}</span></strong>
                    <strong>Population: <span>{e.population}</span></strong>
                    <strong>Region: <span>{e.region}</span></strong>
                    <strong>Sub Region: <span>{e.subregion}</span></strong>
                    <strong>Capital: <span>{e.capital}</span></strong>
                  </li>


                  <li key={"2"} className="info__item">
                    <strong>Top level domain: <span>{e.tld}</span></strong>
                    <strong>Currencies: <span>{currency}</span></strong>
                    <strong>Languages: <span>{languages.map((e)=>(e+", "))}</span></strong>
                    {console.log(currency)}
                  </li>
                </ul>

              </div>

            </div>
          )
        })
      }



      
    </div>
  );
}

export default Country;
