const Button = ({ text, variant = "primary" }) => {
  const baseStyle =
    "px-6 py-2 rounded-lg font-semibold transition duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
