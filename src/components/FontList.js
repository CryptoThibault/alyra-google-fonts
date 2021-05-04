import Font from './Font'
const FontList = ({ fonts, text, size, filter ,count, setCount ,scale }) => {
  const handleClickCount = () =>{
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
          <button className="btn btn-danger" onClick={handleClickCount}>plus de fonts</button>
      </section>
    </div>
  );
};

export default FontList;