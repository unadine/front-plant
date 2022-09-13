import {Link } from "react-router-dom";
import { useState } from   'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";

const AddNursery = () => {
	const navigate = useNavigate();
    const token = localStorage.getItem('token');
	const [name, setName] = useState('');
	const [district, setDistrict] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [image, setImage] = useState();

      const handlingChange = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value);
        }
        if(e.target.name === 'district'){
            setDistrict(e.target.value);
        }
        if(e.target.name === 'address'){
            setAddress(e.target.value);
        }
        
        if(e.target.name === 'phone'){
            setPhone(e.target.value);
        }
		if(e.target.name === 'image'){
            setImage(e.target.files[0]);
        }    
    
    }


	const addNursery = async (e) => {
		e.preventDefault();
		var data = {
			name:name,
			district:district,
			address:address,
			phone:phone,
			image:image,
			
		  }
		try{
		const res = await axios.post(
			'http://localhost:5000/api/nurseries',data,
			{
				headers: { 
					"Content-Type": "application/json",
					"authorization" : `Bearer ${token}` 
				},
			}
		);
		alert("Successfully created a new nursery");
		navigate("/nurseries")

		} catch(error){
			console.log(error);
		}
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
                        <h2 class="auth-heading text-center mb-4">Create Your Nursery</h2>			
                        <div class="auth-form-container text-start mx-auto">        
                            <form class="settings-form row" id="myForm" onSubmit={addNursery}>
                                    
                            <div class="mb-3 col-ml-5">
                                <label for="setting-input-1" class="form-label">Name</label>
                                <input onChange={handlingChange} type="text" name="name" value={name} class="form-control" id="setting-input-1" required />
                            </div>
                            <div class="mb-3">
                                <label for="setting-input-2" class="form-label">district</label>
                                <input onChange={handlingChange} type="text" name="district" value={district} class="form-control" id="setting-input-2"  required />
                            </div>
                            <div class="mb-3">
                                <label for="setting-input-3" class="form-label">address</label>
                                <input onChange={handlingChange} type="text" name="address" value={address} class="form-control" id="setting-input-3" />
                            </div>
                            <div class="mb-3">
                                <label for="setting-input-3" class="form-label">Phone</label>
                                <input onChange={handlingChange} type="text" name="phone" value={phone} class="form-control" id="setting-input-3" />
                            </div>
                            <div class="mb-3">
                            <label for="setting-input-3" class="form-label">Image</label>
                            <input onChange={handlingChange} type="file" name="image" value={image} class="form-control" id="setting-input-3" />
                        </div>
                         
                            
                            <button type="submit" class="btn app-btn-primary" >Save </button>
                        </form>
                          
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
export default AddNursery;
