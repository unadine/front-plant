import {Link } from "react-router-dom";
import { useState } from   'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";

const EntrepreneurSignUp = () => {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [tinNumber, setTin] = useState("");
	const [password, setPassword] = useState("");

	const handlingChange = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value);
        }
        if(e.target.name === 'email'){
            setEmail(e.target.value);
        }
        if(e.target.name === 'password'){
            setPassword(e.target.value);
        }
        
        if(e.target.name === 'phone'){
            setPhone(e.target.value);
        }
		if(e.target.name === 'tin'){
            setTin(e.target.value);
        }
        
    
    }
	const user = {
		name : name,
		email : email,
		password : password,
		phone : phone,
        role:  "Entrepreneur",
		tinNumber  : tinNumber
	  };

	const signup = async (e) => {
		e.preventDefault();
		try {
			console.log(user);
			axios({
				method: 'post',
				url: 'http://localhost:5000/auth/register',
				data: user
			  });
			toast.success("Successfully Signup");
			navigate("/login");
		  
		} catch (error) {
		  console.error(error);
		  toast.error("An Error occured");
		}

		setName("")
        setEmail("");
        setPassword("");
        setPhone("");
		setTin("");
	  }
    return (
        
<body class="app app-signup p-0">    	
    <div class="row g-0 app-auth-wrapper">
	    <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
		    <div class="d-flex flex-column align-content-end">
            <div class="auth-option pt-2 mb-5">
                       <Link to="/signup"> 
                       <i class="fa-solid fa-arrow-left"></i>
                       <a class="text-link"> Back</a>
                        </Link>
            </div>
						
			    <div class="app-auth-body mx-auto">	

					<ToastContainer/>
					<h2 class="auth-heading text-center mb-4">Sign up to PNMS as Entreprenuer</h2>			
					<div class="auth-form-container text-start mx-auto">
						<form class="auth-form auth-signup-form" onSubmit={signup}>         
							<div class="email mb-3">
								<label class="sr-only" for="signup-email">Your Name</label>
								<input onChange={handlingChange} id="name" name="name" type="text" class="form-control signup-name" placeholder="Full name" required="required"/>
							</div>
							<div class="email mb-3">
								<label class="sr-only" for="signup-email">Your Email</label>
								<input onChange={handlingChange} id="email" name="email" type="email" class="form-control signup-email" placeholder="Email" required="required"/>
							</div>
							<div class="password mb-3">
								<label class="sr-only" for="signup-password">Password</label>
								<input onChange={handlingChange} id="password" name="password" type="password" class="form-control signup-password" placeholder="Create a password" required="required"/>
							</div>
							<div class="password mb-3">
								<label class="sr-only" for="signup-password">Phone Number</label>
								<input onChange={handlingChange} id="phone" name="phone" type="text" class="form-control signup-password" placeholder="phone" required="required"/>
							</div>
							<div class="password mb-3">
								<label class="sr-only" for="signup-password">tin Number</label>
								<input onChange={handlingChange} id="tin" name="tin" type="text" class="form-control signup-password" placeholder="tinNumber" />
							</div>
							
							
							<div class="text-center">
								<button type="submit" class="btn app-btn-primary w-100 theme-btn mx-auto">Sign Up</button>
							</div>
						</form>
						
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
export default EntrepreneurSignUp;
