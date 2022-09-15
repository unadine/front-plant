import React,  {useEffect, useContext,useState} from "react";
import MainContent from "../../components/MainContent";
import { useNavigate } from "react-router";
import axios from "axios";
import { MainContext } from "../landing/Context/ContextProvider";

const Nurseries = () => {
	
    const {users, setUser} = useContext(MainContext);
	const {nurseries, setNursery} = useContext(MainContext);
	let formData = new FormData(); 
	const navigate = useNavigate();

	const token = localStorage.getItem('token');
	const [name, setName] = useState('');
	const [district, setDistrict] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [image, setImage] = useState();
			
	useEffect(()=>{
		getUsers();
		getNurseries();
		  
},[users,nurseries])


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
		formData.append('name', name);
		formData.append('district', district);
		formData.append('address', address);
		formData.append('phone', phone);
		formData.append('image', image);
		try{
		const res = await axios.post(
			'http://localhost:5000/api/nurseries',formData,
			{
				headers: { 
					"Content-Type": "application/json",
					"authorization" : `Bearer ${token}` 
				},
			}
		);
		alert("Successfully created a new nursery");
		setName('');
		setDistrict('');
		setAddress('');
		setPhone('');
		setImage();
		navigate("/nurseries")

		} catch(error){
			console.log(error);
		}
	}
	const deleteNursery= async (id) => {
		try {
		  const response = await axios.delete(
			`http://localhost:5000/api/nurseries/${id}`,
			{
			  headers: { 
                "Content-Type": "application/json",
                "authorization" : `Bearer ${token}` 
            },
              
			}
		  );
        console.log(response);
		alert("Nursery deleted successfully");
		navigate('/nurseries')
		} catch (err) {
			alert(err.message)
			console.error(err);
		  	   
		}
	}
	 
	const getUsers = async () => {
		try {
		  const response = await axios.get(
			'http://localhost:5000/api/users',
			{
			  headers: { 
                "Content-Type": "application/json",
                "authorization" : `Bearer ${token}` 
            },
              
			}
		  );
          setUser(response.data.map((user => ({...user,id: user.id}))));
		} catch (err) {
			// alert(err);
			console.error(err);
		  	   
		}
	}


	const getNurseries = async () => {
		try {
		  const response = await axios.get(
			'http://localhost:5000/api/nurseries',
			{
			  headers: { 
                "Content-Type": "application/json",
                "authorization" : `Bearer ${token}` 
            },
              
			}
		  );
          setNursery(response.data.map((nu => ({...nu,id: nu.id}))));
		} catch (err) {
			console.error(err);
		  	   
		}
	}


	const UpdateNursery = id => {
		navigate("/nurseries/update/"+id)
	  }
  return (
    <>
    <MainContent 
        content={
             <>
       <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">

        </div>
	    
	    <div className="app-content pt-3 p-md-3 p-lg-4">
		    <div className="container-xl">
			    
			    <div className="row g-3 mb-4 align-items-center justify-content-between">
				    <div className="col-auto">
			            <h1 className="app-page-title mb-0">Plant Nursery</h1>
				    </div>
				    <div className="col-auto">
					     <div className="page-utilities">
						    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
							    <div className="col-auto">
								 
					                
							    </div>
							   
							    
						    </div>
					    </div>
				    </div>
			    </div>
                <nav id="orders-table-tab" className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4">
                <a class="flex-sm-fill text-sm-center nav-link active" id="orders-all-tab" data-bs-toggle="tab" href="#orders-add" role="tab" aria-controls="orders-all" aria-selected="true">Add Nursery</a>
				    <a class="flex-sm-fill text-sm-center nav-link"  id="orders-paid-tab" data-bs-toggle="tab" href="#orders-all" role="tab" aria-controls="orders-paid" aria-selected="false">All Nurseries</a>
				   
				</nav>
				
				
				<div className="tab-content" id="orders-table-tab-content">
			        <div className="tab-pane fade show active" id="orders-add" role="tabpanel" aria-labelledby="orders-all-tab">
					    <div className="app-card app-card-orders-table  mb-5">
						    <div className="app-card-body">
							    <div className="table-responsive">
                                <div class="col-12 col-md-8">
		                <div class="app-card app-card-settings p-4">	    
						    <div class="app-card-body">
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
									<input onChange={handlingChange} type="file" name="image" class="form-control" id="setting-input-3" />
								</div>
                                 
                                    
									<button type="submit" class="btn app-btn-primary" >Save </button>
							    </form>
						    </div>
						    
						</div>
	                </div>
						        </div>
						       
						    </div>
						
			        </div>
				</div>
				
				
			    
		    </div>
            
			        
			        <div class="tab-pane fade" id="orders-all" role="tabpanel" aria-labelledby="orders-paid-tab">
					    <div class="app-card app-card-orders-table mb-5">
						    <div class="app-card-body">
							    <div class="table-responsive">
								<table class="table mb-0 text-left">
<thead>
    <tr>
        <th class="cell">Plant</th>
        <th class="cell">district</th>
        <th class="cell">address</th>
        <th class="cell">Phone</th>
        <th class="cell">Entrepreneur</th>
        <th class="cell"></th>
    </tr>
</thead>
<tbody>
{ nurseries.map((nu, index) => {
    return(
        
        <tr key={index}>
        <td class="cell">{nu.name}</td>	
        <td class="cell">{nu.district}</td>	
        <td class="cell">{nu.address}</td>	
        <td class="cell">{nu.phone}</td>	
        <td class="cell">{nu.entreprenuer.name}</td>	
        <td>
        <span class="mx-2" onClick={() => UpdateNursery(nu.id)} > <i class="fa-solid fa-pen-to-square"></i></span>
        <span class="mx-2" onClick={() => deleteNursery(nu.id)}> <i class="fa-solid fa-trash-can"></i></span>  
        </td>			
        
        
    </tr>
    
                        )
})}





    
    
    
    

    
    

</tbody>
</table>
								    
							       
						        </div>
						    </div>	
						</div>
			        </div>

	    </div>
	    
    </div>
    </div>
         
      </>
    }
    />
  
    </>
  );
};

export default Nurseries;