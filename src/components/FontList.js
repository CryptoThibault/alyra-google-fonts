import Font from './Font'
const FontList = ({ fonts, text, size, filter }) => {
  console.log(filter[0])
  return (
    <div className="col-lg-9">
      <h2 className="mb-3">
        <span className="badge bg-danger">{filter[0]}</span>
      </h2>
      <section className="row mb-5">
        {fonts.map(el => { return < Font key={el.family} elFont={el} text={text} size={size} /> }
        )}
      </section>
    </div>
  );
};

export default FontList;