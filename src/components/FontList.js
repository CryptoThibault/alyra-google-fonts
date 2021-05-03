import Font from './Font'
const FontList = ({ fonts }) => {
  return (
    <div className="row">
      {fonts.map(el => < Font font={el} />
      )}
    </div>
  );
};

export default FontList;