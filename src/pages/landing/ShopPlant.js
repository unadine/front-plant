import { useCart } from "react-use-cart";

const ShopPlant = (props)=> {
    const{name,price, id, img} = props;
    const { addItem } = useCart();
    
    const addToCart  = () => {
        addItem({name,price, id, img});
        alert("Added to cart successfully");

    }

    const navStyle = {
        width: "100%",
        height:"100%"
      };

    return(
        <>
        <link href="../../assets/css/landing.css" rel="stylesheet" />
        
        <div class="col-6 col-md-4 col-xl-3 col-xxl-2">
        <div class="app-card app-card-doc shadow-sm  h-100">
           <div class="app-card-thumb-holder p-3">
               <div class="app-card-thumb">
                    <img class="thumb-image" style={navStyle} src={`http://localhost:5000/${img}`} alt=""/> 
               </div>
           </div>
           <div class="app-card-body p-3 has-card-actions">
               
               <h4 class="app-doc-title truncate mb-0"><a>{name}</a></h4>
               <div class="app-doc-meta">
                   <ul class="list-unstyled mb-0">
                       <li><span class="text-muted">Price:</span> {price}</li>
                       <div key={props.plant.id}>
                       <button  onClick={addToCart} type="button" class="btn btn-success mt-3" >Add to cart</button>
                         </div>
                   </ul>
               </div>

                   
           </div>

       </div>
       </div>
       </>
    )

}

export default ShopPlant;