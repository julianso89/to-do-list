import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddItem extends Component {
    state = {
        title: '',
        details: '',
    }

    handleAddingItem = (event) => {
        event.preventDefault();

        this.props.add(this.state);

        this.setState({
            title: '',
            details: '',
        })
    }

    render(){
        return (
                <div>
                    <h1 className="center">Add To Do Item</h1>

                    <div className = "row">
                        <div className="col s12 right-align">
                            <Link to="/" className="btn green darken-2">Back To List</Link>
                        </div>
                    </div>

                    <form onSubmit={this.handleAddingItem}>

<div className="row">
     <div className="input-field col s8 offset-s2">
        <input
            type="text"
            value={this.state.title}
            onChange={(e) => { this.setState({title: e.target.value}) }}
        />
        <label>Title</label>
    </div>
</div>

<div className="row">
    <div className="input-field col s8 offset-s2">
        <input type="text"
               value={this.state.details}
               onChange={ e => this.setState({details: e.target.value}) }
        />
        <label>Details</label>
    </div>
</div>

<div className="row">
    <div className="col s8 offset-s2 right-align">
        <button className="btn purple darken-2">Add Item</button>
    </div>
</div>
</form>
                </div>
        );
    }
}

export default AddItem;