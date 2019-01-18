import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, RESET_WISHLIST } from '../../actions';

export const initialState = {
    wishes: [
        { id: "02", name: "Cuvée des trolls", alcohol: "8", price: 6 },
        { id: "03", name: "Paixdieux", alcohol: "10", price: 7 },
    ],
    //sum: 13,
};

// TODO : mettre en place une map plutot qu'une copie tableau
export const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            console.log(state, action)
            state.wishes = [...state.wishes, action.payload.product];
            // SURTOUT NE PAS FAIRE LES CALCULS ICI 
            // state.sum = state.sum + action.payload.product.price;
            console.log(state, action)
            return { ...state }; // reconstruction objet state immutable
        case REMOVE_FROM_WISHLIST:
            console.log(state, action)
            state.wishes = state.wishes.filter(product => product.id !== action.payload.productId);
            //  state.sum = state.wishes.map((item) => item.price).reduce(); stupide ici, mais pq ca ne marche pas ? 
            // SURTOUT NE PAS FAIRE LES CALCULS ICI 
            // state.sum = state.sum - action.payload.price;
            console.log(state, action)
            return { ...state };
        case RESET_WISHLIST:
            state.wishes = [];
            // state.sum = 0;
            console.log(state, action)
            return { ...state };
        default:
            return state;
    }
};

