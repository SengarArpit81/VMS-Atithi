import { Link, useParams } from 'react-router-dom'
import React, { useState } from 'react'
// import Modal from 'react-bootstrap/Modal';
import { Col, Row, Input, Modal } from "antd";
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
// import Form from "react-bootstrap/Form";
import "../ShowAllSlot/showmodal.css";
import Commonbutton from '../CommonButtons/Commonbutton';
// import { company_Schema } from "../Validation/Validation";
// import { useFormik } from "formik";

const Showslotmodal = (props) => {
    const params = useParams()

    console.log("ppppppppppuuuuuuuuupqwqe", props.showAddModal)
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

    const [show, setShow] = useState(false);
    const [showSlot, setShowSlot] = useState(0);


    const handleClose = () => {
        props.setShowAddModal(false)
    };
    const handleShow = () => setShow(true);

    const showSlotFunction = (e) => {
        setShowSlot(e)
    }

    const bookSlotFunction = () => {
        alert("lkjlkhl")
        props.setShowAddModal(false)
    }
    console.log("showSlot", showSlot)

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
                            <Col span={24} xs={24} sm={24} md={24} lg={24} >
                                <h6>Selct any Date</h6>
                                <Space direction="vertical date-space-class"
                                // style={{
                                //     width: '100%',
                                // }}
                                >
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
                            <Col span={6} xs={24} sm={24} md={6} lg={6} className="mb-2">
                                <div className="form-check d-flex  justify-content-center align-items-center gap-2 ">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"
                                        onClick={(e) => showSlotFunction(2)}

                                    />
                                    <label className="form-check-label slot-title-tag-h6" for="flexRadioDefault1">
                                        Book slot for 2 hours
                                    </label>
                                </div>
                                {showSlot == 2 ? <>
                                    <div className='d-flex  justify-content-center  align-items-center flex-column gap-1'>
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
                                    </div></> : ""}

                            </Col>

                            <Col span={6} xs={24} sm={24} md={6} lg={6} className="mb-2">
                                <div className="form-check d-flex justify-content-center align-items-center gap-2">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"
                                        onClick={(e) => showSlotFunction(3)}
                                    />
                                    <label className="form-check-label slot-title-tag-h6" for="flexRadioDefault1">
                                        Book slot for 3 hours
                                    </label>
                                </div>
                                {showSlot == 3 ?
                                    <>
                                        <div className='d-flex  justify-content-center  align-items-center flex-column gap-1'>
                                            <div className='main-slot-div'>
                                                <h6 className=''>Fri, 22-feb-2023, 10AM-1PM</h6>
                                            </div>

                                            <div className='main-slot-div'>
                                                <h6 className=''>Fri, 22-feb-2023, 1PM-4PM</h6>
                                            </div>

                                            <div className='main-slot-div'>
                                                <h6 className=''>Fri, 22-feb-2023, 4PM-7PM</h6>
                                            </div>
                                        </div>
                                    </> : ""}

                            </Col>

                            <Col span={6} xs={24} sm={24} md={6} lg={6} className="mb-2">
                                <div className="form-check d-flex justify-content-center align-items-center gap-2">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"
                                        onClick={(e) => showSlotFunction(4)}

                                    />
                                    <label className="form-check-label slot-title-tag-h6" for="flexRadioDefault1">
                                        Book slot for 4 hours
                                    </label>
                                </div>
                                {showSlot == 4 ?
                                    <>
                                        <div className='d-flex  justify-content-center  align-items-center flex-column gap-1'>
                                            <div className='main-slot-div'>
                                                <h6 className=''>Fri, 22-feb-2023, 10AM-2PM</h6>
                                            </div>
                                            <div className='main-slot-div'>
                                                <h6 className=''>Fri, 22-feb-2023, 2PM-6PM</h6>
                                            </div>
                                        </div>
                                    </>
                                    : ""}

                            </Col>
                            <Col span={6} xs={24} sm={24} md={6} lg={6} className="mb-2">
                                <div className="form-check d-flex justify-content-center align-items-center gap-2">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"
                                        onClick={(e) => showSlotFunction(1)}

                                    />
                                    <label className="form-check-label slot-title-tag-h6" for="flexRadioDefault1">
                                        Book slot for one day
                                    </label>
                                </div>
                                {showSlot == 1 ?
                                    <>
                                        <div className='d-flex  justify-content-center  align-items-center flex-column '>
                                            <div className='main-slot-div'>
                                                <h6 className=''>Fri, 22-feb-2023, 10AM-6PM</h6>
                                            </div>
                                        </div>
                                    </> : ""}

                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col span={24} >
                                <div className='Book-Seminar-Hall-Div1'>
                                    <Link to="/previewslot">
                                        {/* <button type="button" className="btn p-0 px-sm-2  slot-btn"
                                    onClick={bookSlotFunction}
                                    // onClick={companyInfoEditModal}
                                    >Book Slot</button> */}
                                        <Commonbutton buttonText={"Book Slot"} backButton={bookSlotFunction}/>

                                    </Link>
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