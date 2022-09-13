import React, { useEffect, useContext} from "react";
import LandingContent from "../../components/landing/LandingContent";
import axios from "axios";
import { MainContext } from "./Context/ContextProvider";

const Shop = () => {
    const { auth, nurseries,setNursery} = useContext(MainContext);
    const token = localStorage.getItem('token');
    useEffect(()=>{
        getNurseries();
    },[nurseries])

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
          console.log(nurseries)
		} catch (err) {
			console.error(err);
		  	   
		}
	}
    const getNursery = id => {
        window.location = '/shop/'+ id
      }


    return (
    <LandingContent 
        content={ 
        <>
    <link href="assets/css/landing.css" rel="stylesheet" />
        <header class=" background py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Check out our Plant Nurseries</p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <div class="container px-5 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                { nurseries.map((nursery) => {

                    return(
                    <div class="col mb-5" >
                        <div class="card h-100">
                            <img class="card-img-top" src={ nursery.image} alt={ nursery.name} />
                            <div class="card-body p-4">
                                <div class="">
                                    <h5 class="fw-bolder">{ nursery.name }</h5>

                                </div>
                                <div class="app-doc-meta mb-4">
                                <ul class="list-unstyled mb-0">
                                    <li><span class="text-muted ">District:</span> { nursery.district }</li>
                                    <li><span class="text-muted">Location:</span> { nursery.address }</li>
                                    <li><span class="text-muted">Contacts:</span> { nursery.phone }</li>         
                                   
                                </ul>
                            </div>

                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        
                               <div class="text-center" onClick={()=> getNursery(nursery.id)}  >
                            <a class="btn btn-primary w-100 mx-auto" >View options</a>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                    )
                })}
            </div>
            
            </div>
        </section>
        </>
        }
        />
    );
        

};

export default Shop;