import { Col, Row,Input } from "antd";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./CompanyDetails.css";
import { company_Schema } from "../Validation/Validation";
import { useFormik } from "formik";

const initialValues = {
  company_n: "",
  email_id_id: "",
  address_N: "",
  floor_number: [],
  phone_numberr: "",
  building_name: "",
  address_official: "",
};

const CompanyDetails = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: company_Schema,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log("Formik value", values);
      },
    });

  return (
    <div>
      <Row>
        <Col span={24} className="p-2 container">
          <Row>
            <Col span={24} className=" d-flex justify-content-center">
              <div className="">
                <h4 className="company-heading-tag-h4">Company Details</h4>
              </div>
            </Col>
          </Row>

          <form onSubmit={handleSubmit}>
            <Row>
              <Col span={24} className="p-2 form-control" >
              
                <Row
                //   style={{ border: "1px dotted black", borderRadius: "5px" }}
                  className="p-1 form-control"
                >
                  <Col span={24}>
                  <h6 style={{color:"maroon"}}>Primary Information</h6>
                    <Row>
                      <Col span={24} className="w-100 d-flex">
                        <Row className="w-100">
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            // style={{ border: "1px solid red" }}
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                {/* <input
                                  type="text"
                                  placeholder="Company Name"
                                  name="company_n"
                                  autoComplete="off"
                                  value={values.company_n}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style={{ width: "99%", height: "36px",borderRadius:"5px" }}
                                /> */}
                                <Input 
                                type="text"
                                placeholder="Company Name"
                                name="company_n"
                                autoComplete="off"
                                value={values.company_n}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ width: "99%", height: "36px",borderRadius:"5px" }}
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_n && touched.company_n ? (
                                  <p className="form-error">
                                    {errors.company_n}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Company Owner Name"
                                  name="owner_name"
                                  autoComplete="off"
                                  value={values.owner_name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.owner_name && touched.owner_name ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.owner_name}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Company Co-Founder Name"
                                  name="co_owner_name"
                                  autoComplete="off"
                                  value={values.co_owner_name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.co_owner_name && touched.co_owner_name ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.co_owner_name}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col span={24} className="w-100 d-flex">
                        <Row className="w-100">
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            // style={{ border: "1px solid red" }}
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Company Brand Name"
                                  name="brand_name"
                                  autoComplete="off"
                                  value={values.brand_name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style={{ width: "98%", height: "36px" }}
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.brand_name && touched.brand_name ? (
                                  <p className="form-error">
                                    {errors.brand_name}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Company Website "
                                  name="website"
                                  autoComplete="off"
                                  value={values.website}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.website && touched.website ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.website}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Company Logo"
                                  name="company_logo"
                                  autoComplete="off"
                                  value={values.company_logo}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_logo && touched.company_logo ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.company_logo}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>


                    <Row className="mt-2">
                      <Col span={24} className="w-100 d-flex">
                        <Row className="w-100">
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            // style={{ border: "1px solid red" }}
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Company Type"
                                  name="company_type"
                                  autoComplete="off"
                                  value={values.company_type}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style={{ width: "98%", height: "36px" }}
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_type && touched.company_type ? (
                                  <p className="form-error">
                                    {errors.company_type}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Company employee strength"
                                  name="emp_stranghth"
                                  autoComplete="off"
                                  value={values.emp_stranghth}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.emp_stranghth && touched.emp_stranghth ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.emp_stranghth}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Company Email"
                                  name="company_email"
                                  autoComplete="off"
                                  value={values.company_email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_email && touched.company_email ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.company_email}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row
                //   style={{ border: "1px dotted black", borderRadius: "5px" }}
                  className="p-1 mt-2 form-control"
                >
                  <Col span={24}>
                <h6 style={{color:"maroon"}} >Primary Contact Information</h6>

                    <Row>
                      <Col span={24} className="w-100 d-flex">
                        <Row className="w-100">
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            // style={{ border: "1px solid red" }}
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                
                                <Input 
                                type="text"
                                placeholder="Company Hr Name"
                                name="company_hr"
                                autoComplete="off"
                                value={values.company_hr}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ width: "99%", height: "36px"}}
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_hr && touched.company_hr ? (
                                  <p className="form-error">
                                    {errors.company_n}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter First Contact Number"
                                  name="first_conatct"
                                  autoComplete="off"
                                  value={values.first_conatct}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.first_conatct && touched.first_conatct ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.first_conatct}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Second Contact Number"
                                  name="second_contact"
                                  autoComplete="off"
                                  value={values.second_contact}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.second_contact && touched.second_contact ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.second_contact}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col span={24} className="w-100 d-flex">
                        <Row className="w-100">
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            // style={{ border: "1px solid red" }}
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter the  Hr Email Id"
                                  name="hr_email"
                                  autoComplete="off"
                                  value={values.hr_email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style={{ width: "98%", height: "36px" }}
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.hr_email && touched.hr_email ? (
                                  <p className="form-error">
                                    {errors.hr_email}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Company Website "
                                  name="website"
                                  autoComplete="off"
                                  value={values.website}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.website && touched.website ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.website}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Company Logo"
                                  name="company_logo"
                                  autoComplete="off"
                                  value={values.company_logo}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_logo && touched.company_logo ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.company_logo}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>


                    
                  </Col>
                </Row>

                <Row
                //   style={{ border: "1px solid gray", borderRadius: "5px" }}
                  className="p-1 mt-2 form-control"
                >
                  <Col span={24}>
                <h6 style={{color:"maroon"}} >Primary Addresss Information</h6>

                    <Row>
                      <Col span={24} className="w-100 d-flex">
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
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                              
                                <Input 
                                type="text"
                                placeholder="Enter Company Pramry Address"
                                name="company_n"
                                autoComplete="off"
                                value={values.company_n}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ height: "36px" }}
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_n && touched.company_n ? (
                                  <p className="form-error">
                                    {errors.company_n}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          {/* <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Company Owner Name"
                                  name="owner_name"
                                  autoComplete="off"
                                  value={values.owner_name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.owner_name && touched.owner_name ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.owner_name}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Comapny Co-Owner Name"
                                  name="co_owner_name"
                                  autoComplete="off"
                                  value={values.co_owner_name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.co_owner_name && touched.co_owner_name ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.co_owner_name}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col> */}
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col span={24} className="w-100 d-flex">
                        <Row className="w-100">
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            // style={{ border: "1px solid red" }}
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="City"
                                  name="company_city"
                                  autoComplete="off"
                                  value={values.company_city}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style={{ width: "98%", height: "36px" }}
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_city && touched.company_city ? (
                                  <p className="form-error">
                                    {errors.company_city}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="State"
                                  name="company_state"
                                  autoComplete="off"
                                  value={values.company_state}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_state && touched.company_state ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.company_state}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Pincode"
                                  name="company_pincode"
                                  autoComplete="off"
                                  value={values.company_pincode}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_pincode && touched.company_pincode ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.company_pincode}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>


                    {/* <Row className="mt-2">
                      <Col span={24} className="w-100 d-flex">
                        <Row className="w-100">
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            // style={{ border: "1px solid red" }}
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Zipcode"
                                  name="company_zipcode"
                                  autoComplete="off"
                                  value={values.company_zipcode}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style={{ width: "98%", height: "36px" }}
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_zipcode && touched.company_zipcode ? (
                                  <p className="form-error">
                                    {errors.company_zipcode}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Comapny employee strangth"
                                  name="emp_stranghth"
                                  autoComplete="off"
                                  value={values.emp_stranghth}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.emp_stranghth && touched.emp_stranghth ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.emp_stranghth}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Comapny Slogan"
                                  name="company_slogan"
                                  autoComplete="off"
                                  value={values.company_slogan}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_slogan && touched.company_slogan ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.company_logo}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row> */}
                  </Col>
                </Row>


                <Row
                //   style={{ border: "1px dotted black", borderRadius: "5px" }}
                  className="p-1 mt-2 form-control"
                >
                  <Col span={24}>
                <h6 style={{color:"maroon"}} >Primary Location Information</h6>

                    <Row>
                      <Col span={24} className="w-100 d-flex">
                        <Row className="w-100">
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            // style={{ border: "1px solid red" }}
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                
                                <Input 
                                type="text"
                                placeholder="Society Name"
                                name="Sociaty_Name"
                                autoComplete="off"
                                value={values.Sociaty_Name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ width: "99%", height: "36px"}}
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.Sociaty_Name && touched.Sociaty_Name ? (
                                  <p className="form-error">
                                    {errors.Sociaty_Name}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Building Name"
                                  name="Building_Name"
                                  autoComplete="off"
                                  value={values.Building_Name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.Building_Name && touched.Building_Name ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.Building_Name}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Building Floor Number"
                                  name="Flour_Number"
                                  autoComplete="off"
                                  value={values.Flour_Number}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.Flour_Number && touched.Flour_Number ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.Flour_Number}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col span={24} className="w-100 d-flex">
                        <Row className="w-100">
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            // style={{ border: "1px solid red" }}
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Flat Number"
                                  name="flat_Number"
                                  autoComplete="off"
                                  value={values.flat_Number}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style={{ width: "98%", height: "36px" }}
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.flat_Number && touched.flat_Number ? (
                                  <p className="form-error">
                                    {errors.flat_Number}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          {/* <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Enter Comapny Website "
                                  name="website"
                                  autoComplete="off"
                                  value={values.website}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.website && touched.website ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.website}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            span={8}
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            className="second-main-Col"
                          >
                            <Row>
                              <Col
                                span={24}
                                style={{ flexDirection: "column" }}
                              >
                                <Input
                                  type="text"
                                  placeholder="Comapny Logo"
                                  name="company_logo"
                                  autoComplete="off"
                                  value={values.company_logo}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="secod-col-input-box"
                                />
                              </Col>
                              <Col style={{ height: "20px" }}>
                                {errors.company_logo && touched.company_logo ? (
                                  <p className="form-error form-error-col-p-tag">
                                    {errors.company_logo}
                                  </p>
                                ) : null}
                              </Col>
                            </Row>
                          </Col> */}
                        </Row>
                      </Col>
                    </Row>


                    
                  </Col>
                </Row>
                
                <Row className="mt-3">
                    <Col span={24} className="d-flex justify-content-between">
                    <div>
                         <Button style={{backgroundColor:"maroon"}}>Back</Button>
                    </div>
                    <div>
                    <Button style={{backgroundColor:"maroon"}}>Save</Button>

                    </div>
                    </Col>
                </Row>
                
              </Col>
            </Row>
            {/* <Row>
              <Col span={24} className=" w-100 d-flex">
                <Row className="w-100 mt-3">
                  <Col span={24} xs={24} sm={24} md={12} lg={12}>
                    <Row style={{ marginRight: "4px" }}>
                      <Col
                        span={24}
                        style={{ flexDirection: "column", fontSize: "20px" }}
                      >
                        <input
                          type="text"
                          placeholder="Please Enter your Company Name"
                          name="company_n"
                          autoComplete="off"
                          value={values.company_n}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ width: "100%", height: "50px" }}
                        />
                      </Col>
                      <Col style={{ height: "20px" }}>
                        {errors.company_n && touched.company_n ? (
                          <p className="form-error">{errors.company_n}</p>
                        ) : null}
                      </Col>
                    </Row>
                  </Col>

                  <Col
                    span={24}
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    className="second-main-Col"
                  >
                    <Row style={{ marginRight: "4px" }}>
                      <Col
                        span={24}
                        style={{ flexDirection: "column", fontSize: "20px" }}
                      >
                        <input
                          type="text"
                          placeholder="Please Enter the Email ID"
                          name="email_id"
                          autoComplete="off"
                          value={values.email_id}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="secod-col-input-box"
                          style={{ width: "100%", height: "50px" }}
                        />
                      </Col>
                      <Col style={{ height: "20px" }}>
                        {errors.email_id && touched.email_id ? (
                          <p className="form-error form-error-col-p-tag">
                            {errors.email_id}
                          </p>
                        ) : null}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Row className="w-100 mt-3 ">
                <Col span={24} xs={24} sm={24} md={12} lg={12}>
                  <Row style={{ marginRight: "4px" }}>
                    <Col
                      span={24}
                      style={{ flexDirection: "column", fontSize: "20px" }}
                    >
                      <input
                        type="text"
                        placeholder="Please Enter the Address"
                        name="address_N"
                        value={values.address_N}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                        style={{ width: "100%", height: "50px" }}
                      />
                    </Col>
                    <Col style={{ height: "20px" }}>
                      {errors.address_N && touched.address_N ? (
                        <p className="form-error form-error-col-p-tag">
                          {errors.address_N}
                        </p>
                      ) : null}
                    </Col>
                  </Row>
                </Col>

                <Col
                  span={24}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  className="second-main-Col "
                >
                  <Row style={{ marginRight: "4px" }}>
                    <Col
                      span={24}
                      style={{ flexDirection: "column", fontSize: "20px" }}
                    >
                      <input
                        type="text"
                        placeholder="Please Enter the Floor Number"
                        name="floor_number"
                        autoComplete="off"
                        value={values.floor_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="secod-col-input-box"
                        style={{ width: "100%", height: "50px" }}
                      />
                    </Col>
                    <Col style={{ height: "20px" }}>
                      {errors.floor_number && touched.floor_number ? (
                        <p className="form-error form-error-col-p-tag">
                          {errors.floor_number}
                        </p>
                      ) : null}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="w-100 mt-3">
                <Col span={24} xs={24} sm={24} md={12} lg={12}>
                  <Row style={{ marginRight: "4px" }}>
                    <Col
                      span={24}
                      style={{ flexDirection: "column", fontSize: "20px" }}
                    >
                      <input
                        type="text"
                        placeholder="Please Enter Building Name"
                        name="building_name"
                        autoComplete="off"
                        value={values.building_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ width: "100%", height: "50px" }}
                      />
                    </Col>
                    <Col style={{ height: "20px" }}>
                      {errors.building_name && touched.building_name ? (
                        <p className="form-error form-error-col-p-tag">
                          {errors.building_name}
                        </p>
                      ) : null}
                    </Col>
                  </Row>
                </Col>

                <Col
                  span={24}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  className="second-main-Col"
                >
                  <Row style={{ marginRight: "4px" }}>
                    <Col
                      span={24}
                      style={{ flexDirection: "column", fontSize: "20px" }}
                    >
                      <input
                        type="text"
                        placeholder="Please Enter Registered Phone Number"
                        name="phone_numberr"
                        autoComplete="off"
                        value={values.phone_numberr}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="secod-col-input-box"
                        style={{ width: "100%", height: "50px" }}
                      />
                    </Col>
                    <Col style={{ height: "20px" }}>
                      {errors.phone_numberr && touched.phone_numberr ? (
                        <p className="form-error form-error-col-p-tag">
                          {errors.phone_numberr}
                        </p>
                      ) : null}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="w-100 mt-3">
                <Col span={24} xs={24} sm={24} md={12} lg={12}>
                  <Row style={{ marginRight: "4px" }}>
                    <Col
                      span={24}
                      style={{ flexDirection: "column", fontSize: "20px" }}
                    >
                      <input
                        type="text"
                        placeholder="Please Enter your official Address"
                        name="address_official"
                        autoComplete="off"
                        value={values.address_official}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ width: "100%", height: "50px" }}
                      />
                    </Col>
                    <Col style={{ height: "20px" }}>
                      {errors.address_official && touched.address_official ? (
                        <p className="form-error form-error-col-p-tag">
                          {errors.address_official}
                        </p>
                      ) : null}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Row> */}
            {/* <div className="d-flex mt-4 justify-content-between">
              <Button className="d-flex Company-Button">BACK</Button>
              <Button className="d-flex  Company-Button">SUBMIT</Button>
            </div> */}
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyDetails;
