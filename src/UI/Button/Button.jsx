import "./button.scss";

const Button = ({
  children,
  style = {},
  onClick = () => {},
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`my-button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
