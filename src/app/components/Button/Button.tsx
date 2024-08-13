type ButtonProperties = {
  text: string;
  borderGradient?: boolean;
};

const Button = (props: ButtonProperties) => {
  const borderClass = props.borderGradient
    ? "gradient--border"
    : "hover:border-gray-light";

  return (
    <div
      className={`py-2 px-4 text-center bg-transparent border rounded-xl border-gray-dark text-gray-light active:bg-gray-light active:text-gray-dark cursor-pointer select-none ${borderClass}`}
    >
      {props.text}
    </div>
  );
};

export default Button;
