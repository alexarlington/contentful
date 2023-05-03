import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useContentful } from './AppContext';
import Posts from './Posts';
import Home from './Home'


function App() {

  return (
    <div>
      <h1>app.js</h1>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/:url" element={<Posts/>} />
      </Routes>        


    </div>
  );
}

export default App;
