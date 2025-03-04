import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryContainer, Title } from './category.styles';

import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {
    const { category } = useParams();
    console.log('render/re-rendering of Category component');
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log('useEffect fired of Category component');
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;