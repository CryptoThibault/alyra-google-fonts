import TrendingSelect from './TrendingSelect'
import FontList from './FontList'
import { useEffect, useState } from 'react';

const FontsApp = () => {
  const [fonts, setFonts] = useState([])
  const [error, setError] = useState("")
  useEffect(() => {
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.GOOGLE_API_KEY}`
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
        setFonts(data)
      })
      .catch((e) => {
        setError(e.message)
      }

      )
  })
  return (
    <div className="container">
      {!!error &&
        <div className="alert alert-danger mt-3 text-center" >{error}</div>
      }
      <TrendingSelect fonts={fonts} setFonts={setFonts} />
      <FontList fonts={fonts} />
    </div>
  );
};

export default FontsApp;