import React, { Component } from 'react';
import unsplash from '../api/unsplash'

import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends Component {

    state = { images: []};

     onSearchSubmit = async (term) => {
       console.log(term);
       const response = await unsplash.get('https://api.unsplash.com/search/photos', {
           params: { query: term},
            headers: {
                Authorization: 'Client-ID 1uJEUyLV8U-D5xQgVgO033cgCuLks8vPwozzrMvtSfA'
            }
       });
       console.log(this);
       this.setState({images: response?.data?.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found {this.state.images.length} images for your search
                <br></br>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;