import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";

import Card from "./Card";
import Form from "./Form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Details from "./Details";

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
  }, [])

  const cards = items.map((item, index)=> {
    return <React.Fragment key={index}>
              <div className="col-3">
                  <Card  title={item.name} description={item.description} price={item.price}>
                    <a href="#">View Details</a>
                  </Card>
              </div>
        </React.Fragment>
  })

  return (
    <div className="container">
      <Navbar/>
       <div className="row my-4 py-4">
        <div className="col my-4">
          <Form/>
        </div>
        <div className="col-8 my-4">
          <div className="row">
            {cards}
          </div>
        </div>
      </div>
      <Footer/>

      <Routes>
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
