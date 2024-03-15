import Card from "./Card"
import resList from "../utils/mock_data"
import  {useState}  from "react"

const Body=()=>
{
  const [listOfRestaurants,setListOfRestaurant]=useState(resList);
  return(
    <div className="body">
        <div className="search">
           <button className="search-btn" onClick={()=>{
            const filterdList= listOfRestaurants.filter((res)=>res.info.avgRating>4.1);
            setListOfRestaurant(filterdList);
           }}
           
            >
             top-reastaurants
           </button>
        </div>
        <div className="res-container">
                {
                    listOfRestaurants.map(restaurant=> <Card  key={restaurant.info.id} resData={restaurant}/>)
                }
              
        </div>
</div>
  )
}
export default Body