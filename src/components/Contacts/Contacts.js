import React from 'react'
import './styles.scss'

export default class Contacts extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render(){
        return(
            
            <div id="contacts" className="contacts">
                <div class="shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card">
                        <div>
                            <h1 className="h1">Contact</h1>
                        </div>
                        <div>
                            <div>
                                <h2 className="h8">Phone:</h2>
                                <h4 className="h4">+57 301 635 47 59</h4>
                            </div>
                            <div>
                                <h2 className="h8">E-mail:</h2>
                                <h4 className="h4">dafero753@gmail.com</h4>
                                <h4 className="h4">maximus753@hotmail.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );   
    }
}