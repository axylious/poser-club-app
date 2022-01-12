import { MoreVert } from '@material-ui/icons'
import './post.css'
import {Users} from '../../dummyData'

export default function Post({post}) {
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
                     <span className="postLikeCounter">{post.like} people like it</span>
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
