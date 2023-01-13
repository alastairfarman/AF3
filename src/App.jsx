import React from 'react' 
import { Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import Content from './Content';
import Performance from './Pages/Performance';
import Soccerball from './Pages/Soccerball'
import Sk8 from './Pages/Sk8';

import './App.css';

function App() {

  return (
    <>
     <Nav/>
      <Routes>
        <Route exact index element={<Content/>}/>
        <Route exact path="performance-physique-bmi-calculator" element={<Performance/>}/>
        <Route exact path="soccerball" element={<Soccerball/>}/>
        <Route exact path="sk8" element={<Sk8/>}/>


      </Routes>
    </>
  );
}

export default App;
