import Nav from '../../components/nav/Nav'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'

export default function Profile() {
   return (
      <>
         <Nav />
         <div className="profile">
            <Leftbar />
            <div className="profileRight">
               <div className="profileRightTop">
                  <div className="profileCover">
                     <img src="" alt="" className="profileCoverImg" />
                     <img src="" alt="" className="profileUserImg" />
                  </div>
                  <div className="profileInfo">
                     <h4 className="profileInfoName">Axel Olivas</h4>
                     <span className="profileInfoDesc">Hello world</span>
                  </div>
               </div>
               <div className="profileRightBottom">
                  <Feed />
                  <Rightbar profile />
               </div>
            </div>
            
         </div>
      </>
   )
}
