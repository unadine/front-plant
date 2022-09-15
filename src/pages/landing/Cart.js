
import React,{useEffect} from "react";
import { useCart } from "react-use-cart";
import LandingContent from "../../components/landing/LandingContent";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(()=>{
    console.log(items)         
},[])


  const titleStyle = {
    marginTop: "60px",
  };

  const buttonStyle = {
    padding: "0px 6px",
    backgroundColor: "green",
    border: "none",
    borderRadius: "10%"
  };
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

const makeOrder = async (e) => {
  e.preventDefault();

		try{
		const res = await axios.post(
			'http://localhost:5000/api/order-details/full',{
        "details": items,
      },
			{
				headers: { 
					"Content-Type": "application/json",
					"authorization" : `Bearer ${token}` 
				},
			}
		);
    console.log(res);
		navigate("/checkout")


		} catch(error){
			console.log(error);
		}

}

  return (
     <LandingContent 
        content={ 
        <>
    <section class="h-100" style={titleStyle}>
      
        <div class="container h-100 py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10">
  
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
            <div>
              <p class="mb-0"><span class="text-muted">Total Items: {totalItems}</span> </p>
            </div>
          </div>
          { isEmpty && [
                <>
                <h1 className="text-center"> Your cart is Empty </h1>
               
            </>
               

             ] }
              { !isEmpty && [
                <>
                          <div class="card rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
              {items.map((item, index) => {
                return (
                    <>
                    
                <div class="col-md-2 col-lg-2 col-xl-2" key={index}>
                  <img
                    src={`http://localhost:5000/${item.img}`}
                    class="img-fluid rounded-3 mb-3" alt="Cotton T-shirt"/>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p class="lead fw-normal mb-2">{item.name}</p>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button class="" style={buttonStyle} onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }>
                    <i class="fas fa-minus"></i>
                  </button>
  
                  <input id="form1" min="0" name="quantity" value={item.quantity} type="number"
                    class="form-control form-control-sm" />
  
                  <button class=" "  style={buttonStyle}     onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 class="mb-0">{(item.quantity) * (item.price)}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end"onClick={() => removeItem(item.id)}>
                  <a class="text-danger"><i class="fas fa-trash fa-lg" ></i></a>
                </div>         
                  </>
                );
              })}
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-body p-4 d-flex flex-row">
              <div class="form-outline flex-fill">
                <p class="form-label text-center">Delivery: <span>1500 RWF</span></p>
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-body p-4 d-flex flex-row">
              <div class="form-outline flex-fill">
                <p class="form-label text-center">Total Amount:
                 <span>{cartTotal + 1500} RWF
                 </span></p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex justify-content-between align-items-center">
            <button type="button" class="btn btn-danger btn-block btn-lg" onClick={() => emptyCart()}>Clear Cart</button>
           <button type="button" class="btn btn-primary btn-block btn-lg" onClick={ makeOrder} >Proceed to Checkout</button>
            </div>
          </div>
               
            </>
               

             ] }
             
          
  

  
        </div>
      </div>
    </div>
  </section>
    
             </>
        }
        />
  );
};

export default Cart;
