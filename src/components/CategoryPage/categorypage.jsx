import React from "react";
import { useParams } from "react-router-dom";
import CollectionReview from "../collections/collection";

const CategoryPage = ({ shopdatas }) => {
    const { category } = useParams();

    const selectedCategory = shopdatas.find(
        (cat) => cat.routeName === category
    );

    if (!selectedCategory) {
        return <h2>Category Not Found</h2>;
    }

    return (
        <div>
            
            <CollectionReview product={selectedCategory} />
        </div>
    );
};

export default CategoryPage;
