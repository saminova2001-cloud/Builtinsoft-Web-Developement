//                 NETFLIX

import { RiCodeBlock } from "react-icons/ri";


import React from 'react';
import ProjectNetflix from './ProjectNetflix';
import './Netflix.css';

function App(){
  return(
      <>
      <ProjectNetflix/>
       </>
  )
}
export default App


//                ----------


//                 Foodpanda:

// import FpNav from './components/FpNav';
// import './components/FpNav.css';
// import FpHero from './components/FpHero';
// import './components/FpHero.css';
// function App() {
//   return (
//     <>
//       <FpNav />
//       {/* <FpHero/> */}
//     </>
//   );
// }
// export default App;

//                ---------


//                  Pizza Hut 

// import Navbar from './components/Navbar';
// import './components/Navbar.css';

// function App(){
//   return(
//     <>
//     <Navbar/>

//     </>
//   )
// }

// export default App;

//                   ------------

//                  Form

// import Form from './components/form';
// import './components/form.css';

// function App(){
//   return(
//     <>
//     <form/>

//     </>
//   )
// }

// export default App;


//            Navbar new
  
  // import {useEffect,UseState} from 'react' 
  // import Navbar from './Navbar'
  // // import Home from './pages/Home'
  // import Footer from './footer'
  // // import './Navbar.css'
  // // import './App.css'

  // function App(){
  //   return(
  //     <>
  //     <Navbar/>
  //     <Footer/>
  //     </>
  //   )
  // }

  // export default App;


//             practice 
// import React, { useState } from "react";
// import User from "./practice";
// import College from './practice2'
// import School from './practice3';
// import Counter from './counter';
// import useToggle from './usetoogle';

// function App() {
//   const [value,toggleValue]=useToggle(true);
//   console.log("val---",value);
//   const [count,setCount]=useState(0);
//   const [data,setData]=useState(0);
//   const [display,setDisplay]=useState(true);

//   let userObject={
//     name:"aabbcc",
//     age:"2211",
//     class:"23",
//   }

//   let userObject2={
//     name:"bbbbbbb",
//     age:"22222222",
//     class:"class22",
//   }

//   let userObject3={
//     name:"ali9",
//     age:"22",
//     class:"class2",
//   }

//   let collegeNames=['kfuet','swedish','american'];

//   let Email = "sami11222@gmail";
//   let name="awwais";
//   let age ="21";
//   let phone ="0320";
//   const [Student,setStudent]=useState("brudder")

//   return (
//     <div>
//       <button onClick={() => toggleValue()}>Toggle</button>
//       <button onClick={() => setDisplay(false)}>hide</button>
//       <button onClick={() => setDisplay(true)}>show</button>
//       {
//         value ? <h1>custom hookes in react js</h1> : null
//       }
//       {/* <h2>email: {Email}</h2> */}
//       <h1>react props</h1>
//       <h2></h2>
//       {/* <User Name={name} Age={age} Phone ={phone} email={Email}/> */}

//       {Student && <School ide={Student}/>}
//       <button onClick={()=> setStudent("schwester")}>update staus of name</button>

//       {/* <College names={collegeNames[0]}/>
//       <College names={collegeNames[1]}/>
//       <College names={collegeNames[2]}/> */}
// {
//       display?<Counter count={count} data={data} />:null
// }
//       <Counter count={count} data={data} />
//       <button onClick={()=>setCount(count+1)}>Counter</button>
//       <button onClick={()=>setData(data+1)}>Data</button>
//       <button onClick={()=>setDisplay(!display)}>Toggle</button>


//       <User user={userObject}/>
//       <User user={userObject2}/>
//       <User user={userObject3}/>
//     </div>
//   )
// }
export default App;