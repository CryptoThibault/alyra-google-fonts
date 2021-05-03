import GoogleFontLoader from 'react-google-font-loader';

const Font = ({ elFont, text, size }) => {
  return (<>
  <GoogleFontLoader
      fonts={[
        {
          font: `${elFont.family}`,
      
        }
      ]}
    />
    <article className="col-lg-6 mb-4">
      <div className="shadow-sm border p-3 h-100">
        <h2 className="h6 d-flex aling-items-center justify-content-between">
          <span>{elFont.family}</span><small>{elFont.variants.length} variant(s)</small></h2>
        <p><span className="badge bg-dark">{elFont.category}</span></p>
        <p style={{ fontFamily: `${elFont.family}`, 'fontSize': `${size}` }} className="sample">{text}</p>
        <a rel="noopener noreferrer" target="_blank" className="text-danger" href={`https://fonts.google.com/specimen/${elFont.family}`}>Voir sur Google Fonts (ouvre un nouveau tab)</a>
      </div>
    </article>
    </>
  );
};

export default Font;