import React from "react";
import './collections.scss';
import CollectionItem from "../collection-item/collection-item";
import { Link } from "react-router-dom";

const CollectionReview = ({ product, limitItems = false }) => {
   
    const displayedItems = limitItems ? product.items.slice(0, 4) : product.items;

    return (
        <div className="collection-preview">
            <Link to={`/shop/${product.routeName}`} key={product.id}>
                <h1>{product?.title}</h1>
            </Link>
            <div className="preview">
                {displayedItems.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CollectionReview;
