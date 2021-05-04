import TrendingSelect from './TrendingSelect'
import FontList from './FontList'
import { useEffect, useState } from 'react';

const FontsApp = ({ darkMode }) => {
  const [fonts, setFonts] = useState([])
  const [error, setError] = useState("")
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789")
  const [filter, setFilter] = useState({ txt: "Les plus récentes", id: 'date' })
  const [size, setSize] = useState(20)
  const [scale, setScale] = useState(10)
  const [count , setCount] = useState(scale)

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
        setFonts(data.items.slice(0, count))
      })
      .catch((e) => {
        setError(e.message)
      }
      )
  }, [filter,scale,count])

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
          setCount={setCount}
          scale= {scale}
          setScale={setScale}
        />
        <FontList 
          fonts={fonts} 
          text={text} 
          size={size} 
          filter={filter}
          scale={scale} 
          count={count}
          setCount={setCount}
        />
      </div>
    </div>
  );
};

export default FontsApp;