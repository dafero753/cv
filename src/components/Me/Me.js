import React from 'react'
import Img from '../static/mio2.png'
import './styles.scss'

export default class Me extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render(){
        return(            
            <div id="me" className="insiders me">
                <div className="text">
                    <div className="mine">
                        <div className="this that">
                            <div className="hi">
                                Hi!!
                            </div>
                            <div className="my">
                                my name is 
                            </div>
                        </div>
                        <div className="this">
                            <div className="da">
                                Daniel Romero
                            </div>
                            <div className="and">
                                and I am  
                            </div>
                        </div>
                        <div className="this">
                            <div className="yea">
                                33 years old 
                            </div>
                            <div className="col">
                                Colombian
                            </div>
                        </div>
                        <div className="full">
                            FullStack Developer
                        </div>
                    </div>
                </div>
                <div className="cont">
                    <img src={Img} className="img" />
                </div>
            </div>
        );   
    }
}