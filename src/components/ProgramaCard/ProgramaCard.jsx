import "./ProgramaCard.css"

const ProgramaCard = (props) => {
  return (
    <div className="ProgramaCard">
      <img 
        className="ProgramaCard-icon"
        src={props.icon} 
        alt="icon card" />
      <div className="ProgramaCard-Datos">
        <h3 className="ProgramaCard-title">
          {props.title}
        </h3>
        <p className="ProgramaCard-text">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default ProgramaCard;