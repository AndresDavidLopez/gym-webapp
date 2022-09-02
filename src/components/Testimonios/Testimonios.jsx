import { useState } from "react";
import { testimoniosData } from "./TestimoniosData";
import leftArrow from "../../images/left_arrow.svg";
import rightArrow from "../../images/right_arrow.svg";

import "./Testimonios.css";

const Testimonios = () => {
  const [testimonioSelected, setTestimonioSelected] = useState(1);
  const testimoniosLength = testimoniosData.length - 1;

  return(
    <section className="Testimonios" id="Testimonios">
      <div className="Testimonios-left">
        <h2 className="Testimonios-title">
          TESTIMONIOS
        </h2>
        <div className="Testimonios-description">
          Ellos nos eligieron, conoce el por qué.
        </div>
        <div className="Testimonio-review">
          "{ testimoniosData[testimonioSelected].review }".
        </div>
        <div className="Testimonio-name">
          { testimoniosData[testimonioSelected].name }
          <span>{" - "}
            { testimoniosData[testimonioSelected].status }
          </span>
        </div>
      </div>
      <div className="Testimonios-right">
        <div className="Testimonio-foto">
          <span></span>
          <div></div>
          <img 
            src={testimoniosData[testimonioSelected].image} 
            alt={testimoniosData[testimonioSelected].name} />
        </div>
      </div>
      <div className="Testimonios-buttons">
        <button 
          onClick={
            () => { 
              testimonioSelected === 0 
              ? setTestimonioSelected(testimoniosLength)
              : setTestimonioSelected((prev) => prev - 1);
            }
          }>
          <img src={leftArrow} alt="" />
        </button>
        <button
          onClick={
            () => {
              testimonioSelected === testimoniosLength
              ? setTestimonioSelected(0)
              : setTestimonioSelected((prev) => prev + 1)
            }
          }>
          <img src={rightArrow} alt="" />
        </button>

      </div>
    </section>
  );
}

export default Testimonios;