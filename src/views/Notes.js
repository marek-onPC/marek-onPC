import React, { useEffect, useState, useCallback } from 'react';
import Cards from '../components/Cards';
import scrollToTop from '../utils/scrollToTop';
import Loader from '../components/Loader';

export default function Notes() {
  const [notes, setNotes] = useState(null)
  const [categories, setCategories] = useState(null)

  const fetchNotes = useCallback(() => {
    fetch('https://ms-portfolio.eu/wp-json/wp/v2/posts?per_page=100')
    .then(data => data.json())
    .then(data => {
      setNotes(data)
    })
    .catch((error) => {
      console.log(error)

      setTimeout(() => {
        fetchNotes()
      }, 2500)
    })
  }, [])

  const fetchCategories = useCallback(() => {
    fetch('https://ms-portfolio.eu/wp-json/wp/v2/categories')
    .then(data => data.json())
    .then(data => {
      setCategories(data)
    })
    .catch((error) => {
      console.log(error)

      setTimeout(() => {
        fetchCategories()
      }, 2500)
    })
  }, [])

  const fetchNotesByCategory = (e) => {
    setNotes(null)
    e.target.parentNode.childNodes.forEach(categoryPill => {
      categoryPill.classList.remove('active')
    });

    let categoryToLoad = e.target.getAttribute('data-category')

    if (categoryToLoad !== '1') {
      fetch('https://ms-portfolio.eu/wp-json/wp/v2/posts?per_page=100&categories=' + categoryToLoad)
      .then(data => data.json())
      .then(data => {
        setNotes(data)
        e.target.classList.add('active')
      })
      .catch((error) => {
        console.log(error)
  
        setTimeout(() => {
          fetchNotesByCategory(e)
        }, 2500)
      })
    } else {
      fetchNotes()
    }
  }

  useEffect(() => {
    document.title = 'notes'

    scrollToTop()
    fetchNotes()
    fetchCategories()
  }, [fetchNotes, fetchCategories])

  return (
    <div className='notes container'>
      { categories !== null ?
        <div className='pills category'>
          {
            Object.values(categories).map((category, index) =>
              <div className='pills__single' onClick={ fetchNotesByCategory } data-category={ category.id } key={ index }>{ category.name }</div>
            )
          }
        </div>
        :
        <div className='pills category'>
          <div className='pills__single skeleton'></div>
        </div>
      }
      <Loader type={ 'wide' } data={ notes } />
      { notes !== null &&
        <div className='container__content'>
          <Cards cardsData={ notes } />
        </div>
      }
    </div>
  );
}
