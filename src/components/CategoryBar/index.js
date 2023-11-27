import "./index.css"

function CategoryBar(props) {
    const {handleCategoryChange, selectedCategory} = props

    const changeCategory = (category) => {
        handleCategoryChange(category)
    }

    return(
        <div className="categorybar-container">
            <button onClick={() => changeCategory("all")} className={selectedCategory === "all" ? "category-button" : "cta"}>
                <span>All News</span>
            </button>
            <button onClick={() => changeCategory("entertainment")} className={selectedCategory === "entertainment" ? "category-button" : "cta"}>
                <span>Entertainment</span>
            </button>
            <button onClick={() => changeCategory("sports")} className={selectedCategory === "sports" ? "category-button" : "cta"}>
                <span>Sports</span>
            </button>
            <button onClick={() => changeCategory("world")} className={selectedCategory === "global" ? "category-button" : "cta"}>
                <span>Global</span>
            </button>
            <button onClick={() => changeCategory("technology")} className={selectedCategory === "technology" ? "category-button" : "cta"}>
                <span>Technology</span>
            </button>
            <button onClick={() => changeCategory("health")} className={selectedCategory === "health" ? "category-button" : "cta"}>
                <span>Health</span>
            </button>
            <button onClick={() => changeCategory("regional")}  className={selectedCategory === "regional" ? "category-button" : "cta"}>
                <span>Regional</span>
            </button>
            <button onClick={() => changeCategory("finance")}  className={selectedCategory === "finance" ? "category-button" : "cta"}>
                <span>Finance</span>
            </button>
            <button onClick={() => changeCategory("politics")} className={selectedCategory === "politics" ? "category-button" : "cta"}>
                <span>Politics</span>
            </button>
            <button onClick={() => changeCategory("programming")} className={selectedCategory === "programming" ? "category-button" : "cta"}>
                <span>Programming</span>
            </button>
        </div>
    )
}

export default CategoryBar