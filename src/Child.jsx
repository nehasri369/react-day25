import React from 'react'

const Child = ({handleclick}) => {

    console.log("Child Re-rendered")
  return (
    <div>

        <button onClick={handleclick}>Child Click</button>
    </div>
  )
}

export default React.memo(Child)