import { combineReducers } from 'redux';
import productsReducer from './products_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer
})

export default rootReducer;