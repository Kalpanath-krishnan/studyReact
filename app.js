import react from "react";
import reactDOM from "react-dom";
import reactDOM from "react-dom/client";
import Header from "./components/Header";
import Card from "./components/Card";
import Body from "./components/Body";      


const App=()=>{
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
        </div>
    
    )
}
const root= reactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);