import React, { useState } from 'react'
import Header from './components/Header'
import FontApp from './components/FontsApp'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <FontApp darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
