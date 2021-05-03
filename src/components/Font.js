const Font = ({ font }) => {
  return (
    <div key={font.family}>
      {font.family}
    </div>
  );
};

export default Font;