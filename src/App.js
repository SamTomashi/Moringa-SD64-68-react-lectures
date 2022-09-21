import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {

  const items = [
    {
      itemName: "Shoes",
      description: "black leather",
      price: 2300
    },
    {
      itemName: "trouser",
      description: "Blue Jeans",
      price: 1000
    },
    {
      itemName: "TShirt",
      description: "Raphlauren Polo",
      price: 2300
    },
    {
      itemName: "Shirt",
      description: "White shirt",
      price: 1000
    }
  ];

  const cards = items.map((item, index)=> {
    return <React.Fragment>
              <div class="col-3" key={index}>
                  <Card  title={item.itemName} description={item.description} price={item.price}>
                    <a href="#">View Details</a>
                  </Card>
              </div>
        </React.Fragment>
  })

  return (
    <div className="container">
      <Navbar/>
       <div class="row">
        {cards}
      </div>
      <div class="fixed-bottom">Mashwear LTD</div>
    </div>
  );
}

export default App;
