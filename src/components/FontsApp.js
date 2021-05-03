import TrendingSelect from './TrendingSelect'
import FontList from './FontList'
import { useEffect, useState } from 'react';

const FontsApp = () => {
  const [fonts, setFonts] = useState([])
  const [error, setError] = useState("")
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789")
  const [filter, setFilter] = useState("default")
  const [size, setSize] = useState(20)

  useEffect(() => {
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setFonts(data.items)
      })
      .catch((e) => {
        setError(e.message)
      }
      )
  }, [])

  return (
    <div className="container">
      {!!error &&
        <div className="alert alert-danger mt-3 text-center" >{error}</div>
      }
      <TrendingSelect
        filter={filter}
        setFilter={setFilter}
        text={text}
        setText={setText}
        size={size}
        setSize={setSize}
      />
      <FontList fonts={fonts} text={text} />
    </div>
  );
};

export default FontsApp;