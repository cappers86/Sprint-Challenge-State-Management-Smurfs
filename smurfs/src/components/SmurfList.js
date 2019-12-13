import React, {Component} from 'react';
import smurfContext from '../contexts/smurfContext';
import Smurf from './Smurf';

class SmurfList extends Component {
    static contextType = smurfContext;

    componentDidMount(){
        this.context.getSmurfs();
    }



    render(){
        return(
            <div>
                <Smurf />
            </div>
        );
    }
}
export default  SmurfList;