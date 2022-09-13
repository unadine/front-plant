import React,  {useEffect, useContext,useState} from "react";
import MainContent from "../../components/MainContent";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { MainContext } from "../landing/Context/ContextProvider";

const UpdateNursery = () => {
    const { id } = useParams();
	
    const {users, setUser} = useContext(MainContext);

	const navigate = useNavigate();

	const token = localStorage.getItem('token');
	const [name, setName] = useState('');
	const [district, setDistrict] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [image, setImage] = useState();
	const [entrepreneur_id, setEntrepreneurId] = useState('');
			
	useEffect(()=>{
		getUsers();
		getNursery();
		  
},[id,users])

  const getNursery = async () => {
	try {
	  const response = await axios.get(
		`http://localhost:5000/api/Nurseries/${id}`,
		{
		  headers: { 
			"Content-Type": "application/json",
			"authorization" : `Bearer ${token}` 
		},
		  
		}
	  );
	  console.log(response.data)
	  setName(response.data.name)
      setDistrict(response.data.district)
      setAddress(response.data.address)
      setPhone(response.data.phone)
	  setImage(response.data.image)
	  setEntrepreneurId(response.data.entrepreneur.id)
	 
	} catch (err) {
		console.error(err);
			 
	}
}


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
            setImage(e.target.value);
        }
		if(e.target.name === 'entrepreneur_id'){
            setEntrepreneurId(e.target.value);
        }       
    
    }

	

	const updateNursery = async (e) => {
		e.preventDefault();
		var data = {
			name:name,
			district:district,
			address:address,
			phone:phone,
			image:image,
			entrepreneurId:entrepreneur_id,
			
		  }
		try{
		const res = await axios.patch(
			`http://localhost:5000/api/nurseries/${id}`,data,
			{
				headers: { 
					"Content-Type": "application/json",
					"authorization" : `Bearer ${token}` 
				},
			}
		);
		alert("Successfully updated");
		navigate("/nurseries")

		} catch(error){
			console.log(error);
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
	
			console.error(err);
		  	   
		}
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
                <a class="flex-sm-fill text-sm-center nav-link active" id="orders-all-tab" data-bs-toggle="tab" href="#orders-add" role="tab" aria-controls="orders-all" aria-selected="true">Update Nursery</a>
				   
				</nav>
				
				
				<div className="tab-content" id="orders-table-tab-content">
			        <div className="tab-pane fade show active" id="orders-add" role="tabpanel" aria-labelledby="orders-all-tab">
					    <div className="app-card app-card-orders-table  mb-5">
						    <div className="app-card-body">
							    <div className="table-responsive">
                                <div class="col-12 col-md-8">
		                <div class="app-card app-card-settings p-4">	    
						    <div class="app-card-body">
							    <form class="settings-form row" id="myForm" onSubmit={updateNursery}>
                                    
								    <div class="mb-3 col-ml-5">
									<label for="setting-input-1" class="form-label">Name</label>
									<input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} class="form-control" id="setting-input-1" required />
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
							<div class="mb-3">
							<label for="setting-input-3" class="form-label">Entrepreneur</label>
							<select onChange={handlingChange} name="entrepreneur_id" class="form-control" id="inputGroupSelect01">
							{ users.map((user) => {
								if(user.role == "Entrepreneur")
								return(
									<>
									<option  value={user.id}>{user.name}</option>
									
									
								</>
								
													)
							 })}
							  </select>
							</div>
								
								    
									<button type="submit" class="btn app-btn-primary" >Update </button>
							    </form>
						    </div>
						    
						</div>
	                </div>
						        </div>
						       
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

export default UpdateNursery;