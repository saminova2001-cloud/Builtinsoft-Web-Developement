//                 NETFLIX


// import React from 'react';
// import ProjectNetflix from './ProjectNetflix';
// import './Netflix.css';

// function App(){
//   return(
//       <>
//       <ProjectNetflix/>
//        </>
//   )
// }
// export default App


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


//             practice 
import React, { useState } from "react";
import User from "./practice";
import College from './practice2'
import School from './practice3';
function App() {

  let userObject={
    name:"aabbcc",
    age:"2211",
    class:"23",
  }

  let userObject2={
    name:"bbbbbbb",
    age:"22222222",
    class:"class22",
  }

  let userObject3={
    name:"ali9",
    age:"22",
    class:"class2",
  }

  let collegeNames=['kfuet','swedish','american'];

  let Email = "sami11222@gmail";
  let name="awwais";
  let age ="21";
  let phone ="0320";
  const [Student,setStudent]=useState("brudder")
  
  return (
    <div>
      {/* <h2>email: {Email}</h2> */}
      <h1>react props</h1>
      <h2></h2>
      {/* <User Name={name} Age={age} Phone ={phone} email={Email}/> */}

      {Student && <School ide={Student}/>}
      <button onClick={()=> setStudent("schwester")}>update staus of name</button>

      {/* <College names={collegeNames[0]}/>
      <College names={collegeNames[1]}/>
      <College names={collegeNames[2]}/> */}

      <User user={userObject}/>
      <User user={userObject2}/>
      <User user={userObject3}/>
    </div>
  )
}
export default App;