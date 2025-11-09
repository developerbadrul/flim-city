import { useState } from "react";
import { getImgUrl } from "../../utils/utils";
import Rating from "../UI/Rating";
import Tag from "./../../assets/tag.svg"
import MovieDetailsModal from "../MovieDetailsModal/MovieDetailsModal";


const Card = ({ movie }) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie)
        setShowModal(true)
    }

    const handleModalClose = () => {
        setSelectedMovie(null);
        setShowModal(false);
    }

    return (
        <>
            {
                showModal && (
                    <MovieDetailsModal
                        movie={selectedMovie}
                        onClose={handleModalClose}
                    />
                )
            }
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={() => handleMovieSelection(movie)}>
                    <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt="" />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating} />
                        </div>
                        <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#">
                            <img src={Tag} alt="tag" />
                            <span> ${movie.price} | Add to Cart</span>
                        </a>
                    </figcaption>
                </a>
            </figure>
        </>
    );
};

export default Card;