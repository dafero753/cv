import React from 'react'
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
                        <h1><b>Hard</b> <i>skills</i></h1>
                        <img src={Img1} className="image" />
                    </div>
                    <div className="name">
                        <ul>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>Redux</li>
                            <li>NodeJS</li>
                            <li>rest api`s</li>
                            <li>css3 & html5</li>
                            <li>MongoDB</li>
                            <li>Boodstrap 4</li>
                            <li>jQuery & AJAX</li>
                        </ul>
                    </div>
                </div>
                <div className="soft">
                    <div className="two">
                        <h1><b>Soft</b> <i>skills</i></h1>
                        <img src={Img2} className="image" />
                    </div>
                    <div className="name">
                        <ul>
                            <li>Creativity</li>
                            <li>Team work</li>
                            <li>Responsibility</li>
                            <li>Work ethic</li>
                            <li>Decition making</li>
                            <li>Reliatibity</li>
                            <li>Commitment</li>
                            <li>Hard worker</li>
                            <li>Passionate</li>
                        </ul>
                    </div>
                </div>
            </div>
        );   
    }
}