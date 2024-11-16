import React from 'react'

const Three = () => {
  const handleSave = () => {
    console.log("Save by zaid")
  }
  return (
    <div>Three updated by master updated 

      <button onClick={handleSave}> Submit</button>
    </div>

  )
}

export default Three