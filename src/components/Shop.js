import React from 'react';
import Title from './Title';
import Product from './Product';
import Card from './Card';
import { connect } from 'react-redux';
import { selectProducts } from '../selectors';

// ------------------------------------------------
// Shop : taking a list of product to display
// ------------------------------------------------

// mapping redux-state to props with selector, to use with connect();
const mapStateToProps = state => ({
    products: selectProducts(state), // selector : pour les données calculées ou non
});

// Another way to write
/*
function mapStateToProps(state) {
    return {
        products: selectProducts(state), // selector : pour les données calculées ou non
    }
}
*/

class Shop extends React.Component {
    render() {
        const items = this.props.products;
        const productList = items.map((product) =>
            <Product item={product} key={product.id} />
        );
        return (
            <React.Fragment>
                <Card className="card" >
                    <Title title="Shop" isSubtitle={true} />
                    <ul>{productList}</ul>
                </Card>
                <br />
            </React.Fragment>
        );
    }
}

// export default ==> ONE MUST HAVE NO NAMES 
// connector to map state props dispatch
export default connect(mapStateToProps)(Shop);
