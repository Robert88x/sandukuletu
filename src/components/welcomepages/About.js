import React from 'react'
import { useCounterStore }from './store';

const About = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />

};


  const OtherComponent = ({ count }) => {
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
  

  return (
    <div>
      <div>About {count}</div>
      <div>
        <button onClick={increment}>Increment + </button>
        <button onClick={decrement}> Decrement - </button>
      </div>
    </div>
  )
}


export default About