import { Col, Row } from "antd";
import React from "react";
import { Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import CompanyDetails from "../CompanyDetails/CompanyDetails";
import "./fourbox.css"
const Fourbox = () => {
  return (
    <div>
      <Row>
        <Col span={24} >
          <Row className="Main-Card-Layout-Div">
            <Col span={6} xs={24} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center align-items-center ">
              <div>
                <Card className="Main-Card-Div Animation-Card-Left Main-Card-Div-Left" >
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body className="d-flex justify-content-center align-items-center ">
                  <Link className="linkstyles"  to ="/addvisitors">
                     <Card.Title>Add Visitors</Card.Title></Link>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center align-items-center ">
              <div>
                <Card className="Main-Card-Div Animation-Card-Top">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body className="d-flex justify-content-center align-items-center ">
                  <Link className="linkstyles"  to ="/approvedvisitors"> <Card.Title>Approved Visitor List</Card.Title></Link>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center align-items-center ">
              <div>
                <Card className="Main-Card-Div Animation-Card-Bottom">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body className="d-flex justify-content-center align-items-center ">
                  <Link className="linkstyles"  to ="/rejectedlist"> <Card.Title>Rejected List Visitor</Card.Title></Link>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center align-items-center ">
                <div>

                  <Card className="Main-Card-Div Animation-Card-Right">
                    {/* <Card.Header>Header</Card.Header> */}

                    <Card.Body className="d-flex justify-content-center align-items-center ">
                    <Link className="linkstyles"  to ="/companydetails">  <Card.Title>Company Details</Card.Title>              </Link>


                      {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    </Card.Body>


                  </Card>
                </div>

            </Col>
          </Row>
        </Col>
      </Row>
      <div></div>
    </div>
  );
};

export default Fourbox;
