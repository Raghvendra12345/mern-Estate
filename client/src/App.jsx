// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import React from 'react';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return <BrowserRouter>

  {/* //we want to use header in all web pages so,we init header like this samjhe ha ha ha  */}
  <>
  <Header/>
  <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/sign-in" element={<Signin/>}/>
     <Route path="/sign-up" element={<SignUp/>}/>
     <Route path="/about" element={<About/>}/>
     <Route element={<PrivateRoute/>}>
     <Route path="/profile" element={<Profile/>}/>
     </Route>
  </Routes>
  </>
  </BrowserRouter>
}
