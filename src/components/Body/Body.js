import React from 'react'
import { Container } from 'react-bootstrap'
import Contacts from '../Contacts'
import Me from '../Me'
import Profile from '../Profile'
import Skills from '../Skills'
import Work from '../Work'
import './styles.scss'

export default class Body extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render(){
        return(
            <div>
                <Me /> 
                <Profile />
                <Skills />
                <Work />
                <Contacts />
            </div>
        );   
    }
}