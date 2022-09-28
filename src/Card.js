function Card(props){

    const deteleItem = (id)=> {
        fetch(`http://localhost:3004/items/${id}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            }
        });
    }

    return (
        <div className="card m-1" >
            <img src={props.imageURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <label>{props.price}</label><br></br>
                {/* <a href="#" className="btn btn-primary">Add To Cart</a><br></br> */}
                <div>
                    <button className="btn btn-sm btn-danger my-3 mx-auto" onClick={()=> deteleItem(props.id)}>Delete</button>
                </div>
                {props.children}
            </div>
        </div>
    )
}
export default Card;