import { LOGO_URL } from "../utils/constants";
const Header =()=>(
    <div className="header">
        <div className="logo">
            <img src={LOGO_URL} alt="sorry"></img>
            </div>
            <div className="listItems">
                <ul>
                    <li>about</li>
                    <li>contact</li>
                    <li>tell me</li>
                    <li>cart</li>
                </ul>
            </div>
    </div>
)
export default Header;