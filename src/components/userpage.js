import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../AuthContext"

const UserPage = () => {

    const {loading,error,dispatch} = useContext(AuthContext)
    const [postit,setPostIt] = useState([])
    


useEffect(() => {
const fetchData = async() => {
    try {

        const response = await axios.get("http://localhost:4000/api/spread")
    dispatch({payload:response.data})
    console.log(response.data)
    setPostIt(response.data)
        
    } catch (error) {
       console.log(error) 
    }
}
fetchData()
},[dispatch])
   
    const handleDelete =async(id) => {
        try{
        const deleteit = await axios.delete("http://localhost:4000/api/spread/"+ id)
        dispatch({payload:deleteit.data})
        console.log("Deleted")
        console.log(deleteit.data)
        
        }catch{
            console.log("failed to delete")
        }
        
    }
   
        
    
  
    
   
    return ( 

        <div style={{"display":"grid"}}>
            {postit?.map ((post,postIndex)=> {
                return <div key={postIndex}>
                    <div>
                            
                        <img src={`http://localhost:4000/${post?.imageUrl}`} alt='yea'/>
                        <button onClick={()=>handleDelete(post._id)}>delete</button>
                         {console.log(post._id)}
                        </div>

                </div>
            })}
           
        </div>
     );
}
  
export default UserPage;