import React, { use, useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/MyContext';

function Home(){
    const { name } = use(MyContext)
  return (
    <div>
      <h1>Hello my name is: {name}</h1>
    </div>
)
}
export default Home