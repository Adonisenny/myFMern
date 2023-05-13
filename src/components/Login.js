import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
const Login = () => {
const [credential,setCredential] = useState({
    username:undefined,
    password:undefined
})
const {loading,error,dispatch} = useContext(AuthContext)
const history = useHistory()
const handleChange = (e) => {
    setCredential((prev)=> ({...prev,[e.target.id]:e.target.value}))
    }

const handleSubmit = async(e) => {
e.preventDefault()
dispatch({type:"LOGIN_START"}) 
try {
    const res = await axios.post("http://localhost:4000/api/auth/login",credential)
    dispatch({type:"LOGIN_SUCCESS", payload:res.data})
    history.push("/")
    
} catch (error) {
    dispatch({type:"LOGIN_FAILURE",payload:error.response.data})
}
}
 





    








return (  

<form onSubmit={handleSubmit}>
<h2>Username</h2>
<input type="text"
    // onChange={(e) => setUsername(e.target.value)}
    onChange={handleChange}
    id="username"/>
<h2>Password</h2>
<input type="text" 
onChange={handleChange}
id="password"
/> 
<br />
<button>Submit</button>
{error && <span>{error.messsage}</span>}
<p>If you are not registered <Link to='/register'>Register here</Link></p>

</form>
    



    );
}
 
export default Login;