import "../Cards.css"

const Card = (props) => {
    const {table} = props;
    
    return (
    <div className= "cards">
        {table.map((weapon, index) => (
            <div className="card" key={index}>
              <div className= "nameCard">
                <p>{weapon.name}</p>
              </div>
              <div className= "myMage">
                <img src={weapon.imgSrc} alt={weapon.name} />
              </div>
              <div className="description">
                <p>{weapon.description}</p>
              </div>
         </div>
        ))}
    </div>
        
    );
}

export default Card;