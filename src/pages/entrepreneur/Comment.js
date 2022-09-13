import React from "react";
import MainContent from "../../components/MainContent";

const Comment = () => {

  return (
    <>
    <MainContent 
        content={
             <>
       
    <div class="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">

        </div>
	    
	    <div class="app-content pt-3 p-md-3 p-lg-4">
		    <div class="container-xl">
			    <div class="position-relative mb-3">
				    <div class="row g-3 justify-content-between">
					    <div class="col-auto ">
					        <h1 class="app-page-title mb-0">Comments</h1>
					    </div>
					    <div class="col-auto">
					        <div class="page-utilities">
							    
					        </div>
					    </div>
				    </div>
			    </div>
			    
                <div class="app-card app-card-notification shadow-sm mb-4">
				    <div class="app-card-header px-4 py-3">
				        <div class="row g-3 align-items-center">
					        <div class="col-12 col-lg-auto text-center text-lg-start">						        
				                <img class="profile-image" src="assets/images/profiles/profile-1.png" alt="" />
					        </div>
					        <div class="col-12 col-lg-auto text-center text-lg-start">
						        <h4 class="notification-title mb-1">John Doe</h4>
						        
						        <ul class="notification-meta list-inline mb-0">
							        <li class="list-inline-item">30/03/2022</li>

						        </ul>
						   
					        </div>
				        </div>
				    </div>
				    <div class="app-card-body p-4">
					    <div class="notification-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ultrices dolor, ac maximus ligula. Donec ex orci, mollis ac purus vel, tempor pulvinar justo. Praesent nibh massa, posuere non mollis vel, molestie non mauris. Aenean consequat facilisis orci, sed sagittis mauris interdum at.</div>
				    </div>
				    
				</div>
                <div class="text-center mt-4"><a class="btn app-btn-secondary" href="#">Load more notifications</a></div>
	    
    </div>
    </div>
    </div>
         
      </>
    }
    />
  
    </>
  );
};

export default Comment;