import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Img1 from '../static/mio8.png'
import Img2 from '../static/mio6.png'
import './styles.scss'

export default class Skills extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render(){
        return(
            
            <div id="skills" className="insiders skills">
                <div className="hard">
                    <div className="one">
                        <h1 className="h1"><b>Hard</b> <i>skills</i></h1>
                        <img src={Img1} className="image" />
                    </div>
                    <div className="name">
                            <h4>JavaScript</h4>
                            <h4>ReactJS</h4>
                            <h4>Redux</h4>
                            <h4>NodeJS</h4>
                            <h4>Rest APIs</h4>
                            <h4>CSS3 & HTML5</h4>
                            <h4>MongoDB</h4>
                            <h4>Bootstrap 4</h4>
                            <h4>JQuery & AJAX</h4>
                    </div>
                </div>
                <div className="soft">
                    <div className="two">
                        <h1 className="h11"><b>Soft</b> <i>skills</i></h1>
                        <img src={Img2} className="image" />
                    </div>
                    <div className="name">
                            <h4>Creativity</h4>
                            <h4>Team work</h4>
                            <h4>Responsibility</h4>
                            <h4>Work ethic</h4>
                            <h4>Decision making</h4>
                            <h4>Reliatibity</h4>
                            <h4>Commitment</h4>
                            <h4>Hard worker</h4>
                            <h4>Passionate</h4>
                    </div>
                </div>
            </div>
        );   
    }
}