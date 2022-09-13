import React from "react";
import MainContent from "../../components/MainContent";

const Overview = () => {

  return (
    <>
    <MainContent 
        content={
             <>
             <div class="app-wrapper">
	    
	    <div class="app-content pt-3 p-md-3 p-lg-4">
		    <div class="container-xl">		    
			    <h1 class="app-page-title">Overview</h1>		    
				    
			    <div class="row g-4 mb-4">
				    <div class="col-6 col-lg-4">
					    <div class="app-card app-card-stat shadow-sm h-100">
						    <div class="app-card-body p-3 p-lg-4">
							    <h4 class="stats-type mb-1">Total Sales</h4>
							    <div class="stats-figure">RWF 12,628</div>
							    
						    </div>
						    <a class="app-card-link-mask" href="#"></a>
					    </div>
				    </div>
				    
				    <div class="col-6 col-lg-4">
					    <div class="app-card app-card-stat shadow-sm h-100">
						    <div class="app-card-body p-3 p-lg-4">
							    <h4 class="stats-type mb-1">Pending Orders</h4>
							    <div class="stats-figure">0</div>
							   
						    </div>
						    <a class="app-card-link-mask" href="#"></a>
					    </div>
				    </div>
				    <div class="col-6 col-lg-4">
					    <div class="app-card app-card-stat shadow-sm h-100">
						    <div class="app-card-body p-3 p-lg-4">
							    <h4 class="stats-type mb-1">Plants</h4>
							    <div class="stats-figure">0</div>
							    
						    </div>
						    <a class="app-card-link-mask" href="#"></a>
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

export default Overview;




  