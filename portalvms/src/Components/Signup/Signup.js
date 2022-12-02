import { Col, Row } from "antd";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import "./signup.css";
import { signupSchema } from "../Validation/Validation";

const initialValues = {
  first_Name: "",
  last_Name: "",
  phone_number: "",
  email: "",
  company_name: "",
  password: "",
  confirm_password: "",
};

const Signup = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log("Formik value", values);
      },
    });

  //  console.log("Formik value",errors)
  // https://www.youtube.com/watch?v=uq_bzHuRD9g 
  return (
    <div>
      <Row>
        <Col span={24} className="px-3 pe-3 pt-2">
          <Row>
            <Col
              span={14}
              xs={24}
              sm={24}
              md={14}
              lg={14}
              xl={14}
              className=" d-flex justify-content-center align-items-center"
            >
              <div className="SignupImage-Div">
                <img src="/images/signup1.webp" className="img-fluid" />
              </div>
            </Col>
            <Col
              span={10}
              xs={24}
              sm={24}
              md={10}
              lg={10}
              xl={10}
              className="signup-main-div"
            >
              <div className="p-2">
                <div className="d-flex justify-content-center align-items-center ">
                  <h4 className="Signup-heading-tag-h4 ">SIGNUP ATHITHI BOOK</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col
                      span={24}
                      className="mt-3 w-100 d-flex"
                    >
                      <Row className="w-100">
                        <Col
                          span={12}
                          xs={24}
                          sm={24}
                          md={12}
                          lg={12}
                          // style={{ border: "1px solid red" }}
                        >
                          <Row>
                            <Col span={24} style={{ flexDirection: "column" }}>
                              <input
                                type="text"
                                placeholder="First Name"
                                name="first_Name"
                                autoComplete="off"
                                value={values.first_Name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ width: "96%", height: "36px" }}
                              />
                            </Col>
                            <Col style={{height:"20px"}}>
                              {errors.first_Name && touched.first_Name ? (
                                <p
                                  className="form-error"
                                
                                >
                                  {errors.first_Name}
                                </p>
                              ) : null}
                            </Col>
                          </Row>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={12} lg={12} className="second-main-Col">
                          <Row>
                            <Col span={24} style={{ flexDirection: "column" }}>
                              <input
                                type="text"
                                placeholder="Last Name"
                                name="last_Name"
                                autoComplete="off"
                                value={values.last_Name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="secod-col-input-box"
                               
                              />
                            </Col>
                            <Col style={{height:"20px"}}>
                              {errors.last_Name && touched.last_Name ? (
                                <p
                                  className="form-error form-error-col-p-tag"
                                >
                                  {errors.last_Name}
                                </p>
                              ) : null}
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      span={24}
                      className="mt-3 w-100 d-flex"
                    >
                      <Row className="w-100">
                        <Col
                          span={12}
                          xs={24}
                          sm={24}
                          md={12}
                          lg={12}
                          // style={{ border: "1px solid red" }}
                        >
                          <Row>
                            <Col span={24} style={{ flexDirection: "column" }}>
                              <input
                                type="text"
                                placeholder="Pnone Number"
                                name="phone_number"
                                autoComplete="off"
                                value={values.phone_number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ width: "96%", height: "36px" }}
                              />
                            </Col>
                            <Col style={{height:"20px"}}>
                              {errors.phone_number && touched.phone_number ? (
                                <p
                                  className="form-error"
                                
                                >
                                  {errors.phone_number}
                                </p>
                              ) : null}
                            </Col>
                          </Row>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={12} lg={12} className="second-main-Col">
                          <Row>
                            <Col span={24} style={{ flexDirection: "column" }}>
                              <input
                                type="email"
                                placeholder="Enter email id"
                                name="email"
                                autoComplete="off"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="secod-col-input-box"
                              />
                            </Col>
                            <Col style={{height:"20px"}}>
                              {errors.email && touched.email ? (
                                <p
                                  
                                  className="form-error form-error-col-p-tag"
                                >
                                  {errors.email}
                                </p>
                              ) : null}
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      span={24}
                      className="mt-3 w-100 d-flex"
                    >
                      <Row className="w-100">
                        <Col
                          span={24}
                          xs={24}
                          sm={24}
                          md={24}
                          lg={24}
                          // style={{ border: "1px solid red" }}
                        >
                          <Row>
                            <Col span={24} style={{ flexDirection: "column" }}>
                              <input
                                type="text"
                                placeholder="Enter company name"
                                name="company_name"
                                autoComplete="off"
                                value={values.company_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="company-col-input-box"
                              />
                            </Col>
                            <Col style={{height:"20px"}}>
                              {errors.company_name && touched.company_name ? (
                                <p
                                  className="form-error"
                                  
                                >
                                  {errors.company_name}
                                </p>
                              ) : null}
                            </Col>
                          </Row>
                        </Col>
                       
                      </Row>

                      
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      span={24}
                      className="mt-3 w-100 d-flex"
                    >
                      <Row className="w-100">
                        <Col
                          span={12}
                          xs={24}
                          sm={24}
                          md={12}
                          lg={12}
                          // style={{ border: "1px solid red" }}
                        >
                          <Row>
                            <Col span={24} style={{ flexDirection: "column" }}>
                              <input
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                autoComplete="off"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ width: "96%", height: "36px" }}
                              />
                            </Col>
                            <Col style={{height:"20px"}}>
                              {errors.password && touched.password ? (
                                <p
                                  className="form-error"
                              
                                >
                                  {errors.password}
                                </p>
                              ) : null}
                            </Col>
                          </Row>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={12} lg={12} className="second-main-Col">
                          <Row>
                            <Col span={24} style={{ flexDirection: "column" }}>
                              <input
                                type="password"
                                placeholder="Re-Enter Password"
                                name="confirm_password"
                                autoComplete="off"
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="secod-col-input-box"
                              />
                            </Col>
                            <Col style={{height:"20px"}}>
                              {errors.confirm_password && touched.confirm_password ? (
                                <p
                                className="form-error form-error-col-p-tag"
                                >
                                  {errors.confirm_password}
                                </p>
                              ) : null}
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      
                    </Col>
                  </Row>
                  

                  <div className="mt-3">
                    <h6 className="Password-criteria-tag-h6 ">Password must match below criteria:</h6>
                    <ul>
                      <li className="Password-criteria-tag-li">
                        <span style={{color:"#720c27",fontWeight:600}}>Must have minimum 8 characters</span>
                        </li>
                      <li className="Password-criteria-tag-li">
                      <span style={{color:"#720c27",fontWeight:600}}>Must contain at least one uppercase letter</span>
                      </li>
                      <li className="Password-criteria-tag-li">
                      <span style={{color:"#720c27",fontWeight:600}}>Must contain alphanumeric characters
                      </span>
                      </li>
                      <li className="Password-criteria-tag-li"> 
                      <span style={{color:"#720c27",fontWeight:600}}>Must have atleast one special character</span></li>
                      <li className="Password-criteria-tag-li">
                      <span style={{color:"#720c27",fontWeight:600}}>Please enter only allowed special character in password,
                        allowed special characters are !@#$%^&*
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-100 mt-3">
                    <Button
                      type="submit"
                      className="w-100 Signup-Button"
                     
                    >
                      Register
                    </Button>
                  </div>
                </form>
                <div className="mt-3">
                  <h6 className="sign-tag-h6">
                    Already have an account?{" "}
                    <Link to="/signin" style={{ textDecoration: "none",color:"#720c27",fontWeight:"bold", }}>
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
