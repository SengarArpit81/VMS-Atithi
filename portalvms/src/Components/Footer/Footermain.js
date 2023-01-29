import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
const Footermain = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <footer>
            <Row span={24} className="d-flex cotainer">
              <Col span={8} xs={24} sm={24} md={8} lg={8}>
                <div className="box">
                  <h3>ATHITHI BOOK</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Acc exer fsdfsfsf sfsffs vdgdgd dgdgdg
                  </p>
                  <button
                    className="btn-secondary"
                    style={{ marginLeft: "20px" }}
                  >
                    Read More
                  </button>
                </div>
              </Col>
              <Col span={8} xs={24} sm={24} md={8} lg={8}>
                <div className="box Quik-Links-div">
                  <h3>Quik Links</h3>
                  <div className="box2">
                    {/* <div className="menu-list-div"> */}
                    <Link to="/" className="Footer-menu-Link">
                      Home
                    </Link>
                    {/* </div> */}
                    <Link to="/benefits" className="Footer-menu-Link ">
                      Benefits
                    </Link>
                    <Link to="/fourbox" className="Footer-menu-Link">
                      Services
                    </Link>
                    <Link to="/aboutus" className="Footer-menu-Link">
                      About us
                    </Link>
                    <Link to="/contactus" className="Footer-menu-Link">
                      Contact us
                    </Link>
                  </div>
                </div>
              </Col>
              <Col span={8} xs={24} sm={24} md={8} lg={8}>
                <div class="box Quik-Links-div">
                  <h3>Follow US</h3>
                  <div className="box2">
                    <div className="social-media-link-div" >
                      <div className="social-media-icon-div">
                        <img src="./icon/facebook.svg" />
                      </div>
                      <div className="">
                        {" "}
                        <a href="#">Facebook</a>
                      </div>
                    </div>

                    <div className="social-media-link-div">
                      <div className="social-media-icon-div">
                        {" "}
                        <img src="./icon/twitter.svg" />
                      </div>
                      <div>
                        <a href="#">Twitter</a>
                      </div>
                    </div>

                    <div className="social-media-link-div">
                      <div className="social-media-icon-div">
                        {" "}
                        <img src="./icon/instagram.svg" />
                      </div>
                      <div>
                        <a href="#">
                          <span>Instagram</span>
                        </a>
                      </div>
                    </div>

                    <div className="social-media-link-div">
                      <div className="social-media-icon-div">
                        <img src="./icon/google.svg" />
                      </div>
                      <div>
                        <a href="#">
                          <span className="">Google</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </footer>
        </Col>
      </Row>

      {/* <div className="box instagram-api">
                <h3>Instagram</h3>
                <div class="post-wrapper">
                    <div>
                        <img src="images/paris8.jpeg"/>
                    </div>

                    <div>
                        <img src="images/dubai5.jpg"/>
                    </div>

                    <div>
                        <img src="images/india2.jpg"/>
                    </div>

                    <div>
                        <img src="images/dubai3.jpg"/>
                    </div>

                    <div>
                        <img src="images/paris2.jpg"/>
                    </div>

                    <div>
                        <img src="images/india9.jpg"/>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default Footermain;
