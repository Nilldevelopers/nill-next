import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { navbarItems } from "@/data/data";


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      {/* i add this line to check publish process agin */}
      <div className="nav-full">
        <div className="nav-container">
          <div
            className={`navbar-present animation ${
              navOpen ? "" : `${router.pathname == "/post" ? "" : "grey-bg"}`
            }`}
            id="navbar-id"
          >
            <div className="logo-present">
              <Image
                src="/img/logo/NILL.svg"
                width={70}
                height={70}
                alt={"NILL logo"}
              />
            </div>
            <div
              className="menu-toggle-present"
              onClick={() => setNavOpen(!navOpen)}
            >
              <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span
                  className={navOpen ? "lineBottom spin" : "lineBottom"}
                ></span>
              </div>
            </div>
          </div>

          <div
            className="nav-overlay navigation"
            style={{
              top: navOpen ? "0" : "-100%",
              transitionDelay: navOpen ? "0s" : "0s",
            }}
          >
            <ul className="nav-links">
              {navbarItems.map((items, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link
                      href={items.route}
                      data-text={items.text}
                      onClick={() => setNavOpen(!navOpen)}
                      style={{
                        top: navOpen ? "0" : "120px",
                        transitionDelay: navOpen ? "0.8s" : "0s",
                      }}
                    >
                      {items.text}
                    </Link>
                    <div className="nav-item-wrapper"></div>
                  </li>
                );
              })}
            </ul>
            <div className="nav-footer">
              <div
                className="location"
                style={{
                  bottom: navOpen ? "0" : "-20px",
                  opacity: navOpen ? "1" : "0",
                  transitionDelay: navOpen ? "1.2s" : "0s",
                }}
              >
                <span>Powered by NILL</span>
              </div>
              <div className="nav-social-media">
                <ul>
                  <li>
                    <Link
                      href="/#"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.3s" : "0s",
                      }}
                    >
                      YouTube
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.4s" : "0s",
                      }}
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
