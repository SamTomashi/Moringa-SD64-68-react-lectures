import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Details from "./Details";
import NewItem from "./NewItem";


function App() {




  const [items, setItems] = useState([]);

  const getItem = () => {
    fetch('http://localhost:3004/items')
    .then(response => response.json())
    .then(data => {
      setItems(()=> data)
      // console.log(items);
    })
  }

  useEffect(()=> {
    getItem()
    return function cleanup(){
      // setItems(()=> [])
    }
  }, [items])



  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/details:id" element={<Details/>}/>
        <Route exact path="/" element={<NewItem items={items}/>}/>
      </Routes>
      <Footer/>
      
    </div>
    
  );
}

export default App;
