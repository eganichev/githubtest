import React from 'react'
import {Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap';
import {Link} from "react-router-dom";

export default class GuestNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar light className="bg-light navbar-expand-lg">
                    <NavbarBrand href="/">QA</NavbarBrand>
                    <Nav navbar className='mr-auto'>
                        <NavItem>
                            <Link className='nav-link' to="/">Home</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
