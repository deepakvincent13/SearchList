import React, { Component } from 'react';

class SearchBar extends Component {
    
    state = { term: ''};

    // onInputChange(event) {
    //  console.log(event.target.value)
    //  this.setState({term: event.target.value})
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input type="text"
                         onChange={e => this.setState({term: e.target.value})}
                         value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
   
}

export default SearchBar;