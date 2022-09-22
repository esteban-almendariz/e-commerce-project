
import CategoryItem from "./CategoryItem";
import "./CategoryMenu.scss";


const CategoryMenu = ({ category }) => {


    return (
        <div className="categories-container">
            {
                category.map((category) => (
                    <CategoryItem
                        key={category.id}
                        category={category}
                    />
                ))
            }
        </div>
    )
}

export default CategoryMenu;