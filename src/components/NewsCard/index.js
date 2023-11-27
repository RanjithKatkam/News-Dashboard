/* eslint-disable jsx-a11y/img-redundant-alt */
import "./index.css"

function NewsCard(card){
    const {title, description, image, author, published, url } = card.card
    const displayImage = image !== "None" ? image : "https://static.vecteezy.com/system/resources/previews/000/228/739/original/news-report-concept-background-design-vector.jpg"
    const date = new Date(published)

    const formattedDate = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return(
        <div className="card-main-container">
            <div className="image-container">
                <img className="news-image" src={displayImage} alt="Image" />
            </div>
            <div className="description-container">
                <h1 className="title">{title}</h1>
                <p className="publishedTime"><span style={{"font-weight": "bold", "color": "#534949"}}>Short</span> by {author} / {formattedDate}</p>
                <p className="description">{description}</p>
                <a className="read-more" href={url}>Read More</a>
            </div>
        </div>
    )
}

export default NewsCard