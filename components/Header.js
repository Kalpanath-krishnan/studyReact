import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header =()=>{
    const [loginState,setLoginState]= useState("login");
    return (

        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="sorry"></img>
                </div>
                <div className="listItems">
                    <ul>
                        <li>about</li>
                        <li>contact</li>
                        <li>tell me</li>
                        <button className="login" onClick={
                            ()=>{
                                loginState ==="login"?
                                setLoginState("logout"):
                                setLoginState("login");
                            }
                        }
                        >{loginState}</button>
                    </ul>
                </div>
        </div>
    )
}
export default Header;