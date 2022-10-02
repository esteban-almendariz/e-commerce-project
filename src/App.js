import React from 'react';
import ReactDOM from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/Home"
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';


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
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;
