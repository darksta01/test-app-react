import React from 'react';
import Title from './Title';
import Card from './Card';
import Product from './Product';
import { connect } from 'react-redux';
import { selectWishes } from '../selectors';
import { resetWishlist } from '../actions';

const mapStateToProps = state => {
    const wishlist = selectWishes(state);

    return {
        wishlist,
        isWishlist: true,
        sum: wishlist.wishes.length > 0 ? wishlist.wishes.map((item) => item.price).reduce((state, nextVal) => state + nextVal) : 0,
    }
};

const mapDispatchToProps = {
    resetWishlist,
};

class Wishlist extends React.Component {
    render() {
        const items = this.props.wishlist.wishes;
        const somme = this.props.sum;
        const productList = items.map((product) =>
            <Product item={product} isWishlist={this.props.isWishlist} key={product.id} />
        );
        return (
            <React.Fragment>
                <Card className="card" >
                    <div className="titleWishlist">
                        <Title title={`Wishlist (${somme} €)`} isSubtitle={true} />
                        <button onClick={() => this.props.resetWishlist()}>Reset list</button>
                    </div>
                    {
                        //this.props.METHOD (pas juste METHOD) permet de faire appel a la methode
                    }
                    <br />
                    <ul>{productList}</ul>
                </Card>
                <br />
            </React.Fragment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
