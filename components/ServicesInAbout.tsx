import React from "react";

const ServicesInAbout = (props:IServicesInAboutType) => {
  return (
    <div className="d-flex flex-row">
      <div
        className="d-flex flex-column justify-content-center"
        style={{
          height: "200px",
          color: "#fcbf49",
        }}
      >
        <div className="vr" id="about_vr"></div>
      </div>
      <div className="d-flex flex-column mx-3 justify-content-center">
        <h4 className="services-head">{props.head}</h4>
        <p className="services-p">
         {props.body}
        </p>
      </div>
    </div>
  );
};

export default ServicesInAbout;
