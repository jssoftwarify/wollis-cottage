import React from "react";
import { Container, Header } from "./styles/contact";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

export default function Contact({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Header>Contacts</Header>

      <Row
        style={{
          width: "100%",
          padding: "60px",
          margin: "0px",
        }}
      >
        <Col lg={4} md={4} sm={12} xs={12} style={{ padding: "15px" }}>
          <Card>
            <CardImg width="100%" src="/images/as.png" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Alena Soukupová</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                The draftswoman
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} style={{ padding: "15px" }}>
          <Card>
            <CardImg width="100%" src="/images/ws.JPG" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Wolfgang Soukup</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                The Cook
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} style={{ padding: "15px" }}>
          <Card>
            <CardImg width="100%" src="/images/js.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Joseph Soukup</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                The Worker
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
/*<Header ref={sectionRef} className="fadeIn">
        Contacts
      </Header>*/
