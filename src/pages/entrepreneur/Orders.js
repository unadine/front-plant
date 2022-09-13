import React from "react";
import MainContent from "../../components/MainContent";

const Orders = () => {

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
                      <th class="cell">Order</th>
												<th class="cell">Plant</th>
												<th class="cell">Customer</th>
												<th class="cell">Quantity</th>
												<th class="cell">Total</th>
												<th class="cell">Status</th>
												<th class="cell"></th>
											</tr>
										</thead>
										<tbody>
											
											<tr>
												<td className="cell">#01</td>
												<td className="cell"><span className="truncate">Mangoes</span></td>
												<td className="cell">Jayden Massey</td>
												<td className="cell">3</td>
												<td className="cell">$199.00</td>
												<td className="cell"><span className="badge bg-danger">Not Delivered</span></td>
												<td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
											<tr>
												<td className="cell">#02</td>
												<td className="cell"><span className="truncate">Tulips</span></td>
												<td className="cell">kelly Winson</td>
												<td className="cell">2</td>
												<td className="cell">$199.00</td>
												<td className="cell"><span className="badge bg-success">Delivered</span></td>
												<td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
											<tr>
												<td className="cell">#03</td>
												<td className="cell"><span className="truncate">Roses</span></td>
												<td className="cell">Lola Kenn</td>
												<td className="cell">2</td>
												<td className="cell">$199.00</td>
												<td className="cell"><span className="badge bg-success">Delivered</span></td>
												<td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
		
										</tbody>
									</table>
						        </div>
						       
						    </div>
						<nav className="app-pagination">
							<ul className="pagination justify-content-center">
								<li className="page-item disabled">
									<a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
							    </li>
								<li className="page-item active"><a className="page-link" href="#">1</a></li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
								<li className="page-item">
								    <a className="page-link" href="#">Next</a>
								</li>
							</ul>
						</nav>
						
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