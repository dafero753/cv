import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
export default class Layout extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render(){
        return(
            <Container fluid className="Layout">
                <Header />
                <Body />
                <Footer />
            </Container>
        );   
    }
}