type ButtonProps = {
    onClick: () => void;
    text: string;
};

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className="mt-4 md:mt-2 bg-secondary-500 text-neutral-100 rounded-full px-6 py-3 font-bold font-roboto drop-shadow-md hover:bg-secondary-300 focus:bg-secondary-300 md:px-10 md:py-3"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default Button;