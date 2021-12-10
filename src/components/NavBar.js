import logo from "../logo.svg";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

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
          <Navbar.Brand>
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
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
