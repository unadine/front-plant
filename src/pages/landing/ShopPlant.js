import { useCart } from "react-use-cart";

const ShopPlant = (props)=> {
    const{name,price, id, img} = props;
    const { addItem } = useCart();
    const addToCart  = () => {
        addItem({name,price, id, img});
        alert("Added to cart successfully");

    }

    return(
        <div class="col-6 col-md-4 col-xl-3 col-xxl-2">
        <div class="app-card app-card-doc shadow-sm  h-100">
           <div class="app-card-thumb-holder p-3">
               <div class="app-card-thumb">
                   {/* <img class="thumb-image" src={plant.image} alt=""/> */}
               </div>
           </div>
           <div class="app-card-body p-3 has-card-actions">
               
               <h4 class="app-doc-title truncate mb-0"><a href="#file-link">{name}</a></h4>
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
    )

}

export default ShopPlant;