import React,  {useEffect, useContext, useState} from "react";
import MainContent from "../../components/MainContent";
import axios from "axios";
import { MainContext } from "../landing/Context/ContextProvider";
import { useNavigate } from "react-router";

const AddPlant = () => {
	const {plants,setPlant,nurseries,setNursery,categories, setCategory} = useContext(MainContext);
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	const [nurseryId,setId] = useState("");
	const loggedId = localStorage.getItem('loggedId');
	let formData = new FormData(); 

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [qty, setQty] = useState(0);
	const [unitPrice, setPrice] = useState(0);
	const [image, setImage] = useState('');
	const [categoryId, setCat] = useState('');


	useEffect(()=>{
		getPlants();
		getNurseries();
		getCategories();
		  
	},[plants,nurseries, categories])
	
	const handlingChange = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value);
        }
        if(e.target.name === 'description'){
            setDescription(e.target.value);
        }
        if(e.target.name === 'quantity'){
            setQty(e.target.value);
        }
        
        if(e.target.name === 'unitPrice'){
            setPrice(e.target.value);
        }
		if(e.target.name === 'image'){
            setImage(e.target.files[0]);
        }
		if(e.target.name === 'categoryId'){
            setCat(e.target.value);
        }
    }


	const getNurseries = async () => {
		try {
		  const response = await axios.get(
			'http://localhost:5000/api/Nurseries',
			{
			  headers: { 
                "Content-Type": "application/json",
                "authorization" : `Bearer ${token}` 
            },
              
			}
		  );
		 
          setNursery(response.data.map((nurs) => ({...nurs,id: nurs.id})));
		   nurseries.map((nu) => {
			if( loggedId == nu.entreprenuer.id){
			setId(nu.id)
						
			}
		})
		 
		
		} catch (err) {
			console.error(err);
		  	   
		}
	}
	const getCategories = async () => {
		try {
		  const response = await axios.get(
			'http://localhost:5000/api/categories',
			{
			  headers: { 
                "Content-Type": "application/json",
                "authorization" : `Bearer ${token}` 
            },
              
			}
		  );
		 
          setCategory(response.data.map((cat) => ({...cat,id: cat.id})));
		
		} catch (err) {
			console.error(err);
		  	   
		}
	}

const getPlants = async () => {
	try {
	  const response = await axios.get(
		'http://localhost:5000/api/plants',
		{
		  headers: { 
			"Content-Type": "application/json",
			"authorization" : `Bearer ${token}` 
		},
		  
		}
	  );
	  setPlant(response.data.map((plant => ({...plant,id: plant.id}))));

	} catch (err) {
		console.error(err);
			 
	}
}




const addPlant = async (e) => {
	e.preventDefault();
	formData.append('name', name);
		formData.append('description', description);
		formData.append('qty', qty);
		formData.append('image', image);
		formData.append('unitPrice', unitPrice);
		formData.append('categoryId', categoryId);
		formData.append('nurseryId', nurseryId);
		console.log("The response is", [...formData])
		try{
		const res = await axios.post(
			'http://localhost:5000/api/plants',formData,
			{
				headers: { 
					"Content-Type": "application/json",
					"authorization" : `Bearer ${token}` 
				},
			}
		);
	
		alert("Successfully created a new plant");
		setName('');
		setDescription('');
		setQty(0);
		setPrice(0);
		setImage();
		setCat('')
		navigate("/addCategory")

		} catch(error){
			console.log(error);
			console.log(error.message);
		}
}

const deletePlant= async (id) => {
	try {
	  const response = await axios.delete(
		`http://localhost:5000/api/plants/${id}`,
		{
		  headers: { 
			"Content-Type": "application/json",
			"authorization" : `Bearer ${token}` 
		},
		  
		}
	  );
	alert("Plant deleted successfully");
	navigate('/addPlant')
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
			            <h1 className="app-page-title mb-0">Plant</h1>
						
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
                <a class="flex-sm-fill text-sm-center nav-link active" id="orders-all-tab" data-bs-toggle="tab" href="#orders-add" role="tab" aria-controls="orders-all" aria-selected="true">Add Plant</a>
				    <a class="flex-sm-fill text-sm-center nav-link"  id="orders-paid-tab" data-bs-toggle="tab" href="#orders-all" role="tab" aria-controls="orders-paid" aria-selected="false">All plants</a>
				   
				</nav>
				
				
				<div className="tab-content" id="orders-table-tab-content">
			        <div className="tab-pane fade show active" id="orders-add" role="tabpanel" aria-labelledby="orders-all-tab">
					    <div className="app-card app-card-orders-table  mb-5">
						    <div className="app-card-body">
							    <div className="table-responsive">
                                <div class="col-12 col-md-8">
		                <div class="app-card app-card-settings p-4">	    
						    <div class="app-card-body">
							    <form class="settings-form row" onSubmit={addPlant}>
                                    
								    <div class="mb-3 col-ml-5">
									    <label for="setting-input-1" class="form-label">Name</label>
									    <input type="text" onChange={handlingChange} value={name}  name="name" class="form-control" id="setting-input-1" required />
									</div>
									<div class="mb-3">
									    <label for="setting-input-2" class="form-label">Description</label>
									    <input type="text" onChange={handlingChange} value={description} name="description" class="form-control" id="setting-input-2"  required />
									</div>
								    <div class="mb-3">
									    <label for="setting-input-3" class="form-label">Quantity</label>
									    <input type="number" onChange={handlingChange} value={qty}  name="quantity" class="form-control" id="setting-input-3" />
									</div>
                                    <div class="mb-3">
									    <label for="setting-input-3" class="form-label">unit Price</label>
									    <input type="text"onChange={handlingChange} value={unitPrice} name="unitPrice" class="form-control" id="setting-input-3" />
									</div>
                                    <div class="mb-3">
									    <label for="setting-input-3" class="form-label">image</label>
									    <input type="file" onChange={handlingChange}  name="image" class="form-control" id="setting-input-3" />
									</div>
                                    <div class="mb-3">
									    <label for="setting-input-3" class="form-label">category</label>
										<select class="form-control" id="inputGroupSelect01" onChange={handlingChange} name="categoryId" >
										<option selected disabled>Choose...</option>
										{ categories.map((cat)=>{
											return(
									<option value={cat.id} >{cat.name}</option>
																   )

										})}
										</select>
                                           
                                
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
												<th class="cell">Name</th>
												<th class="cell">Description</th>
												<th class="cell">Quantity</th>
												<th class="cell">Unit price</th>
												<th class="cell">Category</th>
												<th class="cell"></th>
											</tr>
										</thead>
										<tbody>
										{ plants.map((plant) => {
                                       return(
										<tr>
                                                <td class="cell">{plant.name}</td>
												<td class="cell"><span class="truncate">{plant.description}</span></td>
												<td class="cell">{plant.qty}</td>
                                                <td class="cell">{plant.unitPrice}</td>
												<td class="cell">{plant.category.name}</td>			
												<td class="cell">
												
													<a class="mx-3">
													<i class="fa-solid fa-pen-to-square"></i>
													</a>
													<a class="mx-2">
													<span onClick={() => deletePlant(plant.id)}><i class="fa-solid fa-trash" ></i></span>
													</a>
													
													
													
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

export default AddPlant;