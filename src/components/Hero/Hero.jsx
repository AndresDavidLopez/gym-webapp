import Header from "../Header/Header";
import "./Hero.css";


const Hero = () => {

  return(
    <div className="Hero" id="Inicio">
      <Header />
      <div className="Hero-background" >
          <div className="Hero-left">
            <h1 className="Hero-h1">
              <span>SUPERA </span>
              TUS LIMITES  
            </h1>
            <h2 className="Hero-h2">
              Comienza tu plan de entrenamiento hoy y transforma tu vida.
            </h2>
            <div className="Hero-buttons">
              <button className="Hero-button">
                Comienza Hoy
              </button>
              <button className="Hero-button Hero-button--second">
                Conoce más
              </button>
            </div>
            <div className="Hero-backCircle"></div>
          </div>
          <div className="Hero-right">
            <img 
              className="Hero-image"
              src={require("../../images/fitnessPerson.png")}
              alt="fitness person" />
            {/* <img 
              className="Hero-chartLine"
              src={lineChart} 
              alt="" /> */}
            <div className="Hero-imageCircle"></div>
            <div className="Hero-dataCard Hero-dataCard--1">
              <img src={require("../../images/chart.png")} alt="" />
              +106K
              <span>Usuarios</span>
            </div>
            <div className="Hero-dataCard Hero-dataCard--2">
              <img src={require("../../images/24hrs.png")} alt="" />
              24hrs
              <span>Abierto</span>
            </div>
            <div className="Hero-dataCard Hero-dataCard--3">
              <img src={require("../../images/mapMarker.png")} alt="" />
              9 Sedes
              <span>En Bogotá</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Hero;