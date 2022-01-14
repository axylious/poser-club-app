import './nav.css'
import { Person, Search, Chat, Notifications } from '@material-ui/icons'
import {Link} from 'react-router-dom'

export default function Nav() {
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
            <img src="" alt="" className="navImg" />
         </div>
      </div>
   )
}
