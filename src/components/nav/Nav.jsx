import './nav.css'
import { Person, Search, Chat, Notifications } from '@material-ui/icons'

export default function Nav() {
   return (
      <div className='navContainer'>
         <div className='navLeft'>
            <span className="logo">PoserClub</span>
         </div>
         <div className='navCenter'>
            <div className="searchBar">
               <Search />
               <input placeholder='Search' className='searchInput' />
            </div>
         </div>
         <div className='navRight'>
            <div className="navLinks">
               <span className="navLink"></span>
               <span className="navLink"></span>
            </div>
            <div className="navIcons">
               <div className="navItem">
                  <Person />
                  <span className="NavBadge">1</span>
               </div>
               <div className="navItem">
                  <Chat />
                  <span className="NavBadge">4</span>
               </div>
               <div className="navItem">
                  <Notifications />
                  <span className="NavBadge"></span>
               </div>
            </div>
            <img src="" alt="" className="navImg" />
         </div>
      </div>
   )
}
