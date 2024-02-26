import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar  fixed="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Kuro Gaming</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Procesadores">Procesadores</Nav.Link>
            <Nav.Link href="#Placas de Video">Placas de Video</Nav.Link>
            <Nav.Link href="#Motherboards">Motherboards</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;