import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar() {
   return (
      <div className='rightbar'>
         <div className="rightbarWrapper">
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
         </div>
      </div>
   )
}
