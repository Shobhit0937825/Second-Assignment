import React from 'react'

export const VS_First = (props) => {
  return (
    <div>
      
    <div className='mainbox'>
    <img className='imagg' src={props.image}/>
   
    <img className='im' src='https://th.bing.com/th/id/OIP.HAZRS-7OfD8pnYzvNCOZdwHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
    <img className='imagg' src={props.image1}/>
    
    <div className='hh'><h3>{props.nameA}</h3>
    
    <h3 className='uu'>{props.name1}</h3></div>
    <div className='mb'>
    <p >{props.costA}</p>
    <p className='mn'>{props.cost1}</p>
    </div>
    <button className='tn'>Scoda Rapid vs Honda City</button>
    </div>
    </div>
  )
}
export default VS_First;
