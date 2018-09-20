import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            display: 'button'
        }

        this.showImage = this.showImage.bind(this);
    }

    showImage(text){
        this.setState({
            display: text
        });
    }

    render(){
        if (this.state.display === 'button'){
            return(             
                <SurpriseButton onClick = {this.showImage}/>        
            );
        }
        else if (this.state.display === 'image'){
            return(
                <SurpriseImage />
            );
        }
    }
}