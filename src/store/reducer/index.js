import { combineReducers } from 'redux';
import { wishlistReducer } from './wishlistReducer';
import { shopReducer } from './shopReducer';

export const reducer = combineReducers({
    wishlist: wishlistReducer,
    products: shopReducer,
});