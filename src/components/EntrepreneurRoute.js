import React from 'react';
import {Navigate} from 'react-router-dom'



const EntrepreneurRoutes = ({component: Component}) => {
    const role = localStorage.getItem('loggedRole');
    
    if(role === 'Entrepreneur') return <Component/>;
    return <Navigate to ="/"/>
   
}

export default EntrepreneurRoutes;
