import Card from "./Card"
import  {useState,useEffect}  from "react"
import Shimmer from "./Shimmer"


const Body=()=>
{
  const [listOfRestaurants,setListOfRestaurant]=useState([]);
  const [searchText,setSearchText]=useState("");
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  
  useEffect(()=>{
    fetchData();
 },[]);
  const fetchData= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.670626&lng=76.55788199999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
  setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  if(listOfRestaurants.length===0)
  {
    return <Shimmer/> ;
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
           <input type="text" value={searchText} onChange={
            (e)=>{
              setSearchText(e.target.value);
            }
           }/>
           <button onClick={()=>{
            console.log(searchText);
            const filteredRestaurants = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredRestaurants);
           }} >search</button>
        </div>
        <div className="res-container">
                {
                    filteredRestaurants.map
                    (restaurant=> <Card  key={restaurant.info.id} resData={restaurant}/>)
                }
              
        </div>
</div>
  )
}
export default Body