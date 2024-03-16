import Card from "./Card"
import  {useState,useEffect}  from "react"

const Body=()=>
{
  const [listOfRestaurants,setListOfRestaurant]=useState([]);
  useEffect(()=>{
    fetchData();
 },[]);
  const fetchData= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.670626&lng=76.55788199999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
  setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
 
  }
  return(
    <div className="body">
        <div className="search">
           <button className="search-btn" onClick={()=>{
            const filterdList= listOfRestaurants.filter((res)=>res.info.avgRating>=4.2);
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