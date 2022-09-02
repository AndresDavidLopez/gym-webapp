import Plan from "../Plan/Plan";
import diamond from "../../images/diamond.svg";
import crown from "../../images/crown.svg";
import lock from "../../images/lock.svg";

import "./Planes.css";

const Planes = () => {
  const planesData = [
    {recomendado: false, icon: lock, title: "Plan Básico", price: "$59.900", clase: "", features: ["Entrena unicamente en la sede de inscripción", "Acceso a todas las areas del gimnasio", "Inivita a 1 amigo un dia al mes", "Acceso a todas las clases"]},
    {recomendado: true, icon: crown, title: "Plan Premium", price: "$79.900", clase: "isActive", features: ["Entrena en cualquiera de nuestras sedes", "Fitness club App", "Acceso a todas las areas del gimnasio", "Acceso a todas las clases", "Inivita a 3 amigos dos dias al mes", "Plan alimentario"]},
    {recomendado: false, icon: diamond, title: "Plan Pro", price: "$99.900", clase: "", features: ["Entrena en cualquiera de nuestras sedes", "Fitness club App", "Acceso a todas las areas del gimnasio", "Acceso a todas las clases", "Inivita a 5 amigos tres dias al mes", "Plan alimentario", "Acceso al SPA"]}
  ]

  return(
    <div className="Planes" id="Planes">
      <h2 className="Planes-title" >Planes</h2>
      <div className="Planes-container">
        {
          planesData.map((planData, i) => {
            return(
              <Plan 
                key={i}
                clase={planData.clase}
                icon={planData.icon}
                title={planData.title}
                price={planData.price}
                features={planData.features}
                recomendado={planData.recomendado}/>
            );
          })
        }
      </div>
    </div>
  );
}

export default Planes;