

import axios from 'axios'
import { useContext, useState } from "react"; 
import { AuthContext } from "../AuthContext";

import { useHistory } from "react-router-dom";


const Spread = () => {
 const [title, setTitle] = useState('')
 const [rumor, setRumor] = useState('')
const [image,setImg] = useState('')


 

const {loading,error,dispatch} = useContext(AuthContext)

const history = useHistory()



const handletheSubmit = async(e) => {
e.preventDefault()
const formData = new FormData()
formData.append('title',title)
formData.append('rumor',rumor)
formData.append('image',image)

// dispatch({type:"LOGIN_SUCCESS"})
try {
    const res = await axios.post("http://localhost:4000/api/spread",formData)
    dispatch({payload:res.data})
     
history.push("/userpage")
    

     
} catch (error) {
    console.log(error)  
}




}


    return ( 
        <div>
<form style={{"display":"flex","flexDirection":'column', "gap":"10px"}}>

<input 
type="text"
id="title"
onChange={(e) => setTitle(e.target.value)}
placeholder="title"
style={{"height":"30px","width":'300px'}}

/>

<input
type="text"
 id="rumor"
 onChange={(e) => setRumor(e.target.value)}

placeholder="post"
style={{"height":"200px","width":'300px'}}
/>


 <input 
type="file"
multiple
 id="image"
 onChange={(e) => setImg(e.target.files[0])}
 accept=".jpg,.jpeg,.png"

/>

<button onClick={handletheSubmit} style={{"height":"40px","width":'80px',"borderRadius":"12px","cursor":"pointer"}}>Spread</button>

</form>



</div>

     );
}
 
export default Spread;