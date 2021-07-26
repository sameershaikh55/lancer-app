import React from "react";

// IMPORTS
import p1 from "../assets/products/p1.png";
import p2 from "../assets/products/p2.png";
import p3 from "../assets/products/p3.png";
import p4 from "../assets/products/p4.png";

// MOBILE IMPORTS
import p1M from "../assets/productsM/p1.png";
import p2M from "../assets/productsM/p2.png";
import p3M from "../assets/productsM/p3.png";
import p4M from "../assets/productsM/p4.png";
import i1 from "../assets/footerP/i1.svg";
import i2 from "../assets/footerP/i2.svg";
import i3 from "../assets/footerP/i3.svg";
import { NavLink } from "react-router-dom";

const ProductBody = () => {
  return (
    <>
      {/* DESKTOP START */}
      <div className="products_container d-none d-md-block my-5">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row">
              {/* FIRST START */}
              <div className="col-6 position-relative">
                <img
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom"
                  data-aos-offset="600"
                  className="w-100"
                  src={p1}
                  alt="p1"
                />
              </div>
              <div className="col-6 align-self-center text-center">
                <h6>LIGHTING</h6>
                <div className="w-50 mx-auto my-3">
                  <p className="small">
                    Our incredible breadth of on-trend products is designed for
                    confident decorating with collections that carry a
                    consistent look throughout a home, inside and out.
                  </p>
                </div>
                <button className="px-5 py-1">Explore</button>
              </div>
              {/* FIRST END */}

              {/* SECOND START */}
              <div className="col-5 align-self-center text-center">
                <h6>OUTDOOR LIVING</h6>
                <div className="w-50 mx-auto my-3">
                  <p className="small">
                    Principled on design, comfort & quality. These collections
                    set a new standard for outdoor living.
                  </p>
                </div>
                <button className="px-5 py-1">Explore</button>
              </div>
              <div className="col-7">
                <img
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom"
                  data-aos-offset="600"
                  className="w-100"
                  src={p2}
                  alt="p1"
                />
              </div>
              {/* SECOND END */}

              {/* THIRD START */}
              <div className="col-6">
                <img
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom"
                  data-aos-offset="1000"
                  className="w-100"
                  src={p3}
                  alt="p3"
                />
              </div>
              <div className="col-6 align-self-center text-center">
                <h6>VANITY COUNTERS & MIRROR FRAMES</h6>
                <div className="w-50 mx-auto my-3">
                  <p className="small">
                    Our latest range of vanity counters and high detail mirror
                    frames can elevate the look and feel of any powder room or
                    washroom.
                  </p>
                </div>
                <button className="px-5 py-1">Explore</button>
              </div>
              {/* THIRD END */}

              {/* THIRD START */}
              <div className="col-5 align-self-center text-center">
                <h6>CUSTOM PROJECTS</h6>
                <div className="w-50 mx-auto my-3">
                  <p className="small">
                    Our creative team work closely with our clients to
                    understand their specific need. This is what drives the
                    design process of the perfect space.
                  </p>
                </div>
                <button className="px-5 py-1">Explore</button>
              </div>
              <div className="col-7">
                <img
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom"
                  data-aos-offset="1500"
                  className="w-100"
                  src={p4}
                  alt="p4"
                />
              </div>
              {/* THIRD END */}
            </div>
          </div>
        </div>
      </div>
      {/* DESKTOP END */}

      {/* MOBILE START */}
      <div className="products_container d-block d-md-none my-5">
        <div className="page_container">
          <div className="container-fluid px-0">
            <div className="row px-0">
              <div className="col-6 pe-0">
                <img
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom"
                  data-aos-offset="300"
                  className="w-100"
                  src={p1M}
                  alt=""
                />
              </div>
              <div className="col-6 ps-0">
                <h6 className="lightGray3 ms-2">LIGHTING</h6>
                <div className="skyBg pt-1 pb-2 ps-2">
                  <p className="lightGray small mb-1 lh-sm">
                    Our incredible breadth of on-trend products designed to
                    create a bold look throughout a home, inside and out{" "}
                  </p>
                  <div className="text-center mt-2">
                    <button className="themeBtn px-4 py-1 text-white rounded-2">
                      Explore
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-6 mt-5 pe-0">
                <h6 className="lightGray3 text-end me-2">OUTDOOR LIVING</h6>
                <div className="skyBg pt-1 pb-2 text-end pe-2">
                  <p className="lightGray small mb-1 lh-sm">
                    Principled on design, comfort & quality. These collections
                    set a new standard for <br /> outdoor living.
                  </p>
                  <div className="text-center mt-2">
                    <button className="themeBtn px-4 py-1 text-white rounded-2">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 ps-0 mt-5">
                <img
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom"
                  data-aos-offset="300"
                  className="w-100"
                  src={p2M}
                  alt=""
                />
              </div>

              <div className="col-6 pe-0 mt-5">
                <img
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom"
                  data-aos-offset="300"
                  className="w-100"
                  src={p3M}
                  alt=""
                />
              </div>
              <div className="col-6 mt-5 ps-0">
                <h6 className="lightGray3 ps-2">COUNTERS & MIRROR FRAMES</h6>
                <div className="skyBg pt-1 pb-2 lh-sm ps-2">
                  <p className="lightGray small mb-1">
                    Our latest range of vanity counters and high detail mirror
                    frames can elevate the look and feel of any powder room or
                    washroom
                  </p>
                  <div className="text-center mt-2">
                    <button className="themeBtn px-4 py-1 text-white rounded-2">
                      Explore
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-6 mt-5 pe-0">
                <h6 className="text-uppercase lightGray3 text-end pe-2">
                  custom projects
                </h6>
                <div className="skyBg pt-1 pb-2 text-end pe-2">
                  <p className="lightGray small mb-1 lh-sm">
                    Our creative team work closely with our clients to
                    understand their specific need. This is what drives the
                    design process of the perfect space.
                  </p>
                  <div className="text-center mt-2">
                    <button className="themeBtn px-4 py-1 text-white rounded-2">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 ps-0 mt-5">
                <img
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom"
                  data-aos-offset="300"
                  className="w-100"
                  src={p4M}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE END */}

      {/* MOBILE FOOTER START */}
      <div className="footerPM_container position-relative d-flex d-md-none justify-content-center align-items-center">
        <div>
          <div className="text-center">
            <p className="small text-dark mb-1 fw500">
              lancercomposites@gmail.com
            </p>
            <p className="small text-dark fw500">+91253 2380783</p>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <img src={i1} alt="" />
            <img className="ms-3" src={i3} alt="" />
            <img className="ms-3" src={i2} alt="" />
          </div>
        </div>
      </div>
      <div className="mFooter py-3 d-flex d-md-none justify-content-end px-3">
        <NavLink className="lightGray text-decoration-none small" to="">
          Privacy Policy
        </NavLink>
        <NavLink className="lightGray ms-4 text-decoration-none small" to="">
          Sitemap
        </NavLink>
        <NavLink className="lightGray ms-4 text-decoration-none small" to="">
          Copyright
        </NavLink>
      </div>
      {/* MOBILE FOOTER END */}
    </>
  );
};

export default ProductBody;
