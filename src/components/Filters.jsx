import {useState} from "react";
import "../Filters.css"

const Filters = ({handleFilter}) => {
    const [selectedCaliber, setSelectedCaliber] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const handleCaliberChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedCaliber(selectedValue);
        handleFilter(selectedValue, selectedType); 
    };

    const handleTypeChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedType(selectedValue);
        handleFilter(selectedCaliber, selectedValue); 
    };

    return (
     <div className="Filters">
            <label htmlFor="caliber">Filtrer par calibre :</label>
            <select id="caliber" value={selectedCaliber} onChange={handleCaliberChange}>
            <option value="">Tous les calibres</option>
            <option value="7,62mm">7,62mm</option>
            <option value="5,56mm">5,56mm</option>
            <option value=".45ACP">.45ACP</option>
            <option value=".308">.308</option>
            <option value="9mm">9mm</option>
        </select>

            <label htmlFor="type">Filtrer par type :</label>
            <select id="type" value={selectedType} onChange={handleTypeChange}>
            <option value="">Tous les types</option>
            <option value="Assault Riffle">Assault Riffle</option>
            <option value="Handgun">Handgun</option>
            <option value="Bolt Action Riffle">Bolt Action Riffle</option>
            <option value="DMR">DMR</option>
            <option value="SMG">Sub Machine Gun</option>
        </select>
     </div>

        
    );
}

export default Filters;