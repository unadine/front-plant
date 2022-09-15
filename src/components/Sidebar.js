import {Link } from "react-router-dom";
import { useNavigate } from "react-router";


const Sidebar = () => {
	const role = localStorage.getItem('loggedRole');
	const navigate = useNavigate();

	const logOut = () => {
        localStorage.clear();
        navigate('/');    
        window.location.reload(false);
    }
	const navStyle = {
        backgroundColor: "green",
      };
    return(
        <div>
        <header className="app-header fixed-top" style={navStyle}>	   	            
        <div className="app-header-inner">  
	        <div className="container-fluid py-2">
		        <div className="app-header-content"> 
		            <div className="row justify-content-between align-items-center">
			        
				    <div className="col-auto">
					    <a id="sidepanel-toggler" className="sidepanel-toggler d-inline-block d-xl-none" href="#">
						    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img"><title>Menu</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
					    </a>
				    </div>
		            <div className="search-mobile-trigger d-sm-none col">
			            <i className="search-mobile-trigger-icon fas fa-search"></i>
			        </div>
		           
		            
		            <div className="app-utilities col-auto">
			            <div className="app-utility-item app-user-dropdown dropdown">
				             <a className="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></a> 
				            <ul className="dropdown-menu" aria-labelledby="user-dropdown-toggle">
							</ul>
			            </div> 
						<button type="button" class="btn btn-dark text-white" onClick={logOut}>Log Out</button>
						
		            </div>

		        </div>
	            </div>
	        </div>
        </div>
        <div id="app-sidepanel" className="app-sidepanel" > 
	        <div id="sidepanel-drop" className="sidepanel-drop"></div>
	        <div className="sidepanel-inner d-flex flex-column" style={navStyle}>
		        <a  id="sidepanel-close" className="sidepanel-close d-xl-none">&times;</a>
		        <div className="app-branding">
		            <a className="app-logo" ><img className="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo"/><span className="logo-text text-white" >PNMS</span></a>
	
		        </div>
				{ role ==="Entrepreneur" && [
					<nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
				    <ul className="app-menu list-unstyled accordion" id="menu-accordion">

					    <li className="nav-item" style={navStyle}>
                        <Link to="/orders">
					        <a className="nav-link">
						        <span className="nav-icon">
						        <i class="fa-solid fa-list bi bi-card-list mt-1 text-white" width="1em" height="1em"></i>
						         </span>
		                         <span className="nav-link-text text-white">Orders</span>
					        </a>
                            </Link>
					    </li>
						<li className="nav-item" style={navStyle}>
                        <Link to="/addCategory">
					        <a className="nav-link">
						        <span className="nav-icon">
						        <i class="fa-solid fa-list bi bi-card-list mt-1 text-white" width="1em" height="1em"></i>
						         </span>
		                         <span className="nav-link-text text-white">Categories</span>
					        </a>
                            </Link>
					    </li>
						
                
					    <li className="nav-item" style={navStyle}>
                        <Link to="/addPlant">
					        <a className="nav-link">
						        <span className="nav-icon">
						        <i class="fa-solid fa-tree bi bi-card-list mt-1 text-white" width="1em" height="1em"></i>
						         </span>
		                         <span className="nav-link-text text-white">Add Plant</span>
					        </a>
                            </Link>
					    </li>
						    
				    </ul>
			    </nav>
				   
	
				 ] }
				 { role ==="Admin" && [
					
					<nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1" >
				    <ul className="app-menu list-unstyled accordion" id="menu-accordion">
					    <li className="nav-item" style={navStyle}>
                        <Link to="/users">
					        <a className="nav-link">
						        <span className="nav-icon">
								<i class="fa-solid fa-users bi bi-card-list mt-1 text-white"  width="1em" height="1em"></i>
						       			         </span>
		                         <span className="nav-link-text text-white" >Users</span>
					        </a>
                            </Link>
					    </li>
						<li className="nav-item" style={navStyle}>
                        <Link to="/nurseries">
					        <a className="nav-link">
						        <span className="nav-icon">
								<i class="fa-solid fa-list bi bi-card-list mt-1 text-white" width="1em" height="1em"></i>
						       			         </span>
		                         <span className="nav-link-text text-white" >Nurseries</span>
					        </a>
                            </Link>
					    </li>

						
                
	
						    
				    </ul>
			    </nav>
	
				 ] }
				
		        
			   

				
			    <div className="app-sidepanel-footer">
				    
			    </div>
		       
	        </div>
	    </div>
    </header>
    </div>
    )

}

export default Sidebar;