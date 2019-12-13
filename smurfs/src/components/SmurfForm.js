import React, {Component} from 'react';
import smurfContext from '../contexts/smurfContext';

class SmurfForm extends Component {
    static contextType = smurfContext;

    changeHandler(e){
        this.context.formChange(e.target.name, e.target.value)
        //console.log(this.context.state.smurfForm)
    }

    submitHandler(e){
        e.preventDefault();
        this.context.addSmurf();
    }

    render(){
        return(
            <div className="Form">
                <form onSubmit={this.submitHandler.bind(this)}>
               <input className="Wrapper"
               name='name'
               value={this.context.state.smurfForm.name}
               placeholder='name'
               onChange={this.changeHandler.bind(this)}
               />
               <input className="Wrapper"
                name='age'
                value={this.context.state.smurfForm.age}
                placeholder='age'
                onChange={this.changeHandler.bind(this)}

               />
               <input className="Wrapper"
                name='height'
                value={this.context.state.smurfForm.height}
                placeholder='height'
                onChange={this.changeHandler.bind(this)}

               />
               <button className="Wrapper"   onClick={this.submitHandler.bind(this)}>Add</button>
               </form>
            </div>
        );
    }
}

export default  SmurfForm;