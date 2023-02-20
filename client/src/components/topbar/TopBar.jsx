import React from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className='logo'>MERN-Blog</div>
      <div className="topCenter" >
        <ul className="topList" >
          <li className="topListItem">
            <Link className="link" to="/" style={{ textDecoration: 'none'}}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write" style={{ textDecoration: 'none'}}>
              COMPOSE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write" style={{ textDecoration: 'none'}}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write" style={{ textDecoration: 'none'}}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
      <i className="topSearchIcon fas fa-search"></i>
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                <button className='loginBtn'>LOGIN</button>
              </Link>
            </li>
            <li className="topListItem" style={{ marginRight: 30 }}>
              <Link className="link" to="/register">
               <button className='registerBtn'>REGISTER</button> 
              </Link>
            </li>
          </ul>
        )}
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
      </div>
      <div className="socialIcons">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
    </div>
  );
}