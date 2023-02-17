import { Col, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;


const Readmore = (props) => {

    const backToHallList = () => {
        props.setReadMoreState(false)
    }

    return (
        <div>
            <Row>
                <Col className='container'>
                    <Row >
                        <Col span={24} >
                            <Title level={5} className="cursor-pointer" style={{ cursor: "pointer" }} onClick={backToHallList}>{`<`} All Seminar Hall</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className=" p-3 " style={{ border: "1px dotted black " }}>
                            <Row>
                                <Col span={3} style={{border:"1px solid black"}}>
                                    <div  style={{border:"1px solid red"}}>
                                        <img src="/images/logo-social.jpg" className=' w-25'/>
                                    </div>
                                    <div>Comapny Name</div>
                                    <div>Company Owner Name</div>
                                    <div>Company Co-Founder</div>
                                    <div>Website</div>
                                    <div>Company Type</div>
                                    <div>strength</div>
                                    <div>Email Id</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className='d-flex justify-content-center my-4'>
                                {/* <div className='Book-Seminar-Hall-Div'>
                                                        <button type="button" className="btn p-0 px-sm-2 btn-outline-dark register-btn"
                                                        //  onClick={() => readMoreFunction("registerNow", seminar)}
                                                        >Book Seminar Hall</button>
                                                    </div> */}
                                <div >
                                    <Link to="/registeruser">
                                    <button style={{ backgroundColor: "#720c20",border:"none" }} className="text-light px-5 fs-8 fs-sm-4 py-2">
                                    Book Seminar Hall
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

export default Readmore