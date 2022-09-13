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
    return(
        <div>
        <header className="app-header fixed-top">	   	            
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
								<li><a className="dropdown-item">Account</a></li>
								<li><hr className="dropdown-divider"/></li>
								<li><a className="dropdown-item" >Log Out</a></li>
							</ul>
			            </div> 
						<button type="button" class="btn btn-dark" onClick={logOut}>Log Out</button>
						
		            </div>

		        </div>
	            </div>
	        </div>
        </div>
        <div id="app-sidepanel" className="app-sidepanel"> 
	        <div id="sidepanel-drop" className="sidepanel-drop"></div>
	        <div className="sidepanel-inner d-flex flex-column">
		        <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">&times;</a>
		        <div className="app-branding">
		            <a className="app-logo" ><img className="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo"/><span className="logo-text">PNMS</span></a>
	
		        </div>
				{ role ==="Entrepreneur" && [
					<nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
				    <ul className="app-menu list-unstyled accordion" id="menu-accordion">
					    <li className="nav-item">
							 <Link to="/overview">
					        <a className="nav-link " >
						        <span className="nav-icon">
						        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		  <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
		  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
		</svg>
						         </span>
		                         <span className="nav-link-text">Overview</span>
					        </a>
							</Link>
					    </li>
                        
                  
                
					    <li className="nav-item">
                        <Link to="/orders">
					        <a className="nav-link">
						        <span className="nav-icon">
						        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
  <circle cx="3.5" cy="5.5" r=".5"/>
  <circle cx="3.5" cy="8" r=".5"/>
  <circle cx="3.5" cy="10.5" r=".5"/>
</svg>
						         </span>
		                         <span className="nav-link-text">Orders</span>
					        </a>
                            </Link>
					    </li>
						<li className="nav-item">
                        <Link to="/addCategory">
					        <a className="nav-link">
						        <span className="nav-icon">
						        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
  <circle cx="3.5" cy="5.5" r=".5"/>
  <circle cx="3.5" cy="8" r=".5"/>
  <circle cx="3.5" cy="10.5" r=".5"/>
</svg>
						         </span>
		                         <span className="nav-link-text">Categories</span>
					        </a>
                            </Link>
					    </li>
						
                
					    <li className="nav-item">
                        <Link to="/addPlant">
					        <a className="nav-link">
						        <span className="nav-icon">
						        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
  <circle cx="3.5" cy="5.5" r=".5"/>
  <circle cx="3.5" cy="8" r=".5"/>
  <circle cx="3.5" cy="10.5" r=".5"/>
</svg>
						         </span>
		                         <span className="nav-link-text">Add Plant</span>
					        </a>
                            </Link>
					    </li>
                        <li className="nav-item">
						<Link to="/comments">
					        <a className="nav-link" >
						        <span className="nav-icon">
						        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
  <circle cx="3.5" cy="5.5" r=".5"/>
  <circle cx="3.5" cy="8" r=".5"/>
  <circle cx="3.5" cy="10.5" r=".5"/>
</svg>
						         </span>
		                         <span className="nav-link-text">Comments</span>
					        </a>
							</Link>
					    </li>
						    
				    </ul>
			    </nav>
				   
	
				 ] }
				 { role ==="Admin" && [
					
					<nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
				    <ul className="app-menu list-unstyled accordion" id="menu-accordion">
					    <li className="nav-item">
                        <Link to="/users">
					        <a className="nav-link">
						        <span className="nav-icon">
								<i class="fa-solid fa-users bi bi-card-list mt-1"  width="1em" height="1em"></i>
						       			         </span>
		                         <span className="nav-link-text">Users</span>
					        </a>
                            </Link>
					    </li>
						<li className="nav-item">
                        <Link to="/nurseries">
					        <a className="nav-link">
						        <span className="nav-icon">
								<i class="fa-solid fa-users bi bi-card-list mt-1"  width="1em" height="1em"></i>
						       			         </span>
		                         <span className="nav-link-text">Nurseries</span>
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