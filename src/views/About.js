import React, { useEffect, useState, useCallback  } from 'react';

export default function About() {
  const [content, setContent] = useState(null)
  const fetchAboutPageJSON = useCallback(async () => {
    try {
      const response = await fetch('https://ms-portfolio.eu/wp-json/wp/v2/pages/22')
      return await response.json()
    } catch(error) {
      console.log(error)
      setTimeout(() => {
        fetchAboutPageJSON()
      }, 2500)
    }
  }, [])

  useEffect(() => {
    document.title = 'about'

    fetchAboutPageJSON().then(data => {
      setContent(data)
    })
  }, [fetchAboutPageJSON])

  return (
    <div className='about container'>
      { content !== null &&
      <>
        <div dangerouslySetInnerHTML={ { __html: content.content.rendered } }></div>
        <h5>Technology</h5>
      </>
      }
    </div>
  );
}
