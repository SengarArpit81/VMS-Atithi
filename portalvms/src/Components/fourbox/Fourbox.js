import { Col, Row } from "antd";
import React from "react";
import Card from "react-bootstrap/Card";
import "./fourbox.css"
const Fourbox = () => {
  return (
    <div>
      <Row>
        <Col span={24} >
          <Row  className="Main-Card-Layout-Div">
            <Col span={6} xs={24} sm={12} md={12} lg={12} xl={6}  className="d-flex justify-content-center align-items-center ">
              <div>
                <Card  className="Main-Card-Div Animation-Card-Left" >
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body className="d-flex justify-content-center align-items-center ">
                    <Card.Title>Primary Card Title</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={12} xl={6} className="d-flex justify-content-center align-items-center ">
              <div>
                <Card className="Main-Card-Div Animation-Card-Top">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body className="d-flex justify-content-center align-items-center ">
                    <Card.Title>Primary Card Title</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={12} xl={6} className="d-flex justify-content-center align-items-center ">
              <div>
                <Card className="Main-Card-Div Animation-Card-Bottom">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body className="d-flex justify-content-center align-items-center ">
                    <Card.Title>Primary Card Title</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col span={6} xs={24} sm={12} md={12} lg={12} xl={6} className="d-flex justify-content-center align-items-center ">
              <div>
                <Card className="Main-Card-Div Animation-Card-Right">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body className="d-flex justify-content-center align-items-center ">
                    <Card.Title>Primary Card Title</Card.Title>
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
