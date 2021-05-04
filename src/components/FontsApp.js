import TrendingSelect from './TrendingSelect'
import FontList from './FontList'
import { useEffect, useState } from 'react';

const FontsApp = ({ darkMode }) => {
  const [fonts, setFonts] = useState([])
  const [error, setError] = useState("")
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789")
  const [filter, setFilter] = useState({ txt: "Les plus récentes", id: 'date' })
  const [size, setSize] = useState(20)

  useEffect(() => {
    document.body.className = darkMode ? "bg-dark text-light" : "bg-light"
  }, [darkMode])

  useEffect(() => {
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_API_KEY}&sort=${filter.id}`
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setFonts(data.items.slice(0, 10))
      })
      .catch((e) => {
        setError(e.message)
      }
      )
  }, [filter])

  return (
    <div className="container vin-vh-100">
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