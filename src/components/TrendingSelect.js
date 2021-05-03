const TrendingSelect = ({ setFilter, text, setText, size, setSize }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    e.preventDefault()
  }
  const handleTextChange = (e) => {
    setText(e.target.value)
    e.preventDefault()
  }
  const handleSizeChange = (e) => {
    setSize(e.target.value)
    e.preventDefault()
  }

  return (
    <div className="row">
      <label>Afficher des polices</label>
      <select onChange={handleFilterChange} >
        <option value="date">Les plus récentes</option>
        <option value="popular">Les plus populaires</option>
        <option value="top">Top 10 trending</option>
      </select>
      <label>Tapez votre text</label>
      <textarea onChange={handleTextChange} defaultValue={text}></textarea>
      <label>La taille des police</label>
      <input type="range" onChange={handleSizeChange} value={size}></input>
    </div >
  );
};

export default TrendingSelect;