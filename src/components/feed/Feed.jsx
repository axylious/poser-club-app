import { useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
// import {Posts} from '../../dummyData'

export default function Feed() {
   const [posts, setPosts] = useState([])

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get('posts/timeline/61b247f8faaea432b3ee9a95')
         setPosts(res.data)
      }
      fetchPosts()
   }, [])

   return (
      <div className='feed'>
         <div className="feedWrapper">
            <Share />
            {posts.map((p) => (
               <Post key={p._id} post={p} />
            ))}
         </div>
      </div>
   )
}
