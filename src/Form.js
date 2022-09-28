import React, {useEffect, useState} from "react";
function Form(){
    
    const [formData, setFormData] = useState({
        name: "",
        imageURL: "",
        description: "",
        size: "",
        price: 0
    });

    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:3004/items", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
    }

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input onChange={handleChange} value={formData.name}  type="text" className="form-control" id="name" aria-describedby="itemName"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Image URL</label>
                    <input onChange={handleChange} value={formData.imageURL} type="text" className="form-control" id="imageURL" aria-describedby="imageURL"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Size</label>
                    <input onChange={handleChange} value={formData.size} type="text" className="form-control" id="size" aria-describedby="size"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input onChange={handleChange} value={formData.price} type="number" min="0" className="form-control" id="price" aria-describedby="price"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea onChange={handleChange} value={formData.description} className="form-control" id="description" rows="3"></textarea>
                </div>
       
                <button type="submit" className="btn btn-primary">Add New Item</button>
                
            </form>
        </React.Fragment>
    )
}

export default Form