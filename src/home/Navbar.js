// import { Collapse } from 'bootstrap'
import React, { useState } from 'react'
import { //
    Navbar,
    NavbarToggler,
    Collapse,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap'



const Sitebar = (props) => { //2
    //3
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        let newIsOpen = !isOpen
        setIsOpen(newIsOpen)
    }

    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Workout Log</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar