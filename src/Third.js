import React from 'react'

function Third(props) {
  return (
    <div>
    <div className='mainbox'>
    <img className='imagg' src={props.imageB}/>
   
    <img className='im' src='https://th.bing.com/th/id/OIP.HAZRS-7OfD8pnYzvNCOZdwHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
    <img className='imagg' src={props.image3}/>
    
    <div className='hh'><h3>{props.nameC}</h3>
    
    <h3 className='uu'>{props.name3}</h3></div>
    <div className='mb'>
    <p >{props.costC}</p>
    <p className='mn'>{props.cost3}</p>
    </div>
    <button className='tn'>Hundai Verna vs TATA Nexon</button>
    </div>
    </div>
    
  )
}

export default Third