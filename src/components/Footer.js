import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div style={{background:"black",color:"white"}}>
        <Container>
            <Row style={{padding:"3%"}}>
                <Col xs={2}>
                    Col1
                </Col>
                 <Col xs={4}>
                    Col2
                </Col>
                <Col xs={6} style={{display:"flex",flexDirection:"row-reverse"}}>
                <Button style={{background:"rgb(236,94,113)"}}>Contact today!</Button>
                </Col>
                
            </Row>
            <Row style={{textAlign:"center",padding:"3%"}}>
                <Col>
                    Col1
                </Col>
                 <Col>
                    Col2
                </Col>
                 <Col>
                    Col3
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;
//xs-xtra small preferred for phone view