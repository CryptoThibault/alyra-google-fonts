import Font from './Font'
const FontList = ({ fonts }) => {
  return (
    <div className="row">
      {fonts.map(el => { return < Font key={el.family} font={el} /> }
      )}
    </div>
  );
};

export default FontList;