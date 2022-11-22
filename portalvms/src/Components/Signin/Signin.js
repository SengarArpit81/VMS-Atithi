import { Col, Row } from "antd";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./signin.css";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div>
      <Row>
        <Col span={24} className="p-5 signin-main-col" >
          <Row>
            <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="LoginImage-Div p-5">
                <img src="/images/login1.jpg" className="img-fluid" />
              </div>
            </Col>
            <Col
              span={12}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className="signin-col"
            
            >
              <div className="login-main-div">
                <div className="login-heading-div">
                  <h4>LOGIN ATHITHI BOOK</h4>
                </div>
                <div className="mt-3">
                  <Form.Control size="lg" type="email" placeholder="Email" />
                </div>
                <div className="mt-3">
                  <Form.Control
                    size="lg"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-between mt-3 w-100">
                  <div >
                    <Form.Check
                      inline
                      label="Remember me"
                      name="group1"
                      type="checkbox"
                    />
                  </div>
                  <div className="forgotpass-div">
                    <h6>Forgot Password ?</h6>
                  </div>
                </div>
                <div className="w-100 mt-3">
                  <Button
                    className="w-100"
                    style={{
                      backgroundColor: "#794afa",
                      color: "white",
                      height: "44px",
                      fontSize: "20px",
                      border:"none"
                    }}
                  >
                    Login
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <h6 style={{color:"gray"}}>OR</h6>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                <Button
                    
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      height: "40px",
                      fontSize: "16px",
                      width:"48%",
                      border:"none"
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      height: "40px",
                      fontSize: "16px",
                      width:"48%",
                      border:"none"
                    }}
                  >
                    Google
                  </Button>
                </div>
                <div className="mt-3">
                  <h6>Don’t have an account? <Link to="/signup" style={{textDecoration:"none"}}>Register</Link></h6>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
