import { Col, Row } from 'antd'
import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Registeruser = () => {
    return (
        <div>
            <Row>
                <Col span={24} className="">
                    <Row>
                        <Col span={24} className=" d-flex justify-content-center align-items-center flex-column bg-light">
                            <div className="">
                                <h1 className="company-heading-tag-h1" style={{ fontFamily: "sans-serif" }}>New Registration</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className=" d-flex  bg-light ps-3 pe-3">
                        <Col span={14}>
                            <div className="">
                                <h2 className="company-heading-tag-h2" style={{ fontFamily: "sans-serif", color: "gray" }}>Sumit & Arpit Company Name</h2>
                            </div>
                            <div className=''>
                                <h4 className='company-heading-tag-h2' style={{ color: "gray" }}>Owner Name :<span style={{ color: "black" }}> Sumit & Arpit </span></h4>
                            </div>
                        </Col>
                        <Col span={10}>

                            <div className=''>
                                <h6 className='company-heading-tag-h2' style={{ color: "gray" }}>Amount : <sapn style={{ color: "black" }}>20000</sapn> </h6>
                            </div>
                            <div className="">
                                <h6 className="company-heading-tag-h2" style={{ fontFamily: "sans-serif", color: "gray" }}>Location : <span style={{ color: "black" }}>Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024</span></h6>
                            </div>
                            <div className=''>
                                <h6 className='company-heading-tag-h2' style={{ color: "gray" }}>No Of Seats : <sapn style={{ color: "black" }}>40</sapn> </h6>
                            </div>

                        </Col>
                    </Row>

                    <Row className='mt-1'>
                        <Col className='container p-2 form-control' >
                            <Row>
                                <Col span={12}>
                                    <h6 style={{ color: "maroon" }}>First Name</h6>
                                    <Form.Control type="text" placeholder="Normal text" style={{ width: "98%" }} />
                                </Col>
                                <Col span={12}>
                                    <h6 className='ms-3' style={{ color: "maroon" }}>Last Name</h6>

                                    <Form.Control type="text" placeholder="Normal text" style={{ width: "97%", float: "right" }} />
                                </Col>

                            </Row>

                            <Row className='mt-2'>
                                <Col span={12}>
                                    <h6 style={{ color: "maroon" }}>Conatct Number</h6>
                                    <Form.Control type="text" placeholder="Normal text" style={{ width: "98%" }} />
                                </Col>
                                <Col span={12}>
                                    <h6 className='ms-3' style={{ color: "maroon" }}>Email ID</h6>

                                    <Form.Control type="text" placeholder="Normal text" style={{ width: "97%", float: "right" }} />
                                </Col>

                            </Row>

                            <Row className='mt-2'>
                                <Col span={12}>
                                    <h6 style={{ color: "maroon" }}>Photo</h6>
                                    <Form.Control type="text" placeholder="Normal text" style={{ width: "98%" }} />
                                </Col>
                                <Col span={12}>
                                    <h6 className='ms-3' style={{ color: "maroon" }}>Identity Proof</h6>

                                    <Form.Control type="text" placeholder="Normal text" style={{ width: "97%", float: "right" }} />
                                </Col>

                            </Row>

                            <Row className='mt-2'>
                                <Col span={12}>
                                    <h6 style={{ color: "maroon" }}>No. of Attendees</h6>
                                    <Form.Control type="text" placeholder="Normal text" style={{ width: "98%" }} />
                                </Col>
                                <Col span={12}>
                                    <h6 className='ms-3' style={{ color: "maroon" }}>How did you hear about us ?</h6>

                                    <Form.Select aria-label="Default select example" style={{ width: "97%", float: "right" }}>
                                        <option>How did you hear about us ?</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>

                            </Row>

                            <Row className='mt-2'>
                                <Col span={12}>
                                    <h6 style={{ color: "maroon" }}>Address</h6>
                                    <Form.Control type="text" placeholder="Normal text" style={{ width: "98%" }} />
                                </Col>
                                <Col span={12} >
                                    <h6 style={{ color: "white" }}>a</h6>

                                    <div>
                                        <button style={{ backgroundColor: "#720c20", border: "none", float: "right", borderRadius: "3px" }} className="text-light px-5 fs-8 fs-sm-4 py-2">
                                            Register
                                        </button>
                                        <Link to="/seminarlist">
                                            <button style={{ backgroundColor: "#720c20", border: "none", float: "right", marginRight: "20px", borderRadius: "3px" }} className="text-light px-5 fs-8 fs-sm-4 py-2">
                                                Back
                                            </button>
                                        </Link>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Registeruser