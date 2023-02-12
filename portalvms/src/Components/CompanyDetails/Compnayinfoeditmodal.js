import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Col, Row, Input } from "antd";
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

const Compnayinfoeditmodal = (props) => {
    const [show, setShow] = useState(false);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: company_Schema,
            onSubmit: (values, action) => {
                action.resetForm();
                console.log("Formik value", values);
            },
        });




    const handleClose = () => {
        props.setShowAddModal(false)
    };
    const handleShow = () => setShow(true);

    console.log("openModalById", props.openModalById)

    return (
        <div>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={props.showAddModal} size="lg" class="rounded-2" onHide={handleClose}>
                <Modal.Header closeButton closeVariant="white" style={{ backgroundColor: "maroon" }}>
                    <Modal.Title className='' style={{ color: "white" }}>
                        Edit Company Details
                        {/* 
                        {props.openModalById == 1 ? "Primary Information" : props.openModalById == 2 ? "Primary Contact Information" : props.openModalById == 3 ? "Primary Addresss Information" : ""} */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.openModalById == 1 ? 
                    <Row className="p-1 form-control">
                        <Col span={24}>
                  <h6 style={{color:"maroon"}}>Primary Information</h6>

                            <Row>
                                <Col span={24} className="w-100 d-flex">
                                    <Row className="w-100">
                                        <Col
                                            span={24}
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={24}
                                        >
                                            <Row>
                                                <Col span={24} style={{ flexDirection: "column" }} >

                                                    <Input
                                                        type="text"
                                                        placeholder="Company Name"
                                                        name="company_n"
                                                        autoComplete="off"
                                                        value={values.company_n}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        style={{ width: "100%", height: "36px", borderRadius: "5px" }}
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

                                    </Row>
                                </Col>
                            </Row>

                            <Row className='mt-lg-2 mt-md-2'>
                                <Col span={24} className="w-100 d-flex">
                                    <Row className="w-100">

                                        <Col
                                            span={12}
                                            xs={24}
                                            sm={24}
                                            md={12}
                                            lg={12}
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
                                                        style={{ width: "99%", height: "36px", borderRadius: "5px" }}

                                                    // className="secod-col-input-box"
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
                                            span={12}
                                            xs={24}
                                            sm={24}
                                            md={12}
                                            lg={12}
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
                                            span={12}
                                            xs={24}
                                            sm={24}
                                            md={12}
                                            lg={12}
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
                                            span={12}
                                            xs={24}
                                            sm={24}
                                            md={12}
                                            lg={12}
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
                                       
                                    </Row>
                                </Col>
                            </Row>


                            <Row className="mt-2">
                                <Col span={24} className="w-100 d-flex">
                                    <Row className="w-100">
                                        <Col
                                            span={12}
                                            xs={24}
                                            sm={24}
                                            md={12}
                                            lg={12}
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
                                                        // className="secod-col-input-box"
                                                        style={{ width: "98%", height: "36px" }}

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
                                        <Col
                                            span={12}
                                            xs={24}
                                            sm={24}
                                            md={12}
                                            lg={12}
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
                                                        className="secod-col-input-box"

                                                    // style={{ width: "98%", height: "36px" }}
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

                                    </Row>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col span={24} className="w-100 d-flex">
                                    <Row className="w-100">
                                        <Col
                                            span={12}
                                            xs={24}
                                            sm={24}
                                            md={12}
                                            lg={12}
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
                                                        style={{ width: "98%", height: "36px" }}

                                                    // className="secod-col-input-box"
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
                                            span={12}
                                            xs={24}
                                            sm={24}
                                            md={12}
                                            lg={12}
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
                    </Row> : props.openModalById == 2 ? 
                    
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
                          
                        </Row>
                      </Col>
                    </Row> 
                  </Col>
                </Row>
                    : props.openModalById == 3 ?  
                    
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
                      </Col>
                    </Row>

                    
                    
                    : ""}

                    <Row>
                        <Col span={24} className="mt-2  ">
                            <div className=" d-flex justify-content-end">
                                <button
                                    className="Add-Edit-btn text-white"
                                    type="submit"
                                // onClick={addEditModalFun}
                                >
                                    Update
                                </button>
                            </div>
                        </Col>
                    </Row>

                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default Compnayinfoeditmodal