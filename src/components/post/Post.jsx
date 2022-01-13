import { MoreVert } from '@material-ui/icons'
import {useState} from 'react'
import './post.css'
import {Users} from '../../dummyData'

export default function Post({post}) {
   const [like, setLike] = useState(post.like)
   const [isLiked, setIsLiked] = useState(false)

   const likeHandler = () => {
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
   }

   return (
      <div>
         <div className="post">
            <div className="postWrapper">
               <div className="postTop">
                  <div className="postTopLeft">
                     <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                     <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
                     <span className="postDate">{post.date}</span>
                  </div>
                  <div className="postTopRight">
                     <MoreVert />
                  </div>
               </div>
               <div className="postCenter">
                  <span className="postText">{post?.desc}</span>
                  <img src={post.photo} alt="" className="postImg" />
               </div>
               <div className="postBottom">
                  <div className="postBottomLeft">
                     <img src="" alt="" className="likeIcon" onClick={likeHandler} />
                     <img src="" alt="" className="likeIcon" onClick={likeHandler} />
                     <span className="postLikeCounter">{like} people like it</span>
                  </div>
                  <div className="postBottomRight">
                     <span className="postComments">{post.comment} comments</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
