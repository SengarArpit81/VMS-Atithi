import { Col, Row } from "antd";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
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

}

const AddVisitors = () => {

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
                <Col span={24} xl={24} className="px-2 pt-2" >
                    <Col
                        span={24}

                        className=" d-flex signup-main-div">

                        <div className="">
                            <div className="d-flex justify-content-center align-items-center ">
                                <h4 className="Signup-heading-tag-h4 ">Add Visitors</h4>
                            </div>
                        </div>

                    </Col>

                    <form onSubmit={handleSubmit} span={24} xl={24} className="mt-3 form-control " style={{ height: "500px" }}>
                        <Row>
                            <Col
                                span={24}
                                className=" w-100 d-flex"
                            >
                                <Row className="w-100 mt-3"  >
                                    <Col span={24} xs={24} sm={24} md={12} lg={12}
                                    >
                                        <Row style={{ marginRight: "4px" }}>
                                            <Col span={24} style={{ flexDirection: "column",fontSize:"20px" }}>
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
                                                    <p
                                                        className="form-error"

                                                    >
                                                        {errors.company_n}
                                                    </p>
                                                ) : null}
                                            </Col>


                                        </Row>
                                    </Col>



                                    <Col span={24} xs={24} sm={24} md={12} lg={12} className="second-main-Col">
                                        <Row style={{ marginRight: "4px" }}>
                                            <Col span={24} style={{ flexDirection: "column",fontSize:"20px" }}>
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
                                            <Col style={{height:"20px"}}>
                              {errors.email_id && touched.email_id ? (
                                <p
                                  
                                  className="form-error form-error-col-p-tag"
                                >
                                  {errors.email_id}
                                </p>
                              ) : null}
                            </Col>

                                        </Row>
                                    </Col>

                                </Row>



                            </Col>
                            <Row className="w-100 mt-3 "  >
                                <Col span={24} xs={24} sm={24} md={12} lg={12}
                                >
                                    <Row style={{ marginRight: "4px" }}>
                                        <Col span={24} style={{ flexDirection: "column",fontSize:"20px" }}>
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
                                        <Col style={{height:"20px"}}>
                                        {errors.address_N && touched.address_N ? (
                                          <p
                                            
                                            className="form-error form-error-col-p-tag"
                                          >
                                            {errors.address_N}
                                          </p>
                                        ) : null}
                                      </Col>


                                    </Row>
                                </Col>



                                <Col span={24} xs={24} sm={24} md={12} lg={12} className="second-main-Col ">
                                    <Row style={{ marginRight: "4px" }}>
                                        <Col span={24} style={{ flexDirection: "column",fontSize:"20px" }}>
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
                                        <Col style={{height:"20px"}}>
                                        {errors.floor_number && touched.floor_number ? (
                                          <p
                                            
                                            className="form-error form-error-col-p-tag"
                                          >
                                            {errors.floor_number}
                                          </p>
                                        ) : null}
                                      </Col>

                                    </Row>
                                </Col>

                            </Row>
                            <Row className="w-100 mt-3"  >
                                <Col span={24} xs={24} sm={24} md={12} lg={12}
                                >
                                    <Row style={{ marginRight: "4px" }}>
                                        <Col span={24} style={{ flexDirection: "column",fontSize:"20px" }}>
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
                                        <Col style={{height:"20px"}}>
                                        {errors.building_name && touched.building_name ? (
                                          <p
                                            
                                            className="form-error form-error-col-p-tag"
                                          >
                                            {errors.building_name}
                                          </p>
                                        ) : null}
                                      </Col>

                                    </Row>
                                </Col>



                                <Col span={24} xs={24} sm={24} md={12} lg={12} className="second-main-Col">
                                    <Row style={{ marginRight: "4px" }} >
                                        <Col span={24} style={{ flexDirection: "column" ,fontSize:"20px"}}>
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
                                        <Col style={{height:"20px"}}>
                                        {errors.phone_numberr && touched.phone_numberr ? (
                                          <p
                                            
                                            className="form-error form-error-col-p-tag"
                                          >
                                            {errors.phone_numberr}
                                          </p>
                                        ) : null}
                                      </Col>


                                    </Row>
                                </Col>

                            </Row>
                            <Row className="w-100 mt-3"  >
                                <Col span={24} xs={24} sm={24} md={12} lg={12}
                                >
                                    <Row style={{ marginRight: "4px" }}>
                                        <Col span={24} style={{ flexDirection: "column",fontSize:"20px" }}>
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
                                        <Col style={{height:"20px"}}>
                                        {errors.address_official && touched.address_official ? (
                                          <p
                                            
                                            className="form-error form-error-col-p-tag"
                                          >
                                            {errors.address_official}
                                          </p>
                                        ) : null}
                                      </Col>

                                        

                                    </Row>
                                </Col>




                            </Row>

                        </Row>
                        <div className="d-flex mt-4 justify-content-between">
                            <Button className="d-flex Company-Button">
                                BACK
                            </Button>
                            <Button className="d-flex  Company-Button">
                                SUBMIT
                            </Button>
                        </div>


                    </form>

                </Col>
            </Row>


        </div>
    );
}

export default AddVisitors;
