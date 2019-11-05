import axios from 'axios';
// import fetch from 'isomorphic-fetch';

export function loadProducts() {
    return(dispatch) => {
        dispatch({type: "LOADING_PRODUCTS"});
        // return axios.get('http://localhost:3000/api/products')
        return axios.get('products.json')
        .then(response => {const products = response.data;
            console.log(products)
            if(!localStorage.getItem('products')) {
                localStorage.setItem('products', JSON.stringify(products))
            }
            return (dispatch({type: 'LOAD_PRODUCTS', payload: products}, 
            console.log("pdx: "+products)
            ))
        })
        .catch(error => console.log(error))
    }
}