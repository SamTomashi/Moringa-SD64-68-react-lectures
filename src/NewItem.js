import React from "react";
import Card from "./Card";
import Form from "./Form";
import { Link } from "react-router-dom";
function NewItem({items}){


    const cards = items.map((item, index)=> {
        return <React.Fragment key={index}>
                  <div className="col-3">
                      <Card imageURL={item.imageURL} id={item.id} title={item.name} description={item.description} price={item.price}/>
                  </div>
            </React.Fragment>
      })

    return <React.Fragment>
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
    </React.Fragment>
}

export default NewItem