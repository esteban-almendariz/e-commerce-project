import React from 'react';
import ReactDOM from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/Home"
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/sign-in/SignIn';


const App = () => {

  const Shop = () => {
    return (
      <h1>I am the Shop Page</h1>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
