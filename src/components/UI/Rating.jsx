import Star from "./../../assets/star.svg"

const Rating = ({ value }) => {
    const stars = new Array(value).fill(Star)
    return (
        <>
            {
                stars.map((star, i) => <img key={i} src={Star} width="14" height="14" alt="star" />)
            }
        </>
    );
};

export default Rating;