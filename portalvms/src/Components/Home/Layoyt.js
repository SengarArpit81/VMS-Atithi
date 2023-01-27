import { Col, Row } from "antd";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./layout.css";

const Layoyt = () => {
  return (
    <div>
      <Row>
        <Col span={24} className="layout-main-col">
          <Row>
            <Col
              span={12}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className="d-flex justify-content-center layout-left-main-col"
            >
              <div className="athithi-book-main-div">
                <div className="d-flex">
                  <div>
                    <img
                      src="images/logo2.jpg"
                      className="logo-div"
                      
                    />
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    
                  >
                    <h1 className="layout-heading-tag-h1 ">ATHITHI BOOK</h1>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <h6 className="fw-bold point-h6-tag" >Your Privacy is our priority</h6>
                    <span style={{color:"gray"}} className="description-span-tag">

                      Meet all compliances, manage workplace capacity and easily
                      extract reports for contact tracing with our visitor
                      management system!
                    </span>
                  </div>
                  <div className="mt-4">
                    <h6 className="fw-bold point-h6-tag">
                      All your data, secured with us for ease of access
                    </h6>
                    <span style={{color:"gray"}} className="description-span-tag">
                      Manage your account securely from anywhere on the globe
                      with our secured cloud based visitor management system!
                    </span>
                  </div>
                  <div className="mt-4">
                    <h6 className="fw-bold point-h6-tag">
                      Extensive safety and security measures for both your
                      employees and your visitors
                    </h6>
                    <span style={{color:"gray"}} className="description-span-tag">
                      Use top of the notch features including health declaration
                      for your visitors and a zero contact check-in with our
                      contact-less visitor management system!
                    </span>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between align-items-center layout-link-div">
                    <Link to="/signin" className="signin-link">
                      Login
                    </Link>
                    <Link to="/signup" className="signup-link">
                      Signup
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              span={12}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className="p-5 Layout-Imge-Col"
            >
              <div className="hero-image-div">
                <img src="/images/Aavo-Padharo.png"  className="img-fluid"/>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Layoyt;
