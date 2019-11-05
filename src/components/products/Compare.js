import React, { Component } from 'react';
import styles from './Compare.module.css'
// import images from '../ProductList/images.jpeg'
// import { Link } from 'react-router-dom';
// import {searchPage}  from '../SearchPage/searchPage'
import { Container, Row, Col, Table } from 'react-bootstrap';
// import styled from 'styled-components';
import Header from '../Header';
import { Link } from 'react-router-dom';

class Compare extends Component {
    
    state={
        compareData : this.props.location.state
    }

    render() {
        console.log("compare state  "+ this.props)
        return(
            <div>
                
                <div>< Header /></div>
                
                <Container className={styles.container}>
                    <Row className={styles.table}>
                        <Col xs={3} className={styles.index}>
                                {/* <th style={{height: "80px"}}></th> */}
                                <tr style={{fontSize:"3em", fontWeight:"bold"}}>DESCRIPTION</tr>
                                <tr>Manufacturer</tr>
                                <tr>Series</tr>
                                <tr>Model</tr>
                                <tr className={styles.border} style={{fontSize:"3em", fontWeight:"bold"}}>TYPE</tr>
                                <tr>Use Type</tr>
                                <tr>Application</tr>
                                <tr>Mounting Location</tr>
                                <tr>Accessories</tr>
                                <tr>Model Year</tr>
                                <tr style={{height:"3em", fontSize:"3em", fontWeight:"bold"}}>TECHNICAL SPECIFICATIONS</tr>
                                <tr>Airflow(CFM)</tr>
                                <tr>Power(W)</tr>
                                <tr style={{height:"3em"}}>Operating Voltage(VAC)</tr>
                                <tr>Fan Speed(RFM)</tr>
                           
                        </Col>
                        {this.state.compareData.map(link=>{
                        return(
                        <Col xs={3}  className={styles.content}>
                            <th >
                            {/* <img className={styles.fan} alt="" src={require(`../productListView/${link.image}`)} width="80px" height="80px"/> */}
                            </th>
                            <tr>&nbsp;</tr>
                            <tr>{link.name}</tr>
                            <tr>{link.series}</tr>
                            <tr>{link.code}</tr>
                            <tr>&nbsp;</tr>
                            <tr>{link.technical_data.airflow}</tr>
                            <tr>{link.technical_data.power}</tr>
                            <tr>{link.technical_data.noise}</tr>
                            <tr>{link.technical_data.size}</tr>
                            <tr>{link.modelYear}&nbsp;</tr>
                            <tr style={{height:"3em"}} >&nbsp;</tr>
                            {/* <tr >&nbsp;</tr> */}
                            <tr>{link.airflow}&nbsp;</tr>
                            <tr><span style={{paddingRight:"1em",backgroundColor: "rgb(236, 231, 231)", marginRight: "1em"}}>Min</span> {link.powerMin} <span style={{paddingRight:"1em", backgroundColor: "rgb(236, 231, 231)", marginLeft: "1em"}}>Max</span> {link.powerMax}</tr>
                            <tr style={{height:"3em"}}><span style={{paddingRight:"1em", backgroundColor: "rgb(236, 231, 231)", marginRight: "1em"}}>Min</span> {link.pvMin} <span style={{paddingRight:"1em", backgroundColor: "rgb(236, 231, 231)", marginLeft: "1em"}}>Max</span> {link.pvMax}</tr>
                            <tr><span style={{paddingRight:"1em", backgroundColor: "rgb(236, 231, 231)", marginRight: "1em"}}>Min</span> {link.rpmMin} <span style={{paddingRight:"1em", backgroundColor: "rgb(236, 231, 231)", marginLeft: "1em"}}>Max</span> {link.rpmMax}</tr>

                        </Col>
                            )})}    
                    </Row>
                </Container>
                <Link to={{ 
                    pathname: '/products',
                    // state: { from: props.location } // or '/A' or '/B'
                }}
                > back </Link>
            </div>
            
        )
    }
}

export default Compare;