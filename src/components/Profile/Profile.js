import React from 'react'
import Img from '../static/mio17.png'
import Img2 from '../static/mio16.png'

import './styles.scss'

export default class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render(){
        return(
            
            <div id="profile" className="insiders profile">
                <div className="ko">
                    <img src={Img2} className="stand" />
                </div>
                <div className="medio">
                    <div className="tite">
                        <div className="ball"></div>
                        <div className="tit"><h2>Profile</h2></div>
                    </div>
                    <div className="center">
                        <div>
                            <h5 className="h3">Full Name</h5>
                            <h6>Daniel Romero</h6>
                        </div>
                        <div>
                            <h5 className="h3">Birth</h5>
                            <h6>September 1st 1986</h6>
                        </div>
                        <div>
                            <h5 className="h3">Address</h5>
                            <h6>Envigado, Antioquia</h6>
                        </div>
                        <div>
                            <h5 className="h3">Nationality</h5>
                            <h6>Colombian</h6>
                        </div>
                    </div>
                </div>
                <div className="ok">
                    <img src={Img} className="stand" />
                </div>
                
            </div>
        );   
    }
}