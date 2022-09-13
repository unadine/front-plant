import {Link } from "react-router-dom";
import { useState } from   'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";

const Signup = () => {
    return (
        
<body class="app app-signup p-0">    	
    <div class="row g-0 app-auth-wrapper">
	    <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
		    <div class="d-flex flex-column align-content-end">
            <div class="auth-option pt-5 mb-3">
                       <Link to="/"> 
                       <i class="fa-solid fa-arrow-left"></i>
                       <a class="text-link"> Back</a>
                        </Link>
                        </div>
						
			    <div class="app-auth-body mx-auto">	
				    <div class="app-auth-branding mb-4"><a class="app-logo" ><img class="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo"/></a></div>
					<ToastContainer/>
					<h2 class="auth-heading text-center mb-4">Sign up to PNMS</h2>	
					<div class="text-center mt-5">
					<Link to="/signup/client"> <button type="button" class="btn app-btn-primary mx-5">As Client</button></Link>
					<Link to="/signup/entrepreneur"> <button type="button" class="btn app-btn-primary mr-5">As Entrepreneur</button></Link>
					</div>				
	
					<div class="auth-form-container text-start mx-auto">        	
							
					
						
						<div class="auth-option text-center pt-5">Already have an account? 
                       <Link to="/login"> <a class="text-link" >Log in</a> </Link>
                        </div>
					</div>
					
					
				    
			    </div>
		    
			    <footer class="app-auth-footer">
				    <div class="container text-center py-3">
			        <small class="copyright">Copyright 2022</small>
				       
				    </div>
			    </footer>
		    </div> 
	    </div>
	    <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
		    <div class="auth-background-holder">			    
		    </div>
		    <div class="auth-background-mask"></div>
		    <div class="auth-background-overlay p-3 p-lg-5">
			    <div class="d-flex flex-column align-content-end h-100">
				    <div class="h-100"></div>
				
				</div>
		    </div>
	    </div>
    
    </div>


</body>
    )
}
export default Signup;
