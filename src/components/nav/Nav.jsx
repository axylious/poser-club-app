import './nav.css'
import { Person, Search, Chat, Notifications } from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { logoutCall } from '../../apiCalls'

export default function Nav() {
   const {user, dispatch} = useContext(AuthContext)
   const PF = process.env.REACT_APP_PUBLIC_FOLDER

   const handleClick = () => {
      logoutCall(dispatch)
   }
   
   return (
      <div className='navContainer'>
         <div className='navLeft'>
            <Link to='/' style={{textDecoration: 'none'}}>
               <span className="logo">PoserClub</span>
            </Link>
         </div>
         <div className='navCenter'>
            <div className="searchBar">
               <Search className='searchIcon' style={{fontSize: 20, marginLeft: 10}} />
               <input placeholder='Search for spots' className='searchInput' />
            </div>
         </div>
         <div className='navRight'>
            <div className="navLinks">
               <span className="navLink">Home</span>
               <span className="navLink">Timeline</span>
            </div>
            <div className="navIcons">
               <div className="navItem">
                  <Person />
                  <span className="navBadge">1</span>
               </div>
               <div className="navItem">
                  <Chat />
                  <span className="navBadge">4</span>
               </div>
               <div className="navItem">
                  <Notifications />
                  <span className="navBadge">3</span>
               </div>
            </div>
            <Link to={`/profile/${user.username}`}>
               <img src={
                  user.profilePicture 
                  ? PF + user.profilePicture 
                  : PF + 'person/noAvi.jpg'
               } alt="" className="navImg" />
            </Link>
            <button onClick={handleClick}>
               Log Out
            </button>
         </div>
      </div>
   )
}
