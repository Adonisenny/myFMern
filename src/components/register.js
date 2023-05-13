import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
const [details,setDetails] = useState({
    email:undefined,
    username:undefined,
    password:undefined
})
const history = useHistory()
const {loading,error,dispatch} = useContext(AuthContext)

const handleChange = (e) => {
    setDetails((prev)=> ({...prev, [e.target.id]:e.target.value}))
}
const handleMySubmit =async(e) => {
e.preventDefault()
dispatch({type:"LOGIN_START"})
try {
    const res = await axios.post("http://localhost:4000/api/auth/register",details)
    dispatch({ payload:res.data})
    history.push("/login")
} catch (error) {
    console.log(error)
}

}
    return ( 
<form>
<h3>Email Address</h3>
<input 
placeholder="email"
id="email"
onChange={handleChange}
/>

<h3>Username</h3>
<input 
placeholder="username"
id="username"
onChange={handleChange}
/>

<h3>Password</h3>
<input 
placeholder="password"
id="password"
onChange={handleChange}
/>
<button onClick={handleMySubmit}>Submit</button>
</form>





    );
}
 
export default Register;