import Font from './Font'
const FontList = ({ fonts, text, size, filter, scale, count, setCount ,hasNext,loading}) => {
  const handleClickCount = () => {
    setCount(count + scale)
  }
  return (
    <div className="col-lg-9">
      <h2 className="mb-3">
        <span className="badge bg-danger">{filter.txt}</span>
      </h2>
      <section className="row mb-5">
        {fonts.map(el => { return < Font key={el.family} elFont={el} text={text} size={size} /> }
        )}
        <div className="col-lg-12">
        {loading ? <p>Loading....</p> 
        : fonts.length < hasNext 
        ? <button className="btn btn-danger" onClick={handleClickCount}>Afficher plus de polices</button>  
        : <button className="btn btn-danger" disabled>Il n'y a plus de polices à afficher</button>
        }
      </div>
      </section>
    </div>
  );
};

export default FontList;