import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default class Menu extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render(){
        return(
            
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="#me">Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#work">Work & Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#contacts">Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
            
        )   
    }
}