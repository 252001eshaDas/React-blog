import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"

import "./home.css"

const Home = () => {
  return (
    <div>Home
        <Header/>
        <div className="home">
           
           <Sidebar/>
           <Posts/>
        </div>
    </div>
  )
}

export default Home