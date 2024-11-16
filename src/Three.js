import React from 'react'

const Three = () => {
  const handleSubmit = () => {
     console.log("hello updated by master")
  }
  return (
    <div>Three updated by master updated 

      <button onClick={handleSubmit}> Submit</button>
    </div>

  )
}

export default Three