import React from 'react'
import Img from '../static/mio5.png'
import './styles.scss'

export default class Work extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render(){
        return(
            
            <div id="work" className="insiders work">
                <dv className="boxi">
                     <dv className="pi">
                        <div className="w">Work</div>
                        <h2 className="h2">Freelace Developer</h2>
                        <h6 className="h6">July 2018 - current</h6>
                        <h6 className="h6">Front End, Javascript, ReactJS, HTML5, CSS3, SCSS, NodeJS, MongoDB</h6>
                    </dv>
                    <dv className="pi">
                        <div className="w">Education</div>
                        <h2 className="h2">FullStack Developer</h2>
                        <h3 className="h3">Make It Real</h3>
                        <h6 className="h6">August 2019 - current</h6>
                        <h6 className="h6">Javascript, NodeJS, ReactJS, MongoDB, Bootstrap 4, HTML5, CSS3, SCSS, JQuery, AJAX, Redux, Express.</h6>
                        
                    </dv>
                    <dv className="pi">
                        <div className="w">Education</div>
                        <h2 className="h2">Tecnología en Desarrollo de Software</h2>
                        <h3 className="h3">IU Digital de Antioquia</h3>
                        <h6 className="h6">July 2019 - current</h6>
                    </dv>
                    <dv className="pi">
                        <div className="w">Education</div>
                        <h2 className="h2">Software Developer</h2>
                        <h3 className="h3">Code Academy</h3>
                        <h6 className="h6">January 2016 - current</h6>
                    </dv>
                </dv>
                <dv className="box">
                    <img src={Img} className="im" />
                </dv>
            </div>
        );   
    }
}