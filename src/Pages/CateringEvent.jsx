import axios from "axios";
import { useEffect, useState } from "react";

const CateringEvent = () =>{
    const [Loginpage, setLoginpage]=useState([]);
    useEffect(() => {
        const fetchAllLoginpage= async () =>{
            try {
                const res= await axios.get("http://localhost:8080/catering_event");
                setLoginpage(res.data);
            }
            catch (err){
                console.log(err);

            }
        }
        
    })
    return(
        <div>

        </div>
    )
}
export default CateringEvent;