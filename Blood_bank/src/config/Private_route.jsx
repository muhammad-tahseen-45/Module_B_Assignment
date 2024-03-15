import React from 'react'

function Private_route(props) {
 
  console.log(props)
  return (
  <>
 <props.component/>
  </>
  )
}

export default Private_route