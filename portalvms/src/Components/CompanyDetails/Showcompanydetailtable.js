import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Commonbutton from '../CommonButtons/Commonbutton'
import "../CompanyDetails/companytable.css"
import Compnayinfoeditmodal from './Compnayinfoeditmodal'
const Showcompanydetailtable = () => {

    const [showAddModal, setShowAddModal] = useState(false)
    const [openModalById, setOpenModalById] = useState(0)
    const companyInfoEditModal = (e) => {
        setOpenModalById(e)
        setShowAddModal(true)
    }

    const handleClose = () => {
        setShowAddModal(false);
    }

    return (
        <div className='p-3'>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col>
                            <div>
                                <h3>Sumit & Arpit Company Name</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col span={14} xs={14} sm={14} md={14} lg={14} className="input-group Serach-Input-Box-Div">
                            <input type="text" className="form-control" placeholder="Search for occurrences"
                            // onChange={handleSearch} 
                            />
                            <a href="#" style={{ backgroundColor: "#F4F6F6" }}><img className='' height={40} src="/icons/eventSearchIngIcon.svg" /></a>
                        </Col>
                        <Col span={10} xs={10} sm={10} md={10} lg={10}>
                            <Link className="linkstyles" to="/addcompanydetails" >
                                {/* <div className=" d-flex justify-content-end">
                                    <button
                                        className="Add-Edit-btn text-white"
                                        type="submit"
                                    // onClick={addEditModalFun}
                                    >
                                        Add Company Detail
                                    </button>
                                </div> */}
                                <Commonbutton buttonText={"Add Company Detail"} />
                            </Link>


                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col>
                            <h6 style={{ color: "maroon" }}>Primary Information </h6>
                            <Table bordered responsive>
                                <thead className='bg-light'>
                                    <tr>
                                        <th >Company Name</th>
                                        <th >Owner Name</th>
                                        <th >Co-Founder</th>
                                        <th >Brand Name</th>
                                        <th >Website</th>
                                        <th >Logo</th>
                                        <th >Company Type</th>
                                        <th >strength</th>
                                        <th >Email Id</th>
                                        <th >Action </th>


                                        {/* {Array.from({ length: 12 }).map((_, index) => (
                                            <th key={index}>Table heading</th>
                                        ))} */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >Sumit & Arpit Company</td>
                                        <td >Sumit & Arpit Company</td>
                                        <td >Sumit & Arpit Company</td>
                                        <td >Sumit & Arpit Company</td>
                                        <td >Sumit & Arpit Company</td>
                                        <td >Sumit & Arpit Company</td>
                                        <td >Sumit & Arpit Company</td>
                                        <td >Sumit & Arpit Company</td>
                                        <td >Sumit & Arpit Company</td>
                                        <td style={{ cursor: "pointer", color: "blue" }} onClick={() => companyInfoEditModal(1)}>Edit Detail</td>

                                        {/* {Array.from({ length: 12 }).map((_, index) => (
                                            <td key={index}>Table cell {index}</td>
                                        ))} */}
                                    </tr>

                                </tbody>
                            </Table>

                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            <h6 style={{ color: "maroon" }} >Primary Contact Information</h6>
                            <Table bordered border={1} responsive>
                                <thead className='bg-light'>
                                    <tr>
                                        <th >Company Hr Name</th>
                                        <th >First Contact Number</th>
                                        <th >Second Contact Number</th>
                                        <th >Hr Email Id</th>
                                        <th >Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >Sumit and Arpit </td>
                                        <td >1234567890</td>
                                        <td >9087654321</td>
                                        <td >Sumit&ArpitDemo@gmail.com</td>
                                        <td style={{ cursor: "pointer", color: "blue" }} onClick={() => companyInfoEditModal(2)}> Edit Detail</td>


                                    </tr>

                                </tbody>
                            </Table>

                        </Col>
                    </Row>

                    <Row className='mt-2'>
                        <Col>
                            <h6 style={{ color: "maroon" }} >Primary Addresss Information</h6>
                            <Table bordered responsive>
                                <thead className='bg-light'>
                                    <tr >
                                        <th >Address</th>
                                        <th >City</th>
                                        <th >State</th>
                                        <th >Pincode</th>
                                        <th >Society Name</th>
                                        <th >Building Name</th>
                                        <th >Floor Number</th>
                                        <th >Flat Number</th>
                                        <th >Action </th>

                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td >Sumit & Arpit Company address Sumit & Arpit Company address</td>
                                        <td >Delhi</td>
                                        <td >Delhi</td>
                                        <td >123456</td>
                                        <td >Sushant Lok</td>
                                        <td >Tower B</td>
                                        <td >4 th</td>
                                        <td >401</td>
                                        <td style={{ cursor: "pointer", color: "blue" }} onClick={() => companyInfoEditModal(3)}>Edit Detail</td>

                                    </tr>

                                </tbody>
                            </Table>

                        </Col>
                    </Row>

                    <Row className='mt-2'>
                        <Col>
                            <h6 style={{ color: "maroon" }} >Primary Conference Hall Information</h6>
                            <Table bordered responsive>
                                <thead className='bg-light'>
                                    <tr >
                                        <th >Have Seminar hall</th>
                                        <th >Width</th>
                                        <th >Length</th>
                                        <th >Seats</th>
                                        <th >Projecter</th>
                                        <th >Sound System</th>
                                        <th >Micke</th>
                                        <th >A.C</th>
                                        <th >Fans</th>

                                        <th >Description</th>
                                        <th >Action</th>



                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td >Yes</td>
                                        <td >50ft</td>
                                        <td >300ft</td>
                                        <td >50</td>
                                        <td >Yes</td>
                                        <td >No</td>
                                        <td >No</td>
                                        <td >Yes</td>
                                        <td >Yes</td>


                                        <td style={{ width: "400px" }}>This is the best conference hal. Please visit one time and give to us one chance.
                                            This is the best conference hal. Please visit one time and give to us one chance</td>


                                        <td style={{ cursor: "pointer", color: "blue" }} onClick={() => companyInfoEditModal(4)}>Edit Detail</td>

                                    </tr>

                                </tbody>
                            </Table>

                        </Col>
                    </Row>

                    <Row className='mt-2'>
                        <Col>
                            <h6 style={{ color: "maroon" }} >Primary Conference Hall Amount Information</h6>
                            <Table bordered responsive>
                                <thead className='bg-light'>
                                    <tr >

                                        <th >Amount for 2 hours</th>
                                        <th >Amount for 3 hours</th>
                                        <th >Amount for 4 hours</th>
                                        <th >Amount for One Day</th>
                                        <th >Action</th>



                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <td >10000</td>
                                        <td >15000</td>
                                        <td >20000</td>
                                        <td >22000</td>
                                        <td style={{ cursor: "pointer", color: "blue" }} onClick={() => companyInfoEditModal(5)}>Edit Detail</td>
                                    </tr>

                                </tbody>
                            </Table>

                        </Col>
                    </Row>
                    {/* <Row className='mt-2'>
                        <Col>
                        <h6 style={{color:"maroon"}} >Primary Conference Room Information</h6>
                            <Table border={1} responsive>
                                <thead>
                                    <tr>
                                        <th>Company Name</th>
                                        <th>Owner Name</th>
                                        <th>Co-Founder</th>
                                        <th>Brand Name</th>
                                        <th>Company Website</th>
                                        <th>Company Logo</th>
                                        <th>Company Type</th>
                                        <th>employee strength</th>
                                        <th>Company Email Id</th>
                                        {/* <th>Company Name</th>
                                        <th>Company Name</th>
                                        <th>Company Name</th> */}
                    {/* <th>Company Name</th>
                                        <th>Company Name</th>
                                        <th>Company Name</th>
                                        <th>Company Name</th>
                                        <th>Company Name</th>
                                        <th>Company Name</th>
                                        <th>Company Name</th> 





                                        {/* {Array.from({ length: 12 }).map((_, index) => (
                                            <th key={index}>Table heading</th>
                                        ))} 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sumit & Arpit Company</td>
                                        <td>Sumit & Arpit Company</td>

                                        <td>Sumit & Arpit Company</td>

                                        <td>Sumit & Arpit Company</td>
                                        <td>Sumit & Arpit Company</td>
                                        <td>Sumit & Arpit Company</td>
                                        <td>Sumit & Arpit Company</td>
                                        <td>Sumit & Arpit Company</td>
                                        <td>Sumit & Arpit Company</td>

                                        {/* {Array.from({ length: 12 }).map((_, index) => (
                                            <td key={index}>Table cell {index}</td>
                                        ))} 
                                    </tr>
                                  
                                </tbody>
                            </Table>

                        </Col>
                    </Row> */}

                </Col>
            </Row>
            {
                showAddModal &&

                <Compnayinfoeditmodal showAddModal={showAddModal}
                    openModalById={openModalById}
                    setShowAddModal={setShowAddModal}

                //  GetCommMediumPathApiFuction={() => GetCommMediumPathApiFuction(subtenantID)} 
                />
            }
        </div>
    )
}

export default Showcompanydetailtable