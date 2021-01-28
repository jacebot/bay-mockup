import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap'
import './style.css'
const NavbarContainer = () => {
  return (
    <Navbar
      sticky="top"
      color="transparent"
      expand="sm"
      className="custom_navbar"
    >
      <NavbarBrand href="#">
        <img
          src={'./img/Logo_107010_Premier_Realty_VER_STK_W_MO@1x.png'}
          alt="Coldwell Banker Premier Realty logo"
          className="logo"
        />
      </NavbarBrand>
      <Nav className="ml-auto justify-end" navbar>
        <NavItem>
          <NavLink href="#">Buy</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Sell</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Agents</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Our Story</NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
        <Button color="dark" size="lg" href="#">
          Contact Us
        </Button>
      </NavbarText>
    </Navbar>
  )
}

export default NavbarContainer
