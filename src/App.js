import { cleanup } from "@testing-library/react";
import React, {useEffect, useState} from "react";
import Card from "./Card";
import Form from "./Form";
import Navbar from "./Navbar";

function App() {
  
  const [items, setItems] = useState([])

  
  useEffect(()=> {
    fetch('http://localhost:3004/items')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  

  const cards = items.map((item, index)=> {
    return <React.Fragment key={index}>
              <div className="col-3">
                  <Card  title={item.itemName} description={item.description} price={item.price}>
                    <a href="#">View Details</a>
                  </Card>
              </div>
        </React.Fragment>
  })

  return (
    <div className="container">
      <Navbar/>
  
       <div className="row">
        <div className="col">
          <Form/>
        </div>
        <div className="col-8">
          <div className="row">
            {cards}
          </div>
        </div>
      </div>
      <div className="fixed-bottom">Mashwear LTD</div>
    </div>
  );
}

export default App;
