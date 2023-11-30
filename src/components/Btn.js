export default Btn = ({ name, func, children, style, disabled }) => {
  return (
    <button
      className={`cursor-pointer border-none ${style}`}
      onClick={func}
      disabled={disabled}>
      {name}
      {children}
    </button>
  );
};
