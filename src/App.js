import './App.css';
import { myTodos, getNextId } from './todos'
import React, {useState} from 'react';
/*
  Add todo: spread operator
  Remove todo: array filter
  Update todo: array map
*/
function App() {
  const [image, setImage] = useState("https://randomfox.ca/images/98.jpg");
  const [link, setLink] = useState("")
  const [likes, setLikes] = useState(0)

  const getFox = ()=> {
    fetch('https://randomfox.ca/floof/')
    .then((response)=>response.json())
    .then(({image, link})=> {
      setImage(image)
      setLink(link)
      setLikes(0)
    }
    )
  }

  const like = () => {
    setLikes(likes + 1)
  }

  return (
    <div className='container text-center'>
      <h3>Fox Findr</h3>
      <button onClick={getFox} type="button" className="mx-3 btn btn-primary btn-sm">Find Fox</button>
      <button onClick={like} type="button" className="mx-3 btn btn-secondary btn-sm">{likes} Likes</button>
      <div className='mx-3 p-3'>
      <a href={link} target="_blank"><img src={image} className="img-fluid" alt="Responsive image"></img></a>
      </div>
    </div>
  )
}

export default App;
