import React, {useEffect, useState} from "react";
function Form(){
    const [formData, setFormData] = useState({
        itemName: "",
        imageURL: "",
        itemDescription: ""
    })

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
                    <label className="form-label">Item Title</label>
                    <input onChange={handleChange} value={formData.itemName}  type="text" className="form-control" id="itemName" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">Item Name</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Item Image URL</label>
                    <input onChange={handleChange} value={formData.imageURL} type="text" className="form-control" id="imageURL" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Item description</label>
                    <textarea onChange={handleChange} value={formData.itemDescription} className="form-control" id="itemDescription" rows="3"></textarea>
                </div>
       
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Form