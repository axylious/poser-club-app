import Nav from '../../components/nav/Nav'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './home.css'

export default function Home() {
   return (
      <>
         <Nav />
         <div className="homeContainer">
            <Leftbar />
            <Feed />
            <Rightbar />
         </div>
      </>
   )
}
