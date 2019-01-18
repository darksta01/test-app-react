import React from 'react';
import { addWishlist, removeWishlist } from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = {
    addWishlist,
    removeWishlist,
};

class Product extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <React.Fragment>
                <li>
                    {item.name} ({item.alcohol}°C) - {item.price} €
                    <br />
                    {this.props.isWishlist
                        ?
                        <button onClick={() => this.props.removeWishlist(item.id, item.price)}>Remove from wishlist</button>
                        :
                        <button onClick={() => this.props.addWishlist(item)}>Add to wishlist</button>
                    }
                </li>
                <br />
            </React.Fragment >
        );
    }
}

export default connect(null, mapDispatchToProps)(Product)