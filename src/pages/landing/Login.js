import {Link} from "react-router-dom";
import { useState, useContext } from   'react';
import { useNavigate } from "react-router";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainContext } from "./Context/ContextProvider";

const Login = () => {
	const {setAuth } = useContext(MainContext);
	const {nurseries, setNursery} = useContext(MainContext);
	const [id, setId] = useState("");

	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handlingChange = (e) => {
       
        if(e.target.name === 'email'){
            setEmail(e.target.value);
        }
        if(e.target.name === 'password'){
            setPassword(e.target.value);
        }    
    
    }

	  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  const response = await axios.post(
			'http://localhost:5000/auth/login',
			JSON.stringify({ email, password }),
			{
			  headers: { "Content-Type": "application/json" },
			}
		  );
		  const accessToken = response?.data?.token;
		  const role = response?.data?.user.role;
		  const loggedId = response?.data?.user.id;
		  localStorage.setItem('token', accessToken)
		  localStorage.setItem('loggedId',response.data.user.id)
		  localStorage.setItem('loggedName',response.data.user.name)
		  localStorage.setItem('loggedEMail',response.data.user.email )
		  localStorage.setItem('loggedPhone',response.data.user.phone)
		  localStorage.setItem('loggedRole',response.data.user.role)
		  setAuth(response.data.user);
		  console.log(response.data.user)
		  setEmail("");
		  setPassword("");
		  
		  if( role === "Admin"){
			navigate("/users");
		  }else if( role === "Entrepreneur"){
			navigate("/overview")
		  }else if( role === "Client"){
			navigate("/shop")
		  }	
		 
		} catch (err) {
			console.error(err);
			toast.error("Login Failed");
		  	   
		}
	}


    return (
        
<body class="app app-login p-0">    	
    <div class="row g-0 app-auth-wrapper">
	    <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
		    <div class="d-flex flex-column align-content-end">
			<div class="auth-option pt-5 mb-3" style={{Color: "green" }}>
                       <Link to="/"> 
                       <i class="fa-solid fa-arrow-left"></i>
                       <a class="text-link"> Back</a>
                        </Link>
                        </div>
			    <div class="app-auth-body mx-auto">	
				    <div class="app-auth-branding mb-4"><a class="app-logo" ><img class="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo"/></a></div>
					<h2 class="auth-heading text-center mb-5">Log in to PNMS</h2>
					<ToastContainer/>
			        <div class="auth-form-container text-start">
						<form class="auth-form login-form" onSubmit={handleSubmit}>         
							<div class="email mb-3">
								<label class="sr-only" for="signin-email">Email</label>
								<input  onChange={handlingChange} id="email" name="email" type="email" class="form-control signin-email" placeholder="Email address" required="required"/>
							</div>
							<div class="password mb-3">
								<label class="sr-only" for="signin-password">Password</label>
								<input onChange={handlingChange} id="password" name="password" type="password" class="form-control signin-password" placeholder="Password" required="required"/>
								<div class="extra mt-3 row justify-content-between">
									
									
								</div>
							</div>
							<div class="text-center">
								<button type="submit" class="btn app-btn-primary w-100 theme-btn mx-auto" style={{backgroundColor: "green" }}>Log In</button>
							</div>
						</form>
						
						<div class="auth-option text-center pt-5">No Account? Sign up 
                        <Link to="/signup"> <a class="text-link" style={{Color: "green" }}>here</a>. </Link>
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

export default Login;