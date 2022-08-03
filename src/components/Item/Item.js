import "./Item.scss"


const Item=({id,img,name,region,capital,population})=>{
  return(
    <li className="item">
      <img src={img}  width={"265"} className="item__img"  height={"160"} alt={name}/>
      <div className="item__box">
        <h2 className="item__title">{name}</h2>
        <p className="item__population">Population: <span>{population}</span></p>
        <p className="item__region">Region: <span>{region}</span></p>
        <p className="item__capital">Capital: <span>{capital}</span></p>
      </div>
    </li>
  )
}

export default Item