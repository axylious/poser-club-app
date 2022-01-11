import { MoreVert } from '@material-ui/icons'
import './post.css'

export default function Post() {
   return (
      <div>
         <div className="post">
            <div className="postWrapper">
               <div className="postTop">
                  <div className="postTopLeft">
                     <img src="" alt="" className="postProfileImg" />
                     <span className="postUsername">Axel Olivas</span>
                     <span className="postDate">5 min ago</span>
                  </div>
                  <div className="postTopRight">
                     <MoreVert />
                  </div>
               </div>
               <div className="postCenter">
                  <span className="postText">Hello world! My first post</span>
               </div>
               <div className="postBottom">
                  <div className="postBottomLeft">
                     {/* Like Icons and Counter */}
                  </div>
                  <div className="postBottomRight">
                     <span className="postComments">9 comments</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
