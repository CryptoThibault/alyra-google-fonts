import Font from './Font'
const FontList = ({ fonts, text, size }) => {
  return (
    <div className="row">
      {fonts.map(el => { return < Font key={el.family} font={el} text={text} size={size} /> }
      )}
    </div>
  );
};

export default FontList;