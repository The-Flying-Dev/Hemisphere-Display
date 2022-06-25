import React from 'react'

//first argument passed to a functional component is always props
//destructure props

const HemisphereDisplay = ({ latitude }) => { 
  const hemisphere = latitude > 0 ? 'You are in the Northern Hemisphere' : 'You are in the Southern Hemisphere';
  return(
    <div>{ hemisphere }</div>
  )
  
}

export default HemisphereDisplay