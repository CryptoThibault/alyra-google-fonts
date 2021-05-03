import GoogleFontLoader from 'react-google-font-loader';

const Font = ({ font, text, size }) => {
  return (
    <article className="col-lg-6 mb-4">
      <div className="shadow-sm border p-3 h-100">
        <h2 className="h6 d-flex aling-items-center justify-content-between">
          <span>{font.family}</span><small>{font.variants.length} variant(s)</small></h2>
        <p><span className="badge bg-dark">{font.category}</span></p>
        <p style={{ 'fontFamily': `${font.family}`, 'fontSize': `${size}` }} className="sample">{text}</p>
        <a rel="noopener noreferrer" target="_blank" className="text-danger" href={`https://fonts.google.com/specimen/${font.family}`}>Voir sur Google Fonts (ouvre un nouveau tab)</a>
      </div>
    </article>
  );
};

export default Font;