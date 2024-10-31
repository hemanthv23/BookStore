import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-2xl transition duration-300 bg-white">
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg text-white font-bold">
                {book.publishYear}
            </h2>
            <h4 className="my-2 text-gray-500">{book._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-blue-500 text-2xl" />
                <h2 className="my-1 text-lg font-semibold">{book.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-blue-500 text-2xl" />
                <h2 className="my-1 text-lg font-semibold">{book.author}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <BiShow
                    className="text-3xl text-blue-800 hover:text-black cursor-pointer transition duration-200"
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800 hover:text-black transition duration-200" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black transition duration-200" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-black transition duration-200" />
                </Link>
            </div>
            {showModal && (
                <BookModal book={book} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default BookSingleCard;
