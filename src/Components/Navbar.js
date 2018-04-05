import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink
} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';

const logo = require("../Assets/logo_blue.png");

export default class NavbarFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this
            .onClick
            .bind(this);
        this.toggle = this
            .toggle
            .bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
                    <NavbarBrand href="/">
                        <img src={logo} height="48" className="d-inline-block align-bottom" alt="Logo"/>
                        <span style={Styles.brand}>CatatanKu</span>
                    </NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav right>
                            <NavItem>
                                <NavLink to="#">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#features">Features</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

const Styles = {
    brand: {

        fontSize: '32px',
        fontWeight: 'regular',
        marginLeft: '8px',
        //    backgroundColor: 'lightgray'
    }
}