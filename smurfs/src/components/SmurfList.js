import React, {Component} from 'react';
import smurfContext from '../contexts/smurfContext';
import Smurf from './Smurf';
import { thistle } from 'color-name';

class SmurfList extends Component {
    static contextType = smurfContext;

    componentDidMount(){
        this.context.getSmurfs();
        
    }



    render(){
        return(
            <div>
                {this.context.state.smurfList.map(smurf => {
                   return  <Smurf smurf={smurf}/>
                })}
            </div>
        );
    }
}
export default  SmurfList;