import axios from 'axios'
import React from 'react'

const baseURL = 'https://fakestoreapi.com/products/1'

function Home() {
  const [post, setPost] = React.useState(null)

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [])

  if (!post) return null

  return (
    <div>
      <h1>Title :{post.title}</h1>
      <h1>Price :{post.price}</h1>
    </div>
  )
}

export default Home
