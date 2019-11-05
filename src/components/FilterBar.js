import React, { Component } from 'react';
import styles from './FilterBar.module.css'
// import { Redirect } from 'react-router';
// import './FilterBar.css';
import ReactSlider from 'react-slider';
import styled from 'styled-components';
// import Slider from 'nw-react-slider';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const StyledSlider = styled(ReactSlider)`
    width: 80%;
    height: 3px;
    margin-left: 10%; 
`;

const StyledThumb = styled.div`
    height: 10px;
    line-height: 50px;
    width: 10px;
    margin:-3px
    text-align: center;
    background-color: #000;
    color: #000;
    border-radius: 50%;
    cursor: grab;
`;

const Thumb = (props, state) => <StyledThumb {...props} value = {state.valueNow} ></StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 1 ? '#000' : '#ddd'};

`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;


class SearchForm extends Component {
    
    // componentDidMount() {
    //     console.log("filterValue:   "+ this.props)
    //     // this.props.actions.loadRegisteredUsers(); 

    // }

    // handleOnChange = event => {
    //     const fanString = "HVAC fans".toLowerCase();
    //     this.setState({
    //       [event.target.name]: event.target.value
    //     });
    //     if(event.target.value === fanString.slice(0, event.target.value.length) && event.target.value.length > 0) {
    //         this.setState({clicked: true}, () => {console.log(this.state.valid)})
    //     } else {
    //         this.setState({clicked: false}, () => {console.log(this.state.valid)})
    //     }
    // }

    // handleSearchClick = () => {
    //     console.log("Search clicked")
    //     const clicked = this.state.clicked;
    //     this.setState({ clicked: !clicked }, () => { console.log(this.state) })
    // }

    // handleFansClick = () => {
    //     this.setState({redirect: true}, () => console.log(this.state.redirect))
    // }

    // renderRedirect = () => {
    //     if(this.state.redirect) {
    //         return <Redirect to='/products' />
    //     }
    // }

    // handleChange(){
    //     console.log('Change');
    //   }

    state = {
        data: [],
        filteredData: [],
        filter: [{title: 'Airflow(CFM)', defaultValue:[3000,7000], valueRange:[2000,10000]},
                {title: 'Max Power(W)', defaultValue:[20,80], valueRange:[0,100]},
                {title: 'Sound at max speed(dBA)', defaultValue:[20,80], valueRange:[0,100]},
                {title: 'Fan sweep diameter(in)', defaultValue:[20,80], valueRange:[0,100]},
                {title: 'Height(in)', defaultValue:[20,80], valueRange:[0,100]}],
        filter_copy: [{title: 'Airflow(CFM)', defaultValue:[3000,7000], valueRange:[2000,10000]},
                        {title: 'Max Power(W)', defaultValue:[20,80], valueRange:[0,100]},
                        {title: 'Sound at max speed(dBA)', defaultValue:[20,80], valueRange:[0,100]},
                        {title: 'Fan sweep diameter(in)', defaultValue:[20,80], valueRange:[0,100]},
                        {title: 'Height(in)', defaultValue:[20,80], valueRange:[0,100]}],
        filter2: [{title:'Firm', defaultValue:[0,10], valueRange:[0,10]},
                    {title:'Global', defaultValue:[0,1500], valueRange:[0,1500]}],  
        checkedBoxes: [],
        ModelYearMin : '',
        ModelYearMax : '',

    };
    save = () => {
        // this.setState({filter : filter_copy});
        // this.setState({data: data_copy});
        console.log(this.state.data);
        const data = [ ...this.state.data ];
        const filteredData = data.filter(el=>
            el.airflow>=this.state.filter[0].defaultValue[0] &&
            el.airflow<=this.state.filter[0].defaultValue[1] &&
            el.powerMax>=this.state.filter[1].defaultValue[0] &&
            el.powerMax<=this.state.filter[1].defaultValue[1] &&
            el.soundMaxSpeed>=this.state.filter[2].defaultValue[0] &&
            el.soundMaxSpeed<=this.state.filter[2].defaultValue[1] &&
            el.fanSweep>=this.state.filter[3].defaultValue[0] &&
            el.fanSweep<=this.state.filter[3].defaultValue[1] &&
            el.modelYear>=this.state.ModelYearMin &&
            el.modelYear<=this.state.ModelYearMax
            );
        // console.log(filteredData);
        this.setState({filteredData})
    }

    clear = () => {
        const copy_filter = [...this.state.filter_copy];
        this.setState({filteredData : this.state.data});
        this.setState({filter : copy_filter});
        this.setState({ModelYearMin:''});
        this.setState({ModelYearMax:''}); 
        console.log(this.state.filter[0].defaultValue)
    }
    
    handleChange = (value, index) => {
        const {filter} = this.state;
        this.setState({
            filter: [...filter.slice(0, index), {...filter[index], defaultValue: value}, ...filter.slice(index + 1)]
        })
      }

    handleModelYearMin = (e) => {
        this.setState({ModelYearMin:e.target.value});
    }

    handleModelYearMax = (e) => {
        this.setState({ModelYearMax:e.target.value});
    }

    render() {
        console.log("filterValue:   "+ this.props.index)
        return (
            <div className={styles.sidebar} data-testid="sidebar">
                {/* <button onClick = {((e)=> this.sendFilter(e,{Thumb}))}>save</button>
                <div className="attribute">
                    <p> Aitflow </p>
                        <StyledSlider
                            defaultValue={[30, 55]}
                            renderTrack={Track}
                            renderThumb={Thumb}
                            onChange = {((e)=> this.sendFilter(e,{Thumb}))}
                        />
                    
                </div>
                <div className="attribute">
                <p> Max power </p>
                    <StyledSlider
                        defaultValue={[50, 75]}
                        renderTrack={Track}
                        renderThumb={Thumb}
                    />
                </div>
                <div className="attribute">
                <p> Sound at max speed </p>
                    <StyledSlider
                        defaultValue={[0.2,0.4]}
                        renderTrack={Track}
                        renderThumb={Thumb}
                        min = {0}
                        max = {1}
                        step = {0.1}
                    >
                    </StyledSlider>
                </div> */}
                
                
                {/* <div className={styles.lefttable}> */}
                    <label className={styles.searchLabel}>Search: </label>
                    <button className={styles.button1} onClick={this.save}>Save</button>
                    <button className={styles.button1} onClick={this.clear}>Clear</button><br/>
                    <button className={styles.button2} >Product</button>  
                    <button className={styles.button2} >Project</button>  
                    <p className={styles.title}>  Product Type</p>
                    <p className={styles.smallFont}>Model year: <input onChange={this.handleModelYearMin} value={this.state.ModelYearMin} style={{width: "23%", height:"1.2em"}} type="text"/> - 
                    <input onChange={this.handleModelYearMax} value={this.state.ModelYearMax} style={{width: "23%", height:"1.2em"}} type="text"/></p>
                    <p className={styles.title}>Technical Specification</p>
                    
                    {this.state.filter.map((link, index)=>(
                        <div>
                            <p className={styles.smallFont}>{link.title}</p>
                            <div className={styles.selector}>
                                <input className={styles.minvalue} type="text" value={link.defaultValue[0]}/>
                                <div className={styles.slider}>
                                <StyledSlider
                                    defaultValue={link.defaultValue}
                                    renderTrack={Track}
                                    renderThumb={Thumb}
                                    min={link.valueRange[0]}
                                    max={link.valueRange[1]}
                                    onChange={(value) => this.handleChange(value, index)}
                                    value={link.defaultValue}
                                    /></div>
                                <input className={styles.maxvalue} type="text" value={link.defaultValue[1]}/>

                            </div>
                        </div>
                    ))}
                    <p className={styles.title}>Brand</p>
                    <p className={styles.title}>Past Selections</p>

                    {this.state.filter2.map(link=>(
                    <div>
                        <p className={styles.smallFont}>{link.title}</p>
                            <div className={styles.selector}>
                                <input className={styles.minvalue} type="text" value={link.defaultValue[0]}/>
                                    <div className={styles.slider}>
                                    <StyledSlider
                                        defaultValue={link.defaultValue}
                                        renderTrack={Track}
                                        renderThumb={Thumb}
                                        min={link.valueRange[0]}
                                        max={link.valueRange[1]}
                                        onChange={this.handleChange}
                                        value={link.defaulValue}
                                    /></div>
                                <input className={styles.maxvalue} type="text" value={link.defaultValue[1]}/>
                            </div>
                        </div>
                    ))}
                    <p className={styles.title}>Configurations</p>
                {/* </div> */}
                
            </div>
            
        );
    }
}



export default SearchForm;