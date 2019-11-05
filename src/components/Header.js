import React from 'react';
// import cx from 'classnames';
import SearchBar from './SearchBar';
// import styles from './Header.module.css';
// import globalStyles from './bootstrap.min.module.css';
import joole from './joole_meitu_5.png';
import "./Header.css";

const header = (props) => {

    return (
        <div className = "headerRow">
            <img className="logo" src ={joole} alt="" />   
            <SearchBar className = "searchBar"/>
            <button className = "userProfile">Project</button>
        </div>



        // <div className={cx(styles.headerContainer, globalStyles['container-fluid'])}>
        //     {/* <div className={cx(globalStyles.row, styles.headerRow)}>

        //         <div className={cx(globalStyles.col, globalStyles['col-sm-2'])}>
        //             <div className={cx(globalStyles['container-fluid'])}> */}
        //         <div className={cx(globalStyles.row, styles.logo)}
        //             style = {{width: "200px" ,height : "75px"}}>
        //             <img id = "logo" src ={joole} alt=""></img>   
        //         </div>
        //         {/* //     </div>
        //         // </div> */}

        //         <div >
        //             <SearchBar/>
        //         </div>
        //         <div className={cx(globalStyles.col, globalStyles['col-sm-2'])} style={{fontSize: '19px',float: "right"}}>Projects</div>
            
        // </div>
    )

}

export default header;

// onClick = { this.handleSearchClick }