import React from 'react'
import {lists} from './data3.js'

const Challange3 = () => {
  let output =[];

  //filling the ouput array and displaying in react components:
  lists.forEach((line,i)=>{
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  // Remove the first <hr />
  output.shift();

  return (
    <>
    {output}
    </>
  )
}

export default Challange3