import React, {useContext,useEffect} from "react";
import LandingContent from "../../components/landing/LandingContent";
import { useCart } from "react-use-cart";
import {Link} from "react-router-dom";
import { MainContext } from "./Context/ContextProvider";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Checkout = () => {
    const { auth } = useContext(MainContext);
    const name = localStorage.getItem('loggedName');
    const email = localStorage.getItem('loggedEMail');
    const phone = localStorage.getItem('loggedPhone');
    const titleStyle = {
        marginTop: "10px"
    };
    const {cartTotal,items, emptyCart} = useCart();
    const config = {
        public_key: "FLWPUBK_TEST-71471bbd18c791dc9a8cb4a2d3842c78-X",
        tx_ref: Date.now(),
        amount: cartTotal,
        currency: "RWF",
        payment_options: "card,mobilemoney",
        customer: {
          email: email,
          phonenumber: phone,
          name: name
        },
        customizations: {
          title: "Plant Nursery Management System",
          description: "Payment for items in cart",
          logo:
            "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg"
        }
      };
      
      const handleFlutterPayment = useFlutterwave(config);  

   

  return (
<LandingContent
content = {
        <>
        <section class="h-100" style={titleStyle}>
            
      
      <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">   
      <div class="col-10">
      <div class="auth-option pt-5 mb-3" style={{Color: "green" }}>
                       <Link to="/cart"> 
                       <i class="fa-solid fa-arrow-left"></i>
                       <a class="text-link"> Back To Cart</a>
                        </Link>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Delivery Address</h3>
          <div>
          <p class="mb-0"><span class="text-black">Cart Total: {cartTotal + 1500} RWF</span> </p>
          </div>
        </div>
    <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">

          
                            <div class="form-group mb-3">
                            <div class="row">
                                <div class="col">
                                <input type="text" class="form-control" placeholder="First name" required="required"/>
                                </div>
                                <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" required="required"/>
                                </div>
                            </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="col-md-12">
                                    <input type="text" name="address" class="form-control" placeholder="Address" required="required" />
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="col-md-12">
                                    <input type="text" name="city" class="form-control"  placeholder="City" required="required"/>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="col-md-12">
                                    <input type="text" name="zip_code" class="form-control" placeholder="Zip Code"/>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="col-md-12"><input type="text" name="phone_number" class="form-control"  placeholder="phone number" required="required"/></div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="col-md-12"><input type="text" name="email_address" class="form-control"  placeholder="email address" required="required"/></div>
                            </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body  justify-content-between align-items-center">
            <button type="button" class="btn btn-primary btn-block btn-lg"     onClick={() => {
            handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); 
            },
            onClose: () => {
              emptyCart()
            }
          });
        }}>Proceed to Pay</button>
          </div>
        </div>
           
        



      </div>
    </div>
  </div>
</section>
    
    
             </>
}
/>
       
  );
};

export default Checkout;