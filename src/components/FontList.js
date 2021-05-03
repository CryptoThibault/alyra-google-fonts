import Font from './Font'
const FontList = ({ fonts }) => {
  return (
    <div className="row">
      {fonts.map(el => { return < Font font={el} /> }
      )}
    </div>
  );
};

export default FontList;