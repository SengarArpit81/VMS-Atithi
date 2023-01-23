import { Col, Row } from "antd";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./signin.css";


const Signin = () => {
  return (
    <div>
      <Row>
        <Col span={24} className="signin-main-col">
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
                <div className="d-flex justify-content-center login-heading-div">
                  <h4 style={{color:"#720c27",fontWeight:700}}>LOGIN ATHITHI BOOK</h4>
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
                      backgroundColor: "#720c27",
                      color: "white",
                      height: "44px",
                      fontSize: "20px",
                      border:"none",
                      borderRadius:"20px",
                      fontWeight:500

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
                      backgroundColor: "#A04000",
                      color: "white",
                      height: "40px",
                      fontSize: "16px",
                      width:"48%",
                      border:"none",
                      borderRadius:"20px",
                      fontWeight:500

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
                      border:"none",
                      borderRadius:"20px",
                      fontWeight:500


                    }}
                  >
                    Google
                  </Button>
                </div>
                <div className="mt-3">
                  <h6>Don’t have an account? <Link to="/signup" style={{textDecoration:"none",color:"#720c27",fontSize:"19px",fontWeight:700}}>
                    Register</Link></h6>
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
