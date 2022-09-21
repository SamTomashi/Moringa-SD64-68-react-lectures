function Card(props){

    console.log(props.children);
    return (
        <div className="card" >
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <label>{props.price}</label><br></br>
                <a href="#" className="btn btn-primary">Add To Cart</a><br></br>
                {props.children}
            </div>
        </div>
    )
}

export default Card;