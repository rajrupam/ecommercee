import React from "react";
import CollectionReview from "../../components/collections/collection";

const ShopPage = ({ shopdatas }) => {
    return (
        <div>
            {shopdatas.map((category) => (
                <CollectionReview key={category.id} product={category} limitItems={true} />
            ))}
        </div>
    );
};

export default ShopPage;
