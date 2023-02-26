import { Col, Row } from 'antd'
import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Commonbackbutton from '../CommonButtons/Commonbackbutton';
import Commonbutton from '../CommonButtons/Commonbutton';
import "./registeruser.css"

const Registeruser = () => {
    return (
        <div>
            <Row className='mb-2'>
                <Col span={24} className="">
                    <Row>
                        <Col span={24} className=" d-flex justify-content-center align-items-center flex-column bg-light">
                            <div className="">
                                <h1 className="company-heading-tag-h11">New Registration</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className=" d-flex  bg-light ps-3 pe-3">
                        <Col span={14} xs={24} sm={24} md={14} lg={14}>
                            <div className="">
                                <h2 className="company-heading-tag-h22" >Sumit & Arpit Company Name</h2>
                            </div>
                            <div className=''>
                                <h3 className='company-heading-tag-h33'>Owner Name :<span style={{ color: "black" }}> Sumit & Arpit </span></h3>
                            </div>
                        </Col>
                        <Col span={10} xs={24} sm={24} md={10} lg={10}>

                            <div className=''>
                                <h6 className='company-heading-tag-h2-tag' >Amount : <sapn style={{ color: "black" }}>20000</sapn> </h6>
                            </div>
                            <div className="">
                                <h6 className="company-heading-tag-h2-tag">Location : <span style={{ color: "black" }}>Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024</span></h6>
                            </div>
                            <div className=''>
                                <h6 className='company-heading-tag-h2-tag'>No Of Seats : <sapn style={{ color: "black" }}>40</sapn> </h6>
                            </div>

                        </Col>
                    </Row>

                    <Row className='mt-1'>
                        <Col className='container p-2 form-control' >
                            <Row>
                                <Col span={12} xs={24} sm={24} md={12} lg={12}>
                                    <h6 style={{ color: "maroon"}}>First Name</h6>
                                    <Form.Control type="text" placeholder="Please enter first name" className='Left-input-box' />
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12} lg={12}>
                                    <h6 className='label-right-h6' style={{ color: "maroon" }}>Last Name</h6>

                                    <Form.Control type="text" placeholder="Please enter last name" className='right-input-box'  />
                                </Col>

                            </Row>

                            <Row className='mt-2'>
                                <Col span={12} xs={24} sm={24} md={12} lg={12}>
                                    <h6 style={{ color: "maroon" }}>Conatct Number</h6>
                                    <Form.Control type="text" placeholder="Please enter contact number" className='Left-input-box' />
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12} lg={12}>
                                    <h6 className='label-right-h6' style={{ color: "maroon" }}>Email ID</h6>

                                    <Form.Control type="text" placeholder="Please enter email Id" className='right-input-box' />
                                </Col>

                            </Row>

                            <Row className='mt-2'>
                                <Col span={12} xs={24} sm={24} md={12} lg={12}>
                                    <h6 style={{ color: "maroon" }}>Photo</h6>
                                    <Form.Control type="text" placeholder="Click your photo" className='Left-input-box' />
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12} lg={12}>
                                    <h6 className='label-right-h6' style={{ color: "maroon" }}>Identity Proof</h6>

                                    <Form.Control type="text" placeholder="Please enter dentity proof" className='right-input-box' />
                                </Col>

                            </Row>

                            <Row className='mt-2'>
                                <Col span={12} xs={24} sm={24} md={12} lg={12}>
                                    <h6 style={{ color: "maroon" }}>No. of Attendees</h6>
                                    <Form.Control type="text" placeholder="Please enter number of attendess" className='Left-input-box' />
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12} lg={12}>
                                    <h6 className='label-right-h6' style={{ color: "maroon" }}>How did you hear about us ?</h6>

                                    <Form.Select className='right-input-box' placeholder='How did you hear about us ?'>
                                        <option>Neighbour</option>
                                        <option value="1">Friend</option>
                                        <option value="2">Social Cite</option>
                                        <option value="3">News Paper</option>
                                        <option value="3">T.V</option>

                                    </Form.Select>
                                </Col>

                            </Row>

                            <Row className='mt-2'>
                                <Col span={24} xs={24} sm={24} md={24} lg={24}>
                                    <h6 style={{ color: "maroon" }}>Address</h6>
                                    <Form.Control type="text" placeholder="Please enter address"/>
                                </Col>
                            </Row>
                            <Row className='mt-2 '>
                                <Col span={6} xs={12} sm={12} md={6} lg={6}><Form.Control type="text" placeholder="city" className='new-class' readOnly /></Col>
                                <Col span={6} xs={12} sm={12} md={6} lg={6}><Form.Control type="text" placeholder="state" className='new-class' readOnly/></Col>
                                <Col span={6} xs={12} sm={12} md={6} lg={6}><Form.Control type="text" placeholder="Pincode" className='new-class pincode-text' readOnly/></Col>
                                <Col span={6} xs={12} sm={12} md={6} lg={6}><Form.Control type="text" placeholder="Country" className='pincode-text' readOnly/></Col>

                            </Row>
                            <Row>
                                <Col span={24}>
                                    <div className='d-flex justify-content-between align-items-center gap-3 mt-3'>
                                        <Link to="/seminarlist">
                                             <div>
                                            {/*<button type="button" className="btn p-0 px-sm-2 btn-outline-dark register-btn1" 
                                            // className="text-light px-5 fs-8 fs-sm-4 py-2"
                                            style={{width:150}}
                                            >
                                                Back
                                            </button> */}
                                                <Commonbackbutton backButtonText={"Back"} backbuttonwidth={130}/> 
                                            </div>
                                        </Link>

                                        <div className=''>
                                            <Commonbutton buttonText={"Register"} buttonwidth={130}/>
                                        </div>
                                    </div>


                                    {/* <div>
                                        <button style={{ backgroundColor: "#720c20", border: "none", float: "right", borderRadius: "3px" }} className="text-light px-5 fs-8 fs-sm-4 py-2">
                                            Register
                                        </button>
                                        <Link to="/seminarlist">
                                            <button style={{ backgroundColor: "#720c20", border: "none", float: "right", marginRight: "20px", borderRadius: "3px" }} className="text-light px-5 fs-8 fs-sm-4 py-2">
                                                Back
                                            </button>
                                        </Link>
                                    </div> */}
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