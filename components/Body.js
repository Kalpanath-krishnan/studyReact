import Card from "./Card"
import resList from "../utils/mock_data"
const Body=()=>
{
    
  return(
    <div className="body">
    <div className="search">search</div>
    <div className="res-container">
            {
                resList.map(restaurant=> <Card  key={restaurant.info.id} resData={restaurant}/>)
            }
          
    </div>
</div>
  )
}
export default Body