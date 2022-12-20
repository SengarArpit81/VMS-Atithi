import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { company_Schema } from "../Validation/Validation";
import { useFormik } from "formik";
import './AddVisitors.css';
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import 'rc-time-picker/assets/index.css';





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
            <div className=" mt-2" style={{ height: "50px", backgroundColor: "#E5E5E5" }}>
                <h4 className=" mx-3 justify-content-center">
                    Add Visitors
                </h4>

            </div>

            <Form>
                <Row className="">

                    <Col className='pt-3 ps-2 pe-2  mx-3 mt-3 rounded' style={{ border: "1px dashed black" }}>
                        <Row>
                            <Col>
                                <div>
                                    <h2 className="please"> Please Choose Purpose*</h2>
                                </div>

                                <Form.Select>
                                    <option>Purpose of Meet</option>
                                    <option>Default select 2</option>
                                    <option>Default select 3</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} lg={6} md={6} sm={6} className="mt-2">
                                <div>
                                    First Name
                                </div>

                                <Form.Control className='mt-2'
                                    type="text"
                                    placeholder="Please Enter Full Visitors Name"

                                />

                            </Col>
                            <Col xs={12} lg={6} md={6} sm={6} className="mt-2">
                                <div>
                                    Last Name
                                </div>

                                <Form.Control className='mt-2'
                                    type="text"
                                    placeholder="Please Enter Full Visitors Name"

                                />

                            </Col>
                        </Row>

                        <Row>
                            <Col className="mt-2">
                                <div>
                                    Company Name
                                </div>
                                <Form.Control className='mt-2'
                                    type="text"
                                    placeholder="Please enter your Company Name"
                                />

                            </Col>
                        </Row>


                        <Row>
                            <Col className="mt-2">
                                <div>
                                    Email Id
                                </div>


                                <Form.Control className='mt-2'
                                    type="email"
                                    placeholder="Please enter Email Id"

                                />

                            </Col>
                        </Row>

                        <Row>
                            <Col className="mt-2">
                                <div>
                                    Mobile Number
                                </div>


                                <Form.Control className='mt-2'
                                    type="number"
                                    placeholder="Please enter Mobile Number Id"

                                />

                            </Col>
                        </Row>

                        <Row>
                            <Col className="mt-2">
                                <div>
                                    Address
                                </div>


                                <Form.Control className='mt-2'
                                    type="email"
                                    placeholder="Please enter your Address"

                                />

                            </Col>
                        </Row>

                        <Row className='mt-3' >
                            <Col xs={12} lg={4} md={4} sm={4}><div>Date</div>

                                <DatePicker />
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4}><div>Time</div>
                                <TimePicker

                                    use12Hours
                                    showSecond={false}
                                    focusOnOpen={true}
                                    format="hh:mm A" />
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4}><div>AadharCard Number</div>
                                <Form.Control className="mb-1"
                                    type="email"
                                    placeholder="Please Enter Your AADHAR CARD number"

                                />

                            </Col>

                        </Row>


                    </Col>

                </Row>

                <Col className='pt-3 ps-2 pe-2  mx-3 mt-3 rounded' style={{ border: "1px dashed black" }}>

                    <div  className="d-flex justify-content-evenly mb-3">

                        <Button  className=" Company-Button">
                            SUBMIT
                        </Button>
                    </div>
                </Col>


               
            </Form>



        </div>
    );
}

export default AddVisitors;
