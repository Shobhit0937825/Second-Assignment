import React from 'react'

function Forth(props) {
  return (
    <div>
        <div className='mainbox'>
    <img className='imagg' src={props.imageC}/>
   
    <img className='im' src='https://th.bing.com/th/id/OIP.HAZRS-7OfD8pnYzvNCOZdwHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
    <img className='imagg' src={props.image4}/>
    
    <div className='hh'><h3>{props.nameD}</h3>
    
    <h3 className='uu'>{props.name4}</h3></div>
    <div className='mb'>
    <p >{props.costD}</p>
    <p className='mn'>{props.cost4}</p>
    </div>
    <button className='tn'>Toyota Fortuner vs Ford Endeacour</button>
    </div>
    </div>

  )
}

export default Forth