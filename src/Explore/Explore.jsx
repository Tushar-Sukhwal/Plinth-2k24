import React from 'react'
import ExploreCss from './Explore.module.css'
import { Link } from 'react-router-dom'
const Explore = (props) => {
  return (
    <div className={ExploreCss.main}>
        <div className={ExploreCss.leftDiv}>
            <div className={ExploreCss.clubHeading}>
                {props.clubHeading}
            </div>
            <div className={ExploreCss.title}>
                {props.title}
            </div>
            <div className={ExploreCss.description}>
                {props.description}
            </div>
            <div className={ExploreCss.pricepoolDiv}>
                <h6 className={ExploreCss.pricepool} >PRICE POOL - {props.pricepool}</h6>
            </div>
            <button className={ExploreCss.register}>TEAM REGISTER</button>
        </div>
        <div className={ExploreCss.rightDiv}>
            <div className={ExploreCss.imageDiv}>
                {/*image using framer-motion*/}
                <img className={ExploreCss.image} src={props.img}/>
            </div>
                {/*Rule book*/}
                <button  className={ExploreCss.rulebookbutton}>
                   <Link className={ExploreCss.link} to={props.rulebook}>RULE BOOK</Link>
                </button>
        </div>
    </div>
  )
}

export default Explore