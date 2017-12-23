import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchterm: 'search your interest'
        };
        console.log(props);
        props.onSearchTermChange(this.state.term);

    }

    onInputChange(term) {
        console.log("hellp");
        this.setState({searchterm: term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">{/* <input onChange={ this.onInputChange()}/>*/}
                <input value={this.state.searchterm}
                       onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>
        );
    }
}

export default SearchBar;
