import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav style={{textAlign: 'center', height:'60px', fontSize:'20px'}}>
            <h1 style={{textAlign:'center', marginBottom:'30px'}}>Dashboard</h1>
            <Link to="/director" class="btn btn-success" style={{width:'100px', color:'white', textDecoration:'none', marginRight:'70px'}}>Directors</Link>
            <Link to="/producer" class="btn btn-info" style={{width : '100px',color:'white', textDecoration:'none', marginRight:'70px'}}> Producers</Link>
            <Link to="/star" class="btn btn-danger" style={{width : '80px',color:'white', textDecoration:'none', marginRight:'70px'}}> Stars</Link>
            <Link to="/genre" class="btn btn-secondary" style={{width : '90px',color:'white', textDecoration:'none', marginRight:'70px'}}> Genres</Link>
            <Link to="/movie" class="btn btn-warning" style={{width : '90px',color:'black', textDecoration:'none', marginRight:'70px'}}> Movies</Link>
        </nav>
    )
}

export default Header;