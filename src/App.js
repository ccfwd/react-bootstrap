import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col,  Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
        <Form>
          <Row>
          <Col md>
            <Form.Group controlId="formEmail">
              <Form.Label>email</Form.Label>
                <Form.Control type="email" placeholder="example@email.com"/>
                <Form.Text className="text-muted">
                  trust us
            </Form.Text>
            </Form.Group>
          </Col>
            <Col md>
            <Form.Group>
              <Form.Label>password</Form.Label>
                <Form.Control type="password" placeholder="password"/>
                <Form.Text className="text-muted">
                  trust us...again
                </Form.Text>
              </Form.Group>
          </Col>
          </Row>
          <Button variant='secondary'>click</Button>
        </Form>
      <Card class="mb-3" style={{ color : '#000 ' }}>
        <Card.Img src="https://picsum.photos/200/100"/>

        <Card.Body>

          <Card.Title>
            example
            <Card.Text>
              example react
            </Card.Text>

          </Card.Title>
          <Button variant='primary'>Test Button</Button>
        </Card.Body>
        
      </Card>
      <Breadcrumb>
        <Breadcrumb.Item>hello</Breadcrumb.Item>
        <Breadcrumb.Item>hello</Breadcrumb.Item>
        <Breadcrumb.Item active>hello</Breadcrumb.Item>
      </Breadcrumb>
        <Alert variant='success'>This is a button</Alert>
       
        <Button>Test Button</Button>
       </Container>
      </header>
    </div>
  );
}

export default App;
