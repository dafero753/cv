import React from 'react'
import { Container, Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap'
import Img from '../static/logo4.svg'
import "./styles.scss"
import Menu from '../Menu'

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <Navbar id="bar" className="bar" variant="dark">
                    <img className="imagen" src={Img} alt="photo"/>
                    <Menu />
                </Navbar>
        );
    }
}