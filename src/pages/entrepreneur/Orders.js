import React,{useContext, useEffect,useState} from "react";
import axios from "axios";
import MainContent from "../../components/MainContent";
import { MainContext } from "../landing/Context/ContextProvider";
import { useNavigate } from "react-router";

const Orders = () => {
	const {orders, setOrder} = useContext(MainContext);
	const { plants, setPlant } = useContext(MainContext);
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
      
	useEffect(()=>{
		getOrders();
		getPlants()
		  
	},[orders,plants])
	const getOrders = async () => {
		try {
		  const response = await axios.get(
			'http://localhost:5000/api/order-details',
			{
			  headers: { 
                "Content-Type": "application/json",
                "authorization" : `Bearer ${token}` 
            },
              
			}
		  );
          setOrder(response.data.map((order => ({...order}))));
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
			            <h1 className="app-page-title mb-0">Orders</h1>
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
                                       
												<th  class="cell">Plant Name</th>
												<th class="cell">Quantity</th>
												<th class="cell">Status</th>
												
											</tr>
										</thead>
										<tbody>
										{ orders.map((order) => {
											return(
												<tr>
												<td class="cell">{order.plant.name}</td>
												<td class="cell">{order.qty}</td>
												<td class="cell">{order.order.status}</td>
                                               		
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

export default Orders;