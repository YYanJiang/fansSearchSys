import React, { Component } from 'react';
import { Fragment } from 'react';
// import { Redirect } from 'react-router';
import LoginBackground from './LoginBackground';
import SearchBar from './SearchBar';

class SearchForm extends Component {
    render() {
        // if(this.state.isAuthed) {return <Redirect to='/products' />}
        return (
            <Fragment>
                <LoginBackground />
                <SearchBar/>
            </Fragment>
        )
    }
}



export default SearchForm;