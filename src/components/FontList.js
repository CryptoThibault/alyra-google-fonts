import Font from './Font'
const FontList = ({ fonts, text, size, filter, scale, count, setCount }) => {
  const handleClickCount = () => {
    setCount(count + scale)
  }
  console.log(hasNext)
  console.log(fonts.length)
  return (
    <div className="col-lg-9">
      <h2 className="mb-3">
        <span className="badge bg-danger">{filter.txt}</span>
      </h2>
      <section className="row mb-5">
        {fonts.map(el => { return < Font key={el.family} elFont={el} text={text} size={size} /> }
        )}
        <button className="btn btn-danger" onClick={handleClickCount}>Afficher plus de polices</button>
      </section>
    </div>
  );
};

export default FontList;