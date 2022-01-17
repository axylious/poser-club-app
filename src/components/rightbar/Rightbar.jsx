import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({user}) {
   const PF = process.env.REACT_APP_PUBLIC_FOLDER

   const HomeRightbar = () => {
      return (
         <>
            <div className="birthdayContainer">
               <img src="" alt="" className="birthdayImg" />
               <span className="birthdayText">
                  <b>Jane Doe</b> and <b>3 other friends</b> have a birthday today
               </span>
            </div>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
               {Users.map(u => (
                  <Online key={u.id} user={u} />
               ))}
            </ul>
         </>
      )
      
   }

   const ProfileRightbar = () => {
      return (
         <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
               <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">City: </span>
                  <span className="rightbarInfoValue">{user.city}</span>
               </div>
               <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">From: </span>
                  <span className="rightbarInfoValue">{user.from}</span>
               </div>
               <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Relationship: </span>
                  <span className="rightbarInfoValue">{user.relationship === 1 
                     ? 'Single' 
                     : user.relationship === 2 
                     ? 'Married' 
                     : '-'}
                  </span>
               </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
               <div className="rightbarFollowing">
                  <img src={`${PF}person/1.jpg`} alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
               <div className="rightbarFollowing">
                  <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
               <div className="rightbarFollowing">
                  <img src={`${PF}person/3.jpg`} alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
               <div className="rightbarFollowing">
                  <img src={`${PF}person/4.jpg`} alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
               <div className="rightbarFollowing">
                  <img src={`${PF}person/5.jpg`} alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
               <div className="rightbarFollowing">
                  <img src={`${PF}person/6.jpg`} alt="" className="rightbarFollowingImg" />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
            </div>
         </>
      )
   }

   return (
      <div className='rightbar'>
         <div className="rightbarWrapper">
            {user ? <ProfileRightbar /> : <HomeRightbar />}
         </div>
      </div>
   )
}
