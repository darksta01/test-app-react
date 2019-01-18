
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const addWishlist = (product, amount) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: {
            amount,
            product,
        },
    };
};

export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const removeWishlist = (productId, price) => (
    {
        type: REMOVE_FROM_WISHLIST,
        payload: {
            productId,
            price,
        },
    });

export const RESET_WISHLIST = 'RESET_WISHLIST';
export const resetWishlist = () => ({ type: RESET_WISHLIST });
