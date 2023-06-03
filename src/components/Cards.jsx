import "../Cards.css"


const Card = (props) => {
    const {filteredWeapons} = props;

    return (
    <div className= "cards">
        {filteredWeapons.map((weapon, index) => (
            <div className="card" key={index}>
              <div className= "nameCard" style={{color: weapon.color}}>
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