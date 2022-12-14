import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav  className="navbar">
        <h1>Austin Blogs</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                color:"white", 
                backgroundColor:"#f2356d",
                borderRadius:"8px"
                }}>New Post</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;