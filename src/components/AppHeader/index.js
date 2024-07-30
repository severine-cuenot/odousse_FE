// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Other imports
import './style.scss';

function AppHeader() {
  return (
    <Navbar expand="md" sticky="top" className="bg-body-tertiary mx-3">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Ôdousse
        </Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">Liens utiles</Nav.Link>
            <NavDropdown title="Recherche" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Par litrage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Par biotope
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Par catégorie</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
