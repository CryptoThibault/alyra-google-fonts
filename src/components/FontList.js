import Font from './Font'
const FontList = ({ fonts, text, size }) => {
  return (
    <div className="col-lg-9">
      <h2 className="mb-3">
      <span className="badge bg-danger">Les plus récentes</span></h2>
      <section className="row mb-5">
        {fonts.map(el => { return < Font key={el.family} font={el} text={text} size={size} /> }
        )}
      </section>
    </div>
  );
};

export default FontList;