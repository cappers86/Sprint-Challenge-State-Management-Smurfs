import React, {Component} from 'react';
import smurfContext from '../contexts/smurfContext';

class SmurfForm extends Component {
    static contextType = smurfContext;

    

    render(){
        return(
            <div>
                <form>
               <input
               name='name'
               value={this.context.state.smurfForm.name}
               placeholder='name'
               
               />
               <input
                name='age'
                value={this.context.state.smurfForm.age}
                placeholder='age'
               />
               <input
                name='height'
                value={this.context.state.smurfForm.height}
                placeholder='height'
               />
               <button>Add</button>
               </form>
            </div>
        );
    }
}

export default  SmurfForm;