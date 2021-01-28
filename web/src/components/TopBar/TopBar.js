import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import './style.css'
const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Navbar sticky="top" expand="md" className="p-0 py-1 new-dark">
      <NavbarBrand href="#">
        <img
          src={'./img/Logo_107010_Premier_Realty_VER_STK_W_MO@1x.png'}
          alt="Coldwell Banker Premier Realty logo"
          className="logo-sm"
        />
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6"
          width="27"
          height="27"
          fill="#ffffff"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar className="ml-2">
        <Nav className="ml-auto justify-end topBar" navbar>
          <NavItem>
            <NavLink href="#">Luxury</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Relocations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Developers & Commercial</NavLink>
          </NavItem>
          <NavItem className="mr-1">
            <NavLink href="#">Property Management</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto justify-end topBar d-block d-md-none" navbar>
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
          <NavItem>
            <NavLink href="#">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default TopBar
