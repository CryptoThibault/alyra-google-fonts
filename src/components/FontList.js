import Font from './Font'

const FontList = ({ fonts }) => {
  return (
    <div className="row">
      {fonts.map(
        < Font />
      )}
    </div>
  );
};

export default FontList;