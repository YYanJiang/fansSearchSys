import React, { Component } from 'react';
import Header from '../Header';
import styles from './ProductDetail.module.css';
import * as actions from '../../actions/productActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Table, tr, td } from 'react-bootstrap';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'

class ProductsPage extends Component {

    constructor(props) {
        super(props);
        // console.dir(props);
        this.state = {
            image: "",
            name: "", 
            series: "", 
            code: "",
            technical_data: {},
            past: "",
            data:{
                manufacturer:"manufacturer",
                series: "series",
                model: "model",
                use_type: "use_type",
                application: "application",
                mountingLocation: "mountingLocation",
                accessories:"accessories",
                modelYear:"modelYear",
                powerMin:"powerMin",
                powerMax:"powerMax",
                pvMin:"pvMin",
                pvMax:"pvMax",
                rpmMin:"rpmMin",
                rpmMax:"rpmMax",
                fanSpeed:"fanSpeed",
                soundMaxSpeed:"soundMaxSpeed",
                heightMin:"heightMin",
                heightMax:"heightMax",
                weight:"weight"
            },
            // valid: true,
            isAuthed: false
        }
    }

    // loginClick = (event) => {
    //     event.preventDefault()
    //     console.log("Login clicked!");
    //     this.setState({
    //         username: event.target.username,
    //         password: event.target.password
    //     })
    //     // console.log(this.state);
    //     // console.log(this.props.users);
    //     this.authUser();
    //     event.target.reset();
    // }

    // authUser = () => {
        // let loggedUser = {username: this.state.username, password: this.state.password};
    //     let id = this.props.match.params;
    //     // console.log("userName"+loggedUser.username)
    //     // let users = this.props.users;
    //     let code = this.props.code;
    //     // console.log("user0Name"+users[0].username)
    //     for(let prdx of code) {
    //         if( id === prdx ) {
    //             this.setState({isAuthed: true},
    //             sessionStorage.setItem('currentUser', JSON.stringify(id))
    //             );
    //             // alert("Login successful!")
    //             return
    //         }
    //     }
    //     // alert("Please enter vaid credentials!");
    //     return
    // }

    componentDidMount() {
        
        this.props.actions.loadProducts();
        // console.log("csmp:  "+ this.props.products)
        // let id = this.props.match.params;
        // let id = this.props.id;
        let id = this.props.match.params.id;
        let products = this.props.products;
        
        for(let product of products) {
            console.log("code:  "+ product.code);
            console.log("id:  "+ id);
            if( id === product.code ) {
                this.setState({image: product.image,
                name: product.name, 
                series: product.series, 
                code: product.code,
                technical_data: product.technical_data,
                past: product.past,
                isAuthed: true},
                sessionStorage.setItem('currentUser', JSON.stringify(id))
                );
                return
            }
        }
        // return
    }

    render() {
        // console.log("products: "+this.props.products)
        // const renderProducts = this.props.products.map((product) => <ProductListView product={product} key={product.code} />)
        return (

            <div className={styles.allProducts}>
            
                <div>< Header /></div>

                <div className={styles.wrapper} style = { {marginLeft :"0px"}} >
                    <div className={styles.topLine} >
                        <span className={styles.mechanical} >Mechanical&nbsp;&nbsp;></span><span>&nbsp;&nbsp;HVAC Fans</span>
                    </div>

                    <div className = {styles.image} >
                        <img src={this.state.image} alt = "" />
                        <span style ={{ float: "left", marginLeft: "5%"}} > {this.state.name} &nbsp;&nbsp;> {this.state.series} &nbsp;&nbsp;> {this.state.code}     {this.state.technical_data.size}</span>
                    </div>


                <div className={styles.thirdPart}>
                     <a href = "#productSummary">Product Summary  </a>
                     <a href = "#productDetails">Product Details  </a>
                     <a href = "#productDocumentation">Product Documentation  </a>
                     <a href = "#contact">Contact</a>
                </div>

                <div className={styles.fourthPart}>
                    <span id = "#productSummary" className={styles.title}>Product Summary</span>
                {/* </div>
                <div></div> */}
                <Container className={styles.container} >
                    <Row>
                    <Col>
                        <Row>
                            <Table className={styles.table1}>
                                <tr className={styles.tr1}>
                                    <th>DESCRIPTION</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Manufacturer</td>
                                    <td>{this.state.name}</td>
                                </tr>
                                <tr>
                                    <td>Series</td>
                                    <td>{this.state.series}</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>{this.state.data.model}</td>
                                </tr>
    
                                <tr className={styles.tr1} >
                                    <th>TYPE</th>
                                    <td></td>
                                </tr>  
                                <tr>
                                    <td>Use Type</td>
                                    <td>{this.state.data.use_type}</td>
                                </tr>
                                <tr>
                                    <td>Application</td>
                                    <td>{this.state.data.application}</td>
                                </tr>
                                <tr>
                                    <td>Mounting Location</td>
                                    <td>{this.state.data.mountingLocation}</td>
                                </tr>
                                <tr>
                                    <td>Accessories</td>
                                    <td>{this.state.data.accessories}</td>
                                </tr>
                                <tr>
                                    <td>Model Year</td>
                                    <td>{this.state.data.modelYear}</td>
                                </tr>
                        </Table>        
                        </Row>
                     </Col>
                     <Col>
                            <Table className={styles.table1}>
                                <tr className={styles.tr1}>
                                <th>Technical Specifications</th>
                                <td style={{backgroundColor: "white"}}></td>
                                <td style={{backgroundColor: "white"}}></td>
                                <td style={{backgroundColor: "white"}}></td>
                                <td style={{backgroundColor: "white"}}></td>
                                </tr>
                                <tr>
                                    <td>Airflow(CFM)</td>
                                    <td>{this.state.data.airflow}</td>
                                    <td style={{backgroundColor: "white"}}></td>
                                    <td style={{backgroundColor: "white"}}></td>
                                    <td style={{backgroundColor: "white"}}></td>
                                </tr>
                                <tr>
                                    <td>Power(W)</td>
                                    <td style={{backgroundColor: "rgb(235, 232, 232)"}}>Min</td>
                                    <td style={{backgroundColor: "white"}}>{this.state.data.powerMin}</td>
                                    <td style={{backgroundColor: "rgb(235, 232, 232)"}}>Max</td>
                                    <td style={{backgroundColor: "white"}}>{this.state.data.powerMax}</td>
                                </tr>
                                <tr>
                                    <td>Operating voltage(VAC)</td>
                                    <td style={{backgroundColor: "rgb(235, 232, 232)"}}>Min</td>
                                    <td style={{backgroundColor: "white"}}>{this.state.data.pvMin}</td>
                                    <td style={{backgroundColor: "rgb(235, 232, 232)"}}>Max</td>
                                    <td style={{backgroundColor: "white"}}>{this.state.data.pvMax}</td>
                                </tr>
                                <tr>
                                    <td>Fan speed(RPM)</td>
                                    <td style={{backgroundColor: "rgb(235, 232, 232)"}}>Min</td>
                                    <td style={{backgroundColor: "white"}}>{this.state.data.rpmMin}</td>
                                    <td style={{backgroundColor: "rgb(235, 232, 232)"}}>Max</td>
                                    <td style={{backgroundColor: "white"}}>{this.state.data.rpmMax}</td>
                                </tr>
                                <tr>
                                    <td>Number of fan speeds</td>
                                    <td>{this.state.data.fanSpeed}</td>
                                    <td style={{backgroundColor: "white"}}></td>
                                    <td style={{backgroundColor: "white"}}></td>
                                    <td style={{backgroundColor: "white"}}></td>
                                </tr>
                                <tr>
                                    <td>Sound at max speed(dBA)</td>
                                    <td>{this.state.data.soundMaxSpeed}</td>
                                    <td style={{backgroundColor: "white"}}></td>
                                    <td style={{backgroundColor: "white"}}></td>
                                    <td style={{backgroundColor: "white"}}></td>
                                </tr>
                                <tr>
                                    <td>Fan sweep diameter(in)</td>
                                    <td>{this.state.data.fanSpeed}</td>
                                    <td style={{backgroundColor: "white"}}></td>
                                    <td style={{backgroundColor: "white"}}></td>
                                    <td style={{backgroundColor: "white"}}></td>
                                </tr>
                                <tr>
                                    <td>Height(in)</td>
                                    <td style={{backgroundColor: "rgb(235, 232, 232)"}}>Min</td>
                                    <td style={{backgroundColor: "white"}}>{this.state.data.heightMin}</td>
                                    <td style={{backgroundColor: "rgb(235, 232, 232)"}}>Max</td>
                                    <td style={{backgroundColor: "white"}}>{this.state.data.heightMax}</td>
                                </tr>
                                <tr>
                                    <td>Weight(lbs)</td>
                                    <td>{this.state.data.weight}</td>
                                    <td style={{backgroundColor: "white"}}></td>
                                    <td style={{backgroundColor: "white"}}></td>
                                    <td style={{backgroundColor: "white"}}></td>
                                </tr>
                            </Table>
                        
                     </Col>
                     </Row>
                     <Row>
                        <span id ="productDetails" className={styles.title2}>Product Details</span>
                         <Table className={styles.table2}>
                         <tr className={styles.tr1}>
                            <th>SERIES INFOMATION</th>
                            </tr>
                            <tr style={{fontSize:"13px", backgroundColor: "rgb(235, 232, 232)"}}>Airfoils - Moso bamboo - 60" diameter</tr>
                            <tr style={{fontSize:"13px"}}>Airfoils Finishes - Caramel Bamboo or Cocoa Bamboo</tr>
                            <tr style={{fontSize:"13px", backgroundColor: "rgb(235, 232, 232)"}}>Airfoils - Moso bamboo - 60" diameter</tr>
                            <tr style={{fontSize:"13px"}}>Airfoils Finishes - Caramel Bamboo or Cocoa Bamboo</tr>
                            <tr style={{fontSize:"13px", backgroundColor: "rgb(235, 232, 232)"}}>Airfoils - Moso bamboo - 60" diameter</tr>
                            <tr style={{fontSize:"13px"}}>Airfoils Finishes - Caramel Bamboo or Cocoa Bamboo</tr>
                            <tr style={{fontSize:"13px", backgroundColor: "rgb(235, 232, 232)"}}>Airfoils - Moso bamboo - 60" diameter</tr>
                            <tr style={{fontSize:"13px"}}>Airfoils Finishes - Caramel Bamboo or Cocoa Bamboo</tr>
                            <tr style={{fontSize:"13px", backgroundColor: "rgb(235, 232, 232)"}}>Airfoils - Moso bamboo - 60" diameter</tr>
                            <tr style={{fontSize:"13px"}}>Airfoils Finishes - Caramel Bamboo or Cocoa Bamboo</tr>
                            <tr style={{fontSize:"13px", backgroundColor: "rgb(235, 232, 232)"}}>Airfoils - Moso bamboo - 60" diameter</tr>
                            {/* <tr style={{fontSize:"13px"}}>Airfoils Finishes - Caramel Bamboo or Cocoa Bamboo</tr>
                            <tr style={{fontSize:"13px", backgroundColor: "rgb(235, 232, 232)"}}>Airfoils - Moso bamboo - 60" diameter</tr>
                            <tr style={{fontSize:"13px"}}>Airfoils Finishes - Caramel Bamboo or Cocoa Bamboo</tr> */}
                         </Table>
                     </Row>
                 </Container>
                 </div>

                </div> 
                {/* <button onClick = {{}}>back</button>
                <Redirect to={`/products/`}/> */}
                <Link to={{ 
                    pathname: '/products',
                    // state: { from: props.location } // or '/A' or '/B'
                }}> back </Link>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log("map:  "+state.products.products)
    return {
        products: state.products.products
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);