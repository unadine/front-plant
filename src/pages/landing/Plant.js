import React, { useEffect, useContext} from "react";
import LandingContent from "../../components/landing/LandingContent";
import { MainContext } from "./Context/ContextProvider";
import { useParams } from 'react-router-dom';
import  ShopPlant  from './ShopPlant';

import axios from "axios";

const Plant = () => {
    const { id } = useParams();
    const { plants, setPlant } = useContext(MainContext);
    useEffect(()=>{
        getNursery();         
    },[plants])

    const token = localStorage.getItem('token');
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
          setPlant( response.data.plants);
         
        } catch (err) {
            console.error(err);
                 
        }
    }

    return (
    <LandingContent 
        content={ 
        <>
        <link href="./assets/css/landing.css" rel="stylesheet" />
        <header class=" background py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Buy a Plant Today</p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <div class="container px-5 px-lg-5 mt-5">
            <div class="row g-4 mb-5">
            { plants.map((plant) => {
                    return (
            < ShopPlant 
            key= {plant.id}
            price = {plant.unitPrice}
            name = { plant.name}
            img= { plant.image}
            id = {plant.id}
            plant = {plant}

            />

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

export default Plant;