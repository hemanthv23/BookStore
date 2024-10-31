import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = "/" }) => {
    return (
        <div className="flex">
            <Link
                to={destination}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg w-fit shadow-lg hover:bg-purple-700 transition duration-200"
            >
                <BsArrowLeft className="text-2xl" />
            </Link>
        </div>
    );
};

export default BackButton;
