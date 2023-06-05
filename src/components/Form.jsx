import {useState} from "react";
import "../Form.css"

const Form = () => {
    const [name, setName] = useState("");
    
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div className="Form">
         <div className="userName">
            <p>Bonjour: </p> 
            <p style={{color: "red"}}> {name}</p>
         </div>
            
            <input type="text" id="userInput" name="userInput" placeholder="Enter your name" value={name} onChange={handleChange}>
            </input>
        </div>
        
    );
}

export default Form;