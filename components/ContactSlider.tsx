import React from "react";
import Image from "next/image";

const ContactSlider = (props: IContactSlider) => {
  if (props.theme === "dark") {
    return (
      <>
        <div className="position-relative">
          <Image
            className="position-relative z-10 right-0 top-11"
            src="/img/icons/DoubleCoutYellow.svg"
            alt="ss"
            width={30}
            height={30}
          />
          <div className="contact-item-style-dark">
            <div className="d-flex flex-column">
              <div>
                <div className="d-flex flex-row align-items-center">
                  <Image
                    src={"/img/profiles/profile_1.png"}
                    alt="tt"
                    width={66}
                    height={66}
                  />
                  <div className="pr-17">
                    <div>
                      <h6 className="text-white">{props.profileName}</h6>
                    </div>
                    <div>
                      <Image
                        src={props.profileSource}
                        alt=""
                        width={140}
                        height={35}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="contactSlider-p">{props.sliderP}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="position-relative">
          <Image
            className="position-relative z-11 right-0 top-11"
            src="/img/icons/DoubleCout.svg"
            alt=""
            width={30}
            height={30}
          />
          <div className="contact-item-style">
            <div className="flex flex-col">
              <div>
                <div className="d-flex flex-row align-items-center">
                  <Image
                    src="/img/profiles/profile_1.png"
                    alt=""
                    width={66}
                    height={66}
                  />
                  <div className="pr-17">
                    <div>
                      <h6 className="text-white">{props.profileName}</h6>
                    </div>
                    <div>
                      <Image
                        src={props.profileSource}
                        alt="profile photo"
                        width={140}
                        height={35}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="contactSlider-p">{props.sliderP}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ContactSlider;
