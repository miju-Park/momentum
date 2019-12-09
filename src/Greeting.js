import React from 'react';

function Greeting({name}) {

  return (
    !name ? 
      <div>
        <p> What is your name? </p>
        <input type='text' placeholder="Enter your name" />
      </div>
    : <p>{`Hello ${name}`}</p>
  )

}
export default Greeting;