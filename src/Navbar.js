import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const NavBar = () => {
    const  {user,dispatch} = useContext(AuthContext)
    console.log(user?.email)
    // const location = useLocation()
    // const pathName = location.pathname.split("/")[1]
    const history = useHistory()
    
    
    
    const handleSubmit2 = async(e) => {
        e.preventDefault()
        dispatch({type:"SUCCESS"})
        try {
            const res = await axios.post("http://localhost:4000/api/auth/logout")
            dispatch({type:"LOGOUT", payload:res.data})
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    

    
    return (
        <div style={{"width":"1280","height":"auto", "backgroundColor":"grey"}}> 
    {/* <ul>
    <li style={{"listStyleType":"none","display":"flex"}}><Link to="/login"><span>Logout</span></Link></li>
    </ul> */}
{/* <div> */}
    {/* {pathName==="login" && user?<Link to="logout" style={{"textDecoration":"none", "display":"flex","color":"white"}}>LOGOUT</Link>  :<Link to="login" style={{"textDecoration":"none", "display":"flex"}}>Login</Link>}

    </div> */}
{user ? (
<div style={{"display":"flex","color":"white","gap":"1200px"}}><p>{user?.username}</p><Link to="/" onClick={handleSubmit2}>Logout</Link></div>):
<Link to="/login" style={{"textDecoration":"none", "display":"flex","color":"white"}}>Login</Link>

}
<Link to="/spread" style={{"textDecoration":"none", "display":"flex","color":"white"}}>Spread</Link>
        </div>

      );
}
 
export default NavBar;

