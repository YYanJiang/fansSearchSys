function productsReducer(state = {loading: false, products: []}, action) {
    switch(action.type) {
        case 'LOADING_PRODUCTS':
            return { ...state, loading: true}
            case 'LOAD_PRODUCTS': 
              console.log(action.payload);
              return {loading: false, products: action.payload}

        default: 
            return state;
    }
}

export default productsReducer;