import {useState} from "react";
import "../Form.css"

const Form = () => {
    const [name, setName] = useState("");
    
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div className="Form">
            <p>Bonjour: {name}</p>
            <input type="text" id="userInput" name="userInput" placeholder="Enter your name" value={name} onChange={handleChange}>
            </input>
        </div>
        
    );
}

export default Form;