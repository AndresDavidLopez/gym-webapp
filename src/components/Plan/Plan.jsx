import checkIcon from "../../images/check.svg";

import "./Plan.css";

const Plan = (props) =>{
  return(
    <div className={"Plan " + props.clase}>
      <div className="Plan-top">
        {
          (props.recomendado) 
          ? <div className="Plan-recomendado">Recomendado</div> 
          : <div className=""></div>
        }
        <img 
          className="Plan-icon"
          src={props.icon} 
          alt="" />
        <h3 className="Plan-title">
          {props.title}
        </h3>
        <div className="Plan-price">
          {props.price}
        </div>
        <div className="Plan-dataContainer">
          {
            props.features.map((feature, i) => {
              return(
                <div key={i} className="Plan-featureContainer">
                  <img src={checkIcon} alt="" />
                  <p  className="Plan-feature">
                    {feature}
                  </p>
                </div>
              );
            })
          }
        </div>
      </div>
      <button className="Plan-button">
        Comienza hoy
      </button>
    </div>
  );
}

export default Plan;