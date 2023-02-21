import { Link, useParams } from 'react-router-dom'
import React, { useState } from 'react'
// import Modal from 'react-bootstrap/Modal';
import { Col, Row, Input, Modal } from "antd";
import Commonbutton from '../CommonButtons/Commonbutton';
const Barcodemodal = (props) => {

    const [showSlot, setShowSlot] = useState(0);


    const handleClose = () => {
        props.setShowAddModal(false)
    };

    return (
        <div>
            <Modal
                open={props.showAddModal}
                onCancel={handleClose}
                // centered={true}
                className="Modal-Main-Class"
                title={<div className='d-flex justify-content-center pt-2 fs-5'>Payment</div>}
                footer={false}
                closeIcon={<div className='text-light'> X</div>}
                maskClosable={false}
                width={300}
            >
                <Row>
                    <Col span={24} className='ps-4 pe-4 pt-2 pb-3'>

                        <Row className=''>
                            <Col span={24} xs={24} sm={24} md={24} lg={24} className="d-flex  justify-content-center align-items-center">
                                <h6>Name: Barcode scanning name</h6>
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col span={24} xs={24} sm={24} md={24} lg={24} className="d-flex  justify-content-center align-items-center">
                                <div className="d-flex  justify-content-center align-items-center w-75">
                                    <img src="/images/qrcode1.jpg" className='img-fluid' />
                                </div>

                            </Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col span={24} >
                                <div className='Book-Seminar-Hall-Div1'>
                                    <Link to="/previewslot">
                                        {/* <button type="button" className="btn p-0 px-sm-2  slot-btn"
                                        //  onClick={() => readMoreFunction("registerNow", seminar)}
                                        // onClick={companyInfoEditModal}
                                        >More Book Slot</button> */}
                                        <Commonbutton buttonText={"More Book Slot"} />

                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}

export default Barcodemodal