import React, { Component } from 'react';
// import { connect } from 'react-redux';
import globalStyles from './bootstrap.min.module.css';
import cx from 'classnames';
// import { Fragment } from 'react';
import { Redirect } from 'react-router';

import styles from './SearchForm.module.css';
// import LoginBackground from './LoginBackground';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            clicked: false,
            redirect: false
        }
    }

    handleOnChange = event => {
        // const fanString = "HVAC fans".toLowerCase();
        this.setState({
          [event.target.name]: event.target.value
        });
        // if(event.target.value === fanString.slice(0, event.target.value.length) && event.target.value.length > 0) {
        //     this.setState({clicked: true}, () => {console.log(this.state.valid)})
        // } else {
        //     this.setState({clicked: false}, () => {console.log(this.state.valid)})
        // }
    }

    handleSearchClick = () => {
        console.log("Search clicked")
        const clicked = this.state.clicked;
        this.setState({ clicked: !clicked }, () => { console.log(this.state) })

    }

    handleFansClick = () => {
        this.setState({redirect: true}, () => console.log(this.state.redirect))
    }

    renderRedirect = () => {
        // if(this.state.redirect) {
        //     return <Redirect to='/products' />
        // }
        console.log("searchClicked");
        console.log( this.state.search );
        this.setState({redirect: true}, () => console.log(this.state.redirect))
    }

    render() {
        if(this.state.redirect) {return <Redirect to='/products' />}
        return (
                <div className = "searchBar">
                    <select className={cx(globalStyles.btn, globalStyles['btn-secondary'], 
                        globalStyles['dropdown-toggle'], styles.Button)}> 
                        <option> Mechanical</option>
                        
                    </select>
                    {/* <button className={cx(globalStyles.btn, globalStyles['btn-secondary'], 
                        globalStyles['dropdown-toggle'], styles.Button)} type="button" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mechanical &nbsp;&nbsp;
                    </button> */}

                    <input className={styles.searchInput} onChange={this.handleOnChange} name='search' placeholder="search..."/>

                    <i className="fas fa-caret-down" 
                        style={{position: 'relative', marginLeft: '-63px', zIndex: "10", cursor: "pointer"}} 
                        onClick={this.handleSearchClick}>
                    <button className="fas fa-search"
                       style={{ position: 'relative', marginLeft: '10px', zIndex: "10", background: "none", border:"none"}} 
                       onClick={this.renderRedirect}>
                    </button>  
                            
                            
                            </i>&nbsp;&nbsp;&nbsp;
                     

                    {/* {this.state.clicked ? 
                    <div>
                        {this.renderRedirect()}
                        <input className={styles.drop} value="HVAC Fans" onClick={this.handleFansClick}/>
                    </div> : null
                    } */}
                </div>
        )
    }
}



export default SearchForm;