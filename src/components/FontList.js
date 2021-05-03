import Font from './Font'
const FontList = ({ fonts, text }) => {
  return (
    <div className="row">
      {fonts.map(el => { return < Font key={el.family} font={el} text={text} /> }
      )}
    </div>
  );
};

export default FontList;