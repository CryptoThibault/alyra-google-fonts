import Font from './Font'
const FontList = ({ fonts, text, size, filter }) => {
  return (
    <div className="col-lg-9">
      <h2 className="mb-3">
        <span className="badge bg-danger">{filter.txt}</span>
      </h2>
      <section className="row mb-5">
        {fonts.map(el => { return < Font key={el.family} elFont={el} text={text} size={size} /> }
        )}
          <button className="btn btn-danger dBlock col-6-lg">plus de fonts</button>
      </section>
    </div>
  );
};

export default FontList;