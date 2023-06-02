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
            <input type="text" id="userInput" name="userInput" value={name} onChange={handleChange}>
            </input>
        </div>
    )
}

export default Form;