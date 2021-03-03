import React from 'react';

import Unsplash from '../api/unsplash';

import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        images: [],
    };

    onSearchSubmit = async (term) => {
        const { results } = await Unsplash.get('/search/photos', {
            params: {
                query: term,
            },
        }).then((res) => res.data);

        this.setState({ images: results });
    };

    render() {
        const { images } = this.state;

        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={images} />
            </div>
        );
    }
}

export default App;
