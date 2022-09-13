import React,{useContext} from 'react';
import {Navigate} from 'react-router-dom'



const ClientRoutes = ({component: Component}) => {
    const role = localStorage.getItem('loggedRole');
    
    if(role === 'Client') return <Component/>;
    return <Navigate to ="/"/>
   
}

export default ClientRoutes;
