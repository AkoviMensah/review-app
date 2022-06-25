import { createContext, useState, useEffect } from "react";

const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

    }, []);


    const fetchReviews = async () => {  
        const response = await fetch('/reviews?_sort=id&_order=desc');
        const data = await response.json();
        setReviews(data);
        setIsLoading(false);
    }

    return (
        <ReviewsContext.Provider value={{
            reviews,
            isLoading
        }}>
            {children}
        </ReviewsContext.Provider>
    )

}

export default ReviewsContext;