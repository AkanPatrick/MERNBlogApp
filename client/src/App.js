import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <div>
     <Router>
     <TopBar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/register" element={user ? <Home /> : <Register />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/write" element={user ? <Write /> : <Register />} />
            <Route path="/settings" element={user ? <Settings /> : <Register />} />
            <Route path="/post/:postId" element={ <Single /> } />  
        </Routes>
    </Router>
      <div style={{ backgroundColor: '#1e272e', padding: 30, marginBottom: 0, position: "sticky"}}>          
       <p style={{ color: 'white', textAlign: "center", fontFamily:'Josefin Sans', fontSize: 12 }}>Copyright © 2023 MERN-Blog | All Rights Reserved</p>
      </div>  
  </div>   
     
  );
}

export default App;