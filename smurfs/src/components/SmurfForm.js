import React, {Component} from 'react';

import smurfContext from '../contexts/smurfContext';
class SmurfForm extends Component {
    static contextType = smurfContext;

    

    render(){
        return(
            <div>
                test
            </div>
        );
    }
}

export default  SmurfForm;