import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Commonbackbutton from '../CommonButtons/Commonbackbutton'
import Commonbutton from '../CommonButtons/Commonbutton'
import Barcodemodal from './Barcodemodal'
import Showslotmodal from './Showslotmodal'

const Previewslot = (props) => {

    const [showAddModal, setShowAddModal] = useState(false)
    const [showpaymentModal, setShowPaymentModal] = useState(false)


    const backtoSlotModalFunction = () => {
        setShowAddModal(true)
    }

    const paymentSlotModalFunction = () => {
        setShowPaymentModal(true)

    }
    return (
        <div>
            <Row>
                <Col span={24} className='container '>
                    <Row>
                        <Col span={24} className='container bg-light '>
                            <Row>
                                <Col span={24} className='d-flex justify-content-center mt-2 mb-2'>
                                    <h3 className="heding-tag-h1">Preview before payment </h3>
                                </Col>
                            </Row>
                            <Row>

                                <Col span={16} xs={24} sm={24} md={16} lg={16}>
                                    <h5 style={{ color: "#808B96" }}>Company Information</h5>
                                    <div>Company Logo</div>
                                    <div>
                                        <h3>Sumit & Arpit Company Name</h3>
                                    </div>
                                    <div>
                                        <h6>Booked Date: 24/2/2023</h6>
                                    </div>
                                    <div>
                                        <h5>Number of seats in hall: 30</h5>
                                    </div>
                                    <div>
                                        <h5>Rs. 15000</h5>
                                    </div>
                                    <div>
                                        <h5>Location</h5>
                                    </div>


                                </Col>
                                <Col span={8} xs={24} sm={24} md={8} lg={8}>
                                    <h5 style={{ color: "#808B96" }}>Clinet Information</h5>

                                    <div>
                                        <h3>Rajkumar Kumar Singhal</h3>
                                    </div>

                                    <div>
                                        <h5>24/2/2023</h5>
                                    </div>
                                    <div>
                                        <h5>Number of seats in hall : 30</h5>
                                    </div>
                                    <div>
                                        <h5>Rs. 15000</h5>
                                    </div>
                                    <div>
                                        <h5>Location</h5>
                                    </div>
                                    <div>
                                        <h5>Booked Slot : Book slot for 2 hours</h5>

                                    </div>

                                    <div className='main-slot-div'>
                                        <h6 className=''>Fri, 22-feb-2023, 10AM-12PM</h6>
                                    </div>
                                    <div className='main-slot-div'>
                                        <h6 className=''>Fri, 22-feb-2023, 12PM-2PM</h6>
                                    </div>
                                    <div className='main-slot-div'>
                                        <h6 className=''>Fri, 22-feb-2023, 12PM-2PM</h6>
                                    </div>
                                    <div className='main-slot-div'>
                                        <h6 className=''>Fri, 22-feb-2023, 12PM-2PM</h6>
                                    </div>
                                </Col>
                            </Row>
                            {/* <hr /> */}

                            <Row>
                                <Col span={24} className="d-flex justify-content-center gap-2 align-items-center mb-2 p-0">

                                    <div className="m-0 p-0">
                                        {/* <button style={{ backgroundColor: "#720c20", border: "none", float: "right", marginRight: "20px", borderRadius: "3px" }} className="text-light px-5 fs-8 fs-sm-4 py-2"
                                        onClick={backtoSlotModalFunction}
                                        >
                                            Back
                                        </button> */}
                                        <Commonbackbutton backButtonText={"Back"} backbuttonwidth={120}  backButton={backtoSlotModalFunction} />


                                    </div>
                                    <div className='m-0 p-0'>
                                        {/* <button style={{ backgroundColor: "#720c20", border: "none", float: "right", borderRadius: "3px" }} className="text-light px-5 fs-8 fs-sm-4 py-2"
                                         onClick={paymentSlotModalFunction}
                                        >
                                            Payment
                                        </button> */}
                                        <Commonbutton buttonText={"Payment"} buttonwidth={120} commonButton={paymentSlotModalFunction}/>

                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {
                showAddModal == true &&

                <Showslotmodal showAddModal={showAddModal}
                    // openModalById={openModalById}
                    setShowAddModal={setShowAddModal}

                //  GetCommMediumPathApiFuction={() => GetCommMediumPathApiFuction(subtenantID)} 
                />
            }

            {
                showpaymentModal == true &&

                <Barcodemodal showAddModal={showpaymentModal}
                    // openModalById={openModalById}
                    setShowAddModal={setShowPaymentModal}

                //  GetCommMediumPathApiFuction={() => GetCommMediumPathApiFuction(subtenantID)} 
                />
            }


        </div>
    )
}

export default Previewslot