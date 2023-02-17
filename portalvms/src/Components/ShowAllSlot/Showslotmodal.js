import { Link, useParams } from 'react-router-dom'
import React, { useState } from 'react'
// import Modal from 'react-bootstrap/Modal';
import { Col, Row, Input, Modal } from "antd";
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
// import Form from "react-bootstrap/Form";
import "../ShowAllSlot/showmodal.css";
// import { company_Schema } from "../Validation/Validation";
// import { useFormik } from "formik";

const Showslotmodal = (props) => {
    const params = useParams()

    console.log("ppppppppppuuuuuuuuupqwqe", props.showAddModal)
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

    const [show, setShow] = useState(false);

    const handleClose = () => {
        props.setShowAddModal(false)
    };
    const handleShow = () => setShow(true);

    return (
        <div>
            <Modal
                open={props.showAddModal}
                onCancel={handleClose}
                centered={true}
                className="Modal-Main-Class"
                title={<div className='d-flex justify-content-center pt-2 fs-5'>Book My Slot</div>}
                footer={false}
                closeIcon={<div className='text-light'> X</div>}
                maskClosable={false}
                width={900}
            >
                <Row>
                    <Col span={24} className='ps-4 pe-4 pt-2 pb-3'>
                        <Row >
                            <Col span={24} lg={24}>
                                <h6>Selct any Date</h6>
                                <Space direction="vertical" style={{
        width: '35%',
      }}>
                                    <DatePicker
                                    size='large'
                                    style={{
                                        width: '100%',
                                      }}
                                        defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList}
                                    />
                                </Space>
                            </Col>
                        </Row>
                        <hr />
                        <Row className='mt-2'>
                            <Col span={6}>
                                <h6 className='slot-title-tag-h6'>Book slot for 2 hours</h6>
                                <div className='gap-2'>
                                    <div className='main-slot-div'>
                                        <h6 className=''>Fri, 22-feb-2023, 10AM-12PM</h6>
                                    </div>
                                    <div className='main-slot-div'>
                                        <h6 className=''>Fri, 22-feb-2023, 12PM-2PM</h6>
                                    </div>
                                    <div className='main-slot-div'>
                                        <h6 className=''>Fri, 22-feb-2023, 2PM-4PM</h6>
                                    </div>
                                    <div className='main-slot-div'>
                                        <h6 className=''>Fri, 22-feb-2023, 4PM-6PM</h6>
                                    </div>
                                </div>
                            </Col>

                            <Col span={6}>
                                <h6 className='slot-title-tag-h6'>Book slot for 3 hours</h6>
                                <div className='main-slot-div'>
                                    <h6 className=''>Fri, 22-feb-2023, 10AM-1PM</h6>
                                </div>

                                <div className='main-slot-div'>
                                    <h6 className=''>Fri, 22-feb-2023, 1PM-4PM</h6>
                                </div>

                                <div className='main-slot-div'>
                                    <h6 className=''>Fri, 22-feb-2023, 4PM-7PM</h6>
                                </div>
                            </Col>

                            <Col span={6}>
                                <h6 className='slot-title-tag-h6'>Book slot for 4 hours</h6>
                                <div className='main-slot-div'>
                                    <h6 className=''>Fri, 22-feb-2023, 10AM-2PM</h6>
                                </div>
                                <div className='main-slot-div'>
                                    <h6 className=''>Fri, 22-feb-2023, 2PM-6PM</h6>
                                </div>
                            </Col>
                            <Col span={6}>
                                <h6 className='slot-title-tag-h6'>Book slot for whole day </h6>
                                <div className='main-slot-div'>
                                    <h6 className=''>Fri, 22-feb-2023, 10AM-6PM</h6>
                                </div>
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col span={24} >
                                <div className='Book-Seminar-Hall-Div1'>
                                    {/* <Link to="/registeruser"> */}
                                    <button type="button" className="btn p-0 px-sm-2  slot-btn"
                                    //  onClick={() => readMoreFunction("registerNow", seminar)}
                                    // onClick={companyInfoEditModal}
                                    >Book Slot</button>
                                    {/* </Link> */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal>
            {/* <Modal show={props.showAddModal} size="lg" className="rounded-2" animation="false" backdrop="static" onHide={handleClose}>
                <Modal.Header closeButton closeVariant="white" style={{ backgroundColor: "maroon" }}>
                    <Modal.Title className='' style={{ color: "white" }}>
                        Book My Slot
                        {/* 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height:"200px"}}>
                    <Row>
                        <Col>
                        <Row>
                            <Col>
                            <Space direction="vertical" size={12}>
                            <DatePicker 
                            defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList}
                             />
                            </Space>
                            </Col>
                        </Row>
                        </Col>
                    </Row>

                </Modal.Body>

            </Modal> */}
        </div>
    )
}

export default Showslotmodal