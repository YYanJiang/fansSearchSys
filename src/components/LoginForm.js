import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import { Button } from 'react-bootstrap';
// import * as actions from '../actions/userActions';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import cx from 'classnames';
import { Redirect } from 'react-router';
import { Fragment } from 'react';
import LoginBackground from './LoginBackground';
// import globalStyles from './bootstrap.min.module.css';
// import cx from 'classnames';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            valid: true,
            isAuthed: false
        }
    }

    // componentDidMount() {
    //     // console.log(this.props.users)
    // }

    loginClick = (event) => {
        event.preventDefault()
        console.log("Login clicked!");
        this.setState({
            username: event.target.username,
            password: event.target.password
        })
        // console.log(this.state);
        // console.log(this.props.users);
        this.authUser();
        event.target.reset();
    }

    authUser = () => {
        let loggedUser = {username: this.state.username, password: this.state.password};
        // console.log("userName"+loggedUser.username)
        let users = this.props.users;
        // console.log("user0Name"+users[0].username)
        for(let user of users) {
            if(loggedUser.username === user.username && loggedUser.password === user.password) {
                this.setState({isAuthed: true}, this.props.logIn(),
                sessionStorage.getItem('currentUser') === JSON.stringify(loggedUser) ? null : sessionStorage.setItem('currentUser', JSON.stringify(loggedUser))
                );
                // alert("Login successful!")
                return
            }
        }
        alert("Please enter vaid credentials!");
        return
    }

    handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
        // console.log(event.target.value.length)
        if(event.target.value.length < 1) {
            this.setState({valid: false})
        } else {
            this.setState({valid: true})
        }
    }

    render() {
        if(this.state.isAuthed) {return <Redirect to='/search' />}
        return (
            <Fragment>
                <Link to = "/signup" className = {styles.signup}>Sign Up</Link>
                <LoginBackground />
                
                <form className={styles.inputForm} onSubmit={this.loginClick}>
                    { this.state.valid ? <input 
                    className={cx(styles.Input, styles.gray)} type='text' name='username' 
                    placeholder='Username' onChange={this.handleOnChange}></input> :
                    <input 
                    className={cx(styles.Input, styles.red)} type='text' name='username' 
                    placeholder='Username' onChange={this.handleOnChange}></input> }

                    <i className="fas fa-user" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i>
                    {/* <i class="fas fa-dog" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i> */}
                    
                    <br/>
                    
                    { this.state.valid ? <input className={cx(styles.Input, styles.gray)} type='password' name='password' 
                    placeholder='Password' onChange={this.handleOnChange}></input> : 
                    <input className={cx(styles.Input, styles.red)} type='password' name='password' 
                    placeholder='Password' onChange={this.handleOnChange}></input> }

                    <i className="fas fa-lock" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i><br></br>
                    <Button type='submit' className={styles.login} variant="primary">Log in</Button> 
                </form>
            </Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     // console.log("usersss: "+state.users.users)
//     // const users = state.users.users;
//     // console.log(users)
//     // return users
//   }

// const mapDispatchToProps = (dispatch) => {
//     return {actions: bindActionCreators(actions, dispatch)}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginForm;