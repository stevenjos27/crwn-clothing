import CategoryItem from "../category-item/category-item.component";

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            <h1>Test</h1>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
};

export default Directory;