import React, { Component } from 'react';
import globalStyles from '../bootstrap.min.module.css';
import cx from 'classnames';
import styles from './ProductListView.module.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'

// const data = this.props.products;

const stateCheckedBoxes = {
    // id: '',
    checkedBoxes:[]
    // redirect: false
}


class ProductListView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            // checkedBoxes:[],
            redirect: false
        }
    }


    // componentDidMount() {
    //     // this.props.actions.loadProducts();
    //     console.log("stateee: "+state.checkedBoxes);
    // }

    productRedirect= (e,data) => {
        // console.log("redirect..");
        this.setState({id: data.code, redirect: true}, ()=> { console.log("pid:  "+this.state.id+" "+ this.state.redirect)})
    }
    
    handleCheckbox = (e, s) => {
        const checked = stateCheckedBoxes.checkedBoxes.includes(s)//this.props.product.code)
        // console.log("checked       :  "+ checked );
        const checkedBox = stateCheckedBoxes.checkedBoxes;
        if(!checked) {
            // console.log("checkedBox :  "+ checkedBox );
            checkedBox.push(s);
            // checkedBox.splice();
            // console.log("not include checkedBox :  "+ checkedBox );
        } else {
          const index = checkedBox.findIndex((ch)=> ch.code === s.code);
          checkedBox.splice(index, 1);
        //   console.log("include checkedBox :  "+ checkedBox );
        }
        
        // this.setState({checkedBoxes: checkedBox});
        stateCheckedBoxes.checkedBoxes = checkedBox;
        console.log("checked change:  "+ stateCheckedBoxes.checkedBoxes );
      }
    

// linktest(){
//     console.log("stateee: "+ state.checkedBoxes);
// }

render(){
    // console.log(this.state.redirect);
if(this.state.redirect) {
    console.log("come on ");
    return (
    <div>
        <Link to={{
        pathname:`/products/${this.state.id}`, 
        id: this.state.id
        }}/>
        <Redirect to={`/products/${this.state.id}`}/>}
    </div>
    )
}
// if(){
//     return(
//         <Link to={{pathname:'/compare', state: state.checkedBoxes}}></Link>
//         <Redirect to={`/compare`}/>
//     )
// }
//<Redirect to={`/products/${this.state.productId}`} id = {this.state.productId}/>}
    return(
        <div className={styles.listView}>
           
            <div className={styles.dataCard} value={this.props.product.code} onClick={((e) => this.productRedirect(e, this.props.product))}>

                <div className={styles.verified}>Verified 08/21/2016</div>

                <div className = {styles.image}>
                    <img src={this.props.product.image} alt = "" className={styles.fan} />
                </div>

                <div className={styles.largeDataDiv}>
                    <div className={styles.largeDataLine}>{this.props.product.name}</div>
                    <div className={styles.largeDataLine}>{this.props.product.series}</div>
                    <div className={styles.largeDataLine}>{this.props.product.code}</div>
                </div>

                <div className={styles.strip}>
                    <div className={styles.listViewData}>{this.props.product.technical_data.airflow} CFM</div>
                    <div className={styles.listViewData}>{this.props.product.technical_data.power} W at max speed</div>
                    <div className={styles.listViewData}>{this.props.product.technical_data.noise} dBA at max speed</div>
                    <div className={styles.listViewData}>{this.props.product.technical_data.size} fan sweep diameter</div>
                </div>

                <div className={styles.pastSpecs}>
                    <div className={styles.pastSpecsLine}>Past specifications:</div>
                    <div className={styles.pastSpecsLine}>{this.props.product.past}</div>
                </div>
            
            </div>
            

            <div className={styles.compareAdd}>
                <div className={cx(globalStyles["custom-control"], globalStyles["custom-checkbox"])}>
                        <input type="checkbox"
                            onChange={(e) => this.handleCheckbox(e,this.props.product)}
                        />    
                    <Link to={{pathname:'/products', state: stateCheckedBoxes.checkedBoxes}}>               
                    <span>Compare</span></Link>    
                    {/* <input type="checkbox" className={cx(globalStyles["custom-control-input"], styles.customInput)} id={this.props.product.code} />
                    <label className={cx(globalStyles["custom-control-label"], styles.customLabel)} htmlFor={this.props.product.code}>Compare</label> */}
                </div>

                <div className={styles.addButton}>
                    <button className={cx(globalStyles.btn, globalStyles['btn-secondary'],
                        globalStyles['dropdown-toggle'], styles.Button)} type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add to &nbsp;&nbsp;
                    </button>
                </div>
                
            </div>
            {/* <Link to={{pathname:'/compare', state: this.state.checkedBoxes}}>
                    <button style={{float:"right"}}>Compare</button></Link> */}

            
            {/* <button onClick={this.linktest}>linktest</button> */}
            {/* <Redirect to={`/compare`}/> */}
        </div>
    )
    }

}

export default ProductListView;

// className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}