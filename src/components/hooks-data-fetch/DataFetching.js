import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromFromButtonClick] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[idFromButtonClick])

    const handleClick =() => {
         setIdFromFromButtonClick(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="text" onClick={handleClick}>Fetch</button>
            <h2>{post.title}</h2>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
