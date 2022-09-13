import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import React from 'react';
import Orders from "../pages/entrepreneur/Orders";
import AddPlant from "../pages/entrepreneur/AddPlant";
import Category from "../pages/entrepreneur/Category";
import Comment from "../pages/entrepreneur/Comment";
import Overview from "../pages/entrepreneur/Overview";
import LandingPage from "../pages/landing/landingPage";
import Signup from "../pages/landing/Signup";
import Login from "../pages/landing/Login";
import Shop from "../pages/landing/Shop";
import Plant from "../pages/landing/Plant";
import Cart from "../pages/landing/Cart";
import { CartProvider } from "react-use-cart";
import ShopPlant from "../pages/landing/ShopPlant";
import Checkout from "../pages/landing/Checkout";
import Users from "../pages/admin/users";
import AdminRoutes from "./AdminRoute";
import EntrepreneurRoutes from "./EntrepreneurRoute";
import ClientRoutes from "./ClientRoute";
import Nurseries from "../pages/admin/nurseries";
import UpdateNursery from "../pages/admin/updateNursery";
import EntrepreneurSignUp from "../pages/landing/EntrepreneurSignUp";
import ClientSignUp from "../pages/landing/ClientSignUp";
import AddNursery from "../pages/landing/AddNursery";


const MainRoutes = () => {

    return(
        <CartProvider>
            <Router>
                <div className="text-gray-700 font-body">
                    <div className="grid md:grid-cols-3">
                    <Routes>  
                    <Route path ="/" element={<LandingPage/>}/>
                    <Route path ="/signup" element={<Signup/>}/>
                    <Route path ="/signup/client" element={<ClientSignUp/>}/>
                    <Route path ="/signup/entrepreneur" element={<EntrepreneurSignUp/>}/>
                    <Route path ="/entrepreneur/addNursery" element={<AddNursery/>}/>
                    <Route path ="/login" element={<Login/>}/>

                    <Route path ="/shop" element={<ClientRoutes component={Shop}/>}/>
                    <Route path ="/shop/:id" element={<ClientRoutes component={Plant}/>}/>
                    <Route path ="/cart" element={<ClientRoutes component={Cart}/>}/>                   
                    <Route path ="/plant" element={<ClientRoutes component={ShopPlant}/>}/>
                    <Route path ="/checkout" element={<ClientRoutes component={Checkout}/>}/>

                    <Route path ="/orders" element={<EntrepreneurRoutes component={Orders}/>}/>
                    <Route path ="/addPlant" element={<EntrepreneurRoutes component={AddPlant}/>}/>
                    <Route path ="/addCategory" element={<EntrepreneurRoutes component={Category}/>}/>
                    <Route path ="/comments" element={<EntrepreneurRoutes component={Comment}/>}/>
                    <Route path ="/overview" element={<EntrepreneurRoutes component={Overview}/>}/>


                    <Route path ="/users" element={<AdminRoutes component={Users}/>}/>
                    <Route path ="/nurseries" element={<AdminRoutes component={Nurseries}/>}/>
                    <Route path ="/nurseries/update/:id" element={<AdminRoutes component={UpdateNursery}/>}/>
                    </Routes>
                </div>
                </div>
            </Router>
            </CartProvider>

 )
}

export default MainRoutes;