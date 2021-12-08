import logo from "../logo.svg";
import bolsa from "../bolsa.svg";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Container>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand mx-5>
            <img src={logo} alt="logo" width="40px" height="40px" /> Tu Tienda
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="right-aligned">
            <Nav>
              <NavDropdown title="Products">
                <NavDropdown.Item href="#products/item1">
                  Item1
                </NavDropdown.Item>
                <NavDropdown.Item href="#products/item2">
                  Item2
                </NavDropdown.Item>
                <NavDropdown.Item href="#products/item3">
                  Item3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#products/oferta">
                  Oferta del mes
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#nosotos">Nosotros</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
              <a href="/">
                <img src={bolsa} alt="logo" width="30px" height="30px" />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
