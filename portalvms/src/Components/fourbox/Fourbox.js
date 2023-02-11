import { Col, Row } from "antd";
import React from "react";
import { Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import CompanyDetails from "../CompanyDetails/CompanyDetails";
import "./fourbox.css"
const Fourbox = () => {
  return (
    <div className="bg-imgae">
      <Row >
        <Col span={24}>
          <Row className="Main-Card-Layout-Div">
            <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center align-items-center">
              <div>
              <Link className="linkstyles" to="/addvisitors" >
                <Card className="Main-Card-Div Animation-Card-Left Main-Card-Div-Left" >
                  <Card.Body className="d-flex justify-content-center align-items-center " >
                    <Card.Img src="images/addVisitor1.png" style={{ zIndex: "1" }} className='w-50' />
                  </Card.Body>
                 
                    {/* style={{backgroundColor:"white",borderBottomLeftRadius:"50px",borderBottomRightRadius:"50px"}} */}
                    <Card.Header className="text-center" style={{ backgroundColor: "maroon", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px" }}>Add Visitors</Card.Header>
                  

                </Card>
                </Link>
              </div>
            </Col>

            <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center align-items-center">
              <div>
              <Link className="linkstyles" to ="/approvedvisitors" >
                <Card className="Main-Card-Div Animation-Card-Top Main-Card-Div-Left" >
                  <Card.Body className="d-flex justify-content-center align-items-center " >
                    <Card.Img src="images/map-2.gif" style={{ zIndex: "1" }} className='w-50' />
                  </Card.Body>
                 
                    {/* style={{backgroundColor:"white",borderBottomLeftRadius:"50px",borderBottomRightRadius:"50px"}} */}
                    <Card.Header className="text-center" style={{ backgroundColor: "maroon", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px" }}>Approved Visitor List</Card.Header>
                 

                </Card>
                </Link>
              </div>
            </Col>

            <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center align-items-center">
              <div>
              <Link className="linkstyles" to ="/rejectedlist">
                <Card className="Main-Card-Div Animation-Card-Bottom Main-Card-Div-Left" >
                  
                  <Card.Body className="d-flex justify-content-center align-items-center " >
                    <Card.Img src="images/Rejectedlist1.jpg" style={{ zIndex: "1" }} className='w-50' />
                  </Card.Body>
                  {/* <div  style={{  }}> */}
                    {/* style={{backgroundColor:"white",borderBottomLeftRadius:"50px",borderBottomRightRadius:"50px"}} */}
                    <Card.Header className="text-center" style={{backgroundColor: "maroon",borderBottomLeftRadius: "50px",borderBottomRightRadius: "50px"}}>Rejected List Visitor</Card.Header>
                  {/* </div> */}

                </Card>
                </Link>
              </div>
            </Col>

            <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center align-items-center">
              <div>
              <Link className="linkstyles" to ="/addcompanydetails" >
                <Card className="Main-Card-Div Animation-Card-Right Main-Card-Div-Left" >
                  <Card.Body className="d-flex justify-content-center align-items-center " >
                    <Card.Img src="images/company11.jfif" style={{ zIndex: "1" }} className='w-75' />
                  </Card.Body>
                 
                    {/* style={{backgroundColor:"white",borderBottomLeftRadius:"50px",borderBottomRightRadius:"50px"}} */}
                    <Card.Header className="text-center" style={{ backgroundColor: "maroon", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px" }}>Add Company Details</Card.Header>
                

                </Card>
                </Link>
              </div>
            </Col>

            {/* <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center align-items-center ">
              <div>
                <Card className="Main-Card-Div Animation-Card-Top">
                  {/* <Card.Header>Header</Card.Header> 
                  <Card.Body className="d-flex justify-content-center align-items-center ">
                  <Link className="linkstyles"  to ="/approvedvisitors"> <Card.Title>Approved Visitor List</Card.Title></Link>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </div>
            </Col> */}
            {/* <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center align-items-center ">
              <div>
                <Card className="Main-Card-Div Animation-Card-Bottom">
                  {/* <Card.Header>Header</Card.Header> 
                  <Card.Body className="d-flex justify-content-center align-items-center ">
                  <Link className="linkstyles"  to ="/rejectedlist"> <Card.Title>Rejected List Visitor</Card.Title></Link>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </div>
            </Col> */}
            {/* <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} className="d-flex justify-content-center align-items-center ">
                <div>

                  <Card className="Main-Card-Div Animation-Card-Right">
                    {/* <Card.Header>Header</Card.Header> 

                    <Card.Body className="d-flex justify-content-center align-items-center ">
                    <Link className="linkstyles"  to ="/companydetails">  <Card.Title>Add Company Details</Card.Title>              </Link>


                      {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> 
                    </Card.Body>


                  </Card>
                </div>

            </Col> */}



          </Row>
        </Col>
      </Row>

    </div>
  );
};

export default Fourbox;
