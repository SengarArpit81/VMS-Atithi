import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Showslotmodal from '../ShowAllSlot/Showslotmodal'
// import {useHistory} from "react-router-dom"
import "./confrencelist.css"
import Readmore from './Readmore'
import Searchcomponnets from './Searchcomponnets'

const Conferencehalllist = () => {

    const params = useParams()

    console.log("pppppppppppqwqe", params)
    // const history = useHistory();

    const [readMoreState, setReadMoreState] = useState(false)


    const [showAddModal, setShowAddModal] = useState(false)
    const [openModalById, setOpenModalById] = useState(0)

    const companyInfoEditModal = () => {
        // setOpenModalById(e)
        setShowAddModal(true)
    }

    const handleClose = () => {
        setShowAddModal(false);
    }

    const readMoreFunction = (buttonId, seminar) => {
        //    console.log("seminar", seminar)
        // if (buttonId === 'readMore') {
        //     // setISValid(true);
        //     history.push({ pathname: '/Readmore', state: { seminarobj: seminar } })
        // }
        // else {
        //     // showModal();
        //     history.push({ pathname: '/Register', state: { seminarobj: seminar } })
        // }
        setReadMoreState(true)
    }

    return (
        <div>

            <Row>
                <Col span={24} className="">
                    <Row>
                        <Col span={24} className=" d-flex justify-content-center align-items-center flex-column bg-light ConferenceHeadingDiv">
                            <div className="">
                                <h1 className="company-heading-tag-h1" style={{ fontFamily: "sans-serif" }}>Conference Hall List</h1>
                            </div>
                            <div className=''>
                                <h2 className='company-heading-tag-h2'>Choose be the best one Confrence Hall</h2>
                            </div>
                        </Col>
                    </Row>


                    {readMoreState == true ? <Readmore setReadMoreState={setReadMoreState} /> : <Row>
                        <Col span={24} className='container bg-white pb-1' style={{ position: "relative" }}>
                            {/* <div > */}
                            <div className="bg-white" style={{ position: "sticky", top: "0", zIndex: "9" }}>
                                <div className="d-flex w-100 mb-2" style={{ borderBottom: "1px solid black" }}>
                                    <div className="w-100" >
                                        <Searchcomponnets />
                                        {/* <Searchcomponent subtenantId={subtenantKey} setSearch={setSearch} setIsPaid={setIsPaid} setdirectwebinar={setdirectwebinar} /> */}
                                    </div>

                                </div>
                            </div>

                            <Row className='pb-2' style={{ position: "relative", }}>
                                <Col className='' span={24} >

                                    <Row className=' bg-white pb-2' >
                                        <Col span={24} className=" p-3 " style={{ border: "1px dotted black " }}>
                                            <Row>
                                                <Col span={18} xs={24} sm={24} md={18} lg={18}>
                                                    <div>Company Logo</div>
                                                    <div>
                                                        <h3>Sumit & Arpit Company Name</h3>
                                                    </div>

                                                    <div>
                                                        <h5>Number of seats in hall</h5>
                                                    </div>
                                                    <div>
                                                        <h5>Amount</h5>
                                                    </div>
                                                    <div>
                                                        <h5>Location</h5>
                                                    </div>
                                                    {params.id == 2 ? "" :
                                                        <div className="row m-0 p-0" >
                                                            <div className="col-12 pe-0 p-0 seminarDescriptionDiv" style={{ width: "auto", maxWidth: "200px" }}>
                                                                <p className='adviser-tag-h4 m-0 p-0' style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} >
                                                                    {/* {seminar.description} */}
                                                                    know more about the confrace room.....


                                                                </p>
                                                            </div>
                                                            <div className="col-2  p-0 " style={{ width: "auto" }}>
                                                                <a href='#' type="button" className="text-decoration-underline text-dark ms-1 read-more-button"
                                                                    // onClick={() => readMoreFunction("readMore", seminar)}
                                                                    onClick={readMoreFunction}

                                                                >
                                                                    Read More
                                                                </a>
                                                            </div>
                                                        </div>
                                                    }
                                                </Col>
                                                <Col span={6} xs={24} sm={24} md={6} lg={6}>
                                                    {params.id == 2 ?
                                                        <>
                                                            <div className='Book-Seminar-Hall-Div'>
                                                                {/* <Link to="/registeruser"> */}
                                                                <button type="button" className="btn p-0 px-sm-2 btn-outline-dark register-btn"
                                                                    //  onClick={() => readMoreFunction("registerNow", seminar)}
                                                                    onClick={companyInfoEditModal}
                                                                >Show Seminar Slot</button>
                                                                {/* </Link> */}
                                                            </div>
                                                        </>
                                                        :

                                                        <><div className='Book-Seminar-Hall-Div'>
                                                            <Link to="/registeruser">
                                                                <button type="button" className="btn p-0 px-sm-2 btn-outline-dark register-btn"
                                                                //  onClick={() => readMoreFunction("registerNow", seminar)}
                                                                >Book Seminar Hall</button>
                                                            </Link>
                                                        </div></>}

                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>

                                    <Row className=' bg-white pb-2' >
                                        <Col span={24} className=" p-3 " style={{ border: "1px dotted black " }}>
                                            <Row>
                                                <Col span={18} xs={24} sm={24} md={18} lg={18}>
                                                    <div>Company Logo</div>
                                                    <div>
                                                        <h3>Sumit & Arpit Company Name</h3>
                                                    </div>

                                                    <div>
                                                        <h5>Number of seats in hall</h5>
                                                    </div>
                                                    <div>
                                                        <h5>Amount</h5>
                                                    </div>
                                                    <div>
                                                        <h5>Location</h5>
                                                    </div>
                                                    <div className="row m-0 p-0" >
                                                        <div className="col-12 pe-0 p-0 seminarDescriptionDiv" style={{ width: "auto", maxWidth: "200px" }}>
                                                            <p className='adviser-tag-h4 m-0 p-0' style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} >
                                                                {/* {seminar.description} */}
                                                                know more about the confrace room.....


                                                            </p>
                                                        </div>
                                                        <div className="col-2  p-0 " style={{ width: "auto" }}>
                                                            <a type="button" className="text-decoration-underline text-dark ms-1"
                                                                onClick={readMoreFunction}

                                                            // onClick={() => readMoreFunction("readMore", seminar)}
                                                            >
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={6} xs={24} sm={24} md={6} lg={6}>
                                                    <div className='Book-Seminar-Hall-Div'>
                                                        <button type="button" className="btn p-0 px-sm-2 btn-outline-dark register-btn"
                                                        //  onClick={() => readMoreFunction("registerNow", seminar)}
                                                        >Book Seminar Hall</button>
                                                    </div>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>


                                    <Row className=' bg-white pb-2' >
                                        <Col span={24} className=" p-3 " style={{ border: "1px dotted black " }}>
                                            <Row>
                                                <Col span={18} xs={24} sm={24} md={18} lg={18}>
                                                    <div>Company Logo</div>
                                                    <div>
                                                        <h3>Sumit & Arpit Company Name</h3>
                                                    </div>

                                                    <div>
                                                        <h5>Number of seats in hall</h5>
                                                    </div>
                                                    <div>
                                                        <h5>Amount</h5>
                                                    </div>
                                                    <div>
                                                        <h5>Location</h5>
                                                    </div>
                                                    <div className="row m-0 p-0" >
                                                        <div className="col-12 pe-0 p-0 seminarDescriptionDiv" style={{ width: "auto", maxWidth: "200px" }}>
                                                            <p className='adviser-tag-h4 m-0 p-0' style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} >
                                                                {/* {seminar.description} */}
                                                                know more about the confrace room.....


                                                            </p>
                                                        </div>
                                                        <div className="col-2  p-0 " style={{ width: "auto" }}>
                                                            <a type="button" className="text-decoration-underline text-dark ms-1"
                                                                onClick={readMoreFunction}
                                                            >
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={6} xs={24} sm={24} md={6} lg={6}>
                                                    <div className='Book-Seminar-Hall-Div'>
                                                        <button type="button" className="btn p-0 px-sm-2 btn-outline-dark register-btn"
                                                        //  onClick={() => readMoreFunction("registerNow", seminar)}
                                                        >Book Seminar Hall</button>
                                                    </div>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>


                                </Col>
                            </Row>
                            {/* </div> */}


                        </Col>
                    </Row>}


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
        </div>
    )
}

export default Conferencehalllist