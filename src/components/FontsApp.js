import TrendingSelect from './TrendingSelect'
import FontList from './FontList'
import { useEffect, useState } from 'react';

const FontsApp = () => {
  const [fonts, setFonts] = useState([])
  const [error, setError] = useState("")
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789")
  const [filter, setFilter] = useState(["Les plus récentes", 'date'])
  const [size, setSize] = useState(20)

  useEffect(() => {
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_API_KEY}&sort=${filter[1]}`
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setFonts(data.items.slice(0,10))
      })
      .catch((e) => {
        setError(e.message)
      }
      )
  }, [filter])

  return (
    <div className="container min-vh-100">
      {!!error &&
        <div className="alert alert-danger mt-3 text-center" >{error}</div>
      }
      <div className="row my-5">
        <TrendingSelect
          filter={filter}
          setFilter={setFilter}
          text={text}
          setText={setText}
          size={size}
          setSize={setSize}
        />
        <FontList fonts={fonts} text={text} size={size} filter={filter} />
      </div>
    </div>
  );
};

export default FontsApp;