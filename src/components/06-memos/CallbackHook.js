import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    
    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback((num) => {
        setCounter( (counter) => counter + num );
    }, [setCounter]);
    
    useEffect(() => {
        //???
    }, [increment]);

  return (
      <>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={increment} />
      </>
  );
};

