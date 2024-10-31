import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
    const [book, setBooks] = useState({});
    const [loading, setLoading] = useState(true); // Set loading to true initially
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/books/${id}`)
            .then((response) => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="p-6 bg-gradient-to-r from-green-200 to-blue-300 rounded-xl">
            <BackButton />
            <h1 className="text-4xl font-bold my-4 text-center text-purple-700">Show Book</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex flex-col border-4 border-purple-400 rounded-xl w-fit p-4 shadow-lg bg-white">
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-600 font-semibold">Id:</span>
                        <span className="text-lg">{book._id}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-600 font-semibold">Title:</span>
                        <span className="text-lg">{book.title}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-600 font-semibold">Author:</span>
                        <span className="text-lg">{book.author}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-600 font-semibold">Publish Year:</span>
                        <span className="text-lg">{book.publishYear}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-600 font-semibold">Create Time:</span>
                        <span className="text-lg">{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-600 font-semibold">Last Update Time:</span>
                        <span className="text-lg">{new Date(book.updateAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowBook;
