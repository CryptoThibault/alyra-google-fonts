import TrendingSelect from './TrendingSelect'
import FontList from './FontList'
import { useState } from 'react';

const FontsApp = () => {
  const [fonts, setFonts] = useState([])
  return (
    <div className="container">
      <TrendingSelect fonts={fonts} setFonts={setFonts} />
      <FontList fonts={fonts} />
    </div>
  );
};

export default FontsApp;