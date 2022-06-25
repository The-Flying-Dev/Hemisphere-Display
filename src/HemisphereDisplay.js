import React from 'react'
import './Hemisphere.css';
import north from './images/north.jpg';
import south from './images/south.jpg';

//first argument passed to a functional component is always props
//destructure props

const HemisphereDisplay = ({ latitude }) => { 

  const hemisphereConfig = {
    Northern: {
      text: 'You are in the Northern Hemisphere',
      picture: north
    },
    Southern: {
      text: 'You are in the Southern Hemisphere',
      picture: south
    }
  }

  const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
  const { text, picture } = hemisphereConfig[hemisphere]

  return(
    <div className={hemisphere}>
      <div className='ui raised text container segment'>
        <div className='image'>
          <img src={ picture } alt="world" />
        </div>
        <div className='ui teal bottom attached label'>
          <h1>{ text } </h1>
        </div>       
      </div>    
    </div>
  )
  
}

export default HemisphereDisplay