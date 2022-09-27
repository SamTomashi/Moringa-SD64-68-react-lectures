import { cleanup } from "@testing-library/react";
import React, {useEffect, useState} from "react";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  
  // const [items, setItems] = useState([])

  const [myTimer, setTimer] = useState();
  const [username, setUsername] = useState("");


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

  // useEffect(()=> {
  //   fetch('http://localhost:3004/items')
  //   .then(response => response.json())
  //   .then(data => setItems(data))
  // }, [])


  // console.log(count)
   function startTimer(){
    useEffect(()=> {
      const myTime = new Date().toLocaleString();
      setTimer(myTime)
     
     const myInterval = setInterval(()=> console.log(myTime), 1000);
     return function cleanup(){
      clearInterval(myInterval)
     };
    })
   }


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
      <button onClick={()=>  startTimer()}>Get Time</button>
    
       <div className="row">
        {cards}
      </div>
      <div className="fixed-bottom">Mashwear LTD</div>
    </div>
  );
}

export default App;
