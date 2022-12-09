import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import AppTitle from "./components/AppTitle";
import Rating from "./components/Rating";

function App() {
   return (
      <div className="App">
         <AppTitle/>
         <Accordion title={'Menu'}/>
         <Accordion title={'User'}/>
         <Rating value={1}/>
         <Rating value={2}/>
         <Rating value={3}/>
         <Rating value={4}/>
         <Rating value={5}/>
      </div>
   );
}

export default App;
