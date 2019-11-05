import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './MainContainer.module.css';
// import globalStyles from './bootstrap.min.module.css';
// import cx from 'classnames';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import SearchForm from './SearchForm';
import * as actions from '../actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import { Route} from 'react-router-dom';

import ProductsPage from './products/ProductsPage';
import ProductsDetail from './products/ProductsDetail';
import Compare from './products/Compare';

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        // console.log("cdm:   "+this.props.users)
        this.props.actions.loadRegisteredUsers(); 

    }

    logIn = () => {
        this.setState({ loggedIn: true })
    }

    render() {
        const routeGuard = this.state.loggedIn || sessionStorage.getItem('currentUser');
        return (
            <div className={styles.container}>

                <Route exact path='/' render={() => (<Redirect to='/login'/>)} />
                <Route exact path='/signup' render={(routeProps) => <SignupForm/>} />
                <Route exact path='/login' render={(routeProps) => <LoginForm {...routeProps} users={this.props.users} logIn={this.logIn} />} />
                <Route exact path='/search' render={() => (routeGuard ? (<SearchForm />) : (<Redirect to='/login'/>))} />
                {/* <Route exact path='/header' component={Header} /> */}
                {/* <Route exact path='/products' render={() => (routeGuard ? (<ProductsPage />) : (<Redirect to='/login' />))}  /> */}
                <Route exact path='/products' component = {ProductsPage}/> 
                {/* <Route exact path='/products/:id' render={() => (routeGuard ? (<ProductsDetail />) : (<Redirect to='/login' />))}  /> */}
                {/* <Route exact path='/compare' render={() => (routeGuard ? (<Compare />) : (<Redirect to='/login' />))}  /> */}
                <Route path="/products/:id" component = {ProductsDetail}/> 
                <Route path="/compare" component = {Compare}/> 
                {/* render={(routeProps) => (routeGuard ? (<ProductsDetail {...routeProps} id={this.props.id}/>) : (<Redirect to='/login' />))}  /> */}

            </div> /* className=styles.container */
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("mst:  "+state.users.users)
    return {
        users: state.users.users}
  }

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
