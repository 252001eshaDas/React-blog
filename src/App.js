import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      
      <Topbar />
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route path="/posts" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/write" element={<Write/>}></Route>
        
        {/* <Route path="/register" element= {currentUser ? <Home /> : <Register />}>
         
        </Route>
        <Route path="/login" element={currentUser ? <Home /> : <Login />}></Route> */}
        <Route path="/post/:id" element={<Single />}></Route>
        {/* <Route path="/write" element={currentUser ? <Write /> : <Home />} ></Route> */}
        
      </Routes>
    </Router>
  );
}

export default App;