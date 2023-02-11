import { Col, Row } from 'antd'
import React,{useState} from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../CompanyDetails/companytable.css"
import Compnayinfoeditmodal from './Compnayinfoeditmodal'
const Showcompanydetailtable = () => {

  const [showAddModal, setShowAddModal] = useState(false)
  const [openModalById,setOpenModalById] = useState(0)
const companyInfoEditModal = (e) =>{
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
                        <Link className="linkstyles" to ="/addcompanydetails" >
                            <div className=" d-flex justify-content-end">
                                <button
                                    className="Add-Edit-btn text-white"
                                    type="submit"
                                    // onClick={addEditModalFun}
                                >
                                    Add Company Detail
                                </button>
                            </div>
                            </Link>
                           

                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col>
                        <h6 style={{color:"maroon"}}>Primary Information</h6>
                            <Table border={1} responsive>
                                <thead >
                                    <tr>
                                        <th className='border-1'>Company Name</th>
                                        <th className='border-1'>Owner Name</th>
                                        <th className='border-1'>Co-Founder</th>
                                        <th className='border-1'>Brand Name</th>
                                        <th className='border-1'>Website</th>
                                        <th className='border-1'>Logo</th>
                                        <th className='border-1'>Company Type</th>
                                        <th className='border-1'>strength</th>
                                        <th className='border-1'>Email Id</th>
                                        <th className='border-1'>Action </th>

                                      
                                        {/* {Array.from({ length: 12 }).map((_, index) => (
                                            <th key={index}>Table heading</th>
                                        ))} */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='border-1'>Sumit & Arpit Company</td>
                                        <td className='border-1'>Sumit & Arpit Company</td>
                                        <td className='border-1'>Sumit & Arpit Company</td>
                                        <td className='border-1'>Sumit & Arpit Company</td>
                                        <td className='border-1'>Sumit & Arpit Company</td>
                                        <td className='border-1'>Sumit & Arpit Company</td>
                                        <td className='border-1'>Sumit & Arpit Company</td>
                                        <td className='border-1'>Sumit & Arpit Company</td>
                                        <td className='border-1'>Sumit & Arpit Company</td>
                                        <td className='border-1' style={{cursor:"pointer"}} onClick={()=>companyInfoEditModal(1)}>Edit Detail</td>

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
                        <h6 style={{color:"maroon"}} >Primary Contact Information</h6>
                            <Table border={1} responsive>
                                <thead>
                                    <tr>
                                        <th className='border-1'>Company Hr Name</th>
                                        <th className='border-1'>First Contact Number</th>
                                        <th className='border-1'>Second Contact Number</th>
                                        <th className='border-1'>Hr Email Id</th>
                                        <th className='border-1'>Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='border-1'>Sumit and Arpit </td>
                                        <td className='border-1'>1234567890</td>
                                        <td className='border-1'>9087654321</td>
                                        <td className='border-1'>Sumit&ArpitDemo@gmail,com</td>
                                        <td className='border-1' style={{cursor:"pointer"}} onClick={()=>companyInfoEditModal(2)}> Edit Detail</td>

                                      
                                    </tr>
                                  
                                </tbody>
                            </Table>

                        </Col>
                    </Row>

                    <Row className='mt-2'>
                        <Col>
                        <h6 style={{color:"maroon"}} >Primary Addresss Information</h6>
                            <Table className='border-1' responsive>
                                <thead>
                                    <tr >
                                        <th className='border-1'>Address</th>
                                        <th className='border-1'>City</th>
                                        <th className='border-1'>State</th>
                                        <th className='border-1'>Pincode</th>
                                        <th className='border-1'>Society Name</th>
                                        <th className='border-1'>Building Name</th>
                                        <th className='border-1'>Floor Number</th>
                                        <th className='border-1'>Flat Number</th>
                                        <th className='border-1'>Action </th>
                                       
                                    </tr>
                                </thead>
                                <tbody className='border-1'>
                                    <tr >
                                        <td className='border-1'>Sumit & Arpit Company address Sumit & Arpit Company address</td>
                                        <td className='border-1'>Delhi</td>
                                        <td className='border-1'>Delhi</td>
                                        <td className='border-1'>123456</td>
                                        <td className='border-1'>Sushant Lok</td>
                                        <td className='border-1'>Tower B</td>
                                        <td className='border-1'>4 th</td>
                                        <td className='border-1'>401</td>
                                        <td className='border-1' style={{cursor:"pointer"}} onClick={()=>companyInfoEditModal(3)}>Edit Detail</td>

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