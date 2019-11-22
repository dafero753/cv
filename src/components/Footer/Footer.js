import React from 'react'
import { Container, Nav, Button } from 'react-bootstrap'
import './styles.scss'

export default class Footer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render(){
        return(    
        <footer className="footer">
            <Button href="/home">Go back</Button>
            <h6>
                Create by: Daniel Fernando Romero Rodriguez
            </h6>
            <h6>
                Github: <a href="https://github.com/dafero753" target="_blank">Daniel´s github</a>
            </h6>
            <h6>
            Linkedin: <Nav.Link className="d-inline p-0" href="https://linkedin.com/in/daniel-fernando-romero-rodriguez-385b2853/" target="_blank">Daniel´s Linkedin</Nav.Link>
            </h6>
        </footer>
        );   
    }
}