import React,  { useEffect, useContext, useState} from "react";
import axios from "axios";
import MainContent from "../../components/MainContent";
import { MainContext } from "../landing/Context/ContextProvider";
import { useNavigate } from "react-router";

const Category = () => {
	
		const {categories,setCategory} = useContext(MainContext);
		const navigate = useNavigate();
		const token = localStorage.getItem('token');
		const [name, setName] = useState('');

		useEffect(()=>{
			getCategories();
			  
		},[categories])

	
		const addCategory = async (e) => {
			e.preventDefault();
			var data = {
				name: name
			  }
			try{
			 await axios.post(
				'http://localhost:5000/api/categories',data,
				{
					headers: { 
						"Content-Type": "application/json",
						"authorization" : `Bearer ${token}` 
					},
				}
			);
			alert("Successfully created a new category");
			setName('');
			navigate("/addCategory")
	
			} catch(error){
				console.log(error);
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
		  console.log(response);
          setCategory(response.data.map((category => ({...category,id: category.id}))));
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
			            <h1 className="app-page-title mb-0">Category</h1>
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
                <a class="flex-sm-fill text-sm-center nav-link active" id="orders-all-tab" data-bs-toggle="tab" href="#cat-add" role="tab" aria-controls="orders-all" aria-selected="true">Add Category</a>
				    <a class="flex-sm-fill text-sm-center nav-link"  id="orders-paid-tab" data-bs-toggle="tab" href="#cat-all" role="tab" aria-controls="orders-paid" aria-selected="false">All categories</a>
				   
				</nav>
				
				
				<div className="tab-content" id="orders-table-tab-content">
			        <div className="tab-pane fade show active" id="cat-add" role="tabpanel" aria-labelledby="orders-all-tab">
					    <div className="app-card app-card-orders-table  mb-5">
						    <div className="app-card-body">
							    <div className="table-responsive">
                                <div class="col-12 col-md-8">
		                <div class="app-card app-card-settings p-4">	    
						    <div class="app-card-body">
							    <form class="settings-form row" onSubmit={addCategory} >
                                    
								    <div class="mb-3 col-ml-5">
									    <label for="setting-input-1" class="form-label">Name</label>
									    <input type="text" onChange={(e) => setName(e.target.value)} name="name" value={name} class="form-control" id="setting-input-1" required />
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
            
			        
			        <div class="tab-pane fade" id="cat-all" role="tabpanel" aria-labelledby="orders-paid-tab">
					    <div class="app-card app-card-orders-table mb-5">
						    <div class="app-card-body">
							    <div class="table-responsive">
								    
							        <table class="table mb-0 text-left">
										<thead>
											<tr>
												<th class="cell">Name</th>
												
												<th class="cell"></th>
											</tr>
										</thead>
										<tbody>
										{ categories.map((cat) => {
                    return(
						
						<tr>
						<td class="cell">{cat.name}</td>			
						
						
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

export default Category;