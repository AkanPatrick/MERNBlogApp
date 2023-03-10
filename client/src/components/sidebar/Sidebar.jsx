import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}