import TrendingSelect from './TrendingSelect'
import FontList from './FontList'
import { useEffect, useState } from 'react';

const FontsApp = () => {
  const [fonts, setFonts] = useState({})
  const [error, setError] = useState("")
  console.log(process.env.REACT_APP_GOOGLE_API_KEY)
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
        setFonts([data])
        console.log(data)
      })
      .catch((e) => {
        setError(e.message)
      }

      )
  },[])
  return (
    <div className="container">
      {!!error &&
        <div className="alert alert-danger mt-3 text-center" >{error}</div>
      }
      <TrendingSelect fonts={fonts} setFonts={setFonts} />
      {/*<FontList fonts={fonts} />*/}
    </div>
  );
};

export default FontsApp;