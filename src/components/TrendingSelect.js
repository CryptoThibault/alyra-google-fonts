const TrendingSelect = ({ setFilter, text, setText, size, setSize }) => {
  const handleFilterChange = (e) => {
    setFilter({ txt: e.target.selectedOptions[0].textContent, id: e.target.value })
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
    <div className="col-lg-3 mb-4">
      <div style={{ 'position': 'sticky', 'top': '0px' }}>
        <label className="fw-bold mb-2" htmlFor="sort">Afficher des polices</label>
        <select key="sort" className="form-select mb-4" onChange={handleFilterChange}>
          <option value="date">Les plus récentes</option>
          <option value="popularity">Les plus populaires</option>
          <option value="trending">Top 10 trending</option>
        </select>
        <div className="mb-3">
          <label htmlFor="text" className="form-label fw-bold mb-3">Tapez votre texte</label>
          <textarea key="text" className="form-control" onChange={handleTextChange} defaultValue={text}></textarea>
        </div>
        <label htmlFor="range" className="form-label fw-bold mb-3">La taille des police</label>
        <input type="range" className="form-range" key="range" min="8" max="48" step="1" value={size} onChange={handleSizeChange}></input>
        
        <label className="d-block fw-bold">Polices par page</label>
        <div className="btn-group  my-3" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-danger" disabled={true}>10</button>
          <button type="button" className="btn btn-danger">50</button>
          <button type="button" className="btn btn-danger">100</button>
        </div>
      </div >
    </div>
  );
};

export default TrendingSelect;