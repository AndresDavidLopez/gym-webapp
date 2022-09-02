import ProgramaCard from "../ProgramaCard/ProgramaCard";
import "./Programas.css";
import pesa from "../../images/pesa.svg";
import heart from "../../images/heart.svg";
import fire from "../../images/fire.svg";
import yoga from "../../images/yoga.svg";

const Programas = () => {
  const programCardsData = [
    {icon: pesa, title: "Entrenamiento de Fuerza", text: "En este programa, se le entrena para mejorar su fuerza a través de muchos ejercicios."},
    {icon: heart, title: "Entrenamiento de Cardio", text: "En este programa, se capacita en ejercicios secuenciales en un rango de 20-30 minutos."},
    {icon: fire, title: "Quema de Grasa", text: "Este programa es adecuado is usted quiere deshacerse de grasa y perder peso."},
    {icon: yoga, title: "Clases de yoga", text: "En este programa aprenderas posturas, que le permitan conectar su cuerpo, mente y espiritu."}
  ]

  return(
    <section className="Programas" id="Programas">
      <h2 className="Programas-h2">
        PROGRAMAS
      </h2>
      <div className="Programas-cardsContainer">
        {
          programCardsData.map((card,i) => {
            return(
              <ProgramaCard
                key={i}
                icon={card.icon}
                title={card.title}
                text={card.text} />
            );
          })
        }
      </div>
    </section>
  );
}

export default Programas;