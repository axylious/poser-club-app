import './rightbar.css'

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
               <li className="rightbarFriend">
                  <div className="rightbarProfileContainer">
                     <img src="" alt="" className="rightbarProfileImg" />
                     <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">John Carter</span>
               </li>
               <li className="rightbarFriend">
                  <div className="rightbarProfileContainer">
                     <img src="" alt="" className="rightbarProfileImg" />
                     <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">John Carter</span>
               </li>
               <li className="rightbarFriend">
                  <div className="rightbarProfileContainer">
                     <img src="" alt="" className="rightbarProfileImg" />
                     <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">John Carter</span>
               </li>
               <li className="rightbarFriend">
                  <div className="rightbarProfileContainer">
                     <img src="" alt="" className="rightbarProfileImg" />
                     <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">John Carter</span>
               </li>
               <li className="rightbarFriend">
                  <div className="rightbarProfileContainer">
                     <img src="" alt="" className="rightbarProfileImg" />
                     <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">John Carter</span>
               </li>
            </ul>
         </div>
      </div>
   )
}
