type ButtonProps = {
  text: string; // This prop expects a string
  onClick: () => void; // This prop expects a function that takes no arguments and returns nothing
};

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="text-xl border-2 rounded-md px-4 py-2 mt-2 md:mt-0 md:ml-2 hover:bg-gray-100 active:bg-gray-200 transition-all"
    >
      {props.text}
    </button>
  );
}

export default Button;
