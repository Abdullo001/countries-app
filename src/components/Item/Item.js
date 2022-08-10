import "./Item.scss";

import { Link } from "react-router-dom";

const Item = ({
  id,
  img,
  name,
  region,
  capital,
  population,
  linkName,
  theme,
}) => {
  return (
    <Link to={`/${linkName}`} className="item">
      <div className={theme}>
        <div className="item-main">
          <img
            src={img}
            width={"265"}
            className="item__img"
            height={"160"}
            alt={name}
          />
          <div className="item__box">
            <h2 className="item__title">{name}</h2>
            <p className="item__population">
              Population: <span>{population}</span>
            </p>
            <p className="item__region">
              Region: <span>{region}</span>
            </p>
            <p className="item__capital">
              Capital: <span>{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
