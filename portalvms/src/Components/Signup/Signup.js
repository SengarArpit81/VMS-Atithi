import { Col, Row } from "antd";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {useFormik} from "formik";
import "./signup.css";
import { signupSchema } from "../Validation/Validation";

const initialValues = {
  first_Name:"",
  last_Name:"",
  phone_number:"",
  email:"",
  company_name:"",
  password:"",
  confirm_password:""

}

const Signup = () => {

   const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:signupSchema,
    onSubmit: (values, action)=>{
        action.resetForm();
       console.log("Formik value",values)
    },

   })

  //  console.log("Formik value",errors)

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
                <div>
                  <h4>SIGNUP ATHITHI BOOK</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="mt-3 w-100">
                      {/* <Form.Control
                        type="text"
                        placeholder="First Name"
                        style={{ width: "96%" }}
                      /> */}
                      <input 
                      type="text" 
                      placeholder="First Name"
                      name="first_Name"
                      autoComplete="off"
                      value={values.first_Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: "96%",height:"36px" }}
                      />
                      {errors.first_Name && touched.first_Name? ( <p className="form-error" style={{color:"red"}}>{errors.first_Name}</p>):null}
                    </div>
                    <div className="mt-3 w-100 ">
                      {/* <Form.Control
                        type="text"
                        placeholder="Last Name"
                        style={{ width: "96%", float: "right" }}
                      /> */}
                       <input 
                      type="text" 
                      placeholder="Last Name"
                      name="last_Name"
                      autoComplete="off"
                      value={values.last_Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: "96%",height:"36px",float: "right" }}
                      />
                      {errors.last_Name && touched.last_Name? ( <p className="form-error" style={{color:"red"}}>{errors.last_Name}</p>):null}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="mt-3 w-100">
                      {/* <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        style={{ width: "96%" }}
                      /> */}
                      <input 
                      type="text" 
                      placeholder="Pnone Number"
                      name="phone_number"
                      autoComplete="off"
                      value={values.phone_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: "96%",height:"36px" }}
                      />
                      {errors.phone_number && touched.phone_number? ( <p className="form-error" style={{color:"red"}}>{errors.phone_number}</p>):null}
                    </div>
                    <div className="mt-3 w-100">
                      {/* <Form.Control
                        type="email"
                        placeholder="Email"
                        style={{ width: "96%", float: "right" }}
                      /> */}
                      <input 
                      type="email" 
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: "96%",height:"36px",float: "right" }}
                      />
                      {errors.email && touched.email? ( <p className="form-error" style={{color:"red"}}>{errors.email}</p>):null}

                    </div>
                  </div>
                  <div className="mt-3">
                    {/* <Form.Control type="text" placeholder="Comapnay Name" /> */}
                    <input 
                      type="text" 
                      placeholder="Company Name"
                      name="company_name"
                      autoComplete="off"
                      value={values.company_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: "100%",height:"36px"}}
                      />
                      {errors.company_name && touched.company_name? ( <p className="form-error" style={{color:"red"}}>{errors.company_name}</p>):null}

                  </div>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="mt-3 w-100">
                      {/* <Form.Control
                        type="password"
                        placeholder="Re-Enter Password"
                        style={{ width: "96%" }}
                      /> */}
                      <input 
                      type="password" 
                      placeholder="Password"
                      name="password"
                      autoComplete="off"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: "96%",height:"36px"}}
                      />
                      {errors.password && touched.password? ( <p className="form-error" style={{color:"red"}}>{errors.password}</p>):null}

                    </div>
                    <div className="mt-3 w-100">
                      {/* <Form.Control
                        type="password"
                        placeholder="Re-Enter Passward"
                        style={{ width: "96%", float: "right" }}
                      /> */}
                      <input 
                      type="password" 
                      placeholder="Re-Enter Passward"
                      name="confirm_password"
                      autoComplete="off"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: "96%",height:"36px",float: "right" }}
                      />
                      {errors.confirm_password && touched.confirm_password? ( <p className="form-error" style={{color:"red"}}>{errors.confirm_password}</p>):null}

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
                    type="submit"
                      className="w-100"
                      style={{
                        backgroundColor: "#794afa",
                        color: "white",
                        height: "44px",
                        fontSize: "20px",
                        border: "none",
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </form>
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
