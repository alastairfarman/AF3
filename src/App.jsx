import React from 'react' 
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav';
import Content from './Content';
import Performance from './Pages/Performance';
import Soccerball from './Pages/Soccerball'
import Skincare from './Pages/Skincare';
import Play from './Pages/Play';
import Sk8 from './Pages/Sk8';
import Rest2066 from './Pages/Rest2066';
import Drive from './Pages/Drive';
import Retouch1 from './Pages/Retouch1';
import Retouch2 from './Pages/Retouch2';
import Retouch3 from './Pages/Retouch3';
import Photo1 from './Pages/Photo1';
import Photo2 from './Pages/Photo2';
import Photo3 from './Pages/Photo3';
import Psych from './Psych'; 
import './App.css';
import Sunglasses from './Pages/Sunglasses';

function App() {



  return (
    <><Psych/>
     <Nav/>
      <Routes>
        <Route exact index path='' element={<Content/>}/>
        <Route exact path="performance-physique-bmi-calculator" element={<Performance/>}/>
        <Route exact path="soccerball" element={<Soccerball/>}/>
        <Route exact path="sunglasses-product-visualisation" element={<Sunglasses/>}/>
        <Route exact path="cosmetics-product-visualisation" element={<Skincare/>}/>
        <Route exact path="play" element={<Play/>}/>
        <Route exact path="sk8" element={<Sk8/>}/>
        <Route exact path="rest-2066" element={<Rest2066/>}/>
        <Route exact path="drive" element={<Drive/>}/>
        <Route exact path="retouch-1" element={<Retouch1/>}/>
        <Route exact path="retouch-2" element={<Retouch2/>}/>
        <Route exact path="retouch-3" element={<Retouch3/>}/>
        <Route exact path="photo-1" element={<Photo1/>}/>
        <Route exact path="photo-2" element={<Photo2/>}/>
        <Route exact path="photo-3" element={<Photo3/>}/>
      </Routes>
    </>
  );
}

export default App;
