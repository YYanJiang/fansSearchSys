import React, { Component } from 'react';
import Header from '../Header';
import styles from './ProductsPage.module.css';
import ProductListView from './ProductListView';
import * as actions from '../../actions/productActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilterBar from '../FilterBar';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';

let redirect= false;

class ProductsPage extends Component {

    // constructor(props) {
    //     super(props); 
    //     this.state = {
    //         checkedBoxes: this.props.location.state
            
    //     }
    // }



    componentDidMount() {
        this.props.actions.loadProducts();
    }

    // compareRedirect = (e, state) =>{
    //     redirect = true;
    //     console.log(state);
    //     // return (
    //     //     <div>
    //     //         <Link to={{
    //     //         pathname:`/compare`, 
    //     //         checkedBoxes: this.state.checkedBoxes
    //     //         }}/>
    //     //         <Redirect to={`/compare`}/>
    //     //     </div>
    //     // )
    // }

    render() {
        console.log("peoductPage props:  "+this.props);
        return (

            <div className={styles.allProducts}>
            
                <div>< Header /></div>
                <div>< FilterBar /></div>
                <div className={styles.wrapper}>
                    <div className={styles.topLine}>
                        <span className={styles.mechanical}>Mechanical&nbsp;&nbsp;></span><span>&nbsp;&nbsp;HVAC Fans</span>
                    </div>

                    <div className={styles.productList}>
                        {this.props.products.map((product) => <ProductListView product={product} key={product.code} />)}
                    </div>
                    <Link to={{
                    pathname:`/compare`, 
                    state: this.props.location.state
                    }}>
                    <button >compare comfirm</button>   
                    </Link>
                </div> 

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log("map:  "+state.users.users)
    return {
        products: state.products.products
        }
  }

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);