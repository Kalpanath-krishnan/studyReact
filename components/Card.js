import { CDN_URL } from "../utils/constants";
    
const Card =(props)=>{
    const {resData}=props;
    
    const{name,avgRating,cuisines,costForTwo,cloudinaryImageId,sla}=resData?.info;

    return(
   
     <div className="res-card" >
         
         <img className="res-logo" src={CDN_URL + cloudinaryImageId }/>
         
         <h4>{name}</h4>
         <h4>{avgRating}</h4>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{costForTwo}</h4>
         <h4>{sla.deliveryTime} minutes</h4>
     </div>
   )}

   export default Card