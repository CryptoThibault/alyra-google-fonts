import TrendingSelect from './TrendingSelect'
import FontList from './FontList'
import { useEffect, useState } from 'react';

const FontsApp = () => {
  const [fonts, setFonts] = useState([])
  const [error, setError] = useState("")
  const [filter, setFilter] = useState(JSON.parse(localStorage.getItem('filter')) || { txt: "Les plus récentes", id: 'date' })
  const [text, setText] = useState(JSON.parse(localStorage.getItem('text')) || "Portez ce vieux whisky au juge blond qui fume !? 0123456789")
  const [size, setSize] = useState(JSON.parse(localStorage.getItem('size')) || 20)
  const [scale, setScale] = useState(JSON.parse(localStorage.getItem('scale')) || 10)
  const [count, setCount] = useState(scale)
  const [loading, setLoading] = useState(false)
  const [hasNext, setHasNext] = useState("")

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter))
  }, [filter])

  useEffect(() => {
    localStorage.setItem('text', JSON.stringify(text))
  }, [text])

  useEffect(() => {
    localStorage.setItem('size', JSON.stringify(size))
  }, [size])

  useEffect(() => {
    setCount(scale)
    localStorage.setItem('scale', JSON.stringify(scale))
  }, [scale])

  useEffect(() => {
    setLoading(true)
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
        setHasNext(data.items.length)
      })
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [filter, count])

  return (
    <div className="container min-vh-100">
      <div className="row my-5">
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
          scale={scale}
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
          hasNext={hasNext}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default FontsApp;