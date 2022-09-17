import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import back from "../../assets/images/call-made.svg";
import { Link } from "react-router-dom";
import Loader from "../../assets/images/loader.svg";

import "./country.scss";

const Country = ({ theme }) => {
  const params = useParams();

  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => err);
  }, [params.name]);

  let currency = "";

  country.forEach((e) => {
    for (let item in e.currencies) {
      currency = e.currencies[item].name;
    }
  });

  let languages = [];
  country.forEach((e) => {
    for (let item in e.languages) {
      languages.push(e.languages[item]);
    }
  });


  let borders=[]
  country.forEach((e)=>{
    borders=[...e.borders];
  })

  console.log(borders);

  return (
    <div className={theme}>
      <div className="country">
        <div className="container ">
          {country.length ? (
            <>
              <Link to="/">
                <button className="return-btn">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="call-made">
                      <path
                        id="Shape"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                      />
                    </g>
                  </svg>
                  <span>Back</span>
                </button>
              </Link>

              {country.map((e) => {
                return (
                  <div key={e.name.common} className="countryBox">
                    <img src={e.flags.png} alt={e.name.common} className={"img-flag"} />

                    <div className="info">
                      <h3 className="info__title">{e.name.common}</h3>

                      <ul className="info__list">
                        <li key={"1"} className="info__item">
                          <strong>
                            Native Name: <span>{e.name.official}</span>
                          </strong>
                          <strong>
                            Population: <span>{e.population}</span>
                          </strong>
                          <strong>
                            Region: <span>{e.region}</span>
                          </strong>
                          <strong>
                            Sub Region: <span>{e.subregion}</span>
                          </strong>
                          <strong>
                            Capital: <span>{e.capital}</span>
                          </strong>
                        </li>

                        <li key={"2"} className="info__item">
                          <strong>
                            Top level domain: <span>{e.tld}</span>
                          </strong>
                          <strong>
                            Currencies: <span>{currency}</span>
                          </strong>
                          <strong>
                            Languages:{" "}
                            <span>{languages.map((e) => e + ", ")}</span>
                          </strong>
                        </li>
                      </ul>

                      {e.borders.length ?
                       <div className="borders mt-5">
                        <h4 className="borders-title " >
                          Borders:
                        </h4>
                          {borders.map((border)=>{
                            return(
                            <span className="border-country">{border}</span>

                            )
                          })}
                       </div> : null}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="loader-box">
              <img src={Loader} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Country;
