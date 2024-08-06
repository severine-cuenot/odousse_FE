// Bootstrap imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Other imports
import './style.scss';

function AppHeader() {
  return (
    <Navbar expand="md" sticky="top" className="bg-white px-3">
      <div>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Ôdousse
        </Navbar.Brand>
      </div>
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link className="px-3" href="/">Accueil</Nav.Link>
          <Nav className="ms-auto px-3">
            <NavDropdown title="Recherche par thème" id="basic-nav-dropdown">
              <NavDropdown.Item href="litrage">Par litrage</NavDropdown.Item>
              <NavDropdown.Item href="biotopes">
                Par biotope
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Tout voir
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="px-3" href="/recherche">Recherche détaillée</Nav.Link>
            <Nav.Link className="px-3" href="/ressources">Ressources</Nav.Link>
            <Nav.Link className="px-3" href="/about">À propos</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default AppHeader;
