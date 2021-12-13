import React from 'react'
import { Link } from "react-router-dom";

export default function Cards(props) {
  if (props.cardsData !== null) {
    return (
      <div className='card__cards'>
        {
          Object.values(props.cardsData).map((card, index) =>
            <Link className="card__single" to={ '/post?id=' + card.id } key={ index }>
            { console.log(card) }
              <figure className="card__image">
                <img src={ card.better_featured_image.media_details.sizes.medium_large.source_url } />
              </figure>
              <div className="card__body">
                <div className="card__tags">
                  {
                    Object.values(card.better_category_name.categories).map((category, index) =>
                      <span className="card__tag" data-category={ category.slug } key={ index }>{ category.name }</span>
                    )
                  }
                </div>
                <h4 className='card__title' dangerouslySetInnerHTML={ { __html: card.title.rendered } }></h4>
                <div className='card__excerpt' dangerouslySetInnerHTML={ { __html: card.excerpt.rendered } }></div>
              </div>
            </Link>
          )
        }
      </div>
    )
  } else {
    return null
  }
}
