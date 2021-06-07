
import {Container,Row,Col} from 'react-bootstrap'
import Start from './Components/Start'
import Header from './Components/Header'
const App =()=> {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>

              

        <Row>
            <Start/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
