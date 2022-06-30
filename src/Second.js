import React from 'react'

const Second = (props) => {
  return (
    <div>
    <div className='mainbox'>
    <img className='imagg' src={props.imageA}/>
   
    <img className='im' src='https://th.bing.com/th/id/OIP.HAZRS-7OfD8pnYzvNCOZdwHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
    <img className='imagg' src={props.image2}/>
    
    <div className='hh'><h3>{props.nameB}</h3>
    
    <h3 className='uu'>{props.name2}</h3></div>
    <div className='mb'>
    <p >{props.costB}</p>
    <p className='mn'>{props.cost2}</p>
    </div>
    <button className='tn'>Hundei Venue 2022 vs KIA Seltos</button>
    </div>
    </div>
)}

export default Second