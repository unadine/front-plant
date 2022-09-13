import {Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router";


const NavBar = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('loggedRole');
    const navigate = useNavigate();

    const { totalItems } = useCart();
    const logOut = () => {
        localStorage.clear();
        navigate('/');    
        window.location.reload(false);
    }
    const navStyle = {
        backgroundColor: "green",
      };
    
    const headerStyle = {
        textDecoration: "none"
    }
 
  
    return(
        <>
        <nav class=" navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style={navStyle}>
            <div class="container px-4 px-lg-5">
            <Link to="/"> <a class="navbar-brand h1 text-white font-weight-bold" style={headerStyle}>PNMS</a></Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto ">
                    <Link to="/"> <li class="nav-item "><a class="nav-link text-white font-weight-bold" >About</a></li></Link>
                    { !token && [
                <>
               <li class="nav-item"><a class="nav-link text-white font-weight-bold" href="#projects">Projects</a></li>
               <li class="nav-item"><a class="nav-link text-white font-weight-bold" href="#contact-us">Contact</a></li>
               <Link to="/login"> <li class="nav-item "><a class="nav-link text-white font-weight-bold" >Login</a></li></Link>
            </>
               

             ] }
               { token && [
                <>
                { role === "Client"  && [
                    <>
                    <Link to="/shop"> <li class="nav-item "><a class="nav-link text-white font-weight-bold">Shop</a></li></Link>
                    <form class="d-flex">
                    <Link to="/cart"><li class="nav-item "><a class="nav-link text-white font-weight-bold">
                                Cart  <span class="badge bg-dark text-white ms-1 rounded-pill">{totalItems}</span></a></li>
                               
                            </Link> 
                    </form>
                    </>
                ]}
                { role === "Entrepreneur"  && [
                    <>
                    <Link to="/overview"> <li class="nav-item "><a class="nav-link text-white font-weight-bold">Dashboard</a></li></Link>
                    </>
                ]}
                { role === "Admin"  && [
                    <>
                    <Link to="/users"> <li class="nav-item "><a class="nav-link text-white font-weight-bold">Dashboard</a></li></Link>
                    </>
                ]}
                
                <li class="nav-item "><a class="nav-link text-white font-weight-bold" onClick={logOut}>Logout</a></li>
                </>
             ] }


                    
                   
                    </ul>
                    
                </div>
                
            </div>
        </nav>
        
        </>
 
    )

}

export default NavBar;