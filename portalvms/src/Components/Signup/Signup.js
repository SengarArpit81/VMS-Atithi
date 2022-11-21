import { Col, Row } from "antd";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <div>
      <Row>
        <Col span={24} className="px-3 pe-3 pt-2">
          <Row>
            <Col span={14} xs={24} sm={24} md={14} lg={14} xl={14} className=" d-flex justify-content-center align-items-center">
              <div className="SignupImage-Div">
                <img src="/images/signup1.webp" className="img-fluid" />
              </div>
            </Col>
            <Col span={10} xs={24} sm={24} md={10} lg={10} xl={10} className="signup-main-div">
              <div className="p-2">
                <div>
                  <h4>SIGNUP ATHITHI BOOK</h4>
                </div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="mt-3 w-100">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      style={{ width: "96%" }}
                    />
                  </div>
                  <div className="mt-3 w-100 ">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      style={{ width: "96%", float: "right" }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="mt-3 w-100">
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      style={{ width: "96%" }}
                    />
                  </div>
                  <div className="mt-3 w-100">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      style={{ width: "96%", float: "right" }}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <Form.Control type="text" placeholder="Comapnay Name" />
                </div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="mt-3 w-100">
                    <Form.Control
                      type="password"
                      placeholder="Re-Enter Password"
                      style={{ width: "96%" }}
                    />
                  </div>
                  <div className="mt-3 w-100">
                    <Form.Control
                      type="password"
                      placeholder="Re-Enter Passward"
                      style={{ width: "96%", float: "right" }}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h6>Password must match below criteria:</h6>
                  <ul>
                    <li>Must have minimum 8 characters</li>
                    <li>Must contain at least one uppercase letter</li>
                    <li>Must contain alphanumeric characters</li>
                    <li> Must have atleast one special character</li>
                    <li>
                      Please enter only allowed special character in password,
                      allowed special characters are !@#$%^&*
                    </li>
                  </ul>
                </div>
                <div className="w-100 mt-3">
                  <Button
                    className="w-100"
                    style={{
                      backgroundColor: "#794afa",
                      color: "white",
                      height: "44px",
                      fontSize: "20px",
                      border: "none",
                    }}
                  >
                    Login
                  </Button>
                </div>
                <div className="mt-3">
                  <h6>
                    Already have an account?{" "}
                    <Link to="/signin" style={{ textDecoration: "none" }}>
                      Sign in
                    </Link>
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
