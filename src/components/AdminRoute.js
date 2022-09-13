import React from 'react';
import {Navigate} from 'react-router-dom'



const AdminRoutes = ({component: Component}) => {
    const role = localStorage.getItem('loggedRole');
    
    if(role === 'Admin') return <Component/>;
    return <Navigate to ="/"/>
   
}

export default AdminRoutes;
