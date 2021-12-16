import React, { useEffect, useState, useCallback  } from 'react';
import Cards from '../components/Cards';

export default function Notes() {
  const [notes, setNotes] = useState(null)
  const [categories, setCategories] = useState(null)
  const fetchNotesJSON = useCallback(async () => {
    try {
      const response = await fetch('https://ms-portfolio.eu/wp-json/wp/v2/posts?per_page=100')
      return await response.json()
    } catch(error) {
      console.log(error)
      setTimeout(() => {
        fetchNotesJSON()
      }, 2500)
    }
  }, [])

  const fetchCategoriesJSON = useCallback(async () => {
    try {
      const response = await fetch('https://ms-portfolio.eu/wp-json/wp/v2/categories')
      return await response.json()
    } catch(error) {
      console.log(error)
      setTimeout(() => {
        fetchCategoriesJSON()
      }, 2500)
    }
  }, [])

  document.title = 'notes'

  useEffect(() => {
    fetchNotesJSON().then(data => {
      setNotes(data)
    })

    fetchCategoriesJSON().then(data => {
      setCategories(data)
    })
  }, [fetchNotesJSON, fetchCategoriesJSON])

  return (
    <div className='notes container'>
      <Cards cardsData={ notes } />
    </div>
  );
}
