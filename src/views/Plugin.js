import React, { useEffect, useState, useCallback  } from 'react';
import scrollToTop from '../utils/scrollToTop';
import Loader from '../components/Loader';

export default function Plugin() {
  const [content, setContent] = useState(null)

  const fetchPluginPageJSON = useCallback(async () => {
    try {
      const response = await fetch('https://ms-portfolio.eu/wp-json/wp/v2/pages/792')
      return await response.json()
    } catch(error) {
      console.log(error)
      setTimeout(() => {
        fetchPluginPageJSON()
      }, 2500)
    }
  }, [])

  useEffect(() => {
    document.title = 'gutenberg+'

    scrollToTop()
    fetchPluginPageJSON().then(data => {
      setContent(data)
    })
  }, [fetchPluginPageJSON])

  return (
    <div className='plugin container'>
      <Loader data={ content } />
      { content !== null &&
        <div className='container__content'>
          <div dangerouslySetInnerHTML={ { __html: content.content.rendered } }></div>
        </div>
      }
    </div>
  );
}
