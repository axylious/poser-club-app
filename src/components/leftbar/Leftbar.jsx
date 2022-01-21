import { Chat, RssFeed } from '@material-ui/icons'
import './leftbar.css'
import {Users} from '../../dummyData'
import Friend from '../friend/Friend'

export default function Leftbar() {
   return (
      <div className='leftbar'>
         <div className='leftbarWrapper'>
            <ul className='leftbarList'>
               <li className='leftbarListItem'>
                  <RssFeed className='leftbarIcon' />
                  <span className='leftbarListItemText'>Feed</span>
               </li>
               <li className='leftbarListItem'>
                  <Chat className='leftbarIcon' />
                  <span className='leftbarListItemText'>Chat</span>
               </li>
            </ul>
            <button className='leftbarBtn'>Show More</button>
            <hr className='leftbarHr'/>
            <ul className='leftbarFriendList'>
               {Users.map(u => (
                  <Friend key={u.id} user={u} />
               ))}
            </ul>
         </div>
      </div>
   )
}