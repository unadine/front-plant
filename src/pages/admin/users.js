import React, { useEffect, useContext} from "react";
import axios from "axios";
import MainContent from "../../components/MainContent";
import { useNavigate } from "react-router";
import { MainContext } from "../landing/Context/ContextProvider";

const Users = () => {

    const {users, setUser} = useContext(MainContext);
	const token = localStorage.getItem('token');
	const navigate = useNavigate();

        useEffect(()=>{
			getUsers();
			  
		},[users])
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

	const deleteUser = async (id) => {
		try {
		  const response = await axios.delete(
			`http://localhost:5000/api/users/${id}`,
			{
			  headers: { 
                "Content-Type": "application/json",
                "authorization" : `Bearer ${token}` 
            },
              
			}
		  );
        console.log(response);
		alert("User deleted successfully");
		navigate('/users')
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
			            <h1 className="app-page-title mb-0">Users</h1>
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
				    <a className="flex-sm-fill text-sm-center nav-link active" id="orders-all-tab" data-bs-toggle="tab" href="#orders-all" role="tab" aria-controls="orders-all" aria-selected="true">All</a>
				</nav>
				
				
				<div className="tab-content" id="orders-table-tab-content">
			        <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
					    <div className="app-card app-card-orders-table shadow-sm mb-5">
						    <div className="app-card-body">
							    <div className="table-responsive">
							        <table className="table app-table-hover mb-0 text-left">
										<thead>
                                        <tr>
                                            <th class="cell">Id</th>
  											<th class="cell">Name</th>
                                            <th class="cell">Email</th>
                                            <th class="cell">Phone</th>
                                            <th class="cell">TinNumber</th>
                                            <th class="cell">Role</th>
                                            <th class="cell">Action</th>
 											</tr>
										</thead>
										<tbody>
                                        { users.map((user) => {
                                                    return(
                                                        
                                                        <tr>
                                                        <td class="cell">{user.id}</td>	
                                                        <td class="cell">{user.name}</td>	
                                                        <td class="cell">{user.email}</td>	
                                                        <td class="cell">{user.phone}</td>	
                                                        <td class="cell">{user.tinNumber}</td>	
                                                        <td class="cell">{user.role}</td>
                                                        <td>
                                                        <span class="mx-2"> <i class="fa-solid fa-pen-to-square"></i></span>
                                                        <span class="mx-2" onClick={() => deleteUser(user.id)}> <i class="fa-solid fa-trash-can"></i></span>  
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
    </div>
         
      </>
    }
    />
  
    </>
  );
};

export default Users;